import { amount } from "./amount";

describe("Amount", () => {
   describe("convert in currency", () => {
      it("number positive", () => {
         expect(amount(12345.67)).toBe("R$ 12.345,67");
      });

      it("number negative", () => {
         expect(amount(-12345.67)).toBe("-R$ 12.345,67");
      });

      it("number empty, null and undefined", () => {
         expect(amount("")).toBe("R$ 0,00");
         expect(amount(null)).toBe("R$ 0,00");
         expect(amount(undefined)).toBe("R$ 0,00");
      });
   });
});
