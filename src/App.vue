<template>
  <div id="app" class="ConTainer">
    <NaBar />
    <router-view />
  </div>
</template>
<script>
import NaBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: {
    NaBar,
  },
  created() {
    if (
      localStorage.getItem("The_State") != null &&
      localStorage.getItem("Token") != null
    ) {
      if (
        localStorage.getItem("The_State") != "" &&
        localStorage.getItem("Token") != ""
      ) {
        this.$store.state.Islogin = true;
        this.$store.state.The_State = localStorage.getItem("The_State");
        this.$store.state.Token = localStorage.getItem("Token");
      } else {
        this.$store.state.Islogin = false;
        this.$store.state.The_State = "User";
        this.$store.state.Token = "";
      }
    } else {
      localStorage.setItem("The_State", "");
      localStorage.setItem("Token", "");
    }
    document.title = "History Makers";
  },
};
</script>

<style>
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 5px;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.2) 75%,
    transparent 75%,
    transparent
  );
}

@import url("assets/Style.css");
</style>
