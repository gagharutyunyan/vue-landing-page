<template>
  <section class="section__assistant">
    <div class="assistant">
      <h1 class="assistant__title">
        Персональный помощник<br />
        <span>Бесплатно для владельцев <b>CARD PLUS</b></span>
      </h1>
      <div class="assistant__content">
        <img
          class="assistant__content__img"
          src="https://i.postimg.cc/CKrPby1N/img-min.png"
          alt="Персональный помощник"
        />
        <div class="assistant__content__function">
          <ul class="assistant__function__list">
            <li class="list__item" v-for="(item, i) in function__list" :key="i">
              {{ item.description }}
              <span class="icon"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "./Assistant.scss";
</style>

<script>
export default {
  name: "Assistant",
  data() {
    return {
      function__list: [
        {
          description: "Организует встречи, найдет гидов и переводчиков",
          icon: "vector-1"
        },
        {
          description:
            "Спланирует поездку по самым интересным местам вашего отдыха",
          icon: "vector-1"
        },
        {
          description:
            "Достанет билеты на мероприятия, даже если их уже нет в продаже",
          icon: "vector-1"
        },
        {
          description: "Закажет столик в ресторане, клубе или кафе",
          icon: "vector-1"
        }
      ]
    };
  }
};
</script>
