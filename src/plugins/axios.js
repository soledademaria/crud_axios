import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-vuejs-612b1-default-rtdb.firebaseio.com/';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})