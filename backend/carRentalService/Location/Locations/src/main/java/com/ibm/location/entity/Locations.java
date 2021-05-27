package com.ibm.location.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel
public class Locations {

	@ApiModelProperty(value = "Unique ID of location. It is a primary key and Auto Incremented.")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	
	@ApiModelProperty(value = "Location name in the city")
	String locality;
	
	@ApiModelProperty(value = "City name.")
	String city;
	
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Integer getId() {
		return id;
	}
	
}
