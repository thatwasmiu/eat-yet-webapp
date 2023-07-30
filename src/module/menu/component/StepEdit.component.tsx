import { Button, Card, Col, Input, Row } from "antd";
import { Step } from "../../model/Masterdata.model";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import StepInput from "./StepInput.componet";

interface StepEditProps {
    getStepCallBack : (step : Step) => void,
    step: Step
}

const StepEdit = ({getStepCallBack, step} : StepEditProps) => {
    const [editable, setEditable] = useState<boolean>(step.id === undefined);
    const [editedStep, setEditedStep] = useState<Step>({...step});
    // const []
    const onSave = () => {
        setEditable(false);
        if (step.name === "" || step.timeEst === 0 || step.descr === "") return;
        getStepCallBack(step)
    }
    console.log(step);
    // const onClose()
    const onChange = (stepInput : Step) => {
        setEditedStep(stepInput);
    };
    return (
        <Card extra={!editable ? <Button onClick={() => {setEditable(true)}}>Edit</Button> : <><Button onClick={() => {setEditable(false)}}>Cancel</Button><Button onClick={onSave}>Save</Button></>}>
            <StepInput editable={!editable} onChange={onChange} step={editedStep}/>
        </Card>
    )
}

export default StepEdit;