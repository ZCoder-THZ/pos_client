
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useTokenStore } from '../store/TokenStore';
import { createOrderAndItems, createOrderItem } from '../composables/order.js';
import { productStore } from '../store/ProductStore';
import Swal from 'sweetalert2';
export default function cartCompose() {
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
            Swal.fire({
                icon: 'warning',
                title: 'Date Alert',
                color: 'red',

                text: 'Please specify a date other than the current day',
            });
            dateAlert.value = false
        } else {
            dateAlert.value = true
        }

    }
    const showCurrentDateAlert = () => {
        if (currentDateAlert.value) {
            Swal.fire({
                icon: 'error',
                title: 'Date Alert',
                color: 'white',
                background: ' #f34040 ',
                text: 'Please specify a date other than the current day',
            });
        }


    };

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
                        showCurrentDateAlert();
                    }

                } else {
                    dateAlert.value = true;
                    toggleDateAlert()
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
    return {
        router,
        useProductStore,
        cart,
        totalPrice,
        useToken,
        user,
        dateAlert,
        currentDateAlert,
        id,
        sailDate,
        dateChange,
        toggleDateAlert,
        checkAlert,
        removeSuccess,
        successAlert,
        removeCartItem,
        checkOut,
        decreasement,
        increament
    };


}
