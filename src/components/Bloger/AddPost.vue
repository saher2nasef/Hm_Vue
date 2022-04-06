<template>
  <div>
    <div
      :class="'Add_Post ' + PostClass"
      :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
    >
      <div>
        <div class="Over" @click="CancelPost"></div>
        <div>
          <h1>{{ $store.state.resource.Buttons.AddPost }}</h1>
          <!-- <div>
            <select v-model="TextSelect">
              <option value="YouTube">
                {{ $store.state.resource.Buttons.Video_Url }}
              </option>
            </select>
            <div :class="'DIvOptions ' + TextSelect">
              <input
                type="text"
                ref="Url_Post"
                :placeholder="$store.state.resource.Buttons.LinkVideo"
              />
              <div>
                <label for="File">افع الصورة</label>
                <input type="file" id="File" hidden />
              </div>
            </div>
          </div> -->
          <div>
            <span>{{ $store.state.resource.Buttons.Title }}</span>
            <input type="text" ref="Title_Post" v-model="Title" />
          </div>
          <div>
            <span>{{ $store.state.resource.Buttons.describe }}</span>
            <textarea ref="Body_Post" v-model="describe"></textarea>
          </div>
          <div class="Buttons">
            <button class="btn btn-success" @click="Add_Post">
              <span>{{ $store.state.resource.ButtonAdd }}</span>
              <span class="material-icons-outlined"> add_circle </span>
            </button>
            <button
              @click="CancelPost"
              class="btn btn-primary"
              :dir="$store.state.resource.Dir == 'Ar' ? 'ltr' : 'ltr'"
            >
              <span>{{ $store.state.resource.ButtonCancel }}</span>
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="ms-2 me-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <button @click="AddPost" class="btn btn-primary Btn">
      <span class="material-icons-outlined"> add </span>
      <span>{{ $store.state.resource.Buttons.AddPost }}</span>
    </button>
  </div>
</template>

<script>
import Bloger from "./BlogerServices";

export default {
  name: "AddPost",
  data() {
    return {
      PostClass: "",
      TextSelect: "YouTube",
      Title: "",
      describe: "",
    };
  },
  methods: {
    AddPost() {
      this.PostClass = "active";
    },
    CancelPost() {
      this.PostClass = "";
    },
    Add_Post() {
      if (
        this.Title != "" &&
        this.describe != "" &&
        this.$store.state.Token != ""
      ) {
        Bloger.AddPost(this.Title, this.describe, this.$store.state.Token);
        setTimeout(() => {
          location.pathname = "Blog";
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
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
.Add_Post {
  position: fixed;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 10000000000;
  transition: 0.4s;
  transform: scale(0);
}
.Add_Post > div > div {
  background: #fff;
  width: 500px;
  height: auto;
  padding: 50px 20px;
  border-radius: 10px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
}
@media (max-width: 502px) {
  .Add_Post > div > div {
    width: 95%;
  }
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
.Add_Post > div > div > div {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  position: relative;
}

.Add_Post > div > div > div span {
  left: 18px;
  font-size: 20px;
}
.Add_Post > div > div > div input {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
.Add_Post select {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 0 18px;
}
.Add_Post > div > div > div.Buttons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.Add_Post > div > div > div.Buttons > button {
  width: 130px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}
.Add_Post > div > div > div.Buttons > button span:first-child {
  transform: translateY(1px);
}
.Add_Post > div > div > div textarea {
  width: 100%;
  height: 180px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
.Add_Post.active {
  transform: scale(1);
}
.Btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
}
</style>
