package com.ibm.booking.bean;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel
@Entity
@Table(name="bookings")
public class Booking {
	
	@ApiModelProperty(value = "Unique id of a booking. It is a primary key and Auto incremented")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer bookingId;
	
	@ApiModelProperty(value = "Start date of a booking")
	String fromDate;
	
	@ApiModelProperty(value = "End date of a booking")
	String tillDate;
	
	@ApiModelProperty(value = "Status of booking")
	Boolean status;
	
	@ApiModelProperty(value = "Date of the booking")
	String bookingDate;
	
	@ApiModelProperty(value = "Object reference of User class")
	@ManyToOne
	UserDetails userDetails;
	
	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getTillDate() {
		return tillDate;
	}

	public void setTillDate(String tillDate) {
		this.tillDate = tillDate;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public UserDetails getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	@OneToOne
	Car car;

	

	public Booking(String fromDate, String tillDate, Boolean status,Integer userId, Integer bookingId, Integer carId) {
		super();
		this.fromDate = fromDate;
		this.tillDate = tillDate;
		this.status = status;
		this.userDetails = new UserDetails(userId,"","","", null, null ,"");
		this.car = new Car(carId, "", "", "", null, null, "", "", "", true, null, "");
	}
	
	public Booking() {
		// TODO Auto-generated constructor stub
	}
	
	
}
