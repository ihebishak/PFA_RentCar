package com.ibm.card.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel
public class UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer userId;
	
	String fullName;
	
	String email;
	
	String phone;
	
	@Lob
	byte frontLicenseImageUrl[];
	
	@Lob
	byte backLicenseImageUrl[];
	
	String password;
	
	UserDetails(){}
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getUserId() {
		return userId;
	}
	public String getEmail() {
		return email;
	}

	public byte[] getFrontLicenseImageUrl() {
		return frontLicenseImageUrl;
	}

	public void setFrontLicenseImageUrl(byte[] frontLicenseImageUrl) {
		this.frontLicenseImageUrl = frontLicenseImageUrl;
	}

	public byte[] getBackLicenseImageUrl() {
		return backLicenseImageUrl;
	}

	public void setBackLicenseImageUrl(byte[] backLicenseImageUrl) {
		this.backLicenseImageUrl = backLicenseImageUrl;
	}

	public UserDetails(Integer userId, String fullName, String email, String phone, byte frontLicenseImageUrl[],
			byte backLicenseImageUrl[], String password) {
		
		this.userId = userId;
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.frontLicenseImageUrl = frontLicenseImageUrl;
		this.backLicenseImageUrl = backLicenseImageUrl;
		this.password = password;
	}
	
	public UserDetails(Integer userId) {
		this.userId = userId;
}
	
}
