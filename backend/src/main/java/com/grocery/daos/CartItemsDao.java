package com.grocery.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;

public interface CartItemsDao extends JpaRepository<CartItem, Integer> {

	public List<CartItem> findAllByCart(Cart cart);



	
}

