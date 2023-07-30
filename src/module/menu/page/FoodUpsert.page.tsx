import ImageSelect from "../component/stepupsert/ImageSelect.component";
import FoodDetailInput from "../component/stepupsert/FoodDetailInput.component";
import { Button, Card, Col, Row } from "antd";
import { Food, Step } from "../../model/Masterdata.model";
import { useEffect, useState } from "react";
import StepEdit from "../component/stepupsert/StepEdit.component";
import StepAdd from "../component/stepupsert/StepAdd.component";

interface FoodUpsertProps {
  id?: number;
}

const foodTemp: Food = { name: "", descr: "", bannerUrl: "", steps: [], };

const FoodUpsert : React.FC = ({id} : FoodUpsertProps) => {
  const [food, setFood] = useState<Food>(foodTemp);
  const [steps, setSteps] = useState<Step[]>(food.steps);
  let stepSize = steps.length;
  useEffect(() => {
    // fetch("").then((res) => res.json()).then((data) => setFood(data));
    setFood({...food, steps});
  }, [steps])
  
  const [isAddingStep, setIsAddingStep] = useState<boolean>(false);
  const onAdding = () => {
    setIsAddingStep(true);
  }

  const getFoodDetail = (name : string, descr : string) => {
    food.name = name;
    food.descr = descr
  }

  const onClose = () => {
    setIsAddingStep(false);
  }

  const getFoodStep = (step: Step, index? : number) => {
    if (index)
      setSteps(steps => steps.map((s : Step, i : number) => i === index ? step : s));
    else {
      setSteps([...steps, step]);
    }  
  }

  const onAddFood = () => {
    console.log(food.steps == steps);
    console.log(food);
  }

  return (
    <>
      <Button onClick={onAddFood}>{id && "Save Food" || "Add Food"}</Button>
      <Card bordered>
        <Row justify="space-evenly" align="top">
          <Col className="w-1/3 m-1.5">
            <ImageSelect />
          </Col>
          <Col className="w-1/3 m-1.5">
            <FoodDetailInput name={food.name} descr={food.descr} getFoodDetailCallBack={getFoodDetail}/>
          </Col>
        </Row>
    </Card>
    <Card>
      <Row >
        <Col className="w-full">          
          {steps.map((s, i : number) =>
            (<StepEdit key={stepSize--} getStepCallBack={getFoodStep} mutableStep={{...s}}  index={i}/>)
          )}
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