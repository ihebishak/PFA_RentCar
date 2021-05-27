import { Wallet } from './Wallet';

export class WalletTransaction {
	transactionId: number;
	transactionType: String;
	transactionAmount: number;
	transactionDate: Date;
	wallet: Wallet;
	transactionDetail: String;

	constructor(transactionDate, transactionType, transactionAmount, transactionDetail) {
		this.transactionDate = transactionDate
		this.transactionType = transactionType;
		this.transactionAmount = transactionAmount;
		this.transactionDetail = transactionDetail;

	}
}