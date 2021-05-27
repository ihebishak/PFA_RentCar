package com.ibm.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.user.entity.UserDetails;
import com.ibm.user.repository.UserDetailsRepository;

@Service
public class UserDetailsService {

	@Autowired
	UserDetailsRepository repo;

	public Iterable<UserDetails> getAllUsers() {
		return repo.findAll();
	}

	public Optional<UserDetails> getUserById(Integer id) {
		return repo.findById(id);
	}

	public boolean addUser(UserDetails user) {
		Optional<UserDetails> exists=repo.findByEmail(user.getEmail());
		boolean isUserExist=exists.isPresent();
		if (!isUserExist) {
			repo.save(user);
		}
		return !isUserExist;
	}

	public boolean userLogin(UserDetails user) {
		boolean isUserExists = false;
		Optional<UserDetails> log = repo.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if (log.isPresent()) {
			isUserExists = true;
		}

		return isUserExists;
	}
	/*
	 * public boolean matchPassword(Integer userId, String password) {
	 * Optional<UserDetails> user = repo.findById(userId); if
	 * (password.equals(user.get().getPassword())) return true; return false;
	 * 
	 * } public boolean changePassword(Integer userId, String password, String
	 * newPassword) { if (matchPassword(userId, password)) { UserDetails user=
	 * repo.findById(userId).get(); user.setPassword(newPassword); repo.save(user);
	 * return true; } return false; }
	 */

	public void updateUser(UserDetails user) {
		repo.save(user);
	}

	@Transactional
	public int uploadFront(UserDetails user) {
		return repo.updateFront(user.getFrontLicenseImageUrl(), user.getEmail());
	}

	@Transactional
	public int uploadBack(UserDetails user) {
		return repo.updateBack(user.getBackLicenseImageUrl(), user.getEmail());
	}

}
