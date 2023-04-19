import { defineStore } from "pinia";

export const useTokenStore = defineStore('token', {
  state() {
    return {
      token: localStorage.getItem('token') || '',
      user: localStorage.getItem('user') || '',
      // products: '',
      // cart: []

    }

  },
  actions: {
    storeUser() {
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    getUser() {
      let user = localStorage.getItem('user')

      if (user) {
        this.user = JSON.parse(user)
      }
    },
    removeUser() {
      this.user = '',
        localStorage.removeItem('user')
    },
    login(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
    // storeCart() {
    //   localStorage.setItem('cart', JSON.stringify(this.cart))

    // },
    // clearCart() {
    //   this.cart = []
    //   localStorage.setItem('cart',this.cart)
    // },
    // getCartLocal() {
    //   let cartData = localStorage.getItem('cart')

    //   if (cartData) {
    //     this.cart=JSON.parse(cartData)
    //   }

    // }
  },


})