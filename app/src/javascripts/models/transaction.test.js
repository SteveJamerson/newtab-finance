import { Transaction } from "./transaction";

describe("Transaction", () => {
   const [type, name, date, quantity, price] = [
      "-",
      "Mercadoria Teste",
      "2022-02-23",
      "7",
      "R$ 12.345,67",
   ];
   let model = new Transaction(type, name, date, quantity, 12345.67);

   it("should create", () => {
      expect(model).toBeTruthy();
   });

   it("should create static", () => {
      expect(
         Transaction.create(type, name, date, quantity, price)
      ).toBeTruthy();
   });

   describe("GET", () => {
      it("type", () => {
         expect(model.type).toBeTruthy();
      });

      it("name", () => {
         expect(model.name).toBeTruthy();
      });

      it("date", () => {
         expect(model.date).toBeTruthy();
      });

      it("price", () => {
         expect(model.price).toBeTruthy();
      });

      it("quantity", () => {
         expect(model.quantity).toBeTruthy();
      });

      it("amount", () => {
         expect(model.amount).toBeTruthy();
      });
   });
});
