<template>
  <section class="surprises__section">
    <div class="surprises">
      <h3 class="surprises__title">
        Мы позаботились, чтобы вы получили
      </h3>
      <div class="surprises__cards">
        <div class="surprises__card" v-for="(card, i) in surprises" :key="i">
          <div class="card__image">
            <img :src="card.img" :alt="card.title" />
          </div>
          <div class="card__content">
            <b class="card__title">{{ card.title }} </b>
            <p class="card__description">{{ card.description }}</p>
            <div class="card__soc">
              <div class="soc__images" v-for="(url, i) in card.soc" :key="i">
                <img :src="url" :alt="card.title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "./Surprises.scss";
</style>

<script>
export default {
  name: "Surprises",
  data() {
    return {
      surprises: [
        {
          title: "Бесплатный безлимитный интернет в роуминге",
          description: "",
          img: "https://i.postimg.cc/6pNkh6J3/item-1.png",
          soc: [
            "https://i.postimg.cc/gc6WQ2BK/megafon.png",
            "https://i.postimg.cc/765kxHPw/tele2.png",
            "https://i.postimg.cc/85xVc2sW/mts.png",
            "https://i.postimg.cc/yx9CZLSG/beeline.png"
          ]
        },
        {
          title: "Бесплатная упаковка багажа",
          description:
            "Держатели карт Visa Signature могут упаковать багаж в крупных аэропортах России",
          img: "https://i.postimg.cc/g2qft9mK/item-2.png",
          soc: []
        },
        {
          title: "Бесплатный доступ в приложении App In The Air",
          description:
            "Бесплатная премиум подписка при покупке авиабилетов на travel.alfabank.ru",
          img: "https://i.postimg.cc/fbz16HbQ/item-3.png",
          soc: []
        },
        {
          title: "Такси бизнес-класса со скидкой 20%",
          description: "",
          img: "https://i.postimg.cc/VNK21jSr/item-4.png",
          soc: [
            "https://i.postimg.cc/Ls5mCB1y/whelly.png",
            "https://i.postimg.cc/QMzhR9gj/gett.png"
          ]
        },
        {
          title: "Скидка в ресторанах Novikov Group в аэропорту Шереметьево",
          description: "",
          img: "https://i.postimg.cc/Y9VVLMzt/item-5.png",
          soc: []
        },
        {
          title: "Доступ в бизнес-залы Priority Pass по всему миру",
          description: "",
          img: "https://i.postimg.cc/tT7wgYPr/item-6.png",
          soc: []
        }
      ]
    };
  }
};
</script>
