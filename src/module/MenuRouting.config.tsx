import { Routes, Route } from "react-router-dom"
import FoodMenuPage from "./menu/page/FoodMenu.page"


const MenuRouting = () => {
    return (
        <Routes>
            <Route path="/menu" element={<FoodMenuPage />} />
        </Routes>
    )
}

export default MenuRouting;