<template>
  <footer class="footer">
    <div class="footer__section">
      <div class="footer__logo">
        <img
          src="@/assets/img/logo.svg"
          alt="Vue Logo"
          height="36"
          width="296"
        />
        <p>АО «Кредит Европа Банк»</p>
      </div>
      <ul class="footer__about">
        <li v-for="(link, i) in aboutLinks" :key="i" class="footer__item">
          <a :href="link.url" class="footer__link">{{ link.title }}</a>
        </li>
      </ul>
      <ul class="footer__info">
        <li v-for="(link, i) in infoLinks" :key="i" class="footer__item">
          <a :href="link.url" class="footer__link">{{ link.title }}</a>
        </li>
      </ul>
      <div class="footer__contacts contacts ">
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
  </footer>
</template>

<style lang="scss">
@import "./Footer.scss";
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      aboutLinks: [
        { title: "О банке", url: "#" },
        { title: "Офисы и банкоматы", url: "#" },
        { title: "Новости", url: "#" },
        { title: "Вакансии", url: "" },
        { title: "Реализуемое имущество", url: "" }
      ],
      infoLinks: [
        { title: "Раскрытие информации", url: "#" },
        { title: "Ставки по вкладам", url: "#" },
        { title: "Условия и тарифы", url: "#" },
        { title: "Корпоративное управление", url: "" },
        { title: "Карта сайта", url: "" }
      ]
    };
  }
};
</script>
