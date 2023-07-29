import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const FoodDetailInput = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e);
    };

    return (
        <>
            <Input placeholder="Food Name" allowClear onChange={onChange} />
            <br />
            <br />
            <TextArea placeholder="General Description" allowClear onChange={onChange} />
        </>
    )
}

export default FoodDetailInput;