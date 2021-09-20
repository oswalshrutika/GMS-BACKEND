package com.grocery.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.daos.CartDao;
import com.grocery.daos.CartItemsDao;
import com.grocery.daos.ProductItemDao;
import com.grocery.dtos.CartItemDto;
import com.grocery.entities.Cart;
import com.grocery.entities.CartItem;
import com.grocery.entities.User;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartDao cartDao;
	
	@Autowired
	CartItemsDao cartItemDao;
	
	@Autowired
	private UserService uservice;
	
	@Autowired
	private ProductItemDao productDao;
	
	@Override
	public Cart getCartByCartId(int id) {
		return null;
	}

	@Override
	public Cart getCartBycustomerId(int customerId) {
		return cartDao.findByCustomerId(customerId).orElse(null);
	}
	
	@Override
	public void AddCart(Cart cart) {
		cartDao.save(cart);
		
	}
	
	@Override
	public void saveCart(Cart cart1) {
		cartDao.save(cart1);
	}
	
	@Override
	public Cart addItemInCart(int customerId, CartItemDto cartItemDto) {
		User user = uservice.getUser(customerId);
		Cart cart = user.getCart();
		CartItem item = new CartItem();
		item.setProduct(productDao.findByProductId(cartItemDto.getProductId()));
		item.setProductQuantity(cartItemDto.getProductQuantity());
		cart.addItemsInCart(item);
		return cartDao.save(cart);
	}
	
	@Override
	public Cart removeItemInCart(int customerId, CartItemDto cartItemDto) {
		User user = uservice.getUser(customerId);
		Cart cart = user.getCart();
		System.out.println("cart " + cart);
		cart.getCartItems().forEach(item ->{
			System.out.println("product id : " +item.getProduct().getProductId() + "del pro id  : " + cartItemDto.getProductId()  );
			System.out.println(item.getProduct().getProductId() == cartItemDto.getProductId());
			if(item.getProduct().getProductId() == cartItemDto.getProductId()){
				System.out.println(item);
				cartItemDao.deleteById(item.getCartItemId());
		}	
		});
		cart.getCartItems().removeIf(item ->(item.getProduct().getProductId() == cartItemDto.getProductId()));
		
		
		System.out.println("cart " + cart);
		return cartDao.save(cart);
	}

}
