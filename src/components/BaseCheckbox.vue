<!-- src/components/BaseCheckbox.vue -->
<script setup lang="ts">
const { computed } = (window as any).Vue
const { ElCheckbox } = (window as any).ElementPlus

const props = defineProps<{
  modelValue?: boolean
  label?: string
  disabled?: boolean | string
}>()

const emit = defineEmits(['update:modelValue'])

const disabledBool = computed(() => props.disabled === true || props.disabled === 'true')
</script>

<template>
  <ElCheckbox
    :model-value="props.modelValue"
    :label="props.label"
    :disabled="disabledBool"
    @update:modelValue="val => emit('update:modelValue', val)"
  />
</template>

<style>
@import "element-plus/theme-chalk/el-checkbox.css";
</style>
