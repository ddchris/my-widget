<script setup lang="ts">
const { computed } = window.Vue
const { ElInput, ElIcon } = window.ElementPlus


const props = defineProps<{
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean | string
  clearable?: boolean | string
  prefixIcon?: string
  suffixIcon?: string
  type?: string
}>()

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

// 把字串 'true' 也視為 true
const disabledBool = computed(() => props.disabled === true || props.disabled === 'true')
const clearableBool = computed(() => props.clearable === true || props.clearable === 'true')
</script>

<template>
  <!-- .stop 就是為了阻止 Element Plus 內部事件再往上冒泡
  這樣外層就不會收到重複事件 -->
  <ElInput
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="disabledBool"
    :clearable="clearableBool"
    :type="props.type"
    @update:modelValue.stop="val => emit('update:modelValue', val)"
    @focus.stop="emit('focus')"
    @blur.stop="emit('blur')"
    @change.stop="emit('change')"
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
