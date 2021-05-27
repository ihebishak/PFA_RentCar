package com.ibm.user.controller;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ibm.user.entity.UserDetails;
import com.ibm.user.service.UserDetailsService;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("users")
public class UserDetailsController {

	@Autowired
	UserDetailsService service;

	@ApiOperation(value = "Get all Users", notes = "Hit this url to get all the Users from the databse.", response = Iterable.class)
	@RequestMapping("")
	Iterable<UserDetails> getAllUsers() {
		return service.getAllUsers();
	}

	@ApiOperation(value = "Get a specific user by id", notes = "Hit this url to Get a specific user by id from database", response = Optional.class)
	@RequestMapping("/{id}")
	Optional<UserDetails> getUserById(@PathVariable Integer id) {
		return service.getUserById(id);
	}

	@ApiOperation(value = "User Login", notes = "Hit this url to login the user", response = Boolean.class)
	@RequestMapping(method = RequestMethod.POST, value = "/login")
	boolean userLogin(@RequestBody UserDetails user) {
		return service.userLogin(user);
	}

	@ApiOperation(value = "Update a user", notes = "Hit this url to update user's information in the database", response = void.class)
	@RequestMapping(method = RequestMethod.PUT, value = "/{userId}")
	public void updateUserById(@RequestBody UserDetails user, @PathVariable Integer userId) {
		service.updateUser(user);
	}

	/*
	 * // no use of right now
	 * 
	 * @RequestMapping(method = RequestMethod.PUT,value =
	 * "/users/{userId}/password-reset") public boolean matchPassword(@PathVariable
	 * Integer userId,@RequestBody String password,String newPassword) { return
	 * service.changePassword(userId, password, "kjh"); }
	 */

	@RequestMapping(method = RequestMethod.POST, value="")
	boolean addUser(@RequestBody UserDetails user){
	return service.addUser(user);
	}

	@ApiOperation(value = "Upload front image of licence", notes = "Hit this url to save front image of driving licenece to database", response = int.class)
	@RequestMapping(method = RequestMethod.PUT, value = "/front")
	int uploadFront(@RequestParam("front") MultipartFile front, @RequestParam("email") String email) {
		
		UserDetails user = null;
		try {
			
			user = new UserDetails(null, (email.replace('\"',' ')).trim(), null, front.getBytes(), null, null);
			System.out.println("Email:::::::::"+(email.replace('\"',' ')).trim());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return service.uploadFront(user);
	}

	@ApiOperation(value = "Upload back image of licence", notes = "Hit this url to save back image of driving licenece to database", response = int.class)
	@RequestMapping(method = RequestMethod.PUT, value = "/back")
	int uploadBack(@RequestParam("back") MultipartFile back, @RequestParam("email") String email) {
		UserDetails user = null;
		try {
			user = new UserDetails(null, (email.replace('\"',' ')).trim(), null, null, back.getBytes(), null);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return service.uploadBack(user);

	}

}
