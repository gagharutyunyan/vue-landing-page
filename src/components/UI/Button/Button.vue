<template>
  <button href="#" class="btn" :class="className">{{ msg }}</button>
</template>

<style lang="scss">
@import "./button.scss";
</style>

<script>
export default {
  props: {
    msg: String,
    className: String
  }
};
</script>
