import { Row, Col, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Step } from "../../model/Masterdata.model";
import { useRef } from "react";

interface StepInputProps {
    editable?: boolean,
    onChange: (step: Step) => void,
    step?: Step,
}
const stepTem: Step = {name: "", descr: "", timeEst: 0}; 

const StepInput = ({editable = false, onChange, step = stepTem} : StepInputProps) => { 
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "name") {
            step.name = elm.value;
        }
        if (elm.id === "time-est") {
            step.timeEst = Number(elm.value);
        }
        if (elm.id === "descr") {
            step.descr = elm.value;
        }
        onChange({...step});
    }
    return (
        <>
        <Row className=" mb-2">
            <Col className="w-3/5 mr-2">
                <Input disabled={editable} id="name" placeholder="Step Name" allowClear onChange={handleChange} defaultValue={step.name} />
            </Col>
            <Col className="w-1/5">
                <Input disabled={editable} type="number" id="time-est" placeholder="Time Estimation" allowClear onChange={handleChange} defaultValue={step.timeEst}/>
            </Col>
        </Row>
        <Row>
            <TextArea disabled={editable} id="descr" placeholder="General Description" allowClear onChange={handleChange} defaultValue={step.descr}/> 
        </Row>
        </>
        
    )
}

export default StepInput;