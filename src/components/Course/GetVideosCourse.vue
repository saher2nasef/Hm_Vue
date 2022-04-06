<template>
  <section class="MainArea ps-2 pt-4">
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
    <div class="w-100">
      <h1 class="fw-light text-capitalize text-center">{{ Course }}</h1>
    </div>
    <Videos
      v-for="(_Course, index) in VidoesWatched"
      :key="index + 1"
      :id="_Course.snippet.resourceId.videoId"
      :title="_Course.snippet.title"
      :url="_Course.snippet.thumbnails.medium.url"
      :IdVideo="id"
      :OvarLay="false"
    />
    <Videos
      v-for="(_Course, index) in Vidoes"
      :key="'s' + index"
      :id="_Course.snippet.resourceId.videoId"
      :title="_Course.snippet.title"
      :url="_Course.snippet.thumbnails.medium.url"
      :IdVideo="id"
      :OvarLay="true"
    />
  </section>
</template>

<script>
import Videos from "@/components/Videos.vue";
import CoursesServices from "./CoursesServices";
export default {
  name: "GetVideosCourse",
  props: ["id"],
  components: {
    Videos,
  },
  data: function () {
    return {
      Vidoes: "",
      Course: "",
      count: "",
      lenght: "",
      Total_lenght: "",
      VidoesWatched: "",
    };
  },
  created() {
    CoursesServices.GetVideosCourse(this.id, this.$store.state.Token).then(
      (Val) => {
        this.VidoesWatched = Val.VidoesWatched;
        this.Vidoes = Val.Vidoes;
      }
    );
  },
};
</script>

<style></style>
