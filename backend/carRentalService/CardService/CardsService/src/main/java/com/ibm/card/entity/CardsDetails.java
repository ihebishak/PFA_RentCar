package com.ibm.card.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
public class CardsDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer cardId;
	
	//12 digit card Number.
	String cardNum;
	
	//Expiry month of a card.
	String expMonth;
	
	//Expiry Year of a card.
	String expYear;
	
	//CVV number of a card.
	String cvv;
	
	//The name of the Card Holder
	String cardHolderName;
	
	
	@ManyToOne
	UserDetails user; 
	
	
	public String getCardHolderName() {
		return cardHolderName;
	}

	public Integer getCardId() {
		return cardId;
	}

	public void setCardId(Integer cardId) {
		this.cardId = cardId;
	}

	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}

	
	
	public CardsDetails() {
		
	}

	public String getCardNum() {
		return cardNum;
	}

	public void setCardNum(String cardNum) {
		this.cardNum = cardNum;
	}

	public String getExpMonth() {
		return expMonth;
	}

	public void setExpMonth(String expMonth) {
		this.expMonth = expMonth;
	}

	public String getExpYear() {
		return expYear;
	}

	public void setExpYear(String expYear) {
		this.expYear = expYear;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public UserDetails getUser() {
		return user;
	}

	public void setUser(UserDetails user) {
		this.user = user;
	}

	public CardsDetails(String cardNum, String expMonth, String expYear, String cvv, String cardHolderName, Integer userId) {
		this.cardNum = cardNum;
		this.expMonth = expMonth;
		this.expYear = expYear;
		this.cvv = cvv;
		this.cardHolderName = cardHolderName;
		this.user = new UserDetails(userId);
	}
	
	
}
