<template>
  <div class="logo" ref="nav">
    <button class="toggle-menu" @click="$emit('burger')">
      <div v-if="!isOpen" class="burger-open">
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H25V3H0V0Z" fill="#C0965C" />
          <path d="M0 8H20V11H0V8Z" fill="#C0965C" />
          <path d="M25 16H0V19H25V16Z" fill="#C0965C" />
        </svg>
      </div>
      <div v-else class="burger-close">
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
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="Vue Logo" height="36" width="296" />
    </div>
  </div>
</template>

<style lang="scss">
@import "./logo.scss";
</style>

<script>
import NavBar from "@/components/UI/NavBar/NavBar.vue";
export default {
  props: ["isOpen"],
  components: {
    NavBar
  }
};
</script>
