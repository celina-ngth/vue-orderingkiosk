<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { useCurrency } from '@/composable/useCurrency'

const cart = useCartStore()
const { formatPrice } = useCurrency()

onMounted(async () => {
  await cart.getCart()
})
</script>

<template>
  <div
    v-for="product in cart.$state.cart"
    :key="product.id"
    class="flex gap-4 py-2 border border-0 border-t-1 border-primary border-solid"
  >
    <span class="font-bold text-primary">x{{ product.quantity }}</span>
    {{ product.name }} -
    {{ formatPrice(product.amount) }}

    <a @click="cart.removeFromCart(product.id)" class="cursor-pointer">
      Supprimer
    </a>
  </div>

  <div class="my-4 bg-primary text-lg font-bold text-white rounded py-1 px-2">
    Total : {{ formatPrice(cart.total) }}
  </div>
</template>
