import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
//import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import TimePicker from 'react-bootstrap-time-picker';
//import DatePicker from  'react-date-picker';


const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [cause, setCause] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [slotfrom, setSlotFrom] = useState("");
  const [slotto, setSlotTo] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formCause">
        <Form.Label>Cause</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Cause"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Cause</Form.Label>
        <Form.Control
          type="number"
          min = "1"
          placeholder="Enter the Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Select Date</Form.Label>
        {/* <DatePicker>
            selected = {date}
            dateFormat = 'dd/MM/yyyy'
            onChange={(e) => setDate(e.target.value)}
        </DatePicker> */}
        <Form.Control 
           type="date" 
           name="doa" 
           placeholder="Date of Appointment"
           value={date}
           onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSlotFrom">
        <Form.Label>Select time</Form.Label>
        {/* <TimePicker 
          step={30}
          value={slotfrom}
          dateFormat = 'HH:MM'
          onChange={(e) => setSlotFrom(e.target.value)}
         /> */}
        <Form.Control 
           type="time" 
           name="slot" 
           value={slotfrom}
           onChange={(e) => setSlotFrom(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSlotTo">
        <Form.Label>Select time</Form.Label>
        <Form.Control 
           type="time" 
           name="slot" 
           value={slotto}
           onChange={(e) => setSlotTo(e.target.value)}
        />
        {/* <TimePicker  
          step={30}
          value={slotto}
          onChange={(e) => setSlotTo(e.target.value)}
         /> */}
      </Form.Group>
      
      
      <Button   variant="primary" type="submit" block>
        Block
      </Button>
    </Form>
  );
};

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
    // let data = {
    //     Name:e.target[0].value,
    //     Cause:e.target[1].value,
    //     Age:e.target[2].value
    // }
    //this.props.myData(data);
    
    
    
    
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add slots
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
