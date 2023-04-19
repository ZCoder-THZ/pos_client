import axios from "axios";
import { ref } from "vue";
import { useTokenStore } from '../store/TokenStore'
import router from '../routes/router'
export default function register() {
    let tokenStore = useTokenStore()
    let username = ref('')
    let addressValue = ref('')
    let email = ref('')
    let phone = ref()
    let address = ref('')
    let gender = ref('')
    let password = ref('')
    let password2 = ref('')
    let erorrPassword = ref('')
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
            let create = await axios.post('http://127.0.0.1:8000/api/register', data)
            let dataApi = create.data
            tokenStore.token = dataApi.token;
            tokenStore.user = dataApi.user;

            router.push('/')

        }
    }

    return { username, email, phone, address, gender, password, password2, erorrPassword, accountRegister }
}