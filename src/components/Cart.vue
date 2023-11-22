<script setup>
import { useCartStore } from '@/stores/useCartStore'

const cart = useCartStore()
</script>

<template>
  <div>Item in cart :</div>
  <div v-for="product in cart.products" :key="product.id">
    {{ product.name }} - ${{ product.price }}
  </div>

  <div class="my-4">Total : ${{ cart.total }}</div>
</template>
