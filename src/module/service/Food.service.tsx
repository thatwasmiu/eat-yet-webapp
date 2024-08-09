import axios from "axios";
import { Food } from "../model/Masterdata.model";
interface UpdateProps{
    food: Food,
    id: string
}

const baseUrl = "http://localhost:8083/api/foods";

const FoodService = {
    getLists: () => (
        axios.get<Food[]>(baseUrl)
            .then(res => res.data)
    ),

    getOneById: (id : string) => (
        axios.get<Food>(`${baseUrl}/${id}`)
            .then(res => res.data)
    ),

    create: (food : Food) =>  (
        axios.post<Food>(baseUrl, food)
            .then(res => res.data)
    ),

    update: ({food, id} : UpdateProps) => (
        axios.put<Food>(`${baseUrl}/${id}`, food)
            .then(res => res.data)
    ),

    delete: (id : number | string) => (
        axios.delete(`${baseUrl}/${id}`)
    )
}
export default FoodService;

