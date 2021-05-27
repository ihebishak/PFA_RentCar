package com.ibm.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.booking.bean.Booking;
import com.ibm.booking.service.BookingService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("bookings")
public class BookingController {
	
	@Autowired
	BookingService service;
	
	
	@ApiOperation(value = "Get all the bookings.",
			  notes = "Hit this url to get all the bookings of a user from databse.",
			  response = Iterable.class
			 )
	@RequestMapping("")
	Iterable<Booking> getAllBookings(){
		return service.getAllBookings();
	}
	
	
	@ApiOperation(value = "Add booking",
				  notes = "Hit this url to add bookings in the databse.",
			      response = void.class
			 )
	@RequestMapping(method = RequestMethod.POST,value = "")
	void addBooking(@RequestBody Booking booking){
		service.addBooking(booking);
	}
	
	@ApiOperation(value = "Get all the bookings of user",
			  notes = "Hit this url to get all the bookings of a particular user from database.",
			  response = Iterable.class
			 )
	@RequestMapping("{userId}")
	Iterable<Booking> getBookingByUserId(@PathVariable Integer userId){
		return service.getBookingsByUserId(userId);
	}
}
