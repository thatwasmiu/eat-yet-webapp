import axios from "axios";
import { MarketPlace } from "../model/Masterdata.model";

const baseUrl = "http://localhost:8083/api/market-places"

const MarketPlaceService =  {
    
    getLists: () => (
        axios.get<MarketPlace[]>(baseUrl)
                    .then(res => res.data)
    ),

    getOneById: (id : string) => (
        axios.get<MarketPlace>(`${baseUrl}/${id}`)
        .then(res => res.data)
    ),

    upsert: (market : MarketPlace) =>  (
        axios.post<MarketPlace>(baseUrl, market)
            .then(res => res.data)
    )
    
}

export default MarketPlaceService;