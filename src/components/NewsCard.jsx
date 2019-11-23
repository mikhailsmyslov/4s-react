import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

export default (props) => {
    const { title, description, date } = props;
    return (
        <Card border="secondary" className="w-100 mb-5">
        <Card.Body>
            <Row>
                <Col xs={8}>
                    <Card.Title>{title}</Card.Title>
                </Col>
                <Col>
                <Moment format="LLLL">{date}</Moment>
                </Col>
            </Row>
            <hr className="mt-0" />
            <Card.Text>{description}</Card.Text>
            <Button variant="link">Read more...</Button>
        </Card.Body>
        </Card>
    )
};