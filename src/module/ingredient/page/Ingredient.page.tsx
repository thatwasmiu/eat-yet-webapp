import { Ingredient } from "../../model/Masterdata.model";
import SearchBox from "../../../component/SearchBox.component";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import IngredientService from "../../service/Ingredient.service";
import { useMutation, useQuery, useQueryClient } from "react-query";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import ContentLayout from "../../../component/layout/ContentLayout.component";
import ErrorScreen from "../../../component/ErrorScreen.component";

const IngredientList = () => {
    const ingredientListQuery = useQuery("ingredients", IngredientService.getLists);
    const QueryClient = useQueryClient();
    const mutation = useMutation(IngredientService.delete, {
        onSuccess: (res) => {console.log(res)},
        onError: () => {() => <ErrorScreen />}
    })

    if (!ingredientListQuery.data) return <FetchingDisplay {...ingredientListQuery}/>
    const ingredients = ingredientListQuery.data;


    return (
        <ContentLayout 
            ContentPage={
                <>
                <Row justify="space-between">
                <Col><SearchBox /></Col> <Col><Button><Link to={"./new"}>Add Ingredient</Link></Button></Col>
                </Row>
        
                {ingredients.map((igt : Ingredient, index : number) => (
                    <Card key={index} extra={<Button onClick={() => {mutation.mutate(igt.id, {onSuccess: () => {QueryClient.invalidateQueries("ingredients")}})}} >Delete</Button>}>
                        <Row justify="space-between">
                            <Col className="w-1/3 h-80">
                                <picture>
                                    <Link to={`./${igt.id}`}><img src={igt.bannerUrl} alt={igt.name}/></Link>
                                </picture>
                            </Col>
                            <Col className="w-1/2">
                                <span><Link to={`./${igt.id}`}>{igt.name}</Link></span>{" "}<span>Price: {igt.price}</span>
                                <br/>
                                <p>{igt.descr}</p>
                            </Col>
                        </Row>
                    </Card>            
                ))}
                </>
            }
        />
    )
}
export default IngredientList;