package com.grocery.services;
//package com.grocery.services;
//
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.grocery.daos.OrderDetailsDao;
//import com.grocery.entities.OrderItem;
//
//
//@Transactional
//@Service
//public class OrderDetailsServiceImpl implements OrderDetailsService {
// 
//	@Autowired
//	OrderDetailsDao orderdetailsdao;
//	
//	@Override
//	public OrderItem getProductByProductId(int id) {
//    OrderItem od = getProductByProductId(id); 
//		return od;
//	}
//
//	@Override
//	public OrderItem getPriceByProductId(int id) {
//    OrderItem od = getPriceByProductId(id);
//		return od;
//	}
//
//	@Override
//	public List<OrderItem> getAllOrderDetails(int orderId) {
//		List<OrderItem> od = orderdetailsdao.findAllByOrderId( orderId);
//		return od;
//	}
//
//}
