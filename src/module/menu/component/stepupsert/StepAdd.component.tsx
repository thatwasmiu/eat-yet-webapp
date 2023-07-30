import { Button, Card, Col, Input, Row } from "antd";
import { Step } from "../../../model/Masterdata.model";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import StepInput from "./StepInput.componet";

interface StepAddProps {
    getStepCallBack : (step : Step) => void,
    onClose: () => void,
}

const StepAdd = ({getStepCallBack, onClose} : StepAddProps) => {
    let mutableStep: Step = {name: "", descr: "", timeEst: 0};
    const onSave = () => {
        onClose();
        if (mutableStep.name === "" || mutableStep.timeEst === 0 || mutableStep.descr === "") return;
        getStepCallBack(mutableStep)
        mutableStep = {name: "", descr: "", timeEst: 0};
    }

    // const onClose()

    return (
        <Card extra={<><Button onClick={onClose}>Cancel</Button> <Button onClick={onSave}>Save</Button></>}>
            <StepInput editedStep={mutableStep}/>
        </Card>
    )
}

export default StepAdd;