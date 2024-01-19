import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

import './toursFilter.css'

function ToursFilter({handleToursByCategory}) {
    const [isFiltered, setIsFiltered] = useState(false);

    let toursClassification = ["Mar", "Tierra", "Aire",
                                 "Cenotes", "Aventura",
                                 "Food and Drink", "Driving"];
    toursClassification = toursClassification.map( (category) => 
        <li>
            <Button className='text-dark text-decoration-none link-primary
                                ps-0 py-0' 
                    variant='link'
                    onClick={(e) => {
                                setIsFiltered(true);
                                handleToursByCategory(e, category);
                                }}>
                {category}
            </Button>
        </li>
        );
    return (
        <div class="tour-categorias">
            <Container>
                <Row>
                    <Col className='ps-0 text-wrap'>
                        <h6>Tours by Category</h6>
                    </Col>
                    <Col>
                        {isFiltered && 
                        <Button className='fs-6 text-dark text-decoration-none 
                        ps-0 py-0 mt-2' 
                            variant='light'
                            onClick={(e) => {
                                        setIsFiltered(false);
                                        handleToursByCategory(e, "All");
                                        }}>
                            Clear filters
                        </Button>}
                    </Col>
                </Row>
            </Container>
            <ul>
                {toursClassification}
            </ul>
        </div>
    );
}

export default ToursFilter;