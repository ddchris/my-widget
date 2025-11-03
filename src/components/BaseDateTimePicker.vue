<!-- BaseDateTimePicker.vue -->
<script setup lang="ts">
const { ElDateTimePicker } = (window as any).ElementPlus;
const props = defineProps<{ modelValue: string | Date }>();
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <ElDateTimePicker v-model="props.modelValue" @update:modelValue="emit('update:modelValue')" />
</template>

<style>
@import "element-plus/theme-chalk/el-date-picker-panel.css";
</style>



el-date-picker-panel.css
