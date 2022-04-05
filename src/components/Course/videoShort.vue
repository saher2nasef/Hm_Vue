<template>
  <router-link :to="'/courses/' + Go">
    <div>
      <span>{{ title }}</span>
      <!-- eslint-disable-next-line vue/valid-v-bind -->
      <img v-bind:src="Image" alt="" />
    </div>
  </router-link>
</template>
<script>
import axios from "axios";
export default {
  name: "videoShort",
  props: ["id", "title", "Go"],
  data() {
    return {
      Image: "",
    };
  },
  created() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.id}&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
      )
      .then((Response) => {
        if (Response.data.items[0].snippet.thumbnails.medium != undefined) {
          this.Image = Response.data.items[0].snippet.thumbnails.medium.url;
        } else {
          this.Image = Response.data.items[1].snippet.thumbnails.medium.url;
        }
      });
  },
};
</script>

<!--

<template>
  <router-link :to="'/Course/' + id">
    <div>
      <div class="Image">
        <img :src="require(`../assets/${Image1}`)" alt="" />
        <div class="time">10:50</div>
        <div class="Top">
          <button>
            <span class="material-icons-outlined"> history </span>
          </button>
          <button>
            <span class="material-icons-outlined"> playlist_play </span>
          </button>
        </div>
      </div>
      <div class="InfoVideo">
        <img :src="require(`../assets/${Image2}`)" alt="" />
        <div class="info">
          <h5>{{ title }}</h5>
          <a href="#">{{ Title2 }}</a>
          <h6>
            <span>{{ Views }}</span>
            <span>{{ Long }}</span>
          </h6>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "videoShort",
  data: function () {
    return {
      Image1True: "Image1",
      Image2True: "Image2",
    };
  },
  props: ["id", "title", "Title2", "Views", "Long", "Image1", "Image2"],
};
</script>


-->
