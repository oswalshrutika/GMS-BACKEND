package com.grocery.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.grocery.entities.Product;

public interface ProductItemDao extends JpaRepository<Product, Integer>{

	Product findByProductId(int id);
	Product findByProductName(String name);
	List<Product> findAll();
	List<Product> findAllByProductName(String name);

	boolean existsByProductName(String name);
	boolean existsByProductId(int id);
	
	boolean deleteByProductId(int id);
	boolean deleteByProductName(String name);
	
	
}


