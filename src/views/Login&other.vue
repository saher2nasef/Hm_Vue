<template>
  <main class="Login" v-if="Status">
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
      <ButtonLogin :Username="Username" :Password="Password" />
    </form>
  </main>
</template>

<script>
import ButtonLogin from "@/components/identity/ButtonLogin";
export default {
  name: "Login",
  components: {
    ButtonLogin,
  },
  data() {
    return {
      Username: "",
      Password: "",
      Status: false,
    };
  },
  created() {
    function getCookie(name) {
      // Split cookie string and get all individual name=value pairs in an array
      var cookieArr = document.cookie.split(";");

      // Loop through the array elements
      for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
        }
      }

      // Return null if not found
      return null;
    }
    if (getCookie("Id") == "" || getCookie("Id") == null) {
      this.Status = true;
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
