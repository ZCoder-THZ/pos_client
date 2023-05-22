import { defineStore } from "pinia";

export const ApiStore = defineStore('api', {
    state() {
        return {
            // apiRoute: 'pos.zcoder.cloud'
            apiRoute: '127.0.0.1:8000'


        }

    }


})
