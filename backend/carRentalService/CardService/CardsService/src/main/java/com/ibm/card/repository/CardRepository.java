package com.ibm.card.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.card.entity.CardsDetails;

@Repository
public interface CardRepository extends CrudRepository<CardsDetails, Integer> {

	List<CardsDetails> findByUserUserId(Integer userId);
	
}
