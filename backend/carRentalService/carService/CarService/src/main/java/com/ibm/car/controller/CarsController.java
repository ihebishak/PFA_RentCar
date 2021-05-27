package com.ibm.car.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.car.entity.Cars;
import com.ibm.car.service.CarService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("cars")
@Api(value = "CarsController", description = "Contains API's for Cars")
public class CarsController {

	@Autowired
	CarService service;
	
	@ApiOperation(value = "Get all the Cars",
				  notes = "Hit this url for fetching all cars from database",
				  response = Iterable.class
				 )
	@RequestMapping("")
	Iterable<Cars> getAllCars(){
		return service.getAllCars();
	}

	
	@ApiOperation(value = "Gets the Cars with respect to the Cities",
				  notes = "Hit this url for fetching all cars in a particular city from database",
				  response = List.class
			   	)
	@RequestMapping("list/{city}")
	List<Cars> getCarsByCity(@PathVariable String city){
		return service.getCarsByCity(city);
	}
	
	
	@ApiOperation(value = "Gets the Cars with respect to a locality",
			notes = "Hit this url for fetching all cars in particular locality from database",
			response = List.class
				)
	@RequestMapping("list/city/{location}")
	List<Cars> getCarsByArea(@PathVariable String location){
		return service.getCarsByArea(location);
	}
	
	
	@ApiOperation(value = "Gets the id of a Car",
			notes = "Hit this url for fetching id of a car from database",
			response = Optional.class
				)
	@RequestMapping("{id}")
	Optional<Cars> getCarById(@PathVariable int id) {
		return service.getCarById(id);
	}
	
	@ApiOperation(value = "Gets the Cars which are Available for booking",
				  notes = "Hit this url for fetching all cars which are available for booking from database",
			      response = List.class
				)
	@RequestMapping("available/{city}")
	List<Cars> getAvailableCars(@PathVariable String city){
		return service.getAvailableCars(city);
	}
	
	@ApiOperation(value = "To add the Cars in the Database",
				  notes = "Hit this url to add the cars in database.",
		         response = void.class
			)
	@RequestMapping(method = RequestMethod.POST, value = "/cars")
	void addCars(@RequestBody Cars car) {
		service.addCars(car);
	}
	
	
	@ApiOperation(value = "Delete the cars from database.",
			      notes = "Hit this url to Delete the cars by id from database.",
		          response = void.class
			     )
	@RequestMapping(method = RequestMethod.DELETE, value="cars/{carId}/id")
	void deleteCarById(@PathVariable int carId) {
		service.deleteCarById(carId);
	}
	
	
	@ApiOperation(value = "Update the cars in the database.",
		          notes = "Hit this url to Edit the cars by id in the database.",
	              response = void.class
		          )
	@RequestMapping(method = RequestMethod.PUT, value="cars/{carId}")
	void updatecar(@PathVariable int carId, @RequestBody Cars car) {
		service.updatecar(carId, car);
	}
}
