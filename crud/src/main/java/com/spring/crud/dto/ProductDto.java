package com.spring.crud.dto;


import javax.validation.constraints.NotBlank;

public class ProductDto {

    @NotBlank
    private String name;
    private Float price;

    public ProductDto(String name, Float price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public ProductDto() {
    }
}
