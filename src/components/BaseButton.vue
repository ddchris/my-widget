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

const loadingBool = computed(() => props.loading === true || props.loading === 'true')
</script>

<template>
  <!-- 事件觸發兩次不是 原生 click + Vue CE 事件冒泡同時觸發,所以用 @click.native.stop 停止冒泡 -->
  <ElButton :class="class" :type="type" :disabled="loadingBool" @click.native.stop="$emit('click')" >
    <ElIcon v-if="loading"><Loading class="animate-spin" /></ElIcon>
    <ElIcon v-else-if="icon"><component :is="icon" /></ElIcon>
    {{ message }}
    <slot/>
  </ElButton>
</template>

<style>
@import "element-plus/theme-chalk/el-button.css"; /* 直接 import 本地 CSS */
</style>
