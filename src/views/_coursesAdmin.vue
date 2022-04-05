<template>
  <div class="ConTainer_YouTube">
    <CourseVideos
      :id="id"
      v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
    />
    <GetVideosCourse :id="id" v-if="$store.state.Islogin == false" />
    <GetVideosCourse
      :id="id"
      v-if="$store.state.Islogin && $store.state.The_State == 'User'"
    />
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
import CourseVideos from "@/components/Course/CourseVideos";
import GetVideosCourse from "@/components/Course/GetVideosCourse.vue";
export default {
  name: "coursesPage",
  props: ["id"],
  components: {
    CourseVideos,
    GetVideosCourse,
  },
  data: function () {
    return {
      Vidoes: "",
      CourseName: "",
    };
  },
};
</script>
