import { useState } from "react";
import Main from "../layouts/Main";
import {Row,Col,Table } from "react-bootstrap";
const Staff = () => {
    
    const staffs =[{firstname:"dilin",lastname:"am",mobile:"98954123",email:"dilin@gmail.com",city:"clt",joindate:"2019",salary:"1200",role:"teacher"}]


    const [staff,setStaff]=useState([staffs]);

    return(<>
    <Main>
    <Row className="mt-5">
      <Col> 
        <h2>Staff</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.no.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Join Date</th>
          <th>Role</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
      {/* {student.length===0?(<tr className="text-center"><td colSpan="8">NO RECORDS FOUND</td></tr>): */}

       { (staffs.map((staff,key)=>(
        <tr key={key}>
          <td>{key+1}</td>
          <td>{staff.firstname}</td>
          <td>{staff.lastname}</td>
          <td>{staff.mobile}</td>
          <td>{staff.email}</td>
          <td>{staff.city}</td>
          <td>{staff.joindate}</td>
          <td>{staff.role}</td>
          <td>{staff.salary}</td>
          
        </tr>
        )))}
      </tbody>
    </Table>
    </Col>
    </Row>
    </Main>
    </>);
};
export default Staff;