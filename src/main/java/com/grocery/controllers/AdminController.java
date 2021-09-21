package com.grocery.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.entities.User;
import com.grocery.services.UserService;
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
   @Autowired
   private UserService uservice;
   
   Logger logger = LoggerFactory.getLogger(AdminController.class);
   
   public AdminController() {
	//System.out.println("in admin Controller");
}
   
   @GetMapping("/customers")
	public ResponseEntity<List<User>> findAll() {
	   
	   logger.trace("Admin controller : findAll method Accessed");
		List<User> list = uservice.getUserList();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
   
   @GetMapping("/sellers")
	public ResponseEntity<List<User>> findAllSeller() {
	   
	   logger.trace("Admin controller : findAllSeller method Accessed");
		List<User> list = uservice.SellersList();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
   
   @PostMapping("/customerspost")
	public @ResponseBody User findById(@RequestBody User user) {
	   
	   logger.trace("Admin controller : findById method Accessed");
		User cust = uservice.getUser(user.getId());
		System.out.println("user :"+cust);
		return cust;
	}
   
   @GetMapping("/customers/email/{email}")
	public ResponseEntity<User> findByEmail(@PathVariable("email") String email) {
	   logger.trace("Admin controller : findByEmail method Accessed");
	   
		User cust = uservice.findByEmail(email);
		if(cust == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(cust);
	}
   
   @DeleteMapping("/customer/delete/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") int id) {
	   
	   logger.trace("Admin controller : deleteById method Accessed");
		boolean success = uservice.deleteById(id);
		return ResponseEntity.ok(success);
	}
   
   @PostMapping("/register")
   public ResponseEntity<?> createAccount(@RequestBody User a){
	   
	   logger.trace("Admin controller : createAccount method Accessed");
	   
	   System.out.println("admin controller  :" + a);
	   User user = uservice.RegisterAccount(a);
	   if(user == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	   return ResponseEntity.ok(user);
   }


}
