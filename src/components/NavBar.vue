<template>
  <header>
    <div class="Left" v-if="$store.state.Islogin">
      <button class="img" @click="Toggle">
        <img src="@/assets/images/User/1.jpg" />
        <ul :class="ClassUl">
          <li><ButtonLogOut /></li>
        </ul>
      </button>
      <button class="bell meDia Btn">
        <span class="material-icons-outlined"> notifications </span>
      </button>
      <button class="th meDia Btn">
        <span class="material-icons-outlined"> apps </span>
      </button>
      <button class="video meDia Btn">
        <span class="material-icons-outlined"> video_call </span>
      </button>
    </div>
    <div class="Left" v-else>
      <router-link
        to="/Login"
        class="btn btn-outline-primary d-flex align-items-center"
      >
        <span class="fs-5 mx-2">Login</span>
        <span class="material-icons-outlined"> account_circle </span>
      </router-link>
      <button class="meDia Btn">
        <span class="material-icons-outlined">more_vert</span>
      </button>
      <button class="th meDia Btn">
        <span class="material-icons-outlined"> apps </span>
      </button>
    </div>
    <div class="Center">
      <select
        v-model="Lang"
        style="width: 120px"
        class="form-select me-3 d-none"
      >
        <option value="En">English</option>
        <option value="Ar">Arabic</option>
      </select>
      <button class="microphone">
        <span class="material-icons-outlined"> mic </span>
      </button>
      <button class="Search" @click="search">
        <span class="material-icons-outlined"> search </span>
      </button>
      <div :class="'BarSearch ' + Class">
        <input type="text" :placeholder="$store.state.Search" />
        <button>
          <span class="material-icons-outlined"> search </span>
        </button>
      </div>
    </div>
    <div class="Right">
      <router-link to="/">
        <img src="@/assets/images/Logo (2).png" alt="" />
      </router-link>
      <button><span class="material-icons-outlined"> menu </span></button>
    </div>
  </header>
</template>
<script>
import En from "../Data/resourceEn.json";
import Ar from "../Data/resourceAr.json";
import ButtonLogOut from "@/components/identity/ButtonLogOut";
export default {
  name: "NavBar",
  data() {
    return {
      Lang: "Ar",
      Class: "",
      ClassUl: "",
    };
  },
  components: {
    ButtonLogOut,
  },
  methods: {
    search() {
      if (this.Class == "") {
        this.Class = "Show";
      } else {
        this.Class = "";
      }
    },
    Toggle() {
      if (this.ClassUl == "") {
        this.ClassUl = "active";
      } else {
        this.ClassUl = "";
      }
    },
  },
  watch: {
    Lang(v) {
      console.log(v);
      if (v == "En") {
        this.$store.state.resource = En;
      } else if (v == "Ar") {
        this.$store.state.resource = Ar;
      }
    },
  },
};
</script>
<style scoped>
.ConTainer header {
  width: 100%;
  height: 70px;
  background: var(--BackGroundColor);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10000;
  border-bottom: 2px solid var(--BackGroundColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.ConTainer header .Left {
  width: 26%;
  height: 100%;
  background: var(--BackGroundColor);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
}

.ConTainer header .Left > button.img {
  width: 40px;
  height: 40px;
  position: relative;
}

.ConTainer header .Left > button.img > ul {
  width: 290px;
  list-style: none;
  background: #eee;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -1000%;
  top: 60px;
  z-index: 222;
  transition: 0.4s;
}

.ConTainer header .Left > button.img > ul.active {
  left: 0;
}

.ConTainer header .Left > button.img > div > div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  direction: rtl;
  margin: 10px 0;
}

.ConTainer header .Left > button.img > div > div img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
}

.ConTainer header .Left > button.img > div > div h6 {
  font-size: 20px;
}

.ConTainer header .Left > button.img > div span {
  background-color: var(--ColorMain);
  color: var(--BackGroundColor);
  padding: 8px;
  width: 95%;
  margin: 0px auto;
  border-radius: 5px;
}

.ConTainer header .Left > button.img > div hr {
  margin: 8px 0;
}

.ConTainer header .Left > button.img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.ConTainer header .Left .search {
  display: none;
}

.ConTainer header .Left > button,
.ConTainer header > button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  border: 0;
  background: transparent;
  color: var(--Search2);
  margin-right: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ConTainer header .Center {
  width: 50%;
  height: 100%;
  background-color: var(--BackGroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ConTainer header .Center .Search {
  display: none;
}
.ConTainer header .Center .BarSearch {
  width: 80%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
}
.ConTainer header .Center .BarSearch.Show {
  display: flex !important;
  position: absolute;
  top: 70px;
  width: 100%;
  left: 0;
  background: transparent;
}
.ConTainer header .Center .search {
  transform: scale(0);
}

.ConTainer header .Center .BarSearch input {
  width: calc(100% - 80px);
  height: 95%;
  padding: 0 10px;
  transition: 0.3s;
  border: 1px solid #ccc;
  background-color: var(--BackGroundColor2);
  color: var(--Search2);
  opacity: 0.9;
  outline: 0;
  font-size: 17px;
  font-weight: 900;
  font-family: var(--Font);
  font-weight: 500;
}

.ConTainer header .Center .BarSearch button {
  width: 80px;
  height: 95%;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  background-color: var(--BackGroundColor2);
  color: var(--Search2);
  border: 1px solid #ccc;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
}

.ConTainer header .Center .BarSearch input:focus + button {
  opacity: 1;
}

.ConTainer header .Center > button {
  width: 50px;
  height: 45px;
  border-radius: 50%;
  font-size: 20px;
  border: 0;
  background: var(--Search1);
  color: var(--Search2);
  margin-right: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* .ConTainer header .Right */

.ConTainer header .Right {
  width: 20%;
  height: 100%;
  background-color: var(--BackGroundColor);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10px;
}

.ConTainer header .Right a {
  width: 69px;
  height: 55px;
  display: inline-block;
  position: relative;
  right: 5px;
  top: 1px;
}

.ConTainer header .Right a img {
  width: 100%;
  height: 100%;
}

.ConTainer header .Right button {
  width: 80px;
  height: 100%;
  background: var(--BackGroundColor);
  color: var(--Color);
  font-size: 20px;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Right button {
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 505px) {
  .meDia {
    display: none !important;
  }
  .ConTainer header .Left {
    /* width: 20% !important; */
    padding-left: 10px;
    margin-right: 5px;
  }
  .ConTainer header .Center {
    width: 30% !important;
  }

  .ConTainer header .Right {
    width: 35% !important;
  }
}
</style>
