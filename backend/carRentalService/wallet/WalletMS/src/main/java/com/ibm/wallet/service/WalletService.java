package com.ibm.wallet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.wallet.bean.UserDetails;
import com.ibm.wallet.bean.Wallet;
import com.ibm.wallet.bean.WalletTransaction;
import com.ibm.wallet.dao.WalletRepository;
import com.ibm.wallet.dao.WalletTransactionRepository;

@Service
public class WalletService {
	@Autowired
	WalletRepository walletRepo;
	@Autowired
	WalletTransactionRepository walletTransRepo;
	
	public Double updateWallet(Integer walletId){
		List<WalletTransaction> creditTrans = walletTransRepo.findByWalletWalletIdAndTransactionType(walletId,"credit");
		List<WalletTransaction> debitTrans = walletTransRepo.findByWalletWalletIdAndTransactionType(walletId,"debit");
		Double allCredits = 0.00;
		Double allDebits = 0.00;
		Double updatedWalletBalance;
		for(int i = 0 ; i<creditTrans.size();i++)
		{
			allCredits += creditTrans.get(i).getTransactionAmount();
		}
		for(int i = 0 ; i<debitTrans.size();i++)
		{
			allDebits += debitTrans.get(i).getTransactionAmount();
		}		
		updatedWalletBalance = (allCredits - allDebits);
		Wallet wallet =new Wallet();
		Integer userId = walletRepo.findById(walletId).get().getUserDetails().getUserId();
		wallet.setWalletId(walletId);
		wallet.setUserDetails(new UserDetails(userId, "", "", "", null, null, ""));
		wallet.setBalance(updatedWalletBalance);
		walletRepo.save(wallet);
		return updatedWalletBalance;
	}

	public Wallet findByUserDetailsUserId(Integer userId) {
		// TODO Auto-generated method stub
		return walletRepo.findByUserDetailsUserId(userId);
	}

}
