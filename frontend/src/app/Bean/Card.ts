import { User } from './User';

export class Card{
    cardId="";
    cardNum="";
    cvv="";
    expMonth="";
    expYear="";
    cardHolderName="";
    userDetails:User;

    constructor(cardNum,cvv,expMonth,expYear,cardHolderName,userDetails){
        this.cardNum = cardNum;
        this.cvv = cvv;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cardHolderName = cardHolderName;
        this.userDetails = userDetails;
    }
}