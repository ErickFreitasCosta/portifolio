import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../navbar/nav.css'



function OffcanvasExample() {
 


  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3" id='NAV'>
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>

              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3" id='NAV'>
                  <Link to={'/'} className='h4'>Home</Link>
                  <Link to={'/Sobre'} className='h4' >Sobre</Link>
                  <Link to={'/Projeto'} className='h4'>Projetos</Link>
                  <Link to={'/Contato'} className='h4'>Contato</Link>
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;