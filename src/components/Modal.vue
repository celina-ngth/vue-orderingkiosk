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
    class="fixed z-40 w-full h-full bg-black bg-opacity-50 inset-0 flex items-center"
    @click.self="closeModal"
  >
    <div class="z-50 bg-white m-a p-4 flex flex-col rounded mx-auto min-w-md">
      <h3 class="flex justify-between items-center m-0">
        <slot name="header" />
        <button @click="closeModal">x</button>
      </h3>

      <div class="my-4 h-full overflow-scroll"><slot /></div>

      <div><slot name="footer" /></div>
    </div>
  </div>
</template>
