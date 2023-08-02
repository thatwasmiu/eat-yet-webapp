import { useQuery } from "react-query";
import MarketPlaceService from "../../service/MarketPlace.service";
import LoadingScrean from "../../../component/LoadingScreen.component";
import NotFoundPage from "../../../component/NotFoundPage.component";
import ErrorScreen from "../../../component/ErrorScreen.component";
import { MarketPlace } from "../../model/Masterdata.model";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const MarketPlace = () => {
    const MarketQuery = useQuery("markets", MarketPlaceService.getLists);
    if (MarketQuery.isLoading) return <LoadingScrean />;
    if (MarketQuery.isError) return <ErrorScreen />
    
    if (MarketQuery.data === undefined) return <NotFoundPage />;

    const markets : MarketPlace[] = MarketQuery.data;

    return (
        <>
        <Button><Link to={"./new"}>Add Market</Link></Button>
        {markets.map((m , i) => 
        
            <Card key={i}>
                <Row><Col>{m.name}</Col></Row>
            </Card>
        
        )}

        </>
    )
}

export default MarketPlace;