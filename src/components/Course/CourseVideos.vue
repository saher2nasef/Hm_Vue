<template>
  <section class="MainArea pt-4">
    <div class="d-flex align-items-start w-100 justify-content-end p-3">
      <router-link
        to="/courses"
        tag="button"
        class="btn btn-primary pt-2 pb-2 fs-5 d-flex align-items-center flex-row-reverse justify-content-center"
        style="width: 130px"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="me-2" />
        <span
          v-if="$store.state.resource.ButtonBack == 'Back'"
          style="margin-top: 3px"
          >{{ $store.state.resource.ButtonBack }}</span
        >
        <span style="margin-top: -5px" v-else>{{
          $store.state.resource.ButtonBack
        }}</span>
      </router-link>
    </div>
    <div class="d-flex">
      <EditCourse
        :id="id"
        v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      />
      <DelCourse
        :id="id"
        v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      />
    </div>
    <div class="w-100">
      <h1 class="pt-5 text-capitalize text-center">{{ CourseName }}</h1>
    </div>
    <Videos
      v-for="(_Course, index) in Vidoes"
      :key="index"
      :id="_Course.snippet.resourceId.videoId"
      :title="_Course.snippet.title"
      :url="_Course.snippet.thumbnails.medium.url"
      :IdVideo="id"
    />
  </section>
</template>
<script>
import CoursesServices from "./CoursesServices";
import Videos from "@/components/Videos.vue";
import axios from "axios";
import EditCourse from "@/components/Course/EditCourse";
import DelCourse from "@/components/Course/DelCourse";
export default {
  name: "ListsCourses",
  props: ["id"],
  data() {
    return {
      Vidoes: "",
      CourseName: "",
    };
  },
  components: {
    Videos,
    EditCourse,
    DelCourse,
  },
  created() {
    const url =
      "http://josephnasef-001-site1.ctempurl.com/Api/Courses/" + this.id;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.CourseName = response.data.title;
        CoursesServices.GetVideos(response.data.youtubeListId).then((Val) => {
          this.Vidoes = Val;
          console.log(Val);
        });
        document.title = "History Makers | Course " + this.CourseName;
      });
  },
};
</script>
