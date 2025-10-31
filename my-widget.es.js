/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {}, Ye = [], ve = () => {
}, An = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cs = (e) => e.startsWith("onUpdate:"), G = Object.assign, ws = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Di = Object.prototype.hasOwnProperty, D = (e, t) => Di.call(e, t), O = Array.isArray, ze = (e) => Wt(e) === "[object Map]", Pn = (e) => Wt(e) === "[object Set]", R = (e) => typeof e == "function", J = (e) => typeof e == "string", je = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", On = (e) => (K(e) || R(e)) && R(e.then) && R(e.catch), Rn = Object.prototype.toString, Wt = (e) => Rn.call(e), Hi = (e) => Wt(e).slice(8, -1), Bt = (e) => Wt(e) === "[object Object]", Ts = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ct = /* @__PURE__ */ Ss(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, ji = /-\w/g, ue = Kt(
  (e) => e.replace(ji, (t) => t.slice(1).toUpperCase())
), Li = /\B([A-Z])/g, fe = Kt(
  (e) => e.replace(Li, "-$1").toLowerCase()
), Mn = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = Kt(
  (e) => e ? `on${Mn(e)}` : ""
), Ke = (e, t) => !Object.is(e, t), kt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, In = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, $i = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zs = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const qt = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Es(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = J(n) ? Bi(n) : Es(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (J(e) || K(e))
    return e;
}
const Vi = /;(?![^(]*\))/g, Ui = /:([^]+)/, Wi = /\/\*[^]*?\*\//g;
function Bi(e) {
  const t = {};
  return e.replace(Wi, "").split(Vi).forEach((s) => {
    if (s) {
      const n = s.split(Ui);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function As(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = As(e[s]);
      n && (t += n + " ");
    }
  else if (K(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Ki = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qi = /* @__PURE__ */ Ss(Ki);
function Fn(e) {
  return !!e || e === "";
}
const Nn = (e) => !!(e && e.__v_isRef === !0), Dn = (e) => J(e) ? e : e == null ? "" : O(e) || K(e) && (e.toString === Rn || !R(e.toString)) ? Nn(e) ? Dn(e.value) : JSON.stringify(e, Hn, 2) : String(e), Hn = (e, t) => Nn(t) ? Hn(e, t.value) : ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[es(n, r) + " =>"] = i, s),
    {}
  )
} : Pn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => es(s))
} : je(t) ? es(t) : K(t) && !O(t) && !Bt(t) ? String(t) : t, es = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class Gi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ji() {
  return ie;
}
let V;
const ts = /* @__PURE__ */ new WeakSet();
class jn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ts.has(this) && (ts.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $n(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zs(this), Vn(this);
    const t = V, s = ae;
    V = this, ae = !0;
    try {
      return this.fn();
    } finally {
      Un(this), V = t, ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rs(t);
      this.deps = this.depsTail = void 0, Zs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    us(this) && this.run();
  }
  get dirty() {
    return us(this);
  }
}
let Ln = 0, ft, ut;
function $n(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ut, ut = e;
    return;
  }
  e.next = ft, ft = e;
}
function Ps() {
  Ln++;
}
function Os() {
  if (--Ln > 0)
    return;
  if (ut) {
    let t = ut;
    for (ut = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ft; ) {
    let t = ft;
    for (ft = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Vn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Un(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Rs(n), Yi(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mt) || (e.globalVersion = mt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !us(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = ae;
  V = e, ae = !0;
  try {
    Vn(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ke(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    V = s, ae = n, Un(e), e.flags &= -3;
  }
}
function Rs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Rs(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Yi(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ae = !0;
const Bn = [];
function Pe() {
  Bn.push(ae), ae = !1;
}
function Oe() {
  const e = Bn.pop();
  ae = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let mt = 0;
class zi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Kn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!V || !ae || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new zi(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, qn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, mt++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function qn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        qn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const as = /* @__PURE__ */ new WeakMap(), qe = Symbol(
  ""
), hs = Symbol(
  ""
), bt = Symbol(
  ""
);
function z(e, t, s) {
  if (ae && V) {
    let n = as.get(e);
    n || as.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Kn()), i.map = n, i.key = s), i.track();
  }
}
function Ae(e, t, s, n, i, r) {
  const o = as.get(e);
  if (!o) {
    mt++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(c);
  else {
    const f = O(e), d = f && Ts(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, C) => {
        (C === "length" || C === bt || !je(C) && C >= a) && c(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && c(o.get(s)), d && c(o.get(bt)), t) {
        case "add":
          f ? d && c(o.get("length")) : (c(o.get(qe)), ze(e) && c(o.get(hs)));
          break;
        case "delete":
          f || (c(o.get(qe)), ze(e) && c(o.get(hs)));
          break;
        case "set":
          ze(e) && c(o.get(qe));
          break;
      }
  }
  Os();
}
function Ge(e) {
  const t = j(e);
  return t === e ? t : (z(t, "iterate", bt), Se(e) ? t : t.map(le));
}
function Ms(e) {
  return z(e = j(e), "iterate", bt), e;
}
const Xi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, le);
  },
  concat(...e) {
    return Ge(this).concat(
      ...e.map((t) => O(t) ? Ge(t) : t)
    );
  },
  entries() {
    return ss(this, "entries", (e) => (e[1] = le(e[1]), e));
  },
  every(e, t) {
    return we(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return we(this, "filter", e, t, (s) => s.map(le), arguments);
  },
  find(e, t) {
    return we(this, "find", e, t, le, arguments);
  },
  findIndex(e, t) {
    return we(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return we(this, "findLast", e, t, le, arguments);
  },
  findLastIndex(e, t) {
    return we(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return we(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ns(this, "includes", e);
  },
  indexOf(...e) {
    return ns(this, "indexOf", e);
  },
  join(e) {
    return Ge(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ns(this, "lastIndexOf", e);
  },
  map(e, t) {
    return we(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rt(this, "pop");
  },
  push(...e) {
    return rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Qs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qs(this, "reduceRight", e, t);
  },
  shift() {
    return rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return we(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rt(this, "splice", e);
  },
  toReversed() {
    return Ge(this).toReversed();
  },
  toSorted(e) {
    return Ge(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ge(this).toSpliced(...e);
  },
  unshift(...e) {
    return rt(this, "unshift", e);
  },
  values() {
    return ss(this, "values", le);
  }
};
function ss(e, t, s) {
  const n = Ms(e), i = n[t]();
  return n !== e && !Se(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const Zi = Array.prototype;
function we(e, t, s, n, i, r) {
  const o = Ms(e), c = o !== e && !Se(e), f = o[t];
  if (f !== Zi[t]) {
    const p = f.apply(e, r);
    return c ? le(p) : p;
  }
  let d = s;
  o !== e && (c ? d = function(p, C) {
    return s.call(this, le(p), C, e);
  } : s.length > 2 && (d = function(p, C) {
    return s.call(this, p, C, e);
  }));
  const a = f.call(o, d, n);
  return c && i ? i(a) : a;
}
function Qs(e, t, s, n) {
  const i = Ms(e);
  let r = s;
  return i !== e && (Se(e) ? s.length > 3 && (r = function(o, c, f) {
    return s.call(this, o, c, f, e);
  }) : r = function(o, c, f) {
    return s.call(this, o, le(c), f, e);
  }), i[t](r, ...n);
}
function ns(e, t, s) {
  const n = j(e);
  z(n, "iterate", bt);
  const i = n[t](...s);
  return (i === -1 || i === !1) && Ds(s[0]) ? (s[0] = j(s[0]), n[t](...s)) : i;
}
function rt(e, t, s = []) {
  Pe(), Ps();
  const n = j(e)[t].apply(e, s);
  return Os(), Oe(), n;
}
const Qi = /* @__PURE__ */ Ss("__proto__,__v_isRef,__isVue"), Gn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
);
function ki(e) {
  je(e) || (e = String(e));
  const t = j(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Jn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (i ? r ? fr : Zn : r ? Xn : zn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = O(t);
    if (!i) {
      let f;
      if (o && (f = Xi[s]))
        return f;
      if (s === "hasOwnProperty")
        return ki;
    }
    const c = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      te(t) ? t : n
    );
    if ((je(s) ? Gn.has(s) : Qi(s)) || (i || z(t, "get", s), r))
      return c;
    if (te(c)) {
      const f = o && Ts(s) ? c : c.value;
      return i && K(f) ? ps(f) : f;
    }
    return K(c) ? i ? ps(c) : Fs(c) : c;
  }
}
class Yn extends Jn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    if (!this._isShallow) {
      const f = Qe(r);
      if (!Se(n) && !Qe(n) && (r = j(r), n = j(n)), !O(t) && te(r) && !te(n))
        return f || (r.value = n), !0;
    }
    const o = O(t) && Ts(s) ? Number(s) < t.length : D(t, s), c = Reflect.set(
      t,
      s,
      n,
      te(t) ? t : i
    );
    return t === j(i) && (o ? Ke(n, r) && Ae(t, "set", s, n) : Ae(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = D(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ae(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!je(s) || !Gn.has(s)) && z(t, "has", s), n;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      O(t) ? "length" : qe
    ), Reflect.ownKeys(t);
  }
}
class er extends Jn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const tr = /* @__PURE__ */ new Yn(), sr = /* @__PURE__ */ new er(), nr = /* @__PURE__ */ new Yn(!0);
const ds = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function ir(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = j(i), o = ze(r), c = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = i[e](...n), a = s ? ds : t ? gs : le;
    return !t && z(
      r,
      "iterate",
      f ? hs : qe
    ), {
      // iterator protocol
      next() {
        const { value: p, done: C } = d.next();
        return C ? { value: p, done: C } : {
          value: c ? [a(p[0]), a(p[1])] : a(p),
          done: C
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Rt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rr(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = j(r), c = j(i);
      e || (Ke(i, c) && z(o, "get", i), z(o, "get", c));
      const { has: f } = Ot(o), d = t ? ds : e ? gs : le;
      if (f.call(o, i))
        return d(r.get(i));
      if (f.call(o, c))
        return d(r.get(c));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && z(j(i), "iterate", qe), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = j(r), c = j(i);
      return e || (Ke(i, c) && z(o, "has", i), z(o, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const o = this, c = o.__v_raw, f = j(c), d = t ? ds : e ? gs : le;
      return !e && z(f, "iterate", qe), c.forEach((a, p) => i.call(r, d(a), d(p), o));
    }
  };
  return G(
    s,
    e ? {
      add: Rt("add"),
      set: Rt("set"),
      delete: Rt("delete"),
      clear: Rt("clear")
    } : {
      add(i) {
        !t && !Se(i) && !Qe(i) && (i = j(i));
        const r = j(this);
        return Ot(r).has.call(r, i) || (r.add(i), Ae(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Se(r) && !Qe(r) && (r = j(r));
        const o = j(this), { has: c, get: f } = Ot(o);
        let d = c.call(o, i);
        d || (i = j(i), d = c.call(o, i));
        const a = f.call(o, i);
        return o.set(i, r), d ? Ke(r, a) && Ae(o, "set", i, r) : Ae(o, "add", i, r), this;
      },
      delete(i) {
        const r = j(this), { has: o, get: c } = Ot(r);
        let f = o.call(r, i);
        f || (i = j(i), f = o.call(r, i)), c && c.call(r, i);
        const d = r.delete(i);
        return f && Ae(r, "delete", i, void 0), d;
      },
      clear() {
        const i = j(this), r = i.size !== 0, o = i.clear();
        return r && Ae(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = ir(i, e, t);
  }), s;
}
function Is(e, t) {
  const s = rr(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    D(s, i) && i in n ? s : n,
    i,
    r
  );
}
const or = {
  get: /* @__PURE__ */ Is(!1, !1)
}, lr = {
  get: /* @__PURE__ */ Is(!1, !0)
}, cr = {
  get: /* @__PURE__ */ Is(!0, !1)
};
const zn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap();
function ur(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ar(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ur(Hi(e));
}
function Fs(e) {
  return Qe(e) ? e : Ns(
    e,
    !1,
    tr,
    or,
    zn
  );
}
function hr(e) {
  return Ns(
    e,
    !1,
    nr,
    lr,
    Xn
  );
}
function ps(e) {
  return Ns(
    e,
    !0,
    sr,
    cr,
    Zn
  );
}
function Ns(e, t, s, n, i) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ar(e);
  if (r === 0)
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const c = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, c), c;
}
function at(e) {
  return Qe(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qe(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function dr(e) {
  return !D(e, "__v_skip") && Object.isExtensible(e) && In(e, "__v_skip", !0), e;
}
const le = (e) => K(e) ? Fs(e) : e, gs = (e) => K(e) ? ps(e) : e;
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Qn(e) {
  return te(e) ? e.value : e;
}
const pr = {
  get: (e, t, s) => t === "__v_raw" ? e : Qn(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return te(i) && !te(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function kn(e) {
  return at(e) ? e : new Proxy(e, pr);
}
class gr {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Kn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return $n(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function _r(e, t, s = !1) {
  let n, i;
  return R(e) ? n = e : (n = e.get, i = e.set), new gr(n, i, s);
}
const Mt = {}, Dt = /* @__PURE__ */ new WeakMap();
let Be;
function mr(e, t = !1, s = Be) {
  if (s) {
    let n = Dt.get(s);
    n || Dt.set(s, n = []), n.push(e);
  }
}
function br(e, t, s = U) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: c, call: f } = s, d = (A) => i ? A : Se(A) || i === !1 || i === 0 ? De(A, 1) : De(A);
  let a, p, C, w, M = !1, F = !1;
  if (te(e) ? (p = () => e.value, M = Se(e)) : at(e) ? (p = () => d(e), M = !0) : O(e) ? (F = !0, M = e.some((A) => at(A) || Se(A)), p = () => e.map((A) => {
    if (te(A))
      return A.value;
    if (at(A))
      return d(A);
    if (R(A))
      return f ? f(A, 2) : A();
  })) : R(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (C) {
      Pe();
      try {
        C();
      } finally {
        Oe();
      }
    }
    const A = Be;
    Be = a;
    try {
      return f ? f(e, 3, [w]) : e(w);
    } finally {
      Be = A;
    }
  } : p = ve, t && i) {
    const A = p, Y = i === !0 ? 1 / 0 : i;
    p = () => De(A(), Y);
  }
  const X = Ji(), N = () => {
    a.stop(), X && X.active && ws(X.effects, a);
  };
  if (r && t) {
    const A = t;
    t = (...Y) => {
      A(...Y), N();
    };
  }
  let W = F ? new Array(e.length).fill(Mt) : Mt;
  const q = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const Y = a.run();
        if (i || M || (F ? Y.some((Me, he) => Ke(Me, W[he])) : Ke(Y, W))) {
          C && C();
          const Me = Be;
          Be = a;
          try {
            const he = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              W === Mt ? void 0 : F && W[0] === Mt ? [] : W,
              w
            ];
            W = Y, f ? f(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            );
          } finally {
            Be = Me;
          }
        }
      } else
        a.run();
  };
  return c && c(q), a = new jn(p), a.scheduler = o ? () => o(q, !1) : q, w = (A) => mr(A, !1, a), C = a.onStop = () => {
    const A = Dt.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const Y of A) Y();
      Dt.delete(a);
    }
  }, t ? n ? q(!0) : W = a.run() : o ? o(q.bind(null, !0), !0) : a.run(), N.pause = a.pause.bind(a), N.resume = a.resume.bind(a), N.stop = N, N;
}
function De(e, t = 1 / 0, s) {
  if (t <= 0 || !K(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, te(e))
    De(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      De(e[n], t, s);
  else if (Pn(e) || ze(e))
    e.forEach((n) => {
      De(n, t, s);
    });
  else if (Bt(e)) {
    for (const n in e)
      De(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && De(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function St(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Gt(i, t, s);
  }
}
function Ce(e, t, s, n) {
  if (R(e)) {
    const i = St(e, t, s, n);
    return i && On(i) && i.catch((r) => {
      Gt(r, t, s);
    }), i;
  }
  if (O(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ce(e[r], t, s, n));
    return i;
  }
}
function Gt(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || U;
  if (t) {
    let c = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Pe(), St(r, null, 10, [
        e,
        f,
        d
      ]), Oe();
      return;
    }
  }
  yr(e, s, i, n, o);
}
function yr(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const k = [];
let be = -1;
const Xe = [];
let Fe = null, Je = 0;
const ei = /* @__PURE__ */ Promise.resolve();
let Ht = null;
function ti(e) {
  const t = Ht || ei;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xr(e) {
  let t = be + 1, s = k.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = k[n], r = yt(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Hs(e) {
  if (!(e.flags & 1)) {
    const t = yt(e), s = k[k.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yt(s) ? k.push(e) : k.splice(xr(t), 0, e), e.flags |= 1, si();
  }
}
function si() {
  Ht || (Ht = ei.then(ii));
}
function vr(e) {
  O(e) ? Xe.push(...e) : Fe && e.id === -1 ? Fe.splice(Je + 1, 0, e) : e.flags & 1 || (Xe.push(e), e.flags |= 1), si();
}
function ks(e, t, s = be + 1) {
  for (; s < k.length; s++) {
    const n = k[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      k.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ni(e) {
  if (Xe.length) {
    const t = [...new Set(Xe)].sort(
      (s, n) => yt(s) - yt(n)
    );
    if (Xe.length = 0, Fe) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, Je = 0; Je < Fe.length; Je++) {
      const s = Fe[Je];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Fe = null, Je = 0;
  }
}
const yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ii(e) {
  try {
    for (be = 0; be < k.length; be++) {
      const t = k[be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), St(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; be < k.length; be++) {
      const t = k[be];
      t && (t.flags &= -2);
    }
    be = -1, k.length = 0, ni(), Ht = null, (k.length || Xe.length) && ii();
  }
}
let xe = null, ri = null;
function jt(e) {
  const t = xe;
  return xe = e, ri = e && e.type.__scopeId || null, t;
}
function Sr(e, t = xe, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && un(-1);
    const r = jt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      jt(r), n._d && un(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ue(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    r && (c.oldValue = r[o].value);
    let f = c.dir[n];
    f && (Pe(), Ce(f, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Oe());
  }
}
const Cr = Symbol("_vte"), wr = (e) => e.__isTeleport, Tr = Symbol("_leaveCb");
function js(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, js(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Lt = /* @__PURE__ */ new WeakMap();
function ht(e, t, s, n, i = !1) {
  if (O(e)) {
    e.forEach(
      (M, F) => ht(
        M,
        t && (O(t) ? t[F] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (dt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ht(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Us(n.component) : n.el, o = i ? null : r, { i: c, r: f } = e, d = t && t.r, a = c.refs === U ? c.refs = {} : c.refs, p = c.setupState, C = j(p), w = p === U ? An : (M) => D(C, M);
  if (d != null && d !== f) {
    if (en(t), J(d))
      a[d] = null, w(d) && (p[d] = null);
    else if (te(d)) {
      d.value = null;
      const M = t;
      M.k && (a[M.k] = null);
    }
  }
  if (R(f))
    St(f, c, 12, [o, a]);
  else {
    const M = J(f), F = te(f);
    if (M || F) {
      const X = () => {
        if (e.f) {
          const N = M ? w(f) ? p[f] : a[f] : f.value;
          if (i)
            O(N) && ws(N, r);
          else if (O(N))
            N.includes(r) || N.push(r);
          else if (M)
            a[f] = [r], w(f) && (p[f] = a[f]);
          else {
            const W = [r];
            f.value = W, e.k && (a[e.k] = W);
          }
        } else M ? (a[f] = o, w(f) && (p[f] = o)) : F && (f.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const N = () => {
          X(), Lt.delete(e);
        };
        N.id = -1, Lt.set(e, N), oe(N, s);
      } else
        en(e), X();
    }
  }
}
function en(e) {
  const t = Lt.get(e);
  t && (t.flags |= 8, Lt.delete(e));
}
qt().requestIdleCallback;
qt().cancelIdleCallback;
const dt = (e) => !!e.type.__asyncLoader, li = (e) => e.type.__isKeepAlive;
function Ar(e, t) {
  ci(e, "a", t);
}
function Pr(e, t) {
  ci(e, "da", t);
}
function ci(e, t, s = ee) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Jt(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      li(i.parent.vnode) && Or(n, t, s, i), i = i.parent;
  }
}
function Or(e, t, s, n) {
  const i = Jt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  fi(() => {
    ws(n[t], i);
  }, s);
}
function Jt(e, t, s = ee, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Pe();
      const c = Ct(s), f = Ce(t, s, e, o);
      return c(), Oe(), f;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const Re = (e) => (t, s = ee) => {
  (!vt || e === "sp") && Jt(e, (...n) => t(...n), s);
}, Rr = Re("bm"), Mr = Re("m"), Ir = Re(
  "bu"
), Fr = Re("u"), Nr = Re(
  "bum"
), fi = Re("um"), Dr = Re(
  "sp"
), Hr = Re("rtg"), jr = Re("rtc");
function Lr(e, t = ee) {
  Jt("ec", e, t);
}
const $r = Symbol.for("v-ndc"), _s = (e) => e ? Oi(e) ? Us(e) : _s(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => lo.bind(e)
  })
), is = (e, t) => e !== U && !e.__isScriptSetup && D(e, t), Vr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: c, appContext: f } = e;
    let d;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (is(n, t))
          return o[t] = 1, n[t];
        if (i !== U && D(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && D(d, t)
        )
          return o[t] = 3, r[t];
        if (s !== U && D(s, t))
          return o[t] = 4, s[t];
        ms && (o[t] = 0);
      }
    }
    const a = pt[t];
    let p, C;
    if (a)
      return t === "$attrs" && z(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== U && D(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      C = f.config.globalProperties, D(C, t)
    )
      return C[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return is(i, t) ? (i[t] = s, !0) : n !== U && D(n, t) ? (n[t] = s, !0) : D(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: r, type: o }
  }, c) {
    let f, d;
    return !!(s[c] || e !== U && c[0] !== "$" && D(e, c) || is(t, c) || (f = r[0]) && D(f, c) || D(n, c) || D(pt, c) || D(i.config.globalProperties, c) || (d = o.__cssModules) && d[c]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : D(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function tn(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ms = !0;
function Ur(e) {
  const t = ai(e), s = e.proxy, n = e.ctx;
  ms = !1, t.beforeCreate && sn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: C,
    beforeUpdate: w,
    updated: M,
    activated: F,
    deactivated: X,
    beforeDestroy: N,
    beforeUnmount: W,
    destroyed: q,
    unmounted: A,
    render: Y,
    renderTracked: Me,
    renderTriggered: he,
    errorCaptured: Ie,
    serverPrefetch: wt,
    // public API
    expose: Le,
    inheritAttrs: tt,
    // assets
    components: Tt,
    directives: Et,
    filters: Xt
  } = t;
  if (d && Wr(d, n, null), o)
    for (const B in o) {
      const L = o[B];
      R(L) && (n[B] = L.bind(s));
    }
  if (i) {
    const B = i.call(s, s);
    K(B) && (e.data = Fs(B));
  }
  if (ms = !0, r)
    for (const B in r) {
      const L = r[B], $e = R(L) ? L.bind(s, s) : R(L.get) ? L.get.bind(s, s) : ve, At = !R(L) && R(L.set) ? L.set.bind(s) : ve, Ve = No({
        get: $e,
        set: At
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (de) => Ve.value = de
      });
    }
  if (c)
    for (const B in c)
      ui(c[B], n, s, B);
  if (f) {
    const B = R(f) ? f.call(s) : f;
    Reflect.ownKeys(B).forEach((L) => {
      Yr(L, B[L]);
    });
  }
  a && sn(a, e, "c");
  function Z(B, L) {
    O(L) ? L.forEach(($e) => B($e.bind(s))) : L && B(L.bind(s));
  }
  if (Z(Rr, p), Z(Mr, C), Z(Ir, w), Z(Fr, M), Z(Ar, F), Z(Pr, X), Z(Lr, Ie), Z(jr, Me), Z(Hr, he), Z(Nr, W), Z(fi, A), Z(Dr, wt), O(Le))
    if (Le.length) {
      const B = e.exposed || (e.exposed = {});
      Le.forEach((L) => {
        Object.defineProperty(B, L, {
          get: () => s[L],
          set: ($e) => s[L] = $e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === ve && (e.render = Y), tt != null && (e.inheritAttrs = tt), Tt && (e.components = Tt), Et && (e.directives = Et), wt && oi(e);
}
function Wr(e, t, s = ve) {
  O(e) && (e = bs(e));
  for (const n in e) {
    const i = e[n];
    let r;
    K(i) ? "default" in i ? r = It(
      i.from || n,
      i.default,
      !0
    ) : r = It(i.from || n) : r = It(i), te(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function sn(e, t, s) {
  Ce(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ui(e, t, s, n) {
  let i = n.includes(".") ? wi(s, n) : () => s[n];
  if (J(e)) {
    const r = t[e];
    R(r) && os(i, r);
  } else if (R(e))
    os(i, e.bind(s));
  else if (K(e))
    if (O(e))
      e.forEach((r) => ui(r, t, s, n));
    else {
      const r = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(r) && os(i, r, e);
    }
}
function ai(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let f;
  return c ? f = c : !i.length && !s && !n ? f = t : (f = {}, i.length && i.forEach(
    (d) => $t(f, d, o, !0)
  ), $t(f, t, o)), K(t) && r.set(t, f), f;
}
function $t(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && $t(e, r, s, !0), i && i.forEach(
    (o) => $t(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = Br[o] || s && s[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Br = {
  data: nn,
  props: rn,
  emits: rn,
  // objects
  methods: lt,
  computed: lt,
  // lifecycle
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  // assets
  components: lt,
  directives: lt,
  // watch
  watch: qr,
  // provide / inject
  provide: nn,
  inject: Kr
};
function nn(e, t) {
  return t ? e ? function() {
    return G(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kr(e, t) {
  return lt(bs(e), bs(t));
}
function bs(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lt(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rn(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    tn(e),
    tn(t ?? {})
  ) : t;
}
function qr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = G(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Q(e[n], t[n]);
  return s;
}
function hi() {
  return {
    app: null,
    config: {
      isNativeTag: An,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Gr = 0;
function Jr(e, t) {
  return function(n, i = null) {
    R(n) || (n = G({}, n)), i != null && !K(i) && (i = null);
    const r = hi(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const d = r.app = {
      _uid: Gr++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Do,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && R(a.install) ? (o.add(a), a.install(d, ...p)) : R(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (r.components[a] = p, d) : r.components[a];
      },
      directive(a, p) {
        return p ? (r.directives[a] = p, d) : r.directives[a];
      },
      mount(a, p, C) {
        if (!f) {
          const w = d._ceVNode || He(n, i);
          return w.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(w, a, C), f = !0, d._container = a, a.__vue_app__ = d, Us(w.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        f && (Ce(
          c,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return r.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = Ze;
        Ze = d;
        try {
          return a();
        } finally {
          Ze = p;
        }
      }
    };
    return d;
  };
}
let Ze = null;
function Yr(e, t) {
  if (ee) {
    let s = ee.provides;
    const n = ee.parent && ee.parent.provides;
    n === s && (s = ee.provides = Object.create(n)), s[e] = t;
  }
}
function It(e, t, s = !1) {
  const n = Po();
  if (n || Ze) {
    let i = Ze ? Ze._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const di = {}, pi = () => Object.create(di), gi = (e) => Object.getPrototypeOf(e) === di;
function zr(e, t, s, n = !1) {
  const i = {}, r = pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _i(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : hr(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Xr(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = j(i), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let C = a[p];
        if (Yt(e.emitsOptions, C))
          continue;
        const w = t[C];
        if (f)
          if (D(r, C))
            w !== r[C] && (r[C] = w, d = !0);
          else {
            const M = ue(C);
            i[M] = ys(
              f,
              c,
              M,
              w,
              e,
              !1
            );
          }
        else
          w !== r[C] && (r[C] = w, d = !0);
      }
    }
  } else {
    _i(e, t, i, r) && (d = !0);
    let a;
    for (const p in c)
      (!t || // for camelCase
      !D(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = fe(p)) === p || !D(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (i[p] = ys(
        f,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== c)
      for (const p in r)
        (!t || !D(t, p)) && (delete r[p], d = !0);
  }
  d && Ae(e.attrs, "set", "");
}
function _i(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let f in t) {
      if (ct(f))
        continue;
      const d = t[f];
      let a;
      i && D(i, a = ue(f)) ? !r || !r.includes(a) ? s[a] = d : (c || (c = {}))[a] = d : Yt(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (r) {
    const f = j(s), d = c || U;
    for (let a = 0; a < r.length; a++) {
      const p = r[a];
      s[p] = ys(
        i,
        f,
        p,
        d[p],
        e,
        !D(d, p)
      );
    }
  }
  return o;
}
function ys(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const c = D(o, "default");
    if (c && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && R(f)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const a = Ct(i);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === fe(s)) && (n = !0));
  }
  return n;
}
const Zr = /* @__PURE__ */ new WeakMap();
function mi(e, t, s = !1) {
  const n = s ? Zr : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, c = [];
  let f = !1;
  if (!R(e)) {
    const a = (p) => {
      f = !0;
      const [C, w] = mi(p, t, !0);
      G(o, C), w && c.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !f)
    return K(e) && n.set(e, Ye), Ye;
  if (O(r))
    for (let a = 0; a < r.length; a++) {
      const p = ue(r[a]);
      on(p) && (o[p] = U);
    }
  else if (r)
    for (const a in r) {
      const p = ue(a);
      if (on(p)) {
        const C = r[a], w = o[p] = O(C) || R(C) ? { type: C } : G({}, C), M = w.type;
        let F = !1, X = !0;
        if (O(M))
          for (let N = 0; N < M.length; ++N) {
            const W = M[N], q = R(W) && W.name;
            if (q === "Boolean") {
              F = !0;
              break;
            } else q === "String" && (X = !1);
          }
        else
          F = R(M) && M.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = F, w[
          1
          /* shouldCastTrue */
        ] = X, (F || D(w, "default")) && c.push(p);
      }
    }
  const d = [o, c];
  return K(e) && n.set(e, d), d;
}
function on(e) {
  return e[0] !== "$" && !ct(e);
}
const Ls = (e) => e === "_" || e === "_ctx" || e === "$stable", $s = (e) => O(e) ? e.map(ye) : [ye(e)], Qr = (e, t, s) => {
  if (t._n)
    return t;
  const n = Sr((...i) => $s(t(...i)), s);
  return n._c = !1, n;
}, bi = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ls(i)) continue;
    const r = e[i];
    if (R(r))
      t[i] = Qr(i, r, n);
    else if (r != null) {
      const o = $s(r);
      t[i] = () => o;
    }
  }
}, yi = (e, t) => {
  const s = $s(t);
  e.slots.default = () => s;
}, xi = (e, t, s) => {
  for (const n in t)
    (s || !Ls(n)) && (e[n] = t[n]);
}, kr = (e, t, s) => {
  const n = e.slots = pi();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (xi(n, t, s), s && In(n, "_", i, !0)) : bi(t, n);
  } else t && yi(e, t);
}, eo = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = U;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? r = !1 : xi(i, t, s) : (r = !t.$stable, bi(t, i)), o = t;
  } else t && (yi(e, t), o = { default: 1 });
  if (r)
    for (const c in i)
      !Ls(c) && o[c] == null && delete i[c];
}, oe = _o;
function to(e) {
  return so(e);
}
function so(e, t) {
  const s = qt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: C,
    setScopeId: w = ve,
    insertStaticContent: M
  } = e, F = (l, u, h, m = null, g = null, _ = null, v = void 0, x = null, y = !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !ot(l, u) && (m = Pt(l), de(l, g, _, !0), l = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = u;
    switch (b) {
      case zt:
        X(l, u, h, m);
        break;
      case ke:
        N(l, u, h, m);
        break;
      case ls:
        l == null && W(u, h, m, v);
        break;
      case Ee:
        Tt(
          l,
          u,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        break;
      default:
        S & 1 ? Y(
          l,
          u,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        ) : S & 6 ? Et(
          l,
          u,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        ) : (S & 64 || S & 128) && b.process(
          l,
          u,
          h,
          m,
          g,
          _,
          v,
          x,
          y,
          nt
        );
    }
    E != null && g ? ht(E, l && l.ref, _, u || l, !u) : E == null && l && l.ref != null && ht(l.ref, null, _, l, !0);
  }, X = (l, u, h, m) => {
    if (l == null)
      n(
        u.el = c(u.children),
        h,
        m
      );
    else {
      const g = u.el = l.el;
      u.children !== l.children && d(g, u.children);
    }
  }, N = (l, u, h, m) => {
    l == null ? n(
      u.el = f(u.children || ""),
      h,
      m
    ) : u.el = l.el;
  }, W = (l, u, h, m) => {
    [l.el, l.anchor] = M(
      l.children,
      u,
      h,
      m,
      l.el,
      l.anchor
    );
  }, q = ({ el: l, anchor: u }, h, m) => {
    let g;
    for (; l && l !== u; )
      g = C(l), n(l, h, m), l = g;
    n(u, h, m);
  }, A = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = C(l), i(l), l = h;
    i(u);
  }, Y = (l, u, h, m, g, _, v, x, y) => {
    u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), l == null ? Me(
      u,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ) : wt(
      l,
      u,
      g,
      _,
      v,
      x,
      y
    );
  }, Me = (l, u, h, m, g, _, v, x) => {
    let y, b;
    const { props: E, shapeFlag: S, transition: T, dirs: P } = l;
    if (y = l.el = o(
      l.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(y, l.children) : S & 16 && Ie(
      l.children,
      y,
      null,
      m,
      g,
      rs(l, _),
      v,
      x
    ), P && Ue(l, null, m, "created"), he(y, l, l.scopeId, v, m), E) {
      for (const $ in E)
        $ !== "value" && !ct($) && r(y, $, null, E[$], _, m);
      "value" in E && r(y, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && me(b, m, l);
    }
    P && Ue(l, null, m, "beforeMount");
    const I = no(g, T);
    I && T.beforeEnter(y), n(y, u, h), ((b = E && E.onVnodeMounted) || I || P) && oe(() => {
      b && me(b, m, l), I && T.enter(y), P && Ue(l, null, m, "mounted");
    }, g);
  }, he = (l, u, h, m, g) => {
    if (h && w(l, h), m)
      for (let _ = 0; _ < m.length; _++)
        w(l, m[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Ei(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const v = g.vnode;
        he(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Ie = (l, u, h, m, g, _, v, x, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const E = l[b] = x ? Ne(l[b]) : ye(l[b]);
      F(
        null,
        E,
        u,
        h,
        m,
        g,
        _,
        v,
        x
      );
    }
  }, wt = (l, u, h, m, g, _, v) => {
    const x = u.el = l.el;
    let { patchFlag: y, dynamicChildren: b, dirs: E } = u;
    y |= l.patchFlag & 16;
    const S = l.props || U, T = u.props || U;
    let P;
    if (h && We(h, !1), (P = T.onVnodeBeforeUpdate) && me(P, h, u, l), E && Ue(u, l, h, "beforeUpdate"), h && We(h, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(x, ""), b ? Le(
      l.dynamicChildren,
      b,
      x,
      h,
      m,
      rs(u, g),
      _
    ) : v || L(
      l,
      u,
      x,
      null,
      h,
      m,
      rs(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        tt(x, S, T, h, g);
      else if (y & 2 && S.class !== T.class && r(x, "class", null, T.class, g), y & 4 && r(x, "style", S.style, T.style, g), y & 8) {
        const I = u.dynamicProps;
        for (let $ = 0; $ < I.length; $++) {
          const H = I[$], se = S[H], ne = T[H];
          (ne !== se || H === "value") && r(x, H, se, ne, g, h);
        }
      }
      y & 1 && l.children !== u.children && a(x, u.children);
    } else !v && b == null && tt(x, S, T, h, g);
    ((P = T.onVnodeUpdated) || E) && oe(() => {
      P && me(P, h, u, l), E && Ue(u, l, h, "updated");
    }, m);
  }, Le = (l, u, h, m, g, _, v) => {
    for (let x = 0; x < u.length; x++) {
      const y = l[x], b = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ot(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      F(
        y,
        b,
        E,
        null,
        m,
        g,
        _,
        v,
        !0
      );
    }
  }, tt = (l, u, h, m, g) => {
    if (u !== h) {
      if (u !== U)
        for (const _ in u)
          !ct(_) && !(_ in h) && r(
            l,
            _,
            u[_],
            null,
            g,
            m
          );
      for (const _ in h) {
        if (ct(_)) continue;
        const v = h[_], x = u[_];
        v !== x && _ !== "value" && r(l, _, x, v, g, m);
      }
      "value" in h && r(l, "value", u.value, h.value, g);
    }
  }, Tt = (l, u, h, m, g, _, v, x, y) => {
    const b = u.el = l ? l.el : c(""), E = u.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: P } = u;
    P && (x = x ? x.concat(P) : P), l == null ? (n(b, h, m), n(E, h, m), Ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      E,
      g,
      _,
      v,
      x,
      y
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      T,
      h,
      g,
      _,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && vi(
      l,
      u,
      !0
      /* shallow */
    )) : L(
      l,
      u,
      h,
      E,
      g,
      _,
      v,
      x,
      y
    );
  }, Et = (l, u, h, m, g, _, v, x, y) => {
    u.slotScopeIds = x, l == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      m,
      v,
      y
    ) : Xt(
      u,
      h,
      m,
      g,
      _,
      v,
      y
    ) : Bs(l, u, y);
  }, Xt = (l, u, h, m, g, _, v) => {
    const x = l.component = Ao(
      l,
      m,
      g
    );
    if (li(l) && (x.ctx.renderer = nt), Oo(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, Z, v), !l.el) {
        const y = x.subTree = He(ke);
        N(null, y, u, h), l.placeholder = y.el;
      }
    } else
      Z(
        x,
        l,
        u,
        h,
        g,
        _,
        v
      );
  }, Bs = (l, u, h) => {
    const m = u.component = l.component;
    if (po(l, u, h))
      if (m.asyncDep && !m.asyncResolved) {
        B(m, u, h);
        return;
      } else
        m.next = u, m.update();
    else
      u.el = l.el, m.vnode = u;
  }, Z = (l, u, h, m, g, _, v) => {
    const x = () => {
      if (l.isMounted) {
        let { next: S, bu: T, u: P, parent: I, vnode: $ } = l;
        {
          const ge = Si(l);
          if (ge) {
            S && (S.el = $.el, B(l, S, v)), ge.asyncDep.then(() => {
              l.isUnmounted || x();
            });
            return;
          }
        }
        let H = S, se;
        We(l, !1), S ? (S.el = $.el, B(l, S, v)) : S = $, T && kt(T), (se = S.props && S.props.onVnodeBeforeUpdate) && me(se, I, S, $), We(l, !0);
        const ne = cn(l), pe = l.subTree;
        l.subTree = ne, F(
          pe,
          ne,
          // parent may have changed if it's in a teleport
          p(pe.el),
          // anchor may have changed if it's in a fragment
          Pt(pe),
          l,
          g,
          _
        ), S.el = ne.el, H === null && go(l, ne.el), P && oe(P, g), (se = S.props && S.props.onVnodeUpdated) && oe(
          () => me(se, I, S, $),
          g
        );
      } else {
        let S;
        const { el: T, props: P } = u, { bm: I, m: $, parent: H, root: se, type: ne } = l, pe = dt(u);
        We(l, !1), I && kt(I), !pe && (S = P && P.onVnodeBeforeMount) && me(S, H, u), We(l, !0);
        {
          se.ce && // @ts-expect-error _def is private
          se.ce._def.shadowRoot !== !1 && se.ce._injectChildStyle(ne);
          const ge = l.subTree = cn(l);
          F(
            null,
            ge,
            h,
            m,
            l,
            g,
            _
          ), u.el = ge.el;
        }
        if ($ && oe($, g), !pe && (S = P && P.onVnodeMounted)) {
          const ge = u;
          oe(
            () => me(S, H, ge),
            g
          );
        }
        (u.shapeFlag & 256 || H && dt(H.vnode) && H.vnode.shapeFlag & 256) && l.a && oe(l.a, g), l.isMounted = !0, u = h = m = null;
      }
    };
    l.scope.on();
    const y = l.effect = new jn(x);
    l.scope.off();
    const b = l.update = y.run.bind(y), E = l.job = y.runIfDirty.bind(y);
    E.i = l, E.id = l.uid, y.scheduler = () => Hs(E), We(l, !0), b();
  }, B = (l, u, h) => {
    u.component = l;
    const m = l.vnode.props;
    l.vnode = u, l.next = null, Xr(l, u.props, m, h), eo(l, u.children, h), Pe(), ks(l), Oe();
  }, L = (l, u, h, m, g, _, v, x, y = !1) => {
    const b = l && l.children, E = l ? l.shapeFlag : 0, S = u.children, { patchFlag: T, shapeFlag: P } = u;
    if (T > 0) {
      if (T & 128) {
        At(
          b,
          S,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      } else if (T & 256) {
        $e(
          b,
          S,
          h,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      }
    }
    P & 8 ? (E & 16 && st(b, g, _), S !== b && a(h, S)) : E & 16 ? P & 16 ? At(
      b,
      S,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ) : st(b, g, _, !0) : (E & 8 && a(h, ""), P & 16 && Ie(
      S,
      h,
      m,
      g,
      _,
      v,
      x,
      y
    ));
  }, $e = (l, u, h, m, g, _, v, x, y) => {
    l = l || Ye, u = u || Ye;
    const b = l.length, E = u.length, S = Math.min(b, E);
    let T;
    for (T = 0; T < S; T++) {
      const P = u[T] = y ? Ne(u[T]) : ye(u[T]);
      F(
        l[T],
        P,
        h,
        null,
        g,
        _,
        v,
        x,
        y
      );
    }
    b > E ? st(
      l,
      g,
      _,
      !0,
      !1,
      S
    ) : Ie(
      u,
      h,
      m,
      g,
      _,
      v,
      x,
      y,
      S
    );
  }, At = (l, u, h, m, g, _, v, x, y) => {
    let b = 0;
    const E = u.length;
    let S = l.length - 1, T = E - 1;
    for (; b <= S && b <= T; ) {
      const P = l[b], I = u[b] = y ? Ne(u[b]) : ye(u[b]);
      if (ot(P, I))
        F(
          P,
          I,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= T; ) {
      const P = l[S], I = u[T] = y ? Ne(u[T]) : ye(u[T]);
      if (ot(P, I))
        F(
          P,
          I,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      S--, T--;
    }
    if (b > S) {
      if (b <= T) {
        const P = T + 1, I = P < E ? u[P].el : m;
        for (; b <= T; )
          F(
            null,
            u[b] = y ? Ne(u[b]) : ye(u[b]),
            h,
            I,
            g,
            _,
            v,
            x,
            y
          ), b++;
      }
    } else if (b > T)
      for (; b <= S; )
        de(l[b], g, _, !0), b++;
    else {
      const P = b, I = b, $ = /* @__PURE__ */ new Map();
      for (b = I; b <= T; b++) {
        const re = u[b] = y ? Ne(u[b]) : ye(u[b]);
        re.key != null && $.set(re.key, b);
      }
      let H, se = 0;
      const ne = T - I + 1;
      let pe = !1, ge = 0;
      const it = new Array(ne);
      for (b = 0; b < ne; b++) it[b] = 0;
      for (b = P; b <= S; b++) {
        const re = l[b];
        if (se >= ne) {
          de(re, g, _, !0);
          continue;
        }
        let _e;
        if (re.key != null)
          _e = $.get(re.key);
        else
          for (H = I; H <= T; H++)
            if (it[H - I] === 0 && ot(re, u[H])) {
              _e = H;
              break;
            }
        _e === void 0 ? de(re, g, _, !0) : (it[_e - I] = b + 1, _e >= ge ? ge = _e : pe = !0, F(
          re,
          u[_e],
          h,
          null,
          g,
          _,
          v,
          x,
          y
        ), se++);
      }
      const Gs = pe ? io(it) : Ye;
      for (H = Gs.length - 1, b = ne - 1; b >= 0; b--) {
        const re = I + b, _e = u[re], Js = u[re + 1], Ys = re + 1 < E ? (
          // #13559, fallback to el placeholder for unresolved async component
          Js.el || Js.placeholder
        ) : m;
        it[b] === 0 ? F(
          null,
          _e,
          h,
          Ys,
          g,
          _,
          v,
          x,
          y
        ) : pe && (H < 0 || b !== Gs[H] ? Ve(_e, h, Ys, 2) : H--);
      }
    }
  }, Ve = (l, u, h, m, g = null) => {
    const { el: _, type: v, transition: x, children: y, shapeFlag: b } = l;
    if (b & 6) {
      Ve(l.component.subTree, u, h, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(u, h, m);
      return;
    }
    if (b & 64) {
      v.move(l, u, h, nt);
      return;
    }
    if (v === Ee) {
      n(_, u, h);
      for (let S = 0; S < y.length; S++)
        Ve(y[S], u, h, m);
      n(l.anchor, u, h);
      return;
    }
    if (v === ls) {
      q(l, u, h);
      return;
    }
    if (m !== 2 && b & 1 && x)
      if (m === 0)
        x.beforeEnter(_), n(_, u, h), oe(() => x.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: P } = x, I = () => {
          l.ctx.isUnmounted ? i(_) : n(_, u, h);
        }, $ = () => {
          _._isLeaving && _[Tr](
            !0
            /* cancelled */
          ), S(_, () => {
            I(), P && P();
          });
        };
        T ? T(_, I, $) : $();
      }
    else
      n(_, u, h);
  }, de = (l, u, h, m = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: P
    } = l;
    if (S === -2 && (g = !1), x != null && (Pe(), ht(x, null, h, l, !0), Oe()), P != null && (u.renderCache[P] = void 0), E & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const I = E & 1 && T, $ = !dt(l);
    let H;
    if ($ && (H = v && v.onVnodeBeforeUnmount) && me(H, u, l), E & 6)
      Ni(l.component, h, m);
    else {
      if (E & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      I && Ue(l, null, u, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        u,
        h,
        nt,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ee || S > 0 && S & 64) ? st(
        b,
        u,
        h,
        !1,
        !0
      ) : (_ === Ee && S & 384 || !g && E & 16) && st(y, u, h), m && Ks(l);
    }
    ($ && (H = v && v.onVnodeUnmounted) || I) && oe(() => {
      H && me(H, u, l), I && Ue(l, null, u, "unmounted");
    }, h);
  }, Ks = (l) => {
    const { type: u, el: h, anchor: m, transition: g } = l;
    if (u === Ee) {
      Fi(h, m);
      return;
    }
    if (u === ls) {
      A(l);
      return;
    }
    const _ = () => {
      i(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, y = () => v(h, _);
      x ? x(l.el, _, y) : y();
    } else
      _();
  }, Fi = (l, u) => {
    let h;
    for (; l !== u; )
      h = C(l), i(l), l = h;
    i(u);
  }, Ni = (l, u, h) => {
    const { bum: m, scope: g, job: _, subTree: v, um: x, m: y, a: b } = l;
    ln(y), ln(b), m && kt(m), g.stop(), _ && (_.flags |= 8, de(v, l, u, h)), x && oe(x, u), oe(() => {
      l.isUnmounted = !0;
    }, u);
  }, st = (l, u, h, m = !1, g = !1, _ = 0) => {
    for (let v = _; v < l.length; v++)
      de(l[v], u, h, m, g);
  }, Pt = (l) => {
    if (l.shapeFlag & 6)
      return Pt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = C(l.anchor || l.el), h = u && u[Cr];
    return h ? C(h) : u;
  };
  let Zt = !1;
  const qs = (l, u, h) => {
    l == null ? u._vnode && de(u._vnode, null, null, !0) : F(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = l, Zt || (Zt = !0, ks(), ni(), Zt = !1);
  }, nt = {
    p: F,
    um: de,
    m: Ve,
    r: Ks,
    mt: Xt,
    mc: Ie,
    pc: L,
    pbc: Le,
    n: Pt,
    o: e
  };
  return {
    render: qs,
    hydrate: void 0,
    createApp: Jr(qs)
  };
}
function rs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function We({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function no(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vi(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (O(n) && O(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Ne(i[r]), c.el = o.el), !s && c.patchFlag !== -2 && vi(o, c)), c.type === zt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = o.el), c.type === ke && !c.el && (c.el = o.el);
    }
}
function io(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, c;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = s[s.length - 1], e[i] < d) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        c = r + o >> 1, e[s[c]] < d ? r = c + 1 : o = c;
      d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function Si(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Si(t);
}
function ln(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ro = Symbol.for("v-scx"), oo = () => It(ro);
function os(e, t, s) {
  return Ci(e, t, s);
}
function Ci(e, t, s = U) {
  const { immediate: n, deep: i, flush: r, once: o } = s, c = G({}, s), f = t && n || !t && r !== "post";
  let d;
  if (vt) {
    if (r === "sync") {
      const w = oo();
      d = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = ve, w.resume = ve, w.pause = ve, w;
    }
  }
  const a = ee;
  c.call = (w, M, F) => Ce(w, a, M, F);
  let p = !1;
  r === "post" ? c.scheduler = (w) => {
    oe(w, a && a.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (w, M) => {
    M ? w() : Hs(w);
  }), c.augmentJob = (w) => {
    t && (w.flags |= 4), p && (w.flags |= 2, a && (w.id = a.uid, w.i = a));
  };
  const C = br(e, t, c);
  return vt && (d ? d.push(C) : f && C()), C;
}
function lo(e, t, s) {
  const n = this.proxy, i = J(e) ? e.includes(".") ? wi(n, e) : () => n[e] : e.bind(n, n);
  let r;
  R(t) ? r = t : (r = t.handler, s = t);
  const o = Ct(this), c = Ci(i, r.bind(n), s);
  return o(), c;
}
function wi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${fe(t)}Modifiers`];
function fo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let i = s;
  const r = t.startsWith("update:"), o = r && co(n, t.slice(7));
  o && (o.trim && (i = s.map((a) => J(a) ? a.trim() : a)), o.number && (i = s.map($i)));
  let c, f = n[c = Qt(t)] || // also try camelCase event handler (#2249)
  n[c = Qt(ue(t))];
  !f && r && (f = n[c = Qt(fe(t))]), f && Ce(
    f,
    e,
    6,
    i
  );
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ce(
      d,
      e,
      6,
      i
    );
  }
}
const uo = /* @__PURE__ */ new WeakMap();
function Ti(e, t, s = !1) {
  const n = s ? uo : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, c = !1;
  if (!R(e)) {
    const f = (d) => {
      const a = Ti(d, t, !0);
      a && (c = !0, G(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (K(e) && n.set(e, null), null) : (O(r) ? r.forEach((f) => o[f] = null) : G(o, r), K(e) && n.set(e, o), o);
}
function Yt(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, fe(t)) || D(e, t));
}
function cn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: C,
    setupState: w,
    ctx: M,
    inheritAttrs: F
  } = e, X = jt(e);
  let N, W;
  try {
    if (s.shapeFlag & 4) {
      const A = i || n, Y = A;
      N = ye(
        d.call(
          Y,
          A,
          a,
          p,
          w,
          C,
          M
        )
      ), W = c;
    } else {
      const A = t;
      N = ye(
        A.length > 1 ? A(
          p,
          { attrs: c, slots: o, emit: f }
        ) : A(
          p,
          null
        )
      ), W = t.props ? c : ao(c);
    }
  } catch (A) {
    gt.length = 0, Gt(A, e, 1), N = He(ke);
  }
  let q = N;
  if (W && F !== !1) {
    const A = Object.keys(W), { shapeFlag: Y } = q;
    A.length && Y & 7 && (r && A.some(Cs) && (W = ho(
      W,
      r
    )), q = et(q, W, !1, !0));
  }
  return s.dirs && (q = et(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && js(q, s.transition), N = q, jt(X), N;
}
const ao = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ut(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ho = (e, t) => {
  const s = {};
  for (const n in e)
    (!Cs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function po(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: c, patchFlag: f } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? fn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const C = a[p];
        if (o[C] !== n[C] && !Yt(d, C))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? fn(n, o, d) : !0 : !!o;
  return !1;
}
function fn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (t[r] !== e[r] && !Yt(s, r))
      return !0;
  }
  return !1;
}
function go({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Ei = (e) => e.__isSuspense;
function _o(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : vr(e);
}
const Ee = Symbol.for("v-fgt"), zt = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), ls = Symbol.for("v-stc"), gt = [];
let ce = null;
function mo(e = !1) {
  gt.push(ce = e ? null : []);
}
function bo() {
  gt.pop(), ce = gt[gt.length - 1] || null;
}
let xt = 1;
function un(e, t = !1) {
  xt += e, e < 0 && ce && t && (ce.hasOnce = !0);
}
function yo(e) {
  return e.dynamicChildren = xt > 0 ? ce || Ye : null, bo(), xt > 0 && ce && ce.push(e), e;
}
function xo(e, t, s, n, i, r) {
  return yo(
    _t(
      e,
      t,
      s,
      n,
      i,
      r,
      !0
    )
  );
}
function Ai(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Pi = ({ key: e }) => e ?? null, Ft = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || te(e) || R(e) ? { i: xe, r: e, k: t, f: !!s } : e : null);
function _t(e, t = null, s = null, n = 0, i = null, r = e === Ee ? 0 : 1, o = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pi(t),
    ref: t && Ft(t),
    scopeId: ri,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return c ? (Vs(f, s), r & 128 && e.normalize(f)) : s && (f.shapeFlag |= J(s) ? 8 : 16), xt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ce.push(f), f;
}
const He = vo;
function vo(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === $r) && (e = ke), Ai(e)) {
    const c = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Vs(c, s), xt > 0 && !r && ce && (c.shapeFlag & 6 ? ce[ce.indexOf(e)] = c : ce.push(c)), c.patchFlag = -2, c;
  }
  if (Fo(e) && (e = e.__vccOpts), t) {
    t = So(t);
    let { class: c, style: f } = t;
    c && !J(c) && (t.class = As(c)), K(f) && (Ds(f) && !O(f) && (f = G({}, f)), t.style = Es(f));
  }
  const o = J(e) ? 1 : Ei(e) ? 128 : wr(e) ? 64 : K(e) ? 4 : R(e) ? 2 : 0;
  return _t(
    e,
    t,
    s,
    n,
    i,
    o,
    r,
    !0
  );
}
function So(e) {
  return e ? Ds(e) || gi(e) ? G({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: c, transition: f } = e, d = t ? wo(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Pi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? O(r) ? r.concat(Ft(t)) : [r, Ft(t)] : Ft(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ee ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && js(
    a,
    f.clone(a)
  ), a;
}
function Co(e = " ", t = 0) {
  return He(zt, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? He(ke) : O(e) ? He(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ai(e) ? Ne(e) : He(zt, null, String(e));
}
function Ne(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function Vs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Vs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !gi(t) ? t._ctx = xe : i === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: xe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Co(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function wo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = As([t.class, n.class]));
      else if (i === "style")
        t.style = Es([t.style, n.style]);
      else if (Ut(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(O(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function me(e, t, s, n = null) {
  Ce(e, t, 7, [
    s,
    n
  ]);
}
const To = hi();
let Eo = 0;
function Ao(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || To, r = {
    uid: Eo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Gi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: mi(n, i),
    emitsOptions: Ti(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = fo.bind(null, r), e.ce && e.ce(r), r;
}
let ee = null;
const Po = () => ee || xe;
let Vt, xs;
{
  const e = qt(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Vt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ee = s
  ), xs = t(
    "__VUE_SSR_SETTERS__",
    (s) => vt = s
  );
}
const Ct = (e) => {
  const t = ee;
  return Vt(e), e.scope.on(), () => {
    e.scope.off(), Vt(t);
  };
}, an = () => {
  ee && ee.scope.off(), Vt(null);
};
function Oi(e) {
  return e.vnode.shapeFlag & 4;
}
let vt = !1;
function Oo(e, t = !1, s = !1) {
  t && xs(t);
  const { props: n, children: i } = e.vnode, r = Oi(e);
  zr(e, n, r, t), kr(e, i, s || t);
  const o = r ? Ro(e, t) : void 0;
  return t && xs(!1), o;
}
function Ro(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vr);
  const { setup: n } = s;
  if (n) {
    Pe();
    const i = e.setupContext = n.length > 1 ? Io(e) : null, r = Ct(e), o = St(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = On(o);
    if (Oe(), r(), (c || e.sp) && !dt(e) && oi(e), c) {
      if (o.then(an, an), t)
        return o.then((f) => {
          hn(e, f);
        }).catch((f) => {
          Gt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      hn(e, o);
  } else
    Ri(e);
}
function hn(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = kn(t)), Ri(e);
}
function Ri(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ve);
  {
    const i = Ct(e);
    Pe();
    try {
      Ur(e);
    } finally {
      Oe(), i();
    }
  }
}
const Mo = {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function Io(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kn(dr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in pt)
        return pt[s](e);
    },
    has(t, s) {
      return s in t || s in pt;
    }
  })) : e.proxy;
}
function Fo(e) {
  return R(e) && "__vccOpts" in e;
}
const No = (e, t) => _r(e, t, vt), Do = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vs;
const dn = typeof window < "u" && window.trustedTypes;
if (dn)
  try {
    vs = /* @__PURE__ */ dn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mi = vs ? (e) => vs.createHTML(e) : (e) => e, Ho = "http://www.w3.org/2000/svg", jo = "http://www.w3.org/1998/Math/MathML", Te = typeof document < "u" ? document : null, pn = Te && /* @__PURE__ */ Te.createElement("template"), Lo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Te.createElementNS(Ho, e) : t === "mathml" ? Te.createElementNS(jo, e) : s ? Te.createElement(e, { is: s }) : Te.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Te.createTextNode(e),
  createComment: (e) => Te.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Te.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      pn.innerHTML = Mi(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = pn.content;
      if (n === "svg" || n === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, $o = Symbol("_vtc");
function Vo(e, t, s) {
  const n = e[$o];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const gn = Symbol("_vod"), Uo = Symbol("_vsh"), Wo = Symbol(""), Bo = /(?:^|;)\s*display\s*:/;
function Ko(e, t, s) {
  const n = e.style, i = J(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          s[c] == null && Nt(n, c, "");
        }
      else
        for (const o in t)
          s[o] == null && Nt(n, o, "");
    for (const o in s)
      o === "display" && (r = !0), Nt(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[Wo];
      o && (s += ";" + o), n.cssText = s, r = Bo.test(s);
    }
  } else t && e.removeAttribute("style");
  gn in e && (e[gn] = r ? n.display : "", e[Uo] && (n.display = "none"));
}
const _n = /\s*!important$/;
function Nt(e, t, s) {
  if (O(s))
    s.forEach((n) => Nt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = qo(e, t);
    _n.test(s) ? e.setProperty(
      fe(n),
      s.replace(_n, ""),
      "important"
    ) : e[n] = s;
  }
}
const mn = ["Webkit", "Moz", "ms"], cs = {};
function qo(e, t) {
  const s = cs[t];
  if (s)
    return s;
  let n = ue(t);
  if (n !== "filter" && n in e)
    return cs[t] = n;
  n = Mn(n);
  for (let i = 0; i < mn.length; i++) {
    const r = mn[i] + n;
    if (r in e)
      return cs[t] = r;
  }
  return t;
}
const bn = "http://www.w3.org/1999/xlink";
function yn(e, t, s, n, i, r = qi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(bn, t.slice(6, t.length)) : e.setAttributeNS(bn, t, s) : s == null || r && !Fn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : je(s) ? String(s) : s
  );
}
function xn(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Mi(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (c !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean" ? s = Fn(s) : s == null && c === "string" ? (s = "", o = !0) : c === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Go(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Jo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const vn = Symbol("_vei");
function Yo(e, t, s, n, i = null) {
  const r = e[vn] || (e[vn] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, f] = zo(t);
    if (n) {
      const d = r[t] = Qo(
        n,
        i
      );
      Go(e, c, d, f);
    } else o && (Jo(e, c, o, f), r[t] = void 0);
  }
}
const Sn = /(?:Once|Passive|Capture)$/;
function zo(e) {
  let t;
  if (Sn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Sn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fe(e.slice(2)), t];
}
let fs = 0;
const Xo = /* @__PURE__ */ Promise.resolve(), Zo = () => fs || (Xo.then(() => fs = 0), fs = Date.now());
function Qo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ce(
      ko(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Zo(), s;
}
function ko(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, el = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Vo(e, n, o) : t === "style" ? Ko(e, s, n) : Ut(t) ? Cs(t) || Yo(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tl(e, t, n, o)) ? (xn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yn(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(n)) ? xn(e, ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), yn(e, t, n, o));
};
function tl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Cn(t) && J(s) ? !1 : t in e;
}
const wn = {};
// @__NO_SIDE_EFFECTS__
function sl(e, t, s) {
  let n = /* @__PURE__ */ Er(e, t);
  Bt(n) && (n = G({}, n, t));
  class i extends Ws {
    constructor(o) {
      super(n, o, s);
    }
  }
  return i.def = n, i;
}
const nl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ws extends nl {
  constructor(t, s = {}, n = En) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== En ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      G({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ws) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, ti(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const s of t)
      this._setAttr(s.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (n, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = n;
      let c;
      if (r && !O(r))
        for (const f in r) {
          const d = r[f];
          (d === Number || d && d.type === Number) && (f in this._props && (this._props[f] = zs(this._props[f])), (c || (c = /* @__PURE__ */ Object.create(null)))[ue(f)] = !0);
        }
      this._numberProps = c, this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((n) => {
      n.configureApp = this._def.configureApp, t(this._def = n, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        D(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Qn(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(ue))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : wn;
    const i = ue(t);
    s && this._numberProps && this._numberProps[i] && (n = zs(n)), this._setProp(i, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, i = !1) {
    if (s !== this._props[t] && (s === wn ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), i && this._instance && this._update(), n)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), s === !0 ? this.setAttribute(fe(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(fe(t), s + "") : s || this.removeAttribute(fe(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), rl(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = He(this._def, G(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Bt(o[0]) ? G({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), fe(r) !== r && i(fe(r), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      n && r.setAttribute("nonce", n), r.textContent = t[i], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = i.getAttribute("name") || "default", o = this._slots[r], c = i.parentNode;
      if (o)
        for (const f of o) {
          if (s && f.nodeType === 1) {
            const d = s + "-s", a = document.createTreeWalker(f, 1);
            f.setAttribute(d, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(d, "");
          }
          c.insertBefore(f, i);
        }
      else
        for (; i.firstChild; ) c.insertBefore(i.firstChild, i);
      c.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    return this._teleportTargets && t.push(...this._teleportTargets), t.reduce((s, n) => (s.push(...Array.from(n.querySelectorAll("slot"))), s), []);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const il = /* @__PURE__ */ G({ patchProp: el }, Lo);
let Tn;
function Ii() {
  return Tn || (Tn = to(il));
}
const rl = ((...e) => {
  Ii().render(...e);
}), En = ((...e) => {
  const t = Ii().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = ll(n);
    if (!i) return;
    const r = t._component;
    !R(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, ol(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function ol(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ll(e) {
  return J(e) ? document.querySelector(e) : e;
}
const cl = ".my-widget-root[data-v-f40ff819]{border:1px solid #ddd;padding:12px;border-radius:8px;display:inline-block}", fl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ul = {
  props: {
    message: { type: String, default: "hello" }
  },
  methods: {
    onClick() {
      this.$emit("widget-click", { time: Date.now() });
    }
  }
}, al = { class: "my-widget-root" };
function hl(e, t, s, n, i, r) {
  return mo(), xo("div", al, [
    t[1] || (t[1] = _t("h3", null, "Hi, I'm a Web Component", -1)),
    _t("p", null, "message: " + Dn(s.message), 1),
    _t("button", {
      onClick: t[0] || (t[0] = (...o) => r.onClick && r.onClick(...o))
    }, "Click")
  ]);
}
const dl = /* @__PURE__ */ fl(ul, [["render", hl], ["styles", [cl]], ["__scopeId", "data-v-f40ff819"]]), pl = /* @__PURE__ */ sl(dl);
customElements.get("my-widget") || customElements.define("my-widget", pl);
export {
  pl as default
};
