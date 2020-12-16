package com.spring.crud.controller;

import com.spring.crud.dto.Message;
import com.spring.crud.dto.ProductDto;
import com.spring.crud.entity.Product;
import com.spring.crud.service.ProductService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<Product>> list(){
        List<Product> list = productService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getById(@PathVariable("id") int id){
        if(!productService.existsById(id)){
            return new ResponseEntity(new Message("Does not exist"), HttpStatus.NOT_FOUND);
        }
        Product product = productService.getOne(id).get();
        return new ResponseEntity(product, HttpStatus.OK);
    }

    @GetMapping("/detailname/{name}")
    public ResponseEntity<Product> getByName(@PathVariable("name") String name){
        if(!productService.existsByName(name))
            return new ResponseEntity(new Message("Does not exist"), HttpStatus.NOT_FOUND);

        Product product = productService.getByNames(name).get();
        return new ResponseEntity(product, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductDto productDto){
        if (StringUtils.isBlank(productDto.getName()))
            return new ResponseEntity(new Message("The name is required."), HttpStatus.BAD_REQUEST);
        if(productDto.getPrice() < 0 || productDto.getPrice() == null)
            return new ResponseEntity(new Message("Product price must be greater than 0."), HttpStatus.BAD_REQUEST);
        if(productService.existsByName(productDto.getName()))
            return new ResponseEntity(new Message("This name exists."), HttpStatus.BAD_REQUEST);

        Product product = new Product(productDto.getName(), productDto.getPrice());
        productService.save(product);
        return new ResponseEntity(new Message("Created Product."), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody ProductDto productDto){
        if(!productService.existsById(id))
            return new ResponseEntity(new Message("Does not exist"), HttpStatus.NOT_FOUND);
        if(productService.existsByName(productDto.getName()) && productService.getByNames(productDto.getName()).get().getId() != id)
            return new ResponseEntity(new Message("This name exists."), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(productDto.getName()))
            return new ResponseEntity(new Message("The name is required."), HttpStatus.BAD_REQUEST);
        if(productDto.getPrice() < 0)
            return new ResponseEntity(new Message("Product price must be greater than 0."), HttpStatus.BAD_REQUEST);

        Product product = productService.getOne(id).get();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());

        productService.save(product);
        return new ResponseEntity(new Message("Updated Product."), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!productService.existsById(id))
            return new ResponseEntity(new Message("Was not found"), HttpStatus.NOT_FOUND);

        productService.delete(id);
        return new ResponseEntity(new Message("Successfully deleted"), HttpStatus.OK);
    }
}
