<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { useCurrency } from '@/composable/useCurrency'
import Quantity from '@/components/Quantity.vue'
import Modal from '@/components/Modal.vue'

const cart = useCartStore()
const { formatPrice } = useCurrency()

const props = defineProps({
  product: {
    name: String,
    price: Number,
    image: String,
  },
})

const openModal = ref(false)
const quantity = ref(1)
</script>

<template>
  <div
    class="flex flex-col border border-solid border-coolgray border-rounded p-2 my-2 min-w-[200px] items-center"
  >
    <img
      :src="`/images/${product.image}`"
      :alt="product.name"
      class="w-[150px]"
    />

    <div class="text-primary text-lg font-bold">
      {{ product.name }}
      <span @click="openModal = true" class="cursor-pointer">ⓘ</span>
    </div>
    <div>{{ formatPrice(product.price) }}</div>

    <Quantity v-model="quantity" />

    <button
      type="button"
      @click="cart.addToCart(product, quantity), (quantity = 1)"
      class="mt-2 w-full"
    >
      Ajouter au panier
    </button>

    <Modal v-model="openModal">
      <template #header>
        {{ product.name }}
      </template>

      <h4>Composition</h4>
      <div
        v-for="(ingredient, index) in product.composition"
        :key="index"
        class="flex items-center"
      >
        {{ ingredient }}
      </div>
    </Modal>
  </div>
</template>
