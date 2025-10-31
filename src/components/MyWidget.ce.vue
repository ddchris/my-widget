<template>
  <div class="my-widget-root">
    <h3>Hi, I'm a Web Component</h3>
    <p>message: {{ message }}</p>
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, default: 'hello' }
  },
  methods: {
    onClick() {
      // 可以 dispatch 自訂事件，讓宿主偵聽
      this.$emit('widget-click', { time: Date.now() })
    }
  }
}
</script>

<style scoped>
.my-widget-root {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
}
</style>
