export function amount(price) {
   const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(price || 0);
   return amount.replace(/\s+/, " ");
}
