<!-- // base-input.vue (最終修正：同時使用 Vue emit 和 原生 CustomEvent) -->
<script setup lang="ts">
// 僅需 ElIcon 來自 ElementPlus (用於圖示)
const { ElIcon } = (window as any).ElementPlus
const { computed, defineProps, defineEmits, getCurrentInstance } = (window as any).Vue 
// 🚨 新增：getCurrentInstance 用於獲取 Custom Element 實例

// 1. 設置 Props (接收 v-model 的值)
const props = defineProps<{
    modelValue?: string | number // 接收 v-model 的值
    placeholder?: string
    disabled?: boolean | string
    clearable?: boolean | string
    prefixIcon?: any
    suffixIcon?: any
    type?: string
    readonly?: string | number
}>()

// 2. 設置 Emits (發送更新事件)
const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

// 獲取當前組件實例 (用於 Custom Element 實例訪問)
const instance = getCurrentInstance()

// 3. 處理原生的 <input> 事件
function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    
    // 步驟 A: 使用 Vue 內建的 emit (這是標準做法)
    emit('update:modelValue', newValue); 

    // 步驟 B: 🚨 強制發射 Custom Event (解決 Custom Element/Shadow DOM 隔離問題)
    if (instance && instance.appContext.config.isCustomElement) {
        // 創建一個 Custom Event，名稱必須與 Vue 期望的事件名稱相同
        const customEvent = new CustomEvent('update:modelValue', {
            detail: newValue,
            composed: true, // 允許事件穿透 Shadow DOM 邊界
            bubbles: true, // 允許事件向上傳遞
        });
        
        // 在 Custom Element 實例上發射事件
        instance.vnode.el.dispatchEvent(customEvent);
    }
}

// 處理原生的 <input> change 事件
function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    
    emit('change', newValue); 
}

// 處理焦點事件
function handleFocus(event: Event) {
    emit('focus', event);
}

function handleBlur(event: Event) {
    emit('blur', event);
}

// 計算布林值
const clearableBool = computed(() => props.clearable === true || props.clearable === 'true')
const disabledBool = computed(() => props.disabled === true || props.disabled === 'true')
const readonlyBool = computed(() => props.readonly === true || props.readonly === 'true')

// 處理清除按鈕點擊
function handleClear() {
    emit('update:modelValue', ''); // 清除值
    // 🚨 補充：手動觸發一次 Custom Event 以確保清除動作能更新宿主
    if (instance && instance.vnode.el) {
        const customEvent = new CustomEvent('update:modelValue', {
            detail: '',
            composed: true,
            bubbles: true,
        });
        instance.vnode.el.dispatchEvent(customEvent);
    }
}

// 判斷是否顯示清除按鈕
const showClear = computed(() => props.modelValue !== null && props.modelValue !== undefined && props.modelValue !== '' && clearableBool.value && !disabledBool.value && !readonlyBool.value);
</script>

<template>
  <div 
    class="el-input" 
    :class="{ 'is-disabled': disabledBool }"
  >
    <div 
      class="el-input__wrapper" 
      tabindex="-1"
      @click.stop
    >
      <span v-if="props.prefixIcon" class="el-input__prefix">
        <span class="el-input__prefix-inner">
          <ElIcon><component :is="props.prefixIcon" /></ElIcon>
        </span>
      </span>

      <input 
        class="el-input__inner" 
        :value="props.modelValue" 
        @input="handleInput" 
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        :type="props.type || 'text'"
        :placeholder="props.placeholder"
        :disabled="disabledBool"
        :readonly="readonlyBool"
        autocomplete="off"
        tabindex="0"
      >
      
      <span v-if="props.suffixIcon || showClear" class="el-input__suffix">
        <span class="el-input__suffix-inner">
          <ElIcon v-if="showClear" class="el-input__clear" @click.stop="handleClear">
            <component :is="props.clearIcon || 'Close'" /> 
          </ElIcon>
          
          <ElIcon v-else-if="props.suffixIcon">
            <component :is="props.suffixIcon" />
          </ElIcon>
        </span>
      </span>
    </div>
  </div>
</template>

<style>
/* 必須引入 Element Plus 的樣式，確保這些類名 (el-input__wrapper, el-input__inner, etc.) 有效 */
@import "element-plus/theme-chalk/el-input.css";
@import "element-plus/theme-chalk/el-icon.css";
</style>