<template>
    <div class="w-screen bg-[#eee] flex items-center mt-6 h-[130vh] justify-center">
        <div class="w-full max-w-lg p-6 bg-gray-600 ">

            <img class="mx-auto rounded-full align-middle border w-24 mb-5 underline " alt="" :src="getUserImage">


            <!-- :src="https://cdn-icons-png.flaticon.com/512/727/727393.png?w=740&t=st=1682254805~exp=1682255405~hmac=0a342c036e9af4976c9cfe976bbdf77977b1bd4372e62923e0c64649478ee5e8" -->
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 mb-6 md:mb-3">

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                        IMage</label>
                    <input
                        class="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        @change="updateImage" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                        800x400px).</p>

                </div>
                <div class="w-full mb-4 md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                        Name
                    </label>
                    <input
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="grid-first-name" type="text" placeholder="Jane" v-model="userName">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>
                <div class="w-full mb-4 md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                        Email
                    </label>
                    <input
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="grid-last-name" type="email" v-model="email" placeholder="">
                </div>
                <div class="w-full mb-4  px-3">
                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                        Phone
                    </label>
                    <input
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="grid-last-name" type="number" v-model="phone" placeholder="">
                </div>
                <div class="w-full mb-4 px-3">
                    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                        Address
                    </label>


                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="address"></textarea>

                </div>
            </div>
            <a class="bg-blue-600 text-white p-3 text-center float-end rounded " @click="updateProfile">Get Data</a>
        </div>

    </div>
</template>

<script setup>

import profileSetting from '../composables/setting';

let { userName, email, phone, getUserImage, address, updateProfile, userImage, updateImage } = profileSetting();
</script>

<style lang="scss" scoped></style>
