<template>
  <div class="ConTainer_YouTube">
    <section class="MainArea pt-5">
      <router-link
        to="/Blog"
        tag="button"
        class="btn btn-primary me-auto BtnDesign"
      >
        <span>{{ $store.state.resource.ButtonBack }}</span>
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="me-2" />
      </router-link>
      <div class="Atricle">
        <article class="blog-post hentry index-post post-1">
          <div class="DivHeader">
            <!-- require(`../assets/images/Image.jpeg`) -->
            <!-- <img :src="Data.Image.Src" width="100%" class="mb-3" /> -->
            <img
              :src="require(`../assets/images/Image.jpeg`)"
              width="100%"
              class="mb-3"
            />
          </div>
          <div class="post-content mt-3">
            <h2 class="post-title">
              {{ Data.title }}
            </h2>
            <p dir="rtl" class="mt-3 post-snippet">
              {{ Data.body }}
            </p>
          </div>
        </article>
        <div
          class="m-auto DivPost"
          :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
        >
          <div class="comments">
            <h3 class="fw-bold mt-3">{{ $store.state.resource.Comments }}</h3>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (3).jpg" alt="" />
              <div class="text-comment">
                <a href="#">وديع متواضع</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>يعود تاريخ ظهور تسلق الجبال إلى منتصف القرن الثامن عشر</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (12).jpg" alt="" />
              <div class="text-comment">
                <a href="#">ماهر صموئيل</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>يعود تاريخ ظهور تسلق الجبال إلى منتصف القرن الثامن عشر</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (13).jpg" alt="" />
              <div class="text-comment">
                <a href="#">مينا ناصف</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>الله عظيم جدا</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
          </div>
          <div class="logn" data-aos="fade-up-right">
            <h2>
              {{ $store.state.resource.Leave_comment }}
            </h2>
            <form action="">
              <div>
                <span>{{ $store.state.resource.Leave_comment2.Name }} *</span>
                <input type="text" name="" id="" />
              </div>
              <div>
                <span>{{ $store.state.resource.Leave_comment2.Email }} *</span>
                <input type="email" name="" id="" />
              </div>
              <div>
                <span
                  >{{ $store.state.resource.Leave_comment2.Website }} *</span
                >
                <input type="text" name="" id="" />
              </div>
              <div>
                <span
                  >{{ $store.state.resource.Leave_comment2.Message }} *</span
                >
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button class="btn-main">
                {{ $store.state.resource.Leave_comment2.post_comment }}
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- 
        // This Is For Mony
          <div class="Atricle">
        <article class="blog-post hentry index-post post-1">
          <div class="DivHeader">
            <img
              v-if="Data.Image.Type == 'image'"
              :src="Data.Image.Src"
              width="100%"
              class="mb-3"
            />
            <iframe
              allowfullscreen
              allowtransparency
              allow="autoplay"
              v-else-if="Data.Image.Type == 'Video'"
              :src="Data.Image.Src"
              width="100%"
              height="400px"
              class="mb-3"
            ></iframe>
          </div>
          <div class="post-content mt-3">
            <h2 class="post-title">
              {{ Data.title }}
            </h2>
            <p dir="rtl" class="mt-3 post-snippet">
              {{ Data.body }}
            </p>
          </div>
        </article>
        <div
          class="m-auto DivPost"
          :dir="$store.state.resource.Dir == 'Ar' ? 'rtl' : 'ltr'"
        >
          <div class="comments">
            <h3 class="fw-bold mt-3">{{ $store.state.resource.Comments }}</h3>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (3).jpg" alt="" />
              <div class="text-comment">
                <a href="#">وديع متواضع</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>يعود تاريخ ظهور تسلق الجبال إلى منتصف القرن الثامن عشر</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (12).jpg" alt="" />
              <div class="text-comment">
                <a href="#">ماهر صموئيل</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>يعود تاريخ ظهور تسلق الجبال إلى منتصف القرن الثامن عشر</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
            <div class="comment" data-aos="fade-up-right">
              <img src="@/assets/images/Challang/1 (13).jpg" alt="" />
              <div class="text-comment">
                <a href="#">مينا ناصف</a>
                <span>01 Jan 2045 at 12:00pm</span>
                <p>الله عظيم جدا</p>
                <button class="btn-mainy">
                  {{ $store.state.resource.Reply }}
                </button>
              </div>
            </div>
          </div>
          <div class="logn" data-aos="fade-up-right">
            <h2>
              {{ $store.state.resource.Leave_comment }}
            </h2>
            <form action="">
              <div>
                <span>{{ $store.state.resource.Leave_comment2.Name }} *</span>
                <input type="text" name="" id="" />
              </div>
              <div>
                <span>{{ $store.state.resource.Leave_comment2.Email }} *</span>
                <input type="email" name="" id="" />
              </div>
              <div>
                <span
                  >{{ $store.state.resource.Leave_comment2.Website }} *</span
                >
                <input type="text" name="" id="" />
              </div>
              <div>
                <span
                  >{{ $store.state.resource.Leave_comment2.Message }} *</span
                >
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button class="btn-main">
                {{ $store.state.resource.Leave_comment2.post_comment }}
              </button>
            </form>
          </div>
        </div>
      </div>
       -->
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
import axios from "axios";
export default {
  name: "Posts",
  props: ["id"],
  data: function () {
    return {
      Data: Date,
    };
  },
  created() {
    const url = "http://josephnasef-001-site1.ctempurl.com/Api/Post/" + this.id;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.Data = response.data;
        console.log(this.Data);
        document.title = "History Makers | Blog " + this.Data.title;
      });
  },
};
</script>
<style scoped>
.Posts {
  padding: 80px 20px 0;
}
article {
  width: 100%;
}
article img {
  width: 250px;
}
.index-post {
  background-color: #ffffff;
  padding: 20px;
  margin: 25px 0 0 20px;
  border: 1px solid #cccccc;
}
.index-post .post-header {
  overflow: hidden;
}

