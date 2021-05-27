package com.ibm.wallet.dao;

import org.springframework.data.repository.CrudRepository;

import com.ibm.wallet.bean.Wallet;

public interface WalletRepository extends CrudRepository<Wallet, Integer> {
	
	

	Wallet findByUserDetailsUserId(Integer userId);
}
