package com.ibm.location.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.location.entity.Locations;
import com.ibm.location.service.LocationService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("locations")
public class LocationController {

	@Autowired
	LocationService service;
	
	@ApiOperation(value = "Get the localities with respect to City",
			  notes = "Hit this url for fetching the localities with respect to city",
			  response = List.class
			 )
	@RequestMapping("{city}")
	 List<Locations> getLocationsByCity(@PathVariable String city){
		return service.getLocationsByCity(city);
	}
	
}
