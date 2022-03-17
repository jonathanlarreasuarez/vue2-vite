import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      tickets: [
        {
          id: 1,
          airline: "LATAM",
          price: 300,
          duration: "03:00",
          number_stopover:1,
          url: "src/assets/images/XL_200.GIF"
        },
        {
            id: 2,
            airline: "AVIANCA",
            price: 550,
            duration: "02:00",
            number_stopover:1,
            url: "src/assets/images/AV_200.GIF"
        },
        {
            id: 3,
            airline: "EQUAIR",
            price: 600,
            duration: "03:3",
            number_stopover:1,
            url: "src/assets/images/HN_200.GIF"
        },
        {
            id: 4,
            airline: "LATAM",
            price: 800,
            duration: "02:00",
            number_stopover:1,
            url: "src/assets/images/XL_200.GIF"
        },
        {
            id: 5,
            airline: "AVIANCA",
            price: 750,
            duration: "03:10",
            number_stopover:1,
            url: "src/assets/images/AV_200.GIF"
        },
        {
            id: 6,
            airline: "EQUAIR",
            price: 600,
            duration: "04:50",
            number_stopover:1,
            url: "src/assets/images/HN_200.GIF"
        }
      ],
      cart: []
    },
    mutations:{
    },
    actions:{
    }
});