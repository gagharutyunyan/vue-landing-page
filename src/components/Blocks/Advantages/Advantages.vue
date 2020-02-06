<template>
  <div class="advantages">
    <h1 class="advantages__title">
      Твоя премиум карта
      <span>Лучшая карта для любителей путешествий</span>
    </h1>
    <ul class="advantages__items">
      <li class="advantages__item" v-for="(item, i) in advantages" :key="i">
        <h6 class="item__title">{{ item.title }}</h6>
        <p class="item__description">{{ item.description }}</p>
      </li>
    </ul>
    <Button class="btn-advantages" msg="Заказать сейчас" />
  </div>
</template>

<style lang="scss">
@import "./advantages.scss";
</style>

<script>
import Button from "@/components/UI/Button/Button.vue";
export default {
  data: () => ({
    advantages: [
      { title: "11%", description: "Вернем за покупки" },
      { title: "0%", description: "Бесплатное снятие наличных по всему миру" },
      { title: "7%", description: "До 7% на остаток по счету" },
      { title: "0р", description: "Бесплатное годовое обслуживание" }
    ]
  }),
  components: {
    Button
  }
};
</script>
