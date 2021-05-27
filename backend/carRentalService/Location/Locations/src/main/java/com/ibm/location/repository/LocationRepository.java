package com.ibm.location.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.location.entity.Locations;

public interface LocationRepository extends CrudRepository<Locations, Integer> {

	List<Locations> findByCity(String city);
}
