import { Ingredient } from "../../model/Masterdata.model";
import SearchBox from "../../../component/SearchBox.component";
import { Button, Card, Col, Row } from "antd";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { Link } from "react-router-dom";
import IngredientService from "../../service/Ingredient.service";
import { useQuery } from "react-query";
import LoadingScrean from "../../../component/LoadingScreen.component";

const IngredientList = () => {
    const ingredientListQuery = useQuery("foods", IngredientService.getLists);
    // const mutation = useMutation(IngredientService.upsert, {
    //     onSuccess: (res) => {console.log(res)},
    //     onError: () => {() => <ErrorScreen />}
    // })
    if (ingredientListQuery.isFetching) return <LoadingScrean />

    if (ingredientListQuery.isError) return <NotFoundPage />

    if (!ingredientListQuery.data) return <NotFoundPage />
    const ingredients = ingredientListQuery.data;
    return (
        ingredients &&
        <>
        <Row justify="space-between">
        <Col><SearchBox /></Col> <Col><Button><Link to={"./new"}>Add Ingredient</Link></Button></Col>
        </Row>

        {ingredients.map((igt : Ingredient, index : number) => (
            <Card key={index}>
                <Row justify="space-between">
                    <Col className="w-1/2">
                        <picture>
                            <Link to={`./${igt.id}/detail`}></Link>
                            <img src={igt.bannerUrl} alt={igt.name}/>
                        </picture>
                    </Col>
                    <Col className="w-1/2">
                        <span><Link to={`./${igt.id}/detail`}>{igt.name}</Link></span>{" "}<span>Price: {igt.price}</span>
                        <br/>
                        <p>{igt.descr}</p>
                    </Col>
                </Row>
            </Card>            
        ))}
        </> || <NotFoundPage />
    )
}
export default IngredientList;