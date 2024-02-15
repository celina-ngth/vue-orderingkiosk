<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import Quantity from '@/components/Quantity.vue'
import Modal from '@/components/Modal.vue'

const cart = useCartStore()

const props = defineProps({
  product: {
    name: String,
    price: Number,
    image: String,
  },
  noModal: Boolean,
})

const openModal = ref(false)
const quantity = ref(1)

const amount = computed(() => props.product.price * quantity.value)

function changeQuantity(qty) {
  quantity.value = qty
}
</script>

<template>
  <div
    class="flex flex-col border border-solid border-coolGray border-rounded p-2 my-2"
  >
    <img
      :src="`/images/${product.image}`"
      :alt="product.name"
      class="w-[150px]"
    />

    <div class="text-yellow6 text-lg font-bold">{{ product.name }}</div>
    <div>${{ product.price }}</div>

    <button
      type="button"
      @click="noModal ? cart.addToCart(product, 1) : (openModal = true)"
      class="mt-2"
    >
      Add to cart
    </button>

    <Modal v-model="openModal">
      <template #header>Add to cart</template>

      <div class="flex-col">
        {{ product.name }} - ${{ product.price }}

        <h4>Composition</h4>
        <div v-for="(ingredient, index) in product.composition" :key="index">
          <img
            :src="`/images/${ingredient.image}`"
            :alt="ingredient.name"
            class="w-[20px]"
          />
          {{ ingredient.name }}
        </div>
      </div>

      <Quantity @update:qty="changeQuantity" />

      <template #footer>
        <button
          type="button"
          class="flex justify-between w-full"
          @click="cart.addToCart(product, quantity), (openModal = false)"
        >
          <span>Add to cart</span>
          ${{ amount }}
        </button>
      </template>
    </Modal>
  </div>
</template>
