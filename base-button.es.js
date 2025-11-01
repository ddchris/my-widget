import { defineComponent as d, createBlock as t, openBlock as n, unref as o, withCtx as i, createCommentVNode as c, renderSlot as r, createVNode as s, resolveDynamicComponent as u, defineCustomElement as f } from "vue";
import { ElButton as y, ElIcon as m } from "element-plus";
import { Loading as p } from "@element-plus/icons-vue";
const B = /* @__PURE__ */ d({
  __name: "BaseButton",
  props: {
    type: { type: String },
    loading: { type: Boolean },
    icon: { type: null }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (n(), t(o(y), {
      type: e.type,
      disabled: e.loading,
      onClick: a[0] || (a[0] = (C) => l.$emit("click"))
    }, {
      default: i(() => [
        e.loading ? (n(), t(o(m), { key: 0 }, {
          default: i(() => [
            s(o(p), { class: "animate-spin" })
          ]),
          _: 1
        })) : e.icon ? (n(), t(o(m), { key: 1 }, {
          default: i(() => [
            (n(), t(u(e.icon)))
          ]),
          _: 1
        })) : c("", !0),
        r(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "disabled"]));
  }
}), k = f(B);
customElements.define("base-button", k);
