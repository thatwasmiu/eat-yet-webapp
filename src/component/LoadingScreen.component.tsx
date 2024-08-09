import { Row, Col, Spin } from "antd";

const LoadingScrean = () => {
    return (
        <>
            <Row>
                <Col className="w-full">
                    <Spin tip="Loading" size="large">...
                    </Spin>
                </Col>
            </Row>
        </>
    )
}

export default LoadingScrean;