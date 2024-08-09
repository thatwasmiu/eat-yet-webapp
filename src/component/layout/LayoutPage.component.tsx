import { Layout } from "antd";
import SideMenuBar from "./SideMenuBar.component";
import TopNavBar from "./TopNavbar.component";

const LayoutPage = ({Page} : {Page? : JSX.Element}) => {

    return (
        <Layout>
            <TopNavBar></TopNavBar>
            <Layout>
                <SideMenuBar />

                    {Page}
                        
                
          </Layout>
        </Layout>
        
      );
}

export default LayoutPage ;