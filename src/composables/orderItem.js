
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
export default function orderItem() {
    const orderItems = ref();
    const route = useRoute();
    let orderCode = route.params.orderCode
    let getOrderItems = async () => {
        let dbOrderItems = await axios.get(`http://127.0.0.1:8000/api/orderItems/${orderCode}`);
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