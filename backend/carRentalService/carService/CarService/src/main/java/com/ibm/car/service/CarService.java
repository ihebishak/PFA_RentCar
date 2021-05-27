package com.ibm.car.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.car.entity.Cars;
import com.ibm.car.repository.CarsRepository;

@Service
public class CarService {

	@Autowired
	CarsRepository carRepo;
		
	public List<Cars> getCarsByCity(String city) {
		return carRepo.findByCity(city);
	}
	
	public Optional<Cars> getCarById(int id) {
		return carRepo.findById(id);
	}
	
	public List<Cars> getCarsByArea(String location) {
		return carRepo.findByLocation(location);
	}
	
	public List<Cars> getAvailableCars(String city){
		return carRepo.fetchCarsByAvailability(city);
	}

	public void addCars(Cars car) {
		carRepo.save(car);	
	}

	public Iterable<Cars> getAllCars() {
		return carRepo.findAll();
	}

	public void deleteCarById(int carId) {
		carRepo.deleteById(carId);	
	}

	public void updatecar(int carId, Cars car) {
		carRepo.save(car);		
	}
	
	
}

