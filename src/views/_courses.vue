<template>
  <div class="ConTainer_YouTube">
    <GetVideosCourse :id="id" />
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
import GetVideosCourse from "@/components/Course/GetVideosCourse.vue";
export default {
  name: "coursesPage",
  props: ["id"],
  components: {
    GetVideosCourse,
  },
};
</script>
