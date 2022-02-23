import { environment } from "../environment.js";

export class TransactionService {
   _url = `${environment.PATH}/${environment.KEY}/Historico`;
   _headers = new Headers({
      Authorization: environment.AUTH,
      "Content-Type": "application/json",
   });

   get() {
      return fetch(
         `${this._url}?filterByFormula=Responsavel=${environment.USER}`,
         {
            headers: this._headers,
         }
      )
         .then((response) => response.json())
         .then((data) => data)
         .catch((e) => console.log(e));
   }

   post(params) {
      return fetch(this._url, {
         method: "POST",
         headers: this._headers,
         body: JSON.stringify(params),
      })
         .then((response) => response.json())
         .then((data) => data)
         .catch((e) => console.log(e));
   }

   patch(params, id) {
      return fetch(`${this._url}/${id}`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify(params),
      })
         .then((response) => response.json())
         .then((data) => data)
         .catch((e) => console.log(e));
   }

   delete(id) {
      return fetch(`${this._url}/${id}`, {
         method: "DELETE",
         headers: this._headers,
      })
         .then((response) => response.json())
         .then((data) => data)
         .catch((e) => console.log(e));
   }
}
