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
    skills: [],
  });
  const [educations] = useState([
    { id: 1, name: "SSLC" },
    { id: 2, name: "PLUS TWO" },
    { id: 3, name: "DIPLOMA" },
    { id: 4, name: "DEGREE" },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log(e.target.value)
  // };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle checkbox inputs
      if (checked) {
        // If the checkbox is checked, add the value to the skills array
        setFormData((prevData) => ({
          ...prevData,
          skills: [...prevData.skills, value],
        }));
      } else {
        // If the checkbox is unchecked, remove the value from the skills array
        setFormData((prevData) => ({
          ...prevData,
          skills: prevData.skills.filter((skill) => skill !== value),
        }));
      }
    } else {
      // Handle other input types
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, send data to an API or perform validation.
    console.log(formData);
    handleClose();
    handleReset();
  };
  const handleReset = () => {
    // Reset the form data state to its initial values
    setFormData({
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
      skills: [],
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="float-end">
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Student Admission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scrollable-modal-body">
          <Form onSubmit={handleSubmit}>
            {/* ADDMISION NUMBER */}

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
            {/* DATE OF ADMISSION */}
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
            {/* FRIST NAME */}
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
            {/* LAST NAME */}
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
            {/* EMAIL */}

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* PHONE NUMBER */}
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* GENDER */}
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    id="male-radio"
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
                    id="female-radio"
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
                    id="other-radio"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Form.Group>
            {/* EDUCATION DROPDOWN */}
            <Form.Group controlId="educationLevel" className="mb-3">
              <Form.Label>Education Level</Form.Label>
              <Form.Select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Education Level</option>
                {educations.map((education) => (
                  <option value={education.id} key={education.id}>
                    {education.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* RELIGION */}
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
            {/* SKILLS */}
            <Form.Group controlId="skills" className="mb-3">
              <Form.Label>Skills</Form.Label>
              <div className="d-flex">
                
                  <Form.Check className="mr"
                    type="checkbox"
                    label="HTML"
                    name="HTML"
                    value="HTML"
                    id="html-checkbox"
                    checked={formData.skills.includes("HTML")}
                    onChange={handleInputChange}
                  />
                
                  <Form.Check className="mr"
                    type="checkbox"
                    label="CSS"
                    name="CSS"
                    value="CSS"
                    id="css-checkbox"
                    checked={formData.skills.includes("CSS")}
                    onChange={handleInputChange}
                  />
                
                  <Form.Check className="mr"
                    type="checkbox"
                    label="React"
                    name="React"
                    value="React"
                    id="react-checkbox"
                    checked={formData.skills.includes("React")}
                    onChange={handleInputChange}
                  />
                
                  <Form.Check className="mr"
                    type="checkbox"
                    label="JavaScript"
                    name="JavaScript"
                    value="JavaScript"
                    id="javascript-checkbox"
                    checked={formData.skills.includes("JavaScript")}
                    onChange={handleInputChange}
                  />
                
              </div>
            </Form.Group>

            {/* ADDRESS */}
            <Form.Group controlId="address" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* SUBMIT & RESET */}
            <div className="float-end mb">
              <Button
                variant="secondary"
                type="reset"
                className="mr"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button variant="primary" type="submit">
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
