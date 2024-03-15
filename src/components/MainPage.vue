<template>
  <div class="home-wrapper">
    <div class="menu-options">
      <div
        :class="[
          mobile_active_option == 'quiz' ? 'selected' : '',
          'menu-option',
        ]"
        id="quiz"
        onclick="void(0)"
        @click="clicked"
      >
        <span>Okay let's go</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      mobile_active_option: "",
    };
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    clicked(event) {
      /* console.dir(event.target)
            console.log(event.target.ariaDescription) */

      this.mobile_active_option = event.target.id;
      this.$router.push({ path: "/" + event.target.id });
    },
  },
};
</script>

<style>
.home-wrapper {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.menu-options {
  height: 100%;
  width: 100%;
  padding: 75vh 25vw;
  border: 1px solid black;

  display: grid;
  grid-auto-flow: column;
  gap: 2em;
}

@media (max-width: 50em) {
  .menu-options {
    padding: 75vh 5vw;
    grid-auto-flow: row;
  }
}

.menu-option {
  color: rgb(0, 0, 0);
  background: var(--contrast-background-color);
  border-radius: 25px;
  box-shadow: 5px 5px 15px grey;
  margin: 0px 20px;
  transition: 0.4s;
  cursor: pointer;
  font-size: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.95);
}

.menu-option span {
  padding: 10px;
  border-radius: 15px;
  text-transform: uppercase;
}

/*
.menu-option:hover span,
.menu-option:focus span,
.menu-option.selected span {
    background: white;
}
*/

.menu-option:hover,
.menu-option:focus,
.menu-option.selected {
  color: var(--primary-font-color);
  transform: scale(1);
  box-shadow: 5px 5px 25px black;
  background: white;
  opacity: 1;
}

#quiz {
  /* grid-area: option1; */
  --background-img-url: black;
  transition: 2s;
}

#learning {
  /* grid-area: option2; */
  --background-img-url: url("../assets/study.jpg");
  transition: 2s;
}

#smthelse {
  /* grid-area: option3; */
  --background-img-url: url("../assets/suffer.jpg");
  transition: 2s;
}

.menu-option:before {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  /* background: var(--background-img-url); */
  /* background-position:center; */
  /* background-size:cover; */
  transition: 1s;
  border-radius: 25px;
}

.menu-option:hover:before,
.menu-option:focus:before,
.menu-option.selected:before {
  opacity: 0.1;
}
</style>
