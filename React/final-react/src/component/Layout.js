import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                  <Nav>
                      <Nav.Link to="/home" as={Link}>Product</Nav.Link>
                  </Nav>
                  <Navbar.Toggle />
                  <Navbar.Collapse className='justify-content-end'>
                      <Navbar.Text>
                          <Nav.Link to="/cart" as={Link}>My Cart 0</Nav.Link>
                      </Navbar.Text>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;