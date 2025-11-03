<!-- Pagination.vue -->
<script setup lang="ts">
const { ElPagination } = (window as any).ElementPlus;

const props = defineProps<{
  total: number;
  pageSize: number;
  currentPage: number;
  layout?: string;
}>();

const emit = defineEmits(['update:currentPage']);
</script>

<template>
  <ElPagination
    :total="props.total"
    :page-size="props.pageSize"
    v-model:current-page="props.currentPage"
    :layout="props.layout || 'total, prev, pager, next, jumper'"
  />
</template>
