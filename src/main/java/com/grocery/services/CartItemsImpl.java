package com.grocery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.daos.CartItemsDao;
import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;

@Service
public class CartItemsImpl implements CartItemsService {

	@Autowired
	CartItemsDao cartItemsDao;
	
	@Override
	public Cart findByCartId(int id) {
		return null;
	}

	@Override
	public void addItemInCart(CartItem cartItem) {
		cartItemsDao.save(cartItem);	
	}
	
	@Override
	public void addItemsInCart(List<CartItem> cartItems) {
		cartItemsDao.saveAll(cartItems);
	}
	
	@Override
	public List<CartItem> getAllItemOfCart(Cart cart) {
		return cartItemsDao.findAllByCart(cart);
	}
}
