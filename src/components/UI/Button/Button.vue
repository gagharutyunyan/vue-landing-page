<template>
  <button
    href="#"
    class="btn"
    :class="className"
    :disabled="disable"
    :type="submit"
  >
    {{ msg }}
  </button>
</template>

<style lang="scss">
@import "./button.scss";
</style>

<script>
export default {
  name: "Button",
  props: {
    disable: Boolean,
    msg: String,
    className: String,
    submit: String
  }
};
</script>
