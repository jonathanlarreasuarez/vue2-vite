<template>
  <header class="shadow w-screen">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
    <div class="container-xl">
      <a class="navbar-brand" href="#">MY BRAND</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample07XL">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
             <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="px-2 link-white"
            >{{ l.title }}</router-link>
                </li>
          </ul>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
  components: {  },
    props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
