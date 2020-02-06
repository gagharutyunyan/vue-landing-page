<template>
  <section class="opportunities__section">
    <div class="opportunities">
      <h3 class="opportunities__title">
        Путешествие мечты начинается с CARD PLUS<br />
        <span
          >Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет
          привилегий, необходимый для любого путешествия</span
        >
      </h3>
      <ul class="opportunities__items">
        <li
          class="opportunities__item"
          v-for="(item, i) in opportunities"
          :key="i"
        >
          <span class="icon" :class="item.icon"></span>
          <b class="item__title">{{ item.title }}</b>
          <p class="item__description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@import "./Opportunities.scss";
</style>

<script>
export default {
  name: "Opportunities",
  data() {
    return {
      opportunities: [
        {
          title: "Билеты любых авиакомпаний",
          description:
            " Предложения от 300+ авиакомпаний, 185+ lowcost перевозчиков, чартеры от 60 крупных российскихтуроператоров",
          icon: "vector"
        },
        {
          title: "Мили больше не сгорают",
          description:
            "Мили, накопленные при оплате картой AlfaTravel, не сгорают и остаются на вашем счете, пока вы не решите их потратить",
          icon: "vector-1"
        },
        {
          title: "Продвинутая страховка – бесплатно",
          description:
            "Расширенная страховка для всей семьи с учетом экстремальных видов спорта и алкоголя",
          icon: "vector-2"
        },
        {
          title: "Доступ к счетам в разных валютах",
          description:
            "Текущие счета в рублях, долларах США, евро, английских фунтах стерлингов и швейцарских франках открываются в любой момент",
          icon: "vector-3"
        }
      ]
    };
  }
};
</script>
