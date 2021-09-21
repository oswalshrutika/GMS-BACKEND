package com.grocery.custom_exception;

@SuppressWarnings("serial")
public class SellerHandlingException extends RuntimeException {
public SellerHandlingException(String mesg) {
	super(mesg);
}
}
