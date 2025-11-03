<!-- BaseTooltip.vue -->
<script setup lang="ts">
const { ElTooltip } = (window as any).ElementPlus;
const props = defineProps<{ content: string; placement?: string }>();
</script>

<template>
  <ElTooltip :content="props.content" :placement="props.placement || 'top'">
    <slot />
  </ElTooltip>
</template>
