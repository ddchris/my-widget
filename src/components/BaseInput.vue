<script setup lang="ts">
const { ElInput, ElIcon } = (window as any).ElementPlus
const { ref, computed, defineProps, defineEmits, defineModel } = (window as any).Vue
// @ts-nocheck
// 定义 props 和 emits
/* eslint-disable */
/* prettier-ignore */
const props = defineProps<{
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean | string
  clearable?: boolean | string
  prefixIcon?: any
  suffixIcon?: any
  type?: string
}>()

const emit = defineEmits(['focus', 'blur', 'change']) // 增加 update:modelValue 事件

// 使用 defineModel 來處理 v-model 綁定
const model = defineModel(props.modelValue)

// 计算 clearable 和 disabled 的布尔值
const clearableBool = computed(() => props.clearable === true || props.clearable === 'true')
const disabledBool = computed(() => props.disabled === true || props.disabled === 'true')
</script>

<template>
  <ElInput
    v-model="model"
    :placeholder="props.placeholder"
    :disabled="disabledBool"
    :clearable="clearableBool"
    :type="props.type"
    >
    <!-- 前置 icon -->
    <template #prefix v-if="props.prefixIcon">
      <ElIcon><component :is="props.prefixIcon" /></ElIcon>
    </template>

    <!-- 后置 icon -->
    <template #suffix v-if="props.suffixIcon">
      <ElIcon><component :is="props.suffixIcon" /></ElIcon>
    </template>
  </ElInput>
</template>

<style>
@import "element-plus/theme-chalk/el-input.css";
@import "element-plus/theme-chalk/el-icon.css";
</style>
