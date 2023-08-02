import { Routes, Route } from "react-router-dom"
import FoodPage from "./page/Food.page"
import FoodView from "./page/FoodView.page";
import FoodCreate from "./page/FoodCreate.page";
import FoodEdit from "./page/FoodEdit.page";

const MenuRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<FoodPage />} />
            <Route path="new/" element={<FoodCreate />} /> 
            <Route path=":id/edit" element={<FoodEdit />} />
            <Route path=":id" element={<FoodView />} />
        </Routes>
    )
}

export default MenuRoute;