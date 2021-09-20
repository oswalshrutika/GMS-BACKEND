package com.grocery.services;

import java.util.List;
import java.util.Optional;

import com.grocery.dtos.UserDto;
import com.grocery.entities.Role;
import com.grocery.entities.User;
public interface UserService  {
	User validateUser(String email,String password );
	List<User> getUserList();
	List<User> SellersList();
	User updateAccount(int acctId,User user);
	User updateUserProfile(int acctId,User user);
    User getUser(int id);
	User findByEmail(String email);
	boolean deleteById(int id);
	User RegisterAccount(User user);
	User SignupCustomerAccount(User user);
	
}