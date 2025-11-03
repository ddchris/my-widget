const { defineCustomElement } = window.Vue;

import BaseButton from './components/BaseButton.vue';
import BaseInput from './components/BaseInput.vue';
import Pagination from './components/Pagination.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Tabs from './components/Tabs.vue';
import DatePicker from './components/DatePicker.vue';
import DateTimePicker from './components/DateTimePicker.vue';
import Tooltip from './components/Tooltip.vue';
import Message from './components/Message.vue';
import MessageBox from './components/MessageBox.vue';

import 'element-plus/theme-chalk/el-button.css';
import 'element-plus/theme-chalk/el-input.css';
import 'element-plus/theme-chalk/el-pagination.css';
import 'element-plus/theme-chalk/el-breadcrumb.css';
import 'element-plus/theme-chalk/el-tabs.css';
import 'element-plus/theme-chalk/el-date-picker.css';
import 'element-plus/theme-chalk/el-date-time-picker.css';
import 'element-plus/theme-chalk/el-tooltip.css';
import 'element-plus/theme-chalk/el-message-box.css';

// Convert SFC to custom element constructor
const BaseButtonElement = defineCustomElement({...BaseButton, shadow: true});
const BaseInputElement = defineCustomElement({ ...BaseInput, shadow: true });
const PaginationElement = defineCustomElement({ ...Pagination, shadow: true });
const BreadcrumbElement = defineCustomElement({ ...Breadcrumb, shadow: true });
const TabsElement = defineCustomElement({ ...Tabs, shadow: true });
const DatePickerElement = defineCustomElement({ ...DatePicker, shadow: true });
const DateTimePickerElement = defineCustomElement({ ...DateTimePicker, shadow: true });
const TooltipElement = defineCustomElement({ ...Tooltip, shadow: true });
const MessageElement = defineCustomElement({ ...Message, shadow: true });
const MessageBoxElement = defineCustomElement({ ...MessageBox, shadow: true });

// Register custom elements (tag name must contain '-')
if (!customElements.get('base-button')) {
  customElements.define('base-button', BaseButtonElement);
}
if (!customElements.get('base-input')) {
  customElements.define('base-input', BaseInputElement);
}
if (!customElements.get('base-pagination')) {
  customElements.define('base-pagination', PaginationElement);
}
if (!customElements.get('base-breadcrumb')) {
  customElements.define('base-breadcrumb', BreadcrumbElement);
}
if (!customElements.get('base-tabs')) {
  customElements.define('base-tabs', TabsElement);
}
if (!customElements.get('base-date-picker')) {
  customElements.define('base-date-picker', DatePickerElement);
}
if (!customElements.get('base-date-time-picker')) {
  customElements.define('base-date-time-picker', DateTimePickerElement);
}
if (!customElements.get('base-tooltip')) {
  customElements.define('base-tooltip', TooltipElement);
}
if (!customElements.get('base-message')) {
  customElements.define('base-message', MessageElement);
}
if (!customElements.get('base-message-box')) {
  customElements.define('base-message-box', MessageBoxElement);
}

// Optionally export for dynamic import or JS use
export default { 
  BaseButtonElement, 
  BaseInputElement, 
  PaginationElement,
  BreadcrumbElement, 
  TabsElement, 
  DatePickerElement,
  DateTimePickerElement, 
  TooltipElement, 
  MessageElement, 
  MessageBoxElement 
};
