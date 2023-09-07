import { useState } from "react";
import Main from "../layouts/Main";
import { Row, Table ,Col} from "react-bootstrap";
import StudentForm from "../components/StudentForm";
const Student = () => {
    
const [student,setStudents]= useState([]);
setTimeout(() => {
    setStudents([{firstname:"dilin",lastname:"am",mobile:"98954123",email:"dilin@gmail.com",city:"clt",degree:"yes",skill:["html","css","react"]},
    {firstname:"bibin",lastname:"das",mobile:"98954123",email:"dilin@gmail.com",city:"knr",skill:["js","html"],degree:"yes"}
])
}, 5000);
console.log(student)
    return(<>
    <Main>
    <Row className="mt-5">
      <Col> 
        <h2>Students</h2>
        <div className="mb-3 float-end">
        <StudentForm/>
        </div>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.no.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Degree</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
      {student.length===0?(<tr className="text-center"><td colSpan="8">NO RECORDS FOUND</td></tr>):

        (student.map((student,key)=>(
        <tr key={key}>
          <td>{key+1}</td>
          <td>{student.firstname}</td>
          <td>{student.lastname}</td>
          <td>{student.mobile}</td>
          <td>{student.email}</td>
          <td>{student.city}</td>
          <td>{student.degree}</td>
          <td>{student.skill.join(", ")}</td>
          
        </tr>
        )))}
      </tbody>
    </Table>
    </Col>
    </Row>
    </Main>
    </>);
};
export default Student;