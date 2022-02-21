export class View {
   elemento;

   constructor(seletor) {
      const elemento = document.querySelector(seletor);
      if (elemento) {
         this.elemento = elemento;
      } else {
         throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
      }
   }

   update(model) {
      let template = this.template(model);
      this.elemento.innerHTML = template;
   }

   template(model) {
      throw Error(`Template não implementado.`);
   }
}
