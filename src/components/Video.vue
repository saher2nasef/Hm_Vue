<template>
  <div class="container-fuild ConTainer_YouTube pt-4">
    <div
      class="d-flex align-items-center justify-content-between p-4 pb-0 Media"
      v-if="error"
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

      <button
        @click="Show_Question"
        v-if="question"
        :class="'btn btn-danger fs-5 ' + Class"
      >
        {{ $store.state.resource.Video.BtnAnswer }}
      </button>
      <div class="alert alert-primary mb-0 pt-2 pb-2" v-if="question == ''">
        {{ $store.state.resource.Video.QuestionsNo }}
      </div>
    </div>
    <div
      class="row flex-row-reverse justify-content-center p-0 m-0"
      v-if="error"
    >
      <section class="sectionVideo col-xl-8 col-xxl-7" id="sectionVideo">
        <div class="VideoInfo">
          <div class="d-flex align-items-start">
            <h5 class="p-2 px-4" dir="rtl">{{ DataVideo.title }}</h5>
          </div>
          <hr class="m-0" />
          <div class="VideoInfo2">
            <div class="description p-4" v-if="description != ''">
              <p style="white-space: pre-line; word-break: break-word">
                {{ description }}
              </p>
              <button @click="Change" v-if="description.length >= 100">
                {{ Button }}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="sectionOtherVideo col-xl-4 col-xxl-4">
        <div class="border BoxShadow PlayListVideo p-3 border-4 rounded">
          <router-link
            :to="'/Watch/' + List + '/' + Divs.snippet.resourceId.videoId"
            v-for="(Divs, i) in VidoesWatched"
            :key="'A,' + i"
            :title="Divs.snippet.title"
            ><div>
              <img :src="Divs.snippet.thumbnails.medium.url" />
              <div>
                <h5>
                  {{ Divs.snippet.title }}
                </h5>
              </div>
            </div>
          </router-link>
          <router-link
            :to="'/Watch/' + List + '/' + id"
            v-for="(Divs, i) in Vidoes"
            :key="'B,' + i"
            :title="Divs.snippet.title"
            class="Nono"
            ><div>
              <img class="Img" :src="Divs.snippet.thumbnails.medium.url" />
              <div>
                <h5>
                  {{ Divs.snippet.title }}
                </h5>
              </div>
              <font-awesome-icon icon="fa-solid fa-lock" />
            </div>
          </router-link>
        </div>
      </section>
    </div>
    <div :class="ClassPrompt" v-if="error">
      <div class="Over" @click="Cancel"></div>
      <div>
        <h3>{{ question }}</h3>
        <textarea name="" v-model="Answer"></textarea>
        <div>
          <button class="btn btn-secondary" @click="Cancel">
            {{ $store.state.resource.ButtonCancel }}
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="ms-2 me-2"
            />
          </button>
          <button class="btn btn-primary" @click="Add_Answer">
            {{ $store.state.resource.Video.AddAnswer }}
            <font-awesome-icon icon="fa-solid fa-plus" class="ms-2 me-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
// import description from "@/components/description.vue";
const Url = "http://josephnasef-001-site1.ctempurl.com/Api/Courses/";
import axios from "axios";
import $ from "jquery";
// import questions from "../Data/questions.json";
export default {
  name: "Video",
  components: {
    // description,
  },
  props: ["id", "List"],
  data: function () {
    return {
      DataVideo: "",
      VidoesWatched: "",
      Vidoes: 0,
      lenght: 0,
      Button: "Show Text",
      description: "",
      description2: "",
      Class: "question",
      question: "",
      Answer: "",
      error: true,
      ClassPrompt: "Prompt",
      Id_Question: "",
    };
  },
  methods: {
    GetDataFromToken(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    },
    GetVideoswatched(UserId, PlayListId) {
      return axios
        .post(
          `http://josephnasef-001-site1.ctempurl.com/Api/Courses/watchedVideos?UserId=${UserId}&PlayListId=${PlayListId}`
        )
        .then((Res) => {
          return Res.data;
        })
        .catch((error) => {
          return { error: error.response.data };
        });
    },
    GetVideosCourse(ID, Token) {
      let PlayListId = "";
      return axios.get(Url + ID).then((response) => {
        PlayListId = response.data.youtubeListId;
        let This = this;
        return axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlayListId}&maxResults=50&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
          )
          .then((Response) => {
            for (let i = 0; i < Response.data.items.length; i++) {
              if (
                Response.data.items[i].snippet.videoOwnerChannelTitle ==
                undefined
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
            }

            return This.GetVideoswatched(
              Token != "" ? This.GetDataFromToken(Token).Id : "No",
              PlayListId
            )
              .then((Val) => {
                let Watch = {
                  Videos: [],
                };
                let VideosWatchLength = 0;
                for (let i = 0; i < Val.length; i++) {
                  Watch.Videos.push(Val[i]);
                }
                for (let i = 0; i < Watch.Videos.length; i++) {
                  if (
                    Watch.Videos[i].videoId ===
                    Response.data.items[i].snippet.resourceId.videoId
                  ) {
                    if (Watch.Videos[i].questionId != 0) {
                      if (Watch.Videos[i].isAnsweared) {
                        VideosWatchLength++;
                      }
                    } else {
                      VideosWatchLength++;
                    }
                  }
                }
                return {
                  Vidoes: Response.data.items.slice(
                    VideosWatchLength + 1,
                    Response.data.items.length
                  ),
                  VidoesWatched: Response.data.items.slice(
                    0,
                    VideosWatchLength + 1
                  ),
                };
              })
              .catch((error) => {
                console.log(error);
              });
          });
      });
    },
    LoadORWatchFuntion() {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.id}&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
        )
        .then((response) => {
          this.DataVideo = response.data.items[0].snippet;
          this.description =
            response.data.items[0].snippet.description.length > 100
              ? response.data.items[0].snippet.description.slice(0, 100) +
                "...."
              : response.data.items[0].snippet.description;
          this.description2 = response.data.items[0].snippet.description;
          document.title = "History Makers | " + this.DataVideo.title;
        });
      axios
        .get(
          `http://josephnasef-001-site1.ctempurl.com/api/Question/GetQuestion?VideoId=${this.id}&UserId`
        )
        .then((val) => {
          this.question = val.data.content;
        });
    },
    Show_Question() {
      this.ClassPrompt = "Prompt active";
      // this.Id_Question
      this.GetVideoswatched(
        this.GetDataFromToken(this.$store.state.Token).Id,
        this.List
      )
        .then((Val) => {
          for (let i = 0; i < Val.length; i++) {
            if (Val[i].videoId == this.id) {
              this.Id_Question = Val[i].questionId;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Get_Question(Token, PlayListId) {
      return this.GetVideoswatched(
        Token != "" ? this.GetDataFromToken(Token).Id : "No",
        PlayListId
      )
        .then((Val) => {
          return Val;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Cancel() {
      this.ClassPrompt = "Prompt";
    },
    Add_Answer() {
      this.ClassPrompt = "Prompt";
      if (this.Answer != "") {
        axios
          .post(
            "http://josephnasef-001-site1.ctempurl.com/api/Question/AnswearQustion",
            {
              QustionId: this.Id_Question,
              UserId: this.GetDataFromToken(this.$store.state.Token).Id,
              VideoId: this.id,
              Answear: this.Answer,
            }
          )
          .then((val) => {
            console.log("ss");
            this.GetVideosCourse(this.List, this.$store.state.Token).then(
              (val) => {
                this.Vidoes = val.Vidoes;
                this.VidoesWatched = val.VidoesWatched;
              }
            );
            this.LoadORWatchFuntion();
          });
      } else {
        alert("Please Enter Your Answer");
      }
    },
    Change() {
      if (this.Button == "Show Text") {
        this.Button = "Hidden Text";
        this.description = this.description2.slice(0, this.description2.length);
      } else {
        this.Button = "Show Text";
        this.description = this.description2.slice(0, 100) + "...";
      }
    },
    Gs() {
      this.Vidoes = "";
      this.VidoesWatched = "";
    },
    load(ID) {
      let Id = ID;
      let IdList = this.List;
      let player;
      let sectionVideo = document.getElementById("sectionVideo");
      let video = document.getElementById("video");
      let DivVideo = document.createElement("div");
      DivVideo.id = "video";
      if (video != null) {
        video.remove();
        sectionVideo.prepend(DivVideo);
      } else {
        sectionVideo.prepend(DivVideo);
      }
      let THIS = this;
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
          // event.data != 2
          // console.log(player.getPlayerState());

          if (event.data === 0) {
            THIS.GetVideosCourse(THIS.List, THIS.$store.state.Token).then(
              (Val) => {
                THIS.Vidoes = Val.Vidoes;
                THIS.VidoesWatched = Val.VidoesWatched;
                // Saher_nasef123@
              }
            );
            THIS.GetVideoswatched(
              THIS.GetDataFromToken(THIS.$store.state.Token).Id,
              THIS.List
            ).then((Res) => {
              console.log(Res);
            });
            THIS.Class = "";
            // http://josephnasef-001-site1.ctempurl.com/api/Question/1
            axios
              .post(
                "http://josephnasef-001-site1.ctempurl.com/Api/Courses/watched",
                {
                  UserId: THIS.GetDataFromToken(THIS.$store.state.Token).Id,
                  PlayListId: THIS.List,
                  VideoId: THIS.id,
                }
              )
              .then((val) => {
                console.log(val);
              });
          }
        }
      }
      $(document).ready(function () {
        $.getScript("https://www.youtube.com/iframe_api", function () {
          loadVideo();
        });
      });
    },
  },
  mounted() {
    this.load(this.id);
  },
  created() {
    this.Get_Question(this.$store.state.Token, this.List).then((Val) => {
      for (let i = 0; i < Val.length; i++) {
        if (Val[i].videoId == this.id) {
          if (Val[i].isAnsweared) {
            this.Class = "Good";
          } else {
            this.Class = "";
          }
        }
      }
    });
    this.LoadORWatchFuntion();
    this.GetVideosCourse(this.List, this.$store.state.Token).then((Val) => {
      this.Vidoes = Val.Vidoes;
      this.VidoesWatched = Val.VidoesWatched;
    });
  },
  watch: {
    id: function (v) {
      this.Get_Question(this.$store.state.Token, this.List).then((Val) => {
        for (let i = 0; i < Val.length; i++) {
          if (Val[i].videoId == v) {
            if (Val[i].isAnsweared) {
              this.Class = "Good";
            } else {
              this.Class = "";
            }
          }
        }
      });
      this.load(v);
      this.Class = "question";
      this.LoadORWatchFuntion();
    },
  },
};
</script>
<style scoped>
.alert-danger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-size: 30px;
}
.question {
  display: none;
}
.Good {
  background: var(--Good) !important;
  border: 2px solid var(--Good) !important;
}
.Nono {
  position: relative;
  background: #000 !important;
}

.Nono img.Img,
.Nono h5 {
  opacity: 0.5;
}
.Nono svg {
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  color: #000;
}
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
.Prompt > div textarea {
  width: 100%;
  height: 150px;
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
@media (max-width: 500px) {
  .Media {
    flex-direction: column;
  }
  .Media button {
    margin-bottom: 20px;
  }
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
/* .ConTainer_YouTube .sectionVideo video,
.ConTainer_YouTube .sectionVideo iframe,
.ConTainer_YouTube .sectionVideo img {

}
.PlayListVideo {
} */
</style>
