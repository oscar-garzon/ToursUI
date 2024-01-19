import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar(){
    return (
        <>
            <Form>
                <Form.Group className="mt-5" controlId="form-group-id">
                    <Form.Control type="text" placeholder="Search tours ..." />
                </Form.Group>
            </Form>
        </>
    ); 
}

export default SearchBar;