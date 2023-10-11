import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Buscador({movies, setBuscador, setBuscadorFlag}) {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setBuscadorFlag(false); 
        const filteredCol = movies.filter((movie) => {   
            return movie.title.toUpperCase().includes(search.toUpperCase());   
        });
        if (search == "") {
          setBuscadorFlag(true);
        }
        setBuscador (filteredCol);
    }
    const  ordenarAsc=(e)=>{
       const arreglo=[...movies];
       setBuscadorFlag(false)
       arreglo.reverse();
       setBuscador(arreglo)

    }
    const  ordenarDesc=(e)=>{
        const arregloDesc=[...movies]; 
        setBuscadorFlag(false)
        arregloDesc.sort();
        setBuscador(arregloDesc);
      
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
              
            navbarScroll
          >

            <NavDropdown title="Ordernar por" id="navbarScrollingDropdown" >
              <NavDropdown.Item eventKey='Descendente'  onClick={(e) => ordenarDesc()} >Descendente A-Z</NavDropdown.Item>
              <NavDropdown.Item eventKey='Ascendente'  onClick={(e) => ordenarAsc()} > Ascendente Z-A</NavDropdown.Item>
            </NavDropdown>
       </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Buscador