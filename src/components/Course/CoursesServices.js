import axios from "axios";
const Url = "http://josephnasef-001-site1.ctempurl.com/Api/Courses/";
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
  static AddCourse(PlayListUrl, Title, Token) {
    let IdUser;
    console.log(Token != "");
    if (Token != "") {
      IdUser = this.GetDataFromToken(Token);
    }

    axios
      .post(Url, {
        url: PlayListUrl,
        youtubeListId: PlayListUrl.slice(
          PlayListUrl.indexOf("=") + 1,
          PlayListUrl.length
        ),
        userId: IdUser.Id,
        title: Title,
      })
      .then((res) => console.log(res.data));
  }
  static GetList() {
    return axios
      .get(Url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.length == 0) {
          return false;
        } else {
          return response.data;
        }
      });
  }
  static GetVideos(id) {
    return axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=50&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
      )
      .then((Response) => {
        for (let i = 0; i < Response.data.items.length; i++) {
          if (
            Response.data.items[i].snippet.videoOwnerChannelTitle == undefined
          ) {
            Response.data.items.splice(i, 1);
            for (let i = 0; i < Response.data.items.length; i++) {
              if (
                Response.data.items[i].snippet.videoOwnerChannelTitle ==
                undefined
              ) {
                return Response.data.items.splice(i, 1);
              }
            }
          }
        }
        return Response.data.items;
      });
  }
  static DelCourse(id) {
    axios.delete(Url + id).then((response) => {
      console.log(response.data);
    });
  }
  static EditCourse(url, Title, id) {
    axios
      .put(Url, { Title: Title, Link: url, id: id })
      .then((res) => console.log(res.data));
  }
  static GetVideoswatched(UserId, PlayListId) {
    return axios
      .post(
        `http://josephnasef-001-site1.ctempurl.com/Api/Courses/watchedVideos?UserId=${UserId}&PlayListId=${PlayListId}`
      )
      .then((Res) => {
        return Res.data;
      })
      .catch((error) => {
        return { error: error.response.data };
      });
  }
  static GetVideosCourse(ID, Token) {
    let PlayListId = "";
    return axios.get(Url + ID).then((response) => {
      PlayListId = response.data.youtubeListId;
      let This = this;
      return axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlayListId}&maxResults=50&key=AIzaSyDQC22h6ObkClkL_7pzmPkOS2hi3-wkENo`
        )
        .then((Response) => {
          for (let i = 0; i < Response.data.items.length; i++) {
            if (
              Response.data.items[i].snippet.videoOwnerChannelTitle == undefined
            ) {
              Response.data.items.splice(i, 1);
              for (let i = 0; i < Response.data.items.length; i++) {
                if (
                  Response.data.items[i].snippet.videoOwnerChannelTitle ==
                  undefined
                ) {
                  Response.data.items.splice(i, 1);
                }
              }
            }
          }

          return This.GetVideoswatched(
            Token != "" ? This.GetDataFromToken(Token).Id : "No",
            PlayListId
          )
            .then((Val) => {
              let Watch = {
                Videos: [],
              };
              let VideosWatchLength = 0;
              for (let i = 0; i < Val.length; i++) {
                Watch.Videos.push(Val[i]);
              }
              for (let i = 0; i < Watch.Videos.length; i++) {
                if (
                  Watch.Videos[i].videoId ===
                  Response.data.items[i].snippet.resourceId.videoId
                ) {
                  if (Watch.Videos[i].questionId != 0) {
                    if (Watch.Videos[i].isAnsweared) {
                      VideosWatchLength++;
                    }
                  } else {
                    VideosWatchLength++;
                  }
                }
              }
              return {
                Vidoes: Response.data.items.slice(
                  VideosWatchLength + 1,
                  Response.data.items.length
                ),
                VidoesWatched: Response.data.items.slice(
                  0,
                  VideosWatchLength + 1
                ),
              };
            })
            .catch((error) => {
              console.log(error);
            });
        });
    });
  }
}
/*
            if (Watch.Videos[Watch.Videos.length - 1] != undefined) {
              if (Watch.Videos[Watch.Videos.length - 1].Answer != "") {
                console.log("Log 1");
                let Vidoes = Response.data.items.slice(
                  lenght + 1,
                  Response.data.items.length
                );
                console.log(Response.data.items.slice(0, lenght + 1));
                return {
                  Vidoes: Response.data.items.slice(lenght + 1, Vidoes.length),
                  VidoesWatched: Response.data.items.slice(0, lenght + 1),
                };
              } else {
                console.log("Log 2");
                let Vidoes = Response.data.items.slice(
                  lenght,
                  Response.data.items.length
                );
                return {
                  Vidoes: Response.data.items.slice(lenght, Vidoes.length),
                  VidoesWatched: Response.data.items.slice(0, lenght),
                };
              }
            } else {
              console.log("Log 3");
              let Vidoes = Response.data.items.slice(
                lenght + 1,
                Response.data.items.length
              );
              return {
                Vidoes: Response.data.items.slice(lenght + 1, Vidoes.length),
                VidoesWatched: Response.data.items.slice(0, lenght + 1),
              };
            }*/
