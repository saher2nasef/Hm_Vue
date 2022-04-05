<template>
  <div class="ConTainer_YouTube">
    <section class="MainArea pt-3">
      <div class="w-100">
        <h1 class="text-center pt-5 pb-5">Dashboard Admin</h1>
      </div>
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

export default {
  name: "HomeAdmin",
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
