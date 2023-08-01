import { useParams } from "react-router-dom";
import MarketPlaceService from "../../service/MarketPlace.service";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { Button, Input } from "antd";
import { useMutation, useQuery } from "react-query";
import ErrorScreen from "../../../component/ErrorScreen.component";
import MarketPlace from "./Market.page";
import FetchingDisplay from "../../../component/FetchingDisplay.component";

const MarketEdit = () => {
    const { id } = useParams();
    if (typeof id !== "string") return <NotFoundPage />
    const MarketQuery = useQuery(["markets",id] , () => MarketPlaceService.getOneById);
    const mutation = useMutation(MarketPlaceService.upsert, {
        onSuccess: (res) => {console.log(res)},
        onError: () => {() => <ErrorScreen />}
    })
    FetchingDisplay(MarketQuery);
    if (MarketQuery.data === undefined) return <NotFoundPage />;

    const market : MarketPlace = MarketQuery.data
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "market-name") {
            market.name = elm.value;
            return;
        }
    }

    const onSave = () => {
        mutation.mutate(market)
    }
    
    return (
        <>
            <Button onClick={onSave}>Save</Button>
            <Input id="market-name" placeholder="Market Name" allowClear onChange={onChange} />
        </>
    )
}

export default MarketEdit;