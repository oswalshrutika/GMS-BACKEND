package com.grocery.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.entities.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {

	public Optional<Cart> findByCustomerId(int customerId);
}
