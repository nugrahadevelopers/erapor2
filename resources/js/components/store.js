import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://127.0.0.1/erapor/public/api'

export const store = new Vuex.store({
    actions: {
        retrieveToken(context, credential) {
            axios.post('/login', {
                email: credential.email,
                password: credential.password,
            })
                .then(response => {
                    console.log(response)
                })
        }
    }
})