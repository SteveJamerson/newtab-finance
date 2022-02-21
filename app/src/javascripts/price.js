var Price = (function () {
   "use strict";
   const selector = `data-price`;
   const amount = (price) => {
      const clear = price.replace(/\D/g, "") / 100;
      return new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",
      }).format(clear);
   };

   var init = function () {
      var elements = document.querySelectorAll(`[${selector}]`);
      for (let index = 0; index < elements.length; index++) {
         const element = elements[index];
         element.addEventListener("input", (e) => {
            e.preventDefault();
            const input = e.target;
            input.value = amount(input.value);
         });
      }
   };
   return {
      init,
   };
})();
document.addEventListener("DOMContentLoaded", function () {
   "use strict";
   Price.init();
});
