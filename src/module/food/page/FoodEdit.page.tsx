import ImageSelect from "../../../component/ImageSelect.component";
import FoodDetailInput from "../component/FoodDetailInput.component";
import { Button, Card, Col, Row } from "antd";
import { Step } from "../../model/Masterdata.model";
import { redirect, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import FoodService from "../../service/Food.service";
import NotFoundPage from "../../../component/NotFoundPage.component";
import StepUpsert from "../component/stepupsert/StepUpsert.component";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import ErrorScreen from "../../../component/ErrorScreen.component";

const FoodEdit : React.FC = () => {
    const { id } = useParams();
    const mutation = useMutation(FoodService.upsert, {
      onSuccess: (res) => {() => redirect(`/${res.id}/edit`)},
      onError: () => {() => <ErrorScreen />}
    })
    if (!id) return <NotFoundPage />
    const foodQuery = useQuery(["food", id], () => FoodService.getOneById(id));

    FetchingDisplay(foodQuery);
    if (foodQuery.data === undefined) return <NotFoundPage />;
    const food = foodQuery.data;

    const getFoodDetail = (name : string, descr : string) => { ////////this
      food.name = name;
      food.descr = descr
    }

    const getFoodStep = (editedSteps: Step[]) => {
      food.steps = editedSteps;
    }

    const onAddFood = () => {
      mutation.mutate(food);
    }

    const getImageUrl = (url : string) => {
      food.bannerUrl = url;
    }

    return (
      <>
        <Button onClick={onAddFood}>Save Food</Button>
        <Card bordered>
          <Row justify="space-evenly" align="top">
            <Col className="w-1/3 m-1.5">
              <ImageSelect getUrlCallBack={getImageUrl}/>
            </Col>
            <Col className="w-1/3 m-1.5">
              <FoodDetailInput name={food.name} descr={food.descr} getFoodDetailCallBack={getFoodDetail}/>
            </Col>
          </Row>
        </Card>
        <StepUpsert steps={food.steps} getStepsCallBack={getFoodStep} />
      </>

    )
        
}

export default FoodEdit;