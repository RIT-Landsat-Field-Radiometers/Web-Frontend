
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//Receive a radiometer ID, ping backend for rest of data
function ExpandedRadiometerCard({ rad_ID }) {
    return (
        <div>
            <Card bg = 'success' border='danger' style={{ height: '50rem', width: '40rem', cursor: "pointer" } }>
                <Card.Header><h1 class="text-big">
                Radiometer { rad_ID }
                        </h1></Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ color: 'gray' }}>ID: N/A </ListGroup.Item>
                        <ListGroup.Item><b>Most Recent System Reset:</b><br/> N/A</ListGroup.Item>
                        <br/>
                        <ListGroup.Item><b>Board Errors:</b><br/> N/A</ListGroup.Item>
                        <br/>
                        <ListGroup.Item><b>Board Logs:</b><br/> N/A</ListGroup.Item>
                        <br/>
                        <ListGroup.Item><button class="btn btn">View Data</button></ListGroup.Item>
                        <br/>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExpandedRadiometerCard;