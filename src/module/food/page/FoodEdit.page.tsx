import ImageSelect from "../../../component/ImageSelect.component";
import FoodDetailInput from "../component/FoodDetailInput.component";
import { Button, Card, Col, Row } from "antd";
import { Step } from "../../model/Masterdata.model";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import FoodService from "../../service/Food.service";
import NotFoundPage from "../../../component/NotFoundPage.component";
import StepUpsert from "../component/stepupsert/StepUpsert.component";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import ErrorScreen from "../../../component/ErrorScreen.component";
import ContentLayout from "../../../component/layout/ContentLayout.component";
const FoodEdit : React.FC = () => {
    const { id } = useParams();
    if (!id) return <NotFoundPage />
    const mutation = useMutation(FoodService.update, {
      onSuccess: (res) => {res},
      onError: () => {() => <ErrorScreen />}
    })
    const foodQuery = useQuery(["food", id], () => FoodService.getOneById(id));

    if (foodQuery.data === undefined) return <FetchingDisplay {...foodQuery}/>;
    const food = foodQuery.data;
    const breadcrumbItems = [
      {
          title: <Link to={"/foods"}>Foods</Link>
      },
      {
          title: <Link to={`/foods/${id}`}>{food.name}</Link>
      },
      {
          title:  'Edit'
      },
    ]

    const getFoodDetail = (name : string, descr : string) => { ////////this
      food.name = name;
      food.descr = descr
    }

    const getFoodStep = (editedSteps: Step[]) => {
      food.steps = editedSteps;
    }

    const onAddFood = () => {
      console.log(JSON.stringify(food));
      mutation.mutate({food : food, id : id});
    }

    const getImageUrl = (url : string) => {
      food.bannerUrl = url;
    }
    return (
      <ContentLayout 
        items={breadcrumbItems}
        ContentPage={
        <>
          <Button onClick={onAddFood}>Save Food</Button>
          <Card bordered>
            <Row justify="space-evenly" align="top">
              <Col className="w-1/3 m-1.5">
                <ImageSelect getUrlCallBack={getImageUrl} originUrl={food.bannerUrl}/>
              </Col>
              <Col className="w-1/3 m-1.5">
                <FoodDetailInput name={food.name} descr={food.descr} getFoodDetailCallBack={getFoodDetail}/>
              </Col>
              <Row>IngredientList</Row>
            </Row>
          </Card>
          <StepUpsert steps={food.steps} getStepsCallBack={getFoodStep} />
        </>}
      />
    )
        
}

export default FoodEdit;