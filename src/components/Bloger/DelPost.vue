<template>
  <button class="btn btn-danger" @click="DelPost">
    {{ $store.state.resource.ButtonDel }}
    <font-awesome-icon icon="fa-solid fa-trash" class="ms-2 me-2" />
  </button>
</template>

<script>
import Bloger from "./BlogerServices";
export default {
  name: "DelPost",
  props: ["Id"],
  methods: {
    DelPost() {
      Bloger.DelPost(this.Id);
      setTimeout(() => {
        location.pathname = "Blog";
      }, 1000);
    },
  },
};
</script>

<style></style>
