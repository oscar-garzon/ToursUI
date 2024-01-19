import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light" fixed='top' >
      <Container fluid className='ms-4 me-4' >
        <Navbar.Brand href="#home">Kulkan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link active href="#">Tours</Nav.Link>
            <Nav.Link href="#">Yatchs</Nav.Link>
            <Nav.Link href="#">Transportation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;