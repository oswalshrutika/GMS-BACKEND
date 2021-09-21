package com.grocery.custom_exception;

@SuppressWarnings("serial")
public class CartHandlingException extends RuntimeException {
public CartHandlingException(String mesg) {
	super(mesg);
}
@Override
public synchronized Throwable fillInStackTrace() {
    return this;
}

}
