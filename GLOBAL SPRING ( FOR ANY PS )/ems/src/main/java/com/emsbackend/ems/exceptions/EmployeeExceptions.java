package com.emsbackend.ems.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EmployeeExceptions extends RuntimeException {
    
    public EmployeeExceptions(String message){
        super();
    }

}
