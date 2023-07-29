import { Button, Card, Col, Input, Row } from "antd";
import { Step } from "../../model/Masterdata.model";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

interface StepEditProps {
    getStepCallBack : (step : Step) => void,
    onClose: () => void
    stepInput?: Step
}

const StepEdit = ({getStepCallBack, onClose, stepInput} : StepEditProps) => {
    const [editable, setEditable] = useState<boolean>(stepInput !== undefined);
    const step : Step = stepInput ? stepInput :
    {
        name: "",
        timeEst: 0,
        descr: ""
    }
    const onSave = () => {
        getStepCallBack(step)
        onClose();
    }
    const onEdit = () => {
        
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "name") {
            step.name = elm.value;
            return;
        }
        if (elm.id === "time-est") {
            step.timeEst = Number(elm.value);
            return;
        }
        step.descr = elm.value;
    };

    return (
        <Card extra={editable ? <Button onClick={onEdit}>Edit</Button> : <><Button onClick={onClose}>Cancel</Button><Button onClick={onSave}>Save</Button></>}>
            <Row className=" mb-2">
                <Col className="w-3/5 mr-2">
                    <Input disabled={editable} id="name" placeholder="Step Name" allowClear onChange={onChange} value={step.name}/>
                </Col>
                <Col className="w-1/5">
                    <Input disabled={editable} type="number" id="time-est" placeholder="Time Estimation" allowClear onChange={onChange} value={step.timeEst}/>
                </Col>
            </Row>
            <Row>
                <TextArea disabled={editable} id="descr" placeholder="General Description" allowClear onChange={onChange} value={step.descr}/> 
            </Row>
        </Card>
    )
}

export default StepEdit;