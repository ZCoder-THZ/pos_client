<template>
    <!-- component -->
    <div class="bg-white p-8 rounded-md w-full mt-8">
        <h1 class="text-center">OrderLIst</h1>
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created At
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order Code
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total Price
                                </th>

                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders">

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ order.created_at }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ order.order_code }}

                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ order.total_price }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span v-if="order.status >= 0 && order.status <= 2"
                                        :class="['relative', 'inline-block', 'px-3', 'py-1', 'font-semibold', { 'text-yellow-900': order.status === 0, 'text-green-900': order.status === 1, 'text-red-900': order.status === 2 }]">
                                        <span aria-hidden class="absolute inset-0"
                                            :class="{ 'bg-green-200': order.status === 0, 'bg-blue-200': order.status === 1, 'bg-red-200': order.status === 2 }"></span>
                                        <span class="relative">{{ statusText }}</span>
                                    </span>
                                </td>
                                <td class="relative flex h-20 w-20 justify-between items-center">
                                    <router-link :to="{ name: 'OrderItem', params: { orderCode: order.order_code } }"
                                        class="flex items-center">
                                        <i class="fas fa-eye mr-1"></i>
                                        <span
                                            class="absolute top-0 left-0 bg-gray-900 text-white text-xs px-2 py-1 opacity-0 hover:opacity-100 transition-opacity">view</span>
                                    </router-link>
                                    <button @click="removeOrder(order.order_code)" class="ml-2 flex items-center">
                                        <i class="fa-solid fa-trash"></i>

                                    </button>
                                </td>

                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>


<style></style>
<script>
import orderList from '../composables/orderList';
export default {
    setup() {
        const { orders, getOrderList, removeOrder, statusText } = orderList()

        return { orders, getOrderList, removeOrder, statusText }
    }

}
</script>