<!-- Message.vue -->
<script setup lang="ts">
const { ElMessage } = (window as any).ElementPlus;
const props = defineProps<{
  message: string;
  type?: string;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <ElMessage :type="props.type" :message="props.message" />
</template>
