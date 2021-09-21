package com.grocery.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;

public interface CartItemsDao extends JpaRepository<CartItem, Integer> {

	public List<CartItem> findAllByCart(Cart cart);



	
}

