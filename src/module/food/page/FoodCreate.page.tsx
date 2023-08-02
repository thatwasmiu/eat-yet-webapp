import { Button, Card, Row, Col } from "antd";
import ImageSelect from "../../../component/ImageSelect.component";
import { Food, Step } from "../../model/Masterdata.model";
import FoodDetailInput from "../component/FoodDetailInput.component";
import StepUpsert from "../component/stepupsert/StepUpsert.component";
import { useMutation } from "react-query";
import FoodService from "../../service/Food.service";
import ErrorScreen from "../../../component/ErrorScreen.component";

const FoodCreate = () => {
    const food: Food = { name: "", descr: "", bannerUrl: "", steps: [], }; // can be made to be a state later
    const mutation = useMutation(FoodService.upsert, {
        onSuccess: (res) => {console.log(res)},
        onError: () => {() => <ErrorScreen />}
    })
    const getFoodDetail = (name : string, descr : string) => { ///////////this
        food.name = name;
        food.descr = descr
    }

    const getFoodStep = (editedSteps: Step[]) => {
    food.steps = editedSteps;
    }

    const onAddFood = () => {
        mutation.mutate(food);
        // console.log(food);
    }

    const getImageUrl = (url : string) => {
    food.bannerUrl = url;
    }

    return (
    <>
        <Button onClick={onAddFood}>"Add Food"</Button>
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

export default FoodCreate;