import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react'


const NavBarpanel = () => {
  const cartProducts = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Nav>
            <Nav.Link >Product</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
          <Nav.Link >My Cart {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarpanel