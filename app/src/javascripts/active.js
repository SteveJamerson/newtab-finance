var Active = (function () {
   "use strict";
   const selector = `data-active`;
   var init = function () {
      var elements = document.querySelectorAll(`[${selector}]`);
      for (let index = 0; index < elements.length; index++) {
         const element = elements[index];
         element.addEventListener("click", (e) => {
            e.preventDefault();
            const cls = "active";
            const id = e.target.getAttribute(selector);
            const target = document.getElementById(id);
            const is = target.classList.contains(cls);
            const seletors = document.querySelectorAll(`[${selector}=${id}]`);
            const action = is ? "remove" : "add";
            seletors.forEach((s) => s.classList[action](cls));
            target.classList[action](cls);
         });
      }
   };
   return {
      init,
   };
})();
document.addEventListener("DOMContentLoaded", function () {
   "use strict";
   Active.init();
});
