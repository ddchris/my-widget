<script setup lang="ts">
const { ElButton, ElIcon } = window.ElementPlus;
const { Loading } = window.ElementPlusIconsVue

defineProps<{
  type?: string
  class?: string
  message?: string
  loading?: boolean
  icon?: any
}>()

defineEmits(['click'])
</script>

<template>
  <ElButton :class="class" :type="type" :disabled="loading" @click="$emit('click')">
    <ElIcon v-if="loading"><Loading class="animate-spin" /></ElIcon>
    <ElIcon v-else-if="icon"><component :is="icon" /></ElIcon>
    {{ message }}
    <slot/>
  </ElButton>
</template>

<style>
@import "element-plus/theme-chalk/el-button.css"; /* 直接 import 本地 CSS */
</style>
