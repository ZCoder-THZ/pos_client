<template>
    <div class="flex justify-center items-center h-100vh bg-[#eee]">

        <div class=" mt-12">


            <main class="my-8">
                <div class="container mx-auto px-6 ">
                    <div class="md:flex md:items-center">
                        <div class="w-full h-64 md:w-1/2 lg:h-96">
                            <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" :src="product.product_image"
                                alt="Nike Air">
                        </div>
                        <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                            <h3 class="text-gray-700 uppercase text-lg">{{ product.product_name }}</h3>
                            <span class="text-gray-500 mt-3">${{ product.product_price }}</span>
                            <hr class="my-3">
                            <div class="mt-2">
                                <label class="text-gray-700 text-sm" for="count">Count:</label>
                                <div class="flex items-center mt-1">
                                    <button @click="increasement"
                                        class="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                    <span class="text-gray-700 text-lg mx-2">{{ quantity }}</span>
                                    <button @click="decreasement"
                                        class="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="mt-3">
                                <label class="text-gray-700 text-sm" for="count">Total:</label>
                                <div class="flex items-center mt-1">
                                    {{ product.totalPrice * quantity }}
                                </div>
                            </div>
                            <div class="flex items-center mt-6">
                                <button @click="addToCart"
                                    class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order
                                    Now</button>
                                <button
                                    class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                        <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>
                        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                            <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                                v-for="more in moreProducts">
                                <div class="flex items-end justify-end h-56 w-full bg-cover bg-center img-center  "
                                    :style="{ backgroundImage: `url(${more.product_image})` }">
                                    <button
                                        class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"
                                            @click="addToCart($event, more)">
                                            <path
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="px-5 py-3">
                                    <h3 class="text-gray-700 uppercase">{{ more.product_name }}</h3>
                                    <span class="text-gray-500 mt-2">{{ more.product_price }} $</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>


        </div>
    </div>
</template>



<script  setup>
import detail from '../composables/detail';


const { getProduct, product, quantity, newCart, addToCart, increasement, decreasement, moreProducts } = detail()





</script>

<style lang="scss" scoped></style>