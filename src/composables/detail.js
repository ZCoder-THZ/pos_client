
import { onMounted } from 'vue';
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ApiStore } from '../store/ApiStore'
import { productStore } from "../store/ProductStore";
import Swal from 'sweetalert2';
import axios from "axios";

export default function detail() {
    let useApiStore = ApiStore()
    let route = useRoute();
    let useProductStore = productStore();
    let product = ref({});
    let moreProducts = ref();
    let newCart = ref();
    let quantity = ref(1);
    const successAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Ordered success',
            text: 'Ordered Success waiting for the status',

        })

    }
    let getRandomProduct = async () => {
        let random = await axios.get(`http://${useApiStore.apiRoute}/api/products/random`);

        random.data.random.forEach(rand => {

            if (rand.product_image.startsWith("https://via.placeholder.com/") || rand.product_image.startsWith("https://images.unsplash.com/")) {
                // Do nothing as the image is already hosted elsewhere
            } else {
                rand.product_image = `http://${useApiStore.apiRoute}/storage/${rand.product_image}`

            }
        });
        moreProducts.value = random.data.random
        console.log(moreProducts.value)



    }
    let getProduct = async () => {
        let dbProduct = await axios.get(`http://${useApiStore.apiRoute}/api/product/${route.params.id}`)
        if (!dbProduct.data.product.product_image.startsWith('https://images.unsplash.com/')) {
            dbProduct.data.product.product_image = `http://${useApiStore.apiRoute}/storage/${dbProduct.data.product.product_image}`;
            console.log(dbProduct.data.product.product_image)
        } else {

        }
        dbProduct.data.product.totalPrice = quantity.value * dbProduct.data.product.product_price * 1
        dbProduct.data.product.quantity = quantity.value
        product.value = dbProduct.data.product





    }
    // let addToCart = (event, more = {}) => {
    //     let cart = useProductStore.cart;
    //     if (Object.keys(more).length > 0) {
    //         let id = more.product_id;
    //         let existingCartItem = cart.find(item => item.id === id);
    //         if (existingCartItem) {
    //             successAlert()

    //             // Update the quantity of the existing item
    //             existingCartItem.quantity += quantity.value

    //             console.log('Quantity updated for existing item:', existingCartItem);
    //             useProductStore.storeCart(cart);
    //             // quantity.value++

    //         } else {
    //             successAlert()
    //             newCart.value = {

    //                 id: more.product_id,
    //                 product_price: more.product_price,
    //                 product_image: more.product_image,
    //                 quantity: quantity.value,
    //                 product_name: more.product_name,
    //                 totalPrice: quantity.value * more.product_price * 1

    //             }
    //             cart.push(newCart.value);
    //             useProductStore.storeCart(cart);
    //         }
    //     } else {
    //         successAlert()
    //         let productId = route.params.id * 1;
    //         let existingCartItem = cart.find(item => item.id === productId);

    //         if (existingCartItem) {
    //             // Update the quantity of the existing item
    //             existingCartItem.quantity += quantity.value

    //             console.log('Quantity updated for existing item:', existingCartItem);
    //             useProductStore.storeCart(cart);
    //             // quantity.value++

    //         } else {
    //             successAlert()
    //             newCart.value = {
    //                 id: product.value.product_id,
    //                 product_price: product.value.product_price,
    //                 product_image: product.value.product_image,
    //                 quantity: quantity.value,
    //                 product_name: product.value.product_name,
    //                 totalPrice: quantity.value * product.value.product_price * 1

    //             }
    //             cart.push(newCart.value);
    //             useProductStore.storeCart(cart);


    //         }



    //         // Update the cart state in the store

    //         // Increment the quantity value

    //     }

    // }
    let addToCart = (event, more = {}) => {
        let cart = useProductStore.cart;
        successAlert();

        let id = more.product_id || route.params.id * 1;
        let existingCartItem = cart.find(item => item.id === id);

        if (existingCartItem) {
            existingCartItem.quantity += quantity.value;
            console.log('Quantity updated for existing item:', existingCartItem);
        } else {
            let newCart = {
                id: id,
                product_price: more.product_price || product.value.product_price,
                product_image: more.product_image || product.value.product_image,
                quantity: quantity.value,
                product_name: more.product_name || product.value.product_name,
                totalPrice: quantity.value * (more.product_price || product.value.product_price) * 1
            };
            cart.push(newCart);
        }

        useProductStore.storeCart(cart);
    };

    const increasement = () => {
        quantity.value++
    }
    const decreasement = () => {
        quantity.value--
    }


    onMounted(() => {
        getProduct();
        useProductStore.getCartLocal()
        getRandomProduct()
    });

    return {
        getProduct,
        moreProducts,
        product,
        quantity,
        newCart,
        addToCart,
        increasement,
        decreasement
    }
}

