<template>
  <ButtonLogin />
</template>

<script>
import ButtonLogin from "@/components/identity/ButtonLogin";
export default {
  name: "Login",
  components: {
    ButtonLogin,
  },

  created() {
    let This2 = this.$router;
    if (localStorage.getItem("Token") != "") {
      This2.push("/");
    }
  },
};
</script>
