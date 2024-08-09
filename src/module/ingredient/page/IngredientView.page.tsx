import { Card, Row, Col, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { useQuery } from "react-query";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import IngredientService from "../../service/Ingredient.service";
import ContentLayout from "../../../component/layout/ContentLayout.component";


const IngredientView = () => {
    const { id } = useParams();
    if (!id) return <NotFoundPage />
    const ingredientQuery = useQuery(["ingredient", id], () => IngredientService.getOneById(id));
    if (ingredientQuery.data === undefined) return <FetchingDisplay {...ingredientQuery} />;
    const ingredient = ingredientQuery.data;
    
    const breadcrumbItems = [
        {
            title: <Link to={"/ingredients"}>Ingredient</Link>
        },
        {
            title: ingredient.name
        }
    ];
    return (
        <ContentLayout
            items={breadcrumbItems}
            ContentPage={
                <Card extra={<Link to={"./edit"}><Button>Edit</Button></Link>}>
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
            }
        />
        
    )
}
export default IngredientView;