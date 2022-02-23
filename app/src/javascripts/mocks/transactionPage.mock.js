export const page = /*html*/ `
<table class="table" id="invoiceView"></table>
<form class="form-add" name="form-add" id="form-add">
<h5>Nova transação</h5>
<div class="row">
   <fieldset class="col-12 col-md-3 col-lg-12">
      <label for="type">Data da transação</label>
      <input
         type="date"
         name="date"
         id="date"
         class="field"
         value="2022-02-23"
         required
      />
   </fieldset>
   <fieldset class="col-12 col-md-3 col-lg-12">
      <label for="type">Tipe de transação</label>
      <select name="type" id="type" class="field" required>
         <option value="" hidden>Selecione uma opção</option>
         <option value="-">Compra</option>
         <option value="+" selected>Venda</option>
      </select>
   </fieldset>
   <fieldset class="col-12 col-md-6 col-lg-12">
      <label for="name">Nome da mercadoria</label>
      <input
         type="text"
         name="name"
         id="name"
         class="field"
         required
         placeholder="Insira o nome"
         value="Mercadoria Teste"
      />
   </fieldset>
   <fieldset class="col-3 col-md-6 col-lg-3">
      <label for="price">Quant</label>
      <input
         type="number"
         name="quantity"
         id="quantity"
         class="field"
         required
         placeholder="1"
         minlength="1"
         maxlength="10000000"
         value="7"
      />
   </fieldset>
   <fieldset class="col-9 col-md-6 col-lg-9">
      <label for="price">Valor</label>
      <input
         type="text"
         name="price"
         id="price"
         class="field"
         required
         placeholder="R$ 0,00"
         data-price
         value="R$ 12.345,67"
      />
   </fieldset>
</div>
<button class="button full primary" type="submit">
   Adicionar transação
</button>
</form>
`;
