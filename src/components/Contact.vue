<template>
    <section class="bg-gray-100">
        <div class="alert-box" v-if="successMessage">
            <div class="alert-content">
                <h2 class="text-lg text-green-500 mb-3">Success</h2>
                <p class="text-md mb-4">Mesage Sent Successfully</p>
                <button class="px-4 border py-1 border-green-500 hover:bg-green-500 hover:text-white"
                    @click="successMessage = !successMessage">Close</button>
            </div>
        </div>

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12 px-3">
                    <h1 class="text-center text-3xl mb-4">Address</h1>
                    <p class="max-w-xl text-lg">
                        At the same time, the fact that we are wholly owned and totally
                        independent from manufacturer and other group control gives you
                        confidence that we will only recommend what is right for you.
                    </p>

                    <div class="mt-8">
                        <a href="" class="text-2xl font-bold text-green-600">
                            <i class="fa-solid fa-phone"></i> 0151 475 4450
                        </a>
                        <br>
                        <a href="mailto:thanhtikezaw919@gmail.com" class="font-bold mt-2 text-2xl text-green-600"><i
                                class="fa-solid fa-envelope"></i>
                            thanhtikezaw919@gmail.com
                        </a>
                        <address class="mt-2 font-bold not-italic text-2xl text-green-600
                        ">
                            <i class="fa-solid  fa-2x fa-location-dot"></i>Yangon
                        </address>
                    </div>
                </div>

                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <div action="" class="space-y-4">
                        <h1 class="text-center text-2xl">Contact </h1>
                        <h2 v-if="errMessage" class="text-center text-red-400">Please Enter all the information</h2>
                        <div>
                            <label class="sr-only" htmlFor="name">Name</label>
                            <input v-model="name" class="w-full  border-2 border-gray-400 p-3 text-sm" placeholder="Name"
                                type="text" id="name" />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" htmlFor="email">Email</label>
                                <input v-model="email" class="w-full  border-2 border-gray-400 p-3 text-sm"
                                    placeholder="Email address" type="email" id="email" />
                            </div>

                            <div>
                                <label class="sr-only" htmlFor="phone">Phone</label>
                                <input v-model="phone" class="w-full  border-2 border-gray-400 p-3 text-sm"
                                    placeholder="Phone Number" type="tel" id="phone" />
                            </div>
                        </div>
                        <div>
                            <label class="sr-only" htmlFor="name">Subject</label>
                            <input v-model="subject" class="w-full  border-2 border-gray-400 p-3 text-sm"
                                placeholder="Subject" type="text" id="name" />
                        </div>
                        <!--
                        <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                            <div>
                                <input v-model="subject" class="peer sr-only" id="option1" type="radio" tabindex="-1"
                                    name="option" />

                                <label htmlFor="option1"
                                    class="block w-full  border-2 border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    tabindex="0">
                                    <span class="text-sm font-medium"> Option 1 </span>
                                </label>
                            </div>

                            <div>
                                <input class="peer sr-only" id="option2" type="radio" tabindex="-1" name="option" />

                                <label htmlFor="option2"
                                    class="block w-full  border-2 border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    tabindex="0">
                                    <span class="text-sm font-medium"> Option 2 </span>
                                </label>
                            </div>

                            <div>
                                <input class="peer sr-only" id="option3" type="radio" tabindex="-1" name="option" />

                                <label htmlFor="option3"
                                    class="block w-full  border-2 border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                    tabindex="0">
                                    <span class="text-sm font-medium"> Option 3 </span>
                                </label>
                            </div>
                        </div> -->

                        <div>
                            <label class="sr-only" htmlFor="message">Message</label>

                            <textarea class="w-full  border-2 border-gray-400 p-3 text-sm" placeholder="Message" rows="8"
                                id="message" v-model="message"></textarea>
                        </div>

                        <div class="mt-4">
                            <button @click="createContact"
                                class="inline-block w-full  border-2 bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                Send Enquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import contact from '../composables/contact';
let { name, email, subject, message, phone, errMessage, successMessage, createContact } = contact();
</script>

<style scoped>
.alert-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 400px;
    padding: 20px;
    z-index: 9999;
}

.alert-content {
    text-align: center;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}

.close-btn:hover {
    color: #ff0000;
}
</style>
