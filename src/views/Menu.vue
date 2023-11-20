<script setup>
import { computed } from 'vue'
import dataSource from '@/data.json'

const data = computed(() => dataSource.menus)
</script>

<template>
  <h1>Menu</h1>
  <div v-for="item in data" :key="item.id">
    <img :src="`/images/${item.image}`" :alt="item.name" style="width: 100px" />
    <strong>{{ item.name }}</strong>
    {{ item.price }}
  </div>
</template>
