import { Card, Row, Col, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../../../component/NotFoundPage.component";
import { useQuery } from "react-query";
import FoodService from "../../service/Food.service";
import FetchingDisplay from "../../../component/FetchingDisplay.component";
import ContentLayout from "../../../component/layout/ContentLayout.component";

const FoodView = () => {
  const { id } = useParams();
    if (!id) return <NotFoundPage />
  const foodQuery = useQuery(["food", id], () => FoodService.getOneById(id));
  if (foodQuery.data === undefined) return <FetchingDisplay {...foodQuery}/>;
  const food = foodQuery.data;
  const breadcrumbItems = [
    {
        title: <Link to={"/foods"}>Foods</Link>
    },
    {
        title: food.name
    },
]
  return (
        <ContentLayout
            items={breadcrumbItems}
            ContentPage={
                <Card extra={<Link to={`./edit`}><Button>Edit</Button></Link>}>
                    <Row justify="space-between">
                        <Col className="w-1/2">
                            <img src={food.bannerUrl} alt={food.name}/>
                        </Col>
                        <Col className="w-1/2">
                            <span>{food.name}</span>{" "}<span>Estimate Time: {food.estimateTime}</span>
                            <br/>
                            <p>{food.descr}</p>
                        </Col>
                    </Row>
                </Card>
            }
        />
  );
}

export default FoodView;