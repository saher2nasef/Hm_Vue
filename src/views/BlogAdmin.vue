<template>
  <div class="ConTainer_YouTube">
    <!--  <div
      :class="'Add_Post ' + PostClass"
      :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
    >
      <div class="Over" @click="CancelPost"></div>
      <div>
        <h1>{{ $store.state.resource.Buttons.AddPost }}</h1>
        <div>
          <select v-model="TextSelect">
            <option value="YouTube">رابط الفديو</option>
            <option value="Upload">افع صورة المدونة</option>
          </select>
          <div :class="'DIvOptions ' + TextSelect">
            <input type="text" ref="Url_Post" placeholder="ادخل رابط الفيديو" />
            <div>
              <label for="File">افع الصورة</label>
              <input type="file" id="File" hidden />
            </div>
          </div>
        </div>
        <div>
          <span>{{ $store.state.resource.Buttons.Title }}</span>
          <input type="text" ref="Title_Post" />
        </div>
        <div>
          <span>{{ $store.state.resource.Buttons.describe }}</span>
          <textarea ref="Body_Post"></textarea>
        </div>
        <div class="Buttons">
          <button class="btn btn-success" @click="AddPost">
            <span>{{ $store.state.resource.ButtonAdd }}</span>
            <span class="material-icons-outlined"> add_circle </span>
          </button>
          <button
            @click="CancelPost"
            class="btn btn-primary"
            :dir="$store.state.resource.Dir == 'Ar' ? 'ltr' : 'ltr'"
          >
            <span>{{ $store.state.resource.ButtonCancel }}</span>
            <span class="material-icons-outlined"> arrow_forward_ios </span>
          </button>
        </div>
      </div>
    </div> -->
    <section class="MainArea pt-5">
      <AddPost
        v-if="$store.state.Islogin && $store.state.The_State == 'Admin'"
      />
      <div class="ConToBlog">
        <div class="left">
          <div class="BlogerSaide">
            <div class="InputSearch">
              <input type="text" />
              <font-awesome-icon icon="fa-solid fa-search" />
            </div>
            <br />
            <div class="Show">
              <div class="Popular">
                <h4>Popular</h4>
                <div>
                  <img src="@/assets/images/21.jpeg" alt="" />
                  <div>
                    <h6>
                      How a good team can positively influence your business 1
                    </h6>
                  </div>
                </div>
                <div>
                  <img src="@/assets/images/21.jpeg" alt="" />

                  <div>
                    <h6>
                      How a good team can positively influence your business 2
                    </h6>
                  </div>
                </div>
                <div>
                  <img src="@/assets/images/21.jpeg" alt="" />
                  <div>
                    <h6>
                      How a good team can positively influence your business 3
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetList />
      </div>
    </section>
    <aside class="Options">
      <router-link to="/">
        <span class="material-icons-outlined"> home </span>
        <span>{{ $store.state.resource.Buttons.Home }}</span>
      </router-link>
      <router-link to="/Blog"
        ><span class="material-icons-outlined"> newspaper </span>
        <span>{{ $store.state.resource.Buttons.Bloger }}</span>
      </router-link>
      <router-link to="/courses">
        <span class="material-icons-outlined"> school </span>
        <span>{{ $store.state.resource.Buttons.Courses }}</span>
      </router-link>
    </aside>
  </div>
</template>
<script>
// import axios from "axios";
// import DataBlog from "../Data/Blog.json";
import AddPost from "@/components/Bloger/AddPost";
import GetList from "@/components/Bloger/ListPosts";
export default {
  name: "Blog",
  components: {
    AddPost,
    GetList,
  },
  data: function () {
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
  mounted() {
    document.addEventListener(
      "keydown",
      (event) => {
        var name = event.which;
        if (name == 27) {
          this.PostClass = "";
          this.Class = "";
        }
      },
      false
    );
    // const url = "http://localhost:3000/Posts";
    // axios
    //   .get(url, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response = String) => {
    //     this.Saher = response.data;
    //   });
    document.title = "History Makers | Blog";
  },
};
</script>

<style scoped>
.MainArea {
  justify-content: center !important;
  align-items: center !important;
  align-content: center !important;
  flex-direction: column;
}
.BlogerSaide {
  width: 100%;
}
.BlogerSaide ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  flex-direction: row-reverse;
}
.BlogerSaide ul li {
  width: calc(100% / 3);
}
.BlogerSaide ul li button {
  width: 100%;
  padding: 7px 0;
  border: 0;
  border-right: 2px solid #000;
}
.BlogerSaide ul li button.last {
  border-right: 0;
}
.BlogerSaide .Show {
  text-align: left;
  position: relative;
}
.BlogerSaide .Show > div {
  overflow: hidden;
  transition: 0.4s;
}
.BlogerSaide .Show > div > div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  margin-bottom: 8px;
}
.BlogerSaide .Show > div > div > div {
  margin-left: 10px;
}
.InputSearch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40px;
}
.InputSearch input {
  width: 100%;
  height: 100%;
  padding: 5px 40px 5px 10px;
  outline: 0;
  border-radius: 5px;
  border: 3px solid #656363;
  direction: ltr;
  font-size: 20px;
}
.InputSearch svg {
  position: absolute;
  right: 0;
  padding: 9px 15px;
  top: 4px;
}

.ConToBlog {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 0;
  width: 100%;
  flex-direction: row-reverse;
}
.left {
  flex-basis: 40%;
  position: sticky;
  top: 100px;
  align-self: flex-start;
  padding: 0 10px 0 0;
  transition: 0.5s;
  padding-bottom: 30px;
}
.Right {
  top: 0;
  flex-basis: 60%;
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

@media (max-width: 1168px) {
  .left {
    background-color: transparent;
    width: 100%;
    position: relative;
    top: 0;
    align-self: flex-start;
    padding: 0 10px 0 0;
    transition: 0.5s;
    padding-bottom: 30px;
  }
  .ConToBlog {
    flex-direction: column;
    width: 80%;
  }
}
@media (max-width: 800px) {
  .ConToBlog {
    flex-direction: column;
    width: 100%;
  }
}
</style>
