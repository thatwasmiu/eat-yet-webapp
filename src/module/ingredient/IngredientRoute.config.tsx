import { Routes, Route } from "react-router-dom";
import IngredientList from "./page/Ingredient.page";
import IngredientView from "./page/IngredientView.page";
import IngredientEdit from "./page/IngredientEdit.page";
import IngredientCreate from "./page/IngredientCreate.page";


const IngredientRoute = () => {
    return (
        <Routes>
            <Route path="" element={<IngredientList />} />
            <Route path="new" element={<IngredientCreate />} />
            <Route path=":id/detail" element={<IngredientEdit />} />
            <Route path=":id" element={<IngredientView />} />
        </Routes>
    )
}

export default IngredientRoute;