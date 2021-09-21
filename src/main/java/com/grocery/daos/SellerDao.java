package com.grocery.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.entities.Seller;

public interface SellerDao extends JpaRepository<Seller, Integer> {

	Optional<Seller> findByCompanyEmailAndPassword(String companyEmail, String password);
	
	

}
