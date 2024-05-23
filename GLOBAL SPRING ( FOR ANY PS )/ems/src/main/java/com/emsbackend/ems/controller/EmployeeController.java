package com.emsbackend.ems.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emsbackend.ems.dto.EmployeeDTO;
import com.emsbackend.ems.service.EmployeeService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;
    
    @PostMapping()
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        return new ResponseEntity<>(employeeService.createEmployee(employeeDTO), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Long id){
        return new ResponseEntity<>(employeeService.getEmployeeById(id), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO){
        return new ResponseEntity<>(employeeService.updateEmployee(id, employeeDTO), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>("Employee with id " + id + " deleted successfully", HttpStatus.OK);
    }

    @GetMapping("salary/{salary}")
    public ResponseEntity<List<EmployeeDTO>> getEmployeeWithSalaryGreaterThan(@PathVariable Long salary){
        return new ResponseEntity<>(employeeService.getEmployeeBySalaryGreaterThan(salary), HttpStatus.OK);
    }

}