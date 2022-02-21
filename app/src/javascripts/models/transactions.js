export class Transactions {
   _transactions = [];

   add(transaction) {
      this._transactions.push(transaction);
   }

   list() {
      return this._transactions;
   }
}
