import { Button, Card, Row, Col } from "antd";
import ImageSelect from "../../../component/ImageSelect.component";
import IngredientDetailInput from "../component/IngredientDetailInput.component";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { useMutation, useQuery } from "react-query";
import IngredientService from "../../service/Ingredient.service";
import ErrorScreen from "../../../component/ErrorScreen.component";

const IngredientEdit = () => {
    const { id }= useParams()
    if (!id) return <NotFoundPage />

    const ingredientQuery = useQuery(["ingredient", id], () => IngredientService.getOneById(id));
    const mutation = useMutation(IngredientService.upsert, {
      onSuccess: (res) => {console.log(res)},
      onError: () => {() => <ErrorScreen />}
    })
    if (ingredientQuery.isLoading) return <p> Please standing by</p>;
    
    if (ingredientQuery.data === undefined) return <NotFoundPage />;
    const ingredient = ingredientQuery.data;

    const onSave = () => {
        mutation.mutate(ingredient);
    }

    const getImageUrl = (url : string) => {
      ingredient.bannerUrl = url;
    } 

    return (
        <>
        <Button onClick={onSave}>Add Ingredient</Button>
        <Card bordered>
        <Row justify="space-evenly" align="top">
          <Col className="w-1/3 m-1.5">
            <ImageSelect getUrlCallBack={getImageUrl}/>
          </Col>
          <Col className="w-1/3 m-1.5">
            <IngredientDetailInput mutableIngredient={ingredient}/>
          </Col>
        </Row>
        </Card>
        </>
    )
}

export default IngredientEdit;