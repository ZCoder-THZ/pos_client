<script setup>
import { ref } from 'vue';
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import App from './composables/app';
let { useToken,
    useProductStore,
    useApiStore,
    showMenu,
    isLoggedin,
    logout,
    login,
    imageCheck } = App();
</script>

<template>
    <div class="flex flex-col min-h-screen ">

        <nav
            class="hidden sm:hidden md:flex lg:flex items-center w-screen   justify-between p-4 fixed top-0 left-0 z-10 bg-gray-700 text-white border-b-4  border-green-500 h-14">
            <!-- Left side logo -->
            <div class="flex items-center">
                <a href="#" class="text-white font-semibold text-lg">POS System</a>
            </div>

            <!-- Right side links -->
            <ul class="flex items-center space-x-4">
                <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
                <router-link to="/orderList" class="text-white hover:text-gray-300">Orders</router-link>
                <router-link to="/contact" class="text-white hover:text-gray-300">Contact</router-link>
                <router-link v-if="!Object.keys(useToken.user).length" to="/login"
                    class="text-white hover:text-gray-300">Login</router-link>
                <div class="flex items-center space-x-4">
                    <router-link to="/cart" class="relative  text-gray-600 hover:text-gray-800 transition duration-300">
                        <span class="fa-stack fa-lg m-3 ">
                            <i class="fas fa-shopping-cart fa-stack-1x"></i>

                            <span
                                class="fa-stack fa-xs absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">{{
                                    useProductStore.cart.length }}</span>
                        </span>
                    </router-link>


                </div>
                <div class="relative" v-if="Object.keys(useToken.user).length">
                    <button @click="showMenu = !showMenu">
                        <div class="">

                            <img :src="imageCheck" class="h-10 w-10 rounded-full">

                        </div>
                    </button>
                    <div v-if="showMenu" @click="showMenu = false" class="fixed inset-0 h-full w-full z-10"></div>
                    <div v-if="showMenu" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">

                        <router-link to="/profile"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</router-link>
                        <router-link to="/profile/setting"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</router-link>

                        <button class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            @click="useToken.token !== '' ? logout() : login()">{{
                                useToken.token !== '' ? 'logout' : 'login' }}</button>
                    </div>
                </div>


            </ul>
        </nav>


        <Navbar />
        <div class=" z-0">

            <router-view></router-view>
        </div>


        <!-- Footer section with social media icons and newsletter sign-up -->
        <Footer />

        <!-- Footer section with social media icons and newsletter sign-up -->

    </div>
</template>

<style ></style>
