<template>
  <router-link :to="Go">
    <div :class="OvarLay == true ? 'No_Active' : 'Active'">
      <div class="Image">
        <font-awesome-icon v-if="OvarLay" icon="fa-solid fa-lock" />
        <img :src="url" alt="" />
      </div>
      <div class="InfoVideo">
        <h5 dir="ltr" class="text-end">{{ title }}</h5>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Videos",
  data: function () {
    return {
      Go: 0,
    };
  },
  props: ["id", "title", "list", "url", "IdVideo", "OvarLay"],
  created() {
    if (this.OvarLay == true) {
      this.Go = "/courses/" + this.IdVideo;
    } else {
      if (this.$store.state.Islogin) {
        this.Go = "/Watch/" + this.IdVideo + "/" + this.id;
      } else {
        this.Go = "/Login";
      }
    }
  },
};
</script>
<style scoped>
.No_Active .Image {
  position: relative;
}
.No_Active .Image img {
  opacity: 0.5;
}
.No_Active svg {
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  color: #000;
}
</style>
