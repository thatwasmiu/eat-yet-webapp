/** Đăng ký môn như sau ATI 01, MLA 02, SPM 02, CGR 03 */

const idIndex = [0, 5, 9, 14];

let SUBJECTS =[];
// const token = JSON.parse(sessionStorage.getItem("CURRENT_USER")).access_token;

function getSubject() {
    const data = "{\"is_CVHT\":false,\"additional\":{\"paging\":{\"limit\":8000,\"page\":1},\"ordering\":[{\"name\":\"\",\"order_type\":\"\"}]}}"
    const object2 = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token, 
        },
        body: data
    }

    fetch('http://qldt.hanu.vn/api/dkmh/w-locdsnhomto', object2)
        .then((res) => res.json())
        .then(data => {
            const DSMON = data.data.ds_nhom_to;
            SUBJECTS = filterSubjectId(DSMON);
        });
}

const filterSubjectId = (data) => {
    const filterName = ['61FIT4ATI', '61FIT4MLA', '61FIT4SPM', '61FIT3CGR'];
    const origin = data.filter(d => filterName.includes(d.ma_mon));
    const sublist = [];
    filterName.forEach(d => sortSubject(sublist, origin, d));
    return sublist;
}

// const sortSubject = (filter, origin, key) => {
//     for (let i = 0; i < origin.length; i++) {
//         if (origin[i].ma_mon === key)
//             filter.push(origin[i].id_to_hoc);
//     }
// }

getSubject();

const submitChain = () => {
    for (let i = 0; i < SUBJECTS.length; i++) {
        submitData()
    }
}

function submitData(idToHoc) {
    const structure = {
        filter : {
            id_to_hoc :idToHoc,
            is_checked : true,
            sv_nganh: 1
        }
    }
    const object2 = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token, 
        },
        body: JSON.stringify(structure)
    }
    fetch('http://qldt.hanu.vn/api/dkmh/w-xulydkmhsinhvien', object2)
    .then(res => res.json()
    .then(data => {
        console.log(data.data)
        if (data.data.is_thanh_cong) {
            
        }
    }))  
}