import { Button, Col, Row, Select, SelectProps, Space } from "antd";
import { useQuery } from "react-query";
import IngredientService from "../../../service/Ingredient.service";
import { Ingredient } from "../../../model/Masterdata.model";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
interface IngredientSelectProps{
    onSelect: (ingredient : Ingredient | undefined) => void
}

const IngredientSelect = ({onSelect} : IngredientSelectProps) => {
    const [isSelectingIngredient, setSelectionState] = useState<boolean>(false);
    let options: SelectProps['options'] = [];
    const ingredientListQuery = useQuery("ingredients", IngredientService.getLists);
    let ingredient : Ingredient | undefined;
    if (ingredientListQuery.data !== undefined) {
        options = ingredientListQuery.data.map(i => ({value: i.id, label: i.name}));
    }

    const onChange = (value: string) => {   
        ingredient = ingredientListQuery.data?.find(i => i.id === Number(value));
    };
    
      
    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const handleSelect = () => {
        setSelectionState(false);
        onSelect(ingredient);
    };

    return (
        <Row>
            {isSelectingIngredient ? 
            <Col>
            <Space.Compact style={{ width: '100%' }}>
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    style={{ width: 200 }}
                    filterOption={(input : string, option : any) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={options}
                />
                <Button onClick={handleSelect}>Add</Button>
                <Button onClick={() => {setSelectionState(false)}}>Close</Button>
            </Space.Compact>
            </Col>
            : <Button icon={<PlusOutlined />} onClick={() => {setSelectionState(true)}}/>}
        </Row>
    )
}

export default IngredientSelect;

