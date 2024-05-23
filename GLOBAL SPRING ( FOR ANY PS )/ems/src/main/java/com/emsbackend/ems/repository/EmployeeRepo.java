package com.emsbackend.ems.repository;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.emsbackend.ems.etity.EmployeeEntity;

public interface EmployeeRepo extends JpaRepository<EmployeeEntity, Long>{


    @Query(value="select * from employee emp where emp.salary > ?1", nativeQuery = true)
    List<EmployeeEntity> getEmployeeBySalaryGreaterThan(Long salary);
    
}
