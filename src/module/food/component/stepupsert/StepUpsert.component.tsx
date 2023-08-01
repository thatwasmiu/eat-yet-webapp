import { Card, Row, Col, Button } from "antd";
import StepAdd from "./StepAdd.component";
import StepEdit from "./StepEdit.component";
import { Step } from "../../../model/Masterdata.model";
import { useEffect, useState } from "react";
interface StepUpsertProps {
    steps: Step[],
    getStepsCallBack: (step: Step[]) => void
}

const StepUpsert = ({steps, getStepsCallBack} : StepUpsertProps) => {
    const [isAddingStep, setIsAddingStep] = useState<boolean>(false);
    const [stepState, setStepState] = useState<Step[]>(steps);
    useEffect(() => {
        getStepsCallBack(stepState);
    }, [stepState]) 
    const onAdding = () => {
        setIsAddingStep(true);
    }
    const onClose = () => {
    setIsAddingStep(false);
    }
    const getEditedStep = (step: Step, index? : number) => {
        if (index !== undefined) {
            setStepState(steps => steps.map((s : Step, i : number) => i === index ? step : s));
            return;
        }
        setStepState([...stepState, step]);
    }

    return (
        <Card>
            <Row >
                <Col className="w-full">          
                {stepState.map((s, i : number) =>
                    (<StepEdit key={i} getStepCallBack={getEditedStep} mutableStep={{...s}}  index={i}/>)
                )}
                </Col>
            </Row>
            <Row>
                <Col className="w-full">
                {!isAddingStep ? 
                    <AddStepButton onClick={onAdding}/> : 
                    <StepAdd getStepCallBack={getEditedStep} onClose={onClose}/>
                }
                </Col>
            </Row>
        </Card>
    )
}

export default StepUpsert;

const AddStepButton = ({onClick} : {onClick : () => void}) => (
    <Button onClick={onClick}>
      <p>Add Step</p>
    </Button>
)