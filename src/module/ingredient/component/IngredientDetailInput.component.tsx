import { Col, Input, Row } from "antd";
import { Ingredient } from "../../model/Masterdata.model";
import TextArea from "antd/es/input/TextArea";

interface IngredientDetailInput {
    mutableIngredient: Ingredient,
}

const IngredientDetailInput = ({mutableIngredient} : IngredientDetailInput) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "ingredient-name") {
            mutableIngredient.name = elm.value;
            return;
        }
        if (e.target.id === "ingredient-descr") {
            mutableIngredient.descr = elm.value
            return;
        }
        if (e.target.id === "ingredient-descr") {
            mutableIngredient.descr = elm.value
            return;
        }
        if (e.target.id === "ingredient-price") {
            mutableIngredient.price = Number(elm.value);
        }
    }
    return (
        <>
        <Row justify="space-evenly" align="top">
            <Col>
                <Row>
                    <Col><Input id="ingredient-name" placeholder="Ingredient Name" allowClear onChange={onChange} defaultValue={mutableIngredient.name}/> </Col>
                    <Col><Input type="number" id="ingredient-price" placeholder="Ingredient Price" allowClear onChange={onChange} defaultValue={mutableIngredient.price}/></Col>
                </Row>
                <Row>
                    <TextArea id="ingredient-descr" placeholder="General Description" allowClear onChange={onChange} defaultValue={mutableIngredient.descr}/>
                </Row>
            </Col>
        </Row>
        </>  
    )
}
export default IngredientDetailInput;