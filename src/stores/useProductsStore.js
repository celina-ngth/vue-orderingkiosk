import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
  state: () => ({
    menus: [],
    burgers: [],
    cart: [],
    total: 0,
  }),
  getters: {},
  actions: {
    async getProducts() {
      try {
        const dataSources = [
          'http://localhost:3000/menus',
          'http://localhost:3000/products',
        ]

        const fetchPromises = dataSources.map((url) =>
          fetch(url).then((response) => response.json())
        )

        await Promise.all(fetchPromises)
          .then(([allmeals, allburgers]) => {
            this.$state.menus = allmeals
            this.$state.burgers = allburgers
          })
          .catch((error) => console.error('Error fetching data:', error))
      } catch (error) {
        console.log(error)
      }
    },

    addToCart(newProduct, quantity) {
      let amount = newProduct.price * quantity

      const existingProduct = this.burgers.find(
        (product) => product.id === newProduct.id
      )

      if (existingProduct) {
        existingProduct.quantity += quantity
        existingProduct.amount += amount
      } else {
        newProduct.quantity = quantity
        newProduct.amount = amount
        this.$state.products.push(newProduct)
      }

      this.total += amount
    },
  },
})
