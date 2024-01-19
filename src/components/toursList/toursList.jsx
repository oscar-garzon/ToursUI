import { Container, Row } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';

import Tour from "../tour/Tour";
import ListGroup from 'react-bootstrap/ListGroup';

function ToursList({tours}) {
    const listItems = tours.map(tour => 
         <div className="border rounded" key={tour.tourID}>
            {<Tour tour={tour} />}
         </div>
        
    );

    return (
        <Stack className="mt-2" gap={3}>
            {listItems}
        </Stack>
    );
}

// Tal vez puedes usar stack gap = {3} en lugar de la lista
// para que haya un espacio entre los tours 

export default ToursList;