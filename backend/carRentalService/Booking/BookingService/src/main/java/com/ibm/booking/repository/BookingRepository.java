package com.ibm.booking.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.booking.bean.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer>{

	List<Booking> findByUserDetailsUserId(Integer userId);
		

}
