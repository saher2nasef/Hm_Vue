<template>
  <ButtonRegister />
</template>

<script>
import ButtonRegister from "@/components/identity/ButtonRegister";
export default {
  name: "Register",
  components: {
    ButtonRegister,
  },
  data() {
    return {
      Name: "",
      Email: "",
      password: "",
      confirm_password: "",
      Country: "",
      Age: "",
      Countries: 0,
      Errors: [],
      Good: "",
    };
  },
  created() {
    let This2 = this.$router;
    if (localStorage.getItem("Token") != null) {
      if (localStorage.getItem("Token") != "") {
        This2.push("/");
      }
    } else {
      localStorage.setItem("Token", "");
    }
  },
};
</script>
