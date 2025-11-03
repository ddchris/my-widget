<!-- BaseMessageBox.vue -->
<script setup lang="ts">
const { ElMessageBox } = (window as any).ElementPlus;
const props = defineProps<{
  title: string;
  message: string;
  type?: string;
}>();

const emit = defineEmits(['confirm', 'cancel']);
</script>

<template>
  <ElMessageBox
    :title="props.title"
    :message="props.message"
    :type="props.type || 'info'"
    @confirm="emit('confirm')"
    @cancel="emit('cancel')"
  />
</template>
