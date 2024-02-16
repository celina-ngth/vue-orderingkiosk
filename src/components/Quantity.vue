<script setup>
import { ref } from 'vue'

const quantity = ref(1)

const emit = defineEmits(['update:qty'])

function increment() {
  quantity.value++
  emit('update:qty', quantity.value)
}

function decrement() {
  quantity.value--
  emit('update:qty', quantity.value)
}
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button type="button" @click="decrement()" class="mt-2 p-2">-</button>
    <div>{{ quantity }}</div>
    <button type="button" @click="increment()" class="mt-2 p-2">+</button>
  </div>
</template>
