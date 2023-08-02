package com.crud.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.project.model.ProductoModel;
import com.crud.project.repository.ProductoRepository;

@RestController
@RequestMapping("/api")
public class ProductoController {
    
    @Autowired
    public ProductoRepository productoRepository;

    @GetMapping(value ="/producto")
    public Iterable<ProductoModel> getAllProductos(){
        return productoRepository.findAll();
    }

    @PostMapping(value = "/producto/new")
    public ProductoModel saveProducto(@RequestBody ProductoModel producto){
        return productoRepository.save(producto);
    }
    @DeleteMapping(value="/producto/delete/{id}")
    public void deleteProducto(@PathVariable Integer id){
        productoRepository.deleteById(id);
    }

}
