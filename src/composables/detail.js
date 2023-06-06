
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
        let random = await axios.get(`https://${useApiStore.apiRoute}/api/products/random`);

        random.data.random.forEach(rand => {

            if (rand.product_image.startsWith("https://via.placeholder.com/") || rand.product_image.startsWith("https://images.unsplash.com/")) {
                // Do nothing as the image is already hosted elsewhere
            } else {
                rand.product_image = `https://${useApiStore.apiRoute}/storage/${rand.product_image}`

            }
        });
        moreProducts.value = random.data.random
        console.log(moreProducts.value)



    }
    let getProduct = async () => {
        let dbProduct = await axios.get(`https://${useApiStore.apiRoute}/api/product/${route.params.id}`)
        if (!dbProduct.data.product.product_image.startsWith('https://images.unsplash.com/')) {
            dbProduct.data.product.product_image = `https://${useApiStore.apiRoute}/storage/${dbProduct.data.product.product_image}`;
            console.log(dbProduct.data.product.product_image)
        } else {

        }
        dbProduct.data.product.totalPrice = quantity.value * dbProduct.data.product.product_price * 1
        dbProduct.data.product.quantity = quantity.value
        product.value = dbProduct.data.product





    }

    let addToCart = (event, more = {}) => {
        let cart = useProductStore.cart;
        successAlert();

        let id = more.product_id || route.params.id;
        let existingCartItem = cart.find(item => item.id === id);
        console.log(cart, 'cartitem')
        console.log(existingCartItem, 'existing cart item')
        if (cart.find(item => item.id === id)) {
            // existingCartItem.quantity += quantity.value;//useproductstore.cart.value is modified
            cart.find(item => item.id === id).quantity += quantity.value;

            useProductStore.storeCart(useProductStore.cart);
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
            //cart.push ===useproductionstore.cart.push
            // useProductStore.storeCart(cart.push)
            useProductStore.storeCart(cart);
        }


    };

    const increasement = () => {
        quantity.value++
    }
    const decreasement = () => {
        if (quantity.value > 1) {
            quantity.value--;
        }
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



// does find method refrence the exising item ?
//

// No, the find method in JavaScript does not create a reference to the existing item in the array.Instead, it returns a reference to the found item itself.This means that the variable assigned to the result of find holds a reference to the actual item in the array, not a copy or a reference to the array itself.

// In your previous example:

// javascript

// let array = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' }
// ];

// let array2 = array.find(item => item.id === 2);

// array2 will hold a reference to the object { id: 2, name: 'Item 2' } in the array.Modifying properties of array2 will directly modify the corresponding object in the original array.

//     However, it's important to note that the reference itself is not stored in the array. The find method returns a reference to the object in the array, but the array itself still contains the original objects.
