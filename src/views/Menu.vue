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
  <h1 class="text-white">Commandez</h1>
  <div class="bg-white p-12 rounded">
    <h2>Burgers</h2>
    <div class="flex gap-4 flex-wrap">
      <Product
        v-for="burger in productList.$state.burgers"
        :key="burger.id"
        :product="burger"
      />
    </div>
  </div>

  <h2>Ma commande</h2>
  <Cart />
</template>
