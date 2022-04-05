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
    function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded.split("; ");
      let res;
      cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      });
      return res;
    }
    if (getCookie("Id") != undefined && getCookie("The_State") != undefined) {
      this.$store.state.Token = getCookie("Id");
      if (getCookie("Id") != "" && getCookie("The_State") != "") {
        this.$store.state.Islogin = true;
        this.$store.state.The_State = getCookie("The_State");
      }
      if (getCookie("Id") == "" && getCookie("The_State") == "") {
        this.$store.state.Islogin = false;
        this.$store.state.The_State = "User";
      }
    } else {
      document.cookie = "Id=";
      document.cookie = "The_State=";
      this.$store.state.Islogin = false;
      this.$store.state.The_State = "User";
    }
    document.title = "History Makers";
    document.head.innerHTML +=
      '<link rel="icon" href="' + require(`@/assets/images/Youtube.png`) + '">';
    //
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
