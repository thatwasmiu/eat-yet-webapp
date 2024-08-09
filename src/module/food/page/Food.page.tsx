import { Row, Col, Card, Button } from 'antd';
import React from 'react';
import SearchBox from '../../../component/SearchBox.component';
import { Food } from '../../model/Masterdata.model';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import FoodService from '../../service/Food.service';
import FetchingDisplay from '../../../component/FetchingDisplay.component';
import ContentLayout from '../../../component/layout/ContentLayout.component';

const FoodPage: React.FC = () => {
    const QueryClient = useQueryClient();
    const foodListQuery = useQuery("foods", FoodService.getLists)
    const mutation = useMutation(FoodService.delete, {
        
    })
    if (!foodListQuery.data) return <FetchingDisplay {...foodListQuery} />;
    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        // console.log(e.currentTarget);
        mutation.mutate(e.currentTarget.value, {
            onSuccess: () => {QueryClient.invalidateQueries("foods")}
        });
    }

    const foods = foodListQuery.data;
    return (
        <ContentLayout 
            ContentPage={ 
            <>
                <Row justify="space-between">
                    <Col><SearchBox /></Col> <Col><Link to={"./new"}><Button>Add Food</Button></Link></Col>
                </Row>

                {foods.map((f : Food, index : number) => (
                    <Card key={index} extra={<Button value={f.id} onClick={handleClick} title='Delete'>Delete</Button>}>
                        <Row justify="space-between">
                            <Col className="w-1/3 h-80">
                                    <picture>
                                        <Link to={`./${f.id}`}><img src={f.bannerUrl} alt={f.name}/></Link>
                                    </picture>
                            </Col>
                            <Col className="w-1/2">
                                    
                                            <Card className='w-full h-80'>     
                                                <span className='mr-5'><Link to={`./${f.id}`}>{f.name}</Link></span>
                                                <br/>
                                                <span>Estimate Time: {f.estimateTime}</span>
                                                <br/>
                                                <p>{f.descr}</p>
                                            </Card>
                            </Col>
                        </Row>
                    </Card>            
                ))}
            </>}  
        />
    )
};

export default FoodPage;