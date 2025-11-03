<!-- DateTimePicker.vue -->
<script setup lang="ts">
const { ElDateTimePicker } = (window as any).ElementPlus;
const props = defineProps<{ modelValue: string | Date }>();
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <ElDateTimePicker v-model="props.modelValue" @update:modelValue="emit('update:modelValue')" />
</template>
