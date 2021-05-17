import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './About.css'

const AboutReuse = (props) => {
    return (
        <>
            <div className="content_wrapper">
                <div className="common_box">
                    <div className="header_box">
                        <div className="hbox">
                            <div className="hbox_mid">
                                {props.boxtitle}
                            </div>
                            <div className="box_content">
                                <img src={props.imgsrc} alt="Images" />
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export function Accordions() {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0 +1">
                        Affordable Fee Structure
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Subject wise test
            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Chapter Wise test
            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    General competition test
            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

export default AboutReuse;

