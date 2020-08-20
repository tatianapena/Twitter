import React from 'react';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.css';
import logo from './../../../assets/images/twitter-logo.svg'

function Home(props) {
  return (
    <Row className="home">
        <Col md={8} xs={12}  className="col col-left">
          <h1>Bienvenidos a Twitter</h1>
          <p>Ingresa ahora</p>
          <p>Sigue lo que te interesa</p>
        </Col>
        <Col md={4} xs={12} className="col col-right">
          <p><img src={logo} alt="Logo" className="logo" /></p>
          <h2>Descrubre lo que está pasando</h2>
          <ul className="list">
            <li className="list-item"><Link className="button button-primary" to="/signin">Inicia sesión</Link></li>
            <li className="list-item"><Link className="button button-secundary" to="/signup">Crea tu cuenta</Link></li>        
          </ul>
        </Col>
    </Row>
);
}

export default Home;
