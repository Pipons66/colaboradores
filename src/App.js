import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BaseColaboradores } from './component/BaseColaboradores';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';


function App() {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [search, setSearch] = useState('')

  const valorNombre = (e)=>{
    setNombre(e.target.value)
  }

  const valorCorreo = (e)=>{
    setCorreo(e.target.value)
  }
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const subirValor = (e)=>{
    e.preventDefault()
    if(nombre === "" || correo === "") {
      alert('Por favor completa todos los campos antes de ingresar un nuevo registro a la base de datos')
    }
    else{
      setListaColaboradores([...listaColaboradores, {id: Date.now(), nombre: nombre, correo: correo}])}
  }


  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='text-white'>Buscador Colaboradores</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
            </Nav>
            <Form className="d-flex" value={search} onChange={searcher}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='registro' style={{textAlign: "center"}}>
          <div className='agregarRegistro'>
            <label>Nombre</label>
            <input onChange={valorNombre} type="text"></input>
            <label>Correo</label>
            <input onChange={valorCorreo} type="email"></input>
            <Button variant="primary" onClick={subirValor}>Agregar Colaborador</Button>
          </div>
      </div>

      <div className='resultados' style={{textAlign: "center"}}> 
        <h3>Lista de colaboradores</h3>
        
        <ul>
          {listaColaboradores
                    .filter((colaborador) => {
                      if (search === '') {
                        return colaborador;
                      } else if (
                        colaborador.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                      ) {
                        return colaborador;
                      }
                    })
          
          
          .map(colaborador => <li key={colaborador.id}>
          <strong>Nombre: </strong>{colaborador.nombre} - <strong>Correo: </strong>{colaborador.correo}</li>)}
        </ul>
      </div>
    </div> 
  );
}

export default App;
