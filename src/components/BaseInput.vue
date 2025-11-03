<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue'

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

// 當 modelValue 改變時，更新本地值
const inputValue = ref(props.modelValue)

// 監聽 modelValue 變化，並同步更新
watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
})

onMounted(() => {
  // 綁定輸入事件，當值改變時發送 update:modelValue 事件
  const inputEl = document.querySelector('input')
  if (inputEl) {
    inputEl.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement
      console.log('update:modelValue', target.value)
      emit('update:modelValue', target.value) // 更新宿主 Vue 的值
    })
  }
})
</script>

<template>
  <ElInput
    :model-value="inputValue"
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

/* 簡單修飾（可自行調整） */
:host {
  display: inline-block;
  width: 100%;
}
</style>
