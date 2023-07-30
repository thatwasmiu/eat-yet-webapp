import ImageSelect from "../component/ImageSelect.component";
import FoodDetailInput from "../component/FoodDetailInput.component";
import { Button, Card, Col, Row } from "antd";
import { Food, Step } from "../../model/Masterdata.model";
import { useEffect, useState } from "react";
import StepEdit from "../component/StepEdit.component";
import StepAdd from "../component/StepAdd.component";

interface FoodUpsertProps {
  id?: number;
}

const foodTemp: Food = { name: "", descr: "", bannerUrl: "", steps: [], };
foodTemp.steps.push({id: 1, name: "test", timeEst: 1, descr: "sss"});
foodTemp.steps.push({id: 2, name: "test2", timeEst: 1, descr: "sss3"})

const FoodUpsert : React.FC = ({id} : FoodUpsertProps) => {
  const [food, setFood] = useState<Food>(foodTemp);
  if (id) fetch("").then((res) => res.json()).then((data) => setFood(data));
  const steps = food.steps;
  const [isAddingStep, setIsAddingStep] = useState<boolean>(false);
  const getFoodStep = (step : Step) =>{food.steps.push(step); console.log(food)};
  const onAdding = () => {
    setIsAddingStep(true);
  }

  const onCancle = () => {
    
  }

  const onClose = () => {
    setIsAddingStep(false);
  }
console.log(steps); 
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
          {steps.map(s => (<StepEdit key={s.id || 0} getStepCallBack={getFoodStep} step={{...s}}/>))}
        </Col>
      </Row>
      <Row>
        <Col className="w-full">
          {!isAddingStep ? 
            <AddStepButton onClick={onAdding}/> : 
            <StepAdd getStepCallBack={getFoodStep} onClose={onClose}/>
            }
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