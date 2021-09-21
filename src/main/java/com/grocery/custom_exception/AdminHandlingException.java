package com.grocery.custom_exception;

@SuppressWarnings("serial")
public class AdminHandlingException extends RuntimeException {
public AdminHandlingException(String mesg) {
	super(mesg);
}
@Override
public synchronized Throwable fillInStackTrace() {
    return this;
}

}
