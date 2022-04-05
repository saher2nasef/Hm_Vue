<template>
  <button @click="Add" class="btn btn-primary">
    {{ $store.state.resource.ButtonAdd }}
    <span class="material-icons-outlined"> add </span>
  </button>
</template>
<script>
import CoursesServices from "./CoursesServices";
export default {
  name: "AddCourse",
  props: ["Url", "Title"],
  methods: {
    Add() {
      if (this.Url != "" && this.Title != "") {
        CoursesServices.AddCourse(
          this.Url,
          this.Title,
          this.$store.state.Token
        );
        setTimeout(() => {
          location.pathname = "courses";
        }, 1000);
      }
    },
  },
};
</script>
