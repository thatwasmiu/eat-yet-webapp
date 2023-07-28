import { Layout, Button, Breadcrumb, Row, Col, theme } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import SideMenuBar from "./Side.menu.bar.component";
import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import TopNavBar from "./Nav.bar.component";
import { Route, Routes } from "react-router-dom";
import FoodMenuPage from "../module/menu/page/FoodMenu.page";


const LayoutPage = ({Page} : {Page? : any}) => {
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log(Page);

    return (
        <Layout>
            <TopNavBar></TopNavBar>
            <Layout>
                <SideMenuBar collapsed={collapsed} />
                <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                    />
                </Header>
                <Breadcrumb style={{ margin: '16px 16px 0 16px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                >
                    {Page}
                    
                </Content>
                </Layout>
          </Layout>
        </Layout>
        
      );
}

export default LayoutPage ;