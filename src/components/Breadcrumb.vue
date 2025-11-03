<!-- Breadcrumb.vue -->
<script setup lang="ts">
const { ElBreadcrumb, ElBreadcrumbItem } = (window as any).ElementPlus;
const props = defineProps<{ items: string[] }>();
</script>

<template>
  <ElBreadcrumb>
    <ElBreadcrumbItem v-for="(item, index) in props.items" :key="index">{{ item }}</ElBreadcrumbItem>
  </ElBreadcrumb>
</template>
