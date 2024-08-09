import { Link, useParams } from "react-router-dom";
import ContentLayout from "../../../component/layout/ContentLayout.component";
import NotFoundPage from "../../../component/NotFoundPage.component";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import { useQuery } from "react-query";
import MarketPlaceService from "../../service/MarketPlace.service";
import { Card, Row, Col, Button } from "antd";

const MarketPlaceView = () => {
    const { id } = useParams();
    if (!id) return <NotFoundPage />
    const MarketQuery = useQuery(["ingredient", id], () => MarketPlaceService.getOneById(id));
    if (MarketQuery.data === undefined) return <FetchingDisplay {...MarketQuery} />;
    const market = MarketQuery.data;
    const breadcrumbItems = [
        {
            title: <Link to={"/markets"}>Market Places</Link>
        },
        {
            title: market.name
        },
    ];
    
    return (
        <ContentLayout
            items={breadcrumbItems}
            ContentPage={
                <Card extra={<Link to={"./edit"}><Button>Edit</Button></Link>}>
                    <Row><Col>{market.name}</Col></Row>
                </Card>
            }
        />
    )
}

export default MarketPlaceView;