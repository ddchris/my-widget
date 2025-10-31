/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], z = () => {
}, Do = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), fn = (e) => e.startsWith("onUpdate:"), G = Object.assign, ls = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ur = Object.prototype.hasOwnProperty, R = (e, t) => Ur.call(e, t), C = Array.isArray, rt = (e) => Nn(e) === "[object Map]", wo = (e) => Nn(e) === "[object Set]", P = (e) => typeof e == "function", J = (e) => typeof e == "string", et = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", fs = (e) => (k(e) || P(e)) && P(e.then) && P(e.catch), xo = Object.prototype.toString, Nn = (e) => xo.call(e), us = (e) => Nn(e).slice(8, -1), yn = (e) => Nn(e) === "[object Object]", as = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Be(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wr = /* @__PURE__ */ Be(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Br = /-\w/g, ue = On(
  (e) => e.replace(Br, (t) => t.slice(1).toUpperCase())
), kr = /\B([A-Z])/g, he = On(
  (e) => e.replace(kr, "-$1").toLowerCase()
), Dn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = On(
  (e) => e ? `on${Dn(e)}` : ""
), it = (e, t) => !Object.is(e, t), wt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, un = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, js = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Fs;
const kt = () => Fs || (Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ps(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = J(s) ? Yr(s) : ps(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (J(e) || k(e))
    return e;
}
const qr = /;(?![^(]*\))/g, Gr = /:([^]+)/, Jr = /\/\*[^]*?\*\//g;
function Yr(e) {
  const t = {};
  return e.replace(Jr, "").split(qr).forEach((n) => {
    if (n) {
      const s = n.split(Gr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ds(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const s = ds(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Xr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Zr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Qr = /* @__PURE__ */ Be(zr), ei = /* @__PURE__ */ Be(Xr), ti = /* @__PURE__ */ Be(Zr), ni = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", si = /* @__PURE__ */ Be(ni);
function Vo(e) {
  return !!e || e === "";
}
const So = (e) => !!(e && e.__v_isRef === !0), Co = (e) => J(e) ? e : e == null ? "" : C(e) || k(e) && (e.toString === xo || !P(e.toString)) ? So(e) ? Co(e.value) : JSON.stringify(e, To, 2) : String(e), To = (e, t) => So(t) ? To(e, t.value) : rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[In(s, r) + " =>"] = o, n),
    {}
  )
} : wo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => In(n))
} : et(t) ? In(t) : k(t) && !C(t) && !yn(t) ? String(t) : t, In = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function we(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let fe;
class oi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    } else process.env.NODE_ENV !== "production" && we("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fe, fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ri() {
  return fe;
}
let U;
const Rn = /* @__PURE__ */ new WeakSet();
class Po {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rn.has(this) && (Rn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $o(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hs(this), Mo(this);
    const t = U, n = Oe;
    U = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && we(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Io(this), U = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gs(t);
      this.deps = this.depsTail = void 0, Hs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qn(this) && this.run();
  }
  get dirty() {
    return qn(this);
  }
}
let Ao = 0, At, $t;
function $o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $t, $t = e;
    return;
  }
  e.next = At, At = e;
}
function hs() {
  Ao++;
}
function _s() {
  if (--Ao > 0)
    return;
  if ($t) {
    let t = $t;
    for ($t = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; At; ) {
    let t = At;
    for (At = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Io(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), gs(s), ii(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ro(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ro(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ft) || (e.globalVersion = Ft, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, s = Oe;
  U = e, Oe = !0;
  try {
    Mo(e);
    const o = e.fn(e._value);
    (t.version === 0 || it(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    U = n, Oe = s, Io(e), e.flags &= -3;
  }
}
function gs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      gs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ii(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const jo = [];
function xe() {
  jo.push(Oe), Oe = !1;
}
function Ve() {
  const e = jo.pop();
  Oe = e === void 0 ? !0 : e;
}
function Hs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Ft = 0;
class ci {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !Oe || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new ci(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Ho(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = s);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      G(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ft++, this.notify(t);
  }
  notify(t) {
    hs();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            G(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      _s();
    }
  }
}
function Ho(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ho(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), ct = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Jn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ht = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Y(e, t, n) {
  if (Oe && U) {
    let s = Gn.get(e);
    s || Gn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Fo()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Ie(e, t, n, s, o, r) {
  const i = Gn.get(e);
  if (!i) {
    Ft++;
    return;
  }
  const c = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : f.trigger());
  };
  if (hs(), t === "clear")
    i.forEach(c);
  else {
    const f = C(e), d = f && as(n);
    if (f && n === "length") {
      const p = Number(s);
      i.forEach((a, _) => {
        (_ === "length" || _ === Ht || !et(_) && _ >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(Ht)), t) {
        case "add":
          f ? d && c(i.get("length")) : (c(i.get(ct)), rt(e) && c(i.get(Jn)));
          break;
        case "delete":
          f || (c(i.get(ct)), rt(e) && c(i.get(Jn)));
          break;
        case "set":
          rt(e) && c(i.get(ct));
          break;
      }
  }
  _s();
}
function pt(e) {
  const t = M(e);
  return t === e ? t : (Y(t, "iterate", Ht), me(e) ? t : t.map(de));
}
function ms(e) {
  return Y(e = M(e), "iterate", Ht), e;
}
const li = {
  __proto__: null,
  [Symbol.iterator]() {
    return jn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => C(t) ? pt(t) : t)
    );
  },
  entries() {
    return jn(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return Le(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ls(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ls(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return xt(this, "unshift", e);
  },
  values() {
    return jn(this, "values", de);
  }
};
function jn(e, t, n) {
  const s = ms(e), o = s[t]();
  return s !== e && !me(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const fi = Array.prototype;
function Le(e, t, n, s, o, r) {
  const i = ms(e), c = i !== e && !me(e), f = i[t];
  if (f !== fi[t]) {
    const a = f.apply(e, r);
    return c ? de(a) : a;
  }
  let d = n;
  i !== e && (c ? d = function(a, _) {
    return n.call(this, de(a), _, e);
  } : n.length > 2 && (d = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const p = f.call(i, d, s);
  return c && o ? o(p) : p;
}
function Ls(e, t, n, s) {
  const o = ms(e);
  let r = n;
  return o !== e && (me(e) ? n.length > 3 && (r = function(i, c, f) {
    return n.call(this, i, c, f, e);
  }) : r = function(i, c, f) {
    return n.call(this, i, de(c), f, e);
  }), o[t](r, ...s);
}
function Fn(e, t, n) {
  const s = M(e);
  Y(s, "iterate", Ht);
  const o = s[t](...n);
  return (o === -1 || o === !1) && an(n[0]) ? (n[0] = M(n[0]), s[t](...n)) : o;
}
function xt(e, t, n = []) {
  xe(), hs();
  const s = M(e)[t].apply(e, n);
  return _s(), Ve(), s;
}
const ui = /* @__PURE__ */ Be("__proto__,__v_isRef,__isVue"), Lo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function ai(e) {
  et(e) || (e = String(e));
  const t = M(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Uo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? Go : qo : r ? Ko : ko).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = C(t);
    if (!o) {
      let f;
      if (i && (f = li[n]))
        return f;
      if (n === "hasOwnProperty")
        return ai;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : s
    );
    if ((et(n) ? Lo.has(n) : ui(n)) || (o || Y(t, "get", n), r))
      return c;
    if (X(c)) {
      const f = i && as(n) ? c : c.value;
      return o && k(f) ? zn(f) : f;
    }
    return k(c) ? o ? zn(c) : vs(c) : c;
  }
}
class Wo extends Uo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Ze(r);
      if (!me(s) && !Ze(s) && (r = M(r), s = M(s)), !C(t) && X(r) && !X(s))
        return f ? (process.env.NODE_ENV !== "production" && we(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = s, !0);
    }
    const i = C(t) && as(n) ? Number(n) < t.length : R(t, n), c = Reflect.set(
      t,
      n,
      s,
      X(t) ? t : o
    );
    return t === M(o) && (i ? it(s, r) && Ie(t, "set", n, s, r) : Ie(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = R(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Ie(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Lo.has(n)) && Y(t, "has", n), s;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      C(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class Bo extends Uo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && we(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && we(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const pi = /* @__PURE__ */ new Wo(), di = /* @__PURE__ */ new Bo(), hi = /* @__PURE__ */ new Wo(!0), _i = /* @__PURE__ */ new Bo(!0), Yn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function gi(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = M(o), i = rt(r), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = o[e](...s), p = n ? Yn : t ? Xn : de;
    return !t && Y(
      r,
      "iterate",
      f ? Jn : ct
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = d.next();
        return _ ? { value: a, done: _ } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      we(
        `${Dn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mi(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = M(r), c = M(o);
      e || (it(o, c) && Y(i, "get", o), Y(i, "get", c));
      const { has: f } = Xt(i), d = t ? Yn : e ? Xn : de;
      if (f.call(i, o))
        return d(r.get(o));
      if (f.call(i, c))
        return d(r.get(c));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Y(M(o), "iterate", ct), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = M(r), c = M(o);
      return e || (it(o, c) && Y(i, "has", o), Y(i, "has", c)), o === c ? r.has(o) : r.has(o) || r.has(c);
    },
    forEach(o, r) {
      const i = this, c = i.__v_raw, f = M(c), d = t ? Yn : e ? Xn : de;
      return !e && Y(f, "iterate", ct), c.forEach((p, a) => o.call(r, d(p), d(a), i));
    }
  };
  return G(
    n,
    e ? {
      add: Zt("add"),
      set: Zt("set"),
      delete: Zt("delete"),
      clear: Zt("clear")
    } : {
      add(o) {
        !t && !me(o) && !Ze(o) && (o = M(o));
        const r = M(this);
        return Xt(r).has.call(r, o) || (r.add(o), Ie(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !me(r) && !Ze(r) && (r = M(r));
        const i = M(this), { has: c, get: f } = Xt(i);
        let d = c.call(i, o);
        d ? process.env.NODE_ENV !== "production" && Us(i, c, o) : (o = M(o), d = c.call(i, o));
        const p = f.call(i, o);
        return i.set(o, r), d ? it(r, p) && Ie(i, "set", o, r, p) : Ie(i, "add", o, r), this;
      },
      delete(o) {
        const r = M(this), { has: i, get: c } = Xt(r);
        let f = i.call(r, o);
        f ? process.env.NODE_ENV !== "production" && Us(r, i, o) : (o = M(o), f = i.call(r, o));
        const d = c ? c.call(r, o) : void 0, p = r.delete(o);
        return f && Ie(r, "delete", o, void 0, d), p;
      },
      clear() {
        const o = M(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? rt(o) ? new Map(o) : new Set(o) : void 0, c = o.clear();
        return r && Ie(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = gi(o, e, t);
  }), n;
}
function wn(e, t) {
  const n = mi(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    R(n, o) && o in s ? n : s,
    o,
    r
  );
}
const vi = {
  get: /* @__PURE__ */ wn(!1, !1)
}, Ei = {
  get: /* @__PURE__ */ wn(!1, !0)
}, bi = {
  get: /* @__PURE__ */ wn(!0, !1)
}, Ni = {
  get: /* @__PURE__ */ wn(!0, !0)
};
function Us(e, t, n) {
  const s = M(n);
  if (s !== n && t.call(e, s)) {
    const o = us(e);
    we(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ko = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap();
function yi(e) {
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
function Oi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yi(us(e));
}
function vs(e) {
  return Ze(e) ? e : xn(
    e,
    !1,
    pi,
    vi,
    ko
  );
}
function Di(e) {
  return xn(
    e,
    !1,
    hi,
    Ei,
    Ko
  );
}
function zn(e) {
  return xn(
    e,
    !0,
    di,
    bi,
    qo
  );
}
function Re(e) {
  return xn(
    e,
    !0,
    _i,
    Ni,
    Go
  );
}
function xn(e, t, n, s, o) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && we(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Oi(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, c), c;
}
function mt(e) {
  return Ze(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function an(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function wi(e) {
  return !R(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const de = (e) => k(e) ? vs(e) : e, Xn = (e) => k(e) ? zn(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Jo(e) {
  return X(e) ? e.value : e;
}
const xi = {
  get: (e, t, n) => t === "__v_raw" ? e : Jo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return X(o) && !X(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Yo(e) {
  return mt(e) ? e : new Proxy(e, xi);
}
class Vi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ft - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return $o(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ro(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && we("Write operation failed: computed value is readonly");
  }
}
function Si(e, t, n = !1) {
  let s, o;
  P(e) ? s = e : (s = e.get, o = e.set);
  const r = new Vi(s, o, n);
  return process.env.NODE_ENV, r;
}
const Qt = {}, pn = /* @__PURE__ */ new WeakMap();
let ot;
function Ci(e, t = !1, n = ot) {
  if (n) {
    let s = pn.get(n);
    s || pn.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && we(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ti(e, t, n = B) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: c, call: f } = n, d = (S) => {
    (n.onWarn || we)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => o ? S : me(S) || o === !1 || o === 0 ? ze(S, 1) : ze(S);
  let a, _, D, A, V = !1, Z = !1;
  if (X(e) ? (_ = () => e.value, V = me(e)) : mt(e) ? (_ = () => p(e), V = !0) : C(e) ? (Z = !0, V = e.some((S) => mt(S) || me(S)), _ = () => e.map((S) => {
    if (X(S))
      return S.value;
    if (mt(S))
      return p(S);
    if (P(S))
      return f ? f(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : P(e) ? t ? _ = f ? () => f(e, 2) : e : _ = () => {
    if (D) {
      xe();
      try {
        D();
      } finally {
        Ve();
      }
    }
    const S = ot;
    ot = a;
    try {
      return f ? f(e, 3, [A]) : e(A);
    } finally {
      ot = S;
    }
  } : (_ = z, process.env.NODE_ENV !== "production" && d(e)), t && o) {
    const S = _, Q = o === !0 ? 1 / 0 : o;
    _ = () => ze(S(), Q);
  }
  const q = ri(), L = () => {
    a.stop(), q && q.active && ls(q.effects, a);
  };
  if (r && t) {
    const S = t;
    t = (...Q) => {
      S(...Q), L();
    };
  }
  let H = Z ? new Array(e.length).fill(Qt) : Qt;
  const ae = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const Q = a.run();
        if (o || V || (Z ? Q.some((ve, te) => it(ve, H[te])) : it(Q, H))) {
          D && D();
          const ve = ot;
          ot = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              H === Qt ? void 0 : Z && H[0] === Qt ? [] : H,
              A
            ];
            H = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ot = ve;
          }
        }
      } else
        a.run();
  };
  return c && c(ae), a = new Po(_), a.scheduler = i ? () => i(ae, !1) : ae, A = (S) => Ci(S, !1, a), D = a.onStop = () => {
    const S = pn.get(a);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const Q of S) Q();
      pn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? ae(!0) : H = a.run() : i ? i(ae.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, X(e))
    ze(e.value, t, n);
  else if (C(e))
    for (let s = 0; s < e.length; s++)
      ze(e[s], t, n);
  else if (wo(e) || rt(e))
    e.forEach((s) => {
      ze(s, t, n);
    });
  else if (yn(e)) {
    for (const s in e)
      ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ze(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const lt = [];
function en(e) {
  lt.push(e);
}
function tn() {
  lt.pop();
}
let Hn = !1;
function y(e, ...t) {
  if (Hn) return;
  Hn = !0, xe();
  const n = lt.length ? lt[lt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Pi();
  if (s)
    bt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Pn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Ai(o)), console.warn(...r);
  }
  Ve(), Hn = !1;
}
function Pi() {
  let e = lt[lt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ai(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...$i(n));
  }), t;
}
function $i({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Pn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Mi(e.props), r] : [o + r];
}
function Mi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...zo(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function zo(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = zo(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const Es = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function bt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Kt(o, t, n);
  }
}
function Fe(e, t, n, s) {
  if (P(e)) {
    const o = bt(e, t, n, s);
    return o && fs(o) && o.catch((r) => {
      Kt(r, t, n);
    }), o;
  }
  if (C(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Fe(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Kt(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const f = t.proxy, d = process.env.NODE_ENV !== "production" ? Es[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      xe(), bt(r, null, 10, [
        e,
        f,
        d
      ]), Ve();
      return;
    }
  }
  Ii(e, n, o, s, i);
}
function Ii(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Es[t];
    if (n && en(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const oe = [];
let $e = -1;
const vt = [];
let Je = null, _t = 0;
const Xo = /* @__PURE__ */ Promise.resolve();
let dn = null;
const Ri = 100;
function Zo(e) {
  const t = dn || Xo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ji(e) {
  let t = $e + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = oe[s], r = Lt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Vn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? oe.push(e) : oe.splice(ji(t), 0, e), e.flags |= 1, Qo();
  }
}
function Qo() {
  dn || (dn = Xo.then(nr));
}
function er(e) {
  C(e) ? vt.push(...e) : Je && e.id === -1 ? Je.splice(_t + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), Qo();
}
function Ws(e, t, n = $e + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const s = oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && bs(t, s))
        continue;
      oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function tr(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, s) => Lt(n) - Lt(s)
    );
    if (vt.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _t = 0; _t < Je.length; _t++) {
      const n = Je[_t];
      process.env.NODE_ENV !== "production" && bs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Je = null, _t = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => bs(e, n) : z;
  try {
    for ($e = 0; $e < oe.length; $e++) {
      const n = oe[$e];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), bt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $e < oe.length; $e++) {
      const n = oe[$e];
      n && (n.flags &= -2);
    }
    $e = -1, oe.length = 0, tr(e), dn = null, (oe.length || vt.length) && nr(e);
  }
}
function bs(e, t) {
  const n = e.get(t) || 0;
  if (n > Ri) {
    const s = t.i, o = s && Ir(s.type);
    return Kt(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let je = !1;
const nn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (kt().__VUE_HMR_RUNTIME__ = {
  createRecord: Ln(sr),
  rerender: Ln(Li),
  reload: Ln(Ui)
});
const ut = /* @__PURE__ */ new Map();
function Fi(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (sr(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Hi(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function sr(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: hn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function hn(e) {
  return Rr(e) ? e.__vccOpts : e;
}
function Li(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, hn(s.type).render = t), s.renderCache = [], je = !0, s.job.flags & 8 || s.update(), je = !1;
  }));
}
function Ui(e, t) {
  const n = ut.get(e);
  if (!n) return;
  t = hn(t), Bs(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = hn(r.type);
    let c = nn.get(i);
    c || (i !== n.initialDef && Bs(i, t), nn.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Vn(() => {
      r.job.flags & 8 || (je = !0, r.parent.update(), je = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  er(() => {
    nn.clear();
  });
}
function Bs(e, t) {
  G(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ln(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ye, Ct = [], Zn = !1;
function qt(e, ...t) {
  ye ? ye.emit(e, ...t) : Zn || Ct.push({ event: e, args: t });
}
function Ns(e, t) {
  var n, s;
  ye = e, ye ? (ye.enabled = !0, Ct.forEach(({ event: o, args: r }) => ye.emit(o, ...r)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ns(r, t);
  }), setTimeout(() => {
    ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, Ct = []);
  }, 3e3)) : (Zn = !0, Ct = []);
}
function Wi(e, t) {
  qt("app:init", e, t, {
    Fragment: Me,
    Text: Gt,
    Comment: De,
    Static: rn
  });
}
function Bi(e) {
  qt("app:unmount", e);
}
const ki = /* @__PURE__ */ ys(
  "component:added"
  /* COMPONENT_ADDED */
), or = /* @__PURE__ */ ys(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ki = /* @__PURE__ */ ys(
  "component:removed"
  /* COMPONENT_REMOVED */
), qi = (e) => {
  ye && typeof ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ye.cleanupBuffer(e) && Ki(e);
};
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return (t) => {
    qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Gi = /* @__PURE__ */ rr(
  "perf:start"
  /* PERFORMANCE_START */
), Ji = /* @__PURE__ */ rr(
  "perf:end"
  /* PERFORMANCE_END */
);
function rr(e) {
  return (t, n, s) => {
    qt(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Yi(e, t, n) {
  qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let _e = null, ir = null;
function _n(e) {
  const t = _e;
  return _e = e, ir = e && e.type.__scopeId || null, t;
}
function zi(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && so(-1);
    const r = _n(t);
    let i;
    try {
      i = e(...o);
    } finally {
      _n(r), s._d && so(1);
    }
    return process.env.NODE_ENV !== "production" && or(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function cr(e) {
  Wr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function tt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    r && (c.oldValue = r[i].value);
    let f = c.dir[s];
    f && (xe(), Fe(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ve());
  }
}
const Xi = Symbol("_vte"), Zi = (e) => e.__isTeleport, Qi = Symbol("_leaveCb");
function Os(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Os(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ec(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ks = /* @__PURE__ */ new WeakSet(), gn = /* @__PURE__ */ new WeakMap();
function Mt(e, t, n, s, o = !1) {
  if (C(e)) {
    e.forEach(
      (V, Z) => Mt(
        V,
        t && (C(t) ? t[Z] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (It(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Mt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Ts(s.component) : s.el, i = o ? null : r, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, a = c.setupState, _ = M(a), D = a === B ? Do : (V) => process.env.NODE_ENV !== "production" && (R(_, V) && !X(_[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), ks.has(_[V])) ? !1 : R(_, V), A = (V) => process.env.NODE_ENV === "production" || !ks.has(V);
  if (d != null && d !== f) {
    if (Ks(t), J(d))
      p[d] = null, D(d) && (a[d] = null);
    else if (X(d)) {
      A(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if (P(f))
    bt(f, c, 12, [i, p]);
  else {
    const V = J(f), Z = X(f);
    if (V || Z) {
      const q = () => {
        if (e.f) {
          const L = V ? D(f) ? a[f] : p[f] : A(f) || !e.k ? f.value : p[e.k];
          if (o)
            C(L) && ls(L, r);
          else if (C(L))
            L.includes(r) || L.push(r);
          else if (V)
            p[f] = [r], D(f) && (a[f] = p[f]);
          else {
            const H = [r];
            A(f) && (f.value = H), e.k && (p[e.k] = H);
          }
        } else V ? (p[f] = i, D(f) && (a[f] = i)) : Z ? (A(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const L = () => {
          q(), gn.delete(e);
        };
        L.id = -1, gn.set(e, L), pe(L, n);
      } else
        Ks(e), q();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function Ks(e) {
  const t = gn.get(e);
  t && (t.flags |= 8, gn.delete(e));
}
kt().requestIdleCallback;
kt().cancelIdleCallback;
const It = (e) => !!e.type.__asyncLoader, Ds = (e) => e.type.__isKeepAlive;
function tc(e, t) {
  fr(e, "a", t);
}
function nc(e, t) {
  fr(e, "da", t);
}
function fr(e, t, n = ee) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Sn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ds(o.parent.vnode) && sc(s, t, n, o), o = o.parent;
  }
}
function sc(e, t, n, s) {
  const o = Sn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ur(() => {
    ls(s[t], o);
  }, n);
}
function Sn(e, t, n = ee, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      xe();
      const c = Jt(n), f = Fe(t, n, e, i);
      return c(), Ve(), f;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = st(Es[e].replace(/ hook$/, ""));
    y(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ke = (e) => (t, n = ee) => {
  (!Wt || e === "sp") && Sn(e, (...s) => t(...s), n);
}, oc = ke("bm"), rc = ke("m"), ic = ke(
  "bu"
), cc = ke("u"), lc = ke(
  "bum"
), ur = ke("um"), fc = ke(
  "sp"
), uc = ke("rtg"), ac = ke("rtc");
function pc(e, t = ee) {
  Sn("ec", e, t);
}
const dc = Symbol.for("v-ndc"), Qn = (e) => e ? $r(e) ? Ts(e) : Qn(e.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Re(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Re(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Re(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Re(e.refs) : e.refs,
    $parent: (e) => Qn(e.parent),
    $root: (e) => Qn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => dr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zo.bind(e.proxy)),
    $watch: (e) => qc.bind(e)
  })
), ws = (e) => e === "_" || e === "$", Un = (e, t) => e !== B && !e.__isScriptSetup && R(e, t), ar = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Un(s, t))
          return i[t] = 1, s[t];
        if (o !== B && R(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && R(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && R(n, t))
          return i[t] = 4, n[t];
        es && (i[t] = 0);
      }
    }
    const p = ft[t];
    let a, _;
    if (p)
      return t === "$attrs" ? (Y(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && En()) : process.env.NODE_ENV !== "production" && t === "$slots" && Y(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && R(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      _ = f.config.globalProperties, R(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && _e && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== B && ws(t[0]) && R(o, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === _e && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Un(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && R(o, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && R(s, t) ? (s[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r, type: i }
  }, c) {
    let f, d;
    return !!(n[c] || e !== B && c[0] !== "$" && R(e, c) || Un(t, c) || (f = r[0]) && R(f, c) || R(s, c) || R(ft, c) || R(o.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ar.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function hc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ft).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ft[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: z
    });
  }), t;
}
function _c(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: z
    });
  });
}
function gc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ws(s[0])) {
        y(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: z
      });
    }
  });
}
function qs(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function mc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let es = !0;
function vc(e) {
  const t = dr(e), n = e.proxy, s = e.ctx;
  es = !1, t.beforeCreate && Gs(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: _,
    beforeUpdate: D,
    updated: A,
    activated: V,
    deactivated: Z,
    beforeDestroy: q,
    beforeUnmount: L,
    destroyed: H,
    unmounted: ae,
    render: S,
    renderTracked: Q,
    renderTriggered: ve,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: He,
    inheritAttrs: Ke,
    // assets
    components: be,
    directives: Yt,
    filters: As
  } = t, qe = process.env.NODE_ENV !== "production" ? mc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const I in j)
        qe("Props", I);
  }
  if (d && Ec(d, s, qe), i)
    for (const j in i) {
      const I = i[j];
      P(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, j, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[j] = I.bind(n), process.env.NODE_ENV !== "production" && qe("Methods", j)) : process.env.NODE_ENV !== "production" && y(
        `Method "${j}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !P(o) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && fs(j) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = vs(j), process.env.NODE_ENV !== "production")
      for (const I in j)
        qe("Data", I), ws(I[0]) || Object.defineProperty(s, I, {
          configurable: !0,
          enumerable: !0,
          get: () => j[I],
          set: z
        });
  }
  if (es = !0, r)
    for (const j in r) {
      const I = r[j], Se = P(I) ? I.bind(n, n) : P(I.get) ? I.get.bind(n, n) : z;
      process.env.NODE_ENV !== "production" && Se === z && y(`Computed property "${j}" has no getter.`);
      const An = !P(I) && P(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : z, Nt = bl({
        get: Se,
        set: An
      });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (at) => Nt.value = at
      }), process.env.NODE_ENV !== "production" && qe("Computed", j);
    }
  if (c)
    for (const j in c)
      pr(c[j], s, n, j);
  if (f) {
    const j = P(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((I) => {
      wc(I, j[I]);
    });
  }
  p && Gs(p, e, "c");
  function ie(j, I) {
    C(I) ? I.forEach((Se) => j(Se.bind(n))) : I && j(I.bind(n));
  }
  if (ie(oc, a), ie(rc, _), ie(ic, D), ie(cc, A), ie(tc, V), ie(nc, Z), ie(pc, te), ie(ac, Q), ie(uc, ve), ie(lc, L), ie(ur, ae), ie(fc, re), C(He))
    if (He.length) {
      const j = e.exposed || (e.exposed = {});
      He.forEach((I) => {
        Object.defineProperty(j, I, {
          get: () => n[I],
          set: (Se) => n[I] = Se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === z && (e.render = S), Ke != null && (e.inheritAttrs = Ke), be && (e.components = be), Yt && (e.directives = Yt), re && lr(e);
}
function Ec(e, t, n = z) {
  C(e) && (e = ts(e));
  for (const s in e) {
    const o = e[s];
    let r;
    k(o) ? "default" in o ? r = sn(
      o.from || s,
      o.default,
      !0
    ) : r = sn(o.from || s) : r = sn(o), X(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Gs(e, t, n) {
  Fe(
    C(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function pr(e, t, n, s) {
  let o = s.includes(".") ? wr(n, s) : () => n[s];
  if (J(e)) {
    const r = t[e];
    P(r) ? Bn(o, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (P(e))
    Bn(o, e.bind(n));
  else if (k(e))
    if (C(e))
      e.forEach((r) => pr(r, t, n, s));
    else {
      const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(r) ? Bn(o, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${s}"`, e);
}
function dr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let f;
  return c ? f = c : !o.length && !n && !s ? f = t : (f = {}, o.length && o.forEach(
    (d) => mn(f, d, i, !0)
  ), mn(f, t, i)), k(t) && r.set(t, f), f;
}
function mn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && mn(e, r, n, !0), o && o.forEach(
    (i) => mn(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = bc[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const bc = {
  data: Js,
  props: Ys,
  emits: Ys,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: yc,
  // provide / inject
  provide: Js,
  inject: Nc
};
function Js(e, t) {
  return t ? e ? function() {
    return G(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nc(e, t) {
  return Tt(ts(e), ts(t));
}
function ts(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t ?? {})
  ) : t;
}
function yc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function hr() {
  return {
    app: null,
    config: {
      isNativeTag: Do,
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
let Oc = 0;
function Dc(e, t) {
  return function(s, o = null) {
    P(s) || (s = G({}, s)), o != null && !k(o) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), o = null);
    const r = hr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const d = r.app = {
      _uid: Oc++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: co,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && P(p.install) ? (i.add(p), p.install(d, ...a)) : P(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && is(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && cr(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, _) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || Xe(s, o);
          return D.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const A = Qe(D);
            A.el = null, e(A, p, _);
          }), e(D, p, _), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, Wi(d, co)), Ts(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        f ? (Fe(
          c,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Bi(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (R(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = Et;
        Et = d;
        try {
          return p();
        } finally {
          Et = a;
        }
      }
    };
    return d;
  };
}
let Et = null;
function wc(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const s = ee.parent && ee.parent.provides;
    s === n && (n = ee.provides = Object.create(s)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const s = Ar();
  if (s || Et) {
    let o = Et ? Et._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const _r = {}, gr = () => Object.create(_r), mr = (e) => Object.getPrototypeOf(e) === _r;
function xc(e, t, n, s = !1) {
  const o = {}, r = gr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vr(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && br(t || {}, o, e), n ? e.props = s ? o : Di(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Vc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Sc(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = M(o), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Vc(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let _ = p[a];
        if (Cn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (f)
          if (R(r, _))
            D !== r[_] && (r[_] = D, d = !0);
          else {
            const A = ue(_);
            o[A] = ns(
              f,
              c,
              A,
              D,
              e,
              !1
            );
          }
        else
          D !== r[_] && (r[_] = D, d = !0);
      }
    }
  } else {
    vr(e, t, o, r) && (d = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !R(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = he(a)) === a || !R(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[a] = ns(
        f,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete o[a]);
    if (r !== c)
      for (const a in r)
        (!t || !R(t, a)) && (delete r[a], d = !0);
  }
  d && Ie(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && br(t || {}, o, e);
}
function vr(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (Pt(f))
        continue;
      const d = t[f];
      let p;
      o && R(o, p = ue(f)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : Cn(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, i = !0);
    }
  if (r) {
    const f = M(n), d = c || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = ns(
        o,
        f,
        a,
        d[a],
        e,
        !R(d, a)
      );
    }
  }
  return i;
}
function ns(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && s === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && P(f)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const p = Jt(o);
          s = d[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        s = f;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === he(n)) && (s = !0));
  }
  return s;
}
const Cc = /* @__PURE__ */ new WeakMap();
function Er(e, t, n = !1) {
  const s = n ? Cc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, c = [];
  let f = !1;
  if (!P(e)) {
    const p = (a) => {
      f = !0;
      const [_, D] = Er(a, t, !0);
      G(i, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return k(e) && s.set(e, gt), gt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !J(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = ue(r[p]);
      zs(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && y("invalid props options", r);
    for (const p in r) {
      const a = ue(p);
      if (zs(a)) {
        const _ = r[p], D = i[a] = C(_) || P(_) ? { type: _ } : G({}, _), A = D.type;
        let V = !1, Z = !0;
        if (C(A))
          for (let q = 0; q < A.length; ++q) {
            const L = A[q], H = P(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else H === "String" && (Z = !1);
          }
        else
          V = P(A) && A.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = V, D[
          1
          /* shouldCastTrue */
        ] = Z, (V || R(D, "default")) && c.push(a);
      }
    }
  }
  const d = [i, c];
  return k(e) && s.set(e, d), d;
}
function zs(e) {
  return e[0] !== "$" && !Pt(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Tc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function br(e, t, n) {
  const s = M(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => ue(i));
  for (const i in o) {
    let c = o[i];
    c != null && Pc(
      i,
      s[i],
      c,
      process.env.NODE_ENV !== "production" ? Re(s) : s,
      !r.includes(i)
    );
  }
}
function Pc(e, t, n, s, o) {
  const { type: r, required: i, validator: c, skipCheck: f } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !f) {
      let d = !1;
      const p = C(r) ? r : [r], a = [];
      for (let _ = 0; _ < p.length && !d; _++) {
        const { valid: D, expectedType: A } = $c(t, p[_]);
        a.push(A || ""), d = D;
      }
      if (!d) {
        y(Mc(e, t, a));
        return;
      }
    }
    c && !c(t, s) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ac = /* @__PURE__ */ Be(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function $c(e, t) {
  let n;
  const s = Tc(t);
  if (s === "null")
    n = e === null;
  else if (Ac(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = k(e) : s === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Mc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dn).join(" | ")}`;
  const o = n[0], r = us(t), i = Xs(t, o), c = Xs(t, r);
  return n.length === 1 && Zs(o) && !Ic(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Zs(r) && (s += `with value ${c}.`), s;
}
function Xs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Zs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ic(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const xs = (e) => e === "_" || e === "_ctx" || e === "$stable", Vs = (e) => C(e) ? e.map(Ne) : [Ne(e)], Rc = (e, t, n) => {
  if (t._n)
    return t;
  const s = zi((...o) => (process.env.NODE_ENV !== "production" && ee && !(n === null && _e) && !(n && n.root !== ee.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Vs(t(...o))), n);
  return s._c = !1, s;
}, Nr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (xs(o)) continue;
    const r = e[o];
    if (P(r))
      t[o] = Rc(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Vs(r);
      t[o] = () => i;
    }
  }
}, yr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ds(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Vs(t);
  e.slots.default = () => n;
}, ss = (e, t, n) => {
  for (const s in t)
    (n || !xs(s)) && (e[s] = t[s]);
}, jc = (e, t, n) => {
  const s = e.slots = gr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ss(s, t, n), n && un(s, "_", o, !0)) : Nr(t, s);
  } else t && yr(e, t);
}, Fc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = B;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && je ? (ss(o, t, n), Ie(e, "set", "$slots")) : n && c === 1 ? r = !1 : ss(o, t, n) : (r = !t.$stable, Nr(t, o)), i = t;
  } else t && (yr(e, t), i = { default: 1 });
  if (r)
    for (const c in o)
      !xs(c) && i[c] == null && delete o[c];
};
let Vt, We;
function dt(e, t) {
  e.appContext.config.performance && vn() && We.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Gi(e, t, vn() ? We.now() : Date.now());
}
function ht(e, t) {
  if (e.appContext.config.performance && vn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", o = `<${Pn(e, e.type)}> ${t}`;
    We.mark(s), We.measure(o, n, s), We.clearMeasures(o), We.clearMarks(n), We.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Ji(e, t, vn() ? We.now() : Date.now());
}
function vn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, We = window.performance) : Vt = !1), Vt;
}
function Hc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const pe = el;
function Lc(e) {
  return Uc(e);
}
function Uc(e, t) {
  Hc();
  const n = kt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ns(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: _,
    setScopeId: D = z,
    insertStaticContent: A
  } = e, V = (l, u, h, v = null, g = null, m = null, O = void 0, N = null, b = process.env.NODE_ENV !== "production" && je ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !St(l, u) && (v = zt(l), Ge(l, g, m, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: E, ref: T, shapeFlag: w } = u;
    switch (E) {
      case Gt:
        Z(l, u, h, v);
        break;
      case De:
        q(l, u, h, v);
        break;
      case rn:
        l == null ? L(u, h, v, O) : process.env.NODE_ENV !== "production" && H(l, u, h, O);
        break;
      case Me:
        Yt(
          l,
          u,
          h,
          v,
          g,
          m,
          O,
          N,
          b
        );
        break;
      default:
        w & 1 ? Q(
          l,
          u,
          h,
          v,
          g,
          m,
          O,
          N,
          b
        ) : w & 6 ? As(
          l,
          u,
          h,
          v,
          g,
          m,
          O,
          N,
          b
        ) : w & 64 || w & 128 ? E.process(
          l,
          u,
          h,
          v,
          g,
          m,
          O,
          N,
          b,
          Ot
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    T != null && g ? Mt(T, l && l.ref, m, u || l, !u) : T == null && l && l.ref != null && Mt(l.ref, null, m, l, !0);
  }, Z = (l, u, h, v) => {
    if (l == null)
      s(
        u.el = c(u.children),
        h,
        v
      );
    else {
      const g = u.el = l.el;
      u.children !== l.children && d(g, u.children);
    }
  }, q = (l, u, h, v) => {
    l == null ? s(
      u.el = f(u.children || ""),
      h,
      v
    ) : u.el = l.el;
  }, L = (l, u, h, v) => {
    [l.el, l.anchor] = A(
      l.children,
      u,
      h,
      v,
      l.el,
      l.anchor
    );
  }, H = (l, u, h, v) => {
    if (u.children !== l.children) {
      const g = _(l.anchor);
      S(l), [u.el, u.anchor] = A(
        u.children,
        h,
        g,
        v
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, ae = ({ el: l, anchor: u }, h, v) => {
    let g;
    for (; l && l !== u; )
      g = _(l), s(l, h, v), l = g;
    s(u, h, v);
  }, S = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = _(l), o(l), l = h;
    o(u);
  }, Q = (l, u, h, v, g, m, O, N, b) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), l == null ? ve(
      u,
      h,
      v,
      g,
      m,
      O,
      N,
      b
    ) : He(
      l,
      u,
      g,
      m,
      O,
      N,
      b
    );
  }, ve = (l, u, h, v, g, m, O, N) => {
    let b, E;
    const { props: T, shapeFlag: w, transition: x, dirs: $ } = l;
    if (b = l.el = i(
      l.type,
      m,
      T && T.is,
      T
    ), w & 8 ? p(b, l.children) : w & 16 && re(
      l.children,
      b,
      null,
      v,
      g,
      Wn(l, m),
      O,
      N
    ), $ && tt(l, null, v, "created"), te(b, l, l.scopeId, O, v), T) {
      for (const K in T)
        K !== "value" && !Pt(K) && r(b, K, null, T[K], m, v);
      "value" in T && r(b, "value", null, T.value, m), (E = T.onVnodeBeforeMount) && Ae(E, v, l);
    }
    process.env.NODE_ENV !== "production" && (un(b, "__vnode", l, !0), un(b, "__vueParentComponent", v, !0)), $ && tt(l, null, v, "beforeMount");
    const F = Wc(g, x);
    F && x.beforeEnter(b), s(b, u, h), ((E = T && T.onVnodeMounted) || F || $) && pe(() => {
      E && Ae(E, v, l), F && x.enter(b), $ && tt(l, null, v, "mounted");
    }, g);
  }, te = (l, u, h, v, g) => {
    if (h && D(l, h), v)
      for (let m = 0; m < v.length; m++)
        D(l, v[m]);
    if (g) {
      let m = g.subTree;
      if (process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = Ss(m.children) || m), u === m || Sr(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const O = g.vnode;
        te(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          g.parent
        );
      }
    }
  }, re = (l, u, h, v, g, m, O, N, b = 0) => {
    for (let E = b; E < l.length; E++) {
      const T = l[E] = N ? Ye(l[E]) : Ne(l[E]);
      V(
        null,
        T,
        u,
        h,
        v,
        g,
        m,
        O,
        N
      );
    }
  }, He = (l, u, h, v, g, m, O) => {
    const N = u.el = l.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = u);
    let { patchFlag: b, dynamicChildren: E, dirs: T } = u;
    b |= l.patchFlag & 16;
    const w = l.props || B, x = u.props || B;
    let $;
    if (h && nt(h, !1), ($ = x.onVnodeBeforeUpdate) && Ae($, h, u, l), T && tt(u, l, h, "beforeUpdate"), h && nt(h, !0), process.env.NODE_ENV !== "production" && je && (b = 0, O = !1, E = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(N, ""), E ? (Ke(
      l.dynamicChildren,
      E,
      N,
      h,
      v,
      Wn(u, g),
      m
    ), process.env.NODE_ENV !== "production" && on(l, u)) : O || Se(
      l,
      u,
      N,
      null,
      h,
      v,
      Wn(u, g),
      m,
      !1
    ), b > 0) {
      if (b & 16)
        be(N, w, x, h, g);
      else if (b & 2 && w.class !== x.class && r(N, "class", null, x.class, g), b & 4 && r(N, "style", w.style, x.style, g), b & 8) {
        const F = u.dynamicProps;
        for (let K = 0; K < F.length; K++) {
          const W = F[K], ce = w[W], le = x[W];
          (le !== ce || W === "value") && r(N, W, ce, le, g, h);
        }
      }
      b & 1 && l.children !== u.children && p(N, u.children);
    } else !O && E == null && be(N, w, x, h, g);
    (($ = x.onVnodeUpdated) || T) && pe(() => {
      $ && Ae($, h, u, l), T && tt(u, l, h, "updated");
    }, v);
  }, Ke = (l, u, h, v, g, m, O) => {
    for (let N = 0; N < u.length; N++) {
      const b = l[N], E = u[N], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === Me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(b, E) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        b,
        E,
        T,
        null,
        v,
        g,
        m,
        O,
        !0
      );
    }
  }, be = (l, u, h, v, g) => {
    if (u !== h) {
      if (u !== B)
        for (const m in u)
          !Pt(m) && !(m in h) && r(
            l,
            m,
            u[m],
            null,
            g,
            v
          );
      for (const m in h) {
        if (Pt(m)) continue;
        const O = h[m], N = u[m];
        O !== N && m !== "value" && r(l, m, N, O, g, v);
      }
      "value" in h && r(l, "value", u.value, h.value, g);
    }
  }, Yt = (l, u, h, v, g, m, O, N, b) => {
    const E = u.el = l ? l.el : c(""), T = u.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: $ } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (je || w & 2048) && (w = 0, b = !1, x = null), $ && (N = N ? N.concat($) : $), l == null ? (s(E, h, v), s(T, h, v), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      T,
      g,
      m,
      O,
      N,
      b
    )) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ke(
      l.dynamicChildren,
      x,
      h,
      g,
      m,
      O,
      N
    ), process.env.NODE_ENV !== "production" ? on(l, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && on(
        l,
        u,
        !0
        /* shallow */
      )
    )) : Se(
      l,
      u,
      h,
      T,
      g,
      m,
      O,
      N,
      b
    );
  }, As = (l, u, h, v, g, m, O, N, b) => {
    u.slotScopeIds = N, l == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      v,
      O,
      b
    ) : qe(
      u,
      h,
      v,
      g,
      m,
      O,
      b
    ) : ie(l, u, b);
  }, qe = (l, u, h, v, g, m, O) => {
    const N = l.component = al(
      l,
      v,
      g
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Fi(N), process.env.NODE_ENV !== "production" && (en(l), dt(N, "mount")), Ds(l) && (N.ctx.renderer = Ot), process.env.NODE_ENV !== "production" && dt(N, "init"), dl(N, !1, O), process.env.NODE_ENV !== "production" && ht(N, "init"), process.env.NODE_ENV !== "production" && je && (l.el = null), N.asyncDep) {
      if (g && g.registerDep(N, j, O), !l.el) {
        const b = N.subTree = Xe(De);
        q(null, b, u, h), l.placeholder = b.el;
      }
    } else
      j(
        N,
        l,
        u,
        h,
        g,
        m,
        O
      );
    process.env.NODE_ENV !== "production" && (tn(), ht(N, "mount"));
  }, ie = (l, u, h) => {
    const v = u.component = l.component;
    if (Zc(l, u, h))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && en(u), I(v, u, h), process.env.NODE_ENV !== "production" && tn();
        return;
      } else
        v.next = u, v.update();
    else
      u.el = l.el, v.vnode = u;
  }, j = (l, u, h, v, g, m, O) => {
    const N = () => {
      if (l.isMounted) {
        let { next: w, bu: x, u: $, parent: F, vnode: K } = l;
        {
          const Te = Or(l);
          if (Te) {
            w && (w.el = K.el, I(l, w, O)), Te.asyncDep.then(() => {
              l.isUnmounted || N();
            });
            return;
          }
        }
        let W = w, ce;
        process.env.NODE_ENV !== "production" && en(w || l.vnode), nt(l, !1), w ? (w.el = K.el, I(l, w, O)) : w = K, x && wt(x), (ce = w.props && w.props.onVnodeBeforeUpdate) && Ae(ce, F, w, K), nt(l, !0), process.env.NODE_ENV !== "production" && dt(l, "render");
        const le = eo(l);
        process.env.NODE_ENV !== "production" && ht(l, "render");
        const Ce = l.subTree;
        l.subTree = le, process.env.NODE_ENV !== "production" && dt(l, "patch"), V(
          Ce,
          le,
          // parent may have changed if it's in a teleport
          a(Ce.el),
          // anchor may have changed if it's in a fragment
          zt(Ce),
          l,
          g,
          m
        ), process.env.NODE_ENV !== "production" && ht(l, "patch"), w.el = le.el, W === null && Qc(l, le.el), $ && pe($, g), (ce = w.props && w.props.onVnodeUpdated) && pe(
          () => Ae(ce, F, w, K),
          g
        ), process.env.NODE_ENV !== "production" && or(l), process.env.NODE_ENV !== "production" && tn();
      } else {
        let w;
        const { el: x, props: $ } = u, { bm: F, m: K, parent: W, root: ce, type: le } = l, Ce = It(u);
        nt(l, !1), F && wt(F), !Ce && (w = $ && $.onVnodeBeforeMount) && Ae(w, W, u), nt(l, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(le), process.env.NODE_ENV !== "production" && dt(l, "render");
          const Te = l.subTree = eo(l);
          process.env.NODE_ENV !== "production" && ht(l, "render"), process.env.NODE_ENV !== "production" && dt(l, "patch"), V(
            null,
            Te,
            h,
            v,
            l,
            g,
            m
          ), process.env.NODE_ENV !== "production" && ht(l, "patch"), u.el = Te.el;
        }
        if (K && pe(K, g), !Ce && (w = $ && $.onVnodeMounted)) {
          const Te = u;
          pe(
            () => Ae(w, W, Te),
            g
          );
        }
        (u.shapeFlag & 256 || W && It(W.vnode) && W.vnode.shapeFlag & 256) && l.a && pe(l.a, g), l.isMounted = !0, process.env.NODE_ENV !== "production" && ki(l), u = h = v = null;
      }
    };
    l.scope.on();
    const b = l.effect = new Po(N);
    l.scope.off();
    const E = l.update = b.run.bind(b), T = l.job = b.runIfDirty.bind(b);
    T.i = l, T.id = l.uid, b.scheduler = () => Vn(T), nt(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (w) => wt(l.rtc, w) : void 0, b.onTrigger = l.rtg ? (w) => wt(l.rtg, w) : void 0), E();
  }, I = (l, u, h) => {
    u.component = l;
    const v = l.vnode.props;
    l.vnode = u, l.next = null, Sc(l, u.props, v, h), Fc(l, u.children, h), xe(), Ws(l), Ve();
  }, Se = (l, u, h, v, g, m, O, N, b = !1) => {
    const E = l && l.children, T = l ? l.shapeFlag : 0, w = u.children, { patchFlag: x, shapeFlag: $ } = u;
    if (x > 0) {
      if (x & 128) {
        Nt(
          E,
          w,
          h,
          v,
          g,
          m,
          O,
          N,
          b
        );
        return;
      } else if (x & 256) {
        An(
          E,
          w,
          h,
          v,
          g,
          m,
          O,
          N,
          b
        );
        return;
      }
    }
    $ & 8 ? (T & 16 && yt(E, g, m), w !== E && p(h, w)) : T & 16 ? $ & 16 ? Nt(
      E,
      w,
      h,
      v,
      g,
      m,
      O,
      N,
      b
    ) : yt(E, g, m, !0) : (T & 8 && p(h, ""), $ & 16 && re(
      w,
      h,
      v,
      g,
      m,
      O,
      N,
      b
    ));
  }, An = (l, u, h, v, g, m, O, N, b) => {
    l = l || gt, u = u || gt;
    const E = l.length, T = u.length, w = Math.min(E, T);
    let x;
    for (x = 0; x < w; x++) {
      const $ = u[x] = b ? Ye(u[x]) : Ne(u[x]);
      V(
        l[x],
        $,
        h,
        null,
        g,
        m,
        O,
        N,
        b
      );
    }
    E > T ? yt(
      l,
      g,
      m,
      !0,
      !1,
      w
    ) : re(
      u,
      h,
      v,
      g,
      m,
      O,
      N,
      b,
      w
    );
  }, Nt = (l, u, h, v, g, m, O, N, b) => {
    let E = 0;
    const T = u.length;
    let w = l.length - 1, x = T - 1;
    for (; E <= w && E <= x; ) {
      const $ = l[E], F = u[E] = b ? Ye(u[E]) : Ne(u[E]);
      if (St($, F))
        V(
          $,
          F,
          h,
          null,
          g,
          m,
          O,
          N,
          b
        );
      else
        break;
      E++;
    }
    for (; E <= w && E <= x; ) {
      const $ = l[w], F = u[x] = b ? Ye(u[x]) : Ne(u[x]);
      if (St($, F))
        V(
          $,
          F,
          h,
          null,
          g,
          m,
          O,
          N,
          b
        );
      else
        break;
      w--, x--;
    }
    if (E > w) {
      if (E <= x) {
        const $ = x + 1, F = $ < T ? u[$].el : v;
        for (; E <= x; )
          V(
            null,
            u[E] = b ? Ye(u[E]) : Ne(u[E]),
            h,
            F,
            g,
            m,
            O,
            N,
            b
          ), E++;
      }
    } else if (E > x)
      for (; E <= w; )
        Ge(l[E], g, m, !0), E++;
    else {
      const $ = E, F = E, K = /* @__PURE__ */ new Map();
      for (E = F; E <= x; E++) {
        const ne = u[E] = b ? Ye(u[E]) : Ne(u[E]);
        ne.key != null && (process.env.NODE_ENV !== "production" && K.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), K.set(ne.key, E));
      }
      let W, ce = 0;
      const le = x - F + 1;
      let Ce = !1, Te = 0;
      const Dt = new Array(le);
      for (E = 0; E < le; E++) Dt[E] = 0;
      for (E = $; E <= w; E++) {
        const ne = l[E];
        if (ce >= le) {
          Ge(ne, g, m, !0);
          continue;
        }
        let Pe;
        if (ne.key != null)
          Pe = K.get(ne.key);
        else
          for (W = F; W <= x; W++)
            if (Dt[W - F] === 0 && St(ne, u[W])) {
              Pe = W;
              break;
            }
        Pe === void 0 ? Ge(ne, g, m, !0) : (Dt[Pe - F] = E + 1, Pe >= Te ? Te = Pe : Ce = !0, V(
          ne,
          u[Pe],
          h,
          null,
          g,
          m,
          O,
          N,
          b
        ), ce++);
      }
      const Ms = Ce ? Bc(Dt) : gt;
      for (W = Ms.length - 1, E = le - 1; E >= 0; E--) {
        const ne = F + E, Pe = u[ne], Is = u[ne + 1], Rs = ne + 1 < T ? (
          // #13559, fallback to el placeholder for unresolved async component
          Is.el || Is.placeholder
        ) : v;
        Dt[E] === 0 ? V(
          null,
          Pe,
          h,
          Rs,
          g,
          m,
          O,
          N,
          b
        ) : Ce && (W < 0 || E !== Ms[W] ? at(Pe, h, Rs, 2) : W--);
      }
    }
  }, at = (l, u, h, v, g = null) => {
    const { el: m, type: O, transition: N, children: b, shapeFlag: E } = l;
    if (E & 6) {
      at(l.component.subTree, u, h, v);
      return;
    }
    if (E & 128) {
      l.suspense.move(u, h, v);
      return;
    }
    if (E & 64) {
      O.move(l, u, h, Ot);
      return;
    }
    if (O === Me) {
      s(m, u, h);
      for (let w = 0; w < b.length; w++)
        at(b[w], u, h, v);
      s(l.anchor, u, h);
      return;
    }
    if (O === rn) {
      ae(l, u, h);
      return;
    }
    if (v !== 2 && E & 1 && N)
      if (v === 0)
        N.beforeEnter(m), s(m, u, h), pe(() => N.enter(m), g);
      else {
        const { leave: w, delayLeave: x, afterLeave: $ } = N, F = () => {
          l.ctx.isUnmounted ? o(m) : s(m, u, h);
        }, K = () => {
          m._isLeaving && m[Qi](
            !0
            /* cancelled */
          ), w(m, () => {
            F(), $ && $();
          });
        };
        x ? x(m, F, K) : K();
      }
    else
      s(m, u, h);
  }, Ge = (l, u, h, v = !1, g = !1) => {
    const {
      type: m,
      props: O,
      ref: N,
      children: b,
      dynamicChildren: E,
      shapeFlag: T,
      patchFlag: w,
      dirs: x,
      cacheIndex: $
    } = l;
    if (w === -2 && (g = !1), N != null && (xe(), Mt(N, null, h, l, !0), Ve()), $ != null && (u.renderCache[$] = void 0), T & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const F = T & 1 && x, K = !It(l);
    let W;
    if (K && (W = O && O.onVnodeBeforeUnmount) && Ae(W, u, l), T & 6)
      Lr(l.component, h, v);
    else {
      if (T & 128) {
        l.suspense.unmount(h, v);
        return;
      }
      F && tt(l, null, u, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        u,
        h,
        Ot,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Me || w > 0 && w & 64) ? yt(
        E,
        u,
        h,
        !1,
        !0
      ) : (m === Me && w & 384 || !g && T & 16) && yt(b, u, h), v && $n(l);
    }
    (K && (W = O && O.onVnodeUnmounted) || F) && pe(() => {
      W && Ae(W, u, l), F && tt(l, null, u, "unmounted");
    }, h);
  }, $n = (l) => {
    const { type: u, el: h, anchor: v, transition: g } = l;
    if (u === Me) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && g && !g.persisted ? l.children.forEach((O) => {
        O.type === De ? o(O.el) : $n(O);
      }) : Hr(h, v);
      return;
    }
    if (u === rn) {
      S(l);
      return;
    }
    const m = () => {
      o(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: O, delayLeave: N } = g, b = () => O(h, m);
      N ? N(l.el, m, b) : b();
    } else
      m();
  }, Hr = (l, u) => {
    let h;
    for (; l !== u; )
      h = _(l), o(l), l = h;
    o(u);
  }, Lr = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Hi(l);
    const { bum: v, scope: g, job: m, subTree: O, um: N, m: b, a: E } = l;
    Qs(b), Qs(E), v && wt(v), g.stop(), m && (m.flags |= 8, Ge(O, l, u, h)), N && pe(N, u), pe(() => {
      l.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && qi(l);
  }, yt = (l, u, h, v = !1, g = !1, m = 0) => {
    for (let O = m; O < l.length; O++)
      Ge(l[O], u, h, v, g);
  }, zt = (l) => {
    if (l.shapeFlag & 6)
      return zt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = _(l.anchor || l.el), h = u && u[Xi];
    return h ? _(h) : u;
  };
  let Mn = !1;
  const $s = (l, u, h) => {
    l == null ? u._vnode && Ge(u._vnode, null, null, !0) : V(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = l, Mn || (Mn = !0, Ws(), tr(), Mn = !1);
  }, Ot = {
    p: V,
    um: Ge,
    m: at,
    r: $n,
    mt: qe,
    mc: re,
    pc: Se,
    pbc: Ke,
    n: zt,
    o: e
  };
  return {
    render: $s,
    hydrate: void 0,
    createApp: Dc($s)
  };
}
function Wn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function on(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (C(s) && C(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let c = o[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[r] = Ye(o[r]), c.el = i.el), !n && c.patchFlag !== -2 && on(i, c)), c.type === Gt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = i.el), c.type === De && !c.el && (c.el = i.el), process.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function Bc(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, c;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Or(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
function Qs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kc = Symbol.for("v-scx"), Kc = () => {
  {
    const e = sn(kc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Bn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !P(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Dr(e, t, n);
}
function Dr(e, t, n = B) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = G({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const f = t && s || !t && r !== "post";
  let d;
  if (Wt) {
    if (r === "sync") {
      const D = Kc();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!f) {
      const D = () => {
      };
      return D.stop = z, D.resume = z, D.pause = z, D;
    }
  }
  const p = ee;
  c.call = (D, A, V) => Fe(D, p, A, V);
  let a = !1;
  r === "post" ? c.scheduler = (D) => {
    pe(D, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (D, A) => {
    A ? D() : Vn(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const _ = Ti(e, t, c);
  return Wt && (d ? d.push(_) : f && _()), _;
}
function qc(e, t, n) {
  const s = this.proxy, o = J(e) ? e.includes(".") ? wr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  P(t) ? r = t : (r = t.handler, n = t);
  const i = Jt(this), c = Dr(o, r.bind(s), n);
  return i(), c;
}
function wr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Gc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Jc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(ue(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(ue(t))}" prop.`
        );
      else {
        const _ = p[t];
        P(_) && (_(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Gc(s, t.slice(7));
  if (i && (i.trim && (o = n.map((p) => J(p) ? p.trim() : p)), i.number && (o = n.map(Kr))), process.env.NODE_ENV !== "production" && Yi(e, t, o), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && s[st(p)] && y(
      `Event "${p}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = s[c = st(t)] || // also try camelCase event handler (#2249)
  s[c = st(ue(t))];
  !f && r && (f = s[c = st(he(t))]), f && Fe(
    f,
    e,
    6,
    o
  );
  const d = s[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Fe(
      d,
      e,
      6,
      o
    );
  }
}
const Yc = /* @__PURE__ */ new WeakMap();
function xr(e, t, n = !1) {
  const s = n ? Yc : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, c = !1;
  if (!P(e)) {
    const f = (d) => {
      const p = xr(d, t, !0);
      p && (c = !0, G(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (k(e) && s.set(e, null), null) : (C(r) ? r.forEach((f) => i[f] = null) : G(i, r), k(e) && s.set(e, i), i);
}
function Cn(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, he(t)) || R(e, t));
}
let os = !1;
function En() {
  os = !0;
}
function eo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: f,
    render: d,
    renderCache: p,
    props: a,
    data: _,
    setupState: D,
    ctx: A,
    inheritAttrs: V
  } = e, Z = _n(e);
  let q, L;
  process.env.NODE_ENV !== "production" && (os = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = o || s, Q = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(S, {
        get(ve, te, re) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, te, re);
        }
      }) : S;
      q = Ne(
        d.call(
          Q,
          S,
          p,
          process.env.NODE_ENV !== "production" ? Re(a) : a,
          D,
          _,
          A
        )
      ), L = c;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && c === a && En(), q = Ne(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Re(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return En(), Re(c);
            },
            slots: i,
            emit: f
          } : { attrs: c, slots: i, emit: f }
        ) : S(
          process.env.NODE_ENV !== "production" ? Re(a) : a,
          null
        )
      ), L = t.props ? c : zc(c);
    }
  } catch (S) {
    Rt.length = 0, Kt(S, e, 1), q = Xe(De);
  }
  let H = q, ae;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([H, ae] = Vr(q)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: Q } = H;
    if (S.length) {
      if (Q & 7)
        r && S.some(fn) && (L = Xc(
          L,
          r
        )), H = Qe(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !os && H.type !== De) {
        const ve = Object.keys(c), te = [], re = [];
        for (let He = 0, Ke = ve.length; He < Ke; He++) {
          const be = ve[He];
          Bt(be) ? fn(be) || te.push(be[2].toLowerCase() + be.slice(3)) : re.push(be);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !to(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = Qe(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !to(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Os(H, n.transition)), process.env.NODE_ENV !== "production" && ae ? ae(H) : q = H, _n(Z), q;
}
const Vr = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ss(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Vr(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (c) => {
    t[o] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ne(s), i];
};
function Ss(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Tn(o)) {
      if (o.type !== De || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ss(n.children);
      }
    } else
      return;
  }
  return n;
}
const zc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xc = (e, t) => {
  const n = {};
  for (const s in e)
    (!fn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, to = (e) => e.shapeFlag & 7 || e.type === De;
function Zc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: c, patchFlag: f } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || c) && je || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? no(s, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const _ = p[a];
        if (i[_] !== s[_] && !Cn(d, _))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? no(s, i, d) : !0 : !!i;
  return !1;
}
function no(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Cn(n, r))
      return !0;
  }
  return !1;
}
function Qc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Sr = (e) => e.__isSuspense;
function el(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : er(e);
}
const Me = Symbol.for("v-fgt"), Gt = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), Rt = [];
let ge = null;
function tl(e = !1) {
  Rt.push(ge = e ? null : []);
}
function nl() {
  Rt.pop(), ge = Rt[Rt.length - 1] || null;
}
let Ut = 1;
function so(e, t = !1) {
  Ut += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function sl(e) {
  return e.dynamicChildren = Ut > 0 ? ge || gt : null, nl(), Ut > 0 && ge && ge.push(e), e;
}
function ol(e, t, n, s, o, r) {
  return sl(
    jt(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = nn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const rl = (...e) => Tr(
  ...e
), Cr = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || P(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function jt(e, t = null, n = null, s = 0, o = null, r = e === Me ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cr(t),
    ref: t && cn(t),
    scopeId: ir,
    slotScopeIds: null,
    children: n,
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
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return c ? (Cs(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const Xe = process.env.NODE_ENV !== "production" ? rl : Tr;
function Tr(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === dc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = De), Tn(e)) {
    const c = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cs(c, n), Ut > 0 && !r && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag = -2, c;
  }
  if (Rr(e) && (e = e.__vccOpts), t) {
    t = il(t);
    let { class: c, style: f } = t;
    c && !J(c) && (t.class = ds(c)), k(f) && (an(f) && !C(f) && (f = G({}, f)), t.style = ps(f));
  }
  const i = J(e) ? 1 : Sr(e) ? 128 : Zi(e) ? 64 : k(e) ? 4 : P(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && an(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), jt(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function il(e) {
  return e ? an(e) || mr(e) ? G({}, e) : e : null;
}
function Qe(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: c, transition: f } = e, d = t ? ll(o || {}, t) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Cr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(c) ? c.map(Pr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Me ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && Os(
    p,
    f.clone(p)
  ), p;
}
function Pr(e) {
  const t = Qe(e);
  return C(e.children) && (t.children = e.children.map(Pr)), t;
}
function cl(e = " ", t = 0) {
  return Xe(Gt, null, e, t);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? Xe(De) : C(e) ? Xe(
    Me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? Ye(e) : Xe(Gt, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Cs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !mr(t) ? t._ctx = _e : o === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [cl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ll(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ds([t.class, s.class]));
      else if (o === "style")
        t.style = ps([t.style, s.style]);
      else if (Bt(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(C(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ae(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const fl = hr();
let ul = 0;
function al(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || fl, r = {
    uid: ul++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new oi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Er(s, o),
    emitsOptions: xr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = hc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Jc.bind(null, r), e.ce && e.ce(r), r;
}
let ee = null;
const Ar = () => ee || _e;
let bn, rs;
{
  const e = kt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ee = n
  ), rs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wt = n
  );
}
const Jt = (e) => {
  const t = ee;
  return bn(e), e.scope.on(), () => {
    e.scope.off(), bn(t);
  };
}, oo = () => {
  ee && ee.scope.off(), bn(null);
}, pl = /* @__PURE__ */ Be("slot,component");
function is(e, { isNativeTag: t }) {
  (pl(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function $r(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function dl(e, t = !1, n = !1) {
  t && rs(t);
  const { props: s, children: o } = e.vnode, r = $r(e);
  xc(e, s, r, t), jc(e, o, n || t);
  const i = r ? hl(e, t) : void 0;
  return t && rs(!1), i;
}
function hl(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && is(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        is(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        cr(r[i]);
    }
    s.compilerOptions && _l() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ar), process.env.NODE_ENV !== "production" && _c(e);
  const { setup: o } = s;
  if (o) {
    xe();
    const r = e.setupContext = o.length > 1 ? ml(e) : null, i = Jt(e), c = bt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Re(e.props) : e.props,
        r
      ]
    ), f = fs(c);
    if (Ve(), i(), (f || e.sp) && !It(e) && lr(e), f) {
      if (c.then(oo, oo), t)
        return c.then((d) => {
          ro(e, d, t);
        }).catch((d) => {
          Kt(d, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = s.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ro(e, c, t);
  } else
    Mr(e, t);
}
function ro(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Tn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Yo(t), process.env.NODE_ENV !== "production" && gc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Mr(e, n);
}
const _l = () => !0;
function Mr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || z);
  {
    const o = Jt(e);
    xe();
    try {
      vc(e);
    } finally {
      Ve(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === z && !t && (s.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", s));
}
const io = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return En(), Y(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function gl(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Y(e, "get", "$slots"), t[n];
    }
  });
}
function ml(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (C(n) ? s = "array" : X(n) && (s = "ref")), s !== "object" && y(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, io));
      },
      get slots() {
        return s || (s = gl(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, io),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ts(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yo(wi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ft)
        return ft[n](e);
    },
    has(t, n) {
      return n in t || n in ft;
    }
  })) : e.proxy;
}
const vl = /(?:^|[-_])\w/g, El = (e) => e.replace(vl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ir(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let s = Ir(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? El(s) : n ? "App" : "Anonymous";
}
function Rr(e) {
  return P(e) && "__vccOpts" in e;
}
const bl = (e, t) => {
  const n = Si(e, t, Wt);
  if (process.env.NODE_ENV !== "production") {
    const s = Ar();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!k(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (X(a)) {
        xe();
        const _ = a.value;
        return Ve(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          c(_),
          ">"
        ];
      } else {
        if (mt(a))
          return [
            "div",
            {},
            ["span", e, me(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${Ze(a) ? " (readonly)" : ""}`
          ];
        if (Ze(a))
          return [
            "div",
            {},
            ["span", e, me(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(i("props", M(a.props))), a.setupState !== B && _.push(i("setup", a.setupState)), a.data !== B && _.push(i("data", M(a.data)));
    const D = f(a, "computed");
    D && _.push(i("computed", D));
    const A = f(a, "inject");
    return A && _.push(i("injected", A)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function i(a, _) {
    return _ = G({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", s, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : k(a) ? ["object", { object: _ ? M(a) : a }] : ["span", n, String(a)];
  }
  function f(a, _) {
    const D = a.type;
    if (P(D))
      return;
    const A = {};
    for (const V in a.ctx)
      d(D, V, _) && (A[V] = a.ctx[V]);
    return A;
  }
  function d(a, _, D) {
    const A = a[D];
    if (C(A) && A.includes(_) || k(A) && _ in A || a.extends && d(a.extends, _, D) || a.mixins && a.mixins.some((V) => d(V, _, D)))
      return !0;
  }
  function p(a) {
    return me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const co = "3.5.22", Ee = process.env.NODE_ENV !== "production" ? y : z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cs;
const lo = typeof window < "u" && window.trustedTypes;
if (lo)
  try {
    cs = /* @__PURE__ */ lo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ee(`Error creating trusted types policy: ${e}`);
  }
const jr = cs ? (e) => cs.createHTML(e) : (e) => e, yl = "http://www.w3.org/2000/svg", Ol = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, fo = Ue && /* @__PURE__ */ Ue.createElement("template"), Dl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ue.createElementNS(yl, e) : t === "mathml" ? Ue.createElementNS(Ol, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      fo.innerHTML = jr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = fo.content;
      if (s === "svg" || s === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wl = Symbol("_vtc");
function xl(e, t, n) {
  const s = e[wl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const uo = Symbol("_vod"), Vl = Symbol("_vsh"), Sl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cl = /(?:^|;)\s*display\s*:/;
function Tl(e, t, n) {
  const s = e.style, o = J(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && ln(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && ln(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), ln(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Sl];
      i && (n += ";" + i), s.cssText = n, r = Cl.test(n);
    }
  } else t && e.removeAttribute("style");
  uo in e && (e[uo] = r ? s.display : "", e[Vl] && (s.display = "none"));
}
const Pl = /[^\\];\s*$/, ao = /\s*!important$/;
function ln(e, t, n) {
  if (C(n))
    n.forEach((s) => ln(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Pl.test(n) && Ee(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Al(e, t);
    ao.test(n) ? e.setProperty(
      he(s),
      n.replace(ao, ""),
      "important"
    ) : e[s] = n;
  }
}
const po = ["Webkit", "Moz", "ms"], kn = {};
function Al(e, t) {
  const n = kn[t];
  if (n)
    return n;
  let s = ue(t);
  if (s !== "filter" && s in e)
    return kn[t] = s;
  s = Dn(s);
  for (let o = 0; o < po.length; o++) {
    const r = po[o] + s;
    if (r in e)
      return kn[t] = r;
  }
  return t;
}
const ho = "http://www.w3.org/1999/xlink";
function _o(e, t, n, s, o, r = si(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ho, t.slice(6, t.length)) : e.setAttributeNS(ho, t, n) : n == null || r && !Vo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : et(n) ? String(n) : n
  );
}
function go(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Vo(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && Ee(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(o || t);
}
function $l(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ml(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const mo = Symbol("_vei");
function Il(e, t, n, s, o = null) {
  const r = e[mo] || (e[mo] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? Eo(s, t) : s;
  else {
    const [c, f] = Rl(t);
    if (s) {
      const d = r[t] = Hl(
        process.env.NODE_ENV !== "production" ? Eo(s, t) : s,
        o
      );
      $l(e, c, d, f);
    } else i && (Ml(e, c, i, f), r[t] = void 0);
  }
}
const vo = /(?:Once|Passive|Capture)$/;
function Rl(e) {
  let t;
  if (vo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(vo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let Kn = 0;
const jl = /* @__PURE__ */ Promise.resolve(), Fl = () => Kn || (jl.then(() => Kn = 0), Kn = Date.now());
function Hl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Fe(
      Ll(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Fl(), n;
}
function Eo(e, t) {
  return P(e) || C(e) ? e : (Ee(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), z);
}
function Ll(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ul = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? xl(e, s, i) : t === "style" ? Tl(e, n, s) : Bt(t) ? fn(t) || Il(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wl(e, t, s, i)) ? (go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _o(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(s)) ? go(e, ue(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), _o(e, t, s, i));
};
function Wl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return bo(t) && J(n) ? !1 : t in e;
}
const No = {};
// @__NO_SIDE_EFFECTS__
function Bl(e, t, n) {
  let s = /* @__PURE__ */ ec(e, t);
  yn(s) && (s = G({}, s, t));
  class o extends Ps {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
const kl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ps extends kl {
  constructor(t, n = {}, s = Oo) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Oo ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Ee(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      G({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ps) {
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
    this._connected = !1, Zo(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: i } = s;
      let c;
      if (r && !C(r))
        for (const f in r) {
          const d = r[f];
          (d === Number || d && d.type === Number) && (f in this._props && (this._props[f] = js(this._props[f])), (c || (c = /* @__PURE__ */ Object.create(null)))[ue(f)] = !0);
        }
      this._numberProps = c, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && Ee(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        R(this, s) ? process.env.NODE_ENV !== "production" && Ee(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Jo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = C(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(ue))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : No;
    const o = ue(t);
    n && this._numberProps && this._numberProps[o] && (s = js(s)), this._setProp(o, s, !1, !0);
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
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (n === No ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), ql(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, G(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, process.env.NODE_ENV !== "production" && (s.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            yn(i[0]) ? G({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), he(r) !== r && o(he(r), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const r = document.createElement("style");
      if (s && r.setAttribute("nonce", s), r.textContent = t[o], this.shadowRoot.prepend(r), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], r = o.getAttribute("name") || "default", i = this._slots[r], c = o.parentNode;
      if (i)
        for (const f of i) {
          if (n && f.nodeType === 1) {
            const d = n + "-s", p = document.createTreeWalker(f, 1);
            f.setAttribute(d, "");
            let a;
            for (; a = p.nextNode(); )
              a.setAttribute(d, "");
          }
          c.insertBefore(f, o);
        }
      else
        for (; o.firstChild; ) c.insertBefore(o.firstChild, o);
      c.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    return this._teleportTargets && t.push(...this._teleportTargets), t.reduce((n, s) => (n.push(...Array.from(s.querySelectorAll("slot"))), n), []);
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
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
const Kl = /* @__PURE__ */ G({ patchProp: Ul }, Dl);
let yo;
function Fr() {
  return yo || (yo = Lc(Kl));
}
const ql = ((...e) => {
  Fr().render(...e);
}), Oo = ((...e) => {
  const t = Fr().createApp(...e);
  process.env.NODE_ENV !== "production" && (Jl(t), Yl(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = zl(s);
    if (!o) return;
    const r = t._component;
    !P(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Gl(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function Gl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Qr(t) || ei(t) || ti(t),
    writable: !1
  });
}
function Yl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ee(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ee(s), n;
      },
      set() {
        Ee(s);
      }
    });
  }
}
function zl(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ee(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ee(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xl() {
  Nl();
}
process.env.NODE_ENV !== "production" && Xl();
const Zl = ".my-widget-root[data-v-f40ff819]{border:1px solid #ddd;padding:12px;border-radius:8px;display:inline-block}", Ql = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ef = {
  props: {
    message: { type: String, default: "hello" }
  },
  methods: {
    onClick() {
      this.$emit("widget-click", { time: Date.now() });
    }
  }
}, tf = { class: "my-widget-root" };
function nf(e, t, n, s, o, r) {
  return tl(), ol("div", tf, [
    t[1] || (t[1] = jt("h3", null, "Hi, I'm a Web Component", -1)),
    jt("p", null, "message: " + Co(n.message), 1),
    jt("button", {
      onClick: t[0] || (t[0] = (...i) => r.onClick && r.onClick(...i))
    }, "Click")
  ]);
}
const sf = /* @__PURE__ */ Ql(ef, [["render", nf], ["styles", [Zl]], ["__scopeId", "data-v-f40ff819"]]), of = /* @__PURE__ */ Bl(sf);
customElements.get("my-widget") || customElements.define("my-widget", of);
export {
  of as default
};
