import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Carta({nombre, img, texto, edad, location, mail}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="info" onClick={handleShow}>Informacion</Button>
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{edad}</Modal.Body>
        <Modal.Body>{location.city}, {location.country}</Modal.Body>
        <Modal.Body>{mail}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Carta