package com.grocery.services;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.daos.SellerDao;
import com.grocery.daos.OrderDao;
import com.grocery.daos.ProductItemDao;
import com.grocery.daos.Userdao;
import com.grocery.dtos.OrderDTO;
import com.grocery.dtos.OrderItemDTO;
import com.grocery.entities.Order;
import com.grocery.entities.OrderItem;
import com.grocery.entities.Product;
import com.grocery.entities.User;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao orderDao;

	@Autowired
	private Userdao userDao;

	@Autowired
	private ProductItemDao productDao;


	
	@Autowired SellerDao sellerDao;

	@Override
	public Order saveOrder(Order o) {
		o.setCreatedAt(new Date());
		o.setModifiedAt(new Date());
		return orderDao.save(o);
	}

	@Override
	public Order saveOrderFromDto(OrderDTO dto) {
		Order order = new Order();
		order.setTotal(dto.getTotal());
		User user = userDao.findById(dto.getUserId()).get();
		order.setUser(user);
		order.setCreatedAt(new Date());
		order.setModifiedAt(new Date());
		Date dt = java.sql.Date.valueOf(LocalDate.now().plusDays(3));
		order.setDeliveryDate(dt);
		List<OrderItemDTO> orderItemDto = dto.getOrderItem();
		for (OrderItemDTO itemDto : orderItemDto) {
			OrderItem item = new OrderItem();
			Product product = productDao.findByProductId(itemDto.getProductId());
			item.setProduct(product);
			item.setQuantity(itemDto.getQuantity());
			item.setCreatedAt(new Date());
			item.setModifiedAt(new Date());
			order.addItemInorder(item);
		}
		

		order = orderDao.save(order);
		return order;
	}
	
	@Override
	public List<Order> getOrdersByCustId(int custId) {
		List<Order> orders = orderDao.findAllByUser(userDao.findById(custId).orElse(null));
		orders.forEach(System.out::println);
		return orders;
	}
	

	
}

