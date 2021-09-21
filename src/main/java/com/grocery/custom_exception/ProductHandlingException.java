package com.grocery.custom_exception;

import ch.qos.logback.classic.Logger;

@SuppressWarnings("serial")
public class ProductHandlingException extends RuntimeException {
public ProductHandlingException(String mesg) {
	super(mesg);
}

@Override
public synchronized Throwable fillInStackTrace() {
    return this;
}

}
