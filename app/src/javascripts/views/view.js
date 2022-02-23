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

   update(model, loading) {
      let template = this.template(model, loading);
      this.elemento.innerHTML = template;
   }

   template(model, loading) {
      throw Error(`Template não implementado.`);
   }
}
