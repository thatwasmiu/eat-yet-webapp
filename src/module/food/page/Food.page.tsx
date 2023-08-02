import { Row, Col, Card, Button } from 'antd';
import React from 'react';
import SearchBox from '../../../component/SearchBox.component';
import { Food } from '../../model/Masterdata.model';
import NotFoundPage from '../../../component/NotFoundPage.component';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import FoodService from '../../service/Food.service';
import FetchingDisplay from '../../../component/FetchingDisplay.component';

const FoodPage: React.FC = () => {
  const foodListQuery = useQuery("foods", FoodService.getLists)
  FetchingDisplay(foodListQuery);

  if (!foodListQuery.data) return <NotFoundPage />
  const foods = foodListQuery.data;
  return (
      <>
      <Row justify="space-between">
        <Col><SearchBox /></Col> <Col><Button><Link to={"./new"}>Add Food</Link></Button></Col>
      </Row>

      {foods.map((f : Food, index : number) => (
          <Card key={index}>
              <Row justify="space-between">
                  <Col className="w-1/2">
                        <picture>
                            <Link to={`./${f.id}/edit`}></Link>
                            <img src={f.bannerUrl} alt={f.name}/>
                        </picture>
                  </Col>
                  <Col className="w-1/2">
                      <span><Link to={`./${f.id}/edit`}>{f.name}</Link></span>{" "}<span>Estimate Time: {f.estimateTime}</span>
                      <br/>
                      <p>{f.descr}</p>
                  </Col>
              </Row>
          </Card>            
      ))}
      </>
  )
};

export default FoodPage;