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
  <div>Dans votre panier</div>
  <div v-for="product in cart.$state.cart" :key="product.id" class="flex gap-2">
    x{{ product.quantity }} {{ product.name }} - {{ formatPrice(product.amount) }}
    <a @click="cart.removeFromCart(product.id)" class="cursor-pointer">
      Supprimer
    </a>
  </div>

  <div class="my-4">Total : {{ formatPrice(cart.total) }}</div>
</template>
