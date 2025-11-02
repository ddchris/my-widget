<script setup lang="ts">
const { computed } = (window as any).Vue
const { ElButton, ElIcon } = (window as any).ElementPlus
const { Loading } = (window as any).ElementPlusIconsVue


const props = defineProps<{
  type?: string
  class?: string
  name?: string
  loading?: boolean | string
  icon?: any
}>()

const emit = defineEmits(['click'])

const loadingBool = computed(() => props.loading === true || props.loading === 'true')

// ✅ 自動解析 icon
</script>

<template>
  <!-- .stop 就是為了阻止 Element Plus 內部事件再往上冒泡
  這樣外層就不會收到重複事件 -->
  <ElButton
    :class="props.class"
    :type="props.type"
    :disabled="loadingBool"
    @click.stop="emit('click')"
  >
    <!-- Loading 狀態 -->
    <ElIcon v-if="loadingBool"><Loading class="animate-spin" /></ElIcon>

    <!-- 有 icon -->
    <ElIcon v-else-if="props.icon" class="icon">
      <component :is="props.icon" />
    </ElIcon>

    <!-- 顯示名稱 -->
    {{ loadingBool ? '' : props.name }}
  </ElButton>
</template>

<style>
@import "element-plus/theme-chalk/el-button.css";
@import "element-plus/theme-chalk/el-icon.css";

/* Tailwind animate-spin 自訂版 */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
.icon {
  margin-right: 0.5em;
}
</style>
