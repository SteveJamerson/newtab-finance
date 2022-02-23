import { TransactionController } from "./transactionController";
import {
   get as mockget,
   patch as mockpatch,
   post as mockpost,
   del as mockdelete,
} from "../mocks/transaction.mock";
import { page } from "../mocks/transactionPage.mock";

window.alert = jest.fn();

jest.mock("../services/transactionService", () => {
   const original = jest.requireActual("../services/transactionService");
   class TransactionServiceMock {
      get(..._) {
         return new Promise((resolve) => {
            return resolve(mockget);
         });
      }
      patch(..._) {
         return new Promise((resolve) => {
            return resolve(mockpatch);
         });
      }
      post(..._) {
         return new Promise((resolve) => {
            return resolve(mockpost);
         });
      }
      delete(..._) {
         return new Promise((resolve) => {
            return resolve(mockdelete);
         });
      }
   }
   return {
      ...original,
      TransactionService: TransactionServiceMock,
   };
});

describe("TransactionController", () => {
   const parser = new DOMParser();
   document.body.innerHTML = parser.parseFromString(
      page,
      "text/html"
   ).body.innerHTML;
   const form = document.getElementById("form-add");
   const { type, name, date, quantity, price } = form.elements;

   let model = new TransactionController(form, "#invoiceView");
   window.alert.mockClear();
   beforeEach(async () => {});

   it("should create", () => {
      expect(model).toBeTruthy();
   });

   it("should add create", () => {
      model.add();
   });

   it("should add update", () => {
      model.id = "recEPV0IRluOr2v5u";
      model.add();
   });

   it("should add invalid", () => {
      price.value = "U$ 100000.00";
      model.add();
   });

   it("should delete first", () => {
      model.id = "recEPV0IRluOr2v5u";
      model.delete(0);
   });

   it("should delete all", () => {
      model.id = "recEPV0IRluOr2v5u";
      model.delete("all");
   });
});
