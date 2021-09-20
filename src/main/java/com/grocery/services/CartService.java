package com.grocery.services;

import com.grocery.dtos.CartItemDto;
import com.grocery.entities.Cart;

public interface CartService {
	public Cart getCartByCartId(int id);
	public Cart getCartBycustomerId(int id);
	public void AddCart(Cart cart);
	public void saveCart(Cart cart1);
	public Cart addItemInCart(int customerId, CartItemDto cartItemDto);
	public Cart removeItemInCart(int customerId, CartItemDto cartItemDto);
}
