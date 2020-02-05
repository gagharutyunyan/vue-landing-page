<template>
  <nav class="header__nav nav" ref="nav">
    <button class="toggle-menu" @click="$emit('burger')">
      <div v-if="isOpen" class="burger-close">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.72192"
            width="25"
            height="3"
            transform="rotate(45 2.72192 0)"
            fill="#C0965C"
          />
          <rect
            x="20.3997"
            y="2.12131"
            width="25"
            height="3"
            transform="rotate(135 20.3997 2.12131)"
            fill="#C0965C"
          />
        </svg>
      </div>
    </button>
    <div class="nav__container">
      <ul>
        <router-link
          v-for="(link, i) in links"
          :key="i"
          tag="li"
          active-class="active"
          :to="link.url"
          exact
        >
          <a href="#">{{ link.title }}</a>
        </router-link>
      </ul>
      <div class="contacts">
        <p>
          <span>По России</span>
          8 800 950 6570
        </p>
        <p>
          <span>По Миру</span>
          8 800 950 6570
        </p>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "./NavBar.scss";
</style>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      links: [
        { title: "Какие преимущества", url: "#advantages" },
        { title: "Что вы получаете", url: "#what-bring" },
        { title: "Еще сюрпризы", url: "#surprises" },
        { title: "Оформить карту", url: "#checkout" }
      ]
    };
  }
};
</script>
