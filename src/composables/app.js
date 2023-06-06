import { ref, onMounted, computed } from 'vue';
import { useTokenStore } from '../store/TokenStore';
import { productStore } from '../store/ProductStore';
import { ApiStore } from '../store/ApiStore'

import router from '../routes/router';
export default function App() {

    let useToken = useTokenStore()
    let useApiStore = ApiStore();
    let useProductStore = productStore();
    const showMenu = ref(false);
    const isLoggedin = ref(false)
    // let cartCount=ref(useToken.cart.length)
    let logout = () => {
        router.push('/login')
        useToken.logout();
        useToken.removeUser();
        useProductStore.clearCart()

    }
    let login = () => {
        router.push('/login')

    }
    onMounted(() => {
        useToken.getUser();
        console.log(useToken.user)
    })
    let imageCheck = computed(() => {
        if (useToken.user.image !== `https://${useApiStore.apiRoute}/storage/null`) {
            return useToken.user.image
        } else {
            if (useToken.user.gender === 'female') {
                return "https://cdn-icons-png.flaticon.com/512/727/727393.png?w=740&t=st=1682254805~exp=1682255405~hmac=0a342c036e9af4976c9cfe976bbdf77977b1bd4372e62923e0c64649478ee5e8";
            } else {
                return "https://cdn-icons-png.flaticon.com/512/21/21104.png?w=740&t=st=1682261382~exp=1682261982~hmac=1d5f5642fafb101781926548f54b6bdcd608a0120f10bbdf292ab55598547155"
            }

        }

    })
    return {
        useToken,
        useApiStore,
        useProductStore,
        showMenu,
        isLoggedin,
        logout,
        login,
        imageCheck
    }
}
