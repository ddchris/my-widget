<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean | string
  clearable?: boolean | string
  prefixIcon?: any
  suffixIcon?: any
  type?: string
}>()

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

// 綁定 modelValue
const inputValue = ref(props.modelValue)
</script>

<template>
  <ElInput
    v-model="inputValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :clearable="props.clearable"
    :type="props.type"
  >
    <!-- 前置 icon -->
    <template #prefix v-if="props.prefixIcon">
      <ElIcon><component :is="props.prefixIcon" /></ElIcon>
    </template>

    <!-- 後置 icon -->
    <template #suffix v-if="props.suffixIcon">
      <ElIcon><component :is="props.suffixIcon" /></ElIcon>
    </template>
  </ElInput>
</template>

<style>
@import "element-plus/theme-chalk/el-input.css";
@import "element-plus/theme-chalk/el-icon.css";
</style>
