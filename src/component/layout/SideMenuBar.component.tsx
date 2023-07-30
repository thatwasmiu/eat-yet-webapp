import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import {
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideMenuBar = () => {
  const [collapsed, setCollapse] = useState<boolean>(true);
  
  return (
      <Sider trigger={null} collapsible collapsed={collapsed}
        onMouseEnter={() => collapsed && setCollapse(collapsed => !collapsed)}
        onMouseLeave={() => !collapsed && setCollapse(collapsed => !collapsed)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/menu">Menu</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <NavLink to="/upsert">New Food</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
  )
}

export default SideMenuBar;