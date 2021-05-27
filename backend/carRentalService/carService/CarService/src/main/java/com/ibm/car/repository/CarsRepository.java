package com.ibm.car.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ibm.car.entity.Cars;

public interface CarsRepository extends CrudRepository<Cars, Integer> {

	List<Cars> findByCity(String city);
	
	List<Cars> findByLocation(String location);

	@Query(value = "select * from cars where city = :city and is_booked = 0", nativeQuery = true)
	List<Cars> fetchCarsByAvailability(@Param(value = "city") String city);
	
}
