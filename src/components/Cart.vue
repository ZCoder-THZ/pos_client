<template>
    <!-- component -->
    <div class="flex items-end lg:flex-row flex-col justify-end bg-gray-700 relative" id="cart">
        <div v-if="dateAlert"
            class="absolute bg-red-800 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 rounded-md">
            <div class="flex flex-col p-4">
                <h1 class="text-center"><i class="fa-solid fa-2x fa-circle-exclamation"></i></h1>
                <h2 class="text-md text-center mb-2 py-3">Please Set the Delivery Date</h2>
                <div class="flex justify-center">
                    <button @click="toggleDateAlert"
                        class="w-20 py-2 border border-black hover:bg-black hover:text-red-500">Close</button>
                </div>
            </div>
        </div>
        <div v-if="currentDateAlert"
            class="absolute bg-red-800 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 rounded-md">
            <div class="flex flex-col p-4">
                <h1 class="text-center"><i class="fa-solid fa-2x fa-circle-exclamation"></i></h1>
                <h2 class="text-md text-center mb-2 py-3">Delivery Date should't be today</h2>
                <div class="flex justify-center">
                    <button @click="currentDateAlert = !currentDateAlert"
                        class="w-20 py-2 border border-black hover:bg-black hover:text-red-500">Close</button>
                </div>
            </div>
        </div>


        <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full  mt-[5rem] md:mt-[2rem] lg:mt-[2rem]">
            <div
                class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div class="text-center border-1 border-white">
                    <h1 class="text-xl text-white text-center mb-4">----Shipping-----</h1>
                    <hr>
                    <h2 class="text-md text-white my-2">Name : {{ useToken.user.name }}</h2>
                    <h2 class="text-md text-white my-2">Address : {{ useToken.user.address }}</h2>
                    <h2 class="text-md text-white my-2">Email : {{ useToken.user.email }}</h2>
                    <input class="text-white bg-slate-800 p-3 " type="date" v-model="sailDate" @change="dateChange">
                    <br>
                    <h3 v-if="sailDate == undefined" class="text-red-500 inline-block">Please Set The Delivery Date </h3>
                </div>

            </div>
        </div>

        <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4    dark:bg-gray-800  overflow-x-hidden lg:h-screen h-auto"
            id="scroll">
            <div class="flex mt-5 mb-4 items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16"
                    height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                </svg>
                <button onclick="history.back()" class="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</button>
            </div>



            <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" v-for="cartItem in cart"
                :key="cartItem.id">
                <div class="md:w-4/12 2xl:w-1/4 w-full">
                    <img :src="cartItem.product_image" alt="Black Leather Purse"
                        class="h-full object-center object-cover md:block hidden" />
                    <img :src="cartItem.product_image" alt="Black Leather Purse"
                        class="md:hidden w-full h-full object-center object-cover" />
                </div>
                <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

                    <div class="flex items-center justify-between w-full">
                        <p class="text-base font-black leading-none text-gray-800 dark:text-white">{{ cartItem.product_name
                        }}</p>
                        <!-- quality input -->

                        <!-- component -->
                        <div class="flex flex-wrap">
                            <div class="flex w-8/12">
                                <input type="text" v-model="cartItem.quantity" disabled
                                    class="  text-sm bg-white text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full">
                            </div>
                            <div class="flex flex-col w-4/12">
                                <button @click="increament($event, cartItem)"
                                    class="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                                    +
                                </button>
                                <button @click="decreasement($event, cartItem)"
                                    class="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                                    -
                                </button>
                            </div>
                        </div>

                        <!-- end input -->
                    </div>
                    <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                    <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>

                    <div class="flex items-center justify-between pt-5">
                        <div class="flex itemms-center">

                            <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                @click="removeCartItem($event, cartItem)">Remove
                            </p>
                        </div>
                        <p class="text-base font-black leading-none text-gray-800 dark:text-white inline-block">{{
                            cartItem.product_price }}</p>
                        <br>
                        <p class="text-base font-black leading-none text-gray-800 dark:text-white">SubTotal:{{
                            cartItem.totalPrice
                        }}</p>

                    </div>
                </div>
            </div>
        </div>
        <!-- Checkout -->
        <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div
                class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                    <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                    <div class="flex items-center justify-between pt-16">
                        <p class="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                        <p class="text-base leading-none text-gray-800 dark:text-white">{{ totalPrice }}</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <p class="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                        <p class="text-base leading-none text-gray-800 dark:text-white">4000</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <p class="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                        <p class="text-base leading-none text-gray-800 dark:text-white"></p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p class="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                        <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{{ totalPrice
                            + 4000
                        }}
                        </p>
                    </div>
                    <button
                        class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                        @click="checkOut">Checkout</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useTokenStore } from '../store/TokenStore';
