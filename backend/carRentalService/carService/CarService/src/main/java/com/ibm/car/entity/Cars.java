package com.ibm.car.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel
@Table(name = "cars")
public class Cars {
	
	@ApiModelProperty(value = "Unique Id of a Car. It is a primary key and Auto incremented.")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "model_no")
	Integer id;
	
	@ApiModelProperty(value = "num of seats available in a car")
	int numOfSeats;
	
	@ApiModelProperty(notes = "Name of the car")
	String carName;
	
	@ApiModelProperty(notes = "Transmission Type of a car")
	String transmissionType;
	
	@ApiModelProperty(notes = "Fuel Type of a car")
	String fuelType;
	
	@ApiModelProperty(notes = "location of the car")
	String location;
	
	@ApiModelProperty(notes = "Type of a car")
	String carType;
	
	@ApiModelProperty(notes = "Price per Km of a car")
	String pricePerKm;
	
	@ApiModelProperty(notes = "Booking price of a car")
	String bookingPrice;
	
	@ApiModelProperty(notes = "Image url of the car ")
	String imageUrl;
	
	@ApiModelProperty(notes = "City in which the car is available.")
	String city;
	
	@ApiModelProperty(notes = "Tells us if the car is booked or not")
	Boolean isBooked;
	
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Boolean getisBooked() {
		return isBooked;
	}

	public void setisBooked(Boolean isBooked) {
		this.isBooked = isBooked;
	}

	public String getimageUrl() {
		return imageUrl;
	}

	public void setimgUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	Cars(){}

	public int getNumOfSeats() {
		return numOfSeats;
	}

	public void setNumOfSeats(int numOfSeats) {
		this.numOfSeats = numOfSeats;
	}

	public String getcarName() {
		return carName;
	}

	public void setcarName(String carName) {
		this.carName = carName;
	}

	public String gettransmissionType() {
		return transmissionType;
	}

	public void settransmissionType(String transmissionType) {
		this.transmissionType = transmissionType;
	}

	public String getfuelType() {
		return fuelType;
	}

	public void setfuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getcarType() {
		return carType;
	}

	public void setcarType(String carType) {
		this.carType = carType;
	}

	public String getpricePerKm() {
		return pricePerKm;
	}

	public void setpricePerKm(String pricePerKm) {
		this.pricePerKm = pricePerKm;
	}

	public String getbookingPrice() {
		return bookingPrice;
	}

	public void setbookingPrice(String bookingPrice) {
		this.bookingPrice = bookingPrice;
	}

	public Integer getId() {
		return id;
	}

}
