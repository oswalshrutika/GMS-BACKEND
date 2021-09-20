package com.grocery.daos;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.grocery.entities.Order;
import com.grocery.entities.User;

public interface OrderDao extends JpaRepository<Order, Integer> {
	List<Order> findAllByUser(User user);
}
