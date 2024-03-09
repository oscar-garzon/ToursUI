import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import ToursList from "../toursList/toursList";
import ToursFilter from "../toursFilter/toursFilter";
import ToursFilterMobile from '../toursFilterMobile/toursFilterMobile';
import { fetchTours, fetchToursByLand, fetchToursBySea } from "../../fetches/fetchTours"

import { useEffect, useState } from 'react';

function ToursFilterAndList() {
    const [dataTours, setDataTours] = useState([]);

    useEffect( () => {
        fetchDataTours();
    }, []);

    function fetchDataTours() {
        // fetch("http://localhost:8082/tours")
        // .then((response) => response.json())
        // .then((data) => setDataTours(data));
        setDataTours(fetchTours());
    }

    function handleToursByCategory(e, category) {
        switch(category) {
            case "Mar":
                // fetch("http://localhost:8082/filterBy?category=MAR")
                // .then((response) => response.json())
                // .then((data) => setDataTours(data));
                setDataTours(fetchToursBySea());
                break;
            case "Tierra":
                // fetch("http://localhost:8082/filterBy?category=TIERRA")
                // .then((response) => response.json())
                // .then((data) => setDataTours(data));
                setDataTours(fetchToursByLand());               
                break;
            case "All":
                fetchDataTours();
                break;
        }
    }


    return (
        <Container fluid className='mx-0'>
            <Row>
                <Col xs={0} md={3} className='px-0 d-none d-md-block'>
                    <ToursFilter handleToursByCategory={handleToursByCategory}/>
                </Col>
                <Col className='d-md-none'>
                    <ToursFilterMobile handleToursByCategory={handleToursByCategory}/>
                </Col>
                <Col md={9} className='pe-0 pt-0'>
                    <ToursList tours={dataTours}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ToursFilterAndList;