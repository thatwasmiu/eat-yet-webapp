import { useQuery } from "react-query";
import MarketPlaceService from "../../service/MarketPlace.service";
import { MarketPlace } from "../../model/Masterdata.model";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ContentLayout from "../../../component/layout/ContentLayout.component";
import FetchingDisplay from "../../../component/FetchingDisplay.component";

const MarketPlace = () => {
    const MarketQuery = useQuery("markets", MarketPlaceService.getLists);
    if (MarketQuery.data === undefined) return <FetchingDisplay {...MarketQuery}/>;
    const markets : MarketPlace[] = MarketQuery.data;

    return (
        <ContentLayout
            ContentPage={
                <>
                <Button><Link to={"./new"}>Add Market</Link></Button>
                {markets.map((m , i) => 
                
                    <Card key={i}>
                        <Row><Col><Link to={`./${m.id}`}>{m.name}</Link></Col></Row>
                    </Card>
                
                )}

                </>
            }
        />
    )
}

export default MarketPlace;