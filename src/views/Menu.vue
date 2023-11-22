<script setup>
import { computed } from 'vue'
import dataSource from '@/data.json'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

const products = computed(() => dataSource.menus)
</script>

<template>
  <h1>Menu</h1>
  <div class="grid grid-cols-4 gap-4">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>

  <h2>My order - Eat in</h2>
  <Cart />
</template>
