<template>
  <main class="Login">
    <form action="" id="Login" method="POST">
      <h1>Login</h1>

      <div class="Input_DIv">
        <span>Username</span>
        <input type="text" v-model="Username" />
      </div>
      <div class="Input_DIv">
        <span>Password</span>
        <input type="password" v-model="Password" />
      </div>
      <p>
        <router-link to="/Register">Register</router-link>
      </p>

      <button
        @click="Login"
        class="btn btn-primary fs-4 px-5 pt-1 pb-1"
        type="button"
      >
        Login
      </button>
    </form>
  </main>
</template>
<script>
import identity from "./identity";
export default {
  name: "Login",
  data() {
    return {
      Username: "",
      Password: "",
    };
  },
  methods: {
    Login() {
      identity.Login(this.Username, this.Password).then((Val) => {
        let This = this.$store.state;
        This.Token = Val.token;
        if (Val.rolesName.length == 0) {
          This.The_State = "User";
          localStorage.setItem("The_State", This.The_State);
        }
        if (This.Token != "") {
          This.Islogin = true;
        }
        localStorage.setItem("Token", This.Token);
        this.$router.push("/");
      });
    },
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
  overflow: hidden;
  height: auto;
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
  animation: Somthe 3s linear infinite;
}
@keyframes Somthe {
  0% {
    background: #ccc;
  }
  50% {
    background: #fff;
  }
  100% {
    background: #ccc;
  }
}
main.Login form .Input_DIv {
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  position: relative;
}

main.Login form .Input_DIv span {
  left: 18px;
  font-size: 20px;
}
main.Login form .Input_DIv input {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
main.Login form a {
  font-size: 23px;
  text-decoration: underline !important;
}
</style>
