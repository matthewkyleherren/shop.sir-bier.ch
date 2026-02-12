(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2086], {
    2086: (e, a, l) => {
      Promise.resolve().then(l.bind(l, 87024)), Promise.resolve().then(l.bind(l, 72908)), Promise.resolve().then(l.bind(l, 11255)), Promise.resolve().then(l.bind(l, 58513))
    },
    87024: (e, a, l) => {
      "use strict";
      l.d(a, {
        LivePreviewListener: () => d
      });
      var t = l(96339),
        i = l(10020),
        r = l(29454);
      let n = !!window.document && !!window.document.createElement;
      var o = l(11682);
      let s = () => {
          if (n) {
            let e = window.location.protocol,
              a = window.location.hostname,
              l = window.location.port;
            return "".concat(e, "//").concat(a).concat(l ? ":".concat(l) : "")
          }
          return o.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://".concat(o.env.VERCEL_PROJECT_PRODUCTION_URL) : "https://shop-sir-bier-ch.vercel.app"
        },
        d = () => {
          let e = (0, r.useRouter)();
          return (0, t.jsx)(i.p, {
            refresh: e.refresh,
            serverURL: s()
          })
        }
    },
    2433: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => h
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(80179),
        o = l(93402),
        s = l(22858),
        d = l.n(s),
        c = l(88292),
        u = l(45780),
        _ = l(69816),
        v = l.n(_),
        m = l(75664),
        p = l(17337);

      function h(e) {
        let {
          title: a,
          extra: l,
          link: i,
          onClick: s,
          className: _
        } = e, h = (0, n.useRef)(null), x = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
          h.current && a && (x.current && x.current.kill(), x.current = function(e) {
            var a, l, t;
            if (!e.current) return;
            let i = m.os.timeline({
                paused: !0
              }),
              r = null === (a = e.current) || void 0 === a ? void 0 : a.querySelector('[data-animation-target="bannerLead-titleText"]');
            if (!r) {
              console.warn("[BannerLead:createTimeline] animation element not found");
              return
            }
            i.fromTo(r, {
              "--textReveal-progress": 0,
              xPercent: 50
            }, {
              "--textReveal-progress": 1,
              xPercent: 0,
              duration: .9,
              delay: .1,
              ease: "power4.inOut"
            }, 0);
            let n = null === (l = e.current) || void 0 === l ? void 0 : l.querySelector('[data-animation-target="bannerLead-title"]'),
              o = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector('[data-animation-target="bannerLead-extra"]');
            if (!n || !o) return i;
            let s = p.K.getState([n, o], {
              props: "opacity"
            });
            return n.classList.add("flip"), o.classList.add("flip"), i.add(p.K.to(s, {
              duration: 1.2,
              ease: "expo.inOut",
              delay: .1
            })), i
          }(h) || null)
        }, [a]), (0, c.C7)(h, x.current || void 0, {
          once: !1
        }), (0, t.jsxs)("div", {
          className: r()(v().container, _),
          children: [(a || l) && (0, t.jsxs)("div", {
            className: v().header,
            ref: h,
            children: [a && (0, t.jsx)("p", {
              className: v().title,
              "data-animation-target": "bannerLead-title",
              children: (0, t.jsx)("span", {
                className: v().titleText,
                "data-animation-target": "bannerLead-titleText",
                children: (0, t.jsx)("span", {
                  className: d().text,
                  children: a
                })
              })
            }), l && (0, t.jsx)("p", {
              className: v().extra,
              "data-animation-target": "bannerLead-extra",
              children: l
            })]
          }), i && (0, t.jsx)("div", {
            className: v().cta,
            children: (0, t.jsx)(o.default, {
              className: v().link,
              theme: "solid-black",
              ...(0, u.X)(i),
              onClick: s,
              children: i.label
            })
          })]
        })
      }
      m.os.registerPlugin(p.K)
    },
    16546: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => _
      });
      var t = l(96339),
        i = l(80677),
        r = l(72727),
        n = l.n(r),
        o = l(80179),
        s = l(64881),
        d = l(3e4),
        c = l.n(d);

      function u(e) {
        let {
          aspectRatio: a = "none",
          width: l = 1920,
          height: i = 1080,
          src: r = "",
          className: d,
          style: u,
          ..._
        } = e, [v, m] = (0, o.useState)(!1), [p, h] = (0, o.useState)(!1), x = (0, o.useRef)(null), g = (0, s.A)(x, {
          root: null,
          rootMargin: "0px",
          threshold: 0
        }), f = (0, o.useRef)({
          get isPlaying() {
            var y;
            return !(null === (y = x.current) || void 0 === y ? void 0 : y.paused)
          }
        }), b = (0, o.useCallback)(() => {
          v || m(!0), (null == g ? void 0 : g.isIntersecting) && j()
        }, []), j = (0, o.useCallback)(() => {
          if (!f.current.isPlaying) {
            var e;
            null === (e = x.current) || void 0 === e || e.play()
          }
        }, []), A = (0, o.useCallback)(() => {
          var e;
          null === (e = x.current) || void 0 === e || e.pause()
        }, []);
        (0, o.useEffect)(() => {
          var e;
          p && (null === (e = x.current) || void 0 === e || e.load())
        }, [p]), (0, o.useEffect)(() => {
          if (!p && (null == g ? void 0 : g.isIntersecting)) {
            h(!0);
            return
          }(null == g ? void 0 : g.isIntersecting) ? j(): A()
        }, [null == g ? void 0 : g.isIntersecting]);
        let N = {
          none: c().aspectNone,
          portrait: c().aspectPortrait,
          landscape: c().aspectLandscape,
          square: c().aspectSquare,
          auto: c().aspectAuto
        } [a];
        return (0, t.jsx)("div", {
          className: n()(c().media, N, d),
          style: {
            "--mediaWidth": l,
            "--mediaHeight": i,
            ...u
          },
          children: (0, t.jsx)("video", {
            width: l,
            height: i,
            src: p ? r ? "https://shop-sir-bier-ch.vercel.app" + r : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" : void 0,
            muted: !0,
            playsInline: !0,
            autoPlay: !0,
            loop: !0,
            ..._,
            "data-loaded": !!v || void 0,
            onLoadedData: b,
            ref: x
          })
        })
      }

      function _(e) {
        let {
          media: a,
          ...l
        } = e;
        if (!a) return null;
        if (a.url && "string" == typeof a.url && a.width && a.height) return (0, t.jsx)(i.A, {
          src: a.url,
          width: a.width,
          height: a.height,
          alt: a.alt || "",
          ...l
        });
        let {
          type: r,
          image: n,
          video: o
        } = a;
        if ("image" === r && n) {
          var s, d;
          return (0, t.jsx)(i.A, {
            src: null !== (s = n.url) && void 0 !== s ? s : "",
            width: n.width,
            height: n.height,
            alt: null !== (d = n.alt) && void 0 !== d ? d : "",
            ...l
          })
        }
        return "video" === r && o ? (0, t.jsx)(u, {
          src: o.url,
          width: o.width,
          height: o.height,
          ...l
        }) : null
      }
    },
    80677: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => c
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(80573),
        o = l(80179),
        s = l(192),
        d = l.n(s);

      function c(e) {
        let {
          aspectRatio: a = "none",
          alt: l = "",
          width: i = 100,
          height: s = 100,
          src: c = "",
          sizes: u,
          className: _,
          style: v,
          absoluteSrc: m,
          ...p
        } = e, [h, x] = (0, o.useState)(!1), g = (0, o.useCallback)(() => {
          h || x(!0)
        }, []), f = {
          none: d().aspectNone,
          portrait: d().aspectPortrait,
          landscape: d().aspectLandscape,
          square: d().aspectSquare,
          auto: d().aspectAuto
        } [a], y = "https://placehold.co/".concat(i, "x").concat(s);
        return (0, t.jsx)("div", {
          className: r()(d().media, f, _),
          style: {
            "--mediaWidth": i,
            "--mediaHeight": s,
            ...v
          },
          children: (0, t.jsx)(n.default, {
            width: i,
            height: s,
            src: c ? m ? c : "https://shop-sir-bier-ch.vercel.app" + c : y,
            alt: l || "",
            sizes: null != u ? u : "100vw",
            ...p,
            "data-loaded": !!h || void 0,
            onLoad: g
          })
        })
      }
    },
    85856: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => m
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(29454),
        o = l(80179),
        s = l(87518),
        d = l.n(s),
        c = l(93402),
        u = l(39516),
        _ = l(18213),
        v = l.n(_);

      function m(e) {
        let {
          modalKey: a,
          children: l,
          classes: i,
          onClose: s,
          ..._
        } = e, m = (0, n.usePathname)(), [p, h] = (0, o.useState)(void 0), x = (0, u.Kr)(e => {
          var l, t;
          return null !== (l = e.modals) && void 0 !== l && !!l[a] && (null === (t = e.modals) || void 0 === t ? void 0 : t[a].isOpen)
        }), g = (0, u.Kr)(e => e.init), f = (0, u.Kr)(e => e.close), y = (0, o.useCallback)(() => {
          var e;
          g(a), h(null !== (e = document.getElementById("app")) && void 0 !== e ? e : void 0)
        }, [g, a]), b = (0, o.useCallback)(() => {
          f(a), null == s || s()
        }, [f, a]);
        return (0, o.useEffect)(() => {
          y()
        }, []), (0, o.useEffect)(() => {
          requestAnimationFrame(() => {
            b()
          })
        }, [m]), (0, t.jsx)(d(), {
          isOpen: x,
          onRequestClose: b,
          className: r()(v().content, null == i ? void 0 : i.content),
          overlayClassName: r()(v().overlay, null == i ? void 0 : i.overlay),
          closeTimeoutMS: 500,
          appElement: p,
          ariaHideApp: !1,
          ..._,
          children: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(c.default, {
              className: r()(v().close, null == i ? void 0 : i.close),
              onClick: b,
              theme: "solid-alt",
              children: "Close"
            }), l]
          })
        })
      }
    },
    72908: (e, a, l) => {
      "use strict";
      l.d(a, {
        default: () => et
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(80179),
        o = l(56443),
        s = l(95744),
        d = l(17506),
        c = l.n(d);

      function u(e) {
        let {
          content: a,
          className: l
        } = e, i = (0, n.useRef)(null);
        return (0, t.jsxs)("div", {
          className: r()("section", "sectionBorder", "contentHeadline", c().container, l),
          ref: i,
          children: [((null == a ? void 0 : a.title) || (null == a ? void 0 : a.description)) && (0, t.jsxs)("div", {
            className: c().header,
            children: [(null == a ? void 0 : a.title) && (0, t.jsx)("span", {
              className: c().tag,
              children: (0, t.jsx)(o.A, {
                text: null == a ? void 0 : a.title
              })
            }), (null == a ? void 0 : a.description) && (0, t.jsx)("span", {
              className: c().description,
              children: null == a ? void 0 : a.description
            })]
          }), (0, t.jsx)("h2", {
            className: c().headline,
            children: (0, t.jsx)(s.A, {
              text: null == a ? void 0 : a.headline,
              animation: {
                enabled: !0,
                rootEl: i,
                staggerDelay: .05,
                delay: .1
              }
            })
          })]
        })
      }
      var _ = l(16546),
        v = l(57749),
        m = l(52318),
        p = l.n(m);

      function h(e) {
        return (0, t.jsxs)("div", {
          className: r()("section", "sectionNoBorder", "contentMedia", p().container, e.className),
          children: [(0, t.jsx)("div", {
            className: p().mediaWrapper,
            children: (0, t.jsx)(_.A, {
              className: p().media,
              media: e.content.media,
              sizes: "100vw"
            })
          }), (0, t.jsx)("div", {
            className: p().frame,
            "aria-hidden": "true",
            role: "presentation",
            children: (0, t.jsx)("div", {
              className: p().frameHelper
            })
          }), (0, t.jsx)(v.A, {
            classNames: {
              visual: p().scrollOverlayVisual,
              trigger: p().scrollOverlayTrigger,
              container: p().scrollOverlayContainer
            },
            scroll: {
              start: "top top",
              end: "bottom top"
            }
          })]
        })
      }
      var x = l(88053),
        g = l(60713),
        f = l.n(g);

      function y(e) {
        let a = e.content.content || [],
          l = (0, x.slateToHtml)(a, x.payloadSlateToHtmlConfig);
        return (0, t.jsxs)("div", {
          className: r()("section", "sectionBorder", "contentTextMedia", f().container, e.className),
          children: [(0, t.jsx)(_.A, {
            className: f().media,
            media: e.content.media,
            sizes: "(max-width: 767px) 100vw, 40vw"
          }), (0, t.jsx)("div", {
            className: r()("wysiwyg", f().text),
            dangerouslySetInnerHTML: {
              __html: l
            }
          })]
        })
      }
      var b = l(75664),
        j = l(63495),
        A = l.n(j),
        N = l(93402);
      let S = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
      var P = l(85002),
        C = l.n(P);

      function w(e) {
        let {
          name: a,
          label: l,
          register: i,
          validation: n,
          errors: o
        } = e;
        return (0, t.jsx)("div", {
          className: r()(C().item, {
            [C().hasError]: !!(null == o ? void 0 : o[a])
          }),
          children: (0, t.jsxs)("label", {
            className: C().field,
            children: [(0, t.jsxs)("span", {
              className: C().title,
              children: [l, (null == n ? void 0 : n.required) && "*"]
            }), (0, t.jsx)("input", {
              ...i(a, {
                ...n,
                pattern: S
              }),
              type: "email",
              className: C().input,
              "aria-invalid": !!(null == o ? void 0 : o[a]),
              placeholder: " "
            })]
          })
        })
      }

      function T(e) {
        let {
          name: a,
          label: l,
          register: i,
          validation: n,
          errors: o
        } = e;
        return (0, t.jsx)("div", {
          className: r()(C().item, {
            [C().hasError]: !!(null == o ? void 0 : o[a])
          }),
          children: (0, t.jsxs)("label", {
            className: C().field,
            children: [(0, t.jsxs)("span", {
              className: C().title,
              children: [l, (null == n ? void 0 : n.required) && "*"]
            }), (0, t.jsx)("input", {
              ...i(a, {
                ...n
              }),
              type: "text",
              className: C().input,
              "aria-invalid": !!(null == o ? void 0 : o[a]),
              placeholder: " "
            })]
          })
        })
      }

      function M(e) {
        let {
          name: a,
          label: l,
          register: i,
          validation: n,
          errors: o
        } = e;
        return (0, t.jsx)("div", {
          className: r()(C().item, {
            [C().hasError]: !!(null == o ? void 0 : o[a])
          }),
          children: (0, t.jsxs)("label", {
            className: C().field,
            children: [(0, t.jsxs)("span", {
              className: C().title,
              children: [l, (null == n ? void 0 : n.required) && "*"]
            }), (0, t.jsx)("textarea", {
              ...i(a, {
                ...n
              }),
              className: C().textarea,
              "aria-invalid": !!(null == o ? void 0 : o[a])
            })]
          })
        })
      }

      function H(e) {
        let {
          fields: a,
          register: l,
          errors: i
        } = e;
        return (0, t.jsx)(t.Fragment, {
          children: null == a ? void 0 : a.map(e => {
            var a, r, n, o, s, d;
            switch (e.blockType) {
              case "text":
                return (0, t.jsx)(T, {
                  name: e.name,
                  label: null !== (a = e.label) && void 0 !== a ? a : "",
                  validation: {
                    required: null !== (r = e.required) && void 0 !== r && r
                  },
                  register: l,
                  errors: i
                }, e.id);
              case "email":
                return (0, t.jsx)(w, {
                  name: e.name,
                  label: null !== (n = e.label) && void 0 !== n ? n : "",
                  validation: {
                    required: null !== (o = e.required) && void 0 !== o && o
                  },
                  register: l,
                  errors: i
                }, e.id);
              case "textarea":
                return (0, t.jsx)(M, {
                  name: e.name,
                  label: null !== (s = e.label) && void 0 !== s ? s : "",
                  validation: {
                    required: null !== (d = e.required) && void 0 !== d && d
                  },
                  register: l,
                  errors: i
                }, e.id);
              default:
                return null
            }
          })
        })
      }
      var k = l(30800),
        E = l(85698),
        I = l(33256),
        R = function(e) {
          return e.DEFAULT = "default", e.PENDING = "pending", e.SUCCESS = "success", e.ERROR = "error", e
        }({}),
        L = l(17902),
        G = l.n(L);

      function O(e) {
        var a, l, i;
        let {
          status: o,
          handleSubmit: s,
          register: d,
          errors: c,
          setStatus: u,
          reset: _,
          onSubmit: v
        } = function(e) {
          let {
            defaultValues: a = {},
            successTimeout: l = 5e3,
            successPreserve: t = !1,
            formId: i,
            onSuccess: r
          } = e, {
            register: o,
            reset: s,
            formState: {
              errors: d
            },
            handleSubmit: c,
            control: u
          } = (0, E.mN)({
            defaultValues: a
          }), [_, v] = (0, n.useState)("default");
          return (0, n.useEffect)(() => {
            t || "success" !== _ || (s(), setTimeout(() => {
              v("default")
            }, l))
          }, [_, v, s, l, t]), {
            register: o,
            handleSubmit: c,
            onSubmit: async e => {
              v("pending");
              let a = Object.entries(e).map(e => {
                let [a, l] = e;
                return {
                  field: a,
                  value: l
                }
              });
              try {
                let e = await fetch("https://shop-sir-bier-ch.vercel.app/api/form-submissions", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      form: i,
                      submissionData: a
                    })
                  }),
                  l = await e.json();
                console.log("Success:", l), r && r(), (0, I.VG)(".formPresetConnect")
              } catch (e) {
                console.error("Form submission error:", e), v("error")
              }
            },
            reset: s,
            control: u,
            errors: d,
            status: _,
            setStatus: v
          }
        }({
          formId: null !== (i = e.form.id) && void 0 !== i ? i : "",
          successPreserve: !0,
          onSuccess: () => {
            x(R.SUCCESS)
          }
        }), m = (0, n.useRef)(null), p = (0, n.useRef)(null), h = (0, n.useRef)(null), x = (0, n.useCallback)(e => {
          if (!p.current) {
            u(e), _();
            return
          }
          if (h.current) {
            var a;
            null == h || null === (a = h.current) || void 0 === a || a.kill(), h.current = null
          }
          h.current = b.os.timeline({
            onComplete: () => {
              var e;
              null == h || null === (e = h.current) || void 0 === e || e.kill(), h.current = null
            }
          }), h.current.set(p.current, {
            height: p.current.clientHeight
          }).to(p.current, {
            opacity: 0,
            duration: .2,
            y: "1rem",
            ease: "power1.in",
            onComplete: () => {
              u(e), _()
            }
          }).set(p.current, {
            y: "-0.5rem"
          }).to(p.current, {
            opacity: 1,
            y: 0,
            duration: .4,
            delay: .1,
            ease: "power1.out"
          }, "show").to(p.current, {
            height: "auto",
            duration: 1,
            delay: .1,
            ease: "power1.inOut"
          }, "show")
        }, []);
        return (0, n.useEffect)(() => {
          if (o != R.SUCCESS) return;
          let a = JSON.stringify(e.form.confirmationMessage).length;
          return m.current = setTimeout(() => {
            x(R.DEFAULT)
          }, A()(100 * a, 5e3, 15e3)), () => {
            m.current && clearTimeout(m.current)
          }
        }, [o]), (0, t.jsx)("div", {
          className: r()(G().container, e.className, {
            [G().submitted]: o === R.SUCCESS
          }),
          ref: p,
          children: o === R.SUCCESS ? (0, t.jsx)(k.A, {
            className: G().confirmationMessage,
            content: (null === (l = e.form.confirmationMessage) || void 0 === l ? void 0 : null === (a = l.root) || void 0 === a ? void 0 : a.children) || []
          }) : (0, t.jsxs)("form", {
            className: G().form,
            onSubmit: s(v),
            children: [(0, t.jsx)("div", {
              className: G().fields,
              children: e.form.fields ? (0, t.jsx)(H, {
                fields: e.form.fields,
                register: d,
                errors: c
              }) : null
            }), (0, t.jsx)(N.default, {
              className: G().submitButton,
              theme: "solid-black",
              type: "submit",
              children: e.form.submitButtonLabel
            })]
          })
        })
      }
      var D = l(75465),
        B = l.n(D);

      function z(e) {
        let a = e.content.form,
          l = (0, n.useRef)(null);
        return (0, t.jsxs)("div", {
          className: r()("section", "sectionBorder", "formPresetConnect", B().container, e.className),
          ref: l,
          children: [(0, t.jsx)("h2", {
            className: B().heading,
            children: (0, t.jsx)(s.A, {
              text: e.content.title,
              animation: {
                enabled: !0,
                rootEl: l,
                delay: .4
              }
            })
          }), (0, t.jsx)("div", {
            className: B().mediaWrapper,
            children: (0, t.jsx)(_.A, {
              className: B().media,
              sizes: "(max-width: 767px) 100vw, 66vw",
              media: e.content.formBlock_media
            })
          }), (0, t.jsx)("div", {
            className: B().formWrapper,
            children: "object" == typeof a && a ? (0, t.jsx)(O, {
              form: a,
              className: B().form
            }) : null
          })]
        })
      }
      var U = l(52867),
        F = l(33583),
        V = l(2433),
        W = l(54609),
        J = l(73138),
        Q = l(99526),
        q = l.n(Q);

      function K(e) {
        var a, l;
        let i = (0, n.useRef)(null),
          o = (0, n.useRef)(null),
          [s, d] = (0, n.useState)(!1),
          [c, u] = (0, n.useState)(!1),
          m = (0, n.useCallback)(e => {
            d(e)
          }, []),
          p = (0, n.useCallback)(e => {
            u(!e)
          }, []);
        return (0, n.useEffect)(() => {
          if (!i.current) return;
          let e = U.Ay.context(() => {
            let e = U.Ay.timeline({
              scrollTrigger: {
                scroller: document.querySelector("[data-scroller]"),
                trigger: i.current,
                start: "top top",
                end: "bottom bottom",
                invalidateOnRefresh: !0,
                scrub: 0,
                onUpdate: e => {
                  requestAnimationFrame(() => {
                    m(e.progress > 0)
                  })
                }
              },
              defaults: {
                duration: 1
              }
            });
            return e.fromTo(i.current, {
              "--progressInit": 0
            }, {
              "--progressInit": 1,
              ease: "power3.out",
              duration: 1
            }, 0).fromTo(i.current, {
              "--progressX": 1
            }, {
              "--progressX": 0,
              ease: "power2.inOut",
              duration: .9
            }, .1).fromTo(i.current, {
              "--progressY": 1
            }, {
              "--progressY": 0,
              ease: "power1.inOut",
              duration: .9
            }, .1), o.current = e, () => {
              var e;
              null === (e = o.current) || void 0 === e || e.kill(), o.current = null
            }
          }, i);
          return () => e.revert()
        }, [m]), (0, t.jsxs)("div", {
          className: r()("section", "sectionBorder", "heroMedia", q().container, {
            [q().isOverlayVisible]: s
          }, {
            [q().isPastSticky]: c
          }, e.className),
          ref: i,
          children: [(0, t.jsx)("div", {
            className: q().scroller,
            children: (0, t.jsxs)("div", {
              className: q().inner,
              children: [(0, t.jsxs)("div", {
                className: q().visual,
                children: [(0, t.jsx)(_.A, {
                  media: e.content.backgroundImage,
                  className: q().media,
                  priority: !0
                }), (0, t.jsx)("div", {
                  className: q().overlay,
                  children: (0, t.jsxs)("div", {
                    className: q().overlayContent,
                    children: [(0, t.jsx)("div", {
                      className: q().overlayBox,
                      children: (0, t.jsx)(_.A, {
                        media: e.content.revealImage,
                        className: r()(q().media, q().overlayMedia),
                        priority: !0
                      })
                    }), (0, t.jsxs)("div", {
                      className: q().overlayHelper,
                      children: [(0, t.jsx)("div", {
                        className: q().lineTop
                      }), (0, t.jsx)("div", {
                        className: q().lineBottom
                      }), (0, t.jsx)("div", {
                        className: q().lineLeft
                      }), (0, t.jsx)("div", {
                        className: q().lineRight
                      }), (0, t.jsx)("div", {
                        className: q().dotTopLeft
                      }), (0, t.jsx)("div", {
                        className: q().dotTopRight
                      }), (0, t.jsx)("div", {
                        className: q().dotBottomLeft
                      }), (0, t.jsx)("div", {
                        className: q().dotBottomRight
                      })]
                    })]
                  })
                })]
              }), (0, t.jsx)(V.A, {
                title: null === (a = e.content) || void 0 === a ? void 0 : a.title,
                link: null === (l = e.content) || void 0 === l ? void 0 : l.link,
                className: q().banner
              }), (0, t.jsx)(J.A, {
                className: q().toasts
              }), (0, t.jsx)("div", {
                className: q().frame,
                "aria-hidden": "true",
                role: "presentation"
              })]
            })
          }), (0, t.jsx)(W.A, {
            className: q().pastStickyHelper,
            onScrollThreshold: p
          }), (0, t.jsx)(v.A, {
            classNames: {
              visual: q().scrollOverlayVisual,
              trigger: q().scrollOverlayTrigger,
              container: q().scrollOverlayContainer
            }
          })]
        })
      }
      U.Ay.registerPlugin(F.u);
      var X = l(4178),
        Y = l.n(X);

      function Z(e) {
        let a = (0, n.useRef)(null);
        return (0, t.jsx)("div", {
          className: r()("section", "sectionBorder", "heroText", Y().container, e.className),
          ref: a,
          children: (0, t.jsx)("div", {
            className: Y().inner,
            children: (0, t.jsx)("h1", {
              className: Y().text,
              children: (0, t.jsx)(s.A, {
                text: e.content.title,
                animation: {
                  enabled: !0,
                  rootEl: a
                },
                classes: {
                  wordWrapper: Y().wordWrapper
                }
              })
            })
          })
        })
      }
      var $ = l(95984),
        ee = l.n($);

      function ea(e) {
        return (0, t.jsx)("div", {
          className: r()("section", "sectionBorder", "mediaBlock", ee().container, e.className),
          children: (0, t.jsx)(_.A, {
            className: ee().media,
            media: e.content.media,
            sizes: "100vw"
          })
        })
      }
      var el = l(23139);

      function et(e) {
        var a;
        return (0, t.jsx)(t.Fragment, {
          children: null == e ? void 0 : null === (a = e.blocks) || void 0 === a ? void 0 : a.map((a, l) => {
            switch (a.blockType) {
              case "heroMedia":
                return (0, t.jsx)(K, {
                  content: a
                }, l);
              case "heroText":
                return (0, t.jsx)(Z, {
                  content: a
                }, l);
              case "socialGrid":
                return (0, t.jsx)(el.A, {
                  socialsData: e.socialsData
                }, l);
              case "formBlock":
                return (0, t.jsx)(z, {
                  content: a
                }, l);
              case "contentTextMedia":
                return (0, t.jsx)(y, {
                  content: a
                }, l);
              case "contentMedia":
                return (0, t.jsx)(h, {
                  content: a
                }, l);
              case "contentHeadline":
                return (0, t.jsx)(u, {
                  content: a
                }, l);
              case "mediaBlock":
                return (0, t.jsx)(ea, {
                  content: a
                }, l);
              default:
                return null
            }
          })
        })
      }
    },
    11255: (e, a, l) => {
      "use strict";
      l.d(a, {
        default: () => ek
      });
      var t, i, r, n, o = l(96339),
        s = l(88053),
        d = l(80179),
        c = l(72727),
        u = l.n(c),
        _ = l(2433),
        v = l(80677),
        m = l(57749),
        p = l(73138),
        h = l(58114),
        x = l.n(h);

      function g(e) {
        let {
          title: a,
          description: l,
          banner: t,
          className: i,
          image: r
        } = e;
        return (0, o.jsxs)("div", {
          className: u()("section", "sectionBorder", "heroProduct", x().container, i),
          children: [(0, o.jsx)("div", {
            className: x().scroller,
            children: (0, o.jsxs)("div", {
              className: x().inner,
              children: [(0, o.jsx)(v.A, {
                className: x().media,
                width: 1920,
                height: 1080,
                src: null != r ? r : "",
                alt: "",
                absoluteSrc: !0,
                priority: !0
              }), (0, o.jsxs)("div", {
                className: x().intro,
                children: [(0, o.jsx)("h1", {
                  className: x().title,
                  children: a
                }), l && (0, o.jsx)("div", {
                  className: u()("wysiwyg", x().description),
                  dangerouslySetInnerHTML: {
                    __html: l
                  }
                })]
              }), (0, o.jsx)(_.A, {
                title: a,
                extra: null == t ? void 0 : t.description,
                link: null == t ? void 0 : t.link,
                onClick: null == t ? void 0 : t.onClick,
                className: x().banner
              }), (0, o.jsx)(p.A, {
                className: x().toasts
              }), (0, o.jsx)("div", {
                className: x().frame,
                "aria-hidden": "true",
                role: "presentation"
              })]
            })
          }), (0, o.jsx)(m.A, {
            classNames: {
              visual: x().scrollOverlayVisual,
              trigger: x().scrollOverlayTrigger,
              container: x().scrollOverlayContainer
            }
          })]
        })
      }
      var f = l(56960),
        y = l(75664),
        b = l(93402),
        j = l(85856),
        A = l(35720),
        N = l.n(A);

      function S(e) {
        let {
          rows: a,
          className: l
        } = e;
        return (0, o.jsx)("div", {
          className: u()(N().container, l),
          children: (0, o.jsxs)("table", {
            className: N().table,
            children: [(0, o.jsx)("thead", {
              className: N().header,
              children: (0, o.jsx)("tr", {
                className: N().row,
                children: [{
                  text: "Gender"
                }, {
                  text: "EU"
                }, {
                  text: "US"
                }, {
                  text: "UK"
                }, {
                  text: "CM"
                }].map((e, a) => (0, o.jsx)("th", {
                  className: N().cell,
                  children: e.text
                }, a))
              })
            }), (0, o.jsx)("tbody", {
              className: N().body,
              children: a.map((e, a) => (0, o.jsx)("tr", {
                className: N().row,
                children: e.map((e, a) => (0, o.jsx)("td", {
                  className: N().cell,
                  children: e
                }, a))
              }, a))
            })]
          })
        })
      }
      var P = l(65982),
        C = l.n(P);
      let w = "measure";

      function T(e) {
        let {
          sizeGuide: a,
          parentSelector: l
        } = e, t = {
          shouldCloseOnOverlayClick: !0
        };
        return l && (t = {
          ...t,
          parentSelector: () => document.querySelector(l),
          ariaHideApp: !1
        }), (0, o.jsx)(j.A, {
          modalKey: w,
          classes: {
            overlay: C().overlay,
            content: C().content,
            close: C().close
          },
          ...t,
          children: (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: C().info,
              children: [(0, o.jsxs)("div", {
                className: C().intro,
                children: [(0, o.jsx)("p", {
                  className: C().title,
                  children: a.title
                }), a.description && (0, o.jsx)("div", {
                  className: u()("wysiwyg", C().description),
                  dangerouslySetInnerHTML: {
                    __html: a.description.replace(/\n/g, "<br />")
                  }
                })]
              }), (0, o.jsx)(S, {
                className: C().table,
                rows: a.rows
              })]
            })
          })
        })
      }
      var M = l(39516);

      function H(e) {
        let {
          modalKey: a,
          children: l,
          onOpen: t,
          ...i
        } = e, r = (0, M.Kr)(e => e.open), n = (0, d.useCallback)(() => {
          r(a), null == t || t()
        }, [r, a, t]);
        return (0, o.jsx)(o.Fragment, {
          children: l && (0, d.isValidElement)(l) ? (0, d.cloneElement)(l, {
            onClick: n,
            ...i
          }) : (0, o.jsx)("button", {
            ...i,
            onClick: n,
            children: l
          })
        })
      }
      var k = l(61594),
        E = l.n(k);

      function I(e) {
        let {
          delivery: a,
          className: l
        } = e;
        return (0, o.jsx)("div", {
          className: u()(E().container, l),
          children: (null == a ? void 0 : a.length) > 0 && (0, o.jsx)("div", {
            className: u()(E().description, "wysiwyg"),
            children: a.map((e, a) => (0, o.jsxs)(d.Fragment, {
              children: [(0, o.jsx)("h3", {
                children: e.title
              }), (0, o.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              }), (0, o.jsx)("hr", {})]
            }, a))
          })
        })
      }
      var R = l(52867),
        L = l(33583);
      l(96239), l(17177);
      var G = l(42897),
        O = l(48434);

      function D() {
        return (D = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var l = arguments[a];
            for (var t in l)({}).hasOwnProperty.call(l, t) && (e[t] = l[t])
          }
          return e
        }).apply(null, arguments)
      }
      var B = (0, d.forwardRef)(function(e, a) {
          return d.createElement("svg", D({
            width: 6,
            height: 9,
            viewBox: "0 0 6 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: a
          }, e), t || (t = d.createElement("path", {
            d: "M1 8.5L5 4.5L1 0.5",
            stroke: "currentColor"
          })))
        }),
        z = l(13953),
        U = l.n(z);
      let F = (0, d.forwardRef)(function(e, a) {
        let {
          slides: l,
          config: t,
          classes: i,
          props: r,
          controls: n = !0
        } = e, s = (0, d.useRef)(null);
        return (0, d.useImperativeHandle)(a, () => ({
          slideTo: (e, a) => {
            var l;
            null === (l = s.current) || void 0 === l || l.swiper.slideTo(e, a)
          },
          setProgress: (e, a) => {
            var l;
            null === (l = s.current) || void 0 === l || l.swiper.setProgress(e, a)
          }
        })), (0, o.jsxs)(O.RC, {
          modules: [G.Vx, G.dK, G._R, G.xI, G.Ij, G.kQ],
          ref: s,
          navigation: {
            prevEl: "[data-button-prev]",
            nextEl: "[data-button-next]"
          },
          pagination: {
            clickable: !0,
            el: "[data-pagination]",
            bulletClass: U().bullet,
            bulletActiveClass: U().bulletActive
          },
          keyboard: {
            enabled: !0,
            onlyInViewport: !0
          },
          touchEventsTarget: "container",
          slidesPerView: "auto",
          effect: "slide",
          speed: 600,
          threshold: 5,
          ...t,
          ...r,
          className: u()(U().container, null == i ? void 0 : i.container),
          children: [l.map((e, a) => (0, o.jsx)(O.qr, {
            className: u()(null == i ? void 0 : i.slide, null == i ? void 0 : i.slide),
            children: e
          }, a)), n && (0, o.jsxs)("div", {
            className: u()(U().controls, null == i ? void 0 : i.controls),
            children: [(0, o.jsx)("button", {
              className: u()(U().button, null == i ? void 0 : i.button, null == i ? void 0 : i.buttonPrev),
              "data-button-prev": !0,
              children: (0, o.jsx)(B, {
                title: "Prev"
              })
            }), (0, o.jsx)("div", {
              className: U().pagination,
              "data-pagination": !0
            }), (0, o.jsx)("button", {
              className: u()(U().button, null == i ? void 0 : i.button, null == i ? void 0 : i.buttonNext),
              "data-button-next": !0,
              children: (0, o.jsx)(B, {
                title: "Next"
              })
            })]
          })]
        })
      });
      var V = l(60535),
        W = l.n(V);

      function J(e) {
        let {
          items: a,
          className: l
        } = e, t = (0, d.useRef)(null), [i, r] = (0, d.useState)(null), n = (0, d.useRef)(null), s = (0, d.useRef)(null), c = [];
        return null == a || a.map((e, a) => {
          let l = (0, o.jsx)(v.A, {
            src: e.src,
            absoluteSrc: !0,
            alt: "",
            width: 768,
            height: 1024,
            className: W().media,
            "data-swiper-parallax": "144"
          });
          c.push(l)
        }), (0, d.useEffect)(() => {
          var e;
          let a = null === (e = t.current) || void 0 === e ? void 0 : e.closest(".section");
          a && r(a)
        }, [t.current]), (0, d.useEffect)(() => {
          if (!i) return;
          let e = R.Ay.context(() => {
            let e = R.Ay.timeline({
              scrollTrigger: {
                scroller: document.querySelector("[data-scroller]"),
                trigger: i,
                start: () => "top top+=68",
                end: () => "bottom bottom",
                invalidateOnRefresh: !0,
                scrub: 0,
                onUpdate: e => {
                  var a;
                  let {
                    progress: l
                  } = e;
                  (null === (a = s.current) || void 0 === a ? void 0 : a.setProgress) && s.current.setProgress(l)
                }
              },
              defaults: {
                duration: 1,
                ease: "none"
              }
            });
            return n.current = e, () => {
              var e;
              null === (e = n.current) || void 0 === e || e.kill(), n.current = null
            }
          }, t);
          return () => e.revert()
        }, [i, c.length]), (0, o.jsx)("div", {
          className: u()(W().container, l),
          ref: t,
          children: (0, o.jsx)(F, {
            ref: s,
            slides: c,
            controls: !1,
            classes: {
              container: W().slider,
              slide: W().slide
            },
            config: {
              freeMode: {
                enabled: !0,
                sticky: !1
              },
              simulateTouch: !1,
              allowTouchMove: !1,
              touchStartPreventDefault: !1,
              direction: "vertical",
              parallax: {
                enabled: !0
              },
              speed: 0
            }
          })
        })
      }
      R.Ay.registerPlugin(L.u);
      var Q = l(39842),
        q = l.n(Q);

      function K(e) {
        let {
          items: a,
          className: l
        } = e, [t, i] = (0, d.useState)(0);
        return (0, o.jsxs)("div", {
          className: u()(q().container, l),
          children: [(0, o.jsx)("h3", {
            className: q().title,
            children: "Materials"
          }), (0, o.jsx)("ol", {
            className: q().list,
            children: a.map((e, a) => (0, o.jsxs)("li", {
              tabIndex: 0,
              className: u()(q().item, {
                [q().isActive]: t == a
              }),
              onMouseEnter: () => i(a),
              children: [(0, o.jsx)("span", {
                className: q().number,
                children: "".concat(a + 1, ".0")
              }), (0, o.jsx)("span", {
                className: q().text,
                children: e.name
              })]
            }, a))
          }), (0, o.jsx)("div", {
            className: q().preview,
            children: a.map((e, l) => {
              var i;
              return (0, o.jsx)(v.A, {
                src: null !== (i = e.image) && void 0 !== i ? i : "",
                absoluteSrc: !0,
                alt: "",
                className: u()(q().media, {
                  [q().isActive]: t == l
                }),
                style: {
                  "--stackOrder": a.length - l
                },
                width: 256,
                height: 256
              }, l)
            })
          })]
        })
      }
      let X = (0, d.createContext)(void 0),
        Y = e => {
          let {
            children: a
          } = e, [l, t] = (0, d.useState)({}), [i, r] = (0, d.useState)(!1);
          return (0, o.jsx)(X.Provider, {
            value: {
              selectedOptions: l,
              setSelectedOption: (e, a) => {
                t(l => ({
                  ...l,
                  [e]: a
                }))
              },
              showMissingOptions: i,
              setShowMissingOptions: r,
              hasSelectedOption: e => !!l[e]
            },
            children: a
          })
        },
        Z = () => {
          let e = (0, d.useContext)(X);
          if (!e) throw Error("useProductContext must be used within a ProductProvider");
          return e
        };
      var $ = l(87386),
        ee = l.n($);

      function ea(e) {
        let {
          options: a,
          availableVariants: l,
          actions: t,
          className: i
        } = e, {
          selectedOptions: r,
          setSelectedOption: n,
          showMissingOptions: s,
          hasSelectedOption: c,
          setShowMissingOptions: _
        } = Z(), [m, p] = (0, d.useState)([]), h = (e, l) => {
          n(e, l), a.every(e => c(e.name)) && s && _(!1)
        };
        return (0, d.useEffect)(() => {
          null == a || a.forEach(e => {
            let {
              name: a,
              items: l,
              checked: t
            } = e;
            !(null == r ? void 0 : r[a]) && "number" == typeof t && (null == l ? void 0 : l[t]) && n(a, l[t].value)
          })
        }, [a]), (0, d.useEffect)(() => {
          a.every(e => c(e.name)) && s && _(!1);
          let e = [];
          Array.isArray(l) ? e = l : l && r.gender && (e = l[r.gender.toLowerCase()] || []), p(e), a.forEach(a => {
            if ("size" === a.name) {
              let l = r[a.name],
                t = e.some(e => e.size === l);
              l && !t && n(a.name, "")
            }
          })
        }, [a, r.gender, s, l]), (0, o.jsx)("div", {
          className: u()(ee().container, i),
          children: null == a ? void 0 : a.map((e, a) => {
            let {
              id: l,
              name: i,
              label: n,
              items: d
            } = e;
            return (0, o.jsxs)("div", {
              className: u()(ee().group, {
                "has-error": s && !c(i)
              }),
              children: [(0, o.jsx)("h3", {
                className: ee().title,
                children: n
              }), (0, o.jsxs)("div", {
                className: ee().options,
                children: [d.map((e, a) => {
                  var l, t;
                  let n = "gender" === i || "color" === i || Array.isArray(m) && m.some(a => a.size === e.value);
                  return (0, o.jsxs)("label", {
                    className: u()(ee().option, {
                      [ee().hasImage]: e.imageUrl,
                      [ee().disabled]: !n
                    }),
                    style: {
                      "--optionChars": (null !== (l = e.label) && void 0 !== l ? l : e.value).length
                    },
                    children: [(0, o.jsx)("input", {
                      type: "radio",
                      name: i,
                      value: e.value,
                      checked: r[i] === e.value,
                      className: ee().input,
                      onChange: () => h(i, e.value),
                      disabled: !n
                    }), e.imageUrl ? (0, o.jsx)(v.A, {
                      src: e.imageUrl,
                      alt: "",
                      className: ee().contentImage,
                      absoluteSrc: !0
                    }) : (0, o.jsx)("span", {
                      className: ee().content,
                      children: null !== (t = e.label) && void 0 !== t ? t : e.value
                    })]
                  }, a)
                }), 0 === a && (null == t ? void 0 : t.sizeGuide) && t.sizeGuide]
              })]
            }, a)
          })
        })
      }
      var el = l(85555),
        et = l.n(el);

      function ei(e) {
        var a, l;
        let {
          items: t,
          className: i,
          onTabChange: r
        } = e, [n, s] = (0, d.useState)(null !== (l = null == t ? void 0 : null === (a = t[0]) || void 0 === a ? void 0 : a.slug) && void 0 !== l ? l : ""), c = e => {
          e !== n && (s(e), r(e))
        };
        return (0, o.jsx)("div", {
          className: u()(et().tabs, i),
          children: t.map((e, a) => (0, o.jsx)(b.default, {
            className: u()(et().tab, {
              isCustomActive: n == e.slug
            }),
            theme: "solid-alt",
            onClick: () => c(e.slug),
            children: e.label
          }, a))
        })
      }
      var er = l(14281),
        en = l(75436),
        eo = l.n(en);

      function es(e) {
        let {
          preventCollapse: a,
          moreText: l,
          lessText: t,
          children: i,
          className: r
        } = e, n = (0, d.useRef)(null), [s, c] = (0, d.useState)(!1), _ = (0, d.useRef)(null), [v, m] = (0, d.useState)(!1), [p, h] = (0, d.useState)(void 0), {
          height: x
        } = (0, er.A)(_) || {};
        return (0, d.useEffect)(() => {
          if (n.current) {
            let e = getComputedStyle(n.current).height;
            e && h(parseFloat(e))
          }
        }, [x]), (0, d.useEffect)(() => {
          p && x && m(x > p + 1)
        }, [p, x]), (0, o.jsxs)("div", {
          className: u()(eo().container, r, {
            [eo().isExpanded]: s
          }),
          style: {
            "--textExpand-maxHeight": x ? "".concat(x, "px") : void 0,
            "--textExpand-minHeight": p ? "".concat(p, "px") : void 0
          },
          children: [(0, o.jsxs)("div", {
            className: eo().inner,
            children: [(0, o.jsx)("div", {
              className: eo().doppelganger,
              "aria-hidden": "true",
              ref: n,
              children: i
            }), (0, o.jsx)("div", {
              className: eo().content,
              ref: _,
              children: i
            })]
          }), v && (0, o.jsxs)("button", {
            className: eo().button,
            onClick: () => {
              c(!s)
            },
            "aria-expanded": s,
            disabled: s && a,
            children: [(0, o.jsx)("span", {
              className: eo().more,
              children: null != l ? l : "Read more..."
            }), (0, o.jsx)("span", {
              className: eo().less,
              children: null != t ? t : "Read less..."
            })]
          })]
        })
      }
      var ed = l(45780);
      let ec = [{
        label: "Description",
        slug: "details"
      }, {
        label: "Materials",
        slug: "materials"
      }, {
        label: "Delivery",
        slug: "delivery"
      }];
      var eu = l(78603),
        e_ = l.n(eu);

      function ev(e) {
        var a, l, t, i;
        let {
          onSubmit: r,
          forSale: n,
          waitlistUrl: s,
          info: c,
          gallery: _,
          options: v,
          materials: m,
          sizeGuide: p,
          delivery: h,
          availableVariants: x
        } = e, [g, f] = (0, d.useState)(null !== (l = null == ec ? void 0 : null === (a = ec[0]) || void 0 === a ? void 0 : a.slug) && void 0 !== l ? l : ""), j = (0, d.useRef)(null), A = (0, d.useRef)(null), N = (0, d.useCallback)(e => {
          if (!j.current) {
            f(e);
            return
          }
          if (A.current) {
            var a;
            null == A || null === (a = A.current) || void 0 === a || a.kill(), A.current = null
          }
          A.current = y.Ay.timeline({
            onComplete: () => {
              var e;
              null == A || null === (e = A.current) || void 0 === e || e.kill(), A.current = null
            }
          }), A.current.to(j.current, {
            opacity: 0,
            duration: .2,
            y: "1rem",
            ease: "power1.in",
            onComplete: () => {
              f(e)
            }
          }).set(j.current, {
            y: "-0.5rem"
          }).to(j.current, {
            opacity: 1,
            y: 0,
            duration: .4,
            delay: .1,
            ease: "power1.out"
          })
        }, []), S = n ? {} : (0, ed.X)({
          url: null != s ? s : "",
          label: "Join waitlist",
          type: "custom"
        });
        return (0, o.jsxs)("div", {
          className: u()("section", "sectionBorder", "productConfigurator", "productConfiguratorDesktop", e_().container),
          style: {
            "--productConfigurator-galleryCount": null !== (t = null == _ ? void 0 : _.length) && void 0 !== t ? t : 1
          },
          children: [(0, o.jsxs)("div", {
            className: e_().inner,
            "data-modal-measure-target": !0,
            children: [(0, o.jsx)(J, {
              className: e_().gallery,
              items: _
            }), (0, o.jsxs)("div", {
              className: e_().content,
              children: [(0, o.jsx)(ei, {
                items: ec,
                className: e_().tabs,
                onTabChange: N
              }), (0, o.jsxs)("div", {
                className: e_().tabContent,
                ref: j,
                children: ["details" == g && (0, o.jsxs)(o.Fragment, {
                  children: [(null == c ? void 0 : c.productDescription) && (0, o.jsxs)("div", {
                    className: e_().textGroup,
                    children: [(0, o.jsx)("h2", {
                      className: e_().textGroupTitle,
                      children: "Product Details"
                    }), (0, o.jsx)(es, {
                      className: e_().productDescription,
                      children: (0, o.jsx)("div", {
                        className: "wysiwyg",
                        dangerouslySetInnerHTML: {
                          __html: (null !== (i = c.productDescription) && void 0 !== i ? i : "").replace(/\n/g, "<br />")
                        }
                      })
                    })]
                  }), v && (0, o.jsx)(ea, {
                    options: v,
                    availableVariants: x,
                    actions: {
                      sizeGuide: p.rows && (0, o.jsx)(H, {
                        modalKey: w,
                        className: e_().sizeGuideTrigger,
                        style: {
                          "--optionChars": 10
                        },
                        children: "Size guide"
                      })
                    }
                  }), (0, o.jsx)("div", {
                    className: e_().actions,
                    children: (0, o.jsx)(b.default, {
                      className: u()("buyButton", e_().submit),
                      theme: "solid-black",
                      onClick: n ? r : () => {},
                      ...S,
                      children: n ? "Buy now" : "Join waitlist"
                    })
                  })]
                }), "materials" == g && m && (0, o.jsx)(K, {
                  items: m
                }), "delivery" == g && h && (0, o.jsx)(I, {
                  delivery: h
                })]
              })]
            })]
          }), (null == p ? void 0 : p.rows) && (0, o.jsx)(T, {
            sizeGuide: p,
            parentSelector: "[data-scroller]"
          })]
        })
      }

      function em() {
        return (em = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var l = arguments[a];
            for (var t in l)({}).hasOwnProperty.call(l, t) && (e[t] = l[t])
          }
          return e
        }).apply(null, arguments)
      }
      var ep = (0, d.forwardRef)(function(e, a) {
          return d.createElement("svg", em({
            width: 9,
            height: 9,
            viewBox: "0 0 9 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: a
          }, e), i || (i = d.createElement("path", {
            d: "M5.15625 4.5H3.84375V1H5.15625V4.5Z",
            fill: "currentColor"
          })), r || (r = d.createElement("path", {
            d: "M5.15625 8H3.84375V4.5H5.15625V8Z",
            fill: "currentColor"
          })), n || (n = d.createElement("path", {
            d: "M1 5.15625L1 3.84375L8 3.84375L8 5.15625L1 5.15625Z",
            fill: "currentColor"
          })))
        }),
        eh = l(937),
        ex = l.n(eh);

      function eg(e) {
        let {
          title: a,
          icon: l,
          disabled: t,
          initiallyOpen: i,
          children: r,
          className: n
        } = e, [s, c] = (0, d.useState)(!!i);
        return (0, o.jsxs)("div", {
          className: u()(ex().container, n, {
            [ex().isExpanded]: s
          }),
          children: [(0, o.jsxs)("button", {
            className: ex().trigger,
            "aria-expanded": s,
            onClick: () => {
              c(!s)
            },
            disabled: t,
            children: [(0, o.jsx)("span", {
              className: ex().title,
              children: a
            }), void 0 !== l ? l : (0, o.jsx)("span", {
              className: ex().icon,
              children: (0, o.jsx)(ep, {})
            })]
          }), (0, o.jsx)("div", {
            className: ex().contentWrapper,
            ...s ? {
              inert: !0
            } : {},
            children: (0, o.jsx)("div", {
              className: ex().content,
              children: r
            })
          })]
        })
      }
      var ef = l(65994),
        ey = l.n(ef);

      function eb(e) {
        let {
          items: a,
          className: l
        } = e, t = [];
        return null == a || a.map((e, a) => {
          let l = (0, o.jsx)(v.A, {
            src: e.src,
            absoluteSrc: !0,
            alt: "",
            width: 768,
            height: 1024,
            className: ey().media,
            "data-swiper-parallax": "64"
          });
          t.push(l)
        }), (0, o.jsx)("div", {
          className: u()(ey().container, l),
          children: (0, o.jsx)(F, {
            slides: t,
            classes: {
              container: ey().slider,
              slide: ey().slide,
              controls: ey().controls,
              button: ey().button,
              buttonPrev: ey().buttonPrev,
              buttonNext: ey().buttonNext
            },
            config: {
              pagination: {
                el: "[data-pagination]",
                type: "fraction",
                renderFraction: function(e, a) {
                  return '<span class="'.concat(e, '"></span>/<span class="').concat(a, '"></span>')
                }
              },
              parallax: {
                enabled: !0
              }
            }
          })
        })
      }
      var ej = l(48385),
        eA = l.n(ej);

      function eN(e) {
        var a, l, t, i;
        let {
          onSubmit: r,
          forSale: n,
          waitlistUrl: s,
          info: d,
          gallery: c,
          options: _,
          materials: v,
          sizeGuide: m,
          delivery: p,
          availableVariants: h
        } = e, x = n ? {} : (0, ed.X)({
          url: null != s ? s : "",
          label: "Join waitlist",
          type: "custom"
        });
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(eb, {
            items: c
          }), (0, o.jsxs)("div", {
            className: u()("section", "sectionNoBorder", "productConfigurator", "productConfiguratorMobile", eA().container),
            children: [(0, o.jsxs)("div", {
              className: eA().intro,
              children: [(0, o.jsx)("h1", {
                className: eA().name,
                children: d.name
              }), (null == d ? void 0 : d.price) && (0, o.jsx)("span", {
                className: eA().price,
                children: d.price
              })]
            }), _ && (0, o.jsx)("div", {
              className: eA().overview,
              children: (0, o.jsx)(ea, {
                availableVariants: h,
                options: [..._].sort(e => "color" === e.name ? -1 : 0)
              })
            }), (0, o.jsx)("div", {
              className: eA().actions,
              children: (0, o.jsx)(b.default, {
                className: u()("buyButton", eA().submit),
                theme: "solid-black",
                onClick: n ? r : () => {},
                ...x,
                children: n ? "Buy now" : "Join waitlist"
              })
            }), (0, o.jsxs)("div", {
              className: eA().accordions,
              children: [(null == d ? void 0 : d.productDescription) && (0, o.jsx)(eg, {
                title: (0, o.jsx)("h2", {
                  children: "Product details"
                }),
                className: eA().accordion,
                initiallyOpen: !0,
                disabled: !0,
                icon: null,
                children: (0, o.jsx)("div", {
                  className: eA().textGroup,
                  children: (0, o.jsx)(es, {
                    children: (0, o.jsx)("div", {
                      className: "wysiwyg",
                      dangerouslySetInnerHTML: {
                        __html: null !== (t = null === (a = d.productDescription) || void 0 === a ? void 0 : a.replace(/\n/g, "<br />")) && void 0 !== t ? t : ""
                      }
                    })
                  })
                })
              }), (null == m ? void 0 : m.rows) && (0, o.jsxs)(eg, {
                title: (0, o.jsx)("h2", {
                  children: "Size guide"
                }),
                className: eA().accordion,
                children: [(null == m ? void 0 : m.description) && (0, o.jsx)("div", {
                  className: eA().textGroup,
                  children: (0, o.jsx)(es, {
                    children: (0, o.jsx)("div", {
                      className: "wysiwyg",
                      dangerouslySetInnerHTML: {
                        __html: null !== (i = null == m ? void 0 : null === (l = m.description) || void 0 === l ? void 0 : l.replace(/\n/g, "<br />")) && void 0 !== i ? i : ""
                      }
                    })
                  })
                }), (0, o.jsx)(S, {
                  className: eA().table,
                  rows: m.rows
                })]
              }), v && (0, o.jsx)(eg, {
                title: (0, o.jsx)("h2", {
                  children: "Materials"
                }),
                className: eA().accordion,
                children: (0, o.jsx)("ol", {
                  className: eA().listGroup,
                  children: v.map((e, a) => (0, o.jsxs)("li", {
                    children: [(0, o.jsx)("span", {
                      children: "".concat(a + 1, ".0")
                    }), (0, o.jsx)("span", {
                      children: e.name
                    })]
                  }, a))
                })
              }), p && (0, o.jsx)(eg, {
                title: (0, o.jsx)("h2", {
                  children: "Delivery"
                }),
                className: eA().accordion,
                children: (0, o.jsx)(I, {
                  delivery: p
                })
              })]
            })]
          })]
        })
      }
      var eS = l(33256);

      function eP(e) {
        let a = (0, f.A)("(min-width: 768px)", !0),
          {
            selectedOptions: l,
            showMissingOptions: t,
            setShowMissingOptions: i
          } = Z(),
          r = (e, a) => e.map(e => e.name).reduce((e, l) => (l in a && void 0 !== a[l] && (e[l] = a[l]), e), {}),
          n = (0, d.useMemo)(() => e.options ? r(e.options, l) : {}, [e.options, l]),
          s = async () => {
            if (t) {
              (0, eS.VG)(".productConfigurator");
              return
            }
            i(!1);
            try {
              let e = await fetch("/api/addToCart", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    ...n
                  })
                }),
                a = await e.json();
              if (!e.ok) throw i(!0), (0, eS.VG)(".productConfigurator"), Error(a.errors || "Failed to post");
              if (a.success && a.checkoutUrl) window.location.href = a.checkoutUrl;
              else throw Error("Checkout URL missing or operation unsuccessful")
            } catch (e) {
              console.error("Error adding to cart:", e)
            }
          };
        return a ? (0, o.jsx)(ev, {
          ...e,
          onSubmit: s
        }) : (0, o.jsx)(eN, {
          ...e,
          onSubmit: s
        })
      }
      var eC = l(23139),
        ew = l(57309),
        eT = l.n(ew);

      function eM(e) {
        var a, l, t, i, r;
        let {
          data: n,
          socialsData: s
        } = e, [c, u] = (0, d.useState)(null), [_, v] = (0, d.useState)(null), [m, p] = (0, d.useState)(null), [h, x] = (0, d.useState)(null), [f, y] = (0, d.useState)(null), [b, j] = (0, d.useState)(null), [A, N] = (0, d.useState)(!1), [S, P] = (0, d.useState)(""), [C, w] = (0, d.useState)([]);
        (0, d.useEffect)(() => {
          G()
        }, []);
        let T = e => {
            let a = (Array.isArray(e.edges) ? e.edges.map(e => e.node) : []).filter(e => e.availableForSale);
            return {
              men: a.filter(e => "Men" === e.gender).map(e => ({
                ...e,
                size: e.size
              })),
              women: a.filter(e => "Women" === e.gender).map(e => ({
                ...e,
                size: e.size
              }))
            }
          },
          M = e => e,
          H = e => e,
          k = e => e.map(e => ({
            src: e.src || ""
          })),
          E = e => ({
            title: e.title || "Size Guide",
            description: e.description || "No description available",
            rows: e.rows || []
          }),
          I = e => e.map(e => ({
            name: e.name || "Unknown",
            image: e.image || ""
          })),
          R = e => e.map(e => ({
            title: e.title || "No Title",
            description: e.description || "No Description"
          })),
          L = e => ((e => {
            let a = [],
              l = (t, i) => {
                var r;
                if (t === e.length) {
                  let e = Object.values(i).map(e => String(e).toLowerCase().replace(/[^a-z0-9]/g, "")).join("-"),
                    l = {
                      id: "variant-".concat(e),
                      availableForSale: Math.random() > .3,
                      ...i
                    };
                  a.push(l);
                  return
                }
                let n = e[t];
                null === (r = n.items) || void 0 === r || r.forEach((e, a) => {
                  l(t + 1, {
                    ...i,
                    [n.name]: e.value
                  })
                })
              };
            return l(0, {})
          })(e), e.map(e => {
            let a = e.items.map(e => ({
                id: e.id,
                value: e.value,
                label: e.label,
                imageUrl: e.imageUrl
              })),
              l = e.name.toLowerCase().replace(/\s+/g, "-"),
              t = -1 !== l.indexOf("size") ? void 0 : 0;
            return {
              id: e.id,
              name: l,
              label: e.name,
              items: a,
              checked: t
            }
          })),
          G = async () => {
            u(n.product), n.product.options && v(L(n.product.options)), n.product.materials && p(I(n.product.materials)), n.product.deliveryInfo && x(R(n.product.deliveryInfo)), n.product.sizeGuide && y(E(n.product.sizeGuide)), n.product.galleryImages && j(k(n.product.galleryImages)), N(H(n.product.forSale)), P(M(n.product.waitlistUrl)), n.product.variants && w(T(n.product.variants))
          }, O = {
            name: null == c ? void 0 : c.title,
            price: "\xa3" + parseFloat((null == c ? void 0 : null === (l = c.priceRange) || void 0 === l ? void 0 : null === (a = l.minVariantPrice) || void 0 === a ? void 0 : a.amount) || "0").toFixed(2).replace(/\.0+$/, ""),
            description: null == c ? void 0 : c.description,
            productDescription: null == c ? void 0 : c.productDescription
          };
        return (0, o.jsx)("main", {
          className: eT().page,
          children: (0, o.jsxs)("div", {
            className: eT().inner,
            children: [(0, o.jsxs)(Y, {
              children: [(0, o.jsx)(g, {
                title: O.name,
                image: null == c ? void 0 : c.mainImage.reference.image.url,
                description: "\n							<p>".concat(null == c ? void 0 : c.description, "</p>\n							<p><strong>").concat(null == c ? void 0 : null === (t = c.releaseInfo) || void 0 === t ? void 0 : t.value, "</strong></p>\n						"),
                banner: {
                  link: {
                    url: A ? "/shop" : S,
                    label: A ? "Buy now" : "Join waitlist",
                    type: A ? "reference" : "custom"
                  },
                  onClick: e => {
                    let a = document.querySelector(".buyButton");
                    a && A && (e.preventDefault(), a.click())
                  },
                  description: "\xa3" + parseFloat((null == c ? void 0 : null === (r = c.priceRange) || void 0 === r ? void 0 : null === (i = r.minVariantPrice) || void 0 === i ? void 0 : i.amount) || "0").toFixed(2).replace(/\.0+$/, "")
                }
              }), (0, o.jsx)(eP, {
                info: O,
                forSale: A,
                gallery: b,
                options: _,
                materials: m,
                sizeGuide: f,
                delivery: h,
                waitlistUrl: S,
                availableVariants: C
              })]
            }), (0, o.jsx)(eC.A, {
              socialsData: s
            })]
          })
        }, "shop-page")
      }
      let eH = {
        ...s.payloadSlateToHtmlConfig,
        convertLineBreakToBr: !0,
        elementMap: {
          ...s.payloadSlateToHtmlConfig.elementMap,
          linebreak: "br"
        }
      };

      function ek(e) {
        var a, l, t, i, r, n, d, c, u, _, v, m, p, h, x, g, f, y;
        let {
          page: b,
          socialsData: j
        } = e, A = {
          product: {
            title: b.hero.title,
            description: b.hero.description ? (0, s.slateToHtml)((null === (l = b.hero.description) || void 0 === l ? void 0 : null === (a = l.root) || void 0 === a ? void 0 : a.children) || [], eH) : "",
            productDescription: b.hero.description ? (0, s.slateToHtml)((null === (r = b.configurator) || void 0 === r ? void 0 : null === (i = r.productDescription) || void 0 === i ? void 0 : null === (t = i.root) || void 0 === t ? void 0 : t.children) || [], eH) : "",
            priceRange: {
              minVariantPrice: {
                amount: b.hero.price.replace("\xa3", "")
              }
            },
            mainImage: {
              reference: {
                image: {
                  url: "object" == typeof b.hero.mainImage && (null === (n = b.hero.mainImage) || void 0 === n ? void 0 : n.url) ? b.hero.mainImage.url : "string" == typeof b.hero.mainImage ? b.hero.mainImage : ""
                }
              }
            },
            releaseInfo: {
              value: b.hero.releaseInfo
            },
            options: (null === (c = b.configurator) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.map(e => {
              var a;
              return {
                id: "option-".concat(e.name),
                name: e.name,
                items: (null === (a = e.items) || void 0 === a ? void 0 : a.map(e => {
                  var a;
                  return {
                    id: "value-".concat(e.value),
                    value: e.value,
                    label: e.label,
                    imageUrl: "object" == typeof e.image && (null === (a = e.image) || void 0 === a ? void 0 : a.url) ? e.image.url : "string" == typeof e.image && !!e.image && "/assets/imgs/".concat(e.image)
                  }
                })) || []
              }
            })) || [],
            variants: (() => {
              var e;
              let a = (null === (e = b.configurator) || void 0 === e ? void 0 : e.options) || [],
                l = [],
                t = (e, i) => {
                  if (e === a.length) {
                    let e = Object.values(i).map(e => String(e).toLowerCase().replace(/[^a-z0-9]/g, "")).join("-"),
                      a = {
                        id: "variant-".concat(e),
                        availableForSale: Math.random() > .3,
                        ...i
                      };
                    l.push(a);
                    return
                  }
                  let r = a[e];
                  if (r) {
                    var n;
                    null === (n = r.items) || void 0 === n || n.forEach(a => {
                      t(e + 1, {
                        ...i,
                        [r.name]: a.value
                      })
                    })
                  }
                };
              return t(0, {}), {
                edges: l.map(e => ({
                  node: e
                }))
              }
            })(),
            materials: (null === (_ = b.configurator) || void 0 === _ ? void 0 : null === (u = _.materials) || void 0 === u ? void 0 : u.map(e => {
              var a;
              return {
                name: e.name,
                image: "object" == typeof e.image && (null === (a = e.image) || void 0 === a ? void 0 : a.url) ? e.image.url : "string" == typeof e.image ? e.image : ""
              }
            })) || [],
            deliveryInfo: (null === (m = b.configurator) || void 0 === m ? void 0 : null === (v = m.deliveryInfo) || void 0 === v ? void 0 : v.map(e => {
              var a, l;
              return {
                title: e.title,
                description: "object" == typeof e.description && (null === (l = e.description) || void 0 === l ? void 0 : null === (a = l.root) || void 0 === a ? void 0 : a.children) ? (0, s.slateToHtml)(e.description.root.children, eH) : "string" == typeof e.description ? e.description : ""
              }
            })) || [],
            sizeGuide: (null === (p = b.configurator) || void 0 === p ? void 0 : p.sizeGuide) ? {
              title: b.configurator.sizeGuide.title,
              description: b.configurator.sizeGuide.description,
              rows: (null === (h = b.configurator.sizeGuide.rows) || void 0 === h ? void 0 : h.map(e => [e.gender, e.europe, e.unitedStates, e.unitedKingdom, e.centimeters])) || []
            } : null,
            galleryImages: (null === (g = b.configurator) || void 0 === g ? void 0 : null === (x = g.gallery) || void 0 === x ? void 0 : x.map(e => {
              var a;
              return {
                src: "object" == typeof e.image && (null === (a = e.image) || void 0 === a ? void 0 : a.url) ? e.image.url : "string" == typeof e.image ? e.image : ""
              }
            })) || [],
            forSale: (null === (f = b.configurator) || void 0 === f ? void 0 : f.forSale) || !1,
            waitlistUrl: (null === (y = b.configurator) || void 0 === y ? void 0 : y.waitlistUrl) || ""
          }
        };
        return (0, o.jsx)(eM, {
          data: A,
          socialsData: j
        })
      }
    },
    58513: (e, a, l) => {
      "use strict";
      l.d(a, {
        default: () => g
      });
      var t = l(96339),
        i = l(30800),
        r = l(72727),
        n = l.n(r),
        o = l(39521),
        s = l.n(o);

      function d(e) {
        return (0, t.jsxs)("section", {
          className: n()(e.className, s().textPageSlice, {
            [s().flipOnMobile]: e.flipOnMobile
          }),
          children: [(0, t.jsxs)("div", {
            className: s().header,
            children: [e.description && (0, t.jsx)("h2", {
              className: s().description,
              children: e.description
            }), e.caption && (0, t.jsx)("p", {
              className: s().caption,
              children: e.caption
            })]
          }), (0, t.jsx)("div", {
            className: s().content,
            children: e.children
          })]
        })
      }
      var c = l(8333),
        u = l.n(c);

      function _(e) {
        return (0, t.jsx)("div", {
          className: n()(e.className, u().textPageSlices),
          children: e.children
        })
      }
      var v = l(80179),
        m = l(95744),
        p = l(67846),
        h = l.n(p);

      function x(e) {
        let a = (0, v.useRef)(null),
          l = (0, v.useRef)(null),
          r = (0, v.useMemo)(() => {
            var a, l, t, i;
            let r = [...e.heading.matchAll(/^([\w]+)\s?(.*)$/gi)];
            return [null !== (t = null === (a = r[0]) || void 0 === a ? void 0 : a[1]) && void 0 !== t ? t : "", null !== (i = null === (l = r[0]) || void 0 === l ? void 0 : l[2]) && void 0 !== i ? i : ""]
          }, [e.heading]);
        return (0, t.jsxs)("div", {
          className: n()("section", "sectionBorder", "textPage", h().textPage, e.className),
          ref: a,
          children: [(0, t.jsxs)("div", {
            className: h().wrapper,
            children: [(0, t.jsx)("div", {
              className: h().fold,
              children: (0, t.jsxs)("div", {
                className: h().foldInner,
                children: [(0, t.jsx)("header", {
                  className: h().header,
                  children: (0, t.jsx)("h1", {
                    className: h().heading,
                    children: (0, t.jsx)(m.A, {
                      text: r,
                      classes: {
                        word: h().headingWord,
                        wordWrapper: h().headingWordWrapper
                      },
                      animation: {
                        enabled: !0,
                        rootEl: a,
                        delay: .2
                      }
                    })
                  })
                }), e.fold && (0, t.jsx)("div", {
                  className: h().foldContent,
                  ref: l,
                  children: (0, t.jsx)(i.A, {
                    content: e.fold
                  })
                })]
              })
            }), (0, t.jsx)("div", {
              className: h().body,
              children: (0, t.jsx)("div", {
                className: h().bodyContent,
                children: e.children
              })
            })]
          }), (0, t.jsx)("div", {
            className: h().frame,
            "aria-hidden": "true",
            role: "presentation",
            children: (0, t.jsx)("div", {
              className: h().frameHelper
            })
          })]
        })
      }

      function g(e) {
        let {
          page: a
        } = e, {
          title: l,
          description: r,
          content: n
        } = a;
        return (0, t.jsx)(x, {
          heading: l,
          fold: r,
          children: (0, t.jsx)(_, {
            children: null == n ? void 0 : n.map((e, a) => {
              if (e.textBlock) {
                let {
                  caption: l,
                  title: r,
                  description: n,
                  flipOnMobile: o
                } = e.textBlock;
                return (0, t.jsxs)(d, {
                  caption: l,
                  flipOnMobile: o,
                  children: [(0, t.jsx)("h3", {
                    children: r
                  }), (0, t.jsx)(i.A, {
                    content: n
                  })]
                }, a)
              }
              return null
            })
          })
        })
      }
    },
    30800: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => r
      });
      var t = l(96339),
        i = l(88053);

      function r(e) {
        let a = (0, i.slateToHtml)(e.content, i.payloadSlateToHtmlConfig);
        return (0, t.jsx)("div", {
          className: e.className,
          dangerouslySetInnerHTML: {
            __html: a
          }
        })
      }
    },
    57749: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => v
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(52867),
        o = l(33583),
        s = l(29454),
        d = l(80179),
        c = l(39516),
        u = l(3624),
        _ = l.n(u);

      function v(e) {
        var a, l, i;
        let o = (0, d.useRef)(null),
          u = (0, d.useRef)(null),
          v = (0, d.useRef)(null),
          m = (0, s.usePathname)(),
          {
            isPreloaderLoaded: p
          } = (0, c.CU)();
        return (0, d.useEffect)(() => {
          if (!o.current || !u.current) return;
          let a = n.Ay.context(() => {
            var a, l, t, i, r, s;
            let d = n.Ay.timeline({
              scrollTrigger: {
                scroller: document.querySelector("[data-scroller]"),
                trigger: o.current,
                start: null !== (i = null === (a = e.scroll) || void 0 === a ? void 0 : a.start) && void 0 !== i ? i : "top bottom",
                end: null !== (r = null === (l = e.scroll) || void 0 === l ? void 0 : l.end) && void 0 !== r ? r : "bottom bottom",
                invalidateOnRefresh: !0,
                scrub: 0
              },
              defaults: {
                duration: 1,
                ease: null !== (s = null === (t = e.scroll) || void 0 === t ? void 0 : t.ease) && void 0 !== s ? s : "power1.out"
              }
            });
            return d.fromTo(u.current, {
              "--scrollOverlay-progress": 0
            }, {
              "--scrollOverlay-progress": 1
            }), v.current = d, () => {
              var e;
              null === (e = v.current) || void 0 === e || e.kill(), v.current = null
            }
          }, u);
          return () => a.revert()
        }, []), (0, d.useEffect)(() => {
          if (!e.watchRouter) return;
          let a = setTimeout(() => {
              var e, a;
              null === (a = v.current) || void 0 === a || null === (e = a.scrollTrigger) || void 0 === e || e.refresh()
            }, 200),
            l = setTimeout(() => {
              var e, a;
              null === (a = v.current) || void 0 === a || null === (e = a.scrollTrigger) || void 0 === e || e.refresh()
            }, 1e3);
          return () => {
            clearTimeout(a), clearTimeout(l)
          }
        }, [m, p]), (0, t.jsxs)("div", {
          className: r()(_().container, null === (a = e.classNames) || void 0 === a ? void 0 : a.container, {
            [_().debug]: e.debug
          }),
          ref: u,
          children: [(0, t.jsx)("div", {
            className: r()(_().visual, null === (l = e.classNames) || void 0 === l ? void 0 : l.visual)
          }), (0, t.jsx)("div", {
            className: r()(_().trigger, null === (i = e.classNames) || void 0 === i ? void 0 : i.trigger),
            ref: o
          })]
        })
      }
      n.Ay.registerPlugin(o.u)
    },
    54609: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => d
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(80179),
        o = l(12068),
        s = l.n(o);

      function d(e) {
        let {
          onScrollThreshold: a,
          debug: l,
          className: i
        } = e, o = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
          let e = new IntersectionObserver(e => {
              e.forEach(e => {
                a(e.isIntersecting)
              })
            }, {
              threshold: [0]
            }),
            l = o.current;
          return l && e.observe(l), () => {
            l && e.unobserve(l)
          }
        }, []), (0, t.jsx)("div", {
          ref: o,
          className: r()(s().helper, {
            [s().debug]: l
          }, i)
        })
      }
    },
    23139: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => y
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(56443),
        o = l(80179),
        s = l(66509),
        d = l.n(s),
        c = l(45780),
        u = l(31787),
        _ = l.n(u);

      function v(e) {
        let {
          items: a,
          className: l
        } = e;
        return a && 0 !== a.length ? (0, t.jsx)("div", {
          className: r()(_().list, l),
          children: a.map((e, a) => {
            var l;
            return e ? (0, o.createElement)(d(), {
              ...(0, c.X)(e.link),
              key: a,
              className: _().item
            }, null == e ? void 0 : null === (l = e.link) || void 0 === l ? void 0 : l.label) : null
          })
        }) : null
      }
      var m = l(16546),
        p = l(80551),
        h = l.n(p);

      function x(e) {
        var a;
        let {
          post: l,
          sizes: i,
          className: n
        } = e;
        return (0, t.jsxs)(d(), {
          ...(0, c.X)(null == l ? void 0 : l.link),
          className: r()(h().item, n),
          children: [(0, t.jsx)(m.A, {
            media: l.media,
            className: h().media,
            aspectRatio: "square",
            sizes: i
          }), (0, t.jsx)("div", {
            className: h().overlayWrapper,
            "aria-hidden": "true",
            children: (0, t.jsx)("div", {
              className: r()(h().overlay, h().overlayBlack)
            })
          }), (0, t.jsx)("span", {
            className: h().banner,
            children: (0, t.jsx)("span", {
              className: h().inner,
              children: (0, t.jsx)("span", {
                className: h().content,
                children: null == l ? void 0 : null === (a = l.link) || void 0 === a ? void 0 : a.label
              })
            })
          })]
        })
      }
      var g = l(9532),
        f = l.n(g);

      function y(e) {
        var a;
        let {
          socialsData: l
        } = e;
        return l ? (0, t.jsxs)("div", {
          className: r()("section", "sectionBorder", "socialGrid", f().container, e.className),
          children: [(0, t.jsxs)("div", {
            className: f().header,
            children: [(null == l ? void 0 : l.title) && (0, t.jsx)("span", {
              className: f().tag,
              children: (0, t.jsx)(n.A, {
                text: l.title
              })
            }), (0, t.jsxs)("div", {
              className: f().platforms,
              children: [(0, t.jsx)(v, {
                items: null == l ? void 0 : l.showcaseSocialsList
              }), (null == l ? void 0 : l.publications) && (0, t.jsx)("div", {
                className: f().stats,
                children: l.publications
              })]
            })]
          }), (0, t.jsxs)("div", {
            className: f().grid,
            children: [null == l ? void 0 : null === (a = l.gridItems) || void 0 === a ? void 0 : a.map((e, a) => (0, t.jsx)(x, {
              post: e,
              sizes: a % 5 == 0 ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw" : a % 5 == 1 ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 20vw",
              className: r()(f().item, f().itemMedia)
            }, a)), (0, t.jsx)("div", {
              className: r()(f().item, f().itemText),
              children: (0, t.jsx)("p", {
                children: null == l ? void 0 : l.gridText
              })
            })]
          })]
        }) : null
      }
    },
    56443: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => d
      });
      var t = l(96339),
        i = l(80179),
        r = l(88292),
        n = l(75664),
        o = l(22858),
        s = l.n(o);

      function d(e) {
        var a, l;
        let o = (null == e ? void 0 : e.text) || "",
          d = (0, i.useRef)(null),
          c = (0, i.useRef)(null);
        return (0, i.useEffect)(() => {
          if (d.current && !c.current) {
            var a;
            c.current = function(e, a) {
              var l, t, i, r;
              if (!e.current) return;
              let o = n.os.timeline({
                  paused: !0
                }),
                s = null === (l = e.current) || void 0 === l ? void 0 : l.parentElement;
              if (!s) {
                console.warn("[TextReveal:createTimeline] animation element not found");
                return
              }
              return o.fromTo(s, {
                "--textReveal-progress": 0
              }, {
                "--textReveal-progress": 1,
                duration: null !== (t = null == a ? void 0 : a.duration) && void 0 !== t ? t : .9,
                delay: null !== (i = null == a ? void 0 : a.delay) && void 0 !== i ? i : .1,
                ease: null !== (r = null == a ? void 0 : a.ease) && void 0 !== r ? r : "power4.inOut"
              }), o
            }(d, null === (a = e.options) || void 0 === a ? void 0 : a.timeline) || null
          }
        }, [d]), (0, r.C7)(d, c.current || void 0, null !== (l = null === (a = e.options) || void 0 === a ? void 0 : a.inViewport) && void 0 !== l ? l : {
          once: !1
        }), (0, t.jsx)("span", {
          className: s().text,
          ref: d,
          children: o
        })
      }
    },
    95744: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => m
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(75664),
        o = l(34417),
        s = l.n(o),
        d = l(80179),
        c = l(64881),
        u = l(39516),
        _ = l(79901),
        v = l.n(_);

      function m(e) {
        var a;
        let {
          animation: l,
          classes: i,
          ...o
        } = e, _ = (0, d.useMemo)(() => s()(o.text) ? [o.text] : o.text, [o.text]), m = (0, d.useRef)(null), {
          isPreloaderLoaded: p
        } = (0, u.CU)(), h = (0, d.useRef)(null), [x, g] = (0, d.useState)(!1), f = (0, c.A)(h, {
          root: null,
          rootMargin: "0px",
          threshold: 0
        });
        return (0, d.useEffect)(() => {
          (null == f ? void 0 : f.isIntersecting) && !x && g(!0)
        }, [null == f ? void 0 : f.isIntersecting]), (0, d.useEffect)(() => {
          var e;
          if (!(null == l ? void 0 : l.enabled) || !(null == l ? void 0 : null === (e = l.rootEl) || void 0 === e ? void 0 : e.current)) return;
          let a = n.os.context(() => {
            var e, a;
            let t = n.os.timeline({
              paused: !0
            });
            return t.fromTo(".".concat(null !== (e = null == i ? void 0 : i.word) && void 0 !== e ? e : v().word), {
              y: "110%"
            }, {
              y: 0,
              duration: .8,
              delay: null !== (a = null == l ? void 0 : l.delay) && void 0 !== a ? a : .3,
              ease: "expo.out",
              stagger: e => {
                var a;
                return e * (null !== (a = null == l ? void 0 : l.staggerDelay) && void 0 !== a ? a : .1)
              }
            }), m.current = t, () => {
              var e;
              null === (e = m.current) || void 0 === e || e.kill(), m.current = null
            }
          }, null == l ? void 0 : l.rootEl);
          return () => a.revert()
        }, [null == l ? void 0 : null === (a = l.rootEl) || void 0 === a ? void 0 : a.current, _]), (0, d.useEffect)(() => {
          var e;
          m.current && p && x && (null === (e = m.current) || void 0 === e || e.play())
        }, [p, x, m, _]), (0, t.jsx)(t.Fragment, {
          children: null == _ ? void 0 : _.map((e, a) => {
            let l = e.split("\n");
            return (0, t.jsx)("span", {
              className: r()(v().group, null == i ? void 0 : i.group),
              ref: h,
              children: l.map((e, a) => (0, t.jsxs)(d.Fragment, {
                children: [e.split(" ").filter(e => !!e).map((e, a) => (0, t.jsxs)(d.Fragment, {
                  children: [a > 0 ? " " : "", (0, t.jsx)("span", {
                    className: r()(v().wordWrapper, null == i ? void 0 : i.wordWrapper),
                    children: (0, t.jsx)("span", {
                      "data-word": !0,
                      className: r()(v().word, null == i ? void 0 : i.word),
                      children: e
                    })
                  })]
                }, a)), a < l.length - 1 && (0, t.jsx)("br", {})]
              }, a))
            }, a)
          })
        })
      }
    },
    73138: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => A
      });
      var t = l(96339),
        i = l(72727),
        r = l.n(i),
        n = l(75664),
        o = l(7987),
        s = l.n(o),
        d = l(80179),
        c = l(39516);
      let u = [{
          src: "/_next/static/media/1.36c201ed.webp",
          height: 142,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoIAAgAAkA4JaQAAsf5aa/LAAD+8LbzxBHV3xmK2YMTz/7v+zL4nvvR+PO+i82EieUTuYbbLD5tf93DtJ+pK/56x8SOIUKAAAA=",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/8.aecb440f.webp",
          height: 143,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoIAAgAAkA4JaQAAp2QLkcsAAD+3P4C+Y7IGhtEG/+DeP3QMaE6XMaCLPUXrSM4DKLHAlbj+ddd+yGxlbomQ0Us8bY62goAAAA=",
          blurWidth: 8,
          blurHeight: 8
        }],
        _ = [{
          src: "/_next/static/media/2.57b29963.webp",
          height: 142,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAgAAkA4JZwAAp2YuudcAADOPlxZv5Y/3vmJxE/a5H69ExcOw1XH0U+Udu6sflbTgbXNsc9hPkl8rS+7JeAA",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/3.fbb2922c.webp",
          height: 143,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAgAAkA4JaQAAxU/v4e5KAD+9n8/fn8n8uGUAHVvTv5iIdIXkj38Lj5q5O1nDSWTvhRPZFj/yTh5AAA=",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/4.49ef99d7.webp",
          height: 143,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAgAAkA4JZwAAxZho7TJAAD+iKIaP48PucnuyZ7pK/7Wg1ARlYgBbHYQsank3GKHLO/VUCLmnn28rh5AAA==",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/5.384720ea.webp",
          height: 142,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAkA4JZwAAp1V+FCsAAD+wretbtfmntI+8ORvNzvGgf9swGrF+DvFbYn+cRfw6IYecAVhePjdpecUvoUAAAA=",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/6.afd5e80c.webp",
          height: 143,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAgAAkA4JZwAApzRxLQAAPff+nDrEloHS8YOd0aPS8Vc31NuL3FtrsjC2hl4f3pQp+FzzGDvtMqjepFjp7zQAAA=",
          blurWidth: 8,
          blurHeight: 8
        }, {
          src: "/_next/static/media/7.6d66d6f4.webp",
          height: 143,
          width: 140,
          blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAgAAkA4JZwAAxUyqCYwwAD+5vyDsxXdzRccVGGLnCKF752ALH10yMG/hQevmzhPqHQRZtNXnZslst2M28BKxIYeQAAA",
          blurWidth: 8,
          blurHeight: 8
        }];
      var v = l(80677),
        m = l(5609),
        p = l.n(m);

      function h(e) {
        let a = "female" == e.gender,
          l = e.count % (a ? u.length : _.length),
          i = a ? u[l] : _[l];
        return (0, t.jsxs)("div", {
          className: r()(p().container, e.className),
          children: [(0, t.jsxs)("div", {
            className: p().content,
            children: [(0, t.jsx)("p", {
              className: p().title,
              children: e.title
            }), (0, t.jsx)("p", {
              className: p().description,
              children: e.description
            })]
          }), (0, t.jsx)(v.A, {
            className: p().media,
            aspectRatio: "square",
            src: i || "",
            alt: "",
            absoluteSrc: !0,
            width: 128,
            height: 128,
            sizes: "100px"
          })]
        })
      }
      let x = ["Lewis", "Anthony", "Philipp", "John", "Michael", "Chris", "James", "David", "Daniel", "Matthew", "Andrew", "Joseph", "William", "Benjamin", "Elijah", "Henry", "Jackob", "Samuel", "Gabriel", "Joshua", "Logan", "Lucas", "Oliver", "Alexander", "Ethan", "Mason", "Jacob", "Ryan", "Sebastian", "Owen", "Caleb", "Nathan", "Isaac", "Jack", "Aaron", "Thomas", "Charles", "Zachary", "Carter", "Hunter", "Adrian", "Christian", "Austin", "Connor", "Evan", "Robert", "Dylan", "Tyler", "Isaiah", "Adam", "Luke", "Brayden", "Jason", "Dominic", "Miles", "Jaxon", "Leo", "Ian", "Vincent", "Nolan", "Colton", "Max", "George", "Finn", "Beau", "Xavier", "Weston", "Axel", "Greyson", "Landon", "Silas", "Justin", "Bentley", "Ayden", "Asher", "Blake", "Tristan", "Jace", "Bryson", "Camden", "Brody", "Carlos", "Damian", "Kingston", "Tucker", "Grant", "Kaden", "Graham", "Judah", "Spencer", "Tobias", "Andre", "Malcolm", "Cash", "Ellis", "Ryder", "Zane", "Cody", "Ronald", "Troy"],
        g = ["Alice", "Emma", "Sophia", "Olivia", "Ava", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Luna", "Ella", "Aria", "Scarlett", "Grace", "Chloe", "Victoria", "Hannah", "Zoey", "Penelope", "Riley", "Lily", "Nora", "Leah", "Layla", "Mila", "Ellie", "Lillian", "Aurora", "Savannah", "Stella", "Naomi", "Aubrey", "Willow", "Paisley", "Skylar", "Lucy", "Madison", "Violet", "Claire", "Eva", "Elena", "Kennedy", "Mackenzie", "Juliet", "Isla", "Hazel", "Bella"],
        f = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.", "R.", "S.", "T.", "U.", "V.", "W.", "Y."];
      var y = l(29126),
        b = l.n(y);
      let j = {
        maxTimeout: 6e3,
        minTimeout: 1e3,
        maxItems: 4
      };

      function A(e) {
        let a = (0, d.useRef)(null),
          [l, i] = (0, d.useState)([]),
          o = (0, d.useRef)(0),
          u = (0, d.useRef)(0),
          _ = (0, d.useRef)(0),
          v = (0, d.useRef)(null),
          {
            isPreloaderLoaded: m
          } = (0, c.CU)();
        (0, d.useEffect)(() => {
          if (!m) return;
          let e = () => {
            let a = p(1);
            i(e => [...e, ...a].slice(-j.maxItems));
            let l = s()(j.minTimeout, j.maxTimeout);
            v.current = setTimeout(e, l)
          };
          return v.current = setTimeout(e, 1e3), () => {
            v.current && clearTimeout(v.current)
          }
        }, [m]), (0, d.useEffect)(() => {
          if (l.length > 0) {
            var e;
            let l = null === (e = a.current) || void 0 === e ? void 0 : e.querySelector(".".concat(b().card, ":last-child"));
            l && (n.os.set(l, {
              height: 0
            }), n.os.to(l, {
              height: "auto",
              duration: .5,
              ease: "power2.out"
            }))
          }
        }, [l]);
        let p = (0, d.useCallback)(function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            a = [];
          for (let l = 0; l < e; l++) {
            o.current++;
            let e = "".concat(Date.now(), "-").concat(Math.random()),
              l = o.current % 4 == 0 ? "female" : "male";
            "female" == l ? u.current++ : _.current++;
            let t = "female" == l ? g : x,
              i = t[Math.floor(Math.random() * t.length)],
              r = f[Math.floor(Math.random() * f.length)],
              n = "".concat(i, " ").concat(r),
              d = s()(2, 18),
              c = "Signed up ".concat(d, " mins ago");
            a.push({
              id: e,
              name: n,
              message: c,
              gender: l,
              count: "female" == l ? u.current : _.current
            })
          }
          return a
        }, []);
        return (0, t.jsx)("div", {
          className: r()(b().container, e.className),
          ref: a,
          children: l.map(e => (0, t.jsx)(h, {
            className: b().card,
            title: e.name,
            description: e.message,
            gender: e.gender,
            count: e.count
          }, e.id))
        })
      }
    },
    45780: (e, a, l) => {
      "use strict";
      l.d(a, {
        X: () => t
      });
      let t = e => {
        var a, l;
        let t;
        if (!e) return {
          href: {
            hash: ""
          },
          target: "_self",
          rel: "noopener noreferrer"
        };
        if ("reference" == e.type && (null === (l = e.reference) || void 0 === l ? void 0 : null === (a = l.value) || void 0 === a ? void 0 : a.slug)) t = {
          pathname: "/" === e.reference.value.slug ? "/" : "/" + e.reference.value.slug
        };
        else if ("custom" == e.type) {
          let a = e.url || "";
          t = "#" === a ? {
            hash: ""
          } : {
            pathname: a
          }
        } else t = {
          hash: ""
        };
        return {
          href: t,
          target: e.newTab ? "_blank" : "_self",
          rel: e.newTab ? "noopener noreferrer" : ""
        }
      }
    },
    95984: e => {
      e.exports = {
        "visually-hidden": "MediaBlock_visually-hidden__6zS4A",
        visuallyHidden: "MediaBlock_visually-hidden__6zS4A",
        focusable: "MediaBlock_focusable__oSntR",
        container: "MediaBlock_container__oVCgj",
        media: "MediaBlock_media__JLwnL"
      }
    },
    937: e => {
      e.exports = {
        "visually-hidden": "Accordion_visually-hidden__ypV1X",
        visuallyHidden: "Accordion_visually-hidden__ypV1X",
        focusable: "Accordion_focusable__5Owi2",
        container: "Accordion_container__eml3K",
        isExpanded: "Accordion_isExpanded__kpy8v",
        trigger: "Accordion_trigger__Ab4sG",
        icon: "Accordion_icon__JFUFn",
        title: "Accordion_title__2Si2_",
        contentWrapper: "Accordion_contentWrapper__f8ELT",
        content: "Accordion_content__LXN77"
      }
    },
    69816: e => {
      e.exports = {
        "visually-hidden": "BannerLead_visually-hidden__XQbsV",
        visuallyHidden: "BannerLead_visually-hidden__XQbsV",
        focusable: "BannerLead_focusable__KUHhH",
        container: "BannerLead_container__vSdN8",
        header: "BannerLead_header__GRziR",
        cta: "BannerLead_cta__yP_70",
        titleText: "BannerLead_titleText__Nht_5",
        extra: "BannerLead_extra__2Y8R4",
        link: "BannerLead_link__t4vgv"
      }
    },
    17506: e => {
      e.exports = {
        "visually-hidden": "ContentHeadline_visually-hidden__3rPTi",
        visuallyHidden: "ContentHeadline_visually-hidden__3rPTi",
        focusable: "ContentHeadline_focusable__VAAXq",
        container: "ContentHeadline_container__5gzjm",
        header: "ContentHeadline_header__iCPpf",
        tag: "ContentHeadline_tag__8Mkfd",
        description: "ContentHeadline_description__1fnkn",
        headline: "ContentHeadline_headline__cf8Ys"
      }
    },
    52318: e => {
      e.exports = {
        "visually-hidden": "ContentMedia_visually-hidden__xRk9O",
        visuallyHidden: "ContentMedia_visually-hidden__xRk9O",
        focusable: "ContentMedia_focusable__8EijK",
        container: "ContentMedia_container__Xu9Aj",
        mediaWrapper: "ContentMedia_mediaWrapper__45fCq",
        media: "ContentMedia_media__wPyaA",
        frame: "ContentMedia_frame__R82Pf",
        frameHelper: "ContentMedia_frameHelper__0Ugjr",
        scrollOverlayContainer: "ContentMedia_scrollOverlayContainer__T7dr1",
        scrollOverlayTrigger: "ContentMedia_scrollOverlayTrigger__DSmG3",
        scrollOverlayVisual: "ContentMedia_scrollOverlayVisual__Yl0i_"
      }
    },
    60713: e => {
      e.exports = {
        "visually-hidden": "ContentTextMedia_visually-hidden__qeRIC",
        visuallyHidden: "ContentTextMedia_visually-hidden__qeRIC",
        focusable: "ContentTextMedia_focusable__Vr0mD",
        container: "ContentTextMedia_container__DNdQZ",
        text: "ContentTextMedia_text__1oEYT",
        media: "ContentTextMedia_media__R09Q9"
      }
    },
    17902: e => {
      e.exports = {
        "visually-hidden": "FormContact_visually-hidden__MivrA",
        visuallyHidden: "FormContact_visually-hidden__MivrA",
        focusable: "FormContact_focusable__ttqgj",
        container: "FormContact_container__IeFQI",
        form: "FormContact_form__mFOXy",
        fields: "FormContact_fields__z7nWH",
        submitButton: "FormContact_submitButton__kvbuU",
        submitted: "FormContact_submitted__UPTpf",
        confirmationMessage: "FormContact_confirmationMessage__Vmve7"
      }
    },
    85002: e => {
      e.exports = {
        "visually-hidden": "FormInput_visually-hidden__1J_n1",
        visuallyHidden: "FormInput_visually-hidden__1J_n1",
        focusable: "FormInput_focusable__YaqI1",
        item: "FormInput_item__1Ofm_",
        field: "FormInput_field__uUM29",
        title: "FormInput_title__E5qsg",
        input: "FormInput_input__hLWG8",
        textarea: "FormInput_textarea__1p9lK",
        "has-error": "FormInput_has-error__nPITv",
        hasError: "FormInput_has-error__nPITv"
      }
    },
    75465: e => {
      e.exports = {
        "visually-hidden": "FormPresetConnect_visually-hidden__DhFuc",
        visuallyHidden: "FormPresetConnect_visually-hidden__DhFuc",
        focusable: "FormPresetConnect_focusable__hLHI8",
        container: "FormPresetConnect_container__HICSs",
        heading: "FormPresetConnect_heading__VRPVt",
        mediaWrapper: "FormPresetConnect_mediaWrapper___ooUB",
        media: "FormPresetConnect_media__9Uqv4",
        formWrapper: "FormPresetConnect_formWrapper__D5_DN",
        form: "FormPresetConnect_form__evDtm"
      }
    },
    99526: e => {
      e.exports = {
        "visually-hidden": "HeroMedia_visually-hidden__FWzgE",
        visuallyHidden: "HeroMedia_visually-hidden__FWzgE",
        focusable: "HeroMedia_focusable__LuFya",
        container: "HeroMedia_container__1Ta1U",
        banner: "HeroMedia_banner__CrkDq",
        scroller: "HeroMedia_scroller__UivTH",
        inner: "HeroMedia_inner__hTWI0",
        heroMedia: "HeroMedia_heroMedia__8bOkS",
        toasts: "HeroMedia_toasts__MfoAy",
        frame: "HeroMedia_frame__Irg9f",
        visual: "HeroMedia_visual__127_E",
        media: "HeroMedia_media__K9AG_",
        isOverlayVisible: "HeroMedia_isOverlayVisible__7LdfK",
        overlay: "HeroMedia_overlay__6gPS1",
        pastStickyHelper: "HeroMedia_pastStickyHelper__Eih0U",
        isPastSticky: "HeroMedia_isPastSticky__7LHzq",
        overlayContent: "HeroMedia_overlayContent__x6uCw",
        overlayBox: "HeroMedia_overlayBox__7a2yv",
        overlayMedia: "HeroMedia_overlayMedia__NgmAl",
        overlayHelper: "HeroMedia_overlayHelper__5znUz",
        lineTop: "HeroMedia_lineTop__Hcawo",
        lineBottom: "HeroMedia_lineBottom__S_SzC",
        lineLeft: "HeroMedia_lineLeft__ndvGh",
        lineRight: "HeroMedia_lineRight__97Bx5",
        dotTopLeft: "HeroMedia_dotTopLeft__eKgsT",
        dotTopRight: "HeroMedia_dotTopRight__tpWsQ",
        dotBottomLeft: "HeroMedia_dotBottomLeft__d_mHE",
        dotBottomRight: "HeroMedia_dotBottomRight__0o_7K",
        scrollOverlayContainer: "HeroMedia_scrollOverlayContainer__llqki",
        scrollOverlayTrigger: "HeroMedia_scrollOverlayTrigger__Br9p3",
        scrollOverlayVisual: "HeroMedia_scrollOverlayVisual__fiQOl"
      }
    },
    58114: e => {
      e.exports = {
        "visually-hidden": "HeroProduct_visually-hidden__OrIJY",
        visuallyHidden: "HeroProduct_visually-hidden__OrIJY",
        focusable: "HeroProduct_focusable__qaGFt",
        container: "HeroProduct_container__8i5F7",
        scroller: "HeroProduct_scroller____FPV",
        inner: "HeroProduct_inner__CaxZA",
        media: "HeroProduct_media__QQPDz",
        intro: "HeroProduct_intro__O_7SU",
        title: "HeroProduct_title__ldyii",
        description: "HeroProduct_description__I1XFW",
        banner: "HeroProduct_banner__VZ8TL",
        toasts: "HeroProduct_toasts__8cNXr",
        frame: "HeroProduct_frame__QYs_b",
        scrollOverlayContainer: "HeroProduct_scrollOverlayContainer__nd94Y",
        scrollOverlayTrigger: "HeroProduct_scrollOverlayTrigger__F5g0A",
        scrollOverlayVisual: "HeroProduct_scrollOverlayVisual___iKL_"
      }
    },
    4178: e => {
      e.exports = {
        "visually-hidden": "HeroText_visually-hidden__IVJpy",
        visuallyHidden: "HeroText_visually-hidden__IVJpy",
        focusable: "HeroText_focusable__VJ9gZ",
        container: "HeroText_container__MvD2f",
        inner: "HeroText_inner__RxGGf",
        text: "HeroText_text__WVIP7",
        wordWrapper: "HeroText_wordWrapper__iRaPg"
      }
    },
    192: e => {
      e.exports = {
        "visually-hidden": "MediaImage_visually-hidden__P2tdz",
        visuallyHidden: "MediaImage_visually-hidden__P2tdz",
        focusable: "MediaImage_focusable__rakyf",
        media: "MediaImage_media__mtkIZ",
        onImageLoad: "MediaImage_onImageLoad__F7bxK",
        aspectPortrait: "MediaImage_aspectPortrait__KisBX",
        aspectLandscape: "MediaImage_aspectLandscape__FULeO",
        aspectSquare: "MediaImage_aspectSquare__6rNRH",
        aspectAuto: "MediaImage_aspectAuto__fZ7L3"
      }
    },
    3e4: e => {
      e.exports = {
        "visually-hidden": "MediaVideo_visually-hidden__XCtCF",
        visuallyHidden: "MediaVideo_visually-hidden__XCtCF",
        focusable: "MediaVideo_focusable__7bghR",
        media: "MediaVideo_media__CvwKr",
        onVideoLoad: "MediaVideo_onVideoLoad__AbS1u",
        aspectPortrait: "MediaVideo_aspectPortrait__Cz9lI",
        aspectLandscape: "MediaVideo_aspectLandscape__WlLs5",
        aspectSquare: "MediaVideo_aspectSquare__zN95H",
        aspectAuto: "MediaVideo_aspectAuto__vRIN6"
      }
    },
    18213: e => {
      e.exports = {
        "visually-hidden": "Modal_visually-hidden__xcP9h",
        visuallyHidden: "Modal_visually-hidden__xcP9h",
        focusable: "Modal_focusable__w_me6",
        overlay: "Modal_overlay__GT37E",
        content: "Modal_content__d_K8t",
        close: "Modal_close__Q48kk"
      }
    },
    65982: e => {
      e.exports = {
        "visually-hidden": "ModalSizes_visually-hidden__dMPu_",
        visuallyHidden: "ModalSizes_visually-hidden__dMPu_",
        focusable: "ModalSizes_focusable__fUTsE",
        overlay: "ModalSizes_overlay__Fc1ju",
        mediaWrapper: "ModalSizes_mediaWrapper__ySOr3",
        content: "ModalSizes_content__NvaL4",
        info: "ModalSizes_info__GOFFB",
        media: "ModalSizes_media__Ie80e",
        intro: "ModalSizes_intro__h_8xp",
        title: "ModalSizes_title__Vv60i",
        description: "ModalSizes_description__BqyB1",
        table: "ModalSizes_table__zds1W",
        close: "ModalSizes_close__hIXiG"
      }
    },
    57309: e => {
      e.exports = {
        "visually-hidden": "page_visually-hidden__ltZLe",
        visuallyHidden: "page_visually-hidden__ltZLe",
        focusable: "page_focusable__r5No_",
        page: "page_page__M1MVm",
        pageReveal: "page_pageReveal__3dcZD",
        inner: "page_inner__PZb16"
      }
    },
    78603: e => {
      e.exports = {
        "visually-hidden": "ProductConfiguratorDesktop_visually-hidden___S_cf",
        visuallyHidden: "ProductConfiguratorDesktop_visually-hidden___S_cf",
        focusable: "ProductConfiguratorDesktop_focusable___BSma",
        container: "ProductConfiguratorDesktop_container__JvaCQ",
        inner: "ProductConfiguratorDesktop_inner__QKlrU",
        gallery: "ProductConfiguratorDesktop_gallery__Us_Y3",
        content: "ProductConfiguratorDesktop_content__Zqu_T",
        tabs: "ProductConfiguratorDesktop_tabs__Dg8Vv",
        tabContent: "ProductConfiguratorDesktop_tabContent__Es5ed",
        textGroup: "ProductConfiguratorDesktop_textGroup__XKeGG",
        textGroupTitle: "ProductConfiguratorDesktop_textGroupTitle__RmcMC",
        actions: "ProductConfiguratorDesktop_actions__4p1iA",
        submit: "ProductConfiguratorDesktop_submit__0yVaa",
        productDescription: "ProductConfiguratorDesktop_productDescription__3qMLb",
        sizeGuideTrigger: "ProductConfiguratorDesktop_sizeGuideTrigger__yrY92"
      }
    },
    48385: e => {
      e.exports = {
        "visually-hidden": "ProductConfiguratorMobile_visually-hidden__Ki87z",
        visuallyHidden: "ProductConfiguratorMobile_visually-hidden__Ki87z",
        focusable: "ProductConfiguratorMobile_focusable__j4bO6",
        container: "ProductConfiguratorMobile_container__z4bgJ",
        intro: "ProductConfiguratorMobile_intro__pin_J",
        name: "ProductConfiguratorMobile_name__12ord",
        price: "ProductConfiguratorMobile_price__Y03gL",
        inner: "ProductConfiguratorMobile_inner__xtFKM",
        accordions: "ProductConfiguratorMobile_accordions__dBEmx",
        accordion: "ProductConfiguratorMobile_accordion__UVPdp",
        textGroup: "ProductConfiguratorMobile_textGroup__h8mnH",
        listGroup: "ProductConfiguratorMobile_listGroup__a9cqa",
        actions: "ProductConfiguratorMobile_actions__T7cc6",
        submit: "ProductConfiguratorMobile_submit__a7WcY"
      }
    },
    61594: e => {
      e.exports = {
        "visually-hidden": "ProductDelivery_visually-hidden__1Ec1b",
        visuallyHidden: "ProductDelivery_visually-hidden__1Ec1b",
        focusable: "ProductDelivery_focusable__TL8Mu",
        container: "ProductDelivery_container__0H4F4",
        description: "ProductDelivery_description___DcFk"
      }
    },
    65994: e => {
      e.exports = {
        "visually-hidden": "ProductGallery_visually-hidden__WOMG0",
        visuallyHidden: "ProductGallery_visually-hidden__WOMG0",
        focusable: "ProductGallery_focusable__EEL04",
        container: "ProductGallery_container__Ir6_v",
        slider: "ProductGallery_slider__5_0KI",
        slide: "ProductGallery_slide__oCgFI",
        media: "ProductGallery_media__CF1L0",
        controls: "ProductGallery_controls__XljEF",
        button: "ProductGallery_button__W_fR2",
        buttonPrev: "ProductGallery_buttonPrev__FwB3Q",
        buttonNext: "ProductGallery_buttonNext__fgzYf"
      }
    },
    60535: e => {
      e.exports = {
        "visually-hidden": "ProductGalleryScroll_visually-hidden__hYyLV",
        visuallyHidden: "ProductGalleryScroll_visually-hidden__hYyLV",
        focusable: "ProductGalleryScroll_focusable__6Jh76",
        container: "ProductGalleryScroll_container__fbU3b",
        slider: "ProductGalleryScroll_slider__tnNa6",
        slide: "ProductGalleryScroll_slide__0T_dH",
        media: "ProductGalleryScroll_media__28etW"
      }
    },
    39842: e => {
      e.exports = {
        "visually-hidden": "ProductMaterials_visually-hidden__EyCKj",
        visuallyHidden: "ProductMaterials_visually-hidden__EyCKj",
        focusable: "ProductMaterials_focusable__1wM2Q",
        container: "ProductMaterials_container__GArhB",
        title: "ProductMaterials_title__VeK4V",
        list: "ProductMaterials_list__kmIiq",
        item: "ProductMaterials_item__h3FRG",
        isActive: "ProductMaterials_isActive__Nbry7",
        number: "ProductMaterials_number__vjq3Z",
        text: "ProductMaterials_text__QP_1U",
        preview: "ProductMaterials_preview__UhnUH",
        media: "ProductMaterials_media__rUokN"
      }
    },
    87386: e => {
      e.exports = {
        "visually-hidden": "ProductOptions_visually-hidden__XA8oS",
        visuallyHidden: "ProductOptions_visually-hidden__XA8oS",
        focusable: "ProductOptions_focusable__DYpYe",
        container: "ProductOptions_container__uIwQs",
        group: "ProductOptions_group__ArwFT",
        input: "ProductOptions_input__1Yw8w",
        title: "ProductOptions_title__74Mxm",
        options: "ProductOptions_options__sHLyg",
        option: "ProductOptions_option__Y7uT0",
        "has-image": "ProductOptions_has-image__k50Gv",
        hasImage: "ProductOptions_has-image__k50Gv",
        disabled: "ProductOptions_disabled__7i2Xw",
        "content-image": "ProductOptions_content-image__u08ur",
        contentImage: "ProductOptions_content-image__u08ur",
        content: "ProductOptions_content__Gm65M"
      }
    },
    3624: e => {
      e.exports = {
        "visually-hidden": "ScrollOverlay_visually-hidden__Wpqyc",
        visuallyHidden: "ScrollOverlay_visually-hidden__Wpqyc",
        focusable: "ScrollOverlay_focusable__1KD6L",
        container: "ScrollOverlay_container__V51CJ",
        trigger: "ScrollOverlay_trigger__9Iv1k",
        visual: "ScrollOverlay_visual__Xzp4B",
        debug: "ScrollOverlay_debug__uO_sB"
      }
    },
    12068: e => {
      e.exports = {
        "visually-hidden": "ScrollThreshold_visually-hidden__4Z_ff",
        visuallyHidden: "ScrollThreshold_visually-hidden__4Z_ff",
        focusable: "ScrollThreshold_focusable__AbEkg",
        helper: "ScrollThreshold_helper__gOyQP",
        debug: "ScrollThreshold_debug__QezPC"
      }
    },
    13953: e => {
      e.exports = {
        "visually-hidden": "Slider_visually-hidden__3hk9Y",
        visuallyHidden: "Slider_visually-hidden__3hk9Y",
        focusable: "Slider_focusable__5s1dv",
        container: "Slider_container__b5eRP",
        controls: "Slider_controls__IVKAx",
        pagination: "Slider_pagination__jVp8q",
        bullet: "Slider_bullet__i33R3",
        "bullet-active": "Slider_bullet-active__JfHhj",
        bulletActive: "Slider_bullet-active__JfHhj",
        button: "Slider_button__6DZ5D"
      }
    },
    9532: e => {
      e.exports = {
        "visually-hidden": "SocialGrid_visually-hidden__QKRht",
        visuallyHidden: "SocialGrid_visually-hidden__QKRht",
        focusable: "SocialGrid_focusable__eGQdi",
        container: "SocialGrid_container__wd9F2",
        header: "SocialGrid_header__SFC10",
        tag: "SocialGrid_tag__5L8pp",
        platforms: "SocialGrid_platforms__G9uCe",
        stats: "SocialGrid_stats__fILg3",
        grid: "SocialGrid_grid__MVWMu",
        itemMedia: "SocialGrid_itemMedia__SCKIi",
        item: "SocialGrid_item__cYzW2",
        itemText: "SocialGrid_itemText__SUCXT"
      }
    },
    31787: e => {
      e.exports = {
        "visually-hidden": "SocialGridLinks_visually-hidden__sfiWc",
        visuallyHidden: "SocialGridLinks_visually-hidden__sfiWc",
        focusable: "SocialGridLinks_focusable__HQM_S",
        list: "SocialGridLinks_list__j_ZKj",
        item: "SocialGridLinks_item__I5Lgu"
      }
    },
    80551: e => {
      e.exports = {
        "visually-hidden": "SocialGridPost_visually-hidden__076VN",
        visuallyHidden: "SocialGridPost_visually-hidden__076VN",
        focusable: "SocialGridPost_focusable__pMG8e",
        item: "SocialGridPost_item__dOvWL",
        banner: "SocialGridPost_banner__8_Mpt",
        content: "SocialGridPost_content__0UvCL",
        overlayWrapper: "SocialGridPost_overlayWrapper__fzADC",
        overlay: "SocialGridPost_overlay__skFoE",
        media: "SocialGridPost_media__a7r6J",
        inner: "SocialGridPost_inner__HS9s_",
        overlayBlue: "SocialGridPost_overlayBlue__oYvtI",
        overlayBlack: "SocialGridPost_overlayBlack__ZRgrx",
        overlayGray: "SocialGridPost_overlayGray__xoSIA"
      }
    },
    35720: e => {
      e.exports = {
        "visually-hidden": "TableInfo_visually-hidden__hRk7G",
        visuallyHidden: "TableInfo_visually-hidden__hRk7G",
        focusable: "TableInfo_focusable__b_faP",
        container: "TableInfo_container__vWxTB",
        table: "TableInfo_table__0D6fs",
        header: "TableInfo_header__Z8Y_6",
        cell: "TableInfo_cell__BvlNn",
        body: "TableInfo_body__2lR6V",
        row: "TableInfo_row__zLGvN"
      }
    },
    85555: e => {
      e.exports = {
        "visually-hidden": "Tabs_visually-hidden__6jRjx",
        visuallyHidden: "Tabs_visually-hidden__6jRjx",
        focusable: "Tabs_focusable__JlEeH",
        tabs: "Tabs_tabs__LbP0S",
        tab: "Tabs_tab__5NCFA"
      }
    },
    75436: e => {
      e.exports = {
        "visually-hidden": "TextExpand_visually-hidden__jO_A_",
        visuallyHidden: "TextExpand_visually-hidden__jO_A_",
        focusable: "TextExpand_focusable__9YU6N",
        container: "TextExpand_container__6eylN",
        inner: "TextExpand_inner__hIPs1",
        isExpanded: "TextExpand_isExpanded___W5R3",
        content: "TextExpand_content__K3L_V",
        doppelganger: "TextExpand_doppelganger__1LSJD",
        button: "TextExpand_button__OMIvN",
        more: "TextExpand_more___Yv3N",
        less: "TextExpand_less__4tKKj"
      }
    },
    67846: e => {
      e.exports = {
        "visually-hidden": "TextPage_visually-hidden__zKagX",
        visuallyHidden: "TextPage_visually-hidden__zKagX",
        focusable: "TextPage_focusable__yw88r",
        textPage: "TextPage_textPage__pYREI",
        wrapper: "TextPage_wrapper__JFJoT",
        fold: "TextPage_fold__m_CWP",
        foldInner: "TextPage_foldInner__MUEa3",
        header: "TextPage_header__6eeN5",
        foldContent: "TextPage_foldContent__6Uo0e",
        heading: "TextPage_heading__r8gcG",
        headingWordWrapper: "TextPage_headingWordWrapper__kCWL2",
        headingWord: "TextPage_headingWord__D_3gv",
        body: "TextPage_body__BSvJI",
        bodyContent: "TextPage_bodyContent__SrVQh",
        frame: "TextPage_frame__A2ptP",
        frameHelper: "TextPage_frameHelper__Kx6bq"
      }
    },
    39521: e => {
      e.exports = {
        "visually-hidden": "TextPageSlice_visually-hidden__g_ljk",
        visuallyHidden: "TextPageSlice_visually-hidden__g_ljk",
        focusable: "TextPageSlice_focusable__M324f",
        textPageSlice: "TextPageSlice_textPageSlice__BOos3",
        flipOnMobile: "TextPageSlice_flipOnMobile__NT_yn",
        header: "TextPageSlice_header__FGwYL",
        description: "TextPageSlice_description__Bl_2Z",
        content: "TextPageSlice_content__Ptp25",
        caption: "TextPageSlice_caption__TCDG0"
      }
    },
    8333: e => {
      e.exports = {
        "visually-hidden": "TextPageSlices_visually-hidden__3j5zs",
        visuallyHidden: "TextPageSlices_visually-hidden__3j5zs",
        focusable: "TextPageSlices_focusable__lrhSe",
        textPageSlices: "TextPageSlices_textPageSlices__dzNok"
      }
    },
    22858: e => {
      e.exports = {
        "visually-hidden": "TextReveal_visually-hidden__LmHGA",
        visuallyHidden: "TextReveal_visually-hidden__LmHGA",
        focusable: "TextReveal_focusable__4mjHi",
        text: "TextReveal_text__sL2Yx"
      }
    },
    79901: e => {
      e.exports = {
        "visually-hidden": "TextSplitWord_visually-hidden__w6qzo",
        visuallyHidden: "TextSplitWord_visually-hidden__w6qzo",
        focusable: "TextSplitWord_focusable__jIpVl",
        group: "TextSplitWord_group__qdpv0",
        word: "TextSplitWord_word__IvXvq",
        wordWrapper: "TextSplitWord_wordWrapper__KAZs0"
      }
    },
    29126: e => {
      e.exports = {
        "visually-hidden": "ToastEngagement_visually-hidden__pDvej",
        visuallyHidden: "ToastEngagement_visually-hidden__pDvej",
        focusable: "ToastEngagement_focusable__DQXpy",
        container: "ToastEngagement_container__luE9w",
        card: "ToastEngagement_card__H5ieX"
      }
    },
    5609: e => {
      e.exports = {
        "visually-hidden": "ToastEngagementCard_visually-hidden__T2_XW",
        visuallyHidden: "ToastEngagementCard_visually-hidden__T2_XW",
        focusable: "ToastEngagementCard_focusable__DOj_N",
        container: "ToastEngagementCard_container__PUE40",
        content: "ToastEngagementCard_content__Zck1U",
        title: "ToastEngagementCard_title__pTsCI",
        description: "ToastEngagementCard_description__9cjWV",
        media: "ToastEngagementCard_media__Xo6zb"
      }
    }
  }
]);