<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import dataSource from '@/data.json'

const cart = useCartStore()

const data = computed(() => dataSource.menus)
</script>

<template>
  <h1>Menu</h1>

  <!-- Create component ITEM -->
  <div class="flex justify-between w-full">
    <div v-for="item in data" :key="item.id" class="flex flex-col">
      <img
        :src="`/images/${item.image}`"
        :alt="item.name"
        style="width: 150px"
      />
      <div class="text-yellow6 text-lg font-bold">
        {{ item.name }}
      </div>
      {{ item.price }}
      <button type="button" @click="cart.addToCart()">Add item</button>
    </div>
  </div>

  <div>Item in cart : {{ cart.doubleCount }}</div>
</template>
