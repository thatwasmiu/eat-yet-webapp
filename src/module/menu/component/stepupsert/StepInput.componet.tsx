import { Row, Col, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Step } from "../../../model/Masterdata.model";

interface StepInputProps {
    editable?: boolean,
    onChange?: (step: Step) => void,
    editedStep: Step,
}

const StepInput = ({editable = false, editedStep} : StepInputProps) => { 
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "name") {
            editedStep.name = elm.value;
        }
        if (elm.id === "time-est") {
            editedStep.timeEst = Number(elm.value);
        }
        if (elm.id === "descr") {
            editedStep.descr = elm.value;
        }
    }
    return (
        <>
        <Row className=" mb-2">
            <Col className="w-3/5 mr-2">
                <Input disabled={editable} id="name" placeholder="Step Name" allowClear onChange={handleChange} defaultValue={editedStep.name} />
            </Col>
            <Col className="w-1/5">
                <Input disabled={editable} type="number" id="time-est" placeholder="Time Estimation" allowClear onChange={handleChange} defaultValue={editedStep.timeEst}/>
            </Col>
        </Row>
        <Row>
            <TextArea disabled={editable} id="descr" placeholder="General Description" allowClear onChange={handleChange} defaultValue={editedStep.descr}/> 
        </Row>
        </>
        
    )
}

export default StepInput;