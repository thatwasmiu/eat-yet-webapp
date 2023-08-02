import { Layout, Breadcrumb, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import SideMenuBar from "./SideMenuBar.component";
import TopNavBar from "./TopNavbar.component";

const LayoutPage = ({Page} : {Page? : JSX.Element}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <TopNavBar></TopNavBar>
            <Layout>
                <SideMenuBar />
                <Layout>
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