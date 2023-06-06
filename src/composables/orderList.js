import { ref, onMounted, computed } from "vue"
import axios from "axios";
import { useTokenStore } from '../store/TokenStore';
import { ApiStore } from '../store/ApiStore'

export default function orderList() {
    let orders = ref();
    let useApiStore = ApiStore()
    let useToken = useTokenStore()
    let userId = ref();
    let getOrderList = async () => {
        let dbOrderList = await axios.get(`https://${useApiStore.apiRoute}/api/order/${userId.value}`);
        orders.value = dbOrderList.data.orders
        console.log(orders.value)
        // console.log(orders.value[0].status)
    }
    let removeOrder = async (orderCode) => {
        let dbOrderList = await axios.delete(`https://${useApiStore.apiRoute}/api/order/${orderCode}`);

        getOrderList();

    }
    onMounted(() => {
        useToken.getUser()
        userId.value = useToken.user.id;
        getOrderList();

        console.log(statusText)


    })
    let statusText = computed(() => {
        if (orders.value[0].status === 0) {
            return 'Pending';
        } else if (orders.value[0].status === 1) {
            return 'Success';
        } else if (orders.value[0].status === 2) {
            return 'Failed';
        } else {
            return '';
        }

    })

    return {
        orders,
        getOrderList,
        statusText,
        removeOrder

    }
}
