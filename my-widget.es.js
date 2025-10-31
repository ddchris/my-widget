import { createElementBlock as r, openBlock as c, createElementVNode as n, toDisplayString as m, defineCustomElement as a } from "vue";
const f = ".my-widget-root[data-v-f40ff819]{border:1px solid #ddd;padding:12px;border-radius:8px;display:inline-block}", p = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [s, i] of e)
    t[s] = i;
  return t;
}, g = {
  props: {
    message: { type: String, default: "hello" }
  },
  methods: {
    onClick() {
      this.$emit("widget-click", { time: Date.now() });
    }
  }
}, u = { class: "my-widget-root" };
function y(o, e, t, s, i, d) {
  return c(), r("div", u, [
    e[1] || (e[1] = n("h3", null, "Hi, I'm a Web Component", -1)),
    n("p", null, "message: " + m(t.message), 1),
    n("button", {
      onClick: e[0] || (e[0] = (...l) => d.onClick && d.onClick(...l))
    }, "Click")
  ]);
}
const _ = /* @__PURE__ */ p(g, [["render", y], ["styles", [f]], ["__scopeId", "data-v-f40ff819"]]), k = a(_);
customElements.get("my-widget") || customElements.define("my-widget", k);
export {
  k as default
};
