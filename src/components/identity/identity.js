import axios from "axios";
const Url = "http://josephnasef-001-site1.ctempurl.com/api/Accounts/";
export default class CoursesServices {
  static GetDataFromToken(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
  static Login(Username, Password) {
    if (Username != "" && Password != "") {
      // let This2 = this.$router;
      // console.log(Username);
      // console.log(this.Password);
      // http://josephnasef-001-site1.ctempurl.com/Api/Post
      // http://josephnasef-001-site1.ctempurl.com/api/Account/Login
      return axios
        .post(Url + "Login", {
          Email: Username,
          Password: Password,
        })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  // ButtonRegister.vue
  static Register(Email, Password) {
    // try {
    //   return axios
    //     .post(Url + "Register", {
    //       Name: Email,
    //       Email: Email,
    //       Password: Password,
    //     })
    //     .then((Res) => {
    //       console.log(Res);
    //       if (Res.data.errors != undefined) {
    //         return Res;
    //       }
    //       if (Res.data.errors == undefined) {
    //         return Res.data.errors;
    //       }
    //     });
    // } catch (error) {
    //   if (error.response) {
    //     console.log(error);
    //   }
    // }

    return axios
      .post(Url + "Register", {
        Name: Email,
        Email: Email,
        Password: Password,
      })
      .then((Res) => {
        return Res;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}
