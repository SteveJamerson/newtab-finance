import "./../stylesheets/style.scss";

import "./active";
import "./price";

import { TransactionController } from "./controllers/transactionController.js";

const form = document.getElementById("form-add");
const controller = new TransactionController(form);
console.log(controller);

form.addEventListener("submit", (e) => {
   e.preventDefault();
   controller.add();
});
