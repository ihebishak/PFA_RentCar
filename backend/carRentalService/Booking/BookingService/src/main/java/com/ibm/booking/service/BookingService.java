package com.ibm.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.booking.bean.Booking;
import com.ibm.booking.repository.BookingRepository;
@Service
public class BookingService {
	
	@Autowired
	BookingRepository repo;
	
	public Iterable<Booking> getAllBookings(){
		return repo.findAll();
	}
	
	public void addBooking(Booking booking) {
		repo.save(booking);
	}

	public Iterable<Booking> getBookingsByUserId(Integer userId) {
		return repo.findByUserDetailsUserId(userId);
		
	}
	

}
