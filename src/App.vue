<script setup>
import { useTokenStore } from './store/TokenStore';
import { productStore } from './store/ProductStore';

import router from './routes/router';
import { ref, onMounted, } from 'vue';

let useToken = useTokenStore()
let useProductStore = productStore();
const showMenu = ref(false);
const isLoggedin = ref(false)
// let cartCount=ref(useToken.cart.length)
let logout = () => {
  router.push('/login')
  useToken.logout();
  useToken.removeUser();
  useProductStore.clearCart()

}
let login = () => {
  router.push('/login')

}
onMounted(() => {
  useToken.getUser();
  console.log(useToken.user)
})

</script>

<template>
  <div class="flex flex-col min-h-screen">

    <nav
      class="flex items-center w-screen   justify-between p-4 fixed top-0 left-0 z-10 bg-gray-700 text-white border-b-4 flex border-green-500 h-14">
      <!-- Left side logo -->
      <div class="flex items-center">
        <a href="#" class="text-white font-semibold text-lg">POS System</a>
      </div>

      <!-- Right side links -->
      <ul class="flex items-center space-x-4">
        <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
        <router-link to="/orderList" class="text-white hover:text-gray-300">Orders</router-link>

        <div class="relative" v-if="Object.keys(useToken.user).length">
          <button @click="showMenu = !showMenu">
            <img :src="useToken.user.image" :alt="useToken.user.name" class="h-10 w-10 rounded-full">
          </button>
          <div v-if="showMenu" @click="showMenu = false" class="fixed inset-0 h-full w-full z-10"></div>
          <div v-if="showMenu" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">

            <router-link to="/profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</router-link>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>

            <button class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              @click="useToken.token !== '' ? logout() : login()">{{
                useToken.token !== '' ? 'logout' : 'login' }}</button>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <router-link to="/cart" class="relative text-gray-600 hover:text-gray-800 transition duration-300">
            <span class="fa-stack fa-lg">
              <i class="fas fa-shopping-cart fa-stack-1x"></i>
              <span
                class="fa-stack fa-xs absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">{{
                  useProductStore.cart.length }}</span>
            </span>
          </router-link>


        </div>
      </ul>
    </nav>
    <div class="flex-grow">

      <router-view></router-view>
    </div>

    <!-- Footer section with social media icons and newsletter sign-up -->


    <footer class="bg-gray-800 text-center text-white">


      <!-- Copyright section -->
      <div class="p-4 text-center" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2023 Copyright:
        <a class="text-white" href="https://tailwind-elements.com/">Tailwind Elements</a>
      </div>
    </footer>
  </div>
</template>

<style >
html,
body {
  height: 100%;
}

.flex-grow {
  flex-grow: 1;
}
</style>
