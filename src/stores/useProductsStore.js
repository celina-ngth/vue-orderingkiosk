import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
  state: () => ({
    burgers: [],
  }),
  getters: {},
  actions: {
    async getProducts() {
      try {
        const response = await fetch('http://localhost:3000/products')
        this.burgers = await response.json()
      } catch (error) {
        console.error('Error:', error)
      }
    },
  },
})
