import Vue from 'vue'
import App from './app.vue'
import store from './store/store';

new Vue({
    store,
    el: '#app',
    render: h => h(App)
})
