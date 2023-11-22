<script setup>
import { computed } from 'vue'
import dataSource from '@/data.json'
import Product from '@/components/Product.vue'

const products = computed(() => dataSource.menus)
</script>

<template>
  <h1>Menu</h1>
  <div class="flex w-full justify-between items-center gap-2">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
