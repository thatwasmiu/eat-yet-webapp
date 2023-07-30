import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
interface FoodDetailInputProps{
    name: string,
    descr: string,
    getFoodDetailCallBack: (name: string, descr: string) => void
}

const FoodDetailInput = ({name, descr, getFoodDetailCallBack} : FoodDetailInputProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elm = e.target;
        if (elm.id === "food-name") {
            name = elm.value
        }
        if (e.target.id === "food-descr") {
            descr = elm.value
        }
        getFoodDetailCallBack(name, descr)
    };

    return (
        <>
            <Input id="food-name" placeholder="Food Name" allowClear onChange={onChange} />
            <br />
            <br />
            <TextArea id="food-descr" placeholder="General Description" allowClear onChange={onChange} />
        </>
    )
}

export default FoodDetailInput;