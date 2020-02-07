<template>
  <section class="checkout__section">
    <div class="checkout">
      <div class="about__advantages">
        <h3 class="checkout__title">
          Оформите свою новую карту для путешествий
        </h3>
        <ul class="checkout__list">
          <li class="checkout__item" v-for="(item, i) in checkout" :key="i">
            <b class="checkout__item__title"
              ><span>{{ item.span }}</span
              >{{ item.title }}</b
            >
            <p class="checkout__item__description">{{ item.description }}</p>
          </li>
        </ul>
      </div>
      <div class="order">
        <img
          :src="isActive ? creditCardUrl : debitCardUrl"
          alt
          class="order__card__type"
        />
        <div class="order__type">
          <div class="order__type__buttons">
            <button
              class="order__type__changer"
              :class="{ changer__active: isActive }"
              @click="isActive = !isActive ? true : true"
            >
              Кредитная карта
            </button>
            <button
              class="order__type__changer"
              :class="{ changer__active: !isActive }"
              @click="isActive = !isActive ? isActive : !isActive"
            >
              Дебетовая карта
            </button>
          </div>
          <div class="order__checkout">
            <router-link to="/popup-form">
              <Button class="btn-order" msg="Отправить заявку" />
            </router-link>
            <table
              v-if="
                (tableItems = isActive
                  ? creditCardPrivilege
                  : debitCardPrivilege)
              "
              class="order__table"
            >
              <tr v-for="(item, i) in tableItems" :key="i">
                <td>{{ item.title }}</td>
                >
                <th>
                  {{ item.description }}
                </th>
              </tr>
            </table>

            <a href="#" class="all__details-link">Все подробности</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "./Checkout.scss";
</style>

<script>
import Button from "@/components/UI/Button/Button.vue";

export default {
  name: "Checkout",
  data() {
    return {
      isActive: true,
      creditCardUrl: "https://i.postimg.cc/rw0T61Hy/Credit-Card-min.png",
      debitCardUrl: "https://i.postimg.cc/QNyY22Z5/nexus-social-debit-card.png",
      tableItems: [],
      creditCardPrivilege: [
        {
          title: "Стоимость карты в год (руб.)",
          description: "6 490 (без пакета услуг), 4 990 (с пакетом услуг)"
        },
        {
          title: "Приветственные мили (шт.)",
          description: "1 000"
        },
        {
          title: "Мили за покупки",
          description: "5%"
        }
      ],
      debitCardPrivilege: [
        {
          title: "Стоимость карты в год (руб.)",
          description: "Бесплатно"
        },
        {
          title: "Приветственные мили (шт.)",
          description: "500"
        },
        {
          title: "Мили за покупки",
          description: "2%"
        }
      ],
      checkout: [
        {
          title: "11%",
          span: "до ",
          description: "Милями за услуги, оплаченные на travel.ru"
        },
        {
          title: "11%",
          span: "до ",
          description: "Милями за любые покупки по карте"
        },
        {
          title: "1 = 1",
          span: "",
          description:
            "Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р"
        }
      ]
    };
  },
  components: {
    Button
  }
};
</script>
