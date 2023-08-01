import { Row, Card, Col } from "antd";
import { Food } from "../../model/Masterdata.model";
import { Link } from "react-router-dom";


const FoodCard = ({id, name, estimateTime, bannerUrl, descr} : Food) => {
    return (
        <Card >
            <Row justify="space-between">
                <Col className="w-1/2">
                    <picture>
                        <Link to={`./${id}`}></Link>
                        <img src={bannerUrl} alt={name}/>
                    </picture>
                </Col>
                <Col className="w-1/2">
                    <span><Link to={`./${id}`}>{name}</Link></span>{" "}<span>Estimate Time: {estimateTime}</span>
                    <br/>
                    <p>{descr}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default FoodCard;