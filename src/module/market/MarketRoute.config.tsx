import { Route, Routes } from "react-router-dom";
import MarketPlace from "./page/Market.page";
import MarketPlaceCreate from "./page/MarketCreate.page";
import MarketPlaceView from "./page/MarketView.page";
import MarketEdit from "./page/MarketEdit.page";

const MarketRoute = () => {
    return (
        <>
        <Routes>
            <Route path="" element={<MarketPlace />} />
            <Route path="/new" element={<MarketPlaceCreate />} />
            <Route path=":id/edit" element={<MarketEdit />} />
            <Route path=":id/" element={<MarketPlaceView />} />
        </Routes>

        </>
    )
}

export default MarketRoute;