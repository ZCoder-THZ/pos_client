import axios from "axios";
import { ref, onMounted } from "vue";
import { useTokenStore } from '../store/TokenStore'
import { ApiStore } from '../store/ApiStore'

import router from '../routes/router'
export default function register() {
    let useToken = useTokenStore()
    let useApiStore = ApiStore();
    let username = ref('')
    let addressValue = ref('')
    let email = ref('')
    let phone = ref()
    let address = ref('')
    let gender = ref('')
    let password = ref('')
    let password2 = ref('')
    let erorrPassword = ref('')
    onMounted(() => {
        useToken.getUser();
        if (Object.keys(useToken.user).length > 0) {
            router.push('/')
        }

    })
    let accountRegister = async () => {

        if (password.value !== password2.value) {
            erorrPassword.value = 'password must be same with confirmpassword'
            console.log(erorrPassword.value)
        } else {
            let data = {
                "name": username.value,
                "email": email.value,
                "password": password.value,
                "phone": phone.value,
                "gender": gender.value,
                "address": address.value,

            }
            let create = await axios.post(`http://${useApiStore.apiRoute}/api/register`, data)
            // let dataApi = create.data

            // useToken.token = dataApi.token;
            // useToken.user = dataApi.user;

            router.push('/login')

        }
    }

    return { username, email, phone, address, gender, password, password2, erorrPassword, accountRegister }
}
