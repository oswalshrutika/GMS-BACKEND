package com.grocery.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.daos.CategoryDao;
import com.grocery.dtos.CategoryDto;
import com.grocery.dtos.CategoryImageDto;
import com.grocery.dtos.ProductItemDto;
import com.grocery.entities.Category;
import com.grocery.entities.Product;
import com.grocery.services.CategoryService;
@CrossOrigin
@RequestMapping("/category")
@RestController
public class RestCategoryController {
	
	Logger logger = LoggerFactory.getLogger(RestCategoryController.class);

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private CategoryDao categoryDao;


	@GetMapping("/id/{id}")
	public ResponseEntity<?> findByCategoryId(@PathVariable("id") int categoryId) {
		
		logger.trace("Category controller : findByCategoryId method Accessed");
		Category newCategory=categoryService.findByCategoryId(categoryId);
		CategoryDto categoryDto = CategoryDto.fromEntity(newCategory);
		System.out.println("categoryDto :" + categoryDto);
		return ResponseEntity.ok(categoryDto);
	}


	@GetMapping("/name/{name}")
	public ResponseEntity<?> findByCategoryName(@PathVariable("name") String categoryName) {
		
		logger.trace("Category controller : findByCategoryName method Accessed");
		Category newCategory = categoryService.findByCategoryName(categoryName);
		CategoryDto categoryDto = CategoryDto.fromEntity(newCategory);
	return ResponseEntity.ok(categoryDto);

	}
	

	@GetMapping("")
	public ResponseEntity<?> findAllCategory() {
		
		logger.trace("Category controller : findAllCategory method Accessed");
		List<Category> categoryList = categoryService.findAll();
		List<CategoryDto> list = new ArrayList<>();
		for (Category category : categoryList) {
			CategoryDto categoryDto = CategoryDto.fromEntity(category);
			list.add(categoryDto);
		}
		return ResponseEntity.ok(list);		
	}
	
	
	@PostMapping("")
	public ResponseEntity<?> saveCategoryWithImage(CategoryImageDto categorydto) {
		
		logger.trace("Category controller : saveCategoryWithImage method Accessed");
		Category category = CategoryImageDto.toEntity(categorydto);
		category=categoryService.saveWithImage(category, categorydto.getCategoryImage());
		System.out.println("categoryDto :" + categorydto);
		int id= category.getCategoryId();
		categorydto.setCategoryId(id);
		categoryService.saveWithImage(category, categorydto.getCategoryImage());
				return ResponseEntity.ok(category);
		
		

	}
	

	@PutMapping("/name/{name}")
	public ResponseEntity<?> updateCategoryByName(@RequestBody Category c, @PathVariable("name") String name) {
	
		logger.trace("Category controller : updateCategoryByName method Accessed");
		Category category2 = categoryService.findByCategoryName(name);
		c.setCategoryId(category2.getCategoryId());
		Category category = categoryService.save(c);
		CategoryDto categoryDto = CategoryDto.fromEntity(category);
		return ResponseEntity.ok(categoryDto);
	}

	
	@DeleteMapping("/id/{id}")
	public void deleteCategoryById(@PathVariable("id") int id) {
		
		logger.trace("Category controller : deleteCategoryById method Accessed");
	categoryDao.deleteById(id);
	
	}


	@DeleteMapping("/name/{name}")
	public void deleteCategoryByName(@PathVariable("name") String name) {
		
		logger.trace("Category controller : deleteCategoryByName method Accessed");
		
		Category category = categoryService.findByCategoryName(name);
	categoryDao.deleteById(category.getCategoryId());
	}
	
}
