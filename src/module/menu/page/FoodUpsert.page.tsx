import ImageSelect from "../component/ImageSelect.component";
import FoodDetailInput from "../component/FoodDetailInput.component";
import { Button, Card, Col, Row } from "antd";
import { Food, Step } from "../../model/Masterdata.model";
import { useState } from "react";
import StepEdit from "../component/StepEdit.component";

const FoodUpsert : React.FC = () => {
  const [isEditingStep, setIsEditingStep] = useState<boolean>(false);
  const getFoodStep = (step : Step) =>{food.steps.push(step); console.log(food)};
  const food : Food = {
    name: "",
    descr: "",
    bannerUrl: "",
    steps: [],
  }
  food.steps.push({id: 1, name: "test", timeEst: 0, descr: "sss"})
  
  return (
    <>
      <Card bordered>
        <Row justify="space-evenly" align="top">
          <Col className="w-1/3 m-1.5">
            <ImageSelect />
          </Col>
          <Col className="w-1/3 m-1.5">
            <FoodDetailInput />
          </Col>
        </Row>
    </Card>
    <Card>
      <Row >
        <Col className="w-full">          
          {food.steps.map(s => (<StepEdit key={1} getStepCallBack={getFoodStep} onClose={() => setIsEditingStep(false)} stepInput={s}/>))}
        </Col>
      </Row>
      <Row>
        <Col className="w-full">
          {isEditingStep ? 
            <StepEdit getStepCallBack={getFoodStep} onClose={() => setIsEditingStep(false)}/> : 
            <AddStepButton onClick={() => {setIsEditingStep(true)}}/>}
          </Col>
      </Row>
    </Card>
    </>

  )
        
}
export default FoodUpsert;

const AddStepButton = ({onClick} : {onClick : () => void}) => (
  <Button onClick={onClick}>
    <p>Add Step</p>
  </Button>
)