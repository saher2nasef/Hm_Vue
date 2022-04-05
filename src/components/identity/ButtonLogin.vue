<template>
  <button
    @click="Login"
    class="btn btn-primary fs-4 px-5 pt-1 pb-1"
    type="button"
  >
    Login
  </button>
</template>
<script>
import identity from "./identity";
export default {
  name: "Login",
  props: ["Username", "Password"],
  methods: {
    Login() {
      identity.Login(this.Username, this.Password).then((Val) => {
        let This = this.$store.state;
        This.Token = Val.token;
        if (Val.rolesName.length == 0) {
          This.The_State = "User";
          document.cookie = `The_State=${This.The_State}`;
        }
        if (This.Token != "") {
          This.Islogin = true;
        }
        document.cookie = `Id=${This.Token}`;
        this.$router.push("/");
      });
    },
  },
};
</script>
