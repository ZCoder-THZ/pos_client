<template >
    <!-- Carousel Slider -->
    <div class="  xs:hidden sm:block">

        <div class="flex px-6 mt-14 items-center justify-center w-screen h-[90vh] bg-gray-100"
            :style="{ backgroundImage: 'url(' + image3 + ')', backgroundPosition: 'center', backgroundSize: ' cover' }">
            <div class="max-w-3xl text-white bg-gray-800 bg-opacity-70 p-8 rounded-lg">
                <h1 class="text-4xl font-bold mb-1">50% Discount</h1>
                <div class="bg-green-400 h-1 w-60 mb-3"></div>
                <p class="text-white-800">
                    Lorem ipsum dolo sit amet, consectetur adipisicing elit. Hic numquam dignissimos adipisci sed laborum
                    officia
                    aliquid labore, assumenda molestias. Numquam quas aperiam deleniti nisi non nam unde itaque obcaecati,
                    eos
                    tenetur rerum ullam perspiciatis neque omnis id aspernatur esse beatae.
                </p>
                <div class="flex justify-end mt-5">
                    <a class="text-center  border w-28 py-1 border-green-400 hover:bg-gray-800 hover:text-green-400 hover:bg-opacity-5"
                        href="#showcase">Shop</a>
                </div>
            </div>
        </div>

    </div>
    <div id="showcase" class="flex   w-100 flex-row mt-4 justify-center items-center mx-2 hidden md:flex lg:flex">
        <div class="ml-4 flex flex-col justify-center w-[50%] max-w-[50%]  top-0">

            <div class="flex justify-center items-center flex-col">
                <h1 class="text-center text-xl mt-3">Filter by Categories</h1>
                <div class="bg-green-400 h-[2px] w-60 mb-3"></div>
            </div>

            <div class="space-x-4">
                <div v-for="(category, index) in useProductStore.categories" :key="index"
                    class="rounded-md inline-block px-3 py-2 my-2 border-2 border-green-500">
                    <div class="flex justify-between">
                        <span class="ml-2 me-2">{{ category.category_name }}</span>
                        <input type="checkbox" @change="updateSelectedCategories(category)"
                            class="w-6 h-6 accent-green-700 focus:accent-green-700 focus:border-green-400">
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex justify-end me-11">



    </div>
    <!--  -->
    <div class=" mt-2  bg-[#eee] p-4 xs:overflow-hidden xs:px-1 sm:mx-0 lg:mx-4 sm:mx-2 md:mx-4 ">
        <!-- <hr> -->
        <div :class="['flex xs:flex-col md:flex-row lg:flex-row w-screen md:mt-[2rem] lg:mt-[2rem] ']">

            <!-- hide in md and lg -->

            <div class="flex justify-end">
                <button class="sm:hidden bg-green-600 text-white rounded  mt-6 px-4 py-2 mr-3 mb-3"
                    @click="asideHidden = !asideHidden ? true : false">
                    Filter</button>
            </div>
            <!-- !asideHidden=asideHidden  -->
            <aside v-if="asideHidden"
                class="bg-gray-800 sm:hidden lg-block lg:w-1/4 mb-4 lg:w-[1/4] md:w-1/4 xs:w-[100%] py-8 text-white px-4 me-4 border-r-2 border-t-2 border-green-400">
                <!-- Filter by Category -->
                <div class="flex items-center">
                    <hr class="flex-grow border-t border-gray-500">
                    <span class="px-4 text-gray-200">Filter By Categories </span>

                    <hr class="flex-grow border-t border-gray-500">
                </div>

                <ul>
                    <li class="mb-4" v-for="(  category, index  ) in   useProductStore.categories  " :key="index">
                        <label class="flex justify-between cursor-pointer">
                            <span class="ml-2">{{ category.category_name }}</span>
                            <input type="checkbox" @change="updateSelectedCategories(category)"
                                class="w-6 h-6 accent-green-700 focus:accent-green-700">
                        </label>
                    </li>
                </ul>
            </aside>
            <div class="flex">


            </div>
            <div class="flex flex-col min-w-[76%] mx-auto">

                <div>
                    <div class="flex sm:justify-end lg:justify-end md:justify-end justify-center">

                        <div class="relative w-90 ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input @input="getProducts" placeholder="enter earch" type="search" id="default-search"
                                v-model="searchKey"
                                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            <button @click="getProducts()"
                                class="text-white absolute right-2.5 bottom-2.5 bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                    <div class="mt-4 flex sm:justify-end lg:justify-end md:justify-end justify-center">

                        <select @change="handleChange($event)" id="underline_select"
                            class=" w-40  text-black px-4 py-2 rounded">
                            <option selected>Filter by Price

                            </option>
                            <option value="1">ascending </option>
                            <option value="2">descending</option>
                        </select>
                    </div>
                </div>


                <div
                    :class="['grid grid-cols-3 mx-auto', asideHidden ? 'grid-col-4' : '', 'gap-4 w-100 mt-5 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-1  sm:grid-cols-2']">

                    <div class=" h-[60%] w-fit border " v-for="  product   in   filteredProduct  " :key='product.id'>
                        <!-- Card -->
                        <div class="w-72 h-fit group border">
                            <div class="relative overflow-hidden">
                                <img class="h-[15rem] image-center w-full object-cover" :src="product.product_image" alt="">
                                <div
                                    class="absolute h-full w-full bg-black/20 flex-col flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button class="bg-black text-white py-2 px-5 mb-3"
                                        @click="addToCart($event, product.product_id, product.product_price, product.product_name, product.product_image)">Add
                                        to cart</button>
                                    <button class="bg-black text-white py-2 px-5"
                                        @click="goProductDetail(product.product_id)">Detail</button>
                                </div>
                            </div>
                            <h2 class="mt-3 text-xl capitalize">{{ product.product_name }}</h2>
                            <p class="text-red-700 text-lg">${{ product.product_price }}</p>
                            <!-- <p class="text-xl mt-2 ml-1 inline-block">$35</p> -->
                        </div>

                    </div>


                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import image1 from '../assets/carousel-items/image1.jpg';
