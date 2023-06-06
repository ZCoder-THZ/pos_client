
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { ApiStore } from '../store/ApiStore'

export default function orderItem() {
    const useApiStore = ApiStore();
    const orderItems = ref();
    const route = useRoute();
    let orderCode = route.params.orderCode
    let getOrderItems = async () => {
        let dbOrderItems = await axios.get(`https://${useApiStore.apiRoute}/api/orderItems/${orderCode}`);
        orderItems.value = dbOrderItems.data.orderItems
        console.log(orderItems.value)
    }
    onMounted(() => {
        getOrderItems()


    })
    return {
        orderItems
    }
}
