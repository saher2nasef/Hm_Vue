<template>
  <main class="Login">
    <ButtonRegister />
  </main>
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
      // SaherNasef@gmail.com
      // Saher123_nas@#
      // /////////////////////
      // Saher@gmail.com
      // Saher1223456789-
      // /////////////
      // SaherNasefGerges@gmail.com
      // Saher@Sa123456789
      // ////////////////
      // Nasef@Gamil.com
      // Nasef12@123
    };
  },
  created() {
    let This = this.$store.state;
    // let This2 = this.$router;
    if (This.Token != "") {
      // This2.push("/");
    }
  },
};
</script>

<style scoped>
main.Login {
  margin-top: 70px;
  padding: 20px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
}
main.Login form {
  height: auto;
  overflow: hidden;
  background: #fff;
  border-radius: 20px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

main.Login form .Input_DIv {
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  position: relative;
}

main.Login form .Input_DIv span {
  font-size: 20px;
  text-transform: capitalize !important;
}
main.Login form .Input_DIv input {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
.input {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 0 10px;
}
main.Login form a {
  font-size: 23px;
  text-decoration: underline !important;
}
.Errors {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
