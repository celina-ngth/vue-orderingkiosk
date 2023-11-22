<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

function closeModal() {
  emit('update:modelValue', false)
}
</script>

<template>
  <div
    v-show="props.modelValue"
    class="fixed z-40 w-full h-full flex-col bg-black bg-opacity-50 inset-0"
    @click.self="closeModal"
  >
    <div class="z-50 w-1/2 h-1/2 bg-white m-a p-4 flex flex-col">
      <h3 class="flex justify-between items-center m-0">
        <slot name="header" />
        <button @click="closeModal">x</button>
      </h3>

      <div class="my-4 h-full"><slot /></div>

      <div><slot name="footer" /></div>
    </div>
  </div>
</template>
