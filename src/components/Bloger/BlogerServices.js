import axios from "axios";
// eslint-disable-next-line no-unused-vars
var Data = "";
const Url = "http://josephnasef-001-site1.ctempurl.com/Api/Post/";

export default class Bloger {
  static AddPost(Title, describe, Id) {
    if (Title != "" && describe != "" && Id != "") {
      axios
        .post(Url, {
          Title: Title,
          Body: describe,
          UserId: Id,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  static EditPost(Id, Text, body, UserId) {
    axios
      .put(Url + Id, {
        Title: Text,
        Body: body,
        UserId: UserId,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static DelPost(Id) {
    axios.delete(Url + Id).then((response) => {
      console.log(response.data);
    });
  }

  static GetList() {
    return axios.get(Url).then((response) => {
      return response.data;
    });
  }
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
  static WhoRead(Token, PostId) {
    var Data = this.GetDataFromToken(Token);
    axios
      .post(Url + "WhoViewPost", {
        PostId: `${PostId}`,
        UserId: Data.Id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
