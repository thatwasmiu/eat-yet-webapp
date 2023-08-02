import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Food } from "../../model/Masterdata.model";
import NotFoundPage from "../../../component/NotFoundPage.component";

const fds : Food= {id: 1, name: "egg fried rice", bannerUrl: "sjfjs", descr: "good", estimateTime: 5.0, steps: []} 

const FoodView = () => {
  const f = fds;

  return (
    f &&
      <Card>
          <Row justify="space-between">
              <Col className="w-1/2">
                  <img src={f.bannerUrl} alt={f.name}/>
              </Col>
              <Col className="w-1/2">
                  <span><Link to={`./${f.id}`}>{f.name}</Link></span>{" "}<span>Estimate Time: {f.estimateTime}</span>
                  <br/>
                  <p>{f.descr}</p>
              </Col>
          </Row>
      </Card>
    || <NotFoundPage />
  );
}

export default FoodView;