.index-post .post-content {
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.index-post .post-content .post-snippet {
  font-size: 20px;
}
.index-post .post-header .post-title {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
  margin: 0 0 12px;
}
.post-meta {
  font-size: 13px;
  color: #aaaaaa;
  font-weight: 400;
  padding: 0 1px;
}

.MainArea {
  display: flex;
  flex-direction: column !important;
  align-content: center !important;
  justify-content: center !important;
  align-items: center !important;
  padding-left: 20px !important;
}
@media (max-width: 882px) {
  .ConTainer .ConTainer_YouTube .MainArea {
    width: 100% !important;
    padding: 20px 10px !important;
    justify-content: center;
  }
}
.Atricle {
  width: 100%;
}
.btn-mainy,
.btn-main {
  padding: 8px 20px;
  background-color: #ddd;
  color: #343148;
  border: 0;
  margin: 0;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 5px;
}
.btn-mainy:hover,
.btn-main:hover {
  background-color: #343148;
  color: #fff;
}
article,
.DivPost {
  width: 70% !important;
  margin: 0 auto !important;
}

.index-post {
  background-color: #ffffff;
  padding: 20px;
  margin: 0 0 25px 20px;
  border: 1px solid #cccccc;
  color: #000;
  overflow: hidden;
  border-radius: 5px;
  transition: 0.5s;
  position: relative;
}
.index-post:hover {
  background-size: 120%;
  transition: 0.5s;
}
.index-post:hover .post-content {
  top: -15px;
}
.index-post .DivHeader {
  height: 400px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.index-post .DivHeader img {
  object-fit: cover;
}
.index-post .DivHeader img,
.index-post .DivHeader iframe {
  width: 100%;
  height: 100%;
}
.index-post .post-content {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  padding: 30px;
}

.index-post .post-content .post-snippet {
  font-size: 24px;
  margin-top: 10px;
  text-align: right;
}
.index-post .post-content .post-title {
  font-size: 40px;
  font-weight: 500;
  margin: 0 0 4px;
  text-align: center;
}
.post-meta {
  font-size: 13px;
  color: #aaaaaa;
  font-weight: 400;
  padding: 0 1px;
}
.BtnDesign {
  width: 120px;
  padding: 8px 30px;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  font-size: 20px;
  margin: 0 0 20px 0;
  justify-content: space-evenly;
}
.BtnDesign span {
  margin-top: -5px;
}
.BtnDesign svg {
  margin-right: 10px;
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

.Atricle .comments {
  width: 95%;
}

.Atricle .comments .comment {
  display: flex;
  align-items: flex-start;
  margin: 20px 0 30px;
}

.Atricle .comments h2,
.Atricle .comments h3 {
  color: #343148;
}

.Atricle .comments .comment img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.Atricle .comments .comment .text-comment {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.Atricle .comments .comment .text-comment a {
  text-decoration: none;
  color: #000;
  transition: 0.5s;
  font-size: 20px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
}

.Atricle .comments .comment .text-comment a:hover {
  color: #ccc;
}

.Atricle .comments .comment .text-comment span {
  color: rgb(121, 118, 121);
  font-size: 15px;
}

.Atricle .comments .comment .text-comment p {
  color: rgb(121, 118, 121);
  font-family: sans-serif;
  font-size: 21px;
  font-weight: bolder;
}

.Atricle .logn form {
  padding: 30px;
  background: #f3f6ff;
  width: 100%;
  margin-bottom: 30px;
}

.Atricle .logn form div {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.Atricle .logn form div span {
  margin-bottom: 10px;
  text-transform: capitalize;
  color: #72726b;
  font-size: 20px;
}

.Atricle .logn form div input {
  height: 35px;
  outline: 0;
  padding: 10px;
}

.Atricle .logn form div textarea {
  outline: 0;
  height: 140px;
  padding: 10px 15px;
  /* resize: none; */
}

.Atricle .logn h2 {
  color: #343148;
}
@media (max-width: 1200px) {
  article,
  .DivPost {
    width: 80% !important;
    margin: 0 auto !important;
  }
}
@media (max-width: 1065px) {
  article,
  .DivPost {
    width: 90% !important;
    margin: 0 auto !important;
  }
}
@media (max-width: 966px) {
  article,
  .DivPost {
    width: 100% !important;
    margin: 0 auto !important;
  }
  .index-post .DivHeader {
    height: 300px;
  }
}
@media (max-width: 670px) {
  /* .index-post {
    text-align: center;
  } */
  .index-post .post-content {
    flex-direction: column;
  }
}
@media (max-width: 615px) {
  .index-post .DivHeader {
    height: 250px;
  }
}
@media (max-width: 530px) {
  .index-post .DivHeader {
    height: 200px;
  }
  .index-post .post-content .post-title {
    font-size: 30px;
  }
  .index-post .post-content .post-snippet {
    font-size: 17px;
  }
}
@media (max-width: 430px) {
  .index-post .DivHeader {
    height: 186px;
  }
}
</style>
