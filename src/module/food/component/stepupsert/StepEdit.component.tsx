import { Button, Card } from "antd";
import { Step } from "../../../model/Masterdata.model";
import { useState } from "react";
import StepInput from "./StepInput.componet";

interface StepEditProps {
    getStepCallBack : (step : Step, index : number) => void,
    handleDelete: (step : Step) => void,
    stepInfo: Step,
    index: number, 
}

const StepEdit = ({getStepCallBack, stepInfo, index, handleDelete} : StepEditProps) => {
    const [editable, setEditable] = useState<boolean>(false);
    const [mutableStep, setMutableStep] = useState<Step>({...stepInfo})
    const onSave = () => {
        setEditable(false);
        if (mutableStep.name === "" || mutableStep.timeEst === 0 || mutableStep.descr === "") return;
        getStepCallBack(mutableStep, index)
    }
    console.log(mutableStep);
    const onCancel = () => {
        setMutableStep({...stepInfo});
        setEditable(false);
    }
    const onDelete = () => {
        handleDelete(mutableStep);
    }
    return (
        <Card title={`Step ${index + 1}`} 
            extra={!editable ? <><Button onClick={() => {setEditable(true)}}>Edit</Button><Button onClick={onDelete}>Delete</Button></> : <><Button onClick={onCancel}>Cancel</Button><Button onClick={onSave}>Save</Button></>}>
            <StepInput editable={!editable} editedStep={mutableStep}/>
        </Card>
    )
}

export default StepEdit;