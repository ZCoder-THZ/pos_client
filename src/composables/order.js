import axios from "axios"
export let createOrderAndItems = async (order, item) => {
    let dbOrder = await axios.post('http://127.0.0.1:8000/api/order', { order, item });

    console.log(dbOrder.data.message)

}
export let createOrderItem = async (item) => {
    let orderItem = await axios.post('http://127.0.0.1:8000/api/order-items', item)
    console.log(orderItem)

}
