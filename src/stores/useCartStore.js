import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    total: 0,
  }),
  getters: {},
  actions: {
    addToCart(product, quantity) {
      const amount = product.price * quantity

      product.quantity = quantity
      product.amount = amount
      this.products.push(product)

      this.total += amount
    },
  },
})
