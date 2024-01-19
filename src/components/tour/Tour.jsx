import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Tour({tour}) {
    const name = tour.name;
    const img = <img src={tour.imgUrl} alt={tour.alternativeDescription} />;
    const description = tour.description;

    return (
        <Container className='m-2 ps-0 ms-1'>
            <Row md={2}>
                <Col md={5}>
                    <Image src={tour.imgUrl} rounded fluid/>
                </Col>
                <Container >
                    <Col className='fw-bold text-center pb-2' xs>
                        {name}
                    </Col>
                    <Col className='text-start' xs>{description}</Col>
                </Container>
            </Row>
        </Container>
    );
}

export default Tour;