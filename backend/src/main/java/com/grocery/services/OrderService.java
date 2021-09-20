package com.grocery.services;



import java.util.List;

import com.grocery.dtos.OrderDTO;
import com.grocery.entities.Order;

public interface OrderService {

	Order saveOrderFromDto(OrderDTO dto);

	Order saveOrder(Order o);

	List<Order> getOrdersByCustId(int custId);


}
