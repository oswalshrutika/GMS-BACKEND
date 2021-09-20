package com.grocery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.grocery.entities.Category;
import com.grocery.entities.Product;
import com.grocery.services.CategoryService;
import com.grocery.services.ProductService;

@EnableAutoConfiguration(exclude = SecurityAutoConfiguration.class)
@SpringBootApplication
public class GroceryShopManagementApplication  implements CommandLineRunner{
// final version of project
//	@Autowired
//	private CategoryService cservice;
//	
//	@Autowired
//	private ProductService pservice;
	
	public static void main(String[] args) {
		SpringApplication.run(GroceryShopManagementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}

}
