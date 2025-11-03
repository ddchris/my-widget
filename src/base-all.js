const { defineCustomElement } = window.Vue;

import BaseButton from './components/BaseButton.vue';
import BaseInput from './components/BaseInput.vue';
import BasePagination from './components/BasePagination.vue';
import BaseBreadcrumb from './components/BaseBreadcrumb.vue';
import BaseTabs from './components/BaseTabs.vue';
import BaseDateTimePicker from './components/BaseDateTimePicker.vue';
import BaseTooltip from './components/BaseTooltip.vue';
import BaseMessage from './components/BaseMessage.vue';
import BaseMessageBox from './components/BaseMessageBox.vue';

import 'element-plus/theme-chalk/el-button.css';
import 'element-plus/theme-chalk/el-input.css';
import 'element-plus/theme-chalk/el-pagination.css';
import 'element-plus/theme-chalk/el-breadcrumb.css';
import 'element-plus/theme-chalk/el-tabs.css';
import 'element-plus/theme-chalk/el-date-picker.css';
import 'element-plus/theme-chalk/el-date-picker-panel.css';
import 'element-plus/theme-chalk/el-tooltip.css';
import 'element-plus/theme-chalk/el-message-box.css';

// Convert SFC to custom element constructor
const BaseButtonElement = defineCustomElement({...BaseButton, shadow: true});
const BaseInputElement = defineCustomElement({ ...BaseInput, shadow: true });
const BasePaginationElement = defineCustomElement({ ...BasePagination, shadow: true });
const BaseBreadcrumbElement = defineCustomElement({ ...BaseBreadcrumb, shadow: true });
const BaseTabsElement = defineCustomElement({ ...BaseTabs, shadow: true });
const BaseDateTimePickerElement = defineCustomElement({ ...BaseDateTimePicker, shadow: true });
const BaseTooltipElement = defineCustomElement({ ...BaseTooltip, shadow: true });
const BaseMessageElement = defineCustomElement({ ...BaseMessage, shadow: true });
const BaseMessageBoxElement = defineCustomElement({ ...BaseMessageBox, shadow: true });

// Register custom elements (tag name must contain '-')
if (!customElements.get('base-button')) {
  customElements.define('base-button', BaseButtonElement);
}
if (!customElements.get('base-input')) {
  customElements.define('base-input', BaseInputElement);
}
if (!customElements.get('base-pagination')) {
  customElements.define('base-pagination', BasePaginationElement);
}
if (!customElements.get('base-breadcrumb')) {
  customElements.define('base-breadcrumb', BaseBreadcrumbElement);
}
if (!customElements.get('base-tabs')) {
  customElements.define('base-tabs', BaseTabsElement);
}
if (!customElements.get('base-date-picker')) {
  customElements.define('base-date-picker', DatePickerElement);
}
if (!customElements.get('base-date-time-picker')) {
  customElements.define('base-date-time-picker', BaseDateTimePickerElement);
}
if (!customElements.get('base-tooltip')) {
  customElements.define('base-tooltip', TooltipElement);
}
if (!customElements.get('base-message')) {
  customElements.define('base-message', BaseMessageElement);
}
if (!customElements.get('base-message-box')) {
  customElements.define('base-message-box', BaseMessageBoxElement);
}

// Optionally export for dynamic import or JS use
export default { 
  BaseButtonElement, 
  BaseInputElement, 
  PaginationElement,
  BreadcrumbElement, 
  BaseTabsElement, 
  BaseDatePickerElement,
  BaseDateTimePickerElement, 
  BaseTooltipElement, 
  BaseMessageElement, 
  BaseMessageBoxElement 
};
