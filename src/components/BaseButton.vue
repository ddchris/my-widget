<script setup lang="ts">
import { ElButton, ElIcon } from 'element-plus'
import { Loading } from '@element-plus/icons-vue'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/icon/style/css'

defineProps<{
  type?: string
  loading?: boolean
  icon?: any
}>()

defineEmits(['click'])
</script>

<template>
  <ElButton :type="type" :disabled="loading" @click="$emit('click')">
    <ElIcon v-if="loading"><Loading class="animate-spin" /></ElIcon>
    <ElIcon v-else-if="icon"><component :is="icon" /></ElIcon>
    <slot />
  </ElButton>
</template>
