<script setup>
import { ref, reactive, onMounted } from 'vue'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

let isLoading = ref(false)
let products = reactive([])

async function getProducts() {
  try {
    isLoading.value = true
    const reponse = await fetch('http://localhost:3000/menus')
    products = await reponse.json()

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await getProducts()
})
</script>

<template>
  <h1>Menu</h1>
  <div v-if="!isLoading" class="grid grid-cols-4 gap-4">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>

  <h2>My order - Eat in</h2>
  <Cart />
</template>
