import axios from "axios";
import { Ingredient } from "../model/Masterdata.model";

const baseUrl = "http://localhost:8083/api/ingredients";

const IngredientService = {
    getLists: () => (
        axios.get<Ingredient[]>(baseUrl)
            .then(res => res.data)
    ),

    getOneById: (id : string) => (
        axios.get<Ingredient>(`${baseUrl}/${id}`)
            .then(res => res.data)
    ),

    upsert: (ingredient : Ingredient) =>  (
        axios.post<Ingredient>(baseUrl, ingredient)
            .then(res => res.data)
    )
}

export default IngredientService;