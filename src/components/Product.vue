<script setup>
import { ref, computed } from 'vue'
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

const amount = computed(() => props.product.price * quantity.value)

function changeQuantity(qty) {
  quantity.value = qty
}
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

    <div class="flex justify-between w-full">
      <div class="text-yellow6 text-lg font-bold">{{ product.name }}</div>
      <div>
        {{ formatPrice(product.price) }}
      </div>
    </div>

    <button type="button" @click="openModal = true" class="mt-2 w-full">
      Ajouter au panier
    </button>

    <Modal v-model="openModal">
      <template #header>Ajouter au panier</template>

      <div class="flex-col">
        {{ product.name }} - {{ formatPrice(product.price) }}

        <h4>Composition</h4>
        <div v-for="(ingredient, index) in product.composition" :key="index">
          <img
            :src="`/images/${ingredient.image}`"
            :alt="ingredient.name"
            class="w-[30px]"
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
          <span>Ajouter au panier</span>
          {{ formatPrice(amount) }}
        </button>
      </template>
    </Modal>
  </div>
</template>
