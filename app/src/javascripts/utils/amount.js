export function amount(price) {
   const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(price);
   return amount;
}
