<template>
    <div class="col mb-2">
        <div class="card shadow-sm">
               <img :src="ticket.url" class="card-img-top" alt="...">

            <div class="card-body">
                  <h5 class="card-title">{{ticket.airline}}</h5>
                    <p class="card-text"> ${{ticket.price}}</p>
                   
                 <p class="card-text"> Duración: {{ticket.duration}}</p>
                   <p class="card-text"> Número escalas:  {{ticket.number_stopover}}</p>

                    <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : "PxTicket",
    props : ['ticket']
}
</script>