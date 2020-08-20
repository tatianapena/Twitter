import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useToasts} from 'react-toast-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Loading from './../../common/Loading';
import './index.css';

function SignUp(props) {
  const {addToast} = useToasts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const user = {
      name:name,
      email: email,
      username: username,
      password: password
    };
    const url = `${process.env.REACT_APP_API_URL}/api/users`;
    axios.post(url, user)
    .then(response => {
      const message = response.data.message;
      setTimeout (()=>{
        setLoading(false);
        addToast(message , {
          appearance: 'success',
          autoDismiss: true,
        });
      }, 3000);
    })
  .catch(err=>{
    setTimeout( ()=> {
      setLoading(false);
      addToast('Error en registro del usuario', {
        appearance: 'error',
        autoDismiss: true,
      });
    }, 3000)
  })
}

  return (
    <Row className="justify-content-md-center">
      <Col md={5}>
        <Form className="form">
        <h3>Inicia sesión en MyTwitter</h3>
          <Form.Group controlId="formBasicUsername">
            <Form.Control 
              type="text" 
              autoComplete="off" 
              placeholder="Nombre de usuario*"
              value={username} 
              onChange={event => {setUsername(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control 
              type="text" 
              autoComplete="off" 
              placeholder="Nombre*"
              value={name} 
              onChange={event => {setName(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              autoComplete="off" 
              placeholder="Correo*"
              value={email} 
              onChange={event => {setEmail(event.target.value)}}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              autoComplete="off"
              placeholder="Contraseña*"
              value={password} 
              onChange={event => {setPassword(event.target.value)}}
          />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              autoComplete="off" 
              placeholder="Confirmar contraseña*"
              value={passwordConfirm} 
              onChange={event => {setPasswordConfirm(event.target.value)}}
          />
          </Form.Group>
          <Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
            Crea tu cuenta
          </Button>
          <p>&nbsp;</p>
          <p>¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link></p>
        </Form>
      </Col>
    </Row> 
  );
}

export default SignUp;
