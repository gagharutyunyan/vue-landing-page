<template>
  <section class="done">
    <div class="done">
      <img
        src="https://i.postimg.cc/Qx8QRshN/Vector-2.png"
        alt="done"
        width="36"
        height="32"
      />
      <h2>Ваша заявка принята уважаемый {{ name.toUpperCase() }}</h2>
      <p>
        В ближайшее время с вами свяжется наш менеджер по номеру
        {{ phoneNumber }}
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "./Done.scss";
</style>

<script>
export default {
  name: "Done",
  props: ["name", "email", "phoneNumber"]
};
</script>
