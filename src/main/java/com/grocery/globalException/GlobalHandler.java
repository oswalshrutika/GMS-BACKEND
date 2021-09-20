package com.grocery.globalException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.grocery.custom_exception.AccountHandlingException;
import com.grocery.dtos.ErrorResponse;

@ControllerAdvice
public class GlobalHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(AccountHandlingException.class)
    public ResponseEntity<?> handleAccountHandlingException(AccountHandlingException e) {
		System.out.println("in acct handling exc " + e);
		return new ResponseEntity<>(new ErrorResponse("Fetching User summary failed ", e.getMessage()),
				HttpStatus.NOT_FOUND);
	}
}
