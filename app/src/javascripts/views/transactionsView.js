import { amount } from "../utils/amount.js";
import { View } from "./view.js";

export class TransactionsView extends View {
   template(model, loading) {
      if (loading)
         return /*html*/ `<tbody class="loading"><tr><td>loading</td></tr></tbody>`;
      return !model.list().length
         ? /*html*/ `<tbody class="empty"><tr><td>Sem registros</td></tr></tbody>`
         : /*html*/ `
            <thead>
               <tr>
                  <td></td>
                  <th>Mercadoria</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
               </tr>
            </thead>
            <tbody>
                ${model
                   .list()
                   .map((transaction) => {
                      return /*html*/ `
                        <tr>
                            <td>${transaction.type}
                            </td>
                            <td>
                                ${transaction.name}
                            </td>
                            <td>
                                ${transaction.quantity}
                                <small>x ${this._formatPrice(
                                   transaction.price
                                )}</small>
                            </td>
                            <td>
                                ${this._formatPrice(transaction.amount)}
                            </td>
                        </tr>
                    `;
                   })
                   .join("")}
            </tbody>
            <tfoot>
               <tr>
                  <td></td>
                  <th>Total</th>
                  <td></td>
                  <td>
                     <p><b>${this._profit(
                        model.list().map((t) => t.amount)
                     )}</b></p>
                     <small>[${
                        this._profit(
                           model.list().map((t) => t.amount),
                           "number"
                        ) >= 0
                           ? "LUCRO"
                           : "PREJUIZO"
                     }]</small>
                  </td>
               </tr>
            </tfoot>
        `;
   }

   _formatDate(date) {
      return new Intl.DateTimeFormat().format(date);
   }

   _profit(values, type = "currency") {
      const price = values.reduce((amount, value) => amount + (value || 0), 0);
      if (type === "currency") {
         return amount(price);
      } else {
         return price;
      }
   }

   _formatPrice(price) {
      return amount(Math.abs(price));
   }
}
