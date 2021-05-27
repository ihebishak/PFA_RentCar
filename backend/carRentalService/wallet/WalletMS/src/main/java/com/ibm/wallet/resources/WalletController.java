package com.ibm.wallet.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.wallet.bean.Wallet;
import com.ibm.wallet.dao.WalletRepository;
import com.ibm.wallet.service.WalletService;

import io.swagger.annotations.ApiOperation;



@RestController
@RequestMapping("wallets")
public class WalletController {
	
	@Autowired
	WalletRepository repo;
	
	@Autowired
	WalletService service;
	
	
	@ApiOperation(value = "Get wallet details",
			  notes = "Hit this url to get wallet details with respect to userId.",
			  response = Wallet.class
			 )
	@RequestMapping("{userId}")
	Wallet getWalletByUserId(@PathVariable Integer userId) {
		return service.findByUserDetailsUserId(userId);
//		return repo.findByUserDetailsUserId(userId);		
	}
	
	
	@ApiOperation(value = "Get Wallet Transactions",
			  notes = "Hit this url to get wallet transactions.",
			  response = Double.class
			 )
	@RequestMapping(method = RequestMethod.PUT,value = "{walletId}/transaction")
	Double getTrans(@PathVariable Integer walletId){
		return service.updateWallet(walletId);
	}

}
