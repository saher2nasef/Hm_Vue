<template>
  <header>
    <div style="width: 150px" v-if="$store.state.Islogin">
      <ButtonLogOut />
    </div>

    <div class="Left" v-if="$store.state.Islogin">
      <button class="img">
        <img src="@/assets/images/User/1.jpg" />
      </button>
      <button class="bell">
        <span class="material-icons-outlined"> notifications </span>
      </button>
      <button class="th">
        <span class="material-icons-outlined"> apps </span>
      </button>
      <button class="video">
        <span class="material-icons-outlined"> video_call </span>
      </button>
    </div>
    <div class="Left" v-else>
      <router-link
        to="/Login"
        class="btn btn-outline-primary d-flex align-items-center"
      >
        <span class="fs-5 mx-2">Login</span>
        <span class="material-icons-outlined"> account_circle </span>
      </router-link>
      <button><span class="material-icons-outlined">more_vert</span></button>
      <button class="th">
        <span class="material-icons-outlined"> apps </span>
      </button>
    </div>
    <div class="Center">
      <select
        v-model="Lang"
        style="width: 120px"
        class="form-select me-3 d-none"
      >
        <option value="En">English</option>
        <option value="Ar">Arabic</option>
      </select>
      <button class="microphone">
        <span class="material-icons-outlined"> mic </span>
      </button>
      <div class="BarSearch">
        <input type="text" :placeholder="$store.state.Search" />
        <button>
          <span class="material-icons-outlined"> search </span>
        </button>
      </div>
      <button class="search">
        <span class="material-icons-outlined"> search </span>
      </button>
    </div>
    <div class="Right">
      <router-link to="/">
        <img src="@/assets/images/Logo (2).png" alt="" />
      </router-link>
      <button><span class="material-icons-outlined"> menu </span></button>
    </div>
  </header>
</template>
<script>
import En from "../Data/resourceEn.json";
import Ar from "../Data/resourceAr.json";
import ButtonLogOut from "@/components/identity/ButtonLogOut";
export default {
  name: "NavBar",
  data() {
    return {
      Lang: "Ar",
    };
  },
  components: {
    ButtonLogOut,
  },
  // methods: {
  //   // LogOut() {
  //   //   var cookies = document.cookie.split(";");
  //   //   for (var i = 0; i < cookies.length; i++) {
  //   //     var cookie = cookies[i];
  //   //     var eqPos = cookie.indexOf("=");
  //   //     var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  //   //     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  //   //   }
  //   //   this.$store.state.Islogin = false;
  //   //   this.$store.state.The_State = "User";
  //   //   this.$router.push("/").catch(() => {});
  //   // },
  // },
  watch: {
    Lang(v) {
      console.log(v);
      if (v == "En") {
        this.$store.state.resource = En;
      } else if (v == "Ar") {
        this.$store.state.resource = Ar;
      }
    },
  },
};
</script>
