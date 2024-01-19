import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function ToursFilterMobile({handleToursByCategory}) {
    let filters = ["Mar", "Tierra", "Aire",
                     "Cenotes", "Aventura",
                     "Food and Drink", "Driving"];

    filters = filters.map( (filter) => 
        <Badge as='badge' className='fs-6' bg="light" text='body'
                onClick={(e) => {
                    handleToursByCategory(e,filter);
                }}>
            {filter}
        </Badge>      
    );

    return (
        <Stack gap={1} className='overflow-x-auto pt-3 pb-2'
         direction="horizontal" >
            {filters}
        </Stack>
    )
}

export default ToursFilterMobile;