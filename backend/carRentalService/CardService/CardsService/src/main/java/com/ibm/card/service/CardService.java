package com.ibm.card.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.card.entity.CardsDetails;
import com.ibm.card.entity.UserDetails;
import com.ibm.card.repository.CardRepository;

@Service
public class CardService {

	@Autowired
	CardRepository repo;

	public void addCard(CardsDetails card, Integer userId) {
		card.setUser(new UserDetails(userId));
		repo.save(card);
	}

	public List<CardsDetails> getCardsByUserId(Integer userId){
		return repo.findByUserUserId(userId);
	}

	public void deleteCardById(int cardId) {
			repo.deleteById(cardId);
	}
}
