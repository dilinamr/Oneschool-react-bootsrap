import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function StudentForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    admissionNumber: "",
    dateOfAdmission: "",
    firstName: "",
    lastName: "",
    gender: "",
    religion: "",
    email: "",
    address: "",
    phone: "",
    educationLevel: "",
  });
const [educations] = useState([
  {id:1,name:"SSLC"},
  { id : 2 , name :"PLUS TWO" },
  {id : 3 , name :"DIPLOMA"},
  {id : 4 , name :"DEGREE"}
  
])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, send data to an API or perform validation.
    console.log(formData);
    handleClose();
  };
  const handleReset = () => {
    // Reset the form data state to its initial values
    setFormData({
      admissionNumber: null,
      dateOfAdmission: null,
      firstName: null,
      lastName: null,
      gender: null,
      religion: null,
      email: null,
      address: null,
      phone: null,
      educationLevel: null,
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Admission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="admissionNumber" className="mb-3">
              <Form.Label>Admission Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter admission number"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="dateOfAdmission" className="mb-3">
              <Form.Label>Date of Admission</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAdmission"
                value={formData.dateOfAdmission}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* gender */}
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="educationLevel" className="mb-3">
              <Form.Label>Education Level</Form.Label>
              <Form.Select
               
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Education Level</option>
               {educations.map((education)=><option value={education.id}>{education.name}</option>)}
                
                
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="religion" className="mb-3">
              <Form.Label>Religion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter religion"
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="address" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <div className="float-end">
            <Button variant="secondary" type="reset" className="mr" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StudentForm;
