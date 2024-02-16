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
  <div v-if="cart.cart.length">
    <div
      v-for="product in cart.cart"
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

    <div
      class="my-4 bg-primary text-lg font-bold text-white rounded py-1 px-2 flex justify-between"
    >
      <div>Total : {{ formatPrice(cart.total) }}</div>
      <div>Nombre d'articles : {{ cart.nbItemsInCart }} articles</div>
    </div>
  </div>

  <div v-else class="text-primary text-lg font-bold">
    Votre panier est vide.
  </div>
</template>
