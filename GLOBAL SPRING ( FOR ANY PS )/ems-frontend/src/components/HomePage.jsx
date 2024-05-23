import React, { useState, useEffect } from "react";
import { deleteEmployee, getEmployees } from "../apiservices/EmployeeServices";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  };

  const navigate = useNavigate();

  const addEmployee = () => {
    navigate("/add-employee");
  }

  const EditEmployee = (id) => {
      navigate("/edit-employee/" + id);
  }

  const DeleteEmployee = (id) => {
    deleteEmployee(id).then((res)=>{
        console.log(res);
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
    }).catch((e)=>{
        console.log(e);
    })
  }

  return (
    <div className="container">
        <h1 className="text-center mb-5 mt-5">Employees List</h1>
        <button className="btn btn-primary mb-3" onClick={() => addEmployee()}>Add Employee</button>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <th scope="row">{employee.id}</th>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>
                <button className="btn btn-primary" style={{marginRight:"10px"}} onClick={() => EditEmployee(employee.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