import image2 from '../assets/carousel-items/image2.jpg';
import image3 from '../assets/hero.jpg';


import { useRouter } from 'vue-router';
import { useTokenStore } from '../store/TokenStore';
import { productStore } from '../store/ProductStore';
import { ApiStore } from '../store/ApiStore'
import axios from 'axios'
import Swal from 'sweetalert2';

import Detail from './Detail.vue';
let useApiStore = ApiStore();
let asideHidden = ref(false)
let useToken = useTokenStore()
let router = useRouter()
let useProductStore = productStore();
const selectedCategories = ref([]);

let searchKey = ref();
let products = ref();

const handleChange = (event) => {
    if (event.target.value == 1) {

        products.value.sort((a, b) => a.product_price - b.product_price);
    } else {
        products.value.sort((a, b) => b.product_price - a.product_price);

    }
}
const successAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Item added',
        text: 'Item added successfully',

    })

}
let toggleAside = () => {
    asideHidden.value === false ? asideHidden.value = true : asideHidden.value = false
    console.log(asideHidden.value)
}
let goProductDetail = (id) => {
    router.push({ name: 'Detail', params: { id } })
}

const filteredProduct = computed(() => {
    return selectedCategories.value.length === 0 ? products.value : products.value.filter(product => selectedCategories.value.includes(product.category_id * 1))

})

const updateSelectedCategories = (category) => {
    console.log(selectedCategories.value)
    if (selectedCategories.value.includes(parseInt(category.category_id))) {
        selectedCategories.value = selectedCategories.value.filter(c => c !== parseInt(category.category_id));
        console.log('unselected category', selectedCategories.value);
    } else {
        selectedCategories.value.push(parseInt(category.category_id));
        console.log('selected category', selectedCategories.value);
    }
    console.log(parseInt(category.category_id));

}

let addToCart = (event, id, product_price, product_name, product_image) => {
    successAlert()
    let cart = useProductStore.cart
    let existingItem = cart.find(product => product.id === id);
    let quantity = 1;

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.product_price * existingItem.quantity
        useProductStore.storeCart(useProductStore.cart);
    } else {
        let totalPrice = product_price
        useProductStore.cart.push({
            id, product_name, product_price, product_image, quantity, totalPrice
        })
        useProductStore.storeCart(useProductStore.cart);
    }

}

let getProducts = async () => {
    let dbProducts = await axios.get(`https://${useApiStore.apiRoute}/api/products`, {
        params: {
            search: searchKey.value

        }

    });
    dbProducts = dbProducts.data.status
    dbProducts.forEach((pro) => {

        if (pro.product_image.startsWith("https://via.placeholder.com/") || pro.product_image.startsWith("https://images.unsplash.com/")) {
            // Do nothing as the image is already hosted elsewhere
            pro.category_id = pro.category_id * 1
        } else {
            pro.product_image = `https://${useApiStore.apiRoute}/storage/${pro.product_image}`;
            pro.category_id = pro.category_id * 1


        }
    });
    useProductStore.products = dbProducts
    products.value = useProductStore.products
    console.log(products.value)
}

let getCategories = async () => {
    let dbCategories = await axios.get(`https://${useApiStore.apiRoute}/api/category`);
    useProductStore.categories = dbCategories.data.category
}

onMounted(() => {
    // if (useToken.token == '' || useToken.token == undefined || useToken.token == null) {
    //   // router.push('/login')
    // } else {

    getProducts()
    getCategories();
    useProductStore.getCartLocal();
    products.value = useProductStore.products

    // }
})
</script>

<style>
.slide-out {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
}

.image {
    display: none;
}

.show {
    display: block;
}

.aside-btn {
    position: absolute;
    top: 40;
    left: 10%;
    color: red;
    position: fixed;
}
</style>



