package com.grocery.custom_exception;

@SuppressWarnings("serial")
public class SellerServiceException extends RuntimeException {
public SellerServiceException(String mesg) {
	super(mesg);
}
}
