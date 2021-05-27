package com.ibm.booking.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cars")
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="model_no")
	Integer id;
	
	@Column(name="car_name")
	String carName;
	
	@Column(name="transmission_type")
	String transmissionType;
	
	@Column(name="fuel_type")
	String fuelType;
	
	@Column(name="num_of_seats")
	Integer numOfSeats;

	@Column(name="price_per_km")
	Integer pricePerKm;
	
	@Column(name="car_img_url")
	String imageUrl;
	
	@Column(name="car_type")
	String carType;
	
	@Column(name="location")
	String location;
	
	@Column(name="is_booked")
	Boolean isBooked;
	
	@Column(name="booking_price")
	Integer bookingPrice;
	
	@Column(name="city")
	String city;
	
	
	public Car() {
		
	}

	

	public Car(Integer id, String carName, String transmissionType, String fuelType, Integer numOfSeats, Integer pricePerKm,
			String imageUrl, String carType, String location, boolean isBooked, Integer bookingPrice, String city) {
		this.carName = carName;
		this.transmissionType = transmissionType;
		this.fuelType = fuelType;
		this.numOfSeats = numOfSeats;
		this.pricePerKm = pricePerKm;
		this.imageUrl = imageUrl;
		this.carType = carType;
		this.location = location;
		this.isBooked = isBooked;
		this.bookingPrice = bookingPrice;
		this.city = city;
		this.id = id;
	}



	public boolean isBooked() {
		return isBooked;
	}

	public void setBooked(boolean isBooked) {
		this.isBooked = isBooked;
	}

	public Integer getBookingPrice() {
		return bookingPrice;
	}

	public void setBookingPrice(Integer bookingPrice) {
		this.bookingPrice = bookingPrice;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
	}

	public String getTransmissionType() {
		return transmissionType;
	}

	public void setTransmissionType(String transmissionType) {
		this.transmissionType = transmissionType;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public Integer getNumOfSeats() {
		return numOfSeats;
	}

	public void setNumOfSeats(Integer numOfSeats) {
		this.numOfSeats = numOfSeats;
	}

	public Integer getPricePerKm() {
		return pricePerKm;
	}

	public void setPricePerKm(Integer pricePerKm) {
		this.pricePerKm = pricePerKm;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getId() {
		return id;
	}


}
