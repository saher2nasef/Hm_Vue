<template>
  <form action="" method="POST" id="Form">
    <h1>Rregister</h1>

    <ul
      class="alert px-3 fs-6 text-capitalize text-center alert-danger list-unstyled"
      v-for="Error in Errors"
      :key="Error"
    >
      <li>{{ Error }}</li>
    </ul>

    <div
      class="alert fs-4 w-100 text-capitalize text-center alert-success"
      v-if="Good"
    >
      {{ Good }}
    </div>
    <div class="Input_DIv">
      <div>
        <span>Email</span>
        <p class="Error" v-if="Email.Email_Error">{{ Email.Email_Error }}</p>
        <p class="Good" v-if="Email.Email_Good">{{ Email.Email_Good }}</p>
      </div>
      <div>
        <input
          type="Email"
          @blur="Email_V_B"
          ref="Email"
          v-model="Email.Inner"
          @keyup="Email_V_B"
          required
        />
      </div>
      <div class="text-denger"></div>
    </div>
    <div class="Input_DIv">
      <div>
        <span>Password</span>
        <p class="Good" v-if="Password.Password_Good">
          {{ Password.Password_Good }}
        </p>
      </div>
      <div>
        <input
          type="password"
          ref="Password"
          v-model="Password.Inner"
          @blur="Password_V_B"
          @keyup="Password_V_B2"
          required
        />
      </div>
      <ul class="mt-2 Error" v-if="Password.Password_Error.length != 0">
        <li v-for="(error, i) in Password.Password_Error" :key="'id' + i">
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="Input_DIv">
      <span>confirm password</span>
      <input
        type="password"
        class="confirm_password"
        ref="confirm_password"
        v-model="confirm_password.Inner"
        required
        @blur="confirm_password_V_B"
        @keyup="confirm_password_V_B"
      />
    </div>
    <div class="Input_DIv">
      <span>Country</span>
      <select class="input" v-model="Country">
        <option
          v-for="(Country, index) in Countries"
          :key="index"
          :value="Country.name"
        >
          {{ Country.name }}
        </option>
      </select>
    </div>
    <div class="Input_DIv">
      <span>Age</span>
      <input type="number" v-model="Age" />
    </div>

    <p>
      <router-link to="/Login">Login</router-link>
    </p>
    <button
      @click="Register"
      class="btn btn-primary fs-4 px-5 pt-1 pb-1"
      type="button"
    >
      Register
    </button>
  </form>