import { createOrderAndItems, createOrderItem } from '../composables/order.js';
import { productStore } from '../store/ProductStore';
import Swal from 'sweetalert2';
let router = useRouter()
let useProductStore = productStore();
let cart = ref();

let totalPrice = ref(0);
let useToken = useTokenStore();
let user = ref({});
let dateAlert = ref(false);
let currentDateAlert = ref(false);
let id = Date.now();
let sailDate = ref()
const dateChange = () => {
    console.log(sailDate.value)
}
const toggleDateAlert = () => {
    if (dateAlert.value) {
        dateAlert.value = false
    } else {
        dateAlert.value = true
    }

}

const checkAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops No items in cart',
        text: 'Oops there is no item in your cart!',

    })
}
const removeSuccess = () => {
    Swal.fire({
        icon: 'success',
        title: 'Delete Success',
        text: 'SuccessFUlly deleted',

    })

}
const successAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Ordered success',
        text: 'Ordered Success waiting for the status',

    })

}


id = String(id).slice(0, 4) * 1;
onMounted(() => {
    useToken.getUser()
    console.log(useToken.user)
    user.value = useToken.user ? useToken.user : {};

    useProductStore.getCartLocal();
    cart.value = useProductStore.cart;
    console.log(cart.value)
    cart.value.forEach(cart => {
        cart.totalPrice = cart.product_price * cart.quantity
        totalPrice.value += cart.totalPrice
    })




})
console.log(useProductStore.cart)
let removeCartItem = (event, cartItem) => {
    removeSuccess()
    useProductStore.removeCartItem(cartItem)
    cart.value = useProductStore.cart
    totalPrice.value -= cartItem.totalPrice
}
console.log()
let checkOut = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let todayDate = year + '-' + month + '-' + day;

    console.log(todayDate);

    console.log(todayDate, 'today date')
    console.log(sailDate.value, 'sail date')
    if (!Object.keys(user.value).length > 0) {
        router.push('/login');
        console.log(user.value)
    } else {

        if (useProductStore.cart.length !== 0) {

            console.log(sailDate.value)
            if (sailDate.value !== undefined) {
                if (sailDate.value !== todayDate) {
                    let total = cart.value.reduce((holder, cart) => {
                        return holder + cart.totalPrice * 1;

                    }, 0);
                    let order = {

                        totalPrice: total + 4000, //total of all products
                        userId: user.value.id,
                        sailDate: sailDate.value


                    }
                    console.log(order)
                    let newOrderItem = [...cart.value];
                    let item = newOrderItem.map(item => {

                        return {
                            userId: user.value.id,
                            productId: item.id,
                            quantity: item.quantity,
                            totalPrice: item.totalPrice //actually subtotalItem
                        }

                    });
                    createOrderAndItems(order, item, sailDate.value)

                    useProductStore.clearCart();
                    cart.value = '';
                    totalPrice.value = 0
                    successAlert()
                } else {
                    currentDateAlert.value = true
                }

            } else {
                dateAlert.value = true
            }


        } else {
            // console.log('please login')

            checkAlert()

        }
    }


}
let decreasement = (event, cartItem) => {

    let selectedItem = cart.value.find(item => item.id === cartItem.id);
    if (selectedItem.quantity > 1) {
        selectedItem.quantity--;
        selectedItem.totalPrice = selectedItem.quantity * selectedItem.product_price;
        useProductStore.storeCart(useProductStore.cart);
        totalPrice.value = Math.abs(cart.value.reduce((acc, cart) => acc - (cart.product_price * cart.quantity), 0));
        console.log(useProductStore.cart);
    }
}

let increament = (event, cartItem) => {
    let selectedItem = cart.value.find(item => item.id === cartItem.id);
    selectedItem.quantity++;
    selectedItem.totalPrice = selectedItem.quantity * selectedItem.product_price;
    totalPrice.value = cart.value.reduce((acc, cart) => acc + (cart.product_price * cart.quantity), 0);
    useProductStore.storeCart(useProductStore.cart);
}

</script>

<style scoped>
/* width */
#scroll::-webkit-scrollbar {
    width: 1px;
}

/* Track */
#scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
#scroll::-webkit-scrollbar-thumb {
    background: rgb(133, 132, 132);
}
</style>
