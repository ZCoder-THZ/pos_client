








// <script setup>
// import { ref, onMounted, computed } from 'vue'
// import { useRouter } from 'vue-router';
// // import router from '../routes/router';
// import { useTokenStore } from '../store/TokenStore';
// import { productStore } from '../store/ProductStore';
// import axios from 'axios'
// import Detail from './Detail.vue';
// // let quantity=ref(1)
// let useToken = useTokenStore()
// let router = useRouter()
// let useProductStore = productStore();
// const selectedCategories = ref([]);
// let products = ref();

// // product detail
// let goProductDetail = (id) => {
//   router.push({ name: 'Detail', params: { id: 3 } })

// }
// console.log(selectedCategories.value)
// const filteredProduct = computed(() => {
//   if (selectedCategories.value.length === 0) {
//     return products.value
//   } else {

//     return products.value.filter(product => selectedCategories.value.includes(product.category_id * 1))
//     // if products is a array product=[1,2,3,4,5,7]
//     //return a array product.inculude ([1,2,3,])=>[1,2,3]

//   }

// })
// console.log(selectedCategories.value)
// console.log(products.value)
// const updateSelectedCategories = (category) => {
//   if (selectedCategories.value.includes(category.category_id)) {
//     selectedCategories.value = selectedCategories.value.filter(c => c !== category.category_id);
//     console.log('work')
//     console.log('selected', selectedCategories.value)

//   } else {
//     console.log('nope')
//     selectedCategories.value.push(category.category_id);
//     console.log('selected', selectedCategories.value)
//   }

// }
// // console.log(selectedCategories.value)
// console.log(filteredProduct)
// //create the cart if doesn't exist
// let addToCart = (event, id, product_price, product_name, product_image) => {

//   let cart = useProductStore.cart

//   let existingItem = cart.find(product => product.id === id);
//   let quantity = 1;


//   if (existingItem) {//check if the item is duplicate


//     existingItem.quantity += 1; //customize cart specific item
//     existingItem.totalPrice = existingItem.product_price * existingItem.quantity

//     useProductStore.storeCart(useProductStore.cart);

//     console.log(existingItem.quantity)
//     console.log(existingItem)

//   } else {


//     let totalPrice = product_price
//     useProductStore.cart.push({
//       id, product_name, product_price, product_image, quantity, totalPrice
//     })
//     useProductStore.storeCart(useProductStore.cart);

//   }


// }
// // let getProducts = async () => {
//         //   let dbProducts = await axios.get('http://127.0.0.1:8000/api/products', {
//         //     headers: {
//         //       'Content-Type': 'application/json',
//         //       'Authorization': 'Bearer ' + useToken.token
//         //     }
//         //   });
//         let getProducts = async () => {
//         let dbProducts = await axios.get('http://127.0.0.1:8000/api/products');

//     dbProducts = dbProducts.data.status
//   dbProducts.forEach(pro => {
//         pro.product_image = `http://127.0.0.1:8000/storage/${pro.product_image}`
//     });
//     // console.log(dbProducts)
//     useProductStore.products = dbProducts

//     products.value = useProductStore.products

// }
// let getCategories = async () => {
//         let dbCategories = await axios.get('http://127.0.0.1:8000/api/category');
//     useProductStore.categories = dbCategories.data.category
// }
//     console.log('getproduct', useProductStore.products)
// onMounted(() => {
//   if (useToken.token == '' || useToken.token == undefined || useToken.token == null) {
//         router.push('/login')
//     } else {

//         getProducts()
//     getCategories();
//     useProductStore.getCartLocal();//cart get cart if exist
//     products.value = useProductStore.products
//     console.log(useToken.user)
//     console.log('getproduct', useProductStore.products)
//   }

// })
// </script>