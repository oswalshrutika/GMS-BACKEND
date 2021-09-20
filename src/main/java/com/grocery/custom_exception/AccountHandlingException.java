package com.grocery.custom_exception;

@SuppressWarnings("serial")
public class AccountHandlingException extends RuntimeException {
public AccountHandlingException(String mesg) {
	super(mesg);
}
}
