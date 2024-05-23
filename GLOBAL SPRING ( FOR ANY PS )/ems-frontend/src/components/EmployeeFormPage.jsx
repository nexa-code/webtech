import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createEmployee, getEmployeeById, updateEmployee } from "../apiservices/EmployeeServices";

function EmployeeFormPage() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployeeById(id).then((res) => {
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setEmail(res.data.email);
        setSalary(res.data.salary)
      }).catch((e)=>{
        console.log(e);
      })
    }
  }, [id])
  
  const saveOrUpadteEmployee = (e) => {
    e.preventDefault();

    const employee = { firstname, lastname, email, salary };

    if (id) {
      updateEmployee(id, employee).then((res) => {
        console.log(res.data);
        navigate("/");
      }).catch((e) => {
        console.log(e);
      });
    } else {
      createEmployee(employee).then((res) => {
        console.log(res);
        navigate("/employees");
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Employee Form</h1>
      <p className="text-center">This is the Employee Form Page</p>

      <form onSubmit={saveOrUpadteEmployee}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeFormPage;
