import { Button, Card, Row, Col } from "antd";
import ImageSelect from "../../../component/ImageSelect.component";
import { Ingredient } from "../../model/Masterdata.model";
import IngredientDetailInput from "../component/IngredientDetailInput.component";
import IngredientService from "../../service/Ingredient.service";
import { useMutation } from "react-query";
import ErrorScreen from "../../../component/ErrorScreen.component";

const IngredientCreate = () => {
    const ingredient :Ingredient = {name: "", price : undefined, descr : "", bannerUrl : ""};
    const mutation = useMutation(IngredientService.upsert, {
      onSuccess: (res) => {console.log(res)},
      onError: () => {() => <ErrorScreen />}
    })
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

export default IngredientCreate;