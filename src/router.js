import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { i18n } from './plugins/i18n';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      beforeEnter(to, from, next) {
        const lang = to.params.lang;

        if (!['fr', 'en'].includes(lang)) return next('');

        if (i18n.locale !== lang) {
          i18n.locale = lang;
          console.log('languages', lang);
        }
        return next();
      },
      children: [{
        path: '',
        component: Home,
      }]
    }
  ]
})
