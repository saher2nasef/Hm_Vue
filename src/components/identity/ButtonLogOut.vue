<template>
  <button
    style="width: 100px"
    @click="LogOut"
    class="btn btn-primary mx-auto d-block"
  >
    Log Out
  </button>
</template>

<script>
export default {
  name: "LogOut",
  methods: {
    LogOut() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      this.$store.state.Islogin = false;
      this.$store.state.The_State = "User";
      this.$router.push("/Login").catch(() => {});
    },
  },
};
</script>

<style></style>
