package com.ibm.location.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.location.entity.Locations;
import com.ibm.location.repository.LocationRepository;

@Service
public class LocationService {

	@Autowired
	LocationRepository repo;

	public List<Locations> getLocationsByCity(String city) {
		return repo.findByCity(city);
	}
}
