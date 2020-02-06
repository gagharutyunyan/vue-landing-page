import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.directive("scroll", {
  inserted: function(el, binding) {
    const handleScroll = function() {
      if (window.scrollY > binding.value) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount(".wrapper");