</template>
<script>
import identity from "./identity";
import Data from "@/Data/Countries.json";
export default {
  name: "Register",
  data() {
    return {
      Email: {
        Inner: "",
        Email_Error: "",
        Email_Good: "",
      },
      Password: {
        Inner: "",
        Password_Error: [],
        Password_Good: "",
      },
      confirm_password: {
        Inner: "",
        confirm_password_Error: [],
        confirm_password_Good: "",
      },
      Country: "",
      Age: "",
      Countries: "",
      Errors: [],
      Good: "",
    };
  },
  created() {
    this.Countries = Data;
  },
  // V == Vaild And B == Bulr
  methods: {
    validPaassowrd: function (value) {
      const containsUppercase = /[A-Z]/.test(value);
      const containsLowercase = /[a-z]/.test(value);
      const containsNumber = /[0-9]/.test(value);
      const containsSpecial = /[#?!@$%^&*-]/.test(value);
      return {
        Status:
          containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial,
        Errors: {
          containsUppercase: containsUppercase,
          containsLowercase: containsLowercase,
          containsNumber: containsNumber,
          containsSpecial: containsSpecial,
        },
      };
    },
    VaildEmail(Value) {
      var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return Value.match(mailformat);
    },
    Register() {
      console.log(this.Email_V_B());
      console.log(this.Password_V_B());
      console.log(this.confirm_password_V_B());
      if (
        this.Password.Inner != "" &&
        this.Email.Inner != "" &&
        this.confirm_password.Inner != ""
      ) {
        this.Errors = [];
        if (
          this.Email_V_B() &&
          this.Password_V_B() &&
          this.confirm_password_V_B()
        ) {
          identity
            .Register(this.Email.Inner, this.Password.Inner)
            .then((Val) => {
              if (Val.errors != undefined) {
                this.Good = "";
                for (let i = 0; i < Val.errors.length; i++) {
                  this.Errors.push(Val.errors[i]);
                }
              } else {
                this.Good = "Success The Your Form";
                this.$router.push("/Login");
              }
            });
        }
      } else {
        this.Errors = [];
        this.Errors.push("Please Must Fill All Input Filed");
      }
    },
    Email_V_B() {
      if (this.Email.Inner != "") {
        if (this.VaildEmail(this.Email.Inner)) {
          this.$refs["Email"].classList.add("Good");
          this.$refs["Email"].classList.remove("Error");
          this.Email.Email_Good = "Email Vaild";
          this.Email.Email_Error = "";
          return true;
        } else {
          this.$refs["Email"].classList.add("Error");
          this.$refs["Email"].classList.remove("Good");
          this.Email.Email_Error = "Email InVaild";
          this.Email.Email_Good = "";
        }
      } else {
        this.Email.Email_Error = "It cannot be empty ";
        this.Email.Email_Good = "";
        this.$refs["Email"].classList.add("Error");
        this.$refs["Email"].classList.remove("Good");
      }
    },
    Password_V_B() {
      if (this.Password.Inner != "") {
        let Passowrd_Vaild = this.validPaassowrd(this.Password.Inner);
        this.Password.Password_Error = [];
        if (Passowrd_Vaild.Status) {
          if (this.Password.Inner.length > 8) {
            this.Password.Password_Error = [];
            this.Password.Password_Good = "";
            this.$refs["Password"].classList.remove("Error");
            this.$refs["Password"].classList.add("Good");
            this.Password.Password_Good = "Strong Password";
            return true;
          } else {
            this.Password.Password_Error.push(
              `It must contain more than 9 characters`
            );
            this.$refs["Password"].classList.add("Error");
            this.$refs["Password"].classList.remove("Good");
            this.Password.Password_Good = "";
          }
        } else {
          this.Password.Password_Error = [];
          if (this.Password.Inner.length < 9) {
            this.Password.Password_Error.push(
              `It must contain more than 9 characters`
            );
          }
          if (!Passowrd_Vaild.Errors.containsUppercase) {
            this.Password.Password_Error.push(`It must contain Uppercase`);
          }
          if (!Passowrd_Vaild.Errors.containsLowercase) {
            this.Password.Password_Error.push(`It must contain Lowercase`);
          }
          if (!Passowrd_Vaild.Errors.containsNumber) {
            this.Password.Password_Error.push(`It must contain Number`);
          }
          if (!Passowrd_Vaild.Errors.containsSpecial) {
            this.Password.Password_Error.push(`It must contain Special`);
          }
          this.Password.Password_Good = "";
          this.$refs["Password"].classList.add("Error");
          this.$refs["Password"].classList.remove("Good");
        }
      } else {
        this.Password.Password_Error = [];
        this.Password.Password_Error.push("It cannot be empty");
        this.Password.Password_Good = "";
        this.$refs["Password"].classList.add("Error");
        this.$refs["Password"].classList.remove("Good");
      }
    },
    Password_V_B2() {
      this.Password_V_B();
      this.confirm_password_V_B();
    },
    confirm_password_V_B() {
      if (this.confirm_password.Inner != "" && this.Password.Inner != "") {
        this.Errors = [];
        if (this.Password.Inner === this.confirm_password.Inner) {
          this.Errors = [];
          this.$refs["confirm_password"].classList.add("Good");
          this.$refs["confirm_password"].classList.remove("Bad");
          return true;
        } else {
          this.Errors = [];
          this.Errors.push("Passowrd != confirm password");
          this.$refs["confirm_password"].classList.add("Bad");
          this.$refs["confirm_password"].classList.remove("Good");
        }
      } else {
        this.Errors = [];
        this.Errors.push("Please Must Fill All Password Input ");
        this.$refs["confirm_password"].classList.add("Bad");
        this.$refs["confirm_password"].classList.remove("Good");
      }
    },
  },
};
</script>
<style scoped>
p {
  margin-bottom: 0 !important;
}

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
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

main.Login form .Input_DIv {
  width: 100%;
  margin-bottom: 10px;
  position: relative;
}
main.Login form .Input_DIv > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main.Login form .Input_DIv p.Error {
  color: var(--Bad) !important;
}
main.Login form .Input_DIv ul.Error {
  list-style: none;
  margin: 0;
  padding: 0;
}
main.Login form .Input_DIv ul.Error li {
  color: var(--Bad) !important;
  padding: 8px 15px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 5px 0;
}
main.Login form .Input_DIv p.Good {
  color: var(--Good) !important;
}
main.Login form .Input_DIv span {
  font-size: 20px;
  text-transform: capitalize !important;
}
.confirm_password.Good {
  border: 2px solid var(--Good);
}
.confirm_password.Bad {
  border: 2px solid var(--Bad);
}
main.Login form .Input_DIv input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: 0;
  padding: 20px 18px;
}
main.Login form .Input_DIv input.Good {
  border: 2px solid var(--Good);
}
main.Login form .Input_DIv input.Error {
  border: 2px solid var(--Bad);
}
.input {
  width: 100%;
  height: 50px;
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
  flex-direction: column;
}
</style>
