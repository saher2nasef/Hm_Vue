<template>
  <div class="ConTainer_YouTube pt-3">
    <GetList />
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
import GetList from "@/components/Course/ListsCourses";

export default {
  name: "All_courses",
  components: {
    GetList,
  },
  created() {
    document.title = "History Makers | courses ";
  },
};
</script>
