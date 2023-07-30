import { Button, Card, Col, Input, Row } from "antd";
import { Step } from "../../model/Masterdata.model";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import StepInput from "./StepInput.componet";

interface StepAddProps {
    getStepCallBack : (step : Step) => void,
    onClose: () => void
}

const StepAdd = ({getStepCallBack, onClose} : StepAddProps) => {
    let step: Step = {name: "", descr: "", timeEst: 0};
    const onSave = () => {
        onClose();
        if (step.name === "" || step.timeEst === 0 || step.descr === "") return;
        getStepCallBack(step)
    }

    // const onClose()
    const onChange = (stepInput : Step) => {
        step = stepInput
    };

    return (
        <Card extra={<><Button onClick={onClose}>Cancel</Button> <Button onClick={onSave}>Save</Button></>}>
            <StepInput onChange={onChange}/>
        </Card>
    )
}

export default StepAdd;