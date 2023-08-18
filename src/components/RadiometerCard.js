
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//Receive a radiometer ID, ping backend for rest of data
function RadiometerCard({ rad_ID, onCardClick }) {
    return (
        <div>
            <Card bg = 'success' border='danger' style={{ width: '18rem', cursor: "pointer" } } onClick = {onCardClick}>
                <Card.Header><h1 class="text-big">
                Radiometer { rad_ID }
                        </h1></Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ color: 'gray' }}>ID: N/A</ListGroup.Item>
                        <ListGroup.Item><b>Location</b></ListGroup.Item>
                        <ListGroup.Item><b>Coordinates</b></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RadiometerCard;