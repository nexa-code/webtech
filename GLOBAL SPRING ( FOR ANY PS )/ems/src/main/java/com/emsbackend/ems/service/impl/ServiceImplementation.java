package com.emsbackend.ems.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.emsbackend.ems.dto.EmployeeDTO;
import com.emsbackend.ems.etity.EmployeeEntity;
import com.emsbackend.ems.exceptions.EmployeeExceptions;
import com.emsbackend.ems.mapper.EmployeeMapper;
import com.emsbackend.ems.repository.EmployeeRepo;
import com.emsbackend.ems.service.EmployeeService;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@Service
public class ServiceImplementation implements EmployeeService{

    EmployeeRepo employeeRepo;


    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        return EmployeeMapper.mapToEmployeeDTO(employeeRepo.save(EmployeeMapper.mapToEmployeeEntity(employeeDTO)));
    }


    @Override
    public List<EmployeeDTO> getEmployees() {

        return employeeRepo.findAll().stream().map((emp) -> EmployeeMapper.mapToEmployeeDTO(emp)).collect(Collectors.toList());
    }


    @Override
    public EmployeeDTO getEmployeeById(Long id) {

        return EmployeeMapper.mapToEmployeeDTO(employeeRepo.findById(id).orElseThrow(()-> new EmployeeExceptions("Employee with id " + id + " does not exist")));
    }


    @Override
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO) {
        EmployeeEntity employeeEntity = employeeRepo.findById(id).orElseThrow(() -> new EmployeeExceptions("Employee with id " + id + " does not exist"));
        employeeEntity.setFirstname(null != employeeDTO.getFirstname() ? employeeDTO.getFirstname() : employeeEntity.getFirstname());
        employeeEntity.setLastname(null != employeeDTO.getLastname() ? employeeDTO.getLastname() : employeeEntity.getLastname());
        employeeEntity.setEmail(null != employeeDTO.getEmail() ? employeeDTO.getEmail() : employeeEntity.getEmail());
        employeeEntity.setSalary(null != employeeDTO.getSalary() ? employeeDTO.getSalary() : employeeEntity.getSalary());

        return EmployeeMapper.mapToEmployeeDTO(employeeRepo.save(employeeEntity));
    }


    @Override
    public void deleteEmployee(Long id) {
        employeeRepo.deleteById(id);
    }


    @Override
    public List<EmployeeDTO> getEmployeeBySalaryGreaterThan(Long salary) {
        return employeeRepo.getEmployeeBySalaryGreaterThan(salary).stream().map((emp) -> EmployeeMapper.mapToEmployeeDTO(emp)).collect(Collectors.toList());
    }
    
    
}
