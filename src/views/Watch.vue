<template>
  <div>
    <VideoAdmin
      :id="Id"
      :list="list"
      v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
    />
    <Video
      :id="Id"
      :list="list"
      v-if="$store.state.Islogin && $store.state.The_State == 'User'"
    />
  </div>
</template>
<script>
import Json from "@/Data/Videos.json";
import VideoAdmin from "@/components/VideoAdmin";
import Video from "@/components/Video";
export default {
  name: "Watch",
  props: ["list", "Id"],
  components: {
    VideoAdmin,
    Video,
  },
  data: function () {
    return {
      Data: Json,
      DataVideo: "",
    };
  },
};
</script>
<style scoped>
@import url("../assets/Styles.css");
.ConTainer_YouTube {
  padding: 70px 0 0 0 !important;
  margin: 0 !important;
}
.ConTainer_YouTube .sectionVideo {
  padding-bottom: 0 !important;
}
@media (min-width: 1400px) {
  .ConTainer_YouTube {
    padding: 70px 0 0 0 !important;
    margin: 0 auto !important;
    width: 1430px;
    display: block;
  }
}
</style>
