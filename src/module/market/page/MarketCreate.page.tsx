import { Button, Input } from "antd";
import { MarketPlace } from "../../model/Masterdata.model";
import MarketPlaceService from "../../service/MarketPlace.service";
import ErrorScreen from "../../../component/ErrorScreen.component";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import ContentLayout from "../../../component/layout/ContentLayout.component";

const breadcrumbItems = [
    {
        title: <Link to={"/markets"}>Markets</Link>
    },
    {
        title: 'Create'
    },
  ]

const MarketPlaceCreate = () => {
    const market : MarketPlace = {name: ""};
    const mutation = useMutation(MarketPlaceService.create, {
        onSuccess: (res) => {console.log(res)},
        onError: () => {() => <ErrorScreen />}
    })
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
        <ContentLayout
            items={breadcrumbItems}
            ContentPage={
                <>
                    <Button onClick={onSave}>Save</Button>
                    <Input id="market-name" placeholder="Market Name" allowClear onChange={onChange} />
                </>
            }
        />
    )
}

export default MarketPlaceCreate;