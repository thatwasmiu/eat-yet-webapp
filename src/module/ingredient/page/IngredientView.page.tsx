import { Card, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { Ingredient } from "../../model/Masterdata.model";
import NotFoundPage from "../../../component/NotFoundPage.component";

const i : Ingredient = {id: 1, name: "egg", bannerUrl: "sjfjs", descr: "good", price: 5.0};

const IngredientView = () => {
    const { id } = useParams();
    if (!id) return <NotFoundPage />
    const ingredient= i
    return (
        ingredient &&
            <Card>
                <Row justify="space-between">
                    <Col className="w-1/2">
                        <img src={ingredient.bannerUrl} alt={ingredient.name}/>
                    </Col>
                    <Col className="w-1/2">
                        <span>{ingredient.name}</span>{" "}<span>Price: {ingredient.price}</span>
                        <br/>
                        <p>{ingredient.descr}</p>
                    </Col>
                </Row>
            </Card> 
            || <NotFoundPage />
    )
}
export default IngredientView;