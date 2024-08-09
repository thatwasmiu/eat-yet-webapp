import { Layout, Breadcrumb, theme } from "antd";
import { Content } from "antd/es/layout/layout";

interface ContentLayoutProps {
    ContentPage? : JSX.Element,
    items?: any | undefined,
}

const ContentLayout = ({ContentPage, items} : ContentLayoutProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout style={{ marginLeft: 100 }}>
                <Breadcrumb style={{ margin: '16px 16px 0 16px' }} items={items} />
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                >
                    {ContentPage}
                    
                </Content>
            </Layout>
        </>
    )
}

export default ContentLayout;