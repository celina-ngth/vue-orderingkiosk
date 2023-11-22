import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),
  getters: {},
  actions: {
    addToCart(product) {
      this.products.push(product)
    },
  },
})
