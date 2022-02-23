import { environment } from "../environment.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { TransactionService } from "../services/transactionService.js";
import { TransactionsView } from "../views/transactionsView.js";

export class TransactionController {
   _transactions = new Transactions();
   _transactionsView = new TransactionsView("#invoiceView");
   _transactionService = new TransactionService();
   _form;
   id = null;
   loading = true;

   constructor(_form) {
      this._form = _form;
      this._transactionsView.update(this._transactions);
      this.init();
   }

   init() {
      this._updateView();
      this._transactionService
         .get()
         .then(({ records }) => {
            this.id = records[0]?.id;
            this._transactions.import(
               JSON.parse(records[0]?.fields.Json || "[]")
            );
         })
         .finally(() => {
            this.loading = false;
            this._updateView();
         });
   }

   add() {
      const { type, name, date, quantity, price } = this._form.elements;

      const validate = this._validation([
         {
            element: type,
            regex: /(-|\+)/,
         },
         {
            element: name,
            regex: /^.{1,}$/,
         },
         {
            element: date,
            regex: /\d{4}-\d{2}-\d{2}/,
         },
         {
            element: quantity,
            regex: /^[1-9]|[0]{1,}[1-9]/,
         },
         {
            element: price,
            regex: /^R\$\s?((\d{1,3}\.)+)?(\d{1,3}\,)(\d{2})$/,
         },
      ]);

      if (validate.length) {
         alert(`Campo(s) inválidos: ${validate.map((i) => i.name).join("; ")}`);
         return;
      }

      const transaction = Transaction.create(
         type.value,
         name.value,
         date.value,
         quantity.value,
         price.value
      );

      this._transactions.add(transaction);
      this._updateView();

      const data = {
         fields: {
            Responsavel: environment.USER,
            Json: JSON.stringify(this._transactions.list()),
         },
      };
      this._transactionService[this.id ? "patch" : "post"](data, this.id).then(
         ({ id }) => (this.id = id)
      );
   }

   delete(index) {
      if (index === "all" && this.id) {
         this._transactionService.delete(this.id);
         this.id = null;
      }
      this._transactions.delete(index);
      this._updateView();
   }

   _clearForm() {
      this._form.reset();
   }

   _updateView() {
      this._transactionsView.update(this._transactions, this.loading);
   }

   _validation(arr) {
      return arr
         .map(({ element, regex }) => {
            const is = new RegExp(regex).test(element.value);
            element.classList[is ? "remove" : "add"]("invalid");
            return { valid: is, name: element.name };
         })
         .filter((v) => !v.valid);
   }
}
