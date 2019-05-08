
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('profile-corredor', require('./components/containers/corredor/ProfileCorredor.vue'));
Vue.component('post-corredor-card', require('./components/containers/corredor/PostCorredorCard.vue'));
Vue.component('new-post', require('./components/containers/corredor/NewPost.vue'));
Vue.component('messages-corredor',require('./components/containers/corredor/MessagesCorredor.vue'))
Vue.component('chat-corredor',require('./components/containers/corredor/ChatCorredor.vue'))
Vue.component('system-messages-corredor',require('./components/containers/corredor/SystemMessagesCorredor.vue'))
Vue.component('alert-configuration-corredor',require('./components/containers/corredor/AlertConfigurationCorredor.vue'))
Vue.component('subcription-conf-corredor',require('./components/containers/corredor/SubcriptionConfigurationCorredor.vue'))
Vue.component('sales-contact-corredor',require('./components/containers/corredor/SalesContactCorredor.vue'))
Vue.component('contacts-corredor',require('./components/containers/corredor/ContactsCorredor.vue'))
Vue.component('tasks-corredor',require('./components/containers/corredor/TasksCorredor.vue'))
const app = new Vue({
    el: '#app',
    data:{
        menu:0
    }
});
