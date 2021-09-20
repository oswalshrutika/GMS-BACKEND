package com.grocery.controllers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.dtos.CartDto;
import com.grocery.dtos.CartItemDto;
import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;
import com.grocery.entities.User;
import com.grocery.services.CartItemsService;
import com.grocery.services.CartService;
import com.grocery.services.UserService;
@CrossOrigin
@RequestMapping("/cart")
@RestController
public class RestCartController {
	
	@Autowired
	CartService cartService;
	
	@Autowired
	CartItemsService cartItemsService;
	
	@Autowired
	private UserService uservice;

	@GetMapping("/{id}")
	public ResponseEntity<?> getCart(@PathVariable("id") int customerId) {
		
		User user = uservice.getUser(customerId);
		Cart cart = user.getCart();
		System.out.println("cart controller : "+cart);
		return ResponseEntity.ok(CartDto.fromEntity(cart));
	}

	@PostMapping("/{id}")
	public ResponseEntity<?> saveCart(@PathVariable("id") int customerId, @RequestBody CartItem cartItem ) {
		Cart cart = new Cart(customerId);

		cart.addItemsInCart(cartItem);
		cartService.saveCart(cart);

		return ResponseEntity.ok("success");

	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> addProductInCart(@PathVariable("id") int customerId, @RequestBody CartItemDto cartItemDto ) {
		Cart cart = cartService.addItemInCart(customerId,cartItemDto);
		return ResponseEntity.ok(CartDto.fromEntity(cart));
	}
	
	@PutMapping("remove/{id}")
	public ResponseEntity<?> removeProductInCart(@PathVariable("id") int customerId, @RequestBody CartItemDto cartItemDto ) {
		Cart cart = cartService.removeItemInCart(customerId,cartItemDto);
		return ResponseEntity.ok(CartDto.fromEntity(cart));
	}
}
