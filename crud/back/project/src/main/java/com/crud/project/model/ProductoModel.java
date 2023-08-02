package com.crud.project.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
public class ProductoModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idproducto;
    private String nombreproducto;
    private Integer precioproducto;
    private Integer cantidadproducto;
    private Date fecha;


    public ProductoModel() {
    }


    public ProductoModel(Integer idproducto, String nombreproducto, Integer precioproducto, Integer cantidadproducto,
            Date fecha) {
        this.idproducto = idproducto;
        this.nombreproducto = nombreproducto;
        this.precioproducto = precioproducto;
        this.cantidadproducto = cantidadproducto;
        this.fecha = fecha;
    }


    public Integer getIdproducto() {
        return idproducto;
    }


    public void setIdproducto(Integer idproducto) {
        this.idproducto = idproducto;
    }


    public String getNombreproducto() {
        return nombreproducto;
    }


    public void setNombreproducto(String nombreproducto) {
        this.nombreproducto = nombreproducto;
    }


    public Integer getPrecioproducto() {
        return precioproducto;
    }


    public void setPrecioproducto(Integer precioproducto) {
        this.precioproducto = precioproducto;
    }


    public Integer getCantidadproducto() {
        return cantidadproducto;
    }


    public void setCantidadproducto(Integer cantidadproducto) {
        this.cantidadproducto = cantidadproducto;
    }


    public Date getFecha() {
        return fecha;
    }


    public void setFecha(Date fecha) {
        this.fecha = fecha;
    } 

    



    

    
}
