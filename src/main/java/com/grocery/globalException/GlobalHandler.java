package com.grocery.globalException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.grocery.custom_exception.AccountHandlingException;
import com.grocery.dtos.ErrorResponse;

@ControllerAdvice
public class GlobalHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(AccountHandlingException.class)
	public ResponseEntity<?> handleAccountHandlingException(AccountHandlingException e) {
		System.out.println("in acct handling exc " + e);
		return new ResponseEntity<>(new ErrorResponse("Fetching User summary failed ", e.getMessage()),
				HttpStatus.NOT_FOUND);
	}

//    @Override
//    @ExceptionHandler(HttpMessageNotReadableException.class)
//    public ResponseEntity<?> HttpMessageNotReadableException(HttpMessageNotReadableException e) {
//		System.out.println("in acct handling exc " + e);
//		return new ResponseEntity<>(new ErrorResponse("Fetching User summary failed ", e.getMessage()),
//				HttpStatus.NOT_FOUND);
//	}
//    
	// HttpMessageNotReadableException

//    @Override
//    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request){
//    	
//    	return new ResponseEntity<>(new ErrorResponse("RequestBody is empty please add proper fields.", e.getMessage()), HttpStatus.NOT_FOUND);
//    }

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		return new ResponseEntity<>(new ErrorResponse("Requestbody is empty please add proper field ", ex.getMessage()),
				HttpStatus.NOT_FOUND);
	}

}
