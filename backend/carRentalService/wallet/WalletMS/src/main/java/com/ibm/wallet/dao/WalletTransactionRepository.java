package com.ibm.wallet.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.wallet.bean.WalletTransaction;
@Repository
public interface WalletTransactionRepository extends CrudRepository<WalletTransaction, Integer> {

	List<WalletTransaction> findByWalletWalletId(Integer walletId);

	List<WalletTransaction> findByWalletWalletIdAndTransactionType(Integer walletId,String transactionType);

//	@Query(value = "update wallet set balance=((select sum(transaction_amount) from wallet_transaction where wallet_id=:walletId and transaction_type='credit')-(select sum(transaction_amount) form wallet_transaction where wallet_id=:walletId and transaction_type='debit')) where wallet_id=:walletId", nativeQuery = true)
//	void updateWalletBalance(@Param(value = "walletId") Integer walletId);
	
}
