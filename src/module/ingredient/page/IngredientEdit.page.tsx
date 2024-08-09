import { Button, Card, Row, Col } from "antd";
import ImageSelect from "../../../component/ImageSelect.component";
import IngredientDetailInput from "../component/IngredientDetailInput.component";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { useMutation, useQuery } from "react-query";
import IngredientService from "../../service/Ingredient.service";
import ErrorScreen from "../../../component/ErrorScreen.component";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import ContentLayout from "../../../component/layout/ContentLayout.component";

const IngredientEdit = () => {
    const { id }= useParams()
    if (!id) return <NotFoundPage />

    const ingredientQuery = useQuery(["ingredient", id], () => IngredientService.getOneById(id));
    const mutation = useMutation(IngredientService.update, {
      onSuccess: (res) => {console.log(res)},
      onError: () => {() => <ErrorScreen />}
    })
    
    if (ingredientQuery.data === undefined) return <FetchingDisplay {...ingredientQuery} />;
    const ingredient = ingredientQuery.data;
    const breadcrumbItems = [
      {
          title: <Link to={"/ingredients"}>Ingredients</Link>
      },
      {
          title: <Link to={`ingredients/${id}`}>{ingredient.name}</Link>
      },
      {
        title: ingredient.name
      },
    ]

    const onSave = () => {
        mutation.mutate({ingredient : ingredient, id : id});
    }

    const getImageUrl = (url : string) => {
      ingredient.bannerUrl = url;
    } 

    return (
        <ContentLayout
          items={breadcrumbItems}
          ContentPage={
            <>
            <Button onClick={onSave}>Add Ingredient</Button>
            <Card bordered>
            <Row justify="space-evenly" align="top">
              <Col className="w-1/3 m-1.5">
                <ImageSelect getUrlCallBack={getImageUrl} originUrl={ingredient.bannerUrl}/>
              </Col>
              <Col className="w-1/3 m-1.5">
                <IngredientDetailInput mutableIngredient={ingredient}/>
              </Col>
            </Row>
            </Card>
            </>
          }
        />
    )
}

export default IngredientEdit;