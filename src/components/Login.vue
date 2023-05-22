<template>
    <div class="flex flex-col items-center bg-green-500 justify-center h-screen">



        <div class="flex  overflow-hidden rounded-md bg-red-500" style="height: 300px;">
            <img style="width:250px;height: inherit;" class="md:block lg:block sm:hidden xs:hidden"
                src="../assets/login.jpeg" alt="">

            <form @submit.prevent="login" style="height: inherit;min-height: inherit;">
                <div style="height: inherit;min-height: inherit;"
                    class="mb-3 flex  shadow-md  flex-col border border-green-400 bg-white text-green-700 p-8">
                    <h3 class="text-center text-3xl underline">Sign In</h3>
                    <h3 class="text-center text-red-500" v-if="errMessage !== ''">{{ errMessage }}</h3>
                    <input class="my-3 border-2 border-green-500 py-2 rounded px-4 focus:outline-none" type="email"
                        v-model="email" placeholder="Enter Email" />
                    <span v-if="email == ''">Enter Email</span>
                    <input class="my-3 border-2 border-green-500 py-2 rounded px-4 focus:outline-none" type="password"
                        v-model="password" placeholder="Enter Password" />
                    <span v-if="password == ''">Enter Password</span>
                    <div class="flex justify-between">
                        <button type="submit" class="text-green text-lg text-bold mt-3 hover:underline">Log
                            In</button>
                        <router-link class="text-green text-lg text-bold mt-3 hover:underline" to="/register">
                            Register
                        </router-link>
                    </div>
                </div>
            </form>
        </div>



    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useTokenStore } from '../store/TokenStore';
import { ApiStore } from '../store/ApiStore'
let useApiStore = ApiStore()

import router from '../routes/router';

let useToken = useTokenStore()
let email = ref('')
let errMessage = ref()
let password = ref('')

onMounted(() => {
    useToken.getUser();
    if (Object.keys(useToken.user).length > 0) {
        router.push('/')
    }
})

let login = async () => {
    let log = await axios.post(`http://${useApiStore.apiRoute}/api/login`, {
        email: email.value,
        password: password.value
    });

    if (log.data.token) {
        let token = log.data.token
        useToken.token = token
        log.data.user.image = `http://${useApiStore.apiRoute}/storage/${log.data.user.image}`
        useToken.user = log.data.user
        useToken.login(token);
        useToken.storeUser(log.data.user)
        router.push('/')
    } else {
        errMessage.value = log.data.message
    }
}
</script>

<style lang="scss" scoped></style>
