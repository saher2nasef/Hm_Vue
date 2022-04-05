<template>
  <div class="Right">
    <div
      v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      :class="'prompt' + Class"
    >
      <div>
        <div class="Over" @click="CancelPost2"></div>
        <div
          class="Edit"
          :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
        >
          <img
            :src="require('@/assets/images/Image.jpeg')"
            width="100%"
            class="mb-3"
          />
          <!-- <img
            v-if="imageEdit.Type == 'image'"
            :src="imageEdit.Src"
            width="100%"
            class="mb-3"
          /> -->
          <!-- <iframe
            v-else-if="imageEdit.Type == 'Video'"
            :src="imageEdit.Src"
            width="100%"
            height="400px"
            class="mb-3"
          ></iframe> -->
          <input type="text" v-model="title" />
          <textarea v-model="Body"> </textarea>
          <div class="w-100 d-flex align-content-center justify-content-evenly">
            <div @click="Cancel">
              <EditPost :Id="IDPost" :Text="title" :body="Body" />
            </div>
            <button class="btn btn-outline-primary" @click="Cancel">
              {{ $store.state.resource.ButtonCancel }}
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="ms-2 me-2"
              />
            </button>
          </div>
        </div>
        <div
          class="Del"
          :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
        >
          <!-- <img
            v-if="imageEdit.Type == 'image'"
            :src="imageEdit.Src"
            width="100%"
            class="mb-3"
          /> -->
          <img
            :src="require('@/assets/images/Image.jpeg')"
            width="100%"
            class="mb-3"
          />
          <!-- <iframe
            v-else-if="imageEdit.Type == 'Video'"
            :src="imageEdit.Src"
            width="100%"
            height="400px"
            class="mb-3"
          ></iframe> -->
          <input type="text" :value="title" disabled />
          <textarea :value="Body" disabled></textarea>
          <div class="w-100 d-flex align-content-center justify-content-evenly">
            <div @click="Cancel">
              <DelPost :Id="IDPost" />
            </div>
            <button class="btn btn-outline-primary" @click="Cancel">
              {{ $store.state.resource.ButtonCancel }}
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="ms-2 me-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.Islogin && $store.state.The_State == 'Admin'">
      <article
        dir="ltr"
        class="blog-post hentry index-post post-1"
        v-for="(Bloger, id) in Saher"
        :key="'A' + id"
      >
        <div class="top">
          <button
            @click="
              Edit(Bloger.title, Bloger.body, Bloger.Image, Bloger.id, id)
            "
            class="btn btn-primary BtnDesign"
          >
            <span> {{ $store.state.resource.ButtonEdit }}</span>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <button
            @click="Del(Bloger.title, Bloger.body, Bloger.Image, Bloger.id, id)"
            class="btn btn-danger BtnDesign"
          >
            <span>{{ $store.state.resource.ButtonDel }}</span>
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
        <div
          class="Ovrlays"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${require('@/assets/images/Image.jpeg')})`,
          }"
        ></div>
        <div class="post-content mt-3">
          <h2 class="post-title" v-if="Bloger.title != null">
            {{
              Bloger.title.length > 30
                ? Bloger.title.slice(0, 30) + "..."
                : Bloger.title
            }}
          </h2>
          <p class="post-snippet mb-0" dir="rtl" v-if="Bloger.body != null">
            {{
              Bloger.body.length > 70
                ? Bloger.body.slice(0, 70) + "..."
                : Bloger.body
            }}
          </p>
          <div class="d-flex w-100 justify-content-evenly">
            <router-link
              :to="'Posts/' + Bloger.id"
              class="btn btn-primary BtnDesign"
              tag="button"
              style="width: 180px"
            >
              <span>{{ $store.state.resource.ButtonRead }}</span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </router-link>
          </div>
        </div>
      </article>
    </div>
    <div v-if="$store.state.Islogin && $store.state.The_State == 'User'">
      <article
        dir="ltr"
        class="blog-post hentry index-post post-1"
        v-for="(Bloger, id) in Saher"
        :key="'A' + id"
      >
        <div
          class="Ovrlays"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${require('@/assets/images/Image.jpeg')})`,
          }"
        ></div>
        <div class="post-content mt-3">
          <h2 class="post-title" v-if="Bloger.title != null">
            {{
              Bloger.title.length > 30
                ? Bloger.title.slice(0, 30) + "..."
                : Bloger.title
            }}
          </h2>
          <p class="post-snippet mb-0" v-if="Bloger.body != null">
            {{
              Bloger.body.length > 70
                ? Bloger.body.slice(0, 70) + "..."
                : Bloger.body
            }}
          </p>
          <div class="d-flex w-100 justify-content-evenly">
            <!-- <router-link :to="'Posts/' + Bloger.id"> -->

            <!-- </router-link> -->
            <button
              class="btn btn-primary BtnDesign"
              tag="button"
              @click="WhoEntred(Bloger.id)"
            >
              <span>{{ $store.state.resource.ButtonRead }}</span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </button>
          </div>
        </div>
      </article>
    </div>
    <div v-if="$store.state.Islogin == false">
      <article
        dir="ltr"
        class="blog-post hentry index-post post-1"
        v-for="(Bloger, id) in Saher"
        :key="'A' + id"
      >
        <div
          class="Ovrlays"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${require('@/assets/images/Image.jpeg')})`,
          }"
        ></div>
        <div class="post-content mt-3">
          <h2 class="post-title" v-if="Bloger.title != null">
            {{
              Bloger.title.length > 30
                ? Bloger.title.slice(0, 30) + "..."
                : Bloger.title
            }}
          </h2>
          <p class="post-snippet mb-0" v-if="Bloger.body != null">
            {{
              Bloger.body.length > 70
                ? Bloger.body.slice(0, 70) + "..."
                : Bloger.body
            }}
          </p>
          <div class="d-flex w-100 justify-content-evenly">
            <router-link
              :to="'Posts/' + Bloger.id"
              class="btn btn-primary BtnDesign"
              tag="button"
            >
              <span>{{ $store.state.resource.ButtonRead }}</span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </router-link>
          </div>
        </div>
      </article>
    </div>

    <!--   <article
            dir="ltr"
            class="blog-post hentry index-post post-1"
            v-for="(Bloger, id) in Saher"
            :key="'A' + id"
          >
            <div class="top">
              <button
                @click="
                  Edit(Bloger.title, Bloger.body, Bloger.Image, Bloger.id, id)
                "
                class="btn btn-primary BtnDesign"
              >
                <span> {{ $store.state.resource.ButtonEdit }}</span>
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </button>
              <button
                @click="
                  Del(Bloger.title, Bloger.body, Bloger.Image, Bloger.id, id)
                "
                class="btn btn-danger BtnDesign"
              >
                <span>{{ $store.state.resource.ButtonDel }}</span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
            <div
              class="Ovrlays"
              :style="
                Bloger.Image.Type == 'Video'
                  ? {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(https://img.youtube.com/vi/${
                        Bloger.Image.Src.split('/')[
                          Bloger.Image.Src.split('/').length - 1
                        ]
                      }/0.jpg)`,
                    }
                  : {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${require('@/assets/' +
                        Bloger.Image.Src)})`,
                    }
              "
            ></div>
            <div class="post-content mt-3">
              <h2 class="post-title">
                {{
                  Bloger.title.length > 30
                    ? Bloger.title.slice(0, 30) + "..."
                    : Bloger.title
                }}
              </h2>
              <p class="post-snippet mb-0" dir="rtl">
                {{
                  Bloger.body.length > 70
                    ? Bloger.body.slice(0, 70) + "..."
                    : Bloger.body
                }}
              </p>
              <div class="d-flex w-100 justify-content-evenly">
                <router-link
                  :to="'Posts/' + Bloger.id"
                  class="btn btn-primary BtnDesign"
                  tag="button"
                  style="width: 180px"
                >
                  <span>{{ $store.state.resource.ButtonRead }}</span>
                  <font-awesome-icon icon="fa-solid fa-angle-right" />
                </router-link>
              </div>
            </div>
          </article> -->
  </div>
</template>

<script>
import Bloger from "./BlogerServices";
import EditPost from "@/components/Bloger/EditPost";
import DelPost from "@/components/Bloger/DelPost";
export default {
  name: "GetList",
  components: {
    EditPost,
    DelPost,
  },
  data() {
    return {
      Saher: "",
      Url: "",
      imageEdit: 0,
      title: 0,
      Body: 0,
      IDPost: "",
      Class: "",
      IDPost2: 0,
    };
  },
  created() {
    Bloger.GetList().then((val) => {
      this.Saher = val;
    });
  },
  methods: {
    WhoEntred(id) {
      Bloger.WhoRead(this.$store.state.IdUser, id);
      this.$router.push(`Posts/${id}`);
    },
    Edit: function (title, Body, image, id, id2) {
      this.Class = " Edit";
      this.title = title;
      this.Body = Body;
      this.IDPost = id;
      this.IDPost2 = id2;
      this.imageEdit = image;
    },
    Del: function (title, Body, image, id, id2) {
      this.Class = " Del";
      this.IDPost = id;
      this.IDPost2 = id2;
      this.title = title;
      this.Body = Body;
      this.imageEdit = image;
    },
    Cancel: function () {
      this.Class = "";
      this.title = "";
      this.Body = "";
      this.IDPost = "";
      this.imageEdit = "";
      this.IDPost2 = 0;
    },
    CancelPost2: function () {
      this.Class = "";
    },
  },
};
</script>
<style scoped>
.Blog {
  padding: 80px 20px 0;
}

.index-post {
  background-color: #ffffff;
  padding: 20px;
  margin: 0 0 25px 0;
  border: 1px solid #cccccc;
  height: 375px;
  background-size: 100%;
  background-repeat: no-repeat;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;
  transition: 0.5s;
  position: relative;
  background-position: center;
}
.index-post:hover {
  background-size: 120%;
  transition: 0.5s;
}
.index-post:hover .post-content {
  text-shadow: 0px 4px 3px rgb(0 0 0 / 40%), 0px 8px 13px rgb(0 0 0 / 10%),
    0px 18px 23px rgb(0 0 0 / 10%);
}

.index-post .post-content {
  overflow: hidden;
  position: absolute;
  top: -15px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: 0.5s;
  padding: 30px;
  color: #ecf1ec;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)); */
}

.index-post .post-content .post-snippet {
  font-size: 24px;
}
.index-post .post-content .post-title {
  font-size: 40px;
  font-weight: 500;
  margin: 0 0 4px;
  /* text-shadow: 0 13.36px 8.896px #151615, 0 -2px 1px #060606; */
}
.index-post:hover .top {
  top: 0;
}
.index-post .top {
  transition: 0.5s;
  position: absolute;
  top: -100%;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: 10px;
  background: transparent;
}
.post-meta {
  font-size: 13px;
  color: #aaaaaa;
  font-weight: 400;
  padding: 0 1px;
}
.BtnDesign {
  width: fit-content;
  padding: 8px 20px;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  font-size: 18px;
  margin: 20px 10px 0 10px;
  justify-content: center;
}
.BtnDesign span {
  margin-top: 3px;
}
.BtnDesign svg {
  margin-left: 10px;
}

.index-post .Ovrlays {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: 0.4s;
}
.index-post:hover .Ovrlays {
  transform: scale(1.2);
}

@media (max-width: 670px) {
  .index-post {
    text-align: center;
  }
  .index-post .post-content .post-title {
    font-size: 27px;
  }
  .index-post .post-content .post-snippet {
    font-size: 17px;
  }
  .index-post .post-content {
    flex-direction: column;
  }
}

.prompt {
  position: fixed;
  width: 100%;
  min-height: 100%;
  left: -100%;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 10000000000;
  transition: 0.4s;
}
.prompt > div,
.Add_Post > div {
  height: 100%;
  overflow: auto;
  width: 100%;
  display: flex;
  position: absolute;
  padding: 50px 0;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.prompt > div > div {
  background: #fff;
  width: 600px;
  height: auto;
  padding: 50px 20px;
  border-radius: 10px;
  transform: scale(0);
  transition: 0.5s;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
}
.prompt > div > div img {
  border-radius: 10px;
}
.prompt > div > div input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 15px;
  margin-bottom: 10px;
}
.prompt > div > div textarea {
  width: 100%;
  min-height: 150px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 15px;
  max-height: 200px;
}
.prompt > div > div button {
  width: 120px;
  margin-top: 10px;
  padding: 10px;
}
.prompt.Edit div.Edit {
  transform: scale(1);
  display: flex;
}
.prompt.Del div.Del {
  transform: scale(1);
  display: flex;
}
.prompt.Edit,
.prompt.Del {
  left: 0;
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
  z-index: 4;
  display: block !important;
  box-shadow: none !important;
}

@media (max-width: 602px) {
  .prompt > div > div {
    width: 95%;
  }
}

.DIvOptions {
  display: flex;
  align-items: center;
  justify-content: center;
}
.DIvOptions input {
  margin-top: 10px;
  height: 0 !important;
  padding: 0 !important;
  width: 0 !important;
  transition: 0.2s;
  border: 0 !important;
  overflow: hidden;
}
.DIvOptions > div {
  width: 0;
  height: 0;
  transition: 0.2s;
  margin-top: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.DIvOptions > div label {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 2px solid #090;
}
.DIvOptions.YouTube input {
  width: 100% !important;
  height: 45px !important;
  border: 2px solid #ccc !important;
  padding: 20px 18px !important;
}
.DIvOptions.Upload > div {
  width: 100%;
  height: 200px;
}
</style>
