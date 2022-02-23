import { TransactionService } from "./transactionService";
import {
   get as mockget,
   patch as mockpatch,
   post as mockpost,
   del as mockdelete,
} from "../mocks/transaction.mock";

jest.mock("./transactionService", () => {
   const original = jest.requireActual("./transactionService");
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

describe("TransactionService", () => {
   let service = new TransactionService();

   it("should create", () => {
      expect(service).toBeTruthy();
   });
});
