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
      localStorage.clear();
      this.$store.state.Islogin = false;
      this.$store.state.The_State = "User";
      this.$router.push("/Login").catch(() => {});
    },
  },
};
</script>

<style></style>
