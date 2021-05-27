package com.ibm.wallet.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel
public class Wallet {
	
	@ApiModelProperty(value = "Unique id of wallet. It is a primary key and Auto incremented.")
	@Id
	Integer walletId;
	
	@ApiModelProperty(value = "Object of User Bean.")
	@OneToOne
	UserDetails userDetails;
	
	@ApiModelProperty(value = "Wallet Balance.")
	Double balance;
	
	public Wallet() {
		// TODO Auto-generated constructor stub
	}

	public Wallet(Integer walletId, Integer userDetails, Double balance) {
		super();
		this.walletId = walletId;
		this.userDetails = new UserDetails(userDetails,"","","",null ,null ,"");
		this.balance = balance;
	}

	public Integer getWalletId() {
		return walletId;
	}

	public void setWalletId(Integer walletId) {
		this.walletId = walletId;
	}

	public UserDetails getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}
}
