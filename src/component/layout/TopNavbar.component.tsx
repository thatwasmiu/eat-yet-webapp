// import { MenuProps, Menu } from "antd";
import { Header } from "antd/es/layout/layout";


// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

const TopNavBar = () => {

    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }} >
            <div className="demo-logo" />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
        </Header>
    )
}

export default TopNavBar;