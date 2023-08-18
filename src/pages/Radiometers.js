
import React from "react";
import NavBar from './../components/NavBar'
import RadiometerCard from "./../components/RadiometerCard";
import ExpandedRadiometerCard from "./../components/ExpandedRadiometerCard";
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Display the use page for radiometers
function Radiometers() {
    //state to keep track of which radiometer is selected
    const [rad_pressed, setPressed] = useState('Select Radiometer');

    //sets selected radiometer to the one that is clicked
    function handleClick(rad)
    {
        setPressed(rad)
        console.log(rad)
    }

    return (
        <div>
            <NavBar />
            
            <section class="rad-section" >
                <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col key={idx}>
                        <RadiometerCard rad_ID={(idx+1)} onCardClick={() => handleClick(idx + 1)} />
                        <br />
                    </Col>
                ))}
                </Row>
                <ExpandedRadiometerCard rad_ID = {rad_pressed}/>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default Radiometers;