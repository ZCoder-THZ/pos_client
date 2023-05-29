import { ref, onMounted } from "vue";
import axios from "axios";
import { ApiStore } from '../store/ApiStore'

export default function contact() {
    let useApiStore = ApiStore();
    let name = ref();
    let email = ref();
    let phone = ref()
    let subject = ref();
    let message = ref();
    let errMessage = ref(false);
    let successMessage = ref(false)
    let createContact = async () => {
        if (!name.value || !email.value || !subject.value || !message.value || !phone.value) {
            errMessage.value = true
            return;
        } else {
            let data = {
                name: name.value,
                email: email.value,
                subject: subject.value,
                phone: phone.value,
                message: message.value
            }
            try {
                let connectContact = await axios.post(`http://${useApiStore.apiRoute}/api/contact`, data)
                successMessage.value = true
                errMessage.value = false

                console.log(connectContact.data)
                name.value = ''
                email.value = ''
                subject.value = ''
                message.value = ''
                phone.value = ''
            } catch (error) {
                console.error(error)
            }

        }

    }

    return {
        name,
        message,
        email,
        phone,
        subject,
        errMessage,
        successMessage,
        createContact
    }
}
