<template>
  <div class="container-fuild ConTainer_YouTube pt-2">
    <div
      class="d-flex align-items-center justify-content-between p-4 pb-0 Media"
    >
      <router-link
        :to="'/courses/' + List"
        tag="button"
        class="btn btn-primary pt-2 pb-2 fs-5 d-flex align-items-center justify-content-center"
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
    <div class="row flex-row-reverse justify-content-center p-0 m-0">
      <section class="sectionVideo col-xl-8 col-xxl-7" id="sectionVideo">
        <div class="VideoInfo">
          <h5 class="p-2 px-4">{{ DataVideo.title }}</h5>
          <hr />
          <div class="VideoInfo2">
            <div class="description p-4">
              <p style="white-space: pre-line">{{ DataVideo.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <div :class="Class">
        <div class="Over" @click="Cancel"></div>
        <div>
          <input type="text" v-model="qusetion" />
          <div>
            <button class="btn btn-primary" @click="Cancel">
              {{ $store.state.resource.ButtonCancel }}
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="ms-2 me-2"
              />
            </button>
            <button
              class="btn btn-secondary"
              v-if="status"
              @click="Add_qusetion"
            >
              {{ $store.state.resource.Video.AddQuestion }}
              <font-awesome-icon icon="fa-solid fa-plus" class="ms-2 me-2" />
            </button>
          </div>
        </div>
      </div>
      <section class="sectionOtherVideo col-xl-4 col-xxl-4">
        <router-link
          :to="'/Watch/' + List + '/' + Divs.snippet.resourceId.videoId"
          v-for="(Divs, index) in Vidoes"
          :key="index"
          :title="Divs.snippet.title"
          ><div>
            <img :src="Divs.snippet.thumbnails.medium.url" />
            <div>
              <h5>
                {{ Divs.snippet.title }}
              </h5>
              <a href="#">{{ Divs.snippet.videoOwnerChannelTitle }}</a>
              <button
                class="btn btn-primary d-block ms-auto"
                @click="Add_Style_qusetion(Divs.snippet.resourceId.videoId)"
              >
                <font-awesome-icon icon="fa-solid fa-plus" class="ms-2 me-2" />
                {{ $store.state.resource.Video.AddQuestion }}
              </button>

              <!-- Divs.snippet.resourceId.videoId -->
            </div>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>
<script src="https://www.youtube.com/player_api"></script>
<script>
// import description from "@/components/description.vue";

import axios from "axios";
import $ from "jquery";

export default {
  name: "Video",
  components: {
    // description,
  },
  props: ["id", "List"],
  data: function () {
    return {
      DataVideo: "",
      Vidoes: 0,
      Class: "Prompt",
      Id_Video: "",
      qusetion: "",
      status: true,
    };
  },
  mounted() {
    this.Load(this.id);
    document.title = "History Makers | " + this.DataVideo.title;
  },
  watch: {
    id: function (v) {
      console.log(v);
      this.Load(v);
    },
  },
  created() {
    if (localStorage.getItem("qusetions") == null) {
      localStorage.setItem("qusetions", JSON.stringify([]));
    }
  },
  methods: {
    Add_Style_qusetion(Id_Video) {
      this.Class = "Prompt active";
      this.Id_Video = Id_Video;
      this.qusetion = "";
      let qusetions = JSON.parse(localStorage.getItem("qusetions"));
      for (let i = 0; i < qusetions.length; i++) {
        if (qusetions[i].Id_Video == Id_Video) {
          this.qusetion = qusetions[i].qusetion;
        }
      }
    },
    Cancel() {
      this.qusetion = "";
      this.Class = "Prompt";
    },
    Add_qusetion() {
      let qusetions = JSON.parse(localStorage.getItem("qusetions"));
      this.Class = "Prompt";
      var id = "_" + Math.random().toString(36).substr(2, 9);
      let qusetion = {
        Id_Video: this.Id_Video,
        Id_qusetion: id,
        qusetion: this.qusetion,
      };
      if (qusetions.length == 0) {
        qusetions.push(qusetion);
        localStorage.setItem("qusetions", JSON.stringify(qusetions));
      } else if (qusetions.length >= 1) {
        for (let i = 0; i < qusetions.length; i++) {
          if (qusetions[i].Id_Video != this.id) {
            qusetions.push(qusetion);
            localStorage.setItem("qusetions", JSON.stringify(qusetions));
            break;
          }
        }
      }
    },
    Load(ID) {
      let Id = ID;
      let player;
      let sectionVideo = document.getElementById("sectionVideo");
      let video = document.getElementById("video");
      if (video != null) {
        video.remove();
        let DivVideo = document.createElement("div");
        DivVideo.id = "video";
        sectionVideo.prepend(DivVideo);
      } else {
        let DivVideo = document.createElement("div");
        DivVideo.id = "video";
        sectionVideo.prepend(DivVideo);
      }

      function loadVideo() {
        window.YT.ready(function () {
          player = new window.YT.Player("video", {
            height: "390",
            width: "640",
            videoId: Id,
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
            },
          });
        });

        function onPlayerReady(event) {
          player.pauseVideo();
        }

        function onPlayerStateChange(event) {
          var refreshIntervalId;
        }
      }

      $(document).ready(function () {
        $.getScript("https://www.youtube.com/player_api", function () {
          loadVideo();
        });
      });
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.id}&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
        )
        .then((response) => {
          this.DataVideo = response.data.items[0].snippet;

          document.title = "History Makers | " + this.DataVideo.title;
        });
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${
            this.List
          }&maxResults=${50}&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
        )
        .then((Response) => {
          for (let i = 0; i < Response.data.items.length; i++) {
            if (
              Response.data.items[i].snippet.videoOwnerChannelTitle == undefined
            ) {
              Response.data.items.splice(i, 1);
              for (let i = 0; i < Response.data.items.length; i++) {
                if (
                  Response.data.items[i].snippet.videoOwnerChannelTitle ==
                  undefined
                ) {
                  Response.data.items.splice(i, 1);
                }
              }
            }
            this.Vidoes = Response.data.items;
          }
        });
    },
  },
};
</script>
<style scoped>
.Prompt {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200000;
  background-image: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  translate: 0.4s;
}
.Prompt.active {
  transform: scale(1);
}
.Prompt > div {
  width: 400px;
  height: auto;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
}
.Prompt > div h3 {
  text-transform: capitalize;
  margin-bottom: 20px;
}
.Prompt > div input {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
.Prompt > div > div {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.Prompt > div > div button {
  width: calc(95% / 2);
  margin-top: 10px;
  padding: 10px !important;
}
.Prompt > div > div button:last-child {
  margin-left: 10px;
}
.Over {
  background: #ffffff00 !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  transform: translate(0, 0) !important;
  border-radius: 0 !important;
  z-index: -1;
  display: block !important;
  box-shadow: none !important;
}
</style>
