<template>
  <router-link :to="'/Watch/' + id">
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
        {{ Image2 }}
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
  name: "Course",
  data: function () {
    return {
      Image1True: "Image1",
      Image2True: "Image2",
    };
  },
  props: ["id", "title", "Title2", "Views", "Long", "Image1", "Image2"],
};
</script>
