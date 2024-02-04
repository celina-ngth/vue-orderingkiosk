<script setup>
import { useProductsStore } from '@/stores/useProductsStore'

const cart = useProductsStore()
</script>

<template>
  <div>Dans votre panier</div>
  <div v-for="product in cart.products" :key="product.id" class="flex gap-2">
    x{{ product.quantity }} {{ product.name }} - ${{ product.amount }}
    <div>/ Supprimer</div>
  </div>

  <div class="my-4">Total : ${{ cart.total }}</div>
</template>
@/stores/useProductsStore
