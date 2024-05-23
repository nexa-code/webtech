package com.emsbackend.ems.service;


import java.util.List;

import com.emsbackend.ems.dto.EmployeeDTO;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    List<EmployeeDTO> getEmployees();

    EmployeeDTO getEmployeeById(Long id);

    EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO);

    void deleteEmployee(Long id);

    List<EmployeeDTO> getEmployeeBySalaryGreaterThan(Long salary);

}
