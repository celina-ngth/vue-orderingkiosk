import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    total: 0,
  }),
  getters: {},
  actions: {
    addToCart(product) {
      this.products.push(product)
      this.total += product.price
    },
  },
})
