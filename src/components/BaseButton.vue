<script setup lang="ts">
const { computed, h } = window.Vue
const { ElButton, ElIcon } = window.ElementPlus
const { Loading, Edit, Delete, Lock, Plus, Search } = window.ElementPlusIconsVue

// 你可根據需求擴充這個 icon 對照表
const iconMap = { Loading, Edit, Delete, Lock, Plus, Search }

const props = defineProps<{
  type?: string
  class?: string
  name?: string
  loading?: boolean
  icon?: any
}>()

const emit = defineEmits(['click'])

const loadingBool = computed(() => props.loading === true || props.loading === 'true')

// ✅ 自動解析 icon
const resolvedIcon = computed(() => {
  // 若是字串，從 ElementPlusIconsVue 中查找
  if (typeof props.icon === 'string') {
    return iconMap[props.icon] || null
  }
  // 若是物件 (例如直接傳入 Edit component)
  if (typeof props.icon === 'object' || typeof props.icon === 'function') {
    return props.icon
  }
  return null
})
</script>

<template>
  <ElButton
    :class="props.class"
    :type="props.type"
    :disabled="loadingBool"
    @click.native.stop="emit('click')"
  >
    <!-- Loading 狀態 -->
    <ElIcon v-if="loadingBool"><Loading class="animate-spin" /></ElIcon>

    <!-- 有 icon -->
    <ElIcon v-else-if="resolvedIcon">
      <component :is="resolvedIcon" />
    </ElIcon>

    <!-- 顯示名稱 -->
    {{ loadingBool ? '' : props.name }}
  </ElButton>
</template>

<style>
@import "element-plus/theme-chalk/el-button.css";
@import "element-plus/theme-chalk/el-icon.css";
</style>
