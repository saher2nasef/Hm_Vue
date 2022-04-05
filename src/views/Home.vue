<template>
  <div class="ConTainer_YouTube">
    <section class="MainArea pt-3">
      <h1 class="text-center pt-5 pb-5">Home User</h1>
    </section>
    <aside class="Options">
      <router-link to="/">
        <span class="material-icons-outlined"> home </span>
        <span>{{ $store.state.resource.Buttons.Home }}</span>
      </router-link>
      <router-link to="/Blog"
        ><span class="material-icons-outlined"> newspaper </span>
        <span>{{ $store.state.resource.Buttons.Bloger }}</span>
      </router-link>
      <router-link to="/courses">
        <span class="material-icons-outlined"> school </span>
        <span>{{ $store.state.resource.Buttons.Courses }}</span>
      </router-link>
    </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Data from "@/Data/Videos.json";
// import axios from "axios";
// import videoShort from "@/components/videoShort.vue";
export default {
  name: "Home",
  components: {
    // videoShort,
  },
  data: function () {
    return {
      Datas: Data,
    };
  },
  created() {
    document.title = "History Makers";
  },
};
</script>
<style scoped>
@import url("../assets/Style.css");
</style>
