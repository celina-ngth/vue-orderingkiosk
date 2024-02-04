<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '../stores/useProductsStore'

import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'
const productList = useProductsStore()

onMounted(async () => {
  await productList.getProducts()
})
</script>

<template>
  <h1>Commandez</h1>
  <div>
    <h2>Menus</h2>
    <div class="grid grid-cols-4 gap-4">
      <Product
        v-for="menu in productList.$state.menus"
        :key="menu.id"
        :product="menu"
      />
    </div>
    <h2>Burgers</h2>
    <div class="grid grid-cols-4 gap-4">
      <Product
        no-modal
        v-for="burger in productList.$state.burgers"
        :key="burger.id"
        :product="burger"
      />
    </div>
  </div>

  <h2>Ma commande</h2>
  <Cart />
</template>
../stores/useProductsStore
