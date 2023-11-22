<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import Quantity from '@/components/Quantity.vue'
import Modal from '@/components/Modal.vue'

const cart = useCartStore()

defineProps({
  product: {
    name: String,
    price: Number,
    image: String,
  },
})

const openModal = ref(false)
const quantity = ref(1)

function changeQuantity(qty) {
  quantity.value = qty
}
</script>

<template>
  <div class="flex flex-col border border-solid border-rounded p-2 my-8">
    <img
      :src="`/images/${product.image}`"
      :alt="product.name"
      class="w-[150px]"
    />

    <div class="text-yellow6 text-lg font-bold">{{ product.name }}</div>
    <div>${{ product.price }}</div>

    <button type="button" @click="openModal = true" class="mt-2">
      Add to cart
    </button>

    <Modal v-model="openModal">
      <template #header>Add to cart</template>

      <div class="flex-col">
        {{ product.name }} - ${{ product.price }}
        <Quantity @update:qty="changeQuantity" />
      </div>

      <template #footer>
        <button
          type="button"
          @click="cart.addToCart(product, quantity), (openModal = false)"
        >
          Add product
        </button>
      </template>
    </Modal>
  </div>
</template>
