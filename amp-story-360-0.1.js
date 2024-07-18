(self.AMP = self.AMP || []).push({
  m: 0,
  v: "2406131415000",
  n: "amp-story-360",
  ev: "0.1",
  l: !0,
  f: function (t, n) {
    !(function () {
      var n,
        i = function () {
          var t = this;
          this.promise = new Promise(function (n, i) {
            (t.resolve = n), (t.reject = i);
          });
        };
      function r(t, n) {
        return (r =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function o(t) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, n) {
        if (n && ("object" === e(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function s(t, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, n, i) {
        return n && s(t.prototype, n), i && s(t, i), t;
      }
      var c = "load-end",
        l = Array.isArray,
        f = Object.prototype;
      function h(t, n, i, r, o, e, a, s, u, c, l) {
        return t;
      }
      function p(t) {
        if (
          (h(
            (function (t) {
              var n = t.tagName;
              return (
                n.startsWith("AMP-") &&
                !("AMP-STICKY-AD-TOP-PADDING" == n || "AMP-BODY" == n)
              );
            })(t)
          ),
          t.createdCallback)
        )
          return Promise.resolve(t);
        if (!t.__AMP_UPG_PRM) {
          var n = new i();
          (t.__AMP_UPG_PRM = n.promise), (t.__AMP_UPG_RES = n.resolve);
        }
        var r = t.__AMP_UPG_PRM;
        return h(r), r;
      }
      function m(t, n, i) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      function v(t, n) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function d(t) {
        for (var n = 1; n < arguments.length; n++) {
          var i = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? v(Object(i), !0).forEach(function (n) {
                m(t, n, i[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : v(Object(i)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(i, n)
                );
              });
        }
        return t;
      }
      function y(t, n) {
        if (!!n !== n && null != n)
          if (Array.isArray(n))
            n.forEach(function (n) {
              y(t, n);
            });
          else {
            var i = n;
            t.appendChild(
              i.nodeType ? i : self.document.createTextNode(String(n))
            );
          }
      }
      function g(t, n, i) {
        if (!1 !== i && null != i)
          if ("function" != typeof i || "o" !== n[0] || "n" !== n[1])
            t.setAttribute(n, !0 === i ? "" : String(i));
          else {
            var r = n.toLowerCase().substring(2);
            t.addEventListener(r, i);
          }
      }
      function x(t, n) {
        for (
          var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2;
          o < i;
          o++
        )
          r[o - 2] = arguments[o];
        if ("string" != typeof t) return t(d(d({}, n), {}, { children: r }));
        var e = null == n ? void 0 : n.xmlns;
        e && delete n.xmlns;
        var a = e
          ? self.document.createElementNS(e, t)
          : self.document.createElement(t);
        return (
          y(a, r),
          n &&
            Object.keys(n).forEach(function (t) {
              g(a, t, n[t]);
            }),
          a
        );
      }
      function b(t, n) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
        if (!isFinite(i) || i < 0) throw new Error("Invalid depth: " + i);
        if (t === n) return !0;
        for (var r = [{ a: t, b: n, depth: i }]; r.length > 0; ) {
          var o = r.shift(),
            a = o.a,
            s = o.b,
            u = o.depth;
          if (u > 0) {
            if (e(a) !== e(s)) return !1;
            if (l(a) && l(s)) {
              if (a.length !== s.length) return !1;
              for (var c = 0; c < a.length; c++)
                r.push({ a: a[c], b: s[c], depth: u - 1 });
              continue;
            }
            if (a && s && "object" === e(a) && "object" === e(s)) {
              var f = Object.keys(a),
                h = Object.keys(s);
              if (f.length !== h.length) return !1;
              for (var p = 0, m = f; p < m.length; p++) {
                var v = m[p];
                r.push({ a: a[v], b: s[v], depth: u - 1 });
              }
              continue;
            }
          }
          if (a !== s) return !1;
        }
        return !0;
      }
      function w(t) {
        return (t.ownerDocument || t).defaultView;
      }
      function S(t) {
        if (!t) return null;
        var n = t.match(
            /^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i
          ),
          i = n ? n[2] : void 0,
          r = n ? n[3] : void 0;
        return i && r ? { extensionId: i, extensionVersion: r } : null;
      }
      f.hasOwnProperty,
        f.toString,
        (self.__AMP_LOG = self.__AMP_LOG || {
          user: null,
          dev: null,
          userForEmbed: null,
        });
      var j = self.__AMP_LOG;
      function P(t, n) {
        throw new Error("failed to call initLogConstructor");
      }
      function O(t) {
        return (
          j.user || (j.user = R()),
          (function (t, n) {
            return n && n.ownerDocument.defaultView != t;
          })(j.user.win, t)
            ? j.userForEmbed || (j.userForEmbed = R())
            : j.user
        );
      }
      function R(t) {
        return P();
      }
      function q(t, n, i, r, o, e, a, s, u, c, l) {
        return t;
      }
      function M(t, n, i, r, o, e, a, s, u, c, l) {
        return O().assert(t, n, i, r, o, e, a, s, u, c, l);
      }
      function z(t, n) {
        return E(
          (t = (function (t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t);
          })(t)),
          n
        );
      }
      function A(t, n) {
        return D(t, n);
      }
      function k(t) {
        return t.nodeType ? ((n = w(t)), z(n, "ampdoc")).getAmpDoc(t) : t;
        var n;
      }
      function F(t) {
        var n = k(t);
        return n.isSingleDoc() ? n.win : n;
      }
      function E(t, n) {
        q(_(t, n));
        var i = I(t)[n];
        return (
          i.obj ||
            (q(i.ctor),
            q(i.context),
            (i.obj = new i.ctor(i.context)),
            q(i.obj),
            (i.context = null),
            i.resolve && i.resolve(i.obj)),
          i.obj
        );
      }
      function T(t, n) {
        var r = D(t, n);
        if (r) return r;
        var o,
          e,
          a,
          s,
          u = I(t);
        return (
          (u[n] =
            ((e = (o = new i()).promise),
            (a = o.reject),
            (s = o.resolve),
            e.catch(function () {}),
            {
              obj: null,
              promise: e,
              resolve: s,
              reject: a,
              context: null,
              ctor: null,
            })),
          u[n].promise
        );
      }
      function D(t, n) {
        var i = I(t)[n];
        return i
          ? i.promise
            ? i.promise
            : (E(t, n), (i.promise = Promise.resolve(i.obj)))
          : null;
      }
      function I(t) {
        var n = t.__AMP_SERVICES;
        return n || (n = t.__AMP_SERVICES = {}), n;
      }
      function _(t, n) {
        var i = t.__AMP_SERVICES && t.__AMP_SERVICES[n];
        return !(!i || !i.ctor);
      }
      function G(t, n, i, r, o) {
        return (
          A(t, n) ||
          (function (t, n, i, r, o) {
            return ((e = t.document),
            new Promise(function (t) {
              return (function (t, n) {
                !(function (t, n, i) {
                  if (n()) i();
                  else {
                    var r = w(t);
                    if (r.MutationObserver) {
                      var o = new r.MutationObserver(function () {
                        n() && (o.disconnect(), i());
                      });
                      o.observe(t, { childList: !0 });
                    } else
                      var e = r.setInterval(function () {
                        n() && (r.clearInterval(e), i());
                      }, 5);
                  }
                })(
                  t.documentElement,
                  function () {
                    return !!t.body;
                  },
                  n
                );
              })(e, t);
            }))
              .then(function () {
                var n = z(t, "extensions");
                return (function (t, n, i) {
                  return (function (t) {
                    if (!t) return [];
                    for (
                      var n = t.querySelectorAll(
                          "script[custom-element],script[custom-template]"
                        ),
                        i = [],
                        r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r],
                        e =
                          o.getAttribute("custom-element") ||
                          o.getAttribute("custom-template"),
                        a = S(o.src);
                      e &&
                        a &&
                        i.push({
                          script: o,
                          extensionId: e,
                          extensionVersion: a.extensionVersion,
                        });
                    }
                    return i;
                  })(t.document.head).some(function (t) {
                    var r = t.extensionId,
                      o = t.extensionVersion;
                    return n == r && i == o;
                  });
                })(n.win, i, r)
                  ? n.waitForExtension(i, r)
                  : null;
              })
              .then(function (i) {
                return i
                  ? o
                    ? A(t, n)
                    : (function (t, n) {
                        return T(t, n);
                      })(t, n)
                  : null;
              });
            var e;
          })(t, n, i, r, o)
        );
      }
      var B;
      function C(t, n, i, r) {
        var o,
          e = new Promise(function (r) {
            o = (function (t, n, i, r) {
              var o = i,
                e = (function (t, n, i, r) {
                  var o = t,
                    e = i,
                    a = function (t) {
                      try {
                        return e(t);
                      } catch (t) {
                        var n, i;
                        throw (
                          (null === (n = (i = self).__AMP_REPORT_ERROR) ||
                            void 0 === n ||
                            n.call(i, t),
                          t)
                        );
                      }
                    },
                    s = (function () {
                      if (void 0 !== B) return B;
                      B = !1;
                      try {
                        var t = {
                          get capture() {
                            return (B = !0), !1;
                          },
                        };
                        self.addEventListener("test-options", null, t),
                          self.removeEventListener("test-options", null, t);
                      } catch (t) {}
                      return B;
                    })(),
                    u = !(null == r || !r.capture);
                  return (
                    o.addEventListener(n, a, s ? r : u),
                    function () {
                      null == o || o.removeEventListener(n, a, s ? r : u),
                        (e = null),
                        (o = null),
                        (a = null);
                    }
                  );
                })(
                  t,
                  n,
                  function (t) {
                    try {
                      o(t);
                    } finally {
                      (o = null), e();
                    }
                  },
                  r
                );
              return e;
            })(t, n, r, i);
          });
        return e.then(o, o), r && r(o), e;
      }
      var N =
          "\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp   float;\n    #else\n      precision mediump float;\n    #endif\n\n    const   float     pi = 3.14159265359;\n    uniform float     uPxSize;\n    uniform mat3      uRot;\n    uniform sampler2D uTex;\n    varying vec2      vPos;\n\n    vec4 sample(float dx, float dy) {\n      vec3 q = vec3(vPos + uPxSize * vec2(dx, dy), -1.0);\n      vec3 dir = normalize(uRot * q);\n      float u = (-0.5 / pi) * atan(dir[1], dir[0]) + 0.5;\n      float v = (1.0 / pi) * acos(dir[2]);\n      return texture2D(uTex, vec2(u, v));\n    }\n  ",
        Y =
          "\n    void main() {\n      gl_FragColor = sample(0.0, 0.0);\n    }\n  ",
        L =
          "\n    vec4 sampleSq(float dx, float dy) {\n      vec4 s = sample(dx, dy);\n      return vec4(s.xyz * s.xyz, s.w);\n    }\n\n    void main() {\n      // (2, 3) halton vector sequences.\n      vec4 acc = (1.0 / 16.0) * (\n        (((sampleSq(1.0 / 2.0 - 0.5,  1.0 / 3.0 - 0.5) +\n           sampleSq(1.0 / 4.0 - 0.5,  2.0 / 3.0 - 0.5)) +\n          (sampleSq(3.0 / 4.0 - 0.5,  1.0 / 9.0 - 0.5) +\n           sampleSq(1.0 / 8.0 - 0.5,  4.0 / 9.0 - 0.5))) +\n         ((sampleSq(5.0 / 8.0 - 0.5,  7.0 / 9.0 - 0.5) +\n           sampleSq(3.0 / 8.0 - 0.5,  2.0 / 9.0 - 0.5)) +\n          (sampleSq(7.0 / 8.0 - 0.5,  5.0 / 9.0 - 0.5) +\n           sampleSq(1.0 / 16.0 - 0.5,  8.0 / 9.0 - 0.5)))) +\n        (((sampleSq(9.0 / 16.0 - 0.5,  1.0 / 27.0 - 0.5) +\n           sampleSq(5.0 / 16.0 - 0.5, 10.0 / 27.0 - 0.5)) +\n          (sampleSq(13.0 / 16.0 - 0.5, 19.0 / 27.0 - 0.5) +\n           sampleSq(3.0 / 16.0 - 0.5,  4.0 / 27.0 - 0.5))) +\n         ((sampleSq(11.0 / 16.0 - 0.5, 13.0 / 27.0 - 0.5) +\n           sampleSq(7.0 / 16.0 - 0.5, 22.0 / 27.0 - 0.5)) +\n          (sampleSq(15.0 / 16.0 - 0.5,  7.0 / 27.0 - 0.5) +\n           sampleSq(1.0 / 32.0 - 0.5, 16.0 / 27.0 - 0.5))))\n     );\n      gl_FragColor = vec4(sqrt(acc.xyz), acc.w);\n    }\n  ",
        X = (function () {
          function t() {}
          return (
            (t.mul = function (t, n, i) {
              console.assert(n.length == t * t && i.length == t * t);
              for (var r = new Float32Array(t * t), o = 0; o < t; ++o)
                for (var e = 0; e < t; ++e) {
                  for (var a = 0, s = 0; s < t; ++s)
                    a += n[o * t + s] * i[s * t + e];
                  r[o * t + e] = a;
                }
              return r;
            }),
            (t.identity = function (t) {
              var n = new Float32Array(t * t);
              n.fill(0);
              for (var i = 0; i < t; ++i) n[i * t + i] = 1;
              return n;
            }),
            (t.rotation = function (n, i, r, o) {
              console.assert(i < n && r < n);
              var e = t.identity(n),
                a = Math.cos(o),
                s = Math.sin(o);
              return (
                (e[i * n + i] = +a),
                (e[i * n + r] = -s),
                (e[r * n + i] = +s),
                (e[r * n + r] = +a),
                e
              );
            }),
            t
          );
        })(),
        H = (function () {
          function t(t) {
            var n = {
              alpha: !0,
              depth: !1,
              stencil: !1,
              antialias: !1,
              premultipliedAlpha: !0,
              preserveDrawingBuffer: window.__AMP_TEST || !1,
            };
            (this.gl =
              t.getContext("webgl", n) ||
              t.getContext("experimental-webgl", n)),
              (this.canvas = t),
              (this.rotation = null),
              (this.scale = 1),
              (this.orientation = null),
              (this.vertShader = null),
              (this.fragShaderFast = null),
              (this.fragShaderSlow = null),
              (this.progFast = null),
              (this.progSlow = null),
              (this.vbo = null),
              (this.tex = null);
          }
          var n = t.prototype;
          return (
            (n.init = function () {
              var t = this.gl;
              (this.vertShader = t.createShader(t.VERTEX_SHADER)),
                (this.fragShaderFast = t.createShader(t.FRAGMENT_SHADER)),
                (this.fragShaderSlow = t.createShader(t.FRAGMENT_SHADER)),
                (this.progFast = t.createProgram()),
                (this.progSlow = t.createProgram()),
                this.compile_(
                  this.vertShader,
                  "\n    uniform   vec2 uScale;\n    attribute vec2 aPos;\n    varying   vec2 vPos;\n\n    void main() {\n      gl_Position = vec4(aPos, 0.0, 1.0);\n      vPos = uScale * aPos;\n    }\n  "
                ),
                t.attachShader(this.progFast, this.vertShader),
                t.attachShader(this.progFast, this.fragShaderFast),
                t.attachShader(this.progSlow, this.vertShader),
                t.attachShader(this.progSlow, this.fragShaderSlow),
                this.setMapping(),
                this.setCamera(X.identity(3), 1),
                (this.vbo = t.createBuffer()),
                t.bindBuffer(t.ARRAY_BUFFER, this.vbo);
              var n = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
              t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW),
                (this.tex = t.createTexture()),
                t.bindTexture(t.TEXTURE_2D, this.tex),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_WRAP_S,
                  t.CLAMP_TO_EDGE
                ),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_WRAP_T,
                  t.CLAMP_TO_EDGE
                ),
                t.bindTexture(t.TEXTURE_2D, null),
                t.bindBuffer(t.ARRAY_BUFFER, null),
                this.resize();
            }),
            (n.setImage = function (t) {
              var n = this.gl;
              n.bindTexture(n.TEXTURE_2D, this.tex),
                n.texImage2D(
                  n.TEXTURE_2D,
                  0,
                  n.RGBA,
                  n.RGBA,
                  n.UNSIGNED_BYTE,
                  t
                ),
                n.bindTexture(n.TEXTURE_2D, null);
            }),
            (n.setImageOrientation = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r = Math.PI / 180;
              this.orientation = this.euler_(r * t, r * n, r * i);
            }),
            (n.setMapping = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              this.compile_(this.fragShaderFast, N + Y + t),
                this.compile_(this.fragShaderSlow, N + L + t),
                this.link_(this.progFast),
                this.link_(this.progSlow);
            }),
            (n.setCamera = function (t, n) {
              (this.rotation = t), (this.scale = n);
            }),
            (n.resize = function () {
              var t = this.canvas.getBoundingClientRect();
              (this.canvas.width = t.width * devicePixelRatio),
                (this.canvas.height = t.height * devicePixelRatio),
                this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            }),
            (n.render = function (t) {
              var n = this.gl;
              n.disable(n.BLEND);
              var i = t ? this.progFast : this.progSlow;
              n.useProgram(i);
              var r =
                  this.scale /
                  Math.sqrt(n.drawingBufferWidth * n.drawingBufferHeight),
                o = r * n.drawingBufferWidth,
                e = r * n.drawingBufferHeight;
              n.uniformMatrix3fv(
                n.getUniformLocation(i, "uRot"),
                !1,
                this.rotation
              ),
                n.uniform2f(n.getUniformLocation(i, "uScale"), o, e),
                n.uniform1f(n.getUniformLocation(i, "uPxSize"), 2 * r),
                this.orientation || (this.orientation = X.identity(3)),
                n.uniformMatrix3fv(
                  n.getUniformLocation(i, "uRot"),
                  !1,
                  X.mul(3, this.rotation, this.orientation)
                ),
                n.enableVertexAttribArray(0),
                n.bindBuffer(n.ARRAY_BUFFER, this.vbo),
                n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0),
                n.activeTexture(n.TEXTURE0),
                n.bindTexture(n.TEXTURE_2D, this.tex),
                n.uniform1i(n.getUniformLocation(i, "uTex"), 0),
                n.drawArrays(n.TRIANGLE_STRIP, 0, 4),
                n.bindTexture(n.TEXTURE_2D, null),
                n.bindBuffer(n.ARRAY_BUFFER, null),
                n.useProgram(null);
            }),
            (n.compile_ = function (t, n) {
              var i = this.gl;
              i.shaderSource(t, n), i.compileShader(t);
              var r = i.getShaderInfoLog(t);
              r.length > 0 && console.log(r);
            }),
            (n.link_ = function (t) {
              var n = this.gl;
              n.linkProgram(t);
              var i = n.getProgramInfoLog(t);
              i.length > 0 && console.log(i);
            }),
            (n.euler_ = function (t, n, i) {
              var r = X.identity(3),
                o = -i,
                e = -n,
                a = -t,
                s = Math.cos(o),
                u = Math.sin(o),
                c = Math.cos(e),
                l = Math.sin(e),
                f = Math.cos(a),
                h = Math.sin(a),
                p = s * f,
                m = s * h,
                v = u * f,
                d = u * h;
              return (
                (r[0] = c * f),
                (r[3] = -c * h),
                (r[6] = l),
                (r[1] = m + v * l),
                (r[4] = p - d * l),
                (r[7] = -u * c),
                (r[2] = d - p * l),
                (r[5] = v + m * l),
                (r[8] = s * c),
                r
              );
            }),
            t
          );
        })();
      function V(t, n) {
        var i,
          r,
          o = ((i = "localization"), _((r = F(k(n))), i) ? E(r, i) : null),
          e = z(w(n), "vsync"),
          a = [];
        return (
          t
            .querySelectorAll("[i-amphtml-i18n-aria-label]")
            .forEach(function (t) {
              a.push(
                o
                  .getLocalizedStringAsync(
                    t.getAttribute("i-amphtml-i18n-aria-label")
                  )
                  .then(function (n) {
                    return t.setAttribute("aria-label", n);
                  })
              ),
                t.removeAttribute("i-amphtml-i18n-aria-label");
            }),
          t
            .querySelectorAll("[i-amphtml-i18n-text-content]")
            .forEach(function (n) {
              a.push(
                o
                  .getLocalizedStringAsync(
                    n.getAttribute("i-amphtml-i18n-text-content")
                  )
                  .then(function (i) {
                    return t.isConnected
                      ? e.mutatePromise(function () {
                          n.textContent = i;
                        })
                      : (n.textContent = i);
                  })
              ),
                n.removeAttribute("i-amphtml-i18n-text-content");
            }),
          Promise.all(a)
        );
      }
      var Z,
        $ =
          (m((Z = {}), 34, function (t, n) {
            return t.length !== n.length;
          }),
          m(Z, 15, function (t, n) {
            return t.element !== n.element || t.state !== n.state;
          }),
          m(Z, 39, function (t, n) {
            return t.length !== n.length;
          }),
          m(Z, 41, function (t, n) {
            return t.length !== n.length;
          }),
          m(Z, 42, function (t, n) {
            return (
              null === t ||
              null === n ||
              t.width !== n.width ||
              t.height !== n.height
            );
          }),
          m(Z, 23, function (t, n) {
            return null === t || null === n || !b(t, n, 2);
          }),
          m(Z, 28, function (t, n) {
            return null === t || null === n || !b(t, n, 2);
          }),
          m(Z, 16, function (t, n) {
            return !b(t, n, 3);
          }),
          "-shadowcsshost"),
        K = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
      new RegExp("(" + $ + K, "gim"),
        new RegExp("(-shadowcsscontext" + K, "gim"),
        new RegExp($, "gim"),
        new RegExp("-shadowcsscontext", "gim"),
        "[".concat("data-text-background-color", "]");
      var U = "AMP_STORY_360";
      function J(t) {
        return (t * Math.PI) / 180;
      }
      var Q = (function () {
          function t(t, n, i) {
            (this.theta = t), (this.phi = n), (this.scale = i);
          }
          return (
            (t.fromDegrees = function (n, i, r) {
              return new t(J(-i - 90), J(90 + n), 1 / r);
            }),
            u(t, [
              {
                key: "rotation",
                get: function () {
                  return X.mul(
                    3,
                    X.rotation(3, 1, 2, this.theta),
                    X.rotation(3, 0, 1, this.phi)
                  );
                },
              },
            ]),
            t
          );
        })(),
        W = (function () {
          function t(t, n) {
            (this.maxFrame = 0.06 * t),
              (this.orientations = n),
              (this.currentHeadingIndex = 0),
              (this.currentFrame = 0),
              (this.framesPerSection = this.maxFrame / (n.length - 1));
          }
          var n = t.prototype;
          return (
            (n.V5 = function (t) {
              return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            }),
            (n.getNextOrientation = function () {
              if (
                this.currentHeadingIndex < 0 ||
                this.currentFrame == this.maxFrame - 1
              )
                return null;
              this.currentFrame++;
              var t = (this.currentHeadingIndex + 1) * this.framesPerSection;
              if (this.currentFrame >= t)
                return (
                  this.currentHeadingIndex++,
                  this.currentHeadingIndex == this.orientations.length
                    ? ((this.currentHeadingIndex = -1), null)
                    : this.orientations[this.currentHeadingIndex]
                );
              var n = this.orientations[this.currentHeadingIndex + 1],
                i = this.orientations[this.currentHeadingIndex];
              if (!n) return (this.currentHeadingIndex = -1), null;
              var r = this.V5(
                (this.currentFrame % this.framesPerSection) /
                  this.framesPerSection
              );
              return new Q(
                i.theta + (n.theta - i.theta) * r,
                i.phi + (n.phi - i.phi) * r,
                i.scale + (n.scale - i.scale) * r
              );
            }),
            t
          );
        })(),
        tt = (function (t) {
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && r(t, n);
          })(l, t);
          var i,
            e,
            s =
              ((i = l),
              (e = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  n = o(i);
                if (e) {
                  var r = o(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return a(this, t);
              });
          function l(t) {
            var n;
            return (
              ((n = s.call(this, t)).Q5 = []),
              (n.Gl = 0),
              (n.BM = null),
              (n.rp = null),
              (n.a6 = null),
              (n.sb = !1),
              (n.s6 = !1),
              (n.f6 = !1),
              (n.h6 = null),
              (n.eA = null),
              (n.p6 = null),
              (n.m6 = !1),
              (n.v6 = 0),
              (n.d6 = 0),
              (n.y6 = 0),
              (n.g6 = null),
              (n.WY = null),
              (n.x6 = 0),
              (n.b6 = null),
              n
            );
          }
          l.previewAllowed = function (t) {
            return !t.querySelector("amp-video");
          };
          var f = l.prototype;
          return (
            (f.buildCallback = function () {
              var t = this,
                n = function (n) {
                  return t.element.getAttribute(n);
                },
                i = function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  return parseFloat(n(t) || i);
                };
              n("duration") &&
                (this.Gl =
                  (function (t) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : NaN,
                      i = t.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/),
                      r = i ? i[1] : void 0,
                      o = i ? i[2] : void 0;
                    return !i || 3 !== i.length || ("s" !== o && "ms" !== o)
                      ? n
                      : Math.round(("s" == o ? 1e3 : 1) * parseFloat(r));
                  })(n("duration")) || 0);
              var r = i("heading-start"),
                o = i("pitch-start"),
                e = i("zoom-start", 1);
              if (
                (this.Q5.push(Q.fromDegrees(r, o, e)),
                void 0 !== n("heading-end") ||
                  void 0 !== n("pitch-end") ||
                  void 0 !== n("zoom-end"))
              ) {
                var a = i("heading-end", r),
                  s = i("pitch-end", o),
                  u = i("zoom-end", e);
                this.Q5.push(Q.fromDegrees(a, s, u));
              }
              (void 0 === n("scene-heading") &&
                void 0 === n("scene-pitch") &&
                void 0 === n("scene-roll")) ||
                ((this.v6 = i("scene-heading")),
                (this.d6 = i("scene-pitch")),
                (this.y6 = i("scene-roll")));
              var c,
                l,
                f,
                h = this.element.ownerDocument.createElement("div");
              return (
                (this.BM = this.element.ownerDocument.createElement("canvas")),
                this.element.appendChild(h),
                h.appendChild(this.BM),
                (c = h).classList.add("i-amphtml-fill-content"),
                c.classList.add("i-amphtml-replaced-content"),
                Promise.all([
                  ((l = this.win),
                  G(l, "story-store", "amp-story", "1.0")).then(function (i) {
                    (t.eA = i),
                      i.subscribe(42, function () {
                        return t.w6();
                      }),
                      "gyroscope" === n("controls") &&
                        (i.subscribe(13, function (n) {
                          return t.S6(n);
                        }),
                        t.j6()),
                      i.subscribe(36, function (n) {
                        (t.m6 = n === t.P6()), t.O6(), t.R6();
                      }),
                      t.eA.subscribe(24, function (n) {
                        t.m6 && (n ? t.ey() : t.iy());
                      });
                  }),
                  ((f = this.element), T(F(f), "localization")).then(function (
                    n
                  ) {
                    t.q6 = n;
                  }),
                ])
              );
            }),
            (f.P6 = function () {
              return (
                null == this.p6 && (this.p6 = this.M6().getAttribute("id")),
                this.p6
              );
            }),
            (f.M6 = function () {
              return (function (t, n, i) {
                var r;
                for (r = t; r && void 0 !== r; r = r.parentElement)
                  if (n(r)) return r;
                return null;
              })(this.element, function (t) {
                return "amp-story-page" === t.tagName.toLowerCase();
              });
            }),
            (f.O6 = function () {
              this.m6 ? this.iy() : (this.ey(), this.z6());
            }),
            (f.S6 = function (t) {
              var n = this;
              this.h6 &&
                this.mutateElement(function () {
                  n.M6().removeChild(n.h6), (n.h6 = null);
                }),
                "granted" === t ? this.A6() : "denied" === t && (this.f6 = !1);
            }),
            (f.j6 = function () {
              var t = this;
              void 0 !== this.win.DeviceOrientationEvent &&
                (void 0 === this.win.DeviceOrientationEvent.requestPermission &&
                  this.A6(),
                "function" ==
                  typeof this.win.DeviceOrientationEvent.requestPermission &&
                  this.win.DeviceOrientationEvent.requestPermission()
                    .catch(function () {
                      t.k6();
                    })
                    .then(function (n) {
                      n && t.F6(n);
                    }));
            }),
            (f.A6 = function () {
              var t = this;
              C(this.win, "deviceorientation").then(function (n) {
                var i;
                (t.f6 = !0),
                  t.E6(n.alpha),
                  t.win.addEventListener("deviceorientation", function (n) {
                    t.s6 &&
                      (i && t.win.cancelAnimationFrame(i),
                      (i = t.win.requestAnimationFrame(function () {
                        t.m6 || t.E6(n.alpha), t.T6(n);
                      })));
                  }),
                  t.R6();
              });
            }),
            (f.E6 = function (t) {
              this.x6 =
                parseFloat(
                  this.element.getAttribute("heading-end") ||
                    this.element.getAttribute("heading-start") ||
                    0
                ) +
                90 +
                t;
            }),
            (f.R6 = function () {
              var t = this;
              if (
                this.m6 &&
                this.f6 &&
                !this.element.ownerDocument.querySelector(
                  ".i-amphtml-story-360-discovery"
                )
              ) {
                var n = this.M6(),
                  i =
                    n &&
                    x(
                      "div",
                      {
                        class: "i-amphtml-story-360-discovery",
                        "aria-live": "polite",
                      },
                      x("div", {
                        class: "i-amphtml-story-360-discovery-animation",
                      }),
                      x("span", {
                        class: "i-amphtml-story-360-discovery-text",
                        "i-amphtml-i18n-text-content": "96",
                      })
                    );
                V(i, n).then(function () {
                  return t.mutateElement(function () {
                    return n.appendChild(i);
                  });
                });
              }
            }),
            (f.T6 = function (t) {
              var n = this,
                i = X.identity(3);
              (i = X.mul(3, X.rotation(3, 1, 0, J(t.alpha - this.x6)), i)),
                (i = X.mul(3, X.rotation(3, 2, 1, J(t.beta)), i)),
                (i = X.mul(3, X.rotation(3, 0, 2, J(t.gamma)), i)),
                (this.b6 = this.b6
                  ? i.map(function (t, i) {
                      return (t + n.b6[i]) / 2;
                    })
                  : i),
                this.rp.setCamera(this.b6, 1),
                this.rp.render(!0);
            }),
            (f.k6 = function () {
              var t = this,
                n = this.M6();
              (this.h6 =
                n &&
                x(
                  "button",
                  {
                    class: "i-amphtml-story-360-activate-button",
                    role: "button",
                  },
                  x("span", { "i-amphtml-i18n-text-content": "83" }),
                  x(
                    "span",
                    { class: "i-amphtml-story-360-activate-button-icon" },
                    "360°",
                    x(
                      "svg",
                      {
                        class: "i-amphtml-story-360-activate-button-icon-svg",
                        xmlns: "https://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                      },
                      x(
                        "defs",
                        { xmlns: "https://www.w3.org/2000/svg" },
                        x(
                          "linearGradient",
                          {
                            id: "i-amphtml-story-360-activate-gradient",
                            xmlns: "https://www.w3.org/2000/svg",
                          },
                          x("stop", {
                            "stop-color": "white",
                            "stop-opacity": ".3",
                            xmlns: "https://www.w3.org/2000/svg",
                          }),
                          x("stop", {
                            offset: "1",
                            "stop-color": "white",
                            xmlns: "https://www.w3.org/2000/svg",
                          })
                        ),
                        x("ellipse", {
                          id: "i-amphtml-story-360-activate-ellipse",
                          ry: "11.5",
                          rx: "7.5",
                          cy: "12",
                          cx: "12",
                          stroke: "url(#i-amphtml-story-360-activate-gradient)",
                          xmlns: "https://www.w3.org/2000/svg",
                        })
                      ),
                      x("use", {
                        href: "#i-amphtml-story-360-activate-ellipse",
                        xmlns: "https://www.w3.org/2000/svg",
                      }),
                      x("use", {
                        href: "#i-amphtml-story-360-activate-ellipse",
                        transform: "rotate(90, 12, 12)",
                        xmlns: "https://www.w3.org/2000/svg",
                      })
                    )
                  )
                )),
                V(this.h6, n),
                this.h6.addEventListener("click", function () {
                  return t.D6();
                }),
                this.mutateElement(function () {
                  return n.appendChild(t.h6);
                });
            }),
            (f.D6 = function () {
              var t = this;
              this.win.DeviceOrientationEvent.requestPermission &&
                this.win.DeviceOrientationEvent.requestPermission()
                  .then(function (n) {
                    t.F6(n);
                  })
                  .catch(function (t) {
                    (j.dev || (j.dev = P())).error(
                      U,
                      "Gyroscope permission error: ".concat(t.message)
                    );
                  });
            }),
            (f.F6 = function (t) {
              "granted" === t
                ? this.eA.dispatch(9, "granted")
                : "denied" === t && this.eA.dispatch(9, "denied");
            }),
            (f.isLayoutSupported = function (t) {
              return (function (t) {
                return (
                  "fixed" == t ||
                  "fixed-height" == t ||
                  "responsive" == t ||
                  "fill" == t ||
                  "flex-item" == t ||
                  "fluid" == t ||
                  "intrinsic" == t
                );
              })(t);
            }),
            (f.I6 = function (t) {
              var n = this.rp.gl.getParameter(this.rp.gl.MAX_TEXTURE_SIZE);
              if (t.naturalWidth > n || t.naturalHeight > n) {
                var i = document.createElement("canvas"),
                  r = i.getContext("2d");
                return (
                  (i.width = Math.min(t.naturalWidth, n)),
                  (i.height = Math.min(t.naturalHeight, n)),
                  r.drawImage(t, 0, 0, i.width, i.height),
                  i
                );
              }
              return t;
            }),
            (f.layoutCallback = function () {
              var t = this.element.querySelector("amp-img");
              this.g6 = this.element.querySelector("amp-video");
              var n = t || this.g6;
              return (
                M(
                  n,
                  "amp-story-360 must contain an amp-img or amp-video element."
                ),
                n && this._6(n),
                t ? this.G6(t) : this.g6 ? this.B6() : void 0
              );
            }),
            (f._6 = function (t) {
              var n = ["alt", "title", "aria-label"].find(function (n) {
                return t.getAttribute(n);
              });
              if (n) {
                var i = t.getAttribute(n);
                this.BM.setAttribute("role", "img"),
                  this.BM.setAttribute("aria-label", i);
              }
            }),
            (f.G6 = function (t) {
              var n = this,
                i = (function (t, n) {
                  return E(F(k(t)), "owners");
                })(this.element);
              return (
                i.setOwner(t, this.element),
                i.scheduleLayout(this.element, t),
                p(t)
                  .then(function () {
                    return t.signals().whenSignal(c);
                  })
                  .then(
                    function () {
                      (n.rp = new H(n.BM)),
                        (n.WY = n.I6(n.element.querySelector("img"))),
                        n.C6();
                    },
                    function () {
                      return O().error(U, "Failed to load the amp-img.");
                    }
                  )
              );
            }),
            (f.B6 = function () {
              var t = this;
              return p(this.g6)
                .then(function () {
                  return t.g6.signals().whenSignal(c);
                })
                .then(function () {
                  return t.g6.querySelector("video").readyState >= 2
                    ? n || (n = Promise.resolve(void 0))
                    : C(t.g6, "loadeddata");
                })
                .then(
                  function () {
                    (t.rp = new H(t.BM)), t.C6();
                  },
                  function () {
                    return O().error(U, "Failed to load the amp-video.");
                  }
                );
            }),
            (f.C6 = function () {
              this.rp.init(),
                this.rp.setImageOrientation(this.v6, this.d6, this.y6),
                this.rp.setImage(
                  this.WY ? this.WY : this.g6.querySelector("video")
                ),
                this.rp.resize(),
                this.Q5.length < 1 ||
                  (this.N6(), (this.s6 = !0), this.sb && this.Y6(), this.L6());
            }),
            (f.L6 = function () {
              var t = this;
              this.mutateElement(function () {
                t.element.classList.add("i-amphtml-story-360-loaded");
              });
            }),
            (f.w6 = function () {
              var t = this;
              this.mutateElement(function () {
                t.rp && (t.rp.resize(), t.sb || t.rp.render(!1));
              });
            }),
            (f.N6 = function () {
              var t = this;
              this.f6 ||
                this.mutateElement(function () {
                  t.rp.setCamera(t.Q5[0].rotation, t.Q5[0].scale),
                    t.rp.render(!1);
                });
            }),
            (f.Y6 = function () {
              var t = this;
              this.a6 || (this.a6 = new W(this.Gl, this.Q5));
              var n = function n() {
                if (t.sb && t.a6) {
                  var i = t.a6.getNextOrientation();
                  t.win.requestAnimationFrame(function () {
                    if (!i && !t.g6) return (t.sb = !1), void t.rp.render(!1);
                    if (
                      (i && !t.f6 && t.rp.setCamera(i.rotation, i.scale), t.g6)
                    ) {
                      var r = t.g6.querySelector("video");
                      r.readyState >= 2 && t.rp.setImage(r);
                    }
                    t.rp.render(!0), n();
                  });
                } else t.rp.render(!1);
              };
              this.mutateElement(function () {
                return n();
              });
            }),
            (f.ey = function () {
              this.sb = !1;
            }),
            (f.iy = function () {
              this.canAnimate &&
                (M(
                  this.canAnimate,
                  "amp-story-360 is either not configured to play an animation or still loading content."
                ),
                (this.sb = !0),
                this.s6 && this.Y6());
            }),
            (f.z6 = function () {
              var t = this;
              this.canAnimate &&
                ((this.a6 = null),
                this.s6 &&
                  this.win.requestAnimationFrame(function () {
                    t.N6(), t.sb && t.Y6();
                  }));
            }),
            u(l, [
              {
                key: "canAnimate",
                get: function () {
                  return this.Gl > 0 && this.Q5.length > 1;
                },
              },
            ]),
            l
          );
        })(t.BaseElement);
      t.registerElement(
        "amp-story-360",
        tt,
        'amp-story-360 canvas{position:absolute;width:100%!important;height:100%!important}amp-story-360 amp-img{opacity:0!important}.i-amphtml-story-360-activate-button{position:absolute!important;bottom:12px!important;right:12px!important;background:rgba(0,0,0,.8)!important;color:#fff!important;outline:none!important;border:none!important;padding:6px 6px 6px 10px!important;border-radius:18px!important;font-size:12px!important;font-family:Roboto,sans-serif!important;z-index:100000!important;pointer-events:auto!important}.i-amphtml-story-360-activate-button,.i-amphtml-story-360-activate-button-icon{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-360-activate-button-icon{box-sizing:border-box!important;margin-left:5px!important;font-size:6px!important;width:24px!important;height:24px!important;border:1px solid #fff!important;border-radius:100%!important;-ms-flex-pack:center!important;justify-content:center!important;font-weight:700!important;position:relative!important}.i-amphtml-story-360-activate-button-icon-svg{position:absolute!important;width:calc(100% + 2px)!important;height:calc(100% + 2px)!important;left:-1px!important;top:-1px!important}[active] .i-amphtml-story-360-activate-button-icon-svg{animation:rotate 1s 1s!important}@keyframes rotate{to{transform:rotate(360deg)}}.i-amphtml-story-360-discovery{pointer-events:none!important;position:absolute!important;bottom:0!important;left:0!important;width:100%!important;height:66%!important;perspective:550px!important;perspective-origin:center calc(100% - 145px)!important;background:linear-gradient(transparent,rgba(0,0,0,.9))!important;animation:fadeOut 1s ease-in-out 4s forwards!important;z-index:100000!important}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.i-amphtml-story-360-discovery-animation{position:absolute!important;bottom:95px!important;left:calc(50% - 30px)!important;width:55px!important;height:100px!important;border:1px solid #fff!important;border-radius:10px!important;animation:lookAround 4s!important}.i-amphtml-story-360-discovery-animation:before{content:""!important;position:absolute!important;border-top:1px solid #fff!important;width:10px!important;top:5px!important;left:calc(50% - 5px)!important}@keyframes lookAround{0%{animation-timing-function:ease-in-out;transform:rotate3d(0,0,0,0) translateZ(0)}25%{animation-timing-function:ease-in-out;transform:rotateY(45deg) rotateX(20deg) translate3d(-100px,10px,0)}50%{animation-timing-function:ease-in-out;transform:rotateX(-40deg) translate3d(0,-50px,0)}75%{animation-timing-function:ease-in-out;transform:rotateY(-45deg) rotateX(20deg) translate3d(100px,10px,0)}to{animation-timing-function:ease-in-out;transform:rotate3d(0,0,0,0) translateZ(0)}}.i-amphtml-story-360-discovery-text{font-family:Roboto,sans-serif!important;position:absolute!important;bottom:40px!important;width:100%!important;font-size:16px!important;text-align:center!important;color:#fff!important}\n/*# sourceURL=/extensions/amp-story-360/0.1/amp-story-360.css*/'
      );
    })();
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    /**
     * @license
     * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
     * Use of this source code is governed by a BSD-style
     * license that can be found in the LICENSE file or at
     * https://developers.google.com/open-source/licenses/bsd
     */
  },
});
//# sourceMappingURL=amp-story-360-0.1.js.map
