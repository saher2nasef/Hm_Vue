<template>
  <button class="btn btn-primary" @click="EditPost">
    {{ $store.state.resource.ButtonEdit }}
    <font-awesome-icon icon="fa-solid fa-pen-to-square" class="ms-2 me-2" />
  </button>
</template>

<script>
import Bloger from "./BlogerServices";
export default {
  name: "EditPost",
  props: ["Id", "Text", "body"],
  methods: {
    EditPost() {
      Bloger.EditPost(this.Id, this.Text, this.body, this.$store.state.IdUser);
      setTimeout(() => {
        location.pathname = "Blog";
      }, 1000);
    },
  },
};
</script>

<style></style>
