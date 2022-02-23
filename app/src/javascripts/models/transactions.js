import { Transaction } from "./transaction.js";

export class Transactions {
   _transactions = [];

   add(transaction) {
      this._transactions.push(transaction);
   }

   delete(index) {
      index === "all"
         ? (this._transactions = [])
         : this._transactions.splice(index, 1);
   }

   import(transactions) {
      transactions.forEach((element) => {
         this._transactions.push(
            new Transaction(
               element._type,
               element._name,
               element._date,
               element._quantity,
               element._price
            )
         );
      });
   }

   list() {
      return this._transactions;
   }
}
