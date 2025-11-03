<!-- Tabs.vue -->
<script setup lang="ts">
const { ElTabs, ElTabPane } = (window as any).ElementPlus;
const props = defineProps<{
  activeName: string;
  tabs: { label: string; name: string }[];
}>();
</script>

<template>
  <ElTabs v-model:active-name="props.activeName">
    <ElTabPane v-for="tab in props.tabs" :key="tab.name" :label="tab.label" :name="tab.name" />
  </ElTabs>
</template>
