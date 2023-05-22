import { ref, onMounted, computed } from "vue"
import { useTokenStore } from '../store/TokenStore';
import { ApiStore } from '../store/ApiStore'

import axios from "axios";
import { useRouter } from "vue-router";

export default function profileSetting() {
    let userId = ref();
    let router = useRouter();
    let useApiStore = ApiStore();
    let useToken = useTokenStore();
    let userName = ref();
    let email = ref();
    let gender = ref();
    let userImage = ref();
    let phone = ref();
    let address = ref();
    let selectedImage = ref();
    let updateProfile = async () => {
        let updateData = new FormData();

        updateData.append('image', selectedImage.value);
        updateData.append('userId', userId.value);
        updateData.append('name', userName.value);
        updateData.append('email', email.value);
        updateData.append('address', address.value);
        updateData.append('phone', phone.value);

        let update = await axios.post(`http://${useApiStore.apiRoute}/api/editProfile`, updateData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });
        if (update.data.status == "success") {
            logout();
        }
        console.log(update.data)
    }
    let logout = () => {
        router.push('/login')
        useToken.logout();
        useToken.removeUser();


    }
    let updateImage = (event) => {
        selectedImage.value = event.target.files[0]
        console.log(selectedImage.value)
    }

    console.log(selectedImage.value)
    let getUserImage = computed(() => {
        if (userImage.value !== `http://${useApiStore.apiRoute}/storage/null`) {
            return userImage.value
        } else {
            if (gender.value == 'male') {

                return "https://cdn-icons-png.flaticon.com/512/21/21104.png?w=740&t=st=1682261382~exp=1682261982~hmac=1d5f5642fafb101781926548f54b6bdcd608a0120f10bbdf292ab55598547155"
            } else {
                return "https://cdn-icons-png.flaticon.com/512/727/727393.png?w=740&t=st=1682254805~exp=1682255405~hmac=0a342c036e9af4976c9cfe976bbdf77977b1bd4372e62923e0c64649478ee5e8";
            }

        }
    })


    onMounted(() => {
        useToken.getUser();
        userName.value = useToken.user.name
        userId.value = useToken.user.id
        email.value = useToken.user.email
        userImage.value = useToken.user.image
        phone.value = useToken.user.phone
        address.value = useToken.user.address
        gender.value = useToken.user.gender


    })

    return {
        updateProfile,
        userId,
        userName,
        email,
        getUserImage,
        phone,
        address,
        selectedImage,
        updateImage,
        userImage,
        updateProfile

    }

}
