import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Ingredient, Step } from "../../../model/Masterdata.model";
import IngredientSelect from "./IngredientSelect.component";
import { MinusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

interface StepInputProps {
    editable?: boolean,
    onChange?: (step: Step) => void,
    editedStep: Step,
}

const StepInput = ({editable = false, editedStep} : StepInputProps) => { 
    const [ingredients, setIngredients] = useState<Ingredient[]>(editedStep.stepIngredients || []);
    useEffect(() => {
        editedStep.stepIngredients = ingredients;
    }, [ingredients]);
    useEffect(() => {
        setIngredients(editedStep.stepIngredients || []);
    }, [editedStep]);
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
    const onSelectIngredient = (ingredient: Ingredient | undefined) => {
        if (!ingredient) return;
;       if (!ingredient.id) 
            setIngredients(ingredients => ingredients.map((i : Ingredient) => i.id === ingredient.id ? ingredient : i));
        else
            setIngredients([...ingredients, ingredient]);
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
        {ingredients?.map((i, index) => <Row key={index}><Col><p>+ {i.name}</p></Col> {!editable && <Col><Button icon={<MinusOutlined />} onClick={() => {setIngredients(igts => igts.filter(igt => igt.id !== i.id))}}/></Col>}</Row>)}
        {!editable && <IngredientSelect onSelect={onSelectIngredient}/>}
        <Row>
            <TextArea disabled={editable} id="descr" placeholder="General Description" allowClear onChange={handleChange} defaultValue={editedStep.descr}/> 
        </Row>
        </>
        
    )
}

export default StepInput;