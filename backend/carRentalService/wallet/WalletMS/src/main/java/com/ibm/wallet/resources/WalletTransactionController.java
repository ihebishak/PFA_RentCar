package com.ibm.wallet.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.wallet.bean.Wallet;
import com.ibm.wallet.bean.WalletTransaction;
import com.ibm.wallet.dao.WalletTransactionRepository;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("")
public class WalletTransactionController {
	
	@Autowired
	WalletTransactionRepository repo;
	
	
	@ApiOperation(value = "Get wallet Transactions",
				notes = "Hit this url to get wallet transactions from database..",
				response = Iterable.class
			 )
	@RequestMapping("/walletTransactions")
	Iterable<WalletTransaction> getWalletTransaction() {
		return repo.findAll();
	}
	
	
	@ApiOperation(value = "Get wallet transactions.",
			  notes = "Hit this url to get wallet transactions with respect to wallet Id.",
			  response = List.class
			 )
	@RequestMapping("/walletTransactions/{walletId}")
	List<WalletTransaction> getWalletTransactionByWalletId(@PathVariable Integer walletId) {
		return repo.findByWalletWalletId(walletId);
	}
	
	
	@ApiOperation(value = "Add wallet Transactions",
			  notes = "Hit this url to add wallet transactions in the database.",
			  response = void.class
			 )
	@RequestMapping(method = RequestMethod.POST, value ="/walletTransactions/{walletId}")
	public void addWalletTransaction(@RequestBody WalletTransaction walletTransaction,@PathVariable Integer walletId)
	{
		walletTransaction.setWallet(new Wallet(walletId,null,null));
		repo.save(walletTransaction);
	}
}
