import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css';


function Navigation() {
  return (
    <Navbar expand="lg" className='navbar sticky-top'>
      <Container>
        <Navbar.Brand href="#home">Duarte Jorge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">Who am I?</Nav.Link>
            <Nav.Link href="">My Projects</Nav.Link>
            <Nav.Link href="">My path</Nav.Link>
            <Nav.Link href="">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;