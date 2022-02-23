import "./../stylesheets/style.scss";

import "./active";
import "./price";

import { TransactionController } from "./controllers/transactionController.js";

document.addEventListener("DOMContentLoaded", function () {
   "use strict";
   const form = document.getElementById("form-add");
   const controller = new TransactionController(form);

   const clear = document.getElementById("clear");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      controller.add();
   });

   clear.addEventListener("click", (e) => {
      e.preventDefault();
      controller.delete("all");
   });
});
