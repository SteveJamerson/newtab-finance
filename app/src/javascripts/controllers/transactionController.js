import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { TransactionsView } from "../views/transactionsView.js";

export class TransactionController {
   _transactions = new Transactions();
   _transactionsView = new TransactionsView("#invoiceView");
   _form;

   constructor(_form) {
      this._form = _form;
      this._transactionsView.update(this._transactions);

      console.log(this._form);
   }

   add() {
      const { type, name, date, quantity, price } = this._form.elements;
      const transaction = Transaction.create(
         type.value,
         name.value,
         date.value,
         quantity.value,
         price.value
      );
      this._transactions.add(transaction);
      this._updateView();
   }

   _clearForm() {
      this._form.reset();
   }

   _updateView() {
      this._transactionsView.update(this._transactions);
   }

   _validation() {
      const { type, name, date, quantity, price } = this._form.elements;
      [type, name, date, quantity, price].forEach((v) => {
         v.value === ""
            ? () => {
                 console.log(v.value);
                 throw Error(`Campo ${v.name} é obrigatório.`);
              }
            : console.log(v.value);
      });
   }
}
