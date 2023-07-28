import { Row, Card } from "antd";
import { Food } from "../../model/Masterdata.model";


const FoodCard = ({name, estimateTime, bannerUrl, descr} : Food) => {
    return (
        <Row gutter={16} className='pt-20 pb-20'>
            {/* <Col className="gutter-row m-3" span={6}>
                <div style={style}>{name}</div>
            </Col> */}
        
            <Card title={name} style={{ width: "50%" }} hoverable 
                cover={<img alt={name} src={bannerUrl} />}
            >
                <p>{descr}</p>
                <p>{estimateTime}</p>
            </Card>
        </Row>
    )
}

export default FoodCard;