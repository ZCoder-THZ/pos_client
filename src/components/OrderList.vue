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
                                    <span class="bg-yellow-500 text-white p-1 rounded"
                                        v-if="order.status === 0">Pending</span>
                                    <span class="bg-green-500 text-white p-1 rounded"
                                        v-if="order.status === 1">Success</span>
                                    <span class="bg-red-500 text-white p-1 rounded"
                                        v-if="order.status === 2">Rejected</span>
                                </td>
                                <td class="relative flex h-20 w-20 justify-between items-center">
                                    <router-link :to="{ name: 'OrderItem', params: { orderCode: order.order_code } }"
                                        class="flex items-center hover:text-blue-300">
                                        <i class="fas fa-eye mr-1"></i>
                                        <span
                                            class="absolute top-0  left-0 bg-gray-900 text-white text-xs px-2 py-1 opacity-0 hover:opacity-100 transition-opacity">view</span>
                                    </router-link>
                                    <button @click="removeOrder(order.order_code)"
                                        class="ml-2 flex items-center hover:text-red-500">
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