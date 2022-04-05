<template>
  <section class="MainArea pt-4">
    <button
      @click="Add_Course"
      v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      class="btn BtnDesign btn-primary mb-4"
    >
      <span class="material-icons-outlined"> add </span>
      <span>{{ $store.state.resource.Buttons.AddCourses }}</span>
    </button>
    <div
      v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      :class="'Add_Post ' + ClassCourse"
      :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
    >
      <div class="Over" @click="CancelCourse"></div>
      <div>
        <h1>{{ $store.state.resource.Buttons.AddCourses }}</h1>
        <div>
          <span>{{ $store.state.resource.Buttons.Title }}</span>
          <input type="text" v-model="Title" />
        </div>
        <div>
          <span>{{ $store.state.resource.Buttons.Link }}</span>
          <input type="text" v-model="Link" />
        </div>
        <div class="Buttons">
          <div @click="CancelCourse">
            <AddCourse :Url="Link" :Title="Title" />
          </div>
          <button
            @click="CancelCourse"
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
    <div class="Lists">
      <div
        v-if="Datas.length == 0"
        style="width: 200px"
        class="alert text-center alert-warning"
      >
        {{ Result }}
      </div>
      <videoShort
        class="videoShort"
        v-for="Data in Datas"
        :key="Data.id"
        :id="Data.youtubeListId"
        :Go="Data.youtubeListId"
        :title="Data.title"
      />
    </div>
  </section>
</template>
<script>
import CoursesServices from "./CoursesServices";
import videoShort from "./videoShort.vue";
import AddCourse from "@/components/Course/AddCourse";
export default {
  name: "ListsCourses",
  components: {
    videoShort,
    AddCourse,
  },
  data: function () {
    return {
      Datas: "",
      ClassCourse: "",
      Title: "",
      Link: "",
      Result: "",
    };
  },
  methods: {
    CancelCourse: function () {
      this.ClassCourse = "";
    },
    Add_Course() {
      this.ClassCourse = "active";
    },
  },
  created() {
    CoursesServices.GetList().then((Val) => {
      if (Val == false) {
        this.Result = "لاتوجد كورسات";
      }
      if (Val != false) {
        this.Datas = Val;
      }
    });
  },
};
</script>
<style scoped>
.ConTainer .ConTainer_YouTube .MainArea > div.Lists {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.MainArea {
  flex-direction: column !important;
  justify-content: center !important;
  align-content: center !important;
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
.Add_Post > div {
  height: auto;
  background: #fff;
  border-radius: 20px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 502px) {
  .Add_Post > div {
    width: 95%;
  }
}
.Add_Post > div > div {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  position: relative;
}

.Add_Post > div > div span {
  left: 18px;
  font-size: 20px;
}
.Add_Post > div > div input {
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
.Add_Post > div > div.Buttons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.Add_Post > div > div.Buttons button {
  width: 130px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.Add_Post > div > div.Buttons button span:first-child {
  transform: translateY(1px);
}
.Add_Post > div > div textarea {
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
.BtnDesign {
  width: fit-content;
  padding: 8px 20px;
  display: flex;
  flex-direction: row-reverse !important;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;
  justify-content: center;
  margin: 50px auto 0;
}
.BtnDesign span {
  margin-top: 3px;
  margin-left: 10px;
}
.BtnDesign svg {
  margin-left: 10px;
}
</style>
