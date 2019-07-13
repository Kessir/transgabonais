import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'fr': {
        title: 'Horaires et Tarifs du Transgabonais',
        days: 'Jours',
    },
    'en': {
        title: 'Gabon Train Schedule and Prices',
        days: 'Days',
    }
};

export const i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages,
});