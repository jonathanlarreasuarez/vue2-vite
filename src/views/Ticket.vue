<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-12 pt-5">

        <h2 class="pb-2 border-bottom">Tickets</h2>
      </div>
       <div class="row">
          <PxTicket v-for="ticket in tickets" :ticket="ticket" :key="ticket.id" />
       </div>
    </div>
  </div>
</template>


<script>
import PxTicket from "../components/PxTicket.vue";
import {mapState} from "vuex";

export default {
  name: "Ticket",
   components: { PxTicket },
  data() {
    return {}
  },
  computed : {
    ...mapState({
      tickets : state => state.tickets
    })
  }
};
</script>