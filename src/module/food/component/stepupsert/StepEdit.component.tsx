import { Button, Card } from "antd";
import { Step } from "../../../model/Masterdata.model";
import { useState } from "react";
import StepInput from "./StepInput.componet";

interface StepEditProps {
    getStepCallBack : (step : Step, index : number) => void,
    mutableStep: Step,
    index: number, 
}

const StepEdit = ({getStepCallBack, mutableStep, index} : StepEditProps) => {
    const [editable, setEditable] = useState<boolean>(false);
    const onSave = () => {
        setEditable(false);
        if (mutableStep.name === "" || mutableStep.timeEst === 0 || mutableStep.descr === "") return;
        getStepCallBack(mutableStep, index)
    }
    return (
        <Card title={`Step ${index + 1}`} extra={!editable ? <Button onClick={() => {setEditable(true)}}>Edit</Button> : <><Button onClick={() => {setEditable(false)}}>Cancel</Button><Button onClick={onSave}>Save</Button></>}>
            <StepInput editable={!editable} editedStep={mutableStep}/>
        </Card>
    )
}

export default StepEdit;