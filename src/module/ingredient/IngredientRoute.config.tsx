import { Routes, Route } from "react-router-dom";
import IngredientList from "./page/Ingredient.page";
import IngredientView from "./page/IngredientView.page";


const IngredientRoute = () => {
    return (
        <Routes>
            <Route path="list" element={<IngredientList />} />
            <Route path="upsert" element={<IngredientUpsert />} />
            <Route path="view" element={<IngredientView />} />
        </Routes>
    )
}

export default IngredientRoute;