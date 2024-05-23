package com.emsbackend.ems.mapper;

import com.emsbackend.ems.dto.EmployeeDTO;
import com.emsbackend.ems.etity.EmployeeEntity;

public class EmployeeMapper {
    public static EmployeeDTO mapToEmployeeDTO(EmployeeEntity employeeEntity) {
        return new EmployeeDTO(
            employeeEntity.getId(),
            employeeEntity.getFirstname(),
            employeeEntity.getLastname(),
            employeeEntity.getEmail(),
            employeeEntity.getSalary()
        );
    }

    public static EmployeeEntity mapToEmployeeEntity(EmployeeDTO employeeDTO) {
        return new EmployeeEntity(
            employeeDTO.getId(),
            employeeDTO.getFirstname(),
            employeeDTO.getLastname(),
            employeeDTO.getEmail(),
            employeeDTO.getSalary()
        );
    }
}
