package com.ibm.wallet.bean;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel
public class WalletTransaction {

	@ApiModelProperty(value = "Unique id for wallet transaction. It is a primary key and Auto incremented.")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer transactionId;
	
	@ApiModelProperty(value = "Types of transactions.")
	String transactionType;
	
	@ApiModelProperty(value = "Transaction details")
	String transactionDetail;
	
	@ApiModelProperty(value = "Amout of transactions.")
	Double transactionAmount;
	
	@ApiModelProperty(value = "Date of transaction")
	Date transactionDate;
	
	@ApiModelProperty(value = "Object of Wallet.")
	@ManyToOne
	Wallet wallet;

	public String getTransactionDetail() {
		return transactionDetail;
	}

	public void setTransactionDetail(String transactionDetail) {
		this.transactionDetail = transactionDetail;
	}

	public Integer getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Integer transactionId) {
		this.transactionId = transactionId;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public Double getTransactionAmount() {
		return transactionAmount;
	}

	public void setTransactionAmount(Double transactionAmount) {
		this.transactionAmount = transactionAmount;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public Wallet getWallet() {
		return wallet;
	}

	public void setWallet(Wallet wallet) {
		this.wallet = wallet;
	}

	public WalletTransaction(String transactionType, Double transactionAmount, Date transactionDate, Integer walletId,
			String transactionDetail) {

		this.transactionType = transactionType;
		this.transactionAmount = transactionAmount;
		this.transactionDate = transactionDate;
		this.transactionDetail = transactionDetail;
		this.wallet = new Wallet(walletId, null, null);
	}

	public WalletTransaction() {
	}
}
