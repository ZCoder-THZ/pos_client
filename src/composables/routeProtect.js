import { useTokenStore } from '../store/TokenStore';
import { useRouter } from 'vue-router';
let router = useRouter();
let useToken = useTokenStore();

export let protectRoute = () => {
    useToken.getUser()
    if (Object.keys(useToken.user).length > 0) {
        router.push('/')

    }

}