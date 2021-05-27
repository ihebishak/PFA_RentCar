package com.ibm.card.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.card.entity.CardsDetails;
import com.ibm.card.service.CardService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("users")
public class CardController {
	
	@Autowired
	CardService service;
	
	//Add the Cards
		
	@RequestMapping(method = RequestMethod.POST, value = "{userId}/cards")
	void addCard(@RequestBody CardsDetails card, @PathVariable Integer userId) {
		service.addCard(card, userId);	
	}
	
	
	//Get the all card with respect to user
			
	@RequestMapping("{userId}/cards")
	List<CardsDetails> getCardsByUserId(@PathVariable Integer userId){
		return service.getCardsByUserId(userId);
	}
	
	
	//Delete the Cards.
	
	@RequestMapping(method = RequestMethod.DELETE, value="cards/{cardId}")
	void deleteCardById(@PathVariable int cardId) {
		service.deleteCardById(cardId);
	}
}
