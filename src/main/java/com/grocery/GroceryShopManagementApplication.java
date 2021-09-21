package com.grocery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;



import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@EnableAutoConfiguration(exclude = SecurityAutoConfiguration.class)
@SpringBootApplication
public class GroceryShopManagementApplication  implements CommandLineRunner{

	
	public static void main(String[] args) {
		SpringApplication.run(GroceryShopManagementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}

}
