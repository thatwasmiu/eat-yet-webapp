//// Start copy

// ui element 
const registedSubject = [];
const customModal = document.createElement('dialog');
// customModal.style.width = "70%";
const body = document.querySelector('body');
const closeBtn = document.createElement('button');
const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset";
resetBtn.style.margin = "5px";
resetBtn.addEventListener('click', (e) => resetTable())
customModal.appendChild(resetBtn);
const tableData = document.createElement('table');
tableData.setAttribute('id', 'tbl');
closeBtn.textContent = "Close";
closeBtn.style.margin = "5px";
closeBtn.addEventListener('click', (e) => {
    customModal.close()
})
customModal.appendChild(tableData);
customModal.appendChild(closeBtn);
body.appendChild(customModal);

const tabl = document.getElementById('tbl');
const tHead = document.createElement('thead');
const tBody = document.createElement('tbody');
tabl.setAttribute('border', '1px solid');
tabl.appendChild(tHead);
tabl.appendChild(tBody);
const fieldTitles = ["Môn","Tổ", "Nhóm", "Số lượng", "Còn lại", "TKB", "Lựa chọn"]
const tHeadRow = document.createElement('tr');
tHead.appendChild(tHeadRow);


fieldTitles.forEach(function (field) {
    const tCol = document.createElement('td');
    tCol.innerHTML = field;
    tCol.style.padding = '5px';
    tCol.style.border = "1px solid";
    tHeadRow.appendChild(tCol);
});


// customModal.showModal();
function setupCourseRegistrationModal(data) {

    const fields = ['ma_mon', 'nhom_to', 'to', 'sl_cp', 'sl_cl', 'tkb'];
    for(let i = 0; i < data.length; i++) {
        const sbj = data[i];
        const tRow = document.createElement('tr');
        tBody.appendChild(tRow);
        fields.forEach(function (field) {
            const tCol = document.createElement('td');
            tCol.innerHTML = sbj[field];
            tCol.style.padding = '5px';
            tCol.style.border = "1px solid"
            tRow.appendChild(tCol);
        })
        const regisBtn = document.createElement('button');
        regisBtn.textContent = "Register";
        // regisBtn.disabled = !sbj.enable || !sbj.is_dk;
        regisBtn.addEventListener('click', (e) => {
            submitData(e, sbj.id_to_hoc, sbj.id_mon);
        })
        if (registedSubject.includes(sbj.id_to_hoc)) 
            regisBtn.disabled = true;
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener('click', () => {
            cancel(regisBtn, sbj.id_to_hoc)
        })
        const tCol = document.createElement('td');
        tCol.appendChild(cancelBtn);
        tCol.appendChild(regisBtn);
        tRow.appendChild(tCol); 
    }
}

/*** Get data api */
let dsdk;
let token;
const login = async () => {
    let formData = new FormData();
    formData.append('username', '2001040028');
    formData.append('password', 'THAYMATKHAUVAODAY');
    formData.append('grant_type', 'password');  
    const object1 = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
    }
    fetch('http://qldt.hanu.vn/api/auth/login', object1)
    .then((res) => res.json())
    .then(data => {
        token = data.access_token;   
        getSubject();
     });
}
login();
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
            dsdk = filterSubject(DSMON);
            setupCourseRegistrationModal(dsdk);
        });
}

function resetTable (data) {
    tBody.innerHTML = "";
    getSubject();
}


function submitData(e, idToHoc, idMon) {
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
            e.target.disabled = true;
            registedSubject.push(idToHoc);
        }
    }))  
}

function cancel(smbtn, idToHoc) {
    const structure = {
        filter : {
            id_to_hoc :idToHoc,
            is_checked : false,
            sv_nganh: 1
        }
    }
    console.log(smbtn);
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
        if (data.data.is_thanh_cong) {
            smbtn.disabled = false;
            var index = registedSubject.indexOf(idToHoc);
            if (index !== -1) {
                registedSubject.splice(index, 1);
            }
        }
    })) 
}
const filterSubject = (data) => {
    const filterName = ['61FIT4ATI', '61FIT4MLA', '61FIT4SPM', '61FIT3CGR'];
    const origin = data.filter(d => filterName.includes(d.ma_mon));
    const sublist = [];
    filterName.forEach(d => sortSubject(sublist, origin, d))
    return sublist;
}

const sortSubject = (filter, origin, key) => {
    for (let i = 0; i < origin.length; i++) {
        if (origin[i].ma_mon === key)
            filter.push(origin[i]);
    }
}
customModal.showModal();
//// copy to this line
