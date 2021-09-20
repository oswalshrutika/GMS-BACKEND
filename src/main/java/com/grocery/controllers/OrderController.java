package com.grocery.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.daos.OrderItemDao;
import com.grocery.daos.ProductItemDao;
import com.grocery.daos.Userdao;
import com.grocery.dtos.OrderDTO;
import com.grocery.dtos.OrderDTO1;
import com.grocery.dtos.OrderItemDTO;
import com.grocery.dtos.OrderItemDTO1;
import com.grocery.dtos.ErrorResponse;
import com.grocery.dtos.UserDto;
import com.grocery.entities.Order;
import com.grocery.entities.OrderItem;
import com.grocery.entities.Product;
import com.grocery.entities.User;
import com.grocery.services.OrderService;
import com.grocery.services.OrderServiceImpl;
import com.grocery.services.ProductService;

@CrossOrigin
@RequestMapping("/orders")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping("/addorder")
	private ResponseEntity<?> saveOrder(@RequestBody OrderDTO dto) {

		Order order = orderService.saveOrderFromDto(dto);
		OrderDTO1 orderDTO1 = OrderDTO1.fromEntity(order);
		if( orderDTO1 != null )
		return ResponseEntity.ok(orderDTO1);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("/{id}")
	private ResponseEntity<?> getOrder(@PathVariable("id") int custId) {
		System.out.println("in order controller");
		List<Order> orderList= orderService.getOrdersByCustId(custId);
		List<OrderDTO1> orderDtoList = new ArrayList<OrderDTO1>();
		for (Order order : orderList) {
			orderDtoList.add(OrderDTO1.fromEntity(order));
		}
		if( orderDtoList != null )
			return ResponseEntity.ok(orderDtoList);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

	}
	



}
