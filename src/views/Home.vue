<template>  
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Quis autem vel eum iure reprehenderit voluptate</h1>
        <p class="col-lg-10 fs-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam velit esse quam nihil molestiae consequatur.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <select class="form-select" aria-label="Default select example">
            <option selected>----------------</option>
            <option value="1">Guayaquil</option>
            <option value="2">Quito</option>
            <option value="3">Manta</option>
          </select>
            <label for="floatingInput">Ciudad de origen</label>
          </div>
          <div class="form-floating mb-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>----------------</option>
              <option value="1">Bogotá</option>
              <option value="2">Lima</option>
              <option value="3">Santiago de Chile</option>
            </select>
            <label for="floatingPassword">Ciudad de destino</label>
          </div>
          <div class="form-floating mb-3">
            <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Fecha de salida</label>
          </div>
          <div class="form-floating mb-3">
            <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Fecha de retorno</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">BUSCAR</button>
          <hr class="my-4">
        </form>
      </div>
    </div>
  </div>
</template>


<script>

import PxTicket from "../components/PxTicket.vue";

import {mapState} from "vuex";

export default {
  name: "Home",
   components: { PxTicket },
  data() {
    return {}
  },
  computed : {
    ...mapState({
      products : state => state.products,
      cart : state => state.cart
    })
  }
};
</script>