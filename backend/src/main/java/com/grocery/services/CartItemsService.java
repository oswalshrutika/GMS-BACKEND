package com.grocery.services;

import java.util.List;

import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;

public interface CartItemsService {
	public Cart findByCartId(int id);

	public void addItemInCart(CartItem cartItem);
	public void addItemsInCart(List<CartItem> cartItems);

	public  List<CartItem> getAllItemOfCart(Cart cart);
}
