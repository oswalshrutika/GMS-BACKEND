package com.grocery.services;

import java.util.List;
import java.util.Optional;

import com.grocery.entities.Seller;
import com.grocery.entities.User;

public interface SellerService {
	Optional<Seller> fetchSellerDetails( Integer sellerId);

	Seller SignupSellerAccount(Seller seller);

	List<Seller> fetchDetailsSellerList();

	

	Optional<Seller> validateSeller(String companyEmail, String password);

	Seller updateSellerProfile(int sellerId, Seller seller);

	Seller findBySellerId(int sellerId);

	Seller save(Seller seller2);

	Seller updateSellerAccount(int sellerId, Seller seller);

	

}
