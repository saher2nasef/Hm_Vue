<template>
  <div>
    <button @click="Edit" class="btn btn-primary mx-2">
      {{ $store.state.resource.ButtonEdit }}
      <font-awesome-icon icon="fa-solid fa-pen-to-square" class="ms-2 me-2" />
    </button>
    <div :class="'prompt' + Class">
      <div>
        <div class="Over" @click="CancelPost2"></div>
        <div
          class="Edit"
          :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
        >
          <h2>
            <span>{{ title }}</span> : تعديل في كورس
          </h2>
          <input type="text" v-model="title" />
          <textarea v-model="Url"></textarea>
          <div class="w-100 d-flex align-content-center justify-content-evenly">
            <button @click="EditCourse" class="btn btn-primary mx-2">
              {{ $store.state.resource.ButtonEdit }}
              <font-awesome-icon
                icon="fa-solid fa-pen-to-square"
                class="ms-2 me-2"
              />
            </button>
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
  </div>
</template>
<script>
import CoursesServices from "./CoursesServices";
import axios from "axios";
export default {
  name: "DelCourse",
  props: ["id"],
  data() {
    return {
      title: "",
      Url: "",
      Class: "",
    };
  },
  methods: {
    Edit() {
      this.Class = " Edit";
      const url = "http://localhost:3000/Courses/" + this.id;
      axios.get(url).then((response) => {
        this.title = response.data[0].Title;
        this.Url =
          "https://www.youtube.com/playlist?list=" + response.data[0].ListID;
      });
    },
    EditCourse() {
      CoursesServices.EditCourse(this.Url, this.title, this.id);
      setTimeout(() => {
        location.pathname = "courses";
      }, 1000);
    },
    Cancel: function () {
      this.Class = "";
      this.title = "";
      this.Url = "";
    },
    CancelPost2: function () {
      this.Class = "";
    },
  },
};
</script>
<style scoped>
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
  height: 90px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 15px;
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
</style>
