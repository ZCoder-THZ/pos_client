import { ref } from "vue"
import { useTokenStore } from '../store/TokenStore';
export default function profile() {
    let useToken = useTokenStore();
    let userProfile = ref();
    useToken.getUser()
    userProfile.value = useToken.user;

    return {
        userProfile
    }
}