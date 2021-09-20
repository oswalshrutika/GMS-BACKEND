package com.grocery.controllers;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.entities.Seller;
import com.grocery.entities.User;
import com.grocery.services.SellerService;
import com.grocery.services.UserService;
@CrossOrigin
@RestController
@RequestMapping("/seller")
public class SellerController {
         @Autowired
         private SellerService sellerService;
         public SellerController() {
			//System.out.println("In Seller Controller ");
		}
         @GetMapping("/{sellerId}")
         public ResponseEntity<?> getSeller(@PathVariable Integer sellerId) {
                 Optional<Seller> seller = sellerService.fetchSellerDetails(sellerId);
                 if(seller==null)
                	  return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
             return ResponseEntity.ok(seller);
        }
         @PostMapping("/signup")
  	   public ResponseEntity<?> createAccount(@RequestBody Seller seller){
        	 seller.setRole("SELLER");
        	 System.out.println("seller :"+ seller);
  		   return ResponseEntity.ok(sellerService.SignupSellerAccount(seller));
  	   }
         
         @PostMapping("/sellerAuthenticate")
     	public ResponseEntity<?> ValidUser(@RequestBody Seller seller) {
     		Optional<Seller> validSeller = sellerService.validateSeller(seller.getCompanyEmail(), seller.getPassword());
     		if(validSeller == null)
     			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
     		return ResponseEntity.ok(validSeller);
     	}
         
         @GetMapping("")
         public ResponseEntity<?> getSellerList() {
            List<Seller> seller = sellerService.fetchDetailsSellerList();
                 if(seller.isEmpty())
                	  return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
             return ResponseEntity.ok(seller);
        }
         

         
         @PutMapping("/edit-profile")
      	public ResponseEntity<?> updateSellerDetails( @RequestBody Seller seller ) {
      		Seller seller2 = sellerService.findBySellerId(seller.getSellerId());
      		System.out.println("seller from front end :" + seller);
      		if(seller2!=null) {
      			seller2.setCompanyName(seller.getCompanyName());
      			seller2.setCompanyPhone(seller.getCompanyPhone());
      			seller2.setCompanyAddress(seller.getCompanyAddress());
      			seller2.setGSTIN(seller.getGSTIN());
      			
      			Seller updatedSeller = sellerService.save(seller2);   
      			System.out.println("updated Seller :" + updatedSeller);
      			
      			ResponseEntity.ok(updatedSeller);
      		}
			return null;
      		
      	}
         
         
         @PutMapping("/update/{sellerId}") 
     	public ResponseEntity<?> UpdatePasswordSeller(@PathVariable int sellerId, @RequestBody Seller seller) {
     		System.out.println("in update a/c " + seller + " " + sellerId);
     		return ResponseEntity.ok(sellerService.updateSellerAccount(sellerId, seller));
     	}
}