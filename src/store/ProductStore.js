import { defineStore } from "pinia";

export const productStore = defineStore('product', {
    state() {
        return {

            products: '',
            categories: '',
            cart: []
            ,
        }

    },
    actions: {

        storeCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart))

        },
        clearCart() {
            this.cart = []
            localStorage.setItem('cart', this.cart)
        },
        getCartLocal() {
            let cartData = localStorage.getItem('cart')

            if (cartData) {
                this.cart = JSON.parse(cartData)
            }

        },
        removeCartItem(cartItem) {
            this.cart = this.cart.filter(cart => cart.id !== cartItem.id);
            console.log('productstore', this.cart)
            this.storeCart()
            // this.getCartLocal()

        },

    },


})