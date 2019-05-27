import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueBus from 'vue-bus';
import Router from "vue-router";
import axios from "axios";

import routerConfig from "./router/";
import storeConfig from "./store/";

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueBus);
Vue.use(iView);

import LoadingGifImage from "./components/LoadingGifImage/index.vue"

const store =  new Vuex.Store(storeConfig);
const router =  new Router(routerConfig);

  
router.afterEach((to,from)=>{
    store.commit('routerStore/changeColumn',{
        column:to.meta.column,
        scolumn:to.meta.scolumn,
        scolumnc:to.meta.scolumnc
    })
})

axios.defaults.baseURL = "http://192.168.1.88"

Vue.config.productionTip = false;

Vue.component('LoadingGifImage',LoadingGifImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
