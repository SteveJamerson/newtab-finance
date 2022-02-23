export class Transaction {
   constructor(_type, _name, _date, _quantity, _price) {
      this._type = _type;
      this._name = _name;
      this._date = _date;
      this._quantity = _quantity;
      this._price = _price;
   }

   static create(type, name, date, quantity, price) {
      const exp = /-/g;
      const d = new Date(date.replace(exp, ","));
      const q = parseInt(quantity);
      const p = parseFloat(price.replace(/\D/g, "")) / 100;
      return new Transaction(type, name, d, q, p);
   }

   get name() {
      return this._name;
   }

   get type() {
      return this._type;
   }

   get price() {
      return this._price;
   }

   get quantity() {
      return this._quantity;
   }

   get amount() {
      return this._quantity * this._price * (this._type === "+" ? 1 : -1);
   }

   get date() {
      const date = new Date(this._date.getTime());
      return date;
   }
}
