import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/employee";

export const getEmployees = async() => {
    return await axios.get(BASE_API_URL);
}

export const createEmployee = async(employee) => {
    return await axios.post(BASE_API_URL, employee)
}

export const updateEmployee = async(id, employee) => {
    return await axios.put(BASE_API_URL + '/' + id, employee)
}

export const getEmployeeById = async(id) => {
    return await axios.get(BASE_API_URL+ '/' + id)
}

export const deleteEmployee = async(id) => {
    return await axios.delete(BASE_API_URL + '/' + id)
}