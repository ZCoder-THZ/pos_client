import axios from "axios"
export let createOrderAndItems = async (order, item, sailDate) => {
    // let dbOrder = await axios.post('https://pos.zcoder.cloud/api/order', { order, item });
    let dbOrder = await axios.post('https://pos.zcoder.cloud/api/order', { order, item, sailDate });


    console.log(dbOrder.data.message)

}
export let createOrderItem = async (item) => {
    // let orderItem = await axios.post('https://pos.zcoder.cloud/api/order-items', item)
    let orderItem = await axios.post('https://pos.zcoder.cloud/api/order-items', item)


    console.log(orderItem)

}
