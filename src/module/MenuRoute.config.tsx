import { Routes, Route } from "react-router-dom"
import FoodMenuPage from "./menu/page/FoodMenu.page"
import FoodUpsert from "./menu/page/FoodUpsert.page";
import FoodView from "./menu/page/FoodView.page";


const MenuRoute = () => {
    return (
        <Routes>
            <Route path="menu" element={<FoodMenuPage />} />
            <Route path="upsert" element={<FoodUpsert />} />
            <Route path="view" element={<FoodView />} />
        </Routes>
    )
}

export default MenuRoute;