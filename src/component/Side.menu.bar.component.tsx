import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
  } from '@ant-design/icons';

const SideMenuBar = ({collapsed}: {collapsed: boolean}) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
    )
}

export default SideMenuBar;