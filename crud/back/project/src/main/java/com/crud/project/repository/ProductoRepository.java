package com.crud.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.crud.project.model.ProductoModel;

@Repository
public interface ProductoRepository extends CrudRepository<ProductoModel,Integer> {
    
}
