<template>
    <div class="relative ">
        <div id="side-menu" :class="{
            'left-250': !isMenuOpen,
            'left-0': isMenuOpen
        }"
            class="fixed  top-0 z-50 h-screen w-[240px] bg-gray-700 p-5 flex sm:hidden md:hidden lg:hidden flex-col space-y-5 text-white duration-300">
            <a href="javascript:void(0)" class="text-right text-4xl" @click="closeMenu">&times;</a>
            <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
            <router-link to="/orderList" class="text-white hover:text-gray-300">Orders</router-link>
            <router-link to="/contact" class="text-white hover:text-gray-300">Contact</router-link>
            <router-link v-if="!Object.keys(useToken.user).length" to="/login"
                class="text-white hover:text-gray-300">Login</router-link>
        </div>

        <main class="p-4  border-b-2 border-green-600 z-0 flex sm:hidden md:hidden lg:hidden justify-between items-center">
            <!-- This is used to open the menu -->


            <div class="">
                <a class="cursor-pointer  text-4xl" @click="openMenu">&#9776; </a>
            </div>
            <div class="flex  items-center justify-around">

                <router-link to="/cart" class="relative  text-gray-600 hover:text-gray-800 transition duration-300">
                    <span class="fa-stack fa-lg m-3 ">
                        <i class="fas fa-shopping-cart fa-stack-1x"></i>

                        <span
                            class="fa-stack fa-xs absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">{{
                                useProductStore.cart.length }}</span>
                    </span>
                </router-link>
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

            </div>


        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import App from '../../composables/app';
let { useToken,
    useProductStore,
    useApiStore,
    showMenu,
    isLoggedin,
    logout,
    login,
    imageCheck } = App();

const isMenuOpen = ref(false);

const openMenu = () => {
    isMenuOpen.value = true;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>


<style scoped>
#side-menu {
    left: -250px;
}

#side-menu.left-0 {
    left: 0;
    z-index: 1;
    /* Ensure the side menu is above the main content */
}

main {
    z-index: 0;
    /* Set a lower z-index for the main content */
}
</style>
