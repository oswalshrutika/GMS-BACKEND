package com.grocery.daos;





import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.entities.OrderItem;


public interface OrderItemDao extends JpaRepository<OrderItem, Integer> {
	
	


}
