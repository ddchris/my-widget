<!-- src/components/BaseSelect.vue -->
<script setup lang="ts">
const { computed } = (window as any).Vue
const { ElSelect, ElOption } = (window as any).ElementPlus

const props = defineProps<{
  modelValue?: string | number
  placeholder?: string
  options: { value: string | number, label: string }[]
  disabled?: boolean | string
}>()

const emit = defineEmits(['update:modelValue'])

const disabledBool = computed(() => props.disabled === true || props.disabled === 'true')
</script>

<template>
  <ElSelect
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="disabledBool"
    @update:modelValue="val => emit('update:modelValue', val)"
  >
    <ElOption
      v-for="option in props.options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </ElSelect>
</template>

<style>
@import "element-plus/theme-chalk/el-select.css";
@import "element-plus/theme-chalk/el-option.css";
</style>
