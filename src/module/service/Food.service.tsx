import axios from "axios";
import { Food } from "../model/Masterdata.model";

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

    upsert: (food : Food) =>  (
        axios.post<Food>(baseUrl, food)
            .then(res => res.data)
    ) 
}
export default FoodService;

