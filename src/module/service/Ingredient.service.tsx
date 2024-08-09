import axios from "axios";
import { Ingredient } from "../model/Masterdata.model";

interface UpdateProps{
    ingredient: Ingredient,
    id: string
}
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

    create: (ingredient : Ingredient) =>  (
        axios.post<Ingredient>(baseUrl, ingredient)
            .then(res => res.data)
    ),

    update: ({ingredient, id} : UpdateProps) => (
        axios.put<Ingredient>(`${baseUrl}/${id}`, ingredient)
            .then(res => res.data)
    ),

    delete: (id : string | number | undefined) => (
        axios.delete(`${baseUrl}/${id}`)
    )

}

export default IngredientService;