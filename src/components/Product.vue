<script setup>
import { useCartStore } from '@/stores/useCartStore'

const cart = useCartStore()

defineProps({
  product: {
    name: String,
    price: Number,
    image: String,
  },
})
</script>

<template>
  <div class="flex flex-col border border-solid border-rounded p-2 my-8">
    <img
      :src="`/images/${product.image}`"
      :alt="product.name"
      style="width: 150px"
    />

    <div class="text-yellow6 text-lg font-bold">{{ product.name }}</div>
    <div>${{ product.price }}</div>
    <div>Show details</div>

    <button type="button" @click="cart.addToCart(product)" class="mt-2">
      Add product
    </button>
  </div>
</template>
