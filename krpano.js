/*
    krpano Embedding Script
    krpano 1.19-pr8 (build 2016-09-30)
*/
function createPanoViewer(e) {
    function at(e) {
        return ("" + e).toLowerCase()
    }

    function ft(e, t) {
        return e[d](t) >= 0
    }

    function lt() {
        var t, r, i, s, o, u, a, f, l = n.location;
        l = l.search || l.hash;
        if (l) {
            t = ".html5.flash.wmode.mobilescale.fakedevice.", r = l[R](1)[F]("&");
            for (i = 0; i < r[D]; i++) s = r[i], o = s[d]("="), o == -1 && (o = s[D]), u = s[R](0, o), a = at(u), f = s[R](o + 1), t[d]("." + a + ".") >= 0 ? e[a] = f : a[C](0, 9) == "initvars." ? (e[_] || (e[_] = {}), e[_][u[C](9)] = f) : e.addVariable(u, f)
        }
    }

    function ct(e) {
        return e[B] = lt, e
    }

    function ht() {
        function N() {
            var e, n, i, s, o, u, a;
            if (t.plugins) {
                e = t.plugins["Shockwave Flash"];
                if (typeof e == "object") {
                    n = e.description;
                    if (n) {
                        i = v, t[z] && (s = t[z]["application/x-shockwave-flash"], s && (s.enabledPlugin || (i = p)));
                        if (i) {
                            o = n[F](" ");
                            for (u = 0; u < o[D]; ++u) {
                                a = parseFloat(o[u]);
                                if (isNaN(a)) continue;
                                return a
                            }
                        }
                    }
                }
            }
            if (r[nt]) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (e) {
                    n = e.GetVariable("$version");
                    if (n) return parseFloat(n[F](" ")[1][F](",").join("."))
                }
            } catch (f) {}
            return 0
        }

        function k() {
            var e, t, i = p,
                s = n[Y]("div");
            for (e = 0; e < 5; e++)
                if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != W) {
                    i = v, e == 3 && r.matchMedia && (t = r.matchMedia("(-webkit-transform-3d)"), t && (i = t.matches == v));
                    break
                }
            return i
        }

        function L(e) {
            var t, i, s = {};
            s[y] = e;
            if (r._krpWGL == v) return v;
            try {
                t = n[Y]("canvas");
                for (i = 0; i < 4; i++)
                    if (t.getContext([q, "experimental-webgl", "moz-webgl", "webkit-3d"][i], s)) return r._krpWGL = v, v
            } catch (o) {}
            return p
        }
        var l, c, h, m, g, b, w, E, S, x, T;
        if (s > 0) return;
        l = p, c = p, h = p, m = e[O] && e[O][y] !== undefined ? e[O][y] : p, c = L(m);
        if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0) a = f = v, l = v;
        else {
            o = N(), o >= 10.1 && (u = v), l = k(), g = at(t.platform), b = 0, w = 0, E = 0, S = i[d]("firefox/"), S < 0 && (S = i[d]("gecko/")), S >= 0 && (b = parseInt(i[C](1 + i[d]("/", S)), 10)), h = !!r[tt], S = i[d](tt), S > 0 && (E = parseInt(i[C](S + 7), 10), h = v), S = i[d]("edge/"), S > 0 && (h = p), S = i[d](Z), S > 0 && (w = parseInt(i[C](S + 8), 10), b >= 18 && (w = 4)), l && (w > 0 && w < 4 && (l = p), b > 3 && b < 18 && w > 1 && (c = l = p), c || (g[d](et) < 0 && b > 3 && w < 1 && (l = p), h && E < 50 && (l = p))), m && !c && u && (l = p);
            if (l || c) {
                a = v, x = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0, T = (t.msMaxTouchPoints | 0) > 1;
                if (w >= 4 || x || T) f = v
            }
        }
        s = 1 | l << 1 | c << 2 | h << 3
    }

    function pt(e) {
        function C(e) {
            function a() { r[m] ? (r[m]("DOMMouseScroll", c, p), r[m]("mousewheel", c, p), n[m]("mousedown", f, p), n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(P, c) : r[P] = n[P] = c, n.onmousedown = f, n.onmouseup = l) }

            function f(e) { e || (e = r.event, e[S] = e[X]), u = e ? e[S] : T }

            function l(e) {
                var t, i, s, a, f, l, c, h;
                e || (e = r.event, e[S] = e[X]), t = 0, i = o[D];
                for (t = 0; t < i; t++) {
                    s = o[t];
                    if (s) {
                        a = n[s.id];
                        if (a && s.needfix) {
                            f = a[x](), l = a == e[S], c = a == u, h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                            if ((l || c) && h == p) try { a[U] && a[U](0, "mouseUp") } catch (d) {}
                        }
                    }
                }
                return v
            }

            function c(t) {
                var i, u, a, f, l, c;
                t || (t = r.event, t[S] = t[X]), i = 0, u = p, t.wheelDelta ? (i = t.wheelDelta / 120, r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail, s == p && (i /= 3));
                if (i) {
                    a = 0, f = o[D];
                    for (a = 0; a < f; a++) {
                        l = o[a];
                        if (l) {
                            c = n[l.id];
                            if (c && c == t[S]) {
                                try { c.jswheel ? c.jswheel(i) : c[w] ? c[w](i) : c[A] && (c[A](), c[w] && c[w](i)) } catch (h) {}
                                u = v;
                                break
                            }
                        }
                    }
                }
                e[V] == p && (u = p);
                if (u) return t[st] && t[st](), t[ut] && t[ut](), t.cancelBubble = v, t.cancel = v, n[m] || (t.returnValue = p), p
            }
            var i, s = at(t.appVersion)[d](et) >= 0,
                o = r._krpMW,
                u = T;
            o || (o = r._krpMW = new Array, a()), i = e[b], o.push({ id: e.id, needfix: s || !!r[tt] || i == "opaque" || i == "transparent" })
        }
        var i, s, o, u, a, f, l = encodeURIComponent,
            c = "",
            h = e.vars,
            y = e[j],
            N = e.id;
        for (;;) {
            s = n[E](N);
            if (!s) break;
            N += String.fromCharCode(48 + Math.floor(9 * Math.random())), e.id = N
        }
        e[b] && (y[b] = e[b]), e[k] && (y[k] = e[k]), e[Q] !== undefined && (h[Q] = e[Q]), e[b] = at(y[b]), y.allowfullscreen = "true", y.allowscriptaccess = it, i = "browser.", c = i + "useragent=" + l(t.userAgent) + "&" + i + "location=" + l(r.location.href);
        for (i in h) c += "&" + l(i) + "=" + l(h[i]);
        i = _, h = e[i];
        if (h) {
            c += "&" + i + "=";
            for (i in h) c += "%26" + l(escape(i)) + "=" + l(escape(h[i]))
        }
        y.flashvars = c, e[L] && (y.base = e[L]), o = "", u = ' id="' + N + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ', a = "_krpcb_" + N, !e[I] || (r[a] = function() {
            try { delete r[a] } catch (t) { r[a] = T }
            e[I](n[E](N))
        });
        if (t.plugins && t[z] && !r[nt]) {
            o = '<embed name="' + N + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
            for (i in y) o += i + '="' + y[i] + '" ';
            o += " />"
        } else {
            o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + '" />';
            for (i in y) o += '<param name="' + i + '" value="' + y[i] + '" />';
            o += "</object>"
        }
        e[g].innerHTML = o, e.focus === v && (f = n[E](N), f && f.focus()), C(e)
    }

    function dt(e) { typeof embedpanoJS !== W ? embedpanoJS(e) : e[N]("krpano HTML5 Viewer not available!") }

    function vt(n, r) {
        var u, a, f, l;
        n == 1 ? (o >= 11.4 && (u = v, at(t.platform)[d](et) >= 0 && at(t.vendor)[d]("apple") >= 0 && (a = i[d]("webkit/"), a > 0 && (a = parseFloat(i[C](a + 7)), !isNaN(a) && a > 0 && a < 534 && (u = p))), u && (e[b] == T && !e[j][b] ? e[b] = s & 8 ? "window" : "direct" : (f = ("" + e[b])[d]("-flash"), f > 0 && (e[b] = e[b][C](0, f))))), pt(e)) : n == 2 ? dt(e) : (l = "", r < 2 && (l += "Adobe Flashplayer"), r == 0 && (l += " or<br/>"), r != 1 && (l += "HTML5 Browser with WebGL ", ft(at(e[K]), q) || (l += "or CSS3D "), l += "support"), l += " required!", e[N](l))
    }

    function mt() {
        var t = 'Local usage with <span style="border:1px solid gray;padding:0px 3px;">file://</span> urls is limited due browser security restrictions!<br><br>Use a localhost server (like the <a href="http://krpano.com/tools/ktestingserver/#top" style="color:white;">krpano Testing Server</a>) for local testing!<br>Just start the krpano Testing Server and refresh this page.<br><br><a href="http://krpano.com/docu/localusage/#top" style="color:gray;font-style:italic;text-decoration:none;">More information...</a>';
        e[N](t)
    }

    function gt(e, t, n) {
        var r;
        try {
            r = new XMLHttpRequest, r.responseType = "text", r.open("GET", e, v), r.onreadystatechange = function() {
                var e;
                r.readyState === 4 && (e = r.status, e == 0 && r.responseText || e == 200 ? t() : n())
            }, r.send(T)
        } catch (i) { n() }
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1,
        d = "indexOf",
        v = !0,
        m = "addEventListener",
        g = "targetelement",
        y = "failIfMajorPerformanceCaveat",
        b = "wmode",
        w = "externalMouseEvent",
        E = "getElementById",
        S = "target",
        x = "getBoundingClientRect",
        T = null,
        N = "onerror",
        C = "slice",
        k = "bgcolor",
        L = "flashbasepath",
        A = "enable_mousewheel_js_bugfix",
        O = "webglsettings",
        M = "localfallback",
        _ = "initvars",
        D = "length",
        P = "onmousewheel",
        H = "fallback",
        B = "passQueryParameters",
        j = "params",
        F = "split",
        I = "onready",
        q = "webgl",
        R = "substring",
        U = "externalMouseEvent2",
        z = "mimeTypes",
        W = "undefined",
        X = "srcElement",
        V = "mwheel",
        $ = "basepath",
        J = "consolelog",
        K = "html5",
        Q = "xml",
        G = "flash",
        Y = "createElement",
        Z = "android",
        et = "mac",
        tt = "chrome",
        nt = "ActiveXObject",
        rt = "never",
        it = "always",
        st = "stopPropagation",
        ot = "only",
        ut = "preventDefault";
    return t = navigator, n = document, r = window, i = at(t.userAgent), s = 0, o = 0, u = p, a = p, f = v, e || (e = {}), l = e[B] === v, e.swf || (e.swf = "krpano.swf"), e[Q] === undefined && (e[Q] = e.swf[F](".swf").join(".xml")), e.id || (e.id = "krpanoSWFObject"), e.width || (e.width = "100%"), e.height || (e.height = "100%"), e[k] || (e[k] = "#000000"), e[b] || (e[b] = T), e[S] || (e[S] = T), e[K] || (e[K] = "auto"), e[G] || (e[G] = T), e[V] === undefined && (e[V] = v), e.vars || (e.vars = {}), e[j] || (e[j] = {}), e[I] || (e[I] = T), e.mobilescale || (e.mobilescale = .5), e.fakedevice || (e.fakedevice = T), e[M] || (e[M] = "http://localhost:8090"), e[$] ? e[L] = e[$] : (c = "./", h = e.swf.lastIndexOf("/"), h >= 0 && (c = e.swf[C](0, h + 1)), e[$] = c), e.isDevice = function(e) {
        var t, n, r, s = "all",
            o = ["ipad", "iphone", "ipod", Z];
        for (t = 0; t < 4; t++) i[d](o[t]) >= 0 && (s += "|" + o[t]);
        e = at(e)[F]("|");
        if (e == T) return v;
        n = e[D];
        for (t = 0; t < n; t++) {
            r = e[t];
            if (s[d](r) >= 0) return v
        }
        return p
    }, e.addVariable = function(t, n) { t = at(t), t == "pano" || t == Q ? e[Q] = n : e.vars[t] = n }, e.addParam = function(t, n) { e[j][at(t)] = n }, e.useHTML5 = function(t) { e[K] = t }, e.isHTML5possible = function() {
        return ht(), a
    }, e.isFlashpossible = function() {
        return ht(), u
    }, e[N] || (e[N] = function(t) {
        var n = e[g];
        n ? n.innerHTML = '<table style="width:100%;height:100%;"><tr style="vertical-align:middle;text-align:center;"><td>ERROR:<br><br>' + t + "<br><br></td></tr></table>" : alert("ERROR: " + t)
    }), e.embed = function(t) {
        var i, o, f, c, h, m;
        t && (e[S] = t), e[g] = n[E](e[S]), e[g] ? (l && lt(), e.focus === undefined && e[g][x] && (i = e[g][x](), e.focus = i.top == 0 && i.left == 0 && i.right >= r.innerWidth && i.bottom >= r.innerHeight), e[V] == p && (e.vars["control.disablewheel"] = v), e[J] && (e.vars[J] = e[J]), s == 0 && ht(), o = at(e[K]), f = e[G], f && (f = at(f), f == "prefer" ? o = H : f == H ? o = "prefer" : f == ot ? o = rt : f == rt && (o = ot)), c = 0, h = 0, m = a, m && ft(o, q) && (m = s & 4), o == rt ? (c = u ? 1 : 0, h = 1) : ft(o, ot) ? (c = m ? 2 : 0, h = 2) : ft(o, it) ? c = h = 2 : o == H ? c = u ? 1 : a ? 2 : 0 : c = m ? 2 : u ? 1 : 0, c == 2 && at(location.href[C](0, 7)) == "file://" ? gt(location.href, function() { vt(c, h) }, function() {
            var t, n = at(e[M]);
            n == G ? u ? vt(1, 0) : mt() : n == "none" ? vt(c, h) : n[d]("://") > 0 ? (t = new Image, t[N] = mt, t.onload = function() { location.href = n + "/krpanotestingserverredirect.html?" + location.href }, t.src = n + "/krpanotestingserver.png") : mt()
        }) : vt(c, h)) : e[N]("No Embedding Target")
    }, ct(e)
}

function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t)
            for (n = 0; n < t.length; n++) {
                r = t[n];
                if (r && r.id === e) {
                    t.splice(n, 1);
                    break
                }
            }
        s.unload && s.unload(), i = s.parentNode, i && i.removeChild(s)
    }
}

function embedpano(e) { createPanoViewer(e).embed() };
/*
    krpano HTML5 Viewer
    krpano 1.19-pr8 (build 2016-09-30)
*/
var krpanoJS = { version: "1.19-pr8", build: "2016-09-30" };

function embedpanoJS(p) {
    eval(function(d) {
        var q = String.fromCharCode,
            n = 1,
            l = d.length,
            b = null,
            e = null,
            a = 0,
            g = 0,
            m = 0,
            c = 0,
            h = 0,
            k = 0,
            f = 0;
        try { q.apply(null, (new Uint8Array(4)).subarray(2)) } catch (p) { n = 0 }
        e = n ? Uint8Array : Array;
        for (b = new e(4 * l / 5); a < l;) m = d.charCodeAt(a++) - 35, c = d.charCodeAt(a++) - 35, h = d.charCodeAt(a++) - 35, k = d.charCodeAt(a++) - 35, f = d.charCodeAt(a++) - 35, 56 < m && m--, 56 < c && c--, 56 < h && h--, 56 < k && k--, 56 < f && f--, f += 85 * (85 * (85 * (85 * m + c) + h) + k), b[g++] = f >> 24 & 255, b[g++] = f >> 16 & 255, b[g++] = f >> 8 & 255, b[g++] = f & 255;
        e = new e(b[2] <<
            16 | b[1] << 8 | b[0]);
        l = 8 + (b[6] << 16 | b[5] << 8 | b[4]);
        a = 8;
        for (g = 0; a < l;) {
            m = b[a++];
            c = m >> 4;
            for (h = c + 240; 255 === h; c += h = b[a++]);
            for (k = a + c; a < k;) e[g++] = b[a++];
            if (a === l) break;
            f = g - (b[a++] | b[a++] << 8);
            c = m & 15;
            for (h = c + 240; 255 === h; c += h = b[a++]);
            for (k = g + c + 4; g < k;) e[g++] = e[f++]
        }
        b.length = 0;
        l = e.length;
        d = "";
        if (n && window.TextDecoder) d = (new TextDecoder).decode(e);
        else
            for (a = 0; a < l; a += 32E3) d += q.apply(null, n ? e.subarray(a, a + 32E3) : e.slice(a, a + 32E3));
        return d
    }("9U,^aB@R#erdIIVFK^g(Fi/_1F09)hDSU,/4*4T=17;X)JS+uFH*A^1#=/sr/w-SQGe2A:Gf,;N-wK*P1s+%,Fj.f78Ze'K/q2Sq#;/md/w-];0?7fB/p>$L3)&r<-ETAVB>,M96[UGw6[UGx1:KEY1r7,<D89i>F,+ALG^[Ma2MYl0EJJ+Z0n.3G/xF-W1q:T)GaQeWCQ3FgCNV1g3/Tm>0>g;p6*Y7NCM[J(CTVB:#7G=&2it)QCPQJV1Pd$@+Kwu3m,%AVC2>Sk6^#9&/9GHa#/W[O0#K,nF'8T;#Id:w1OU_,/pE%b6^#B)/5vV^F3&a[-w#s'#?1_RF*/h[3Jgp21rwxLDoZ3Wj`7kP/9H)j0nI5`0n+r1&5<.U#4mZKBtB)61:JkL5><KEB<MA;,^$ir4+CP&6^#q6G-Pv$-ETME5_Y]]AZ%AB5H-9QFKg?)<O+$THG4+7D01`@%A3^?ES1@w:fW'[6X0WZAZ%DL4/lB0B_d'#<5EFbCVD4/08CTP*f,26/%B#/#%TH/#0_v2Ekx8wB8[$w)itGX)TiAM%+YDwFu*JwED39eHFmYbI_*F84TPOv8d]sf'R4iVC3=n81pkvuCU.ZrCQj>THEiM$ATVC9I<E8.Cj)>%C2uYM#%CM[##od1.#i^:#$Xm,$;a-S)h%aVKsoS,A'$0c?VCN.1f^U90?5JE4d*XxED.Y&B=@lEqJ1amC5F.F-wK-dB;^:L6d1x<#%A[hKM3$'BShN:/w6d_#HW-%6*;Au6;0+b/9Gm8s`HwXB6o7'H*:ooFL,Pn6YxN0YY5YTQVA%'78;whGe2G,FML;ZCprjxHPmq+B@e/g0ibkEC9U-^#0^dYH,*x4CVGh5&%DXaDhi^.Ge2,-I'GP4&TDt,4&#3L19j:YBW#9nAZ%>C2mU)7),(6g#$kc2##&9+q/,:dBst#$Ge1^&CQWGJF0TW./r&U_G&D$7D/MCo&PV[wAZ%DK3N5&fC:/5408Exf/8YDa'mlXKFh>V,-^)QO/93/O1q:sAH+w.wDnO/w6b_J,#x@Ai#'3VR`+lOJ#>EL#B=s3'Isp+RB>/$)O%`IV0?HC^/]lob##HONrG&6#-w7/]FhZ+=-vt.L6#J,m#%Bd:#$cf^##[vr)8bR&#bGTg$#V/=0n$jl6x$uD3.Ws>0mAOW#%T^-##,M0&N'^[BSfHw/leFI3c]S02/WCxi,1xH7'8c%GeCll-wKn*#&Ic5'ikC10vGGp-w6ar#&@h&##,j?`+YW1fl?kFno=M)*)%*V)c`'8t]&lx#%V%=#&]1jt%FdO6hc(qBNP7RBVcp1&:$'o2Kih,HF,<KFiru0/q(NWBQYug4FBi+7x*r>BM&D792656<)IX`7;bQ>2Ma`c%.XS>2L&]a08CsZ-#Y28$tWL5#$lA7#Ano9J4qZBH;%;XB>8Pa<`QcT-w7)h)cc:]@VwW[I>YC9*5hpB$+h2#BQm3Y#xRRj#Z;IH%8wLM2NIm:)i9p66d17$4+g`aI>^MwB65rbBQnhl2iEvu06fXv08:X-K2DoY?r_R=%8V:T(jI9#b,)O*EJZB(F,;T92dh6d2MkT26-pUqD0U;a#E1-[1:Q:IS8KO92MvbI0#[auJZr:r08:o&1faGJ0nuL*2Mv_J%8fZ[GBGIQ6d1L-+xrvo#HVwnBYSZ5(/4@*1:&E_6*ja&1UgH'6F.xiBP7C9F*M5auuR[PD06x_#)wDQD0>P]aeB5#EJ]qp2isT)-Xe%J/xF-XOA%@U1:a-C)7`5#$Rv1=-Z*F@#BFFi;,0BKBT#<H#-;q^GfS=C,uo?E$`;@'-vM,l#cv+L/qpgN#-D7?4F_XiQ;0As7'7>0=c/Pl@t)9j(Wk$o&s-Iu.(<e:.#.f,7=[:Z5uib[G-,Z(1j=bn/;=.d3IEZJ#.-J4Bp,Kq&5kksC*Wte'2B+(>?(wI&)1QG6$6Xk0p$gR$/Kg]2h%37I<eDN$#*u9#9wsv/r5hH6b8)P6`>fn#g%x=06i#[65BQ[2heF@&&DooH?:?u6ZsI219N-g0BW>7BQmUxV+`80FAG,R-w;kx%poju#j5Pe@SJ&15M?+7Bsv3cPuXE'08ifo#)G<mC?,Aa14M<2d;_Bq3d.$pK#iJLND/QfJplIU0nIou1Nc7]6`=@708FXU/Acse#^*`S@8-l*%sdqI'2g#+&RAm2#C_3<Cvcu.fl[F#6pl_*6*YdB#Cvq0C5FX0C5?GefQ*U-WD)idC3;(g2MkT97Cbr&5`(Rx#0faT5`(cZ6bnr>(V+<j9>#DmDHn6$Ck9KC06i)rC3MCc5xh7D0@U52*Q8(h8wCI*2uR)R(/,@V`c?/WEJ]JF@BEi#qIm-FK1mH$&=nTf/8dYK#-95xBmo-F-rmq^BQYlI&3KsXF,=]H1q_d=8%t#UIsuTm*lD2PR'Jm46*aVg6*e+qpt[*)@Bt0lEJ]J=B;nH%#&+2t#%M1o$s'v4=0O6l19p;633FTYDH?tD&Ps('41@AdFAbgQ08B[9-AE`c#EWD^=acTe7u<%@5imEV.+A7&4+pcaB`VUT3dxA/-a/O,#Yqhm$&8M_4*;w)K=(]a*`]m?1:'-@#ar-h6bI;-#13NWg1jZh/93/X6bKwS@tIgQ2R6Q+g2)HU#%'Nb&m6DK#%%Ae7CZdXBQZAK#Yc?=#**rqEe2M+8V^$eF.WH5F*TLL0>wt,BA3L#6Fg1j0n<c)7Z`&FD8?8NG)9Xp6c+f,16&A=4i<fJluiuxWDjFpFE/_[7v;,t/t'LsFE^Hp9,o$61OUhj06gnt6^g&l<l9a46+U*%41/[P3E8s)@?=q,R7xn>07tbpG0#'0$#Mus,YXMkFKq%9>HU#='MO&&BQR7f06iD+#>ZeT#$:l0O&#ek$%6dC/:%;#QsX7%#(8,AH,gv6/94Kk(6)t3(rfU,(sRY&AqA9^C5[?:#jA4wCUlk`08=_T&PjtA#qgk]*)1tB/92sUB=VSZ#YZXY(6fa(-^K;Z%Sk^@7^r-j-sq=b-t$CP%87x7IfX:YAP=5kCQ][&(/+e=%on+1nE'U>G)'SLFMMV3Hb.x$'ils;(k-'g#%%Xw7BS^K&m),)$m/xQhf7f7#$vPc#?*To.^$][%sN`EYuQ?h6X9]%+]s@h%p5a,-?:<J#x.5T%_Td4B8LvfcYL(06*b3jC9^r7@Bt1&#=&BX-w7Va@Bk$pA#VW+@=;G5KL,uREGT@1-ES`EI_t;M$(P+LEHlr_#ZIw3(o]dQ$jh96)H$Zp(JoeM)M)F-*d-I7$Ig-54*[3%*HhCK$/>WICm)sn#w`)$$Lpq55,h^3EMlLxkAA11BR4$=#J;R7@;[U.2&dRf0mC9ER8b6O##527#(mp%19N?Fm_N+><laLqCVFp>/wQm4#)w)xCT3.p4i3`rU/)E;U/)B9&mA[U#$ch6$(cbb2hBTe#bf#m6b<+eAsqGO/9H.1$.<C>8w'V%19n<SCT^+@CPdV]#CSxP05Cj5F0,V)F/NU>#v3*YBZ)6J/t'L]#*:0_8w(jp#*Ax&CcZ#v4&6L;.p-lrh.Ylh6+K.oeS9tQ/5-&L#&QHBAP<>W##Gi@#'9vTD,qZ%##h@f)Qtj[#WMk4EjiE:0Wdp&(2w0e/PH5(#&HN+/PvP7#@(fx$XR@V##e9])8HVh->dBu'h;YU6EPXeEeD92BYf?%Fh,I?$q5$-.$-mg>E_7d.$[Q#<Gk@v@=_.t@tB2j=Is<j'io+)3JBK&A#EcE0mB$v-wK-T>_C5.D;5E_3/Cwo/@[=WDP.Y?#fl6$H#c7VCVWpfF0TZ0H?94&=28l*JYFPs#)3+^B3]9HB>A#p_JAOqK6T822V8XnD6=bp(7#xV(5Wp7$=tpe6Pgv8/5AIMFgg3=#wg^_'jAIS/?X#Y'X'X3G_DW%,#:1c:9=u4Avg-s4c-i4#ZrqI2LwQD@8bFgH+]18HEilK/wZU'<dgeF>_?a_L;%TGEjkW%Gq<kgCUx&IDRF;q/qw`n06K@l6;/K96;/#2CPVwTCkKh9B<v0tDn4?#6[^JKB=)6gD6xCx##+fr#P]p^6*a,[B=`WfHcORCGjK$&#I5upEk^Q$6aXFS32owT1mr_K-x*f,.sHrB#ap$o(/47%B=MpuB8J7%6*a,_CU%j[#%0V;#;%RQHGt_86*a,UB<Q*f2-ZaEFhvA66aXFN5,fNuJBS.D6]PPE-A4I''F]Q/I'o%5BXiW?-[d2'&/G7hC`dxkC`dxoC`dxjC`e#_4K1EW1s^B2%3,A<4)mI0MdB=WC3kU/K#iJYB=`WuFhYcJ1O`BD6*^aZS[U,04F:PL6*^BP-*dE4)ee)h#&H/W'MRx.CrFT19Wa0LEmC2U1rnP5EgblWEPQM8/92pk#$bB:'<ld,AZ%;@1fbREDpQ@T-x*loI_pK:F00JN(jLUR(/.Q;FiVD$AP?Kk5(w:-BbP5OJ4rlZ4/lGLr,&d_FLm&-:7u=Y6aXFL4cR*qBQrt2(O#ks1l.IF#HTrNCp:=H@T>+@3.tCv<kn(mElw-,X2g.xGe2>-J?`03#vaEf$d)hXC#/rc#F^SFCVO)2@tVY)Dn=3*:7M>p?VLQp(Yjm>IWRE.19a4B#Ad)^W)twkn7n(V0?JX-C99,&Dog`oEk9j*CU%_8#Rl7U1s+%UBta3.Fi.$HH*C`5HcX.9-Vk`Y#$Xm0%9$lD++-hjO2F2C2LIQD2STKxCNM#U?b(5]CJuq_H.<'k$AVgw1rx.SG'#0vDQYV<FM;>&K4%Nx/q07i(/+a'#ahBe6)$GE%mOp4>+lrdHF.D2]PY)sG`mj48?HqKGvbq@Bu7d@n850xBbc/LP#)3.&6*hd#-8,OB7C`86)FqJCPbb=(e&%XD2Bt$IYgc5EfvK)G)7p-7v8qSFM&3$FB&<NGZc_.l#MKo'f=1QJr5rK6c5@3IWn;q###0>#1Rh`>Hpb)6[X?(5-[8wIUtP@6=jQB6]x,>&5;.u>Im9(0nCTH%s))Z2fj=tAQ/8+0n>1i6^#H.J[elX0nv.)]6AK-IX#[^6,HkO0n?pjFGG+9%U7_m%qRRg$X+0HAwm6&4+xk6#(UNVEV9as0n@)1$;E9[29:0`#$XF/6d=FM%BM@G6^#^Kp1WS]G)7s<3'nW(/xb?)08;9H+]XiR5_kYU(53Q/#^Khk7?&hO5`Ux/#-K;'7tQ]O6<Y4X.otWq06g1:FHRPK3)'t:[9bt#2fN/lFGY1KCMtW&FLDL-19D-m-E/4J+B&lU-?LHL#)nMO/:?xtAx:+J/95T<#%p?7#(.v60?OsEBH.>Y2Md4</v8PSW)XDL,>9rqB64cjA@X4K1:lM:-[6hi)0.nVic4Wv=A1E$08<;,)0dWq-?stt#1Hx512]c%-vEF3?%+5TJ^,vO4De6uTO8MS?;(Bu$12cxHAO531;vDw6Vebt#=JQ^6[Uuc6F^+H0n>(g6bQ#^4dLoFm:rC)(/sei#T=7ZuuG4s#H^]G6clq<BM8Im#>QhRM0*k+7tJw>2e?EU/93.u1f_Tf7<ER+#$m8*#-^l806g=6)GUwf+AO&2FAW'UDFbdOIt=8306i`m(T`M,1;vDG4_A/t(L&Co%sNjJN)0N]'pZbl@B%Ic#4N+m>-U00e83-C7BJVE(LCvC$@nAeF@?=lBSU2o#%;C+*+NUm+(/T1$XS.#$XS*f#'5$U7Uf-MB64os(9Q`,97Jc,-kC.(9Xp#QH@I_Q&R7Qg##m1<>BDT^089h;QA8oV2Q8kO@=]Sd(OZZqG'v6W6[`&.&R$n#@=AAa(4QKl(4ZQm(4m^o(4vdp(5)jq(POPH#B_#_2h,1:2h5842i52#2Ms/O/Am&`(JIfEqJWWZ1;laa1;#0-1:g$a1;GHc1;u^nQrS.*LJ/m*6-gOXCln_J-b>cm#&S.@[S.kc6/2HfD249X-dA+7#&S1AS4l-L65gjO7v*b@.(VM<#&]ULW`=V_61P#'G`cdm*Q;W9-*F(J#?wNv%qht[#$un2#$v*8#$v0:#$sxR#$ut4#%)WF#%)3:#%'(S#%'(S#&m8^6VR[A#?$nm)OIOH#La[3@=2AA#**0#2mVe?8?Q0UA)%'SBVwYrR7ps[@=VYQ#**0#4/oWO8?Q0YA*<p`BVwfvV+b4h@>%rb#*36$5H1J`(9RkF$1x:5BMoi9ZV1rC$rqe3#$cVF##DX1(9RkF$3_EEBMoi=WG39a3E6(t#&Pq,`+Z#,C^kac1:OYq-[9M;#&Pq-[7iavIfWoj1:X;f-[9V2#&Pp]WCxLkFR&qS1;^Mb-wTl(#&Yw9R7ogZJ(ktN16nd$2L%QT5><8T8b6A8@tE>W#a_IQ6ailCqfNTQ6^NY10pnh)0vc^d0tjFUA52Vv89STw8Tob#J9F54DK_'<#X/6Y0X3-w0Z5Kl0Y/eO0ZA-<qJ+&.EHbe'Ee)i`Hw97W:PV8r$#Mcq@8A&3J;45A6+e274n)jZFxaw=Fx`q_4M1Yv-%h/?#wpU6#$t=4#&Z/QG>&)P#AZ<C##-2'GYA-q2hg[M#CA1aH:xEh2i#nQ.=Exw#%'46#%0<F#[:G9#&?$C##68#IS9gf42`,-ac64)>uv$E>uv$E>uv$E>uv$E>uv$E>uv$E>uv$E>uv$E>uv$E>uv$E>uv'F>uv'F>uv'F>uv'F>uv'F>uv'F>uv$F>uv$F>uv$F>uuGK#[V$i#[TxK#[TuJ#[U7R#[V[%#[U=T#[_LX#[_4P#^E&Af4r7'BH$xj<vV3W:)b7K]P>IrSPI]J0X*(#0Y&_+0YAq6SPI]J0X<4%0XE:%0T@T]SPI]J0X3.$0Z5K60Y/e4SPJaZBn+9G9Ql6+96PK4;h(b^#q=ADC3NI,F*CN8G'?R-#qFGECk/[.D0Jn27t@SS#qFGECNjR-IWo]CFE_@+#t]L:0XjR30XsX70Z#?90U5eGn&`cO0tP/?F*CH6G'?Hb#_h'6Ci*OnD0Jh07t@J4#_h'6CLeFmIWoVAFE_6d#_h'6EF^'uEe(?5Hw8)n#[qeB$vIHD`cs:K140.,&68e92GthE,^Z]p5uiCO+a:MDQrf9VQreXn#[r@x$*Gul0p9IqAm8V>##8Z9#$(`>CvucV0p9[k#$k)t#$lds#>>J.(U@RU2h7F*,YSg6&53`N<(w@(#$uot#C]1jD5[GM3EH2tC0qwF&PNGW%XUnaXAKOF3r<Gk47WPl4RsYm54Slo5Oou^e7u=DPus%6PurCZ#x#Ix#m[,CC3OQKEHdSZIg9EX7t8KvFEVMTHw0?4#q)BdCNkZLD0L/VG)&AX$XR`F$XRxN$Vapp&<n0<4-T`j4Hpi_5*Q%a5Em.s2hdHL&<w6=5Ev5)2hf5$#=8Q1F[?48;G7ecpM>sU#&,mm#%^Wj##^lR0mUZ]#YgGbLTsxV0VqlF6]>sMBuJG<C]/$>'ML4*Do6E_in#=x/w6ej2K_LU6*;V>,.T+*?b;/g6*``=+0e%p#u>4N0X<:N0XjOH19N+A0jf<I#-pf8F*;)K1U&@D19a7DSlMG'Ck0?;#+^UbCO'B<#'==-IUNusIUOrE6[?RQ#o%8NJlSYJ08F)i#$ld_&X-[m=0?%=G-W[5141X.(JQ3?2fj>/Ch[6JHrtaO#(L6;5]0r%2+x/C#vdhi0#V=0,#&/V#:0]'6*]%52L/oiX@vHFBSf=RAPESd#A%]J#@2+o#$7-r(:PW;&T7YlB]jd2EWvQ7EHO@XgM(5;0WmxD0Y&[P19a7I0jf:CBQv,FHrfRr0XjUK0WrEZ7t8?rC2b0RD0B^MC2b0%C3KJXVmiMa0u/XQ0XE>9#CU'7D-HxqC3V>L0X*(?+A<?Z_J,m)D-?sBC3X?DD0RYQ19x8l28t01$&('l20>e#q.^L[Ck'HEIWpR]Edv#LIWeGN][O'(0YAwW0XE7CHVPd:F'Sft06TX9/qV&_G'@cUCKUY>Ck'HHF'&FU1UfkV0vPDB>-KKw1W1/7(U3L7#[%.cEHZ08##H1@=i#w10X<H;2o:NZ&ljR,#%hV*$>`?CrFj#gJ3O%x1s`Vj1sMPl0_/bgCk(P?-b>.r$@QB>Ir8Us2f;v*4(SCrQt`(oJ7S_t3+W)+4CoMD2hd'G-*:jc&nRM8#$Z:T$;Gr]'vU)W#)*4qIoU9%C9Lpo8?b`_G`$c6B=N#sB=MZtD2[G(s`w<Z/wHuNDp?5,Gdd)*Fb#R41P7-/2.-E)5_NK>=]T_TtAB^EWc2@K*bE6f+fNA7Cld/]%>%mNC0)Qo4#x7,/w_UQ]9rS8BQm(jJq^,cOBNHY(JGI#TjrY9#$t+f'Mg<E7<LYN;+r7$1f]F[##eF45_lr$$#'BR8l^YA08;&_)1=8D$#KZL4]Qp_msukMCNr42Ee(t7Fhv__BdSBk$cq8v8&05kDmx6.CNLd9Do'V210cdEB6lo.akgb(CPtCXFi2.35np)U1j<:uJ7B4H&lj?+*fv1t16rq/AZ%GDQ;[eC##7h2$@s1_'MK$x##[nL4+(=b##.t85'CDIMIn[1f4f991rn>@F00Q.Dp=3@'MJN7*,eCD&PTwUCk9NX1l@-ZB6]3$#(/lO0lC>xIr8V[F,>$rAXbK0%C'jgGdcs%Dn)Ba2L/ow2hJxh/r#=>*[,7=0#90UDogv#J$CJ6#&YvM;-tEx#>>SL(qgB/GJmYK1rx4M7V8?ZIaQohIYiUWBr6`bnWMw:=af#Y5SlB.H,=3Aon)Zl#C]M=10#6,,>8)j2iN,S#':a`1r[cODfpH#6a^EV$=WwnEk954*)I/L4iuwY'MPhHDoh82B>n$PB6klh$T.tH-vLU]#9#cR186D<Fij(@Fifm;(W<f6(,5g$#0&9&<)+Qh7?S9v51hc%4+92w08FfQ#<s4)08F1sEP#]vCTijHB8:&&2j214cYBCJD?q6hFiD.sDoqXv0V0oh7xa/,+dRr(/w.sm=,SfuI^oH]B<?6xDnO@$10fo5#$]a]#whx5+FRuFD<3$Ou[f0A,CV8fFCuTv19DxW14r#_.88a)4hg1QLj>c:Eg#&l)IIJZ)P8bMEdNN5##?Rf#C@.mMG4/I#Z%C8#Vw-dIBP3G%os)66+T5-@CRoI'jo7c2iWm?#>JUI1q(m:0Ba_oFGUZ7(;_]gMohto6[`C`0Q%/HFEIwrFj#SnH?tna##>5g%S]'L*5t%(#%.G2FEK[CC18AmT4A;t)mo4l8#]'6##H=qUJ*=rGk,3>20b09#$3F3Gk,3D1?feSG`d@37#>dK0#.asqJ-+f0#^v*F*VlaJ9<MtG_=[H#4*o_6b/4rF*D5K^1i_&H?thj/xste1VcWl06VVo0Y/eL1:f<+(<%+p=jDv<1sU;834CH^?ttft#_n>E^Ql=7(JGKqB1u))1sb$/3PI,p>>.9*1sVth*bUpM#&Yd<c=jMmc=m3f1s`,lc=jJlc=m*c1sLvjc=jJlc=m9h1sV&kc=jw^8lrXr1sLrW#aNf[It<fT?G8&A6$u+i>B2'L6G+4W$)R^;G8MN2_.xdY$#X=vO]ZXW%p4=`FN>G;C@E7&2mSks$;jT`$,Rai1/%p3,YUb8#Tl(:4K0m8#G2*EDo$^m&?v=@1JA@A1JCK)A'&Aa$b2FM2Q87MRVXBv.(TV(?^YS12Y]#'6#.a]BYc*`D+lPl[Se[%h/SDo#&[x=`./#0K#iZN<38qf%UWwi#%2%]#$ll?+C/Mp#)n,D/@Q(1$a*j]C9```.t*rf'ig.C##$+o>uc6<17xVcC5XWm19s$X7tJU3E[Vux6b8l22im+92ilkvCsuIb)4J3K%]lDSBQ>H>CATW8>HN1'R`qd&FiVtL?b8:2)pJ_x%R`4rClmUD.tv,wIHs+^8S8[TTiJ:LCNY'F-[$TaB1s;F17fJL_ghuN%Sr7pG+a8vD2C^o3ao)J1:[3j2Rc6[%88[s15wYk(V0vXM6r*@Fhlg)1$&QW:3r*$CVu)+CrkQ,<)3LB#$vJ$#';EA'MLsc1;5pM%Ut`-%U;T3%X`dvF-Ilo6*_d#W(d3@6&o*e0Q^%'ItWpB3HG5T8Vp<_6$ugD`.W7J7?9$fIugAB6[h`EIt<Q'3.X8b/93/06WX7p;g[E<6[UH%6[Uwg0j:v$(q3nsBQx-UF*B?k#.S00I^c5q*,Y1S3.WdN7vK*X4,,GD98Qjf17:;QCllHc&:A;Z9J[6KJ?`2.XBZnjBKZN79FicOBlRWT$rq^3#-`0rJ$(?%VG]/15AM$^gMVbK1o]^OClmo$#FxJRIA_qt%K8uM/=%pwGe1]lIrJbv:(n]F;*4p;HcO=J+_[kN%A[LUHc+=7#$kbh#Yw$UC;XVr9qeA@/<;mp6_BQU#Bq/e=CrQ<K6xj/:p#u[A[6-bD81t3qf5YNFh#B$H(g2lB>A*'/s^o#CTTbrKihXMB>/H%C31oZ=G^rD=M=pCm#@E;i,5/fNa6klNa9#[/93/?_JnOx08E1Y%Y#hU/mitaja&1C08EBS-;=AA$MOO('MMsNFiVA#Hh_s<ic;+c0:XA>/v3'1:jx=C##=6-$25ml:rn9Q;(Dq[/94R>JUwmU6'KVvt]3=HJ$k1108Fl?/r#=F06Z`eA]`v36*rS7$=%bb-So8C/9H2m6_&x<C34?J4]R)TDINTtHw@DM#g6Ve<g%vX1;.+l%U==6%aiM6DK^0J<IG-n=+(A-GHE<Z<I/u<##>5D%Sf0N&Uu(%=<%U*CNsY)#&JFqJP<m'B8KE?IX#kw<I/sM#(04&J@Ye9GHF&r8U5T6dZlP<7tdZ-B6SWR1feFHGdaHf1;,jp0T[h/1;RFe5*7XhBiXs,BYPu>B6>PO(fcUe4%qdNEf+4P0u^UK#T%$iH,+@BHEhx5JXxW*7Y*7Z6cWP(b@vv,%Br%hHcbQI6;oGr^jGjJ92>Q8'qjKtGHKJ$#@eb^08D/g(;6DF=*/Gp6[cA-2neYU,upxZGHDkF(nZbW#ZUr2/lexCB6NmNs`P,hB6v%s20<Jg3-?['89RLU6*('g6[`%m2#.2Xn;P>5Fi^?a.tEr^02)uYK1x+x6_IUa#Y5DR17/SU#mGtK18]KH=.^KYA]jH&AZq0xAVhEG/93/>6_g[(gQ$uG#)#[,;*#u-k]6<6>&vBN1RNYs(;75+g<.941plQCG-vRLCTf.M(<$]d#3#Yf02+1#24_bO<m8@&@'(8LcBYMNB6o.;1O:q20P_Yo)c_kn)c_h?02-p2B8J4$2LI).#+^,8CU%k`##3QM%2^=UKiW,UKM<Vf6Wt]`IB>Yk?WEcN;TLPE7<E+Q6^`;*2h%0&#<aNh3I=Gc3/KgIBmYPP<-CE`4*<Wa22O&A9n9(#%nLP[Cqf;vCrFsCJr?+w1qr8HI'I`:DoBo;/:'%<d:uWu</E>f20:R,9n(Mc#-7g@66ZJ*#F[-jB8:'10SsPjF07[HBO(V.Bp-E7&PN5i3f;S-JwubF0:Y2OBSUaC6Yd]60Ww-h6,>.(r+aa)@t<(.0U=?:IWmwYIWw&M#%)Xi#$smr#$dIh#/)I3.#16w3P,KSG'@v8#Y^GM(P<B)3I*$vF]X.-0Ou/g[UgM:4H)+T@t9/$(WI7q#afu$DHHo=4gLTZB2or:cv,eE0ZF.)Gf8(0HEj*D#'0eU3.5(wF05hQ#=gmIBop<:Do7g1(U5>lq.T2BFGiQ>@=C)C6Z-%Y.(0.@:kR0206gqo3.lM'.&7P](W6xl=G:%I.&I]_<e@;oGgCYM$&]f%?w;TpJ;XDK1Q2<Q?XWrMJ2nUf3IP3+#@(,;#$k#s#$c@g#+RK1@v527#<W6R@v56<6(V;d0soNB32q2M-ww.q-tZi4@v3Z2&9/oH;i>&n$;_+s8U,Bk09HKC*)vwN$sVU_3l]tT4&?QKL.tqe8q<fm(JI`Y(*t&g?wtm@08IPQ+cx'C-&9KG10g/s#(1*NGAwaM:kQQaBv+j%C(_SwJ;Gep:;xa;DHn0VDVe3Sr+igmr+kM6GHEv(#uul5g#(q`2JlUX7@Gn15__b[Aqcch@')[H$*v[M6+ol:uYBBjB8:N>1Puw7L;@>bCTTbY0PhoxMgj.#170MDpM>ch0:n$o19l>7268KuJ9PS:gQ%S@%SVv61U1ASEQEOE%SSFj07*`77Htq=IYK8p0Su%/GZXu306h<[1W*XX36262Hag#]14^FpK#g@?2G=bv2G>h#1pkW/UVr8jDn=,n/94Wn(<C)v##PA8<a&kTCTVvC$V`%5(9[qG(;0mT(;:Sh=*6'm@=;gq(<-`d$Ig0I17;@-&PNc9&PN9T$#F1c&ljj)#v2`#:f(V717@0.8%E)a<$;?jCTf%J(lDsv#$1fA4^DN417@'+(;2S/(l.-AHcNq@16XlwtxXv49p420/93M55>b:p4,=8Q#lf_B39(Xd3J02v0n'@JL4s'U0qXH&JHd9q0CK%$0q=Zv'Ve@l0q=00$,'^R4+T/s1:nX79nD(q(Wg6Q%JC+c/93/46`$AhWDddN9m3%qM-h:*&5]F)#:gqf5ui8f'4ZHM0mM<Pd@n(Mk,XlhX)UuL6_(s1L2x$A7tPd[jHRcoFiBlL#0^EUHGFI>6d)8s-?`w>#(f%bB?Vv5'ig%b1[^Fv0#CiN5,gvsb@n.m7SFDXZ&AgK)d'O=#;8E&5,h&j#.6J#06K@HlwG:@kGkBl)e[%e02-x/(8,s-._=(J6tO5+&np0B'J`oe@=2@FB6>jLB<v0U:.xX-/w-]<Y?MXS$;Df`6^jx%DL-96CF0_0Hrd4xr+ML>mw0/i4AGoc1LDwO#*CZx@t&ltAuEGFDp$LE#%KHS##]K+;p2bu3c8:vBi]iU##PV_7`b&fC,vk+DPqkL3gO2w2i,.#1/2rIqfE/eB<<St19aCDGf81ECVDFZ6;AP)>fcBnGfdf=*N^KMg9x+e0?6iSEHFt.1T%-[8xnK^BF6,UGBZh5pnab/B6fNQ2hek%6WO265_cfKNHATr2he'>ItDgFBE]C.K7,VC_/cjEI>MsxFi2G3HcVqe#.=PQ-ht;M;KOA<DmlFk19sI01DVQH'211(17/MS#J`n:DKS?NLTcO3Bu#LCKGHo$6*9X3#6dsCB<v%8)eYV&5CwBuJ]M2EI'I`b'7<vr6^D/*1;,kE'9d#/H??m)-?X^`'m5%OW.liY#>P8^1k_es,>86GCUx&ABFu5bBFu5lK?4e1#3GpG7<E5A(fq-/)hJ>d?Ef@rFGZs#(+^Gi0?Gf$#%Kh]**w=@02TMk%,1liOA?FHOF.TZ#ZMCu,up)g`+w(M4gN@'28OCU#%%J7&nHro'N8eN)LvR+#/1VtCW(>8CUxXw#@$]%%9+*J)hDgr%vC:hCm9_Y6p4qp1:/^KMh[.o1s+.DFAt-O2hnZq-;5fE1IDu9I<[S+3hMiS/q6&l<jwo'08?0*#-82BhIu]0@t'5TolC<jA'l?oGIeq*6+rPK#ulA8;T0NGI&Aa`u>#DN#$l-G$X@nI%pOQS%%AxU)1MqO$YXOO$XnW'6=Y$24&lXC)n.xi-we`t'd`8+FKg^(/q0C+->llZ)i'NNK>x0j$+VI38$6eVH>Y7F/q/[mHF.6p##*(+)5wtH4+K;N&PQlv2mS?T2bh.#?wZc6CUxZ4E`e%c3ec4dK697g3*[lQ(jE'p:018lBYS-&a(q]X$#Dd-@qP1fFi)J;HEhx`.otT,BmvM$7*mm[k%h;xBo-4?#v`OA#xF<hJqaxoG.9^dK6V%A/8(^92Q8-XK68VwFj49`/w?iVBL<N8H%nK#17'f#gpfUc-[[JA1v)NQHEiL_B>@rl#/#$'BY]Z'CRIOs*.q5a0?8pXq0/ruJ[n251qV8DEld,.CU%dFFF%NHDopv05f8S`^jw#&H$'.-Ee@`;6Yw<:&10oSH$KRR$v@K.;i6_FCrC[Y8U+b3C,n>=0S;6H@t.*HGDC$f/v(XYm:ldK5H-0Q1fxUn0soN;5CX8K<k$S`Ek3JgB7)ME06]i^:(pIA@um1T06_p[Bt)/R#]k?u3fK>8##*<G&fwClG'#1a9W^Xm9eUqN/95TZ%onL[#Z;5,7Va>S:16I(%U=9j#[B_C$B8d@D3*D22P+KoBMqUx6b-Dm#XfYv'3n<-6as@Z(U,,oAq&IE6b&S%2BH:_6b/cA2hAccC5PxJ$vAoT%@C_b06g4/75uKVac#kK/PI:P07t7c21@W6##*v`=*J/A9<F/:AwOXoB6ewC%BX)qBmvLqiN9M-7BT'gr,(Xi6x%,27$1p73/^2u6b85V148li#8g[/),(k$;+uAjB6d=iC(rD#HP?U16,9RG=EIw&2K^R;(VlW2.t,69##*aS-,API#%D[[$W#frItk#<0n@3@rLr8*14M(b,*Qp2EeF-]#*/f#D+4oLF[dRFmwp/b3`^vdLUp+OHcX[EF8Z)d/956+4c[1.7T3-uFi(rvR=?-AF_dmPK#xm*2JlU/:TYu%4E]#::Vp8h/v]iX1lr@J-w7)#2JlV(:OaJi3*o[v**na)#2UdB1r@&.7;dX>;360a3mi]42hglC#>@G72T.:R#)wxgIZ=G4rG)ErJq`t,Jqs*+JrSN/IY'J(#7Z'<Jqj$,Jr8<,IZXY7(<?Se363j*+xsd3*`ZQJ#/N'PJqgD%5gar4MG-6r2K=1L%rIET#$Zec#YYu:#LNNe2GO6WMcG4QMcF4w2iZmh%YOkgUJ`aM4c$AR6[UH6Y#:uB1rRYMCUesiHBfiAhOt+#@uxTNC?YdAC3kC,Gf7jV#?[1/89w:[5Pd;71r78@Hd4[&-?XN7'6Q$hh.iuD-?rVu&VU3v5>7rX6'XTl,?Hno:Pg1&%,`,G3eb,(##X)k89At^IxJa)>[RR)%8<=):4-?8H=T'?(fcO+).+i]/oG#f*/5)]),([J$WwL08:3;(17%vU6p5<Un8tHP##3KN#_?>r6Z,.q/T*,c)0I[#_.`5OJpm+T5[m2?##/0&%;d)K(feDP:Nf.D6(Tgf3/0.l$;sge(l+DI#/;1-:9eAx(9+9Y&pf7p3FVuwTN*>(HPQq/4V]9C4`Xo'rdF(C%U=,=%:<4$6#SW<W`cwsI`]6^6<laS$@O+aHR`'lHv:LY.(kfN-wKj`1/SHa)hs,v#Abmf30FSb8H93]HAOuT#Z7I&07>YX#$t&,##E^]#hNn12i@m1#xb0Fmsl0eV-+):'5KrI'4ML[&5k(l(lX9&J*72V8KAcfFF%ZHCUr#x-H7VV%)=QO9R&wn8f;v8;h;B1(K$j[<Jbf3=G_+6;$RMF;1r.RFiT9%6[Uuo6BO@-1PB/d6^YHL@paTADMa[rBsxJ4l&l@(I'G*GFKpp#B=riL)%A.H1rwVEB>.gxFiT,0-?:J%6wrIk:$*$mk^*x$6_%/+q.oJ7/9F[S-[[J^/q/`Y0n>(2h/CGN@=U@e##2qU#&bKZG&I@b^jm#+,upG5:i9WHCDwQ%H,4IBFiVtH85CnB#(-E03J'/H#$bgY#%2SK#*LC-6dP[=2gq4nR#FSRCshx:8Ph1+Wd^cC7<EBvDKqM2*dN[[0N]FX#.dLT6^seHuY#Vx1m)8;#>O3@#?UuP08K%#$8MTd0ia.10MN+miHirZ/q01/)Oi[L#*8km/lmB()GLF/*P25R20($U#?Lof#%(#c##E9G#/:IRB1sGP#>['h+0V#>'86^rom6pp@u=p4-x.[n$4.]i2MMKE%q93C.w3,P2iFc9%I5q*J$Mh^$*v3uf=Qg5C3=tE99UKaEjL:O6`mgas`>cG=chi'':`54BoqO@%`ZAf6cn,r<],P51nJ&JYaKI:lDp(;2Q87XI'%52CPH$E08F@x;>(xlG`q=M6+C-HHG4O:.&m*G2Rmv%msku0-s5H71rx.VDn+7q##F]v#1X?W5CZu(pj;+b(i#78##HUL$[Vlo6-DW#:.xL0IBeA)oUsU@6^JjbB<G[gCTrO.7Vl)D:J:cU#YfZt#%UM7FH6E:$WL5B(<JO>(qfh$#64bN=K]3g#?:cO2mXp&g6V,BI'I82HEiM3B=RAP(:#>n$YKJ)FKps8FiVY'C$6UC*DE9CCVkfwCPdSfEu/=]NE&6/EeD)T#+p8JFiD(B#$c]Z#[Ka.##$+B-FIqZ%p;c)&GQQ`6+Aep*g34*#%elHH+[i4FKmWd#?:c/),)3dC0_heB<VoM$3qdC_gUVV##1ft#n_OTDogp(B>8,p#J=drF1YowEi<>:%omxA#$d:)#w`Tb##,D-#@IO>ZrM7LYY5YR[ow9A#@gAx##-.BHb@;.HGOX:-;4`]#&QH6GYV%p5CHjY>>0.DBR=4#K68JD21ej<##,dT.ohSH/5/9h2M*8Z#F8j2K6Zw$%J<f,ux50m0Ae2R08D9S1Ot=Z2mx[E+]]TBB8L&O>_C>0=D_B0'j>#);#Mj.8Zl4s1q(g5B?hU[J?i8V2%s9EC9`U#u>#>;#*3-8B>^.$:kPnK<+m8:u##3_,>9wwBX`R%BuIog#.xZbEk9a(F.+V86+?v&[AwMm3IG+f;6;9m##A<^5D3<tMHh=C#CA1cJlZ;U=_)5v#@(<>$=QDJ#$jZ2?=PG>#CA7e=%jYvFKI1?IBni(HF-IO$uK?c6al33#wJTiAT.jXM.6Tj#&AC$##77rFixcqg=?%DHF7f.H+7G4CUbw]:r1GWEFJq*-w[P%$;;IX#:0LV-VP`wC1eOj-[f(Q6bxdE)/MIe-rl2LGBX&k(/,0@##lSKHc9Pe#/U@UC1@7eGdcVqDo9Ro#$mEb,%,MK#(:a]2H0[FIugY3&lnj)5_[wFB66f]$YrcP#>Sb)1sLp8BbP3-IaX$p#(&=j1J@niItD$2ItD$h.'R600i`Zi(7f*SIX+UZ#/>D;BSgB<Iq)ijJ&)=pNcuH4Gfca>0Wdl<0[CE%6,>`(ODu=T#[B]L#YtrqG//%@G-lj)s,E'Z##$4E#?:cPHFnKw+j+bp#MT9:B<XlH$=7X30k]J8$>b7go4nDiDn*aoGx[1g(JFri$W%qK0:ZMk(g#tE#/L>a6_;)FH,FAi8mk9G&JA*50?7S7X'6b05d>Zo/wH[]St_7W+A<Q7+A=5C5%krH5D0uZ)iQS-(TuGV#@J3LeoTwW#$bv:#'+Uo'20:/tB>W5#G4>v6*Oe6(/3JT#%.GU8[:FXBp-[s)I7E%#-LA06'OOPO(fUX;e;lS##Di'$%>Zs=gwK`#`F[u:9?U^-rka-1g,E#M32D&6+:BlElDde*D?Ve$@OxTC/d-UF'ic1J#ugN8PB8.+w?kqBv+j6CUxW'G/$(x2L'8QCrs)j4Et>t;idv]A[6?hF0T3#CqIWsbxxbr2hB2WG.D&(G&.7d-#X?LrFt6&DRF:f&53nD&4Ql?7B$Pw1/%ga/PJvH#Z_r/VepU2Ejk;F2L&pIGe)D(Ge2)&F1$+SjauQY1rwJ7B>/)1/8e@o6t9Rs8mK&b30>x^Vk+R9CT`<j7=I+U2MPFE#*g2$Ge2A.FKNHT#@RV,4,Z(U.81G&.SM(T4CfGBFh*m0>)P:w2MP=B.adx9%K&GK2L[KI3easLK7b>RE34u(21[JI#v)]aBF?5#bAN)<A5XOR-vD,.)1Q(F/K4]/12-a>6ak4C4E;e#'2/fr2I_+N2Mjm;Hr.FK[7k>U4+U]U$F4EY1n1c7$@a'M1/Sq=12]W#%>9+r2aMIU6rfuqB<rT+3.Wj(#>lpO#[?:t%WH$3mVei+)/Na6l&1e%##.=KB8>PV##3jXo[W5OFiW-gJ[p4;F0TTr#Z3$k$`]^f2i<Z;3fSx^$EYrnI'%,&_KUx]##79r7Z'Bh2c6rs2K^wTDK7(e1krSe%t<9NG>8;%#c3a/5`1XM&5Sq/(5X,;-cbn)0:Y(_K83<p$Cm(ZFhH,C&6tQu##Yu83.*gn[T$,+BST[$hRPX;.%bJ.9q$WcFKQNd(rT19#20[&3.YA#:9>5.5CGVt&PNDO:f]K*(R3<P'xN[r$O%Sh>n1@FM+x%`F^8n(##YM-#v^/s#P.vMI_t9^J]dBH8UhdY$Z9l--wA]:BtDQk&POtY9;?4$$(P7(4BXAOHcQ+c(WViIQ*)ZdBuJE1.*DZr0XYHl#&S(h^1st1%TY@2HFmbr#ESu$9SE_eF&E3N9iYhG'2eJ>BV-^d18Z[1+]l+m0QgKGB25V'D2DflC5-47*Jx<XC8G9PBiCFE??B[P&#*:B@sv.C1f_mO(U6T,&xo9nK?9'U7aTr3EZ>R=4G;@i3G^nmCq4JldCYdiWj.&,EK`tMC8Y_R6arjR0?JQX2Ml/?;IESOB=^kcQV871R7n[-#$aSH=,SWA0%q;3-AQ-7#xmE:$?9OA.BEhR>0LQE3Jr@82MQ'o-ES^5=]a4B(9rVN-]v>'1j[,pY>6CY12w;b08EY^TS3q4##R%dIb7x`26D,Z#%UQQFj-AL$rqo'?<fqL#YmhP$4eAGVd>XjFKm?[9X%tNB3G:pB<Ypg%S[=7$%sRpcYBo./p:e&#%_Sw5H-0F]#_Hxrdl)P&Y9'5$YCRP;ct^t$:ZUOUj%mtC;nml/9lVo=&:5I2QLg/=^?m$/N*^?m%0&7##rP/.>Ma6(g8_d#[.4@i+S%l<FSN>>#)P1#eRK8<M^i+2hp4nA`oDAH#*ItEJ,vq2Maac+E`=#(3K#K#AbQJ/5e:vjhh)]#>NjS#nD2cC0:RJmr@[s),MS_(k-1+2Sb@Te<wF;B:W.>B6e<Xa`?Uk%qQlS$@=Rlb%Z``>R__J#G3iX)12v4#>l_d#?nU[('FYB#9=D%2[TRi()$[P#e+8Q>PfG)ZatfK#A%AW#>?:E$G-:C=J6&l##p;@$ZmAS=`_7:0?8L/##,2W$g+h>I'Yo<#>QOJ$&/GNEHQW[),(3n5>@/A#x3h=m'sR&fP.'gfP-;=CLLiL%qWsk%w0io6)G3O8u^o3EEY)KBSj*e<fit40nCmO#T*j)6Z?K-=)`dp1JC-`6`Z4e=IihsCTiOj3Djh]7v`E(F-@F#H#uKjBSh3L?VCL8+AGF<2pqAoPvJwZK'ais4,B8?-Zt$N*M.YFC9^m9),0O;/&<ls3QtX</pY6L2h(eG#=9uJ#`2q%##3-e8&wjxB;RS8Ek5`2(N_Es.C<Q'#$bX,)G[;9$$mST(hRdgh.VK`#&fX?@u$2THcZx?,fmQJ(q+Hs#8eMXB_.<VP`gMa*)@MW#20(#K#9h)Bt')I*bD1?#G3Dt18SEx0ia<s-?Lu:#w^%##G5`ODogu8#(xFj/sq$n/95mo#$c2i#+R,t<3Rfj<DQ]#ba8aABR4@0HGF+:HMR]lH#w;80;W,80qHb2I<?aW2m0s=txB<#)-I#t#?K#O#P2GaF1$+/#ZiO?(k(LW-cX$6.SV7;)/Tr(<lNIqHFo08'9Npb/93Od$-[cJ12`>b1<2rs'6X]o-[_?p07$h/'p;ps'#FWQqg@IK*3<`nHbw`3eS'[m.'IR1Cqeq%(/,q01?gQcWiBt8##>7^#&Yw(UfE2L184cm2PL2oK6;Up06kEw*cw`:#)kYKXxTO9LfqC7Cju+Q#L$5]6c6_QDnO1x4*Y8I(Q-(b>)@I@FKg^217;S$%m7%W18R.3B6v@s2L&?:P$gDfCR%o7;-P>&G-Q)'FiV`)FK^8+/6a+b1rIVQ7:$@7.SOa306r-DK3fUaQ#Ld8B>A)21q[:*#_-2OK1m9#CO[o5BZOix1qV/DF,wfG-wTR%-#?Yrp6:7B#$c-s2eAeY#$cW/2-bbkD-Tws+a9Z[0ia7Q%SRPMGc61[BjG(LE*NBZER%U517^7d)5.nN(nG8/)4(i:#x<nOHdvIr'ig:_@o[HMpM@5s=h&$5(UOTS(:?S8(3#XEgqdN=4FA^TB8J@'17W2c7]4(U@QcKA3[Ppn4+gK$@tCJF#&IxgXfHK3PY;c4B1sv3%SRSZf4^oX#$bM`#(LL'6lgd_1<*k++m,<3Gfo9iCVXN,#AZBv0MW@rCJl8r'Mw>.#wRC8j,9IF[r)5$HFo-]>'P%RBPp2%dsr^LCKheV:4E84BR4U@3H,#%$t]1?3K.C'/wB*.Atcb)20<DF5>?dvVOAj_2j:;[Jqgho#-9rb0:G&93-fxhBp,TMG7x/?B8:GB1PB8'G,G>A6asMc2'W0L6dUd_3/2F-0ie:dCWSZM22Q=+&P^3Y$7QKpVOefp1/eoM#;pgAF2&pR.%,#'ma#Dt4K0mZ<Gm+DDnDHd7'JcfpsPTZ6Ej]f@B`>A@t:xX(4Cu[3i_N8G@1St#*L^o5dlR1=D_3gGHJow/#QtlApiP8KjJd;]VCdEWFZZg^O``%7qZhS6t_OQ$sZ]$-FIE2CTrHe-GtE-EOBo7$#N_iDoC(:U/M]N1hCT<T3a(T.:t3=TkDfeDRF#uDfqV>*d1`#cxql/B<Q*aCVFj<-QExF-O:T6-E/#%-Jfe8H#.?0Bm'>gac^)$G]iHHB=`WdEnOgmH*rJ-.%UpUI@hMwFAT;M$40%&^qg+h),<DY#oR]cEk-t<1lEa7*kT1i%jSN,F,=NU?&jI'F/c12#ud+@%SQp6@8qd[#$V(tBuo`KJrX=$%8I:7$Vql0'ijYnDo1#1B>B//)nF4##v(G,sa=<cFj%l,CV(?d#9NuM5%bu<*Gq/THW'ul%=sWCG=DRs/93/a##Pg?)3*ddQF^5aB6oO:B>A:j-?t/7.oi1S(orxY-B2Z##CU^]:#fNe6boVe4GZ/9N20x3Do7-F7>M%LBM9>/-VQ88B<NI_7(Hb>,>8.l#>Fe.$HXPu1gXOl&:]um>$W.a<ofI+=RmRJ16kx^6A^vQLP,a?-st)H#2K?V-w7)3*DDI'@=h5C06ifv##*4Omw*318^Z:LK#j7nBp-rV##&-(##/vM9S*7cH;JF83J:_6)-.MVu=q`43N4H_98P?jBmYPI9QDJA#-9ip06h3XI^4HEHVke,<Jcng#&H0+MMMxM)0&5q9R'0X#&H/WcY/#&-rks-=*/-,Jsuhm(q?,-$-WEtK#i]22h%3Tu%qK%6[:Er7>sCJ17U=M33cWZML,vQ8@&=/#YbSm(Us`:%)2f3.%=.^O/;p$5hO(t6[qYf6d+I_/[Hw[#&GE0o@8]Z#x71OBWWo706i8ef>ma2@t:c(-Vke^*`glE#*Cbc-xX(/.#:&`6N0?&/8[v0JsV1.:bQ39#HMR<=c9xpB=a8vH)lE#D@:*(1:bowCk8[@J9Y_2(KH#p&'G0+06mVt#`a7drHt;b4f4Hg2Mcw`#&H3?(/-NH3IraF34j_g1/(ZZC5I7lMeoH-:O#<3>BOM16c%^0(6Q1V+h]O[#%I_T=#h7g853*<5'8</<cidT.8L%O*.8Z-$@;gA<e8E3#>YrtK1v?S@:`RE#[B9g#_.PF*)$q'D/gTT7Y3I[2V9Tr4A?)c^1tj&F(>?Q05a4o4(87w(J[S[1:&F;@U2'G##*HL+I*XF<fE0:17VHO(R8bD(R6:O>&GI7-wJBiBUhT31:&FK(9T3G6C&tKY>HIm06^kcCq>FD<%xVqJ.2QbISq09#L$cGIt<Z56_osw.w`W*#$an&G>>)@#.[0/2cY?P6MF4/It,X`1l@k*FL*m^4*<in2pqB^YA4H=#$v,x78;ea&MO<D3J8;W#Dl6x5@OWZ.'@$;2Jtts;F1Cm,#]R%#uw3[#4NI5>>cJa#v=^R#'_?%Ekn8t9o5%/0s+lgHADU,Bn2Ff0Jm4'FANwvcupXHA1%C^D+mF35kSJU,#Jht##%Qq8W.`X;A9:F#>opl@t'xg;tOEgrG.,cG&'.d##$uD/xE93-]5R+#AdHIArLYcI8WDYCUx(7.pHk]%-@Qu8%ag]CMlSe8VqEw1mQIf6'Vqh(Vvjd#3xBT8:M$)#w^@xE`bY^LmQm68^Z:O0HL@B599s=8qE[k0/kiULJ8(P+bmMR1A>=:4+hhQ6;9MN#2(YW2Q9Y[-[7xE#Yi0x#aA[f&PNIu#&GK`(fbsr#[DCU$(a>q<dqLXAQ2-*8rJbSA(1ZlQ:u&j0p7gu$<ucY$;>8B-EiJZ$W+<997U<%<doIk2h+fj(o5p0Fctc_Ju=G)$;`@u;G7,u0j$A)&-bY76_xdn#vW$SY#5;J##+8i)0]2d(o>>_0Pisn#';E4O]S?fG.pWg$s+99<Ivt71$&C?*Iwsk(l'on#.]EY96)A<5)P2'#jcs$98<Y=/93M')c_gj=bLRK$;FeN9QjS=0=bI%D2Cm>2Mv/A#E:U&32sd^(m8j3'o66g/U^/5#@T:L#>]a_$*Yka'2/c@#`u7#3-cO8025K>/93P-j(P&AX]i?^=e;Gr%;oc(g1evn0>Y9:#/'xP;e)Om[8'>S4gKv_$x:$t3sT7m5Z/of2[9G&H]ia;4'=hcGntkc2,$ipB>/5Jhg:&+6D@oEF2(G^IS;f;=$p<^H#c6a;k.3-3.k`)(q]Tq(l#+`*K+327C+M)r,.2seS(1M%Sqg`0p8`Z5lP/_.)'li.&HvYicF5g3Ij#SFA5&O/:B5<%W*rX/lw78F]EOM[SI3w#v#DD'OiDT+]j'O/w$bi@tDO?BjuI,##&QA-%-lE$^n8w06jI[29:0v#$Crs:0^6+:hA%G$<*:U#R19<N-eCJ-Zlxf%Qdu)K#kQk#]#;gFA)]k$Wl`Z(4i(#,'E*S+2Ai%%?:I:2Mb@u#bv6.noNqs##WNH#8J%a@XAgUnp*S^2imUCD4hm4/T1pQ#&cgG1gunNKH3Kf'RcMIDo9JGI><*=K</]&IYhXbP$8ZdpLt@q.(O9G.#(H'0$&EV#?A*g2mh/H8V$m=#)n-;H+XDv8&Aj(IO5;']q=x<`h`ZR'296G2i3dC*)$SK2,#K>#A4$r3/'A8#+TV[H*hxv(/?Sg+FP#/(TYcp#F>WvNe1lO#-:%x@=Bxkqn=7)3f85R-]O6u#:MTj@uwL'/8e;#2Ju_R&5<.a%j,.L,@V$?##2I/$4.2W2WPQXF%dnh#$c-a,f[_);nBmNB<PmU(JFkB9MFw)*Hc%Z8:<XgH>jl2CVQ7.$5=Ca,$POU-Vc>1/&$;1(JP+%(4P1^2LITHOF]O$/n_cHDM/'p.].vrAZ%IK2g:@-%87u*4^;?]4K2VpBOVvtBZMd6X(;Nd(ORBnB29OaHC#.Hu?2DKu?49]Hxvgj'puMw6,4(o$1%Xr'6F;F(i$BT#2i,NGe1lGFGY*T.ospF8$?wY6`wbf_g_kX(Qt#wFi4<):WRq[0L%$m4AQ>[0RP%$6#gS'X%t=ZBj,PD=Hjnn*Gh,ShKOv$##'oY23C&e$VUSU#%`Xh#&>dm####^6('mq06hW'#@wn>Li$g'#)P$x9EP:22j'oT6+W,8#6cgW3qw*-3J0%q#$aoe#Ejd06+Y=-#B9aZ5&((&k%VOo3IjDZ2R./6.SKl-*DB46(llej++,>;(9_/G(Uup4-xX7o##0)@3et&L/ldBP##Uem-[wx+#(SFe3a?#i02)H5+&+4h)1F&=)L`pq&9]%ZVc@`aGu_&Q3.;*9$$-)P<`WUL6x8FO@?U[r$rs443dP.8Hh(N9RoOHTr+Lk=#%rJO:g#JG.*-eg#`Okj7$%VA7;XdD7;2bc&PPm+ItE/b0up*%MJu89H]]AtGfwo5H&G1E%on-6(g/Xd#YpGU67eLg>Jr,uoqCk&(1/x('2tmw-FH]Q(L98L6]nJ+5]U4FB<W%d.D@u*&q5Xh@ooPQ=_jwxI$=WD6^#jO2ik.n#$:lO3/0]2#+7G]D-o$8&6C081IrLLHGLgP7Je(%5hKF686,aQ5J1QpHw0=]F:AAQHwAAP3)^g^`d-g)(JxCO)S%D6246$=#w]e/67beQ6cldp6>ft*9ZKPWCprKm#@0E['28FV#i'*+;j-33#Q6Gc*`ZU?%r0<r#)uL$4/mH?-w0TQ#$ku$,#CIT3g._=7<BmC;dbtM6cukv1rItR<l(;kK#fF*#(7M]DQx#mGG,`KP>)M:2.'p[12V/w^#OhJ,##.W(S<0tBWbG0B8L3.%T/3j?#i9DBss5.$kw2QC%N-TJ7'wR=`.S<85q+C#$DJ;##$,a*`ZQSHnhFo4GoaX&j_>:0GmHHUkap8P#*mm2iM?=-wwk[#$k,r##*NP-?t@-EbNBp+ABhbArDfI1;nEI@>oK[/wUU^(:];&#%%@I2eZPhPvL))EfvMj#$t'(##0JS89ft;3+;m03FVv)3FVvH3jQEx(60T:=a/.^(P/6q(P$eA#.7<5CUbpk3`TNl#ZTaB$6B@*CNkQKFF%vBGJRl8HR1l5B;^R:%:3Sb3D<oM(3G:XI_ju7CM[O;/S6<]12e/95qQ_%19NdgJvsl/./8$ktD_H>0<IBtKPVvd/'7kQ-&b@@.*2:q.>MI81[T8/6arrfJp5wlX(j9Lb@nM:VKE^KR`hs'Fb8h^*,S-096uO#1i6T+Jo+lCB=`Vq#%^=35v&YO:k?g2CsUt.O&T/n6F&]ddXfvG@BSO=(3ges$TBxK5_X93<5h2LEdY6^CSuwX1>HsX3Ib2YEMG-ki-:^6sbd(^##T91*Oei3-G+>X$Vd_i#1=383JjUB0$&Fg)f;/G&PvS52i*9/Vr3)EJcpFPWP&@2'MNC]$Vi4_F*.wt'6O:[4Bs*s#?%$q7aZe-EWmJXBiTtlK81b[#&FBO#4+(sK6V[T6[_M^CLoaFJ/^JF8&l_K=)8np>Y?&R>]kCU8NRp,Gs?Xv>HW0]#RiimBBkij6Z*t,#)#QSY.u4[861Lu#A.LPg#a<T/95<j/w2G0(To-W#%sgt.S_,vK1q+9'w8I?7Bo:sDr5#:06i,[20Ctm###Ss?r`'C#$k90#(U796+J:I?#U/^OA3Al#:a)Jg[:;A##>;w##8IW'qT/4.ake=.T#^F#wRCC6VRt=##8B+#jHc.>v1N:##g):%1aGRB?3/K9iYRqZI`CT@saq[#vAFl&e]PC'$LRb#$Xs.$tH8,#Sa22Y=or#<(p3eCVYx&'fr.P@S7`h@;[,m#@]aX7T'fF0qu@U@tDTwKih1N#9kD&@s5#qB;^@N/93?'6s7)oWk4((/8fhB-^)GSPuWm<$3,WuCxaL]K6VLNadM8t@J1C=UK@MH:/B`M#0[0T(/-KTJ%?:t#**>$)c_`E#[JWt1hAC`#@D#s$?hjM5ujB&5uiK@B6AS^2.7q*#&m#U9M?_vB9WC(EHDKC#v<b>(:fh$)7(_H$GM@?BYK=]DnCf4O'Z]EO'QUr*cB-q/o/]L:mSr=2hd1K/Z3IsMeh?0MjVM'D2CPm#CLT=B83R_$;2xcFDaVL1:$xi(rDiT8@'l`@;Gr)@v4jf$VlYG7X/R4D$hAZCfOp.EJoUtE(j%-6b6/e9tZ:(2o&dnLfJStH:xn`;8*/v#%)%?#>Yrb'n`<4#<nWO^%.'i784E-784?+,as<G9i[0D7X/@.C0_rA5dn2c@GrH2A+V3VI7uQKGY]O,#Yv[K%5EHK`G1)8nS+fDV+`5&k@pW1&QcT.(V.eq4*<U)V+_p0+AU*d33md/U.m;UQr]:8:JCl[#B=U5VG%/V$;;)$*JlM7'rPG9$%OO5_f>j8CJ?-nBX%SVBcCDNgmg0f@BNn@#dx]Fi+Rpj##..5#lWqY3N<1/,^%=`;,.BX%Ua`KA5V[M#3vS#),)B41]3M0(/4eTA:%f7Z:u=VCk9T]#vifv)2MP4.C`NS,wYF[%8K4G$aSod6Zk<[H]2>O&62go#<57Ya,.)^2fa8,44QZ'u>v.W#(87j5%tx4G(qg]6*T:W%kD6c4jf2IiU3Ra6kxnCH^';g%=g/.VI:Xa0?uA=YYP9>#v;_J)RCSk#U54GD/B8[4bg3'/92/&#&c8fE`J3?08=Gp#ObBP/^7X'DfNbfRSW/,#k)u--rlVt-rkfU$tIq[N,:`ED2Tqb5_%snR7tn:JwIMT7<s_6Cm0QC4b`[1]'Yg(]'ZxG@BqPOR#,G,K?5[JCPaqxB7;_x06iCxMfbbD3)9Zv#v&Ev9R(0(DQ4*PBSfNv/wnh03-?gVN++uLRwx)H2h#k=#%'/a:JN<U#%x0VG*sN(BR;Ped,hO9+G-SYD0[_v0<RIZ@@V`FF*/hg39M)k+%wp52fN,8CM*Wb3+j59CiEac3G/>,BugGiBS]e0Jw7G+3b2TB0nw@q5OC=]6ARJLCPl<7*),k-32p&nCN;4a6ARPNCk9gN6](]A7XnM?6<lLE[oKuW0nBt-2M*d4;:vV7+%w%W#$j['#%M7k##W<B%)N'eBs*XpKN%uI#Fx#94*YHL'S%qI1B[`_5>D3/$>`]]gAd@*DnCelC3=-T2hw^?DM`3(10=if%8=I^>CoaA/;(9Y=+)jf7'X.L<k,`e0X4<k2nHYC&lj;Y#>^;G+1,vpL9W)@08F`,H5Sp)/w?ia##I6b<eJAuDoKv0>_%p^5'X6l07Gn6Snvv`N`cUn&U#n5@*pUFDn';o85/O;%<%/`5_P.kQ=M.^Q;&#s?E7:p4gN]X(lIsf$_Lds2Hqt/GL[xJ@jPv-2/ZWq(:+*bGf]@KF1?2$o^;)Q#'2rT0MDTA5v^C=&75EI1f[xt785.5$Hu`D-;5g(HB]D]DSSSB#bd-2e,,Lee,,S'>w@SX#&d'*rgO0w7'6a76gtJFCau*2bF.<Q4Gd5:Z&&I);jt5F/w]So$BYKrK;/GH#>C^L1OrEK##*'T+hS.Q.vS$102.@Y*fou.+Eog/,DYAb$khBJ$swJJ6tkQ(6rf]77Xo_.DTjK'CJ#UXZ:uUq6rkUv(548B'(5k3.oiwc2i4`.$1x=1/5.ON3,xxUDSSuM#xPpE##U.](t,HU-F?#<4G5852>.2W$Ip,r#(h9MDJ&w)06f@=#9b@erFr)WO,H/V3#x8g-F,&Y'j.r@-Fl]PRY<oVF&OK53J'mk6&R/1*)&YV@t'5xRSA[v$?r&93'2]%7oc[v4+uu)&qXJs5Bod>06iYm(4Eb]$?Z>ShRS@`##:Fi#6-unQ:v+I08=+j/G^AE/T+f#;3=VE/Ti24+0p1%ATM.e-w)ex#(JFaEGxZY#Yv2U,>9lM15+P<#[7:D59C;N-dHAH:TYu*3mm]r&PO=,3/%HL.*;Oa-vD,gjS4Sc$@maRCtOS79kJFR$;:I_0Q8SVAPkru0Is5igiidF:2G=/j)(-#--n*W##8'W06gI;Ygw^+##GlnO1>hdke]&[4G#?F8[q4%D&JC<Q;WjmD9.*g2JlUkIU7dK0?7qsBoqBuPE^[GD2A]%7v;&KC$U@Up$K2;6[Y5,)7,Q87Xvv*2>2%>6*EDg6$7)H),/GQAU-(n1;Xj2$#=R$##?>i*D?Q]H=Hr]-@o'lMhTDu1KFLGHv_R]&55F7/95dA#**rY/ArmwnD(&wH?i)tH?VN84*E#Y#:tcHHw$ta06`Yo1:(3)[8RecGjg6H#'Vfa(JG_0(/+_@#&HB;TocR^F*/%.)0Ku)#RD,:$FDu4@=DLJ6@CdCD5T+u6ARVPQfjtPCnuH0A$TX.0n%'94E:F=4)u=)>&,x/6]I=8#JC/mJ[wx]@BV28.(`ee7#EhG#<sC96d(@43eb#J4+TP^6cYY/0p9r%##8-*bM_6T0v?#d6Gut<D$h8K92&0xCjk0R[AF$U$D)@+Ee9'U#$v[d#)l[15':XE7<1,DED.+qEe)]]3frOm#$lidN*r*;MHj=U,A`._9^6+G$q=U-6aidU06fo_6arjS19^uK-bZ'$;cn`%QF%viC2uZ;BQVo197ARYA)IWDDTO68#l_2r8*_7p82jrf/w,kx*3LIW3.*9nCql[FBubufC5?Ac0<rJN(O//S=GoSc6EvGh-_fGC6VO`A7YWX^2f)jF3.<^4##$d)=Kk<6@tB>(#>,;=3(kR8/:p[:##)[M$vv>aDH-[?Tvn@g&5>^+7tw/D/qRG#4''SB/:p[44Fp8M5AaR7#(&LnK&QgLE]<2U1Uetb*mT7S5qVIp:q<gS2mS=A;KaDSA6jZk&ngP_T1lrg.$.2)4b_[k0;AM`G2>*)5,o%(%%wjQ19Zd,#d&JE9@c?$B4;vg08:+Vl)pbu-XKqL4&&&J#/;U+BpIu/F*2j1#%;tN#@8hD#0q>K;Nv:KG+O>-%AKPBDL*URb1d9%CRJoWCS5trCNGYP*D?JJ)NAEeFi2UY(;Drx$7Qk$OBDQl),*u4#B0ZX=a=@IY?VXUXc7iBHf(Ab,upH+G,fN4>-W=uJ7OfT/95:PJqpD2XPcnp2Lrd<)R72J#p,:#_jgcP4+'j%<tK:rG^cXl*f/4PF<Un(CEkq`@t'jL#)mZ_;MP_o3O:9Lqfr0+##K..#k).pVcA:fKL7G/DUrrE/pF1O>&Go':5*/p1rwVCCIhEkG>0k60?6:](:lgW$2+@&=1Sw%92#lF4A5kJVG5B?#SwKB>IA@p5:e:JFEBkpHahhJ'N%)W(;UF>-x$I=2gb/22cX:8NGL/8*8_j'2-`d9#@0c%#wiU%),i)M)2:?F#G;6D0(Kk-6+TWq#F7ofQgA)Z#whwA(OU,.B2kW>FJhtT@v3+&%oqv*@v3+'6+SIj.=tC:#*i$.6%Lks.^l4D#,O5=6%r%9#(J4e4(oW45D)%U3.DsPJV,^/06AY.<EK;?#$Emt#x<n@/6Dwh#'O]*,uoP7:2uKCUf`K*),-8x(6rls(P4)M%+cTM/94`'*,#ao:JP'd,)LAR$,KfO+`+^j0o1biM-2'XC2k6/CNVN8#1d+`18+^f-w7(w6EmIG#Wsvw6^#:(cZ]#Z6]xeU_#0UVR8dAcI;D&k.<pCE),-vB$t<UKCesqFDKpZGD0TpPEL@>@^M/C[%(o?V4Gnh;DKVJ>@C0=,mtD6U6Y?CgBp->R,us<4CSujrCpRAA-Fm9U#$jeA#(13pBjY4KC%@'c.9-SB#5s1xD0IL`DMa%]2iV0;;G7Uo#$);I*SOxjDMMciBqTN;F_#22#*_[U0?;h`#/Qtn1:^K9C2Z8P.`ZJ+jR:/KEfx>w#+RB4D2;mo#&Pq,dGC79SlO1E6bxYd@Cii0(9`MFG-P8fA#auF)caPOEMnVq#$lOE#$d'K#$d'U#$cuT#$cwS#/Xj9FGFCoExS#MK6TA++*e.b#b-'QF0de(.)BsH5YtU`7`k&_CO]j['ihw1H&4:5#>OHT#xX+*Bt(hW?>`'t@qB$(CVFiU@Ax[?GcwW/g89W-.9;xP#=xvVJ%TAX78:3v#oWA*U0KRh6[k?*-a_IvXxTR6*Iom..=b.B.'wHM3Hw'.`Fu^1.wLh*.[1TwsCfH[C`j.==n-,J##@k5#s+Vt/q59>$&g[)QC&3U,>J6>#AZF=XA8qS#$a_0#&>Z9##G@O#$W9T&p^km-rkhb#>Wjo%fKc#Bu.aep1`Y^2HC)X#>m4>&C_]ar+M<O#?*O8BSh>)$B[c^QrxpwB:9sV54g/R#?j6R%vq[(,uoW5#@T0##@:k:M+g7L%6tp.3'BWYGdsg*'3,*GjCkNh+%wf_20::<#>>3G#Zbp0#etf[6f*Ab$ZmDwC5JBa?$KrI3g,ex:3_B;3*ZH(7J?i&5kfYZDf13>@NPT,@v%Eq##`2h*3`X&2RGW`A7RwC/95H*,v--x#I+>6f4a-D1rnQo-tgUm86o[Z>Z>EY#SC-Bv$[cYA+Grf3f92v5vtoRBQlYH;/ZNv$s%790<dpp>[1`7#AobvhNX9k^3GBjXBg8c##.7O&D[G:B6]gw#gwaqHO'V0Cm;op#EC<h5^m1%2ohjY%p4=[12R#;6bC@s$SMQd[rGct-W&^*#@.=ECCCp(Clo?m#s4xW5v/$2$;L_RK4?=gXbFk'D?'[ZDkt]1B=DI3=`:$`%T8wf#KJ*9H?Ga^$j:'5q.PIW=BT':$ugQx3-8SqW,XB&3`TO);Hlr]&P`S%#DW>4-[^^5,CWk$#8IlXVHk<S(VG+0GfS%>D>QVx6*s8hGGcJ16*3;un9((=E(qu1idL^2>&,78F>+,.:fWR2C30ri(5?R?#A*t>ZvvM6Zv.G3jgu1u&7H_%7DMbC/wn'mCN:di'XjFED2Vuj-YEO)#(AYN1wFwH5>DU7'2QMN=ifnqI'H#9=0ZYVGgAXMYDHlVD0gZQ3m*g/-W%nO(NaBH#)sUog:N@8$siY&.EO&&%s,`,+Bh%h#LOB.BZmgIiU=-ECpkI?#?3NrCff;?Mg/`*)lCVuFLv)2'2So9:PN;0DCxlO5)*QD:((^f19a?d19jEeK5)95+0Cs75)ClLU.cT_,Dx_x0CStFB9ObZ@Bb&,#+SH#F0R2V#Gd_`6b/XwV-P3U3L=?dD5fTP.)RHU'inS%$9O&JA)@V)8A7EF8V^Zx2Z]5T1:4?b)R$xlai-ieDmnjoJ?b-L9RRGPD9.*V9an:WkD>IK$VUT0<DMbi#Lvq[[#YG$(>`KH2MX`fDML]7#$aRHNb,$I$=Rb-#)knZ-v]t=#>1[v)c`W2H<UARa/5`a07,9d3i@QxWa0)eJ:D-]/::g@H?ZXlCPvcX-we(lHA:dx#6upMfScHG#%)E>6tbs@Yx,KN/mE^o(ODwO*-Jb?$D%S+Gd)c'Cj3O//8YO##x<nI4A8#j6ZeIR1L5&9,wjgE##6LK#gaO-7;XaCP$A_:6jI[Uf4^kNXE$%W:fUlX#E3#u4FS8R-dh^uYa(a3H?CT=++P]A40)SH7SG=l5%blE5Cb`W:lCQd3NE/&CjVFp/95m_#?uoG##(Rl/q)At;e=K;(q%x=A]:C%%SQm*JS$B)Vd8[[<HNMQ>DN8t#,&;,<36;mWb7FB#$aB6$=4pg##3[I(N,XE#0wt46,lU#'o$'e#JU=JOA>n34ChTk##GX3#6c0446oQK6>?L(.#3*m#_%uk6;0>GJ#PV<-,qq.#[CG(#>`w<#n:<FJ7Nf`BnOk7#x$Yq1f_`a3Q=53G$5[2Pw/L$-w7%v1<-)U-AX>*5Z%#T#G;'8JG0o@4,#Bn*h.nv/Tio6*/'^u/9;xU##'Ba#xO$M:hF'p/r#X8.Z@DYB=VvH=pAAvX&=_VEO^G/EI):ILKmV8+)F0KGvd,i80.tC9muN11<(d-??C:aX5.pPAZ%JN@tE>%'kcru$=$<4HsSHx#g0xhJAGar8;VAq;t9F,9ms_]$^Ze.6^Ple(kN@gN,:a,0?6GHIx?[Y1l6-Q8hp7$&5X%iLfSx`0l<8)Iv/GU(10HS(g<D$.ZZc1#0]:#1j=i;0#cN)CQC$:0?JYs#].u+#&c^NS=;Ia1;GJJ#>uS,-s;[H1;PxhAps0_=afc@#xA&p/ps2_jH#$E.86Rh$&]l4H[8o++*`e/+F%-q%^^Vg?&9eB;G8HD<e8oVHAdaG*JPxN%axggJ&tTaAVs758@<?LI)nfa6XKi>06j[c#pmE<(LnX/#@8l9YC]q(Hl9u^6^N`<5vq+o06h)n#)ktS0L#SSJjt-W69P?g6*qVsgiu)76cls^##LKb$W-ua/92sb#$V[E5?FLp&p.SA#+I-m6,>f3@DvN=8;8:X>Yv8q+EgN1K#it:4a*?PYxF2,Y#Z?B8:a4X/vJct18?H(#)0%61j=hZ##)[p#bPLN8TdRq#&HVY/o#,g$>V@S$;F'A/AjmU#&d'<78t9M$X?1g*+W_;#v^Gcl(ukG??Big9;tJY@?E'L5Dt3AF*@Uj#PfIZHAQKp#&[V#uL<S6#Aut8`o%%HJ2n[fDnE>ICp/ivFiE#G%C[c71;PDp2,42Z#[<L%#A5W,##ik<%w3/`sCwt>pPuxc9U$7-)XJ*NQ#7bmC/@d6Lf[x+#>EdS/<`K###ewp%1*#>:S7iW,[lOA,&StZ;PO5'JT<mnT$J%r=//kE6_&rEq.c[X9lJVg#_oCn8LUpaI=D<H89J;S-@f*sFL-1DJ]tXt02DS=##k0qIZH&06,m'XuXxsH&O-8e6H2*X0n>(p6^PBA@tHT76[V)Fscd#%4a*@0$@Mp9#-U2&0vGH*JlRMX8InO`#gwE&#)wdLEd+&:2ja::i+T,c6av/j1Ol3c$m&ca080CA5aSBHMG+S9'Q,UrK#fB1@?2bd3J+,3.=EY]#$aR#VcCj/$6QXV89ZfC3(v87kxQVP/I2N.#(81[87;XkK#g@gmV%xImV'twK?7ZV$#=)(#v)ia/o4mc5%P%F,#Y.?2kx6.clE0noH&bi03RTP)7(0P33u&w'leSQCfv*V#9Y4,1?gZfufrhBCD<nTsE:>(3h1Lk-Y<@n.8@Wt7CcRs0NA*]`I4%t<bnMo0mn>H@C$c[#vFH&ldGB/'MxkQ-rtGa26g=0+B^AnQ=_-v-t/[1#T'UHid:2.##SH-$3[iBZuU`I@xl5s08?T?$Gw<WBPg#`0-M?d2i*5Z+h%G^$WehGLpr3)'M`G.-F.(X$AV$lBv[d)BKZH$l10e1$;Fi*%9snBc>o[s,[2<o##/ZB0QhwIO^3a4%a8dn1FxAt/ldCw0nB=)$=A+%BK?3?B<ioO$LIi,6;@X[##nFc/xEB`##0DI/9lXx/na/g'm>bl%87x,5m;-w,YSTQ#>Co8#*^+</w0f3%`DhaDF?%;Ee2J>X%m8kG*QtYElv;$8PB.=-;8r(#YGf8Jmj$K<)X$G(3LtU'ww(j-+JY6%'M,1D6>;.M+x3.*O9LJEHH#OE`HQH-X_cs_4_'LEgL9;FLRNE(fc'2>w5*L$%5s[&PNEu#%Mks##5P1#+Hj[FU&J.FEJF`34`2l,#]U-'imGY*l3=u8^Pr>E`['L?u1P'6mIUauY65XF1DT]IS=.;F*)$%HN&)E08:TQ#>mOG(5Mdp<lj4jHB.X6<3[kl1A([#6,UBO'PwiUY%f)p#Y[Me#?Uub8%<B'#>DqS(U>^6#?r1J/usDSBi_136)4KdIr0,<6tV:a6`49f1/SFN#A7Y&##)OK$%I&&OA6%7#YZ7S+L3>##_$`a,?l6d#@iB[$*Yv)1;Q,wGvPKQkc*VCF.eQ>H]ZXh%^iwaHDcfn]VL7?Mefjg&SbOn(K04'-ZisC:fV@7%Y+PB/93.r(Jmfi.*-eo#&YnASSTkP0@q2.)dQhu#$jdq%V@nx&PUDX95QAJ:euiV8;TpI%SeRF'bFue:_750_Ixr2#%L8.%=9OVj(X5jCo#HRdb/:V:N]bj7Cmq,*-<Txd=$a:*IU/h0%OK`8U)Ui=,(/819U+p.??#-6rt.u#0;qR3.<%:2hn^M4j^kQBQP^%5@8Xk^500gO&Z0w#%;,3%>/pGEq=BmEJGH9(r%:d-,39<#ZPJE*/>#0-*7Y`&lr)-.<K*6)GQp3'jlEB.>MPV_Q0ir6*aIS#/V0sICK8_clVUu#v`OA';#85N`Brk-;9;:'u`(g-ZjhU.ou2L%/9n2d;u3h##,>U&I]cI#]>N@Bh2gIBf9Ws%=/%b-VP/*&5<0t9RM**El27#6aqH016#eJ*DRYw7v`#DB=)j'B9=*:H05?,BniJC0nv+jCTVZnDo9s7B<Wnj%TG#a7Cw^g1f]0j1O9&%/w-_b07Eo)[ZNSZ@v36M$d)hW:fV8./r#q8B7$l_7Z1m837%YO5_<Z>3HQk.BM8DY3)nl##2Meac=j9q0Q^(+4b]vF5'C@j2d^px0I6_585'CrJ4q6@#%9$S#%^OL#$X^'$VjHh$%W(`Ug7@]#(]7k3ALSm0Q]a8;OgIu4+9&o#0fX01U/B`C52Xj#&owI3-?NN#Gjsd06^20#-27[BXM>c#?M9g#?jjd(.xX3+h(-8-G=Q$93Z%4&R%G)2841%#ZD:ec@kf12hI-16;/ASG>'[-FM.Zh'>FN^4%pvoGu]^5#+K]OFKs,T%8kOv-CJ<c#>>rl%ao^c6VId9-F2%b$AfblI7wGOI`9Ta##PDt6#U:v7ofHUFj,Ve14:jw#v)7BI<eH&2LR'kND'l]##u_Ed(8HxClb[,#(oCW1SXsY1OUt1BJKXhBtivqc=s7M-G0oJ5#)+b#w(rK'T2t()chC$##i$s&d2[0Firu/?rhm##H_+H21@0?4,Z%R4+^5K0cbc]5dn/-*`]B*0Q]7;#,;9Y2hR?$##%^s##cM,0MF-U4*Ub04bp#B1JAwV3I:b<.SL`A.oi.M3dc:0[SRAM#%i=N#A5YU#)u$i1Tp1*.<g=_6tN`[Hu-egMcR(K(6aZF#665nC:Cq'C5Y[297p+25cJKk]/#0f#';;Z$PsvZ$v9'+4^Nc_C1R[6Bn=5I4d`=E6auad#:iBeCPQD]&7':&4%qTD6*aYt*+9PpFq_L$6bAr*##2nA#U7-+GLe@EGNr&,053.E)etG8V@Wjx#-`$X=03npVwtPu5ui;sc##;^(q]Z#,JC<#$'>4&G>/ZY$X*eTWeSB3GS`B*:'(GRSP0'W.>MEE2I_ZI#If3/GD@WuM%LB6;nR$f&djTZjb;eY]85a/F4DJ&DaY715'Rk#Z(<>&5AqO+s;[:T##25[=h`ko5CG%d#aCaJ?aOwY:^`8oi@Uph6HrQ;1O2j7(qZJi-b>idcZxm[O_pr+/t0ew0tTSq(9e@c._LZ[.YB701I(soD2BtvBn2*W3D:499O7d81o8'1CNtk'*+`3x#&7]d)e[Pa4^HNa2L$ErX*Fe43cW$#^nMDm56jwGBmYPb6va3c2j)I>#ZaBX.X*V$#$liq###]7#c:u,2he*h0t_ZRG)9_qD2VlWNJB4%@BZ5h(kEDo#9G_Z1OUx9#-;9g-vhGr.oinO-wMOm#=:880p9F+1f]Ou<)3M)AnSsV5vZZj#I=G8QH&w+.:?XE6VJ_(#=0T86d1=e10Q;=(Y(7S19Z@Y&<JScBIA@G<lsN`h0Xx8#c3#a-F]$`A:Hc_5wOCtTE#(/##2E6)R'^T$&T.@6^N6m#gLA&6bV)o8$R6LEe]$r89mv(0?6Ow#7n]:g2u&H0?G2N$G?l/96bpO#^iQ1>>R,h6*G-FLSoXl1qql]6WuqGtc[T&rie/DB8I1N.Bw;j=%s.x#0hqxBc#>nXxSnET2.IN)kUY@7^f+p2iN@2CW'fuHcb3_;R?u'###3ub^0_)#VmBq36E7V5QN0?GP28'#%M)$(L8h,$V[,m$=k6R=f3pS1P)d@lIDhmBlIEj2fN+s$w2Qsf4s22$=Ek;--ILG6]>AFqJCv':i)&::39su'MLO#0<+g?%)'#X##YJN5#CY22lMM4h($E$5e4Kj5ux@h$7hXgBmvL+L0S4u,>B_n(9c^v+KixT)o[J$/9lWf`-_`83*qTQP^.f(I8M/B9,cEW-Yho@@Ah84eh$.0'4>:9.;<bndVDhw#0wI#G'*x/2Rdp3l_NeMeTh<d1JEgU#K6[PCg(314_9p>_5[Nl3IbC/#$Lx;BM8ul6u@I&3,or54L;P40AZlJGF20`CPw%5%<+@dV?@$UKj4CD-Z1-k#$svk#IIw-C3;)B-kUB2e?v`L3GiJ((lDpr(l)^o(P;ss-]XBd#$t39#*Ce+-^'@5)NZwg.(hx2`K@#Z2d;ER0=*-9#:)96K2NT-_ZZ8jmV&;86;/P`2f)in6;.w.6;/956;/'Ck&,mT#@'*?#(8o+G)mW.L0n3h6]x4Tc'Q:/K1m8L:K('4K#iRF#?jqw6cP<].#0M9/lfK6#,2<,D+lJ/##d7iISKnO4'Z>E?>DWY##mc23=Gr6GRkha$<RLQEM]S-,>]HU-Zi/3C3@%$)6[#+Qwi'/6Ej%x6*AtI-b,[T:mQZd6Z._D-Z1);###nIR'&#w@v2Cv-wH&&(PbME-[.:x4a;Nv2+xU;1f[vves?nn.81(q#'Dx[,>8/I##/<**k;'S*4k3q+-=?F.<pE0d#$qBr>CpL=^#9g#[?:r#&Rr<3*$Z=LR8>s,$daG.vv-30?6:v$A'0?.#hvo.#);x-vqY_X)gxC<Ltx10Z]W^#&Qm5*D@E>*)$w;*)%9;*D@*C1JAbR*)$Ei#%q&R#&Qg0*D@H>8l_J3:6GTh9iZ8&+%wW@P=v[]gi<@;gi<'Lh.W76h.VVrONgj$6cXua0?M.C%k)k<I&wHW*.D=$.#C@X%p5T1$d<3WepHPD#@;ED#>H@H)8.1v.D733MKO<uR?8Y?2+S*Y$FKqI#H)qa6]%&@&St.Rh[G5'W`RcW$@N>Y0tFsKCJ5;)U9>)s##PCI5%H41#&A6A&PN5S,iwC+G^[rX08FQ3$[X[mEaaQe7:HLlGBGCMm;[qr9M>x$/Vedc%elk^1;,-%1O3K_5us/R5usMX2j.QA5YVgCeoD*V/sBY31OUh61=_]T2,,EM0NxN]8p6iG19W9S=F26K6;.s922D6=-)t(2#Z:8/&<Qt816DQD9M@+*6I,XH22FBO##Hu?7#CuZ22XSc##Hv*/;bFB-#v.P$Z:?>Lg4iO#$)it6reZ-66QAC-$Pf^#Z(D($(1dxOA$bOO%_.21XvJ1%n&?K.YpF06k2%Igjp)H-Px)A1Cl[80:a3>=&$QM(,#cv)nH]a#3e7:[qgDWk)R/B3c8;W$;qV)4Khs8+]d?tHF.`7ILfcl3N46p#Tk%MI:E=+##P5B)R-o_>)>D/.#&+5O)?xn6asS=Ce8,B-Z/q#-Z/q,-Z/px6=Kr;6=Bkw1/&XQ1/&:I*)%<=)c_<g#)>C/CSCvAeS(V3]lS6x08F%n6[kIC#?25N#?:il#^D&?`Hea(WD4PL>>6AlC5GMdaJ]2U/?r7KK#iMhZrL_D48Jsi/92s&.#G]I7sgs(5Z[s;3N9s#(5pv4(P[5L#AC;JnRwpQ##e3Z%'R$WG`DSmNb<maC*-G[0An3%.:6R/7#W:I6%]uC#v>&>N$0C'0:J/4'2/l,#&csU<)tXG<)t$k3FG_bkdX5+/:hW%-w9nu##,S;#G$HS`Ufl7856SS%:K6AEIxB%(ggc](Wl&Y%<Vcq8m#[suYYF*3MUSJB6S@nJ4w1N(OsYn)1Vsr(4jrv7Boxjs`+2`6*:j(*3V2((5E'%(qI<h>HU3(6dJqU-@IFa)1FW+4`4VsB8.iJ6rYkQBp?LP&@;qOIVStn0Mu`d(9dAl$^^eU1GGo:j:nPG%A$w]08kH*'Pp4`JmaiS@NH/rbFXDw(g6/r-apVAFAITq#?i+V2imdd.'5_R,&pYrbNZWV06l7e#IFJ7XD%[D#@(j+#*<>Z3f@-=20j_W:f`]RYuc?f#@/OQdr[)F*Jo,e#:h?k;,nW''P0Bn&R7W_)co*_(;_5Y-b,^s^NON'$u#B@G?UAB`;l^Nj`:wS%5-UJYuPx0Pk8K7(L9,W$>bS$&lj:KPT2p>Bn)YO1o]^uIX#Amj-fR`7:#tuES/XXH+[`'C3r_iBoh,c+]X,2/8uTi0t*(23*ZO-1oQLV/w?kE#8/J=B6nUwB>dj`BnCx.#K%3Y*DB=aBn3wA3a-'c##,c7(7vwY-`E0iPu_;8Gc8jcIZ%^n%oo.22lwjl]4dtM#Ys`/8$[8iC&urM-?K?:J8RN_EmBa,0t<`M#(1dH:3eOW#F$WI/le%c/ldua/ldi]/lf+;Fj#D-*0MRN)Nm@L=-=xuCq)C0/VRL+(1'=@H;KIQ#$Cr3D-[2/CO84VG9e308cW7CIB@5/BOEr06#:%wW5_+-;^'hc)H6oK),)s88$6[CFERXhf&=#YH&aG>'nK_a#6+[<.'3JY)jljdKM4,IB>0,Q*k@B+$9oNJI'%6S)H@YY2nI87*D@0_&YTA_#(Sqr6S22D78+%Z:JBw#)of47#bPHx4A5kd#$<^d2MZ:?tR6^7txAh>^3SoT&Puh<)6lK<$U=dB19sT=2o<A>?c$GV=I(fQ19U`2(4%dq(3R&m%)m.Y#>HVAF];_<Qx;N1CPdMc/wRRT/wU[H6wN:0f'T:jC<&jg06_v]/q(Q6#%&sw#+R,t2K_QSld6i33.QC@##>B4lYFBG#wRCL1M6]s9M@*u4H^]N++w'e*/$_a,(s<f-%oTh#ZEsl$A][n5>4r,08=&)),26e5Zx2hC3X3CCEbF_Bn=Wd.9Ri/1/aX9WbI)w6j27WCs,,&&,NcA+%w*-#$v`35@.Om942Gn)cqjG%eXC-u*0Ikc%;I,?%*';,)h#bJWe[1(qB3p(6L[s(7>>0(8D%:)4Q3+7YshR:h<w;8Ag_kCMS6$%88@tBG3L=-=R):6=XPd6sC$l#?i,>F00^2Hc,;q$Ir7dGfbio$:?q_(/4nKg2Uw<#@7C6HA;P1R8.$l#oDDji23/h,'t^$#>hGC(9gHW)Qt-U#Eh'8*eo%a+]qRq#Zr(27B$8w##N#58Zv@4A#Ufq41WR??RZs/?RZ^('lf^(?RZ$/GDh$w=af5]k%L*/?R[#1Y@huP6dCIh<@Iuh@9*bq#%%@6i'51x08='2XaQYACkZV0#>t,]#u'>PawUr[*FE@r3)%it)931j.>`Qm7r?+f22m+$GD?=O((rNm$$o1==g`hc3jOYhMcK7n;KY(:7KaasmZb//L5.OC2i<Ye(k4&+#JMR':Jq.a%[6uV]PVR%#^V,+<G1?BJX],q2n5B:<)t,().R,_B4POZB8h?.BW3$o,eBk])n=Up-wRIO6-jxr1Nf,9B8JHN(5GIf-]jnm%W<P<)n0QM#vApO._b@W#wK_'%3#;+K#iGW#)chpH+@*`/$FAB$>kkqDUhDeFZ0>+$>,'&t5b;2@oj;5#n_NVGM=*G89AI1C/Wg8CkK`u#0.Y*-bGA8B>-enO_TYM##*0O$lvvg05UcqZ:uoRd>+xZ.'WcU7AKr^J5'4m=bsB>0tXu@6?PA;#%x)a:fX-L#]<x8IC416m:rLr8oJ/oN)#%J(qGO&(Pi[I#Y>,%^7hgC+-n5X#$cYm7:hp+#$#DF$0CGZ=u0UXl=rJj$ho+$h=e.Ji_9PY/o,6J5(n4^om_ak#Y<KL5%Xhe$,8R=1qh^2H=w:g%8Hod&nnaCEg=SW-G>vg#(i@L:5rsM-wHfg0rLJ=Kj%jAa)&[*#C[1kOAPx13cCJ<$u`Yd#C&>Bs`[(2@uwC`6cpn1DD*lx6'2LX2l3%CnYcGfH,4@4_f=jV2iuc_(66CX#vqu1%uOg1$s-Ix$2=LFB8dhrgMYSI6[UH2#L*8:86A>d%(mR[C*MKIBmxe'0nBI6-`2^N##YW=)SZ5a$luk=>[@P<,#]lv#Av*.V4&^rCih%V*]7:x?;9Kk@`mN+JXg;9&nYK@_X3V+VJ$5Km:vuU#$sjwB9aI@8DbH)8?GNh*)>9n9Wr[9@t)-oCC&BpBR^xh,vD?b#dgbf%8J[q/96g@.=,AEND2k_$>^^JT:R$T]5X'VG#JFmhLXkEhIsDf.'I'>lZgS0%F]nEH*i;$H??nH$(`<)%vamxB8KM,##(0bB<t.:H*MI6##E?U(P?6k#jZcKB685W$r(o8N@c9RAR@jwl#(tA.^6d<mXN>p@U;JK#w^nv$(PoJI`_&7YZtSbdrm^*%_amvD2BOS)6b<^%IlHVD=JX(8s7-.0o;ZY8qOjZHV>&Z0oKV2<D5dk##PA+oX0Ah#'2?1sP8cn@o]FW(U+-J$f>GfCq>4QC5j3t*h%P/Pv%Kd4]QI(Qrwv7,#=fu#<1[Wb@vigC5E#T#&TZ0hY2aT3blG+##U:_+HV7[#AOEH*D?UQ-EJoc@t<%/7SF`cEN9/3j`rkc#@Q`2INiHxeS'[YCD?iQ4cbT@V,SUv3e0>*@s@mA=af2@8qZ8R#RPTw6^tQ9-$X--#>?dW#Rh^l9msg/:mZvnEHD;T223O;#%0'95rj;(K?8P3$(Px#=*ZCT(L0iHFA,Nh$@a4aT2H.=OBE0O#Q&XTHv8qm+]rsB#;REABAk)9Bc(MRuYcR*7ou;0#*sG#?W'qn/xjkP<)O9[8eZDm-VQOc2iu)<#,7W:6F.&'*3r;2._M6%2d%f(#Mpfl%s;Ab#&Pe(Cq4)&##@PB#<Q:BB6>DH#%#>u19RFE0nI;K$VfJN#d)9C6>nt#.;p3%Cj:PQ2MbS$%8%=>L2SWZ6Z)n:GYA1Y$<[R<#+'Uc5eK<[$D%6-3*$6/#'`^7UYZ8c&6.?E'VJ*=;hMGl19dUF#Zs0c<$Gtk2NUqGhX-(F2GMWX%pEULCf=lQCf=lA/5-cESxubF.qZUt#&Yw,[8$`37oj,Y#TTCJ178<EQvlEK`eb:b;fnJ0Vj:`U89A:J2K/]jR:q9&QtFBeX%X.f#Hx2<HMfAg+xs3MP@6;*#'F@pnD0CN4]v.&[7k]:#u>;;<aKQX8?J@q#P/.64xlt'3f^/Q'vGv7#H(-ttf$XPomPsC&lvG;(U3#f(U+Tg'p2mw&3h2d6[UuTl?.fP,_k0X1_lO4qK7Qa&9KJ:0jfJF+_AS++^<s,#w:8OBow+Q19WgN%s<g1SQ5aANeN%G8p[1%)Jrh*.$-ht&:?%L/pCZ;06gdo/$CDK#@$Lu#[Ci'ZrtCw#_?>U/Q33W$;<f:K83v2WI&'=X]9(N6(*4+#eFDUCpIGP#V%0N6A^fs&lDx=BWjCZNW1/h:%A?i9:m4I#>T)W(S;]&#&uoprGJHN7S$*S#JVFB4_.p;/w26n06JjBVcAmT(TgU9-[93cRoQ,P)1A?X#E^%DCVX=a,>Ce9'omar#6>?L<D3_(nsKAYPw4>>/R-JN##B/@%Bq_SnqnNRJlQ2LlukUkH*iw'%rIFB#$uCY#@:?C#$;_K#Fc_MFiCIQ*)EV=(8Eak-$30p$;AIf<Iw0=A)@B-)Qg'26`>e@W([<l&xrf-??B`4-gL=pF'pEJ#>nC7$eAbTCPQDT1`h822iuu16b+X@(VPE*33dcAK4l>S%8mhr$mU$ltD9WE7BXFO#e^.k0MEeZ6Z2t2,>82c%SakP-^2FG(hSl%04$2f86WW/$)/oRjCx79FhGa#C_C2I($QZC%%qe>C$5S%-VY]s-VXVjK84=]7DaKQ_J52n2j+xL$8MTr925VP19as4#]$$u#v'Dd.#'Ex0Ox`%gN`qB92BD;4*<Tu#0Rbr'2K0@#YYFK$*/0jDQxHS$=cB>6JipQ#xOSn##GNo#'Vfa_=bZq36%uFC5KH.8qkpvC;TCY1e(iB9[3Yl%p+WY#P$8Nh.WU&h.VjhEdWtLO&$e@:#H%eqJV6417xm`HFo=BG.%Bs#$ETo4A?&i022v,##ec(FKa,W*Fhhx$tS3e&[<k<2j(u3Y>YGH#aLKk6%=Pm*3aLo#b&r2`J0*D-<-F<-%'K8#__*t]P,>81^IGb-&An214*HD;PF/AIWRiV08Eww$tlH%^NZLi$%$h-;G7wS1RJ/O7CeQ];G7wS0UMjL7BhLQ;G7wS2<4bI-+ck8'6@n'>%nwV%@r$sBvivJ@BCs5C3O3<Z:wR72Kda?%p9gG27o)H#%@d;/PU=k#?r7DPZ.hdEjk3$hffK)3SOhNXA999#[LrO3E2i[5'UY*UJ:h32,0dL=KX*<C5Q,e+L1?@$0W/ZGe2+uG-Z&5Q,=-4#x=L+(ND*i6`=^q&H2Z5SvE@;=^PUPYvBt0*JQ(J(l4&>,e/`%$$`]C1/&=@1/&l(6^aF*=VUq?@paax#E_RP19_:Q(Trhj$+qUU)YFX8#?Mx-UJ2;3>lK.jZrUeA#$jsx##:Uk(4NFE(sVJ>.>M#/#BMNHVG.HpY?S,4&p0W8#$rV<#$]35(L/N3#?xK;*)?vI#s8,f[oI0T4/s<s%T/n'YBhIw+'P_K*kHD`(l*0&2SD8ZkVpAKBQFrtks+@NE*Pi*fqV.t>`pG.CVE43'rs6H#%.4@+xs0qGDTe_8qMj*AGwb-Cg:=_0tchl(nlc9-GO(Ufl?NV#;6F#CO?,_HFo-OCg17?1f^e0FiB;02lY*38&#%1cuX_t2ojlENeUp]dt/5O+K^7oFKKB--VQw`8s$xs#%)Xo#%)g`#@idh#>Cpu$NqK6_J+d-#$PcH('Oaq$&<VwB6Zi2+AEvHD%ak`f4hX&EZ+tk&?#W2239>?E[`$7F=@6'-[TJe#?H[d#aShgpM$FJpM#[]26p=P#@%?T4&jXr9U@/c1B7SnQ;R_>Hc)(<#AZ&T#$3x6I`aR)&8DDx19a^N-b#W1k%mkj'to9R#=MEsO[gG-4aimrj->qKSq)?k1#b^ocY]pl&5N;Sae;tU'kW%vu?:x68S8;T##5]>$J$+w-VP5hG(:Eh4&vsP@TbP-),)jG@t._9'v15p#V?eJFhBFw*H*ax0OG+j##Qeg$Xk$=Y>cv%#)c0g1FEWC$;hmHGe25-B<N[m,[jN]%Su]c#.qe<Hrd9-A4RcI$S<*.C)LckD+u'a-Vp5K#Z4ZKBbP;e-dC+n#$]K=*aEu_#,`pU8>dp'$*lc&-wL5P)QsU6*Hfj<$gO=/0n>(6%8N'f#'%RcHIW#-J6T^k#vZiF#*NMXBS_/j#$l^###(>I(.%x0$0V.wrc.<lB8Iea<*B@f,#,(E/9O'7tC#H#(mL5[@p*;K&e8uWItV8S$#k=;bIFN1GM4ZUm,=q&D,hRO918a*@BU2X,EVi)(U;c9(Qd4G&u=GU_hq'gCSuiGJP6YZ#qU%3-EZK6-Fm9m-,;3xGDKksGL[=0?;(qR?83)9hes1%lb*jfDBSnoFY]9dFK[+/1:fvaKMh2x(9o0g)na7a#8Hg>?0XDj@C+9^#ukcm)c`Q4FVbq])64Lo:g@uK(fd0o0Fx4io7Y&,6bP'>$_c__J[lrh*l;GY#n-GuI7ts3u=iEl(np_d($?mH/9lY,.SXtB-,&iQ#?:Pc#mOw3Xa>P=D.o*C1;1rd]?fE70taqU0tWne/RfgD'n3w3bA)n'##tYl#k2=q.0hB:##-%q0MHE4B>/9$FJ8c@+buuG#nOnR0MDLj3HcD1CprglEeIf%B6$hQ6Vel.c?IoT%qj5IF%qCU.ttJg)/WgjPi]Qd4F_Y4##)(P#`&ki^N>Ps2Mes7#_$;T;//wm4/kbDeAHv3'3#WK(4b9J.>MA[NbY#ZIVjVasd/b)L.lHs05N4e&5;#.-w$pP0moOcFLvX@Cn56s/Tk++EhQxA[;S4AK9v^6^TRWo18TZ%#$Og;3>Q(-:>@4XA./pO##vl[0HL@CE5*>.(*k^@$:=fu>>,hFr:mDj;,VJ)%uc4I6*<A;7s2_hR?7Si2IC$52TwAaH#>-bBp=q&-vM)W-@I=t/S5#f'27?%FL**dB>S*%Buf<(H?0+%C3'FPCprElCTpkG/U,MD#+mHqBn=+U(/Z_&H&aiX(LRMS/PQ<j;ccDA#UU*fMP2QHFC6G9Broh9]]D.7BQRb=/eF,E6b*A&-Zjl<.9eq)#&IMWQ#@GIb`r02##gg(#S$jEGYBt-6Z*)f+L#dg$#0n,C5HJirh0b*HV=KY6&)nVopc2O-Z)ik,B+4'c)[^n2`uJ@),(/F-Vu=W(kK:i%NPRdBRA05K=r<C##$IL(3e%)#eck`Q;:G,/ps4k),(/1Ai5Kb-w7%g/Tk.&5^.w&3DTi(8RQ)A#%)B48;fl6GxwIk+Kmlm(;8kA$#CPb.X`i7#[o?u=b_K;%p(Iv#DaLfQ$k1U*cdqTCF?2g/HZ1aYZua1##=iO5Dqs'ZwVlw##>DG(9b?X-Dc.*#2MucH,*7hFLu>/#(]291RKrK06h2q#'(SiCkms/$#_?b#$2(d#%pK@#&#aF#&AC9##ZFx0i`S?#?jKY,(CuD$:WQM@S[Jj#&#jL#+T,GBt`UvPFH_=B=KZx#&#mP#/+vgFLm2-DiJ4109e6DE5?V@rc.N@#[wv44'U-D$<4?n%%nWOE3KeT-wT2m0?[RICrF`8@uu`=A]ij00p%2n$;X'$$Ih-@3N4NV6#J2Z$rrtR$L/[:Fao@OX]^YC'20I4-'BX.68Sl*BSh^?8mQXi+0PHG#L*BUgMN9smx#c`q7N&2;>r2o,)-5:/p2ul=Fr*==FrgQHGDUTMcGl=06kIK(WX1@$(VB2SmHpZB^Nj3RSO67*)/W>-G+73OBbT#3Erib&?90aJ%B-[###Q9#_iop4c>x(&lxeK6bUFG7obMXFlp9?5(8,g(Q)iHGa;`u&:o,A.(*Z=/TEXw-^'4L9;GOb<LZh913$OPST-E>.uB_23JTfF#:'U^<`Pd1.u&tt#+wd,.uB1;#.m=:6$58:QV7dk8#v_^-t')e#i4<.sp#Mn3FW#%#%MOb9M@U^0?<U0#ItlN33#MTiAw5-.8:A4eWMeA1m*dM6@(c]1m2<<r.MqI6^*La1m=JQ-^'I&6]wFL1kL_,1k_kc1jbqwK#gR41lnX8JqMms1pN$?pl#].BmcG<C,d<RIsp4'$;ABH#I4V>eSh[p%SR0+^45P<@qW`=/6N6s&rrQ??jqWN2H>dm#Hc:CBqA]'-=1338lr*W#5fII5e+am%OX>A`0#ln02DPv$DrQC*`[-[DW<S&/wWpe#6uTP3D`]==GR#b#@(hs'MQJo#)Vfs.':FM-AvGd#,#Om.(bM6#-N@)CPF%^(/+bS-<r`D3)*]`#%ww?IZ4sF`RCY72kXM`K3,.%6*u(='tS<^&T%v/3/F,4(sc-8+H)2:#A=jx12SnA%m=T&.ogrv)d<PL<OHG[F_YJc$2=L,M.[H[Gvl1w.ST,70#2Cq#$d$;E).Z^'P[VRDH@?T#YY?:)-qeF9Q4En89QDC3_7u=BShuK33QPIJ66?>6G[,^/9r5U4bhVV5$)v6)SJx*&U5[a/q08b##$*n-b5bG#'W/P#'9rxs*kZ./=_4X4K1B`08bc(GEbecdvqYW16bIs[vaP/6EoVn`67('@saq11O2'A*`[6,*`[N3*`[6+*`ZWT'j6jU#U^ntD-HwDa(kn86[i/37:-$v@qg?2%],)i6[r4[#wpExFM06J6]%;57@4+G3jOQn5)U]5/t(vu6#RLS&54qP06KL5)RA@n$2MGJgJOfn6j'B#4btUB(3q-h(To3N/A=8h%XjGdGtqo'sA>59RrDaV#$v:54Y8bN5C>Z2K#gt06F/c+'20O:0#2F$#(x[dD0TZH6[_rO08;KEHZpO2#$jh###94mW-hfQ6$74%6[r$(1o6Xf4FB8.#%B0$#.H:RClkIT.SKiZ##deN#/:/C7)D$<Hvg:V2iWmN),(*`#$d4G%W$0?]'uxVE&7)nD07r`6cY.u6+xr;G)'[c6cIjkoVAvgG`ZZ13ifeb&PQ)r6d;(0)Mp^*CgUOr>`w*(#(T109+La$C8#'gCkC&R0N%op0n%&aHw$pH#/)O=8qPZ60N%ne0K&0B/x:bg)7MG8)1B-R(Um;-(Um>-(:Ufd89eOiEJc4+B66OsC^MbbY&d;57<Fpq(9Z`%-?r7tF&Ul+#LF8rH&*'(5?IuPTPvgH6VL131423G#&7Y0#'icX/5-us/5-):97&F[LfJ4^tRA(]6[.<1(9cuj)hMsu(9lSi$v,dGItVdTLPQRkj0[Kc6[hT0bcj$D8$BA)#lf7M1;-S='(,b*(KUml##2Iw%Y+Oq1iEJ66+p=I-AdWL$?_6S/lg0Y26JvvH-o=]6bB54G'7>O/r,:aMIp]u26SRH1.X*PBQY%o(9etK2L/chdrQe?1N[O6q<7QD8qc$%2N$#W*NiP1VLC#00Wvu?20<ARi-4#d*.2eo9%Zm.I#2WnG^wfTGL]tP6b&&b8;pk$C3Xb*7SKl$#S'+i6d(Cu4dCMMCL-wv2j2<Y#(/1nGZ+Th3JhL77];E%FAj0t3/L%3#)4r#CqtF^I7W+&k+.shtFCv[Y(6U['jB0`'?7[wCg:ks19gER.u'Uh)1>x`C'dis5^.e1UiC@R'u+_lN-n=lHG[4=-wwRVert3?W?r[2fofpRUD4BUQUY,n1s`)]Qv*V(LQ=0ACPcxm#@@Y8F1#oNC^p2l*)$Mp##,;<*3p<U#sW5shfpgNF`WF;+,CcC$(1e$.tD&K$s,Sm#7Lj@bTj?W#$2o)=%j['o50ES$W1J=#DaYED6]2;###SB#$Rb8G]&+6:2U5@6wgdc05;/kQ>?SS,Z:@?*3uB..#0^,%rK[>##AdW*kQJa#bdgV07F.EBQOJuCK:FdGBGB/)KeW:$LcNaD2De#_O0LWC,>is1;,jb1VG9S19t(quBkhICd;5t1f]Op[&=*>@Ut*6p2?'$*O-#V40C#eYd&ARUH(KP06^sk#QX7+:.uY'H%Hw%07.>N.8Cl&-++f1'Nfe_(q.4c%LGX3;ja9VJqTl&0Fh'Guw@F'$$wl^p+M75jIk%F7#>Fv#vagip2QL=^pP_NBoq5x$;;CB$B#%Q8V_jc$>X1V2-(='RYEZ(7wT='-*Tx+$%ZWP:nHBF93)$uD.jqR$tS1*-X556$s&8b$h%S%*orwm.*)Hs,$cOWjGjFrSS/:K#$m5F:jARMCL%3i#$tApVK+6(b&t.K08'=3+^&PM,IgRI#O2;<7(=(>2Rl2hoH0%?RU&=o5YM15#>.Ql%SR0oRU'^R#%)@q###;+'MkvxAPE0&@S@8sq.ZvkCSudp8vXA^1;-p-/%<h4<g(IE2jG__#ZiC@(JGI&(JFp%5-91J6bAfn'4a8O8tE@[.`?S6WOkb4/=%8mChK#9CXlRPb(Z4%t+qaVH@9C[8vbLZ2I][VY>$4K.#.g+Cm)]SCh%gcfxj]p551(P2uSo3[paW^&5OC@1m5jY&o,e/97/np7@O<n5bjX3CVkhp-rk]m'jGTH*HbMK3IEq3?',-DCh9.D-<)C>F+ums1l?l%#^;&<($%jSBQRlG&8t#J.l:W9*DHKK#**J6FP$r)1JA#mtF#%)H,L#3Ch[6HFB'X+6m$)<9C4-[1f1DNe7c.)?Vrsc25B,>S5''+s`ujI#/f#`O^<^nGOo:8)dds_-VOlQ)2=Hg#G<GK:um(#9if.V#9bi-05rD8$r2ktEJZJT$>^dfEGP^XEJ]4XE[l*uPw,p^6%Q(n*5-al#AFsg4^MgGJ;7v^K3(0F#&4Z_V,._L(KiNh&5X%a&YK,N,x:G4,wc,p(Mf$f$;_vU##P/^$tjqe19v$`$Mmj/BA3MnAnl]OFAeKm*k'gr+b);b'w?]`#gw0Pt^m.cQsxmD8s%88D+HwpFM`J+Ds&?E'6=PofP0%o-+lb3,$6#eBmxe+/94b7#),OG>Zi&w/ukj(Dbf9TCrFlC1;jpw'ifa='pQ@M6-'%0#3Q4rm=_NE86nereSnDq%fXtM[rPl$bxu<+%=xRi>YGOr,Z.dL;Kw26JQb++@o]p&1pk)L(T[F>+h6#m$CUt$HV=g_Lh/#*+xw?.&JY;aCrkK%F1M#)-w9mH5_e4YJ<.^_+A=E3CS1^G0KVh`Ek9Nnih0=X4A5d`e9@]s$[G[?;1p(j3`erg#p@Pc+(Z;$&6pG4-[Rrg=hoE:NGSjoXaJ$_2p#E(:.wZ`40i#`1Kc=5EUbWwUhFcME>pM)mFwuH@U'5V6xpW51>sr-I<9)u6vtpp7Z(W75(-_kGEM'85H3Uc$prkD>p&sA(Tib@#%9646(iFd>JG*sCPsO'(ka63(5@Wm#1#8>rpp9*#Z2V0$9.BmDE$voHS5B6?rj*K(ql`O2n4eL.OnEm08:-D(q5GP#SISO#7jZ(6*qY5.'YkrQAgFrFj3=U8Z=ev3$1;#DNi-%>JFbo=fbvq6bSJDFjFus0=d.<#%`_e#%D_g##7d@*-HN(%liEt78XpG75Zh30;.vF.)KRi-;TkHBvVeCC57-@g2E;F>HL-:B69.n(kHPs=+=M@J#t/m##9)P3c#F137lQJ=KajxJ^ud2$oam^Gkb%4B6@0CE4ea]4+&K0BjPrF)2W`^&A9?>2L#=nfrm/7C8YRLCT1U+Bs?LT%]nPf0?86g-`Fo'DQuXU<&3mI%,;K>?N)(LC#d@V3IlE'gMa*j#)aJM=h'B'78+g.78*g?DQvE0$Vd;f#RF7n3/(YlBU<qq-Z,CZ#e]VfUA4eu+%vax#^aM^,YSb=ZVLl(#&/-w#'DAI:q'iL#[U*,om$VQ$2YcPGdk-?6EaVu1pkw]1/+;_2QM,<koKn^*)$B57q@KI#$t#xlY1,I#;/JgGmQ<I0?G2&#kVc:>6j/kC$>V3J4pwSBp+wtB[$Nb$A^n9LC<-u4Ffvu6[hrV6%1`X6k0`wv#1dG4%0bp2K`*53I__l(U&%X0WeL0##,r<#%fQg>7N5h)GqoJoP#PG0Srt%tA$pH(+I:A+J?l#%qAx)19t'n;0j=j#D$U)/uYtDlYa1`.]-RO$#r;BDO_vW#&Rft,YYcxJwIST0:Z@82hEiU+.TvL@#Z_w2Kb&O.X5N%mVC[#$&I/SBjESk]0M905v,ZP$TX`ahf]BB#+%Kd6(&?i,,8X%%,KpN:J<+#9W9[`6Wb=o0MMmFAPxll#:BY'5D7Qn-APO8GwuC$<)16g.>MOx2Ge]Q&hjE>arh:__jqECIf6*_/95C=gia&[$@V2dHc`Sb#_I+hS59sb>v4=_Cm)03#*8jMdtxkW@XT^U:@]TvR`qAE0=&dM08Fqx(nC8X1l%=^rgQ>#9ElLNH>I)Ge/b;%[th$?1IUI;12]u,.sHodHFo-.##6YN#&>fq$rqY7)cm&R#,:CB4gKvAs`/b]#ess%[gR8$+%xZ'08IPE%v0D#6*6>>3J'2Tegpgq$u1@m?&Wh=Ejh<j(5JMdArrtw2K:h=m*;nx41ph'uV^fRH*(v/1MMSjCljO/(S;sf.#0&+os4dMG/OMf9R_t/6+mKe6%(JF.wo@n6:D<&BF=<6Yme@V@t9>?q.YLpBoAIJB66X57UR][*+)0R0T@gM2mT1U?x1&C6*J<]#UsAU779G,:5NJW)3p6/>`as$)JxLL-Z(Q[IV_R*),(R3$Vhj-I8*k2$%>?K&FL.SAE#;hB>16r#wnU?:NZfW##?t6%r#B@N)U-x##^@n$aO,7+<UsJ=(-/FgiZvC$'a`?%87G5#T<cQ##xF$#NoW`oIltp##=SO$r1PDG01/-GKL7sI@C7;85A[A#if[XB6o%5HGDKg>'55DFEEIQ(t,b=.(i0H#Q64#6cG%iC3WF=C(18NMGnvSIwFPs8xm'Z;^^+GlvU^E3N4O#=,$pA;cnbu(Vho#(l%Wu-'1p+#(LgK0<Rvb2QV5sHZqvqI#2swHn,=kCJ7Tg4gKtYCJ4w(.UGM]#w^nV(l6_p8q:DH,$.3l3JCbZ#$0Sl$=WwDBK6)WNa$av&9[DP+%v`UrGA)535Au8_f[UY2ith0$=,@L_7[9F@v#$o&5CJC$X*OL15P.$v&';D[^(F.4HK'59mu?1I;pHuRE$#$=OxbT46`*4Hu>vTmj]B$,w*[c08E6=#w^ohOBu>gQaP._CrF3'<)bCQ&Q0h-J8cKm+^Sj>#xms#$#DxqcN^)v&nQw0'7D'`2MD<>%86h@DmlG)12_tRC_:^DQ;[g&erEj=#(CF68aU>L@(U?uMgp,?#&@_e###Yc>ZRPRHED.ADRF,pEe]6v?ri5ZRhT;UKN'$A,'DtP7C5.R_.]aP0M)AI;MSi8;K)il2LauZ-+suU&Q2:A.v?FAa`88U=1h)m8$V7n:4QWZ0DjRp/PI>;BombxBM8EG$s$r06w1'-qIuWnAT9H6+A<,X`G?`1$>BKP_HD_@##^]=06iH&#[`caWdsWQ/.Dr?qWP@HHAOA;4E`->)K^e0Z&:T+2i*90HwBl$#'G=Et]&_Rb/rRg5`M54s`+2x?ri9ZEa4T;2T?&/NDqL:Z;hw+`G<I%2hwt>Jr=Fl##.H+)S=,U$gJU1QrRR,09#t:22>]<#>cO3$tOZU%9&Kn%n_G1J4q(f##VWx#a%rR-sq>u%p&IB2gt=x3&r$&%SW<*-DFv#%],J=@t<.I%::fnb,j'd1;gxw(4i2--@.Th#$bXt$W^%>2JwKXiGu?<U_^&wB<Mt-#(F=Y5H-/cW#?89MG>:Y.20k74UO-9/t85%$fl2U$WRIR##@EW#TNpFI<$Ze+xrvO3G8D49e:-c=c=OqH?h%9##67wCJ4cGHbaO6CNN'1%p4LpIlV1G2]ve=4DOr#?;1Gs3(tW_#9bCcAMPBe4Av8s2]Jro/PI@J3E6'A2i*Mu&9'Ul*)&ua@tBDr#,*d/5`LS]&9'J8/lvCV%Bt,nH?i6&,>8Z/-$BG>n$(`53IcLA7txZu.74oU0MEkQ57nnB3emsu(4_j^&cdWAg2`p7#$jFSR8'$G#J14EUfMs'N(k>J6*Vj1=A9tL@R_?';G@h`;c[7fUTcrx-@h'ag1[H;3OAh,5L^[R4bI-b4c?C>(l(B`#^`Fx89d]J4lq'BDGCi/%p*3%&R&qR3f^'1L.)DN##+Pk%Ql+M.$%'$=dkooB<<SS1@s@vH`wNE(fcq4(fbrcbCK:+#%03$#$1c7,/l-u,*EOA9T_di;pp&d;pp&H,bk'c$On/@8PTND#>?CL.YD$Z#CA1bKM?jd2i3dqa`HZC%:s8c&s]^15,iRf,FOHp,FOHp)4?Cf*l)`c)La6$&D$sU;gu1,DcV=YDcU@[?*t^E0RYqw#AZ?<#Nn#1mscKo4hlB8?+'dX?+'dN?+'dSF'Sda3*ZGpE(qoK_/lSU#&%[W'PL0U##/-h#t8j:;I:5c;b1Y>2Q7Hr#[@_S>2./*]mSnF%q-o`170NS#'XR0j)r&Bi,vDR6;$pUA?B9mBsvMU&v*3i1;l>?(SD:7#vl#5(JHdJ4Fx2L(U#JV)MJg-3i&:?idBn/),LgH#gRI3@v%+&$DIN82evis,>8-9##qFK$UMX:2,$Q)@tCZ:#(A:b4WQi=08H(t(rqSp&5*nT]75cPAi51?B5wvXE)[Escj/g;&lmJ4%pVu1N]Cwr#>>`_AX+kt@EAO``[[Bj?/GY.3M_/t1qM;i*,.WR##&6x#Vn028VG/nf7'Mg*D?Q?2G=3<**P.%'P7>Y4A6dgQrS$2##,3k#%iqr#(%]I)c_6O/u73-KGvPfBst##Fh-/`>Y`lN.C)+C+&9#8]xTg4H*1s/G)9G<Hr1&hCO0k0GeD,*185;019Rt$/U1b38p6,_-Rg]79oOc$16MXP6Z+T(2Jv2m$X3U@Y$21:#*i>w2Jva&#weO?_/%DO06i)C$;T6H#*aFv)fT.[#%)U:txMh*)R9Hg#w[IVDQYct32(<*Nxr)o*Ks&%/p<W%.^lk[#@p8w'k-^(%7'uw_7YX)##-[e%R0ru-ZgYi##80b%nU+x?BG[_(0f4N&5K-d$m&fIUKoGY/ieqj%=fFfj)1Ix&WAs#8?MB`.'5[(#vh+R'_QvHSAvf>J<q=Bk's0n*DEqW&31S)$Z.<,-^(bPJw$8a:so$TBQ>GkBM9OR8jn*((*-<(JpkoWCNsI<BQwuw.UH^)/T)`i'42B)Mv*NVm]wd[2h$v^#I=;3^_?VhH'p8[+tnFW#@D%P##?u@#]O$g@Bt'D+L50X2h%3^,^OHsJ>*US`+d2&-wL5J.U2wk##6H2$=3_L<R`ehhC&&FBnOkB0<Scg#DE.a&lj=*O&2Kk3dorx'209su?i?g.p9DQ$3:vaCpaVD1:Pme8?u=lFs)BNF*`AD$,e^eK3Scd#)uBr7(:dsG_Lsq2j9d;c&/VpF/&`?/560Pc>w5:'R;ZBJk1T62w>kkEp-ldF)jUTEDQ^]CL`4rP]ilitMlMi##9bf#77SDa`7;89P+9rQ<%_).;_h,Zu3ko#Z@@?(W*p3.#09(G>I4&-vq]:%SSgc%w@K^0?8806W9X#+0pgi#94=kHvUHMFXH:/K>Keh+)ulW[_[6mYIGwKDFm/YD07>L217095^egG8U,EFD=f<F:fViC:fV1#2ND@$0XkYX&RugEi3A)<#%',&Rs:$=)7_[)c@`e8c@`adc@`e?c@coD6cnW`-^.kg$KrfE3/V>p&@)@B@+mKM^lB.@7)AHf`6H/D06ge706gFAG]A8874XlMCPe1h:PiG7#vvu1-@IRT1JLF6$-_XxfPmOj#$tN',T^C)/AXN:FEpTx3gA,j#&QDoj-]F^2M=2ZLfL_*2M<N6_f>p'9HO@?*`[d;3.vb.CPc#S366Ka)1=5v2MBPA#AkHkCNZZB)L+#@)8S(3#Q:/u+]W7O,>K[l#c:t&78,Ii08<u]#4C,P1f](T#>@HhLU01Z-^)W+FS7+vEUrxEFGXj=05jxnYuQL'2T,TQ06KB4-<soS3d%6>:JFEE6A[-lr+TMm$72$d0p=N,#3d+tt]/^^#&H)Sc]Rk3Li[/<#$cag,YnVY(:ow?%>=ef.p(xk3IWZH3.b.o##;1C%5IvoX%k.Zf4cam-Adq__2,nJkSgf).po@$Fi_,&)O1U'#-6Lm8VrN'HBfp(Fa`SW3gv6;-VYiNCk#s=?*5@/#@):dIZ8b+8?Fa_$+LlA?*6?,&2ZA^6,k_K:PjoQJ7SsM6c,:[6`f+U:sb]o?0VW/?,5t(I`x=R4f;Xf##21]#wI=4>uPab0MDLk##eF^$[2SV'ifYau_.fbFEfqUFKSlP/xPN##'u0x@S?jV##-(@%^BAbFKSlP#>F?0$.T8c^xwc6BQxR106eX'.>0E9?rdDZ@>dPLJs(hX)RN1Z#4)V&AOo%wBNH3],uo<l%pH/('5@MP`+YgN*)$J8#%'g=#<W((6`IlBCPcKm08:nXB8K_&V`s)1BQZD<BkVx33e,(l3I#3doq;f)7lbtM$@2aQicx`S27P3ViG>?7/,Nn^_Gv;*'7FMJCPDkt/56/?O^REZ#pF@kf8#2?08K3k-vC^:;1a5CBMkUlZ&&I:ac[a]5B70D'9+3LElgHu*h3bD*,c/[#rN31H?@5n;Qj6D7'cT`7=4nI5_d(^19S@O,(cUo2M3g4LCu03AnpY:4K0j`4G95i#5=If4K1B)4^rd#4^c2O5CQnk0mB((6vIle(4i*W^uIk.6b%xg@`*c<]P+,x6XBcn0t<$k/p:T)B5IWeG@s>]7'Ai,GHF$OTM.%qBnXXZ*e'iRB8LW?08;u/GujWt*K(>0%.'BgDcMUm5gjx`B6ABE%UD10%p)XJ#Md+`'ifd_/T#=GOKh+F6ogvmm>w%5#>T.f%&;Q`2f)m3#1+dG/$C.NB6ZeJG_iE.@umo*'21<B5CH@4-[wjcRrtkD:+[-n7W]YM&Sd?R;i&5.Ji%klB6DlG.>Mra]9qsbJ*6jA2,$<U@@hs[gPEL1/TUpv'O(vp$>i,?q.[KX7<H+h/VuWa#&v38iF7Sn85]>o&eT1[hMwj1/5QFZ),:<)(W%4w#Gh0e=xgKj:R,nfF*&kr4c=#E=LT^25`M3G#)3,)D6`#K=*vH^5(=;N3OW@P]kwQ`&PN=U#&Q8Z.81xZBSAq+6Yw68#/agZ2L$6GVj)c6FDb-fC:/,-hi]b0DHR+<#$k0;QX4*-hJ+pX-a_J8Y>d3>#'L)s5D()*8>xY54&'?mDG1&@#v'se(;]O-#O)@q'S?[jpi`?E.>^aj#2N`96[_oW1;PUSuY,,R=a//oCj5J@b)sir2JlUXK#g_+2OJE/2iD<=-^9^cDe>;H#Fx`G0orGv#&mJa(/,@#-;5,7(/,@$(/,Ex(/,@%2G=-u##Ipt#.d2J=,AVr=*H1H660$?<'UGO<lEFXFxt11K758.7B]eKp3::Y$DT]t1sMR[ARAo3&T1_+K2O+QBf34n4_.pO#&ALL##-8I1Z]hm1TpK8*k3Vi$v/C@YX&Rp'MaRm#0-wRNK47o%U;A_W(w,##-]`dDqT/*-$Y)[#A@j.)0e_MMI.H[KO=l,Dpsd5+*bv(%Ym?tJ9<Dh.;CDZ.;LJ[.81`9-#XjZ-#_PQDMa]+98Q-)Bp+9f##D(33NXb]U0IeC.pCJF27-i_dt%h06g?b',4,DM3IN';Br^_@5H,gn%0dqU(/9F-6EuTx(JGC)cm.bE##JeC#3.:DWe5AnL:RXMDcl[`4eBQG&lrDOBR4C,CUxW*Cqejv16Euig96g<Y1r<jJ[K$QCNt[D5dvagaDrQ1IuiEhItYX.%UE[hHu?E42,8:U35%DiMcF]g*?G8@PY;?b#$CrT6b#rS.]qLdTOsVc[TcOm<b.:`%VpO3#A=7/IS:c622PG>X]:Ug6*Um'(qONS(9S*N%ijcf/wPZ41g2,,30Pd)oj?o4#Z(P.(N^wh#UFo9.-GMrB6C^k$dR:4/u=P#b&N7;`,FaG-[7JC##J6%$3[PD>_?I0Pv,#+#K6Fx2Mbws6Cg9OC3aF_QAgqO6d7>4Bm,8V7#>Jo#-`^m6$5g35J0LOCPc[9N,126X'S*(6]xEe#@2T:1/86^.)fD[#+px(C5,?B#uG'IIYM9dIuiHgHA5tcCldENl4&X'3)7)sG'Z#w/wHr>pSad^#&Ri)5*x']4*J;K=*daW9<Fne7aB;^CvFp21U)Y,-?k##6v4HgX,8$RBMO+oHnU[cCKe?WGf5nR#D7MNCLeELg]SQx6Zj-,#;/3FCO15X1LL5_#Hpd019W=Y06JrS6*EG,/oY07It@gYt%QwZIWg4WIWp:XJ9GFYJ9==c+0e=xfw-kU0X37Y0tN@]0X3-3#,rT,]W8JX7BWrf(5As_#OlVr[#Y;'79s$B4KW)DJw7GNnHI#lBSf>I$.bI?5dvZc5e0;9$=3elI<6rXE)LqcHE_i6C;+,n'6Z*`1<-Xs(;+dq2RG$S%89XG17'W?4&#_d)LZS:0Pp-UB@8vJ0u_rLC=PO@#Bttr17j$16cHj_EjhkYEJvE+H[9&(%U=(v##/[x343Y?(fd'&/7Kgo3J&sPaKa-/B8?xj8;foGB@;Lx1l@-XC3M:l0Q9L?5dn5O9NsWC#>IXX-EpUN9MevXGHb5d/x>>F/t7Q9BP&meC3rnv=NaV86[9DMq.n8v3.*3h0o(h60Wmo<1OijQ%SSb5BQkff7t8?s2s)>UV+r#r#(A)80?O8vOHLb#74Lg7UfDsG6d^7b4/nR1$<rh[04Hgh#(xlC09p@QBEh`U6b.M10n,%(4b]^CEZT%N6[[1;#6$?PDRF#iI=2n*(JHh/FjFoq(s$Ma@t',KIWU//-apUlq/+fB08jl7%S[C9(9L,.)6HJa(3RFp-cOKU%UMP;O.@]O5b<dZ94K_M0MQ8A(ThLw#)'Wn?waK^hf9DV;0p6S2KC.;omPnW##b#&#0VJ<@'(m96]xwj?VKHo7t]tdJ4bdtC'5)`2n^Mx12?lp`dwCn#*_h,8w,:(#$LxUJ[h)3(97kR7_?tVC#=)ZHtdrX4hJxQ(/0::6'v)I<NSF2$2dmeB8LgD6c-WmBPBu(6bqKk8Zc.oBShgB6`U2X*5$Z-#Y%@22g0FE2R$p??t$FVDQwdnQ%/s)3ExJO&nTYxgnS4Z1j35^8wN3XfBxV:#$ai=#[BFZMN;llDo$S?#[%.2PZ]/0.xhC/6[qPT*dPVBR925[Fj%0b3JV.WK9)/.HcORCGa*vE'2JXeFk*Lk6_KFR1;kE$#-IE3BRiI83(t?rVG&eL-ZUPp##%n3#?1],/PSKW2MY#:7v_EY0p7wf33G?``c:WU`c>?eGdd1V1TrKs[uvop1Tsnj/vs3=D3,9-QuKp:>w(<UQ&.Z;-^'O-/E@kW#==&I2:`dA#AmG]RM-7E02;OdtxDI2r+Y:RB=N&[CW1]PB6o(5Geo,c#GiZ2&llU3CVX@j#0fs`7'Cwi2hs3T7X[%P70cSQc=s9<#]R>pKiTWC05WlL%W-UERt+vp#^1awRS3`q(#O&HG-PK$K#gAt#[T5U#_fIh4dKSe>rmkoLn/LvkQ&(N3.lJ-#0e6m>cDwP>]4tas&6Zf/>@W>#'r7vNIa1nK1xRW5D$ux%*8NX3)(U/1Gg2<'J9Dr##4,<$p%jgmV&c>1?CH#,`#v2P?+]o$Gw?fpMlnK),B*x#,.$GENtg%?.iNU6Z+I<O`dRsqva3?'MKeeBC,]VH*rO3#%K)qTP-Q@$B$LL5`T2A7Cw^g5YMZ50op[5#TR>g5uif1$<reZ#w`O+(hB7/(hDJo$$qb:6VJ#G$VUV]#$udi%]#]:BoiXO#v%F*&uAs+gij9^#$G5fBof.Oj7q#v6^c<,=-lPg6ak*sLlfWZIv.TjIpdVR;cR5-6tFHk##.cS(,dS<*3Ph`$Wi@R]AfNbTS#@oGDm<$$B5.Xrco;7#=AM1-w7V,5D:8IHEANE111ZuUs=@,`WV/$6;<-G/VxJ/'2p<C/V]8,'22J2)j7Wx8&/PxD_lh7HEHQ0#K.*hGAeM$BPwpqBPwpi6(8t24PTtA7pBSt/8T_c*'FP#o4__S#5AG8/94C>IYss%2L.':'MK[w7(*s61Oi01/91dR6]xT>oP#>A33GEg12`5iB<<SZ17HTZ-[9pp=AdVA&B'QBTNW(UDlR/8(5FSP(Q'u]#KHiK1V$uF/=U*YC?Q;**fc0;D:rM)J&c6F(RALB06f+54f6#6fQcGAB8L&8>%N,%P#,(])O6r7#j.IUB?NVFhQ<YlD-7TZ#@.oSjD'rU#$F6x2Q8a@#uwQo(;w=a.Z%]##>>f7(<*hn.#DJ)#Fp586d<V3&nQuq'3o-j$;opM%(w^e4A@,L0A21dg2sZeRu;3+0&6Vs.VE2A.9PGa1N[&L23_+b19H:g+K`8b+h%Ac&IhL]=03pg#'F@fK'tJGK's_r#v$/HVl8(CF1dnX6%LaQU-A[>2LI_'1QGu58?Y165^h&`/:K=+1Bexf?tFS96xI%E/943h((qkU&@)LFqpc9g2.Zm_/PN0n#A+dX(/+kC>@T5RuuKg%35BIT,uopDt]:c>B<AbJDMsVYG(swE#[L&r#$li>$@OJ(BKAl7Cpw0(/wfxd#(oJ.C<9/#EjgPJ(:t`&#^9^I?;sVT1s5#/)hDjw/r#:P#[V*E(gXC<(U6lC#5JL-[T*pxk[C-+t%ER,#+nW&5c)@=&lqie'vd2<#7L*+0N^WUC62f_3fCY((N)$h&54hmK#ftC#*pmBC5HH51qhvBHEiP:@qguqESUZ1?#DmYi@`&nA18L%O@r9[5gMxn'wirF#RCN?.>ScR?W%ZR4Ae-54Ad1Z4&3Et%n(T106MW@B<[-VBShMV<37_fBCB`AS@TsZB9,ireT]]fDMPg;(Tu;`8s%>t0o@PlF,q<Y08E=XW-jjTCg:=fIuws+.>MJk#.xT]12qZS66-5I6nVoRH)^l4)GD?*/6a+SIC*`%D^ThM/w0Br(q@=Q3.*mUic=ZZ$sxO%/KP4E3Ir.##a8Xp%8JC<DcL7S5uiB(DcL7=I]Hlq#EDQl6bGZS-*mK5'MN:X#]kt@A]2dn7Y:_B'3n7Z.T8vW(k%NK$'>b<0KnWq2lGi;bxVlp[q:F3sbf_fDK'L*X^#8V)/Ll?%SR,T),0o'WH;e/H?kLeH?C`/#0qs(CVFp.B89IgQG#H#/xjnd1;12'FbA:fD0hLi(JcTxl$:h,1qfqO^iDAJ1s:p^f_+XM#%9U8$#Md#9M?#6duWQ7Na(71(Pg].(;V>C#tSMrjNsW7#wg*M4'mDs%8Yle9?;LA77Bi>;0nJB)GjGH/92V3)8wIt.)eYj:/5S1:3`):D)`W$j*.5P>>>b%*)$AZ92K,5$Bv*+l#)9w4AT'm%.XtF;iG3W:;?lRVG*fo#$CrP?*B;b-^ihjPujd</9G<[%p#KK.Bwv:#(/fMG7F%f7:6*w%uOa#5bX1EH(Q<c1jbq`#$<pj%K-9A?2XcLC9E6H.#MRK#&vfaMckxE)GEvTB8]14giid7(K;Vv(7WEx(6/np%k(x'IBYxf(5jNMr+NW/7%7`T3.*EE2he<EB8NX,F)[R_A5*A:j1'ew/PJ@_.aZ'1giL7*0QJLT#&Z'9KUNRm&/,Rw##YI1RZ1npHB)<<=.F<GH,&jb)6[wd###&$NDiTu8TYcT$4@]d;jdHC8Qm1+5.scjC59Zu-[pAW#]wJh8PB]g&5=CE/sESSIB@F@(89&[$`A2=AQp[)%9>j0$W2c(Bxjs>Bxjru#=5Fro7=8hC-WVP(m-%<(m-%<#;ZKlo4cU%:q&dY%j,Ck65BgX6+dxx++3sl.==65%8tE<1krJA%;Iw]%O=-Z6dX;58?[H,FKI`k%8OWX%-Rc<=JHeT$?H2^b&ah_[^<,WD0Tn@Q;)fI#/$%l1:TKaCJ>%G#(&DI?Y0@VEbMY>1;#^l?Y0lkZk&tcG)'uA+C8sm+C&aTe9K*]<(r15#AtQiFGV)CG`_0nEm:,W:JF9w1r7j;_jFlTM,+/*'4?2O)GTAW$9J;oj3G8TBQXii2KWGrt_*R0/GB3N_J&Xl6+g@t6`rf8C:JMRG`q6L#)@JiFWCHf%f:4Q3))-@6`rtu8x9,#C0(CqIt>KX@SF:Q-^2m#FA0mc-]vT6.ojU[#UEPxG`sEmd+GXE6*NMs1UpN[6^a1t0Wvx@0X,`R#sdk/v%d0RBSx:9a`nA^&76$bIpRVU<s*DX26T(V#oR2B(L@Xp#vWRl06l*7(qC=>'l%PgI<^A;6]w5),#/AT#'2j=,#/4h.:#>dCJ<Jl06/Em%p%=]#k[@s/u480$QBCY;HXP[%owXk,%_ig[x,=:2Ks]U+AN%2(O6Ts-?Unw%whbY5f0Tn(No;?(qDM%,e5e1&OduD1Is$r01dUm1I2J-06iM>-^C0b1qDC3)83E;#G)00WDX;'drbXm,jCd0B8J4(5DN<1j`;qN(#TL9#I>kg18>%P#].C<#^+qe##cRk$rr[H-%3F5%SlSc=2SHwCq/x*$n-hAD,14N#L3<Q$s.=]$=,H?0?7b0$9&&k<D=7Ft^5P&$'%dn6bNo%-*siH(K=LI%$_n.?<.PQDPRVaF/0.iD2FS-20jm@&5EiRp`ofoEHGmMIX#O_It>heIX#`8&6;WE1qfqP8QK381s:p_?<.uL@8n6+&8t#J<)swvX]`AkUqE4F3.svC20;.V._jdH%Xit3H62Ld4FAT33Iu4e)2cCv&.K.c09dkF7'f4k8I5j2qaKTh<b2`;0OA2m&6r<U'OQ;@Y$>mb*aRE$.vo%[#v.[0#&FBI02<,,p4.lK%p,&f5`k?G'Dij+$>XxC%q0u*K,4lv$W]M'Jm<S'IBt&^<(oKk?L(n51;Nsv>[&)#Pu`N1#x?`H*GZjw%q&kV*DwO.8;hvBBE<Ea(;LNq9M?bl7-u1_ZVNn7B6#@U#2VGU6`f.E6b2#;'2H`X3.k/w^i]XY*Dg+.#a8rG3-xfLZX#6I#JlMpFECWABVQSOG]au(2hZtg0X)wY0^t0uBSvRh@#HUs5_u2(,eBwb0X39[#$uZZ)GPgb#TBhOL/.ha+AKc3#O$Yp08JP3#(S,76G+[LKKUKZ/o'ml=*,0]2h$[Qd=xJW0-Qk$1H?AR17;R;2e,0f=KNWJBRN=)5BqZIQ[i-07/x^l/94Qk.'7ap#&?/v#%@b+'NDMa#`0(GK#g]A+^,TX$YKa[1DSc_Jif9N[s2:.+`+uAa(ska(Sn%n2O@k+gTxAA6,X(5Qd4BLB6vfV6,Wu2)8TTm(S]*X1m#YgL7i2O1;nV$VfBOu#&@c-##Z8M]oiAv-^Ten1sNh+*5WIq-dIZK(JP:X$k.Vf0C0guC?w'iBS_O7(5kxDBRO0NBSq?c-;4uS#Kx<JCPZNT->[7[%89*QCPmY<-;4uS/rI<4W+0;$W)0vn$6T=l1EZ[(b`2/R>Z4_1(R,iE-#NHl&r)1UB2JY4l>)]EQs>,_?<nuFa`w*[%:a8p.W/i1>dRmZ*)ha]DL+0oB6IF=#%LSn#';VRNDBRf#.xNrG'%/LCZSp>?h_S#B8L<76+xOY#OG&h>YcLY;.+BdS4t5m(o(]5(nlP3(T+aH#T*Pg1:`a%(82(=#G;6(-stm:18I't2`lMN=Z+67Er0pZ<)EX1Cg(1ID,C:;(0M9)Wa0(:#AfUvnXP;^qfa,;(V.J%(W'E])3FF.#4s(612nf44DuehmV^Kr17OM3#$1f>BQ4#fHs_5O.:Ehd+A=MlB8M_U-[[L+,YSuw(46hA2LI'H$VV,L3`U.8+A<?l(/+b2-#Y?HHrY3SkmeK(;FiFlqIuwl6c#hVB896KfpbNK8s6TM0kZtt4lrI4BSf.XC5Gx<-VpA0(n1fP432gROBD[&##*sd-[f+3#(94XI^NTT3`V<RK#fb3%r,J106K@[6d*<aJo[`]CJ#s)Jq@QEB@Y)'Fi25#GvYG]nqvQRn7niA%B)e30LPrV68Eo%BM8P90ME#'+A<E_Fxs-#2gMNp0P(W3#$k<gO]_S'#+Yb/H;tw#H?JfP13+b/+AQtA/:Aw5#]%7-#`?KN<+,dF<+#^4_m)?Y3jOZxeYi(h4K0nQ(fcGn*DL*o.X63/7q@-?#@p^=##ZS4$tN_t2he;p#%p^+#$k#x##$&&=3,e0C3=K<#5`Pn4K0nSATx>p#&d8[(fcU.0iaqE/Jg7?HI2`@/93@H8VCB(8U(5i/934a#5oR@06R=wm:`f[0i`WeY>_n4#?j*`12),H%;5cl%qKjR##6hT*1O<=%XS1x=F1$U0lCW0#$lax7;bZH1,KdMQrRfx#`XcDB<iMC+]Vw=1M^h0###$:#$ke$##1D$$b9Y[3N3gv-^ig(BnseY9nmxFXC)13;cbkK/A>RH6W_&[.Zf-K0O@Gn&>4'U1s4(-$@=1R@8Hv/1[PO%##oW,(6GCt4HO$=N(b?g6<VK:,IP^x-+1q$'5M>/#ZM==*bK^%o4kr?o4kr?o4ku@o4kB%#[<@1'52)r$$fVM(JcwgrcA$HjD'NJ#$TVa1m#h##[8sd#x?^9#$KP`22>q$#Ydu;E$GEl22>pv#Z<=@E$#-i22>pv#Yvx:E#Jfm6'+7.6_SmY)6J_D$r-Fs'YkdT7du<.-rm:KBZDK),BxWg(m-FL$_B(F,Ana0/6eFN#aNAKCNc/W(t+tF8$IBm2Kj6(2JlUJB2]fZDn%6($D%6'd:gL<BkLeDF1<mXC`_Yj.X5TW##2&9CU%pmHEftF%pN7<.XEvW^1wT`Q?Y6I06UKN6&v+b(3W`rq/5V;0p9@nD22Sf8Zc(FB6HG^6+(00#%MYm)2s*ZC3MJSq.RQ*6G5U8C3s+f19N9tGHfleI<w0^7%f:QBmvM&#$cb>G$eFi1ONgSFe=`-06)GW2i3dC%osXbCNk6PCO'BSCu&H)GWZ=QCdj'YClmxs1ki06An>ocVc@+.*DOtQ2n%Ip&,TAVBQ[kPK]?ON(/[`/2L7BB71)oF6b/,]$rrJOh.^&sB6J(&0u_rJG-,>0G'Yk&0V2e27<xub&r)<f4,>7g,?uFp&q$4Y7<]cM1/,Aw,Hh6Q9R'wt6hD@'<^%=e;0ZQ:I-hvMF8RY*Bh76R1ki'>0dUk7hJ'P[DM^-4#[RROD-[-Ko4Wv,6;@Jo#RNu*rI*jcC3l,O6WtIp,(qZZ'MK1iA7RL:6bo[O.DwdZ#$W_)%`OnD1qgEgB6[:s0Ww(K1qfd(#R=hmCO'dQHw0LqB_?J8CNb9A60U#5BnVxU19hwe.'>dmFxhw]%J4Ig6*u$?(:9B4*3h)[)TD#G%<imYGB[MLBnTosDTW#b'I=;;#?:iQ=]_#B3k(T^'&t,H7s9E,Y`WAR&]W+q6b8fg6]-2gI'#QE6+O%g(9Xt0#:0CSkA->b-#d59JZ`0cFKek?6`7`OkijI'6M>D&eqkQ769PF/CrFn<#BDp@$G.Rw6gfj<6*Dcg##Y%t$_1R[D08%dmt<d:0Q_sb*D?MKVfp:`0sI@?/wHlX%qN[^##(7c#wu65IB=t73`UZNCIGr<Bp,^=CR$Vi3+3A5D2aIo5e3Fp]VF%6CiEaQ+(5>6WDv4@)6hf/(9qe--w7)5#(:$KCh-nFRTiM]6([rF#/C7S::r'Ni-'p;19RZm$XYHZ#$<Ta(+9^$/qLoL'klGo'l8hM#wr+6'lAl9Kq-rC96o^u(S3X=9:94T=S<2-H;+tdRSYdRK>q4Z$m1%%79BPP5^hKY$WDb`#.5'5H*&X20p8pB1I)I[L.jcFC>rS9B6HFp5ClAi%SRuZ1kpbKCO._QCYB>'>Od0kH*'5d3'7eWC[kaUBSqBm(0)8V(l,Bv-AZ72(1:-b#(9w:C_DfSBp6L,(0)8V(P+DH(ToBS'qg)7$v?(eH*&R@B6R@g0VMq--s:$e1fvP6(NimJ*kCXS(rw>,(-Vu,#t&d[/qs&[UKgU8&nR1d/PqG62Q]<c%S]bm6bnS0#)5KKS9lKu.SXAUGI;LjHbo18TNVnFYuP.6+DbabbBAS,)gJdk3`U3WL.s2%Z;+;rB?5JMa`6QA88UN<l#l@$B<Q*j##S?S(87I@$@W1rBru-=CEP$p7Cdst_iOFFJom-e,>95qFSd92F0In6*`[0YUwA*C:U+KD6[:;BpRnnp5m;:wrI'F^(0u^i6X4WA(0t:C#$m-u#irc]6[:D@?ag#.&P^vC#[qfW0@UVDmd''vM-OO:gMP#m+0L<V8V_dA@$[q40-9Ld=aFx6SC7mu)-hi>BMA+e2oEP7acUNcD65@J08EPI#$c1+4]tKj$=t62#fu8iG/%`4H?=Ig>BMB[<3V%P%`iwY2hpeY68]bd4&#gZ(sbKW7X$AJJ-6mv'ifY-DKnR_pX+`H1/b:Q&8;,f11l9+-<V1n<;6Iw8m3)O#15`A'2/N9?vJ3?a&A4TjaQA-ooT]qhJ9f]DKuC*%6a@96+JD]s`,K,0?HL+%9Gv-MZ-2lJ&cx50OoXq_8QJ314Cs95#2U=H>Pgt:NA@RI?ts]rhKvKCRfXFBHpvNUg.?_+-@uH/:cUg&Cu;peW#bD5@S';V+a)G=Kv.t-bTkc#TR/eDDhU@K#g@%BWZHrH*r,$.8LVoYb#=Ds`QJ)%.Dp,/92J/#$.-]$#BTV02_c8VX['+06h$D#>KN`-b>+=X_#<M[UFVR##$_<#N15G&?dl(ol9nTnRwXG,v3W,$+;EkF'g#7##7*g$fcT$JiwIK68S[HFd%'@?]p=F##>@a#C_?=Jl5Z?@GkxoG.VS>`8f@N1r31w#DjJG5'g%vCmqt0/v$V%9R(?*5Zx.uF]FU106hQ%$$dV^9ie.'>E^+F6*Vxt6*2`pK<@AVC23msBPRZV(k+qJ)KdYW(qYix#7hg[C@M=3%CA3)h)_po*a)k,o4lsH=LD[e6dGbX$tsw=(fc$t0PsY,3[cv&2cXe8n*-v+2K1acpXFrUPY=t$(q>N6,HZAU#[D4ZK.Sqn7'It0###c9R)K<+sd0NIb*&N=j_f1.1:J_`9<MdKBXs'.Do9S>JSe*+8Zx;P6`Qa+3fg>R.wqnA3DBL*6;o[62i*dGUfX[[Js)=.#&mA_,>8,=#Zs0P4+K5H,up>@,YU%U2LvpQ0o1t'#/MM(CVFGs.#@r]3f1O?#&m;Z7SGIp40&?d-%sh4%=qBp5KEi<5ujJ`3j2n^KU=NjJs/ia'M/:0/5-V]jG/FHASWwu###cm##.C@4+]r#$rrn0#SnYMR2mk4e6nvJI8d]?#Z;nO[YXw<##k<T)79?H40_;u']*d<%E;l77(n&_073c93?/aMC]S(%2heB@F*`jRCT`<j7<C@o###>-t1pD^HsC9n%;gbjbj4?@)GM>X/[Jlq$XeX<YwB&gX_+r2&;Vaf16DR1>BML#4]Ps,%VwSY2cY@?H3Z*-LJx8Q#%1J$%U1Jo#$aTr#(:R-HM)PfeWY]I#>Y#&#?;(V08;Dn<KCXX0(p9S#Hx24[7ih^BDV[o5eOoY##V$t2nc`xqcO+dBwNjmGHNL66d+%N<eHWiDMrY%(*jmc'wHZ;$6gISISBpx#)eH8C6Jt/<dpkG:NBZw-?O9We8J8%(;AK/%35l7Gd*<2#+^89F1vS1q2;bs:2Da1@=S`i#8RYn1;7Nr$V:j31;6uS@o[EO1;6uT@v6ME7tK'_5&LA#Dogv#Iv=;H5?f-1CrFm1Do9aI##1Xm#fsnPD8'H$DREuo##1@e$&4Cd1;;SY&^^j6*)%B5*)'c_FLZV:DwUK406iYK7uNO[3x^g)M%Mfo/q.`w#_B^a-rt^09jY,d$=k-jB>cWk-,M?>$>XhB##576,G/]cI<$]XRSb^$)0jOF%;#TE(/.S[EeDZF5$.ll$#aA$+%vZY9kUAM4&-Yt##:roHF7f.H85c6'MOY7DSB^,DS'`wZtNE=16bE)HahrxB<GhdH&3acJwKeJJw'LIJw6GR:/+;v2dq&a.AqejHANjK88J946VK1mJqoG<35B7J%=S@j##-]R)LNB*%ErRX)GC8O3D:/l(Tur:#>-eU8la+%CVkZ&#]>e:BQv)T#BBg`HsU/Ou+5X+##*gU#[n_?%on1%McYEw%N#UXGxh^=:3[uvGkl($2h$[G1gtaoGxtTj*MNPp4BlWH$Yt1MmVef8Ro`%/3i^HH>rmAF'2tTG&$P,#s4kYS04*bS8AYF7qKo(dRTi(A#Yti'(V)/+$.lDZF/gXTRG]A)&md/K'vL#W+F'Vn,.*,1(&88P)76MX-$ZP((31i8ZsfE&LJ8x=7Elk:223O2#?`Xo&v,Oc#$aTfq05Pb#v/0T#@7F:npBGJ*`n&G4GRb/)GC1eEDRNV<g^D`6)A0'5`jw(uV??O*bN>-*`n*<%Tk-C3EvoK&6TEB#:h-c`Ls$w>YS[=$WR16IH:T^'2KEJ&&aC3D>W<x$(s^)D5Uqau&5^`uHJ#d&RB)aJ8?eRkedLc&np6g##/T=)2W*>.EQ3X##G4I*I@Fw4gq;ll=dQ@G%D65a*3A<(Ood(Je)EfB3uZ]$s_]R(rqnE$3:?G6lBQ.@UK3T$u1_v$tYu;$sRi<#7i#H*hn$L$t60##8IG^1@cWb6lBQG1B@]q6m-&M1B7Vq6m#vG1HL]'c#0462;]H]$v7F)$sR](h/8>c=ACA_)RCAr8%E'GFYk>21.lv82he<HB5[jZQG*qKG]:I/C;XK(CdM^'&QB*+Na[H.$@W>@GdsQN#'M]Q<D53qH*KT9#SRAFIW-ExCTf1^+xrv?-Lr2'`fa2ap6i1eihIcV2MY:A&5H20#*uOS/tIgM>LYHU>.Z/D/9FqL;GFjH8?P1/FA<-LnSt7B`-D6Z#&ZJRnTq-@#$jt+#*qvsK;KM&(3GeV&f`sa'1EOrm89mx6ofbk6'%1H)jr.x(TuVg08Eb@PZ@GI.^uqR'O,-P#wgMoG#'>s#+'O=BMh.-/Cu&3^k;>8gTH;u'Q,AM(h%Bnqg]#nH$axftHai%Bhuax-2Jo&A.q/xA]MagC;jLT.)'8+A78xs(KVMj%YZv`CH)mO6,`/g5)=6mjLhV[#]R>=a(_#6('*&o0U,wrb&=N&#ptnu.0TakDJmx&Db<m?-[e0-#5V.xo,WS;JlRi*(4Kt9)RS`N.#C+/K2#F-#=Pu)'20O8D3U35Elj5j#TaxbEF.=`08:n[#%8pm##',D0=3?q#$j[A##41@#J:%DGug'lGug$kGufA8?@HRDAWe4#MG4=o<E97;$eSj]Opva>XHEVM#@'&]86UYp/$D-1>c-8o8?kb:,&UuY6<4uYI*MmgKl=u9##:mF+h`ug$1jXWY0JMS0@%.9(/,wk0<3s9_.gs$0(93s/9:Mr#;wK+&PN>Ashx%p-Z)EM.s?jW'2/K*.s@A^sEl^+K#g+U/92pRWR`W.kAmi>m:`xO;U>vj:0xU-':qDwJld]l06eJ(o7`sE##&Ir2oUTSTH4pY+xs(++AE`W/rPdv#(0r0EtW1iG]7#.3Is,Q7_?kBHF*ZU%SR/F##@q##CZZ65(?l'Loxu>Jx*9O##:S/#g@6YPX,s)L.iWc@SLdE#w%%@5;cQnCNtme2iiq&Il3:64,S3j34tXjLfIfr#%)Pa##@0^-xF=I##XYg#/JuvY,MGHdZ(M^?h0;m0=#Za#U5@;eoE*NK#ivXsDg[a#W^SV5($YGic@^Y)Kgbk(4<&t-ZkLQuv9&d(4UGk#cb(YL/0SD6c_7C#$;)5I'nLxFsO>M0#0WrmWd-j0oU-i#vi@_CPOTU.C)$n&prWM2HV^N6*tSM%SeIB7FWKG4E:R2uCwlu03Jl'WDWiC'2U&m$<ntCC`x+q2-DZYBYS3;&<eQ<07gw-N(bMT'30jm+c#5N&&JeFDKS%feK0EY&T0;3lBRZV,w2:L4^*2PJ[C>>)nm,49W:1AHmM1kHZCI[0?83x#*Uh%3jRtJ)SsLZ#Dj@U$H#$72L$t23-[663e<Nl6,QqQMeL5=-w8h_2IHMxCh[6c2edW#G[LMo3+)a$BOCh_3FDj%HXHir3b`s&C1%%R4,7tFIE<nH)NUf%(o<[%.t,JOtxo8f42H<rKAxd6K#gdS)p4@:7`qO(/Jq?L<`Q>`EjkG]Gv,Z9DVl4oOM(ul'M^aZ$.E*vKEU1@X%YntGeV*NMe0tMLhlN^LfSOe(UQpZ#BBgJk]5`Zbxl^[)71[d$it4,GXEL44FgLmHX1WvNbn3Y#&#d=##+he*Q'%(DLYs[4+/m3#$k%CRp1G6Y(0gG4G,AG5(liE##'>P*Q0:.T7L:93.<ZF5CvR4#/EpPGB*]I4K1QO#4tX34cG]P2i=#^4A6BLLfKP8/t'UI2mxLV9M@7S/xi9s8t=;5CENZjI<^F[H['ej8qG@,#>Uuk#hNHS&PNf%;hKx@6kJ'U-i%4BMFpVSK#3kYg<0MPHv_R[0=X6a6c8D'8:c&w5`0GN(/+dHOAlt?$[2cY7SFH6W1X:i$sbmL)n@Lv#2t2vZpxkF?;@o:*Hrm@&SMc[iLGit^l`,'##->p0D/%F3E$#o$[e?QHha.g25Cg-7-GDvdw,fF1Mg:6#a8c?##-:H2L[NFQs,$NC&8-nGdsWM*DLvn35@]k)P@Yf8uZ1.'R=g0TM-KD6ULTaHSjHA0MDSH#Fna2@t<%c(/E?M$sk6@-;@$77n_2#6EaJs;lbQV#$lxZ3IEBp6]`5*0<RIWZX+E8&PNu)b_-<KCsL[FEP2?V$8,(Xr`SKH$;O)u?F)2v19NpL#)NXmU1uF[.89i.&Q2A1$J5T8/96PU&k-;#1h(/E$W55X#C?GT*_9`G##R';,^l`L+*Aa9%;H/SN,g<>#`+1OEE^GXt]9/;jCx/n.UNbx*wi-;%X'DD&mTnnt@k5PF%-1C-+>%$#v;][%;5gIfmDe7,?JPe(V+3f5f&Ab/PZ=p'NHVg33PK>cxI[%g1Z[L#$;=>#BKmk0G4Rt$E=)385TIV%uAAF/:%JG/98O37<E..Yi'rC1:*p`<Hs#+7JwNu*k8*D.)79aIon.fGG&mEDoq5%AsnlCY%o),#$c'r@om^&#fFdb19sIE1:,#)1PR<,#&fU<g%U=V#$j]x(oFeB6bqX4#AnItdj*rHBj&AF#t]cxrITpMnqJ%`:0^NC,#fDJ't6S%#6R&=4/lKs)0h[#(3K7s-[97*-rm)u#Nv5^C8Wuw)HR#hp2MJj)R1B1=*w)l7'bwM(9Y$P)R3_S3H9+gr:Q&O&5;D(%'h%G6rf*(##_@`*3uK+$*kP@C<H]A3b$2f*lHPd)3&w005Y2Pj`fN7(S@c2/;[sb$#=+v#v28N>#-6THVXZc6*LMua6]f($Vq`*'6=.W$s70'GZMbH-x+5<@8M_1#vr(2u0?xkqf7r;>'XPA2N#WF%43E;I6wf0?adE8Rc@hYC=*-/DR:[%#K2kj9mtvY'6vBu4DG$H&7A#obxdrl&FhQ@t%WvePbF#60?8vx#t&N1FC4iYGf]@KF1?2$HF,oO#&QNBOl:#+#Yn46)oM9#%X7u_l]qVS.UHxR).[XjPZ+SU#fL:XFYbYHJhhY/_I/2g(K;)P8qG0=E_(1?jGB3r6%^13BT6iY/@TZV$$[:k'2/[Uu$GR]e9L/a5wMK2$;Fo+)hI,9('c[_*k3+r+0K:,)n8t?BZV^U5_lF>,Ck6TBAOJ2&lkI,5QXum]lWS)+&*Z?#*:$9:fW1#H?YHjBNP8_C:evBF,+lk)0%hO'if]*(h<IW'vUcr(Pel7#cObpO?O33)--eDTj'je(49r8%(I7VA[6-bD.bVlK+xIp3d/rj5X$<C14iDh[c:nDGBG6`VeBQL#&S;'c+]o#$[mZA0kH/sH?t;>/e2e)GYS;[##F<J#VfYL/9WDmK$[2,0@<I5/n]P37B9XS3N5&fb%mbDCKsUI$(b51B6fAU-#GjdGu]4O7`L-wDJ`PWC(CVgF.?F,4+^AxC2Y>iBPh:G3(w2$B6]:,b];o),>9*G-Ac.p#E<E/I'I@,&?9fW:#>w8q.fJ($6^tsB2]f:&8;ah%86o1,@+`e##GSL(TeqG$;O^Z5,gI/.akf4BmIY'V&(JDHA13j)0Z(-?E]d^$[hgF.80aDFKh/D8Q+;XGd*W^Iv/PD$Op.S1::YW2T[MF6[Y?^,']Xt3.*h55>;^as4j^N##5H3#8rT,2m_:nt]0W@icFK0*DB.4$q'8mFiX2[<fjGuD22(r#um1OBDg,UCKUbE:i(-Q:i'K/6tbLEuDv'@>)g@g#$`.FDYb?:&lkIkFBS[//94rYeo_gb-wT5>#YlG_,f.Mm$@6j162Mk4J8[-RJs):2.`BOKk]Lct5KGwl*)$CP+&4l%)ow.m$0l??Bt)V`[WEtaENqk@2g1_aDG1+t1/wbP33Xag4B2F<4]_Ze)QdoU)lf:$$/I;,8ZtSHkA#bt#>IjP(QZRQ#Lkv(%s2gjt_)P_4F3-F2j0]iBp>Bn]PE4NlvCZ12hAcusbft=28*IaRB-Dp%:1So+A<]W/pj=4+)W[Br.1i,BF>>S[Xi;C6cQs^9mU/V#$]$T%xebR6^Yaq6=V__F)#ik[8o:Y#j?S,_23lZ#$?*M>_&>eB6>9a26UK0uuP22CKU)n)o@Pt$Wa(B6+LGZYw9Y0#(]1SC)#R*21@ED10bgx5$Ixq&lj;_#$.bX#5xq4B<)07,v5,b4)v[IIS9r1%t:[[ICgMJ'ihPl&RugE*_h(pF_%Xs$(Fa&/94Zn$tYs`#$Y&1#Yl?B-HRi5H@%*nWd]>].4O'D-Gk?-3Gamf5wbQF3,E^c6,@HVM.%NQD$`&E-GO50#%D(X#0(MmH@R-YITvm)FifPm7XmQ+F;l6rJ$Fg7BM9&b.VSoQ,>?Wm#LjaxG`m^0[sdQ60Z%D73dpPoJiR7L#$d6-7[v/h2KjuZ*)2K+-d0oJ#)l<aBns'Gq.wMsI(i5^1;]'gJ9<sf3/M.(2-WS@2hR04W`cR)Bnsj^)Qvr?#JL1bBnr(v#6;`H8l_JY0OoZw&P4[42Ks;-(3Tkc#$(`NJ9GF+L3P;02L7'30j@xd06hvd1sW_'<m.#HG^m&M]9W/406`KS0Q`K`(/4@(Bt^=CI'5$5DKS%WEjW%x?#OT.qIrk=14:e408FYq6Zf]w(;KvUZ$(6007%mm6-1=+Cg/Pamv-URC9`At9qg:[=g?4O#<aWl=H,iK9:Aik<i;bN:S14X<3&Qc9qAp(G.rP$Doi[C8@<*IG9?qT6)][LI8C2q#./6_C:/3)-VQxNC:.Y`#$)ID/$38V#Rc_dF1d>(G_a&,H:@qK7XvVq6jCphHcO'M8q#-q1Dq6e%)?u@H$FGV1s(Pg0n$jm-wR>%1kiFP(Nl$`-[-umQ[UpX@q^5ZD7EsGGdcXH#wg^n#Fp:[GeCn`g9IiuB6?CB*4^1N-FnQK79t?4'j%8L(7^Sp(9MvX>.fnm06f::#6^W`qnt.dGwq]V8$[2h149..86@_)I(pxm(qXKP+*CMs$IEBj<M_r]B<;SI3awDLPYWhVIZ=GMIZ=G<:fi+U$*5d-0RcX32cb=7#Fn<lIX69U#$a`h#Yom7HGiuoIYW>waDw0Q+AgYR(7[%+-?X[q'MbU2$9/&Y#eGxe9:g+T?E6xw7w$0@08EOa#%elI=iAi#BtDbRRYPI1BuJ6)Do%Z.(qa[F(9r=X#[[RX<jomB#-L3e$*m+t1mlG1<h?@NAY2rl>+ooY;I:RcF_-YKO&J/EG*Qt]FeR*a#GD1I&n[U(#&ma@k+IGI#'sAC_f=pH#wY&G$;MDT&eSJ`BExTI-*=ha/7;q&#%;$C##KSM#0w:`B>AW$BtaIr7B]8X)GC-8D+u#;.8Vw-*NvGG#x*b@YY9xi19jI/:RXsX##8J4#1Oj*9iZfH2%q(M2nl'5#$u;D#*2HxBsvP>CMo46-w7)A?U4iFI(r`X19uudB6]C>D2)QP1:+`7#2<Oc1;,d^7s]QFB8o3b/xkDu#LT;O.uM^ECVFp*IZ4V=#j>vjCp;9_6fMHE*)$Ux##(El##/sBF]E632H=Tu33ud]F%e_.Cj6x%l=cxuD=.hRCuh+@ISi>9D.x+C12`9a-wT63D0KX+[wRjOCp[XhD/EqR$rsOCB8;COAvx;0-^)Jj%cv<A6bL9WD6H,:<a>Sp(:1--(;qfrH*_xII^c6M%wIHP#$-KL$b'J95sft>UJ?#<7via-D)FYoBnO7+FKd9Z8%<#`ChR0H'ihmbB>@rn##)kc#T=i53I[8v(pK3/)1;Qj#;(1[?auqb:0V12&XQJ01;..#(oc>ACS>IaH@7^a##%U4(48j#$)nqKB8L5dBSh`64AF_;(UUln>eQT00nE/s-[et:<IAfQCjiF9_L/4QGK(>C2Q;mFQbAv/F,;*SBm9aQ(O^*,##uY^4G@'Yp33>@$rqcG)i/v68]do,Cj9<&5(l.b#)lT]3d>#$CrM=3Ed1rn4Du49-wd,fHAO&rYYfgDG']CfHL:u7CrMCL0tYcSJ9<MSa-t=s0Wp5E0t5>Xk]dDD%=N?H0KKG2%DQd%Fii]8HEiF@H?jv>1;GEQEe2%I<KJDW5`6FF#/#c>5H0jM0S;7M##2R9#Hc.w1khb*Y5D//G']CeZV4GU2L765&PQ&UB=plG(/,Ln+]VsK#)kwg/qt5/#)N=b/PH15>wGsc,E4+tIX)E47tmrM184d-0Y(qN&&s%j1<*qY0lq^&$V`+H6+`Dh2LcH?5-d]e:/h2#0ug)cK5NdhBW#OQ6ns.RC+'23.'6q4-wKNT.8;-n$l3rgKC+5)D=/+=1:JZY2MW--AZ%Q*OFT6P@vi=aEdNMA:gAvM,CM1J%CH1TEdMrbJ#umR</LtF#&#_,##4ZZ2T.^#%ST.5IYW,V#)nW?6'2FV7_$KkH;kn5B<=7d%ST..IYU3v#)wQH6&w_')7f%S4-1pAjCk`k*)JB?%w@6))-$g0$*%EjI)IIP#&A<w##,ZHc1/;(I)PB).td;J#%;4V#(i$HC23ghC2<mX*)(.^FML%tKEZ$pCgLLZolC92(q2I[#+>O.Bjc:<<(nr=&PN2'#%1oO#%'N<##5G-0vA2_$YOTa#$*gn#T<]Tuucj/$Vg5V#Tt7a7oc#M7obSAHArp/(8)RL-+-$B'Mh)[#E8_obh2:FcJ#ac/w?ea02`f=6*NM6?ToSc^jclR*f,cF#8%fd-rkZB,Zt/87_+=sGGR7d1:]tU6*2W'3?fW1MbT7V6*s*v#:B[`Q1Q5eC##ZPEJ][mBn=K^Dac7.JN,F(19rax(:fLT-@RNpmDw.]0Q`)dRYrdn.4P=4#%;@a#(/286qN]]6[t/]#/'xKFx`uZ#+g:kGB[bZ##&S;(3b_G.'>(8#(16RF&9r^Fxb[(1:([v34CHTBM9#Y%on[t(fe5U@v5#3#$b$.#*<AL6]9&_#%[h_Hvsl&#gwb*05's_&qu+&JRgKwpK=D6BN)$mHEi_)#=&=;5_Y,x5_Y,qElH(u5_c2Q)qC?v2hAmWB>]o0(;FHw9<Bi_BR9fr9RwOgBRh.gC/,PZ;,.c,Ufr/vk]0]x$<wRYDQP?l#%R_qHEi`D&6sql#>5ZB1o[:C>+ojeAYW.n<j^2SBnN.D7ww2b>+8ml8t;^)#$j=Q4%qYT;jO;X9U/;S9:e^5BQtMj0U5Cg##*aS%T3=eE3:dk(jt9$=RJMj1q`#4D8.QrB6PuiJqOf@EoCu1*)$B`3GqIt9C<qYDR2pmB6oe_O..d=6b93f&R7oQ)/M'x*DAcV18/1G)chWB(pB]C(&@p:#93cJ+]WZf*D@3N?;iER**_4L<L?RaAW9Zm7vq2Y'6#X[J4rVN2_od2'Xx-W+ADmEoo/4uDf*A5X`rwg5PwC*BnP>8$_jGOo59@K:h.:3-+%)c$Z%M`,d)6As_Sae/wW6,#;85F$eg%cXxX`22nFwIjb<A2Lk+H/1UCPB2hK#>rYj19Cm;om2MNsPCiasS]s$W+'5V946;.sFJQdWx1rx?f/7xsu3+j5=H,b8s,.#X'#Lja_hK4TKBwC4FI)IRq1:2^a#@sh:DAECZ3)KfeB2F[p.WAnK##i7#(q>j&(UI4J$90jQH#wT114n72NeN:1:pv7%1D9x=88lJ3.;_fS88TdhL/@u=5YNN-(UMD+#[ntgJ%Qx#$8*dECpe/4h0u+-?VD#78%N9HCAAaaD-R'YIDQ5,DSQL'F1bEU=ax5@6x/$;$XPcuO^)l/(JM0%/w?f<1OU_/BZMT*)8[4p+h;ff#[fTV,>8+5&nfka#('en*)$C7HFo:2Ebg#xB6J2t*Hlqs#wnnd6b>^UM7?w8CVc&2H2fx<B6>%q7`)tMG4?DR7b26H0Rm-l2p#E^Do:+H#$N=11/7hTYY5&d(/-Vs-c+IJ#%^s9##TAE#W3N*d:f4K#%0HG#>ab$#]F'Cp7I-h##<4F+FWRq%5A?1BHeJ]7<qVPBjuH-2ilbtI<g=YICt<&<`aXQ8nGv:1X&(s0XEFJ5_iJx#tQhA5]r+$k4OwZ9%6cR26p<W]4fZk6*J724h@)_YY5fFb]9+T21@-m26omp6*Io((5K6+#IPknH25NwD0c5k6*kwL(6A3$%.);G)-edh)eF#B;98iQ%8k<6#@pJm(fbvK.8F5V(qQK[-*T:2%p+sc#jYj6CO8BO7t8Kt68`A?_6F/7@<m==3-Zs]#&Gn+&55q821Aj`_TIt&EDGu2$75.Y2a>laMJ=EgK,ODk>udSxCJl1@m1m+1A%`so/Y$C=CSug7A5$aa%&vBo'MJZV#&Yd<#>cDj2eTx(5#2[N.^l?C,YocN#K1qo`G)/f7Ilf1dV5U<BG1EZC5Xh02MT_d(kL.H=G_ODI<^bU7YuW2DW#fLif<GI?XRD%sGQA985KF$#_h@,D6*`Fj_3jq,%)Rh$;MOI#`N,>FgpJ5#(:U.Im4K<4]oYjIYhdDIUGXn##h5<%-etw3kJnO#$PiH-EiL3##Yi4+bd@a#N9B0Y5/.^8o'44+]i3*#IjMq8A#'Q#E<T46*U2U%u+ReG[1BB&P_f'-?X[i(Mx'%0oTMXP&aY$(JFrpNGWNwJ8h'w0YKW93-Jv8&ReG(03h8P#%'0+#%9<-#$an&#%'9.#%9E0#$b'+#%'*)##5W-/B9I<J57VE(4PBE7^xGiGg%hx3.*Nl_pj=522Q+6DL4NnQ<f'uQV_$8-Fm;IAXlK0DM_;1KM7DjLrI/b2MQ(^6,b@oEHknl&pK8?SQJbZ/rPXp#YY</'p[$cG'L).(8kjB3.EK;T6hSS2eKkMa`Cw,-+X?Q#]x?SVd=G&-s'fASl_;2$Pl'oD,?G=6[Uv<6F8it<agE1D1HVlFS?FhHAQ1?G'7lZFK$i;cc>,nVHf=<^)69V0mD&[0u`#(H;'pGH<haTEk70C.7u>VG`qUOH?=btI>K_%Wvk-b6clr$5_Y-26[r:2#&HgBk%NF208E'1J(]@e3-KM29lTYp(/,:g(/,9A###2?#*)plBsP>+#JL1s;MepRN(n=OVp3]/-x5^S08E5RAP@sl(RTuf#RUs3%t2<9F*;GSEHm>RG'7YUEHk3nI<[H#EJ^Ba/PHA>0u/an0ib=A0vPYI#&m&;IA['N.<eJ-###c;V7.x51;cZk1:LUp#YfH*%XA&6Ee)`b#(%fR^M&X3EHm]_I]$UEV5++iE`N'W#'KvOP?U>?6x$Uo#$juq+xvX7Gf/(1H&5&(Cfi4&0#90TEl-:Y9t0[bMKt#q3-^S%HD-hS6`5md#3t[m32oE[9t-(rB^qUp-t6OgITZYt9t+f+QvtNw08:nW0#<TP#+[lhUgffT3E?-'CkverOu$s_'51xb'51x,'3e=u'm-b/#%xDN'3dxl&U?tH1/%x*'9-/-18Q.,(R#rE()@<a*5Swi#9#_PCUq_N-GOYM?tld;$,'Qf@v5?[<C0aXB6o(4l#O(*KEf`vEY^e%6mZp+bp3F,G9R5r3d^p$19t'W1qg>tO]VFB+0FtlL5TN.7#<X`Cg17=_R>5egnRl,C%h=e8/)&k%p+]G$;vL[_MO*t3F$4d(47[Q6hMBhSI@BI6]&r*%boc=GC))v/x<RT/v'PG?]F>AhGqLk1vfrC7CXxl0QI.t9FP?pGBRfZF*cmC9$Z?vV%Z5>6^dbt%<#nEq/<3Z688_oBSYVV3kLj^ZVrwSD/'PC@uxT^1VGH#0tk$T6[&j?*.TMH$SpY+>HKU&0Vu1m$m-QnDHn0^CEe<<1Tj7F07-lkC0jE.#$?%Y(:.hf##PArC3X3tk`Z2sBvG_0@U0+DDco)O,fb.l1m#SO$#)J^'iwS+'k2,p-&2rF-YlfV(LxVQ'3vGZYDEB*/ldAP&u^GPBV,S@D0hDnCPQPYDMa'>5YNPBl%vj-Efw]GCNVc*2pops9kii:XxZ#,(6^/q3OslHJldBYGATKkTs):H6^#[2JxFLa6^#Z1/:S@R#4c6BEdNr0`cA#@-Ac?)1hV`R#%96,#.oQ8:jqB'#$s*]BmY7'98vj[;kC1W7x<qx#-p]CCPn2FE`I%iE;KmV#$loY##9D#)7ONn)7OKm3kCddDd7er6.e^#4Aw'9Hs:$v1N$dYMM(xa<)9Y]98>q%DZcVr6&v?+$s2OxG)x//C9;Tj$WU#]1;#dAq(LiwGa$=P6%&g,#fF6#0Q`>k2h$X1@vG;nG`S;LqJ*9a6cFriCPl<66'+7R239qa$*,fJ8pd9L##8N_8q,QrGv4gaEU>8k.80x`BZ*>CGQod$tfQO,s`5(vDQU-U%-Ix;2H:*2D0e7^$#;oVCNqCp$-Wg^u,W(?(fvBBDD;<DGDFLM-AdBMEcHXZMcnPq#T;K+nok/W2,1j&%7q`/m:V8Q8:jbfB<kq/o507O$tnBdP#$X4/VepM-s?kG40_5i-VP;B[LNMd'mIHpkEE5h1hNqpC1%$q06g*Q)Mt=YLV5k)0rs04ERcJD6+7oi.D7iC%$*Qa6+:vr$60%q6+>E]#ZUm-Do9Q&GxI%`Y?V0D##kWK#*#Kgd[?@Prc@<1:Nfi=l`B/G#$%%U]#1F.-wQrq.&g;IAn,7s##NjS/Vf-W$Vv(P#qs376+8Jo%on'R:.v:($<7(2#?r3+'4,KW)GLvN$-=j*0U33)@oZp'##C/G$2=L)*1-i@##[qg#$V(37:Qnr&53F=#^MmE>>>96#$6[e$tjq@UKRY8#+g]MG-P^?#>fm6#$r:5_fY)K##b6I'(M8m;dX&/#Yib>)nK2L+hAUk)6hFD#[i+H,uxFH&s0u_BC`nrK?63p=,%'uaD+gt.X5sE%$+iN6[a88$[=uS7=?lK3JKue#u$nN#`=_h5_lSO6*sff6Fg=n5f4:8#^q5Ul[=I8$W8B[#9XorB8:&O6c+PPA@XfB6c#*`BXpc2Do'WJXC#RQ##4%B#;e0[DKpjB#%M=>8R,^jAT`R:3D;-B19L8/&TIflBmO,W-u3hDo52Kq-^)JB$<1P>(VKw0<kOq#6*kt&'qov4(UGW(-&;DN#vU1@#l'NQfp`XYW`EqN6WXT_'Ytjh2P)[.HVOkL3*q%3##4pB(&7p8/v;x723^MAK6Y5=(:kWc#,W2B$@<>V'.lliB9sU',gwd(&54q;0?9on'M^p]%[]xdLfIu_FA)al3ax<[#<<)t0O,:)_0i*A$;=?*$pA^&%xEWVGZ>G^-x,C$d;YK^-[p@LWa9b:-]#FPWa9b:-],LSWa9b:-]5SkcCD[e6l9EM6*81F)n..v3k_<Sj(O>,5$NIV#>`F,$6gY52iv$7#%962##bck+hUE;.v.`v##Wdg<lUTE/x3S(*IKwk+1Fr,&Jn<EBR'`d#w&hT/xqITe`BoJCTVH+6#LfhHo#G]7<E5j866F23dwK8])UA<F*0$]-^ou]Z',geQ&5t1#$mT^ids4_=DVj/$).KH3G_b6]<nLP$u40I&phEo&ln7t5^1/VHbR+`#V4,)$^$%>7@F7*3fgfi3NYMu),)E=1IVLh162[QJ[04@5fW1,GIVA'FG=el%SVD-BufN.5fSeY##(YD-GO&(##5J.3QW`7?;)/qBMr44I;EF1pLsu0$wBR_6b82X,v5lBD6vQT-^*cfCTVKsDn1e'#$b<'%V%'t'XD2&D0h-A=B-vE8?bhTND'oK_Lwa&%p'N?#<NB$(JFpJ$_3Zf/x51l'Ff;ZpkK2e0L>x`2ar([1tmGIBKHO#2T[LtGVKx<9M>ML6'vB9CN[Qw)0AS`5HmJc?;MNRbA;lO.pi_?(9d>j#we_<dV,Foa`7(Y^1ac9$<x7YXAB&15va#3$=4$W2b.=M`L2aL$]33.7Hu/=B814U<*r%b#$2-B(Th53&6`f=auAG^%pxKj$Y0QY2Ja@w&Ul4:#exT_6*ivYTh8kC#YqM$*k<Rq#?rRE(/+p,#Z*0E$X@(F7pq;:NFW?b&PP(4%v_n7KI>xwBe8`qI&xjLBp.#F)[e7lqg7voaJG2,>YvgvJq%0/^s2'OENpnlEE*j[9icq23Eo.B%T9r.*k+k6.vRl(&ok=]%8Ex6#YYA-rN`B7&5GlF#^9jSbPnLT&5P-k#GDNNEq,Dh->cJb#(((/-VOME@p*Nx##L]4#f+ucWDX9_t]/eq&5_/G(k(_&%'qkUD+.jk5_Y,H7)Fxt1r@RU/8Y`u$Ptee](`3<##TcO*6Ba9$EF277L9C0#@fqe#@Lw-#vJq5%^c)(;hfnU@:h4g/phvO#[`T+,>>UV-FIDXHsTsf$76gv(JOuv>@V/Z##H1`)RRf7)Sxwi#,`v9J-8-(Cm<7XoSguoJocu7Irh9aCL@.#0t3Qf##79b#=LU]R:[,W+`MJ%%SRGY+_#?O+B/F5*)AxG.BR6&##1V,%@S5>3a?U7297PqFK7sF#cM*ECUkbTBuf0(GeV+W##7*r#wxgY`1OPaB=sRq$oW5xhnxQT.f#3H/q(QV1l@*4kxGkA.oqnc)6l&`*5WRt#;MB[4*UbR19i?o#^9WG/CcHXF]XBu0SqKZCkvqv3+*a@+%w<p+%vac9Uo=wC5F[k7;ONvKo:P62edW71T`Br(O[$Q#[n_>0ME(k%tS+n##H_O(Od+5$A]]\x3eGDRok92%KP$=*X8(/+d)4^De[(qFdG%UT4#1U8S&Ek0P:GBG?il=m1khl./n6qB.=104Nb)GEN106Upj##f$1#%@RCZGIsCC$x<ZI'6ceqJ)L5?YTW37]c0b3-^*37SNP[QB<u[Ck9W[2hD^P#YdCECRd*RSlU*>KM</rSP9dM8Qubl/qV&`B6o6ED0KKH3-R-2Cf#T40X<?r2K_Ln0fe$@/5/wi0XE:D/5-g*/5-,I##-RN-['9Qg]CJ3=0<txC3X665As$h<GaA`'MK'l.rSpN7`Mk;/xPPIF&=0>6+_Wf#$d'r)hkgjC+U-'msUX76[<.K2Q8146*=?q(:Oh,$`7<%%9.V>1UJX<6*rl?+1EIv(7l@l#1sqU1UfqL0d<DHC3F9FBQf0G1U&FC0XQC7(TswI#(HW4BQxP(##PY0#B_$(BQxfHc=r,**k3sL(*c&-(8kTA$i&CjDKrOf4+&Tw8:*836G5_B(mxqT2SMK&ZXGs:6^fx_#(nu34ix+&#%8kw6^4H^3fS;Q=d7-N0ouR4*KV$h-Ztel=AQc>2M*gP&,7mB3g4LR-Fua>Alh;8(OS`V4LePhIrh0d4'rv-BkUkV4C8).ChR0GSP2p3JqgD3%SS(15?f,82Ln8]*Nhlr)2'JC(kvZo)1<a5*O0%[$5)35EfXV+6A^QE0=W`G3Hp;)k@g_i),CdH=a,O50pw&P#I4A;$V_cU5wo8sopm:1o_.K9DcMMB;K?3$2jWDn%AZ8$Js*rA)cqZB)1Djq)1Vvs)MB5:(4rdh(#(*>0TKRe#Ys>k-$@SM%<+YG%toA<#%TFMQ[bF<Cxh&$Q?F:_Yw@Dr.83*C#dAPDS@8K1$VZ,W2RGW_-<hNE-u?^/*+*6`3(xk.2h@$2-_Fcw;cj/''QtI[VGBL42hArG##;iV#@Amj0MDIt#');R?VDZZ0nNcK1;-wu,e_m^#'U&u1OWc:-F54X##8j86F82oR*5hP.%bu$JZ`7&6D$ER5dw7_##6h^@Cpt#<3;/f/[$_hPEL.(1O35s#vqu8M.Hh]5#x(n13eF&+&&uIBn+*A3e>[-/R<$9GYc'$3lZvSc#8=1/QB[,)RpWO$S*'&.sZV`E^P)s1:JnQ6bA8__jP7F7'^%m5eDrr###;.)LWE47vM]FB;Z&>63nT2A5g@q#N>g55eV]<#/qtW5voEV(fg0f%QPoS@@/(_1OWP`0p'Oh/RaG>,>lB@+H&<c#<PRvEEO^C/92l:+blJ:-&+Wg&Udbb6pc6Qfm<F':NR>aAojExB2ouJD.lG'kC&&Q%8Dnl#]t[EF0-x52.n5G16=&0#P8%YEfw2g(LCrp6v>iR@TO,B4cY'0EwN3'6+pL7>mYJ.Q$t:i8(:S2K#hjAe7kWnZX@V*>[;?a+dIuo6_H,a(;6gG(V7gL$9pGH1Hvf-GBj`$27cA6+AEp3@:i4:1:hca-FYOw)lLZ.FEMxj,&ATV]4eOf_ASY8YFGpxJn`xr>wK/DRSODt-[KJX##-9c1Ppve,AV06,>9)u8S.w2H<E+K,.YF3,.WPS'oH?w-(e%v,$2L&'nK_j%2TxPEg4g`,#/m;92#mn+^;+U/95V(+]b&wDJ'&jB<DYHKd(+P*bb?ssaj[='7bYKCt1X=(*Nq1#v.O+&v8i#19j?h0Y(Y[EkPtQCfu]aC1.[p>@CqS6bAlq1Mn+tN[Y-$>v3S9LT)jK6c-Z]HO$<Mu)cNsEJa1U.tQ4i&;57pHlgCoHk_:_1;m>2HpMJ&;Mg:X3MwS;f5eI.f5e=1CKP&c6]6lJ6QV/$38UZ>--HIY[osLs(Nl'Bm$cLK08D9S3J^98/93S0#$t/3#-:>-6d:P)6Z<UZr+NKe6+mlp(;@=eVni')3/Kg;7=77c=Bphu$Cm-i5_bi4(0sbV?^^AV6cv$#7u#e9/t$'K2S;ql.SLJB6rf3>6rf2N6rf`THRg)%P$%ej85D$F4b;.:;+qx2#&Q0*ld,B0nTEs?6'Gd56ev*_6,b+5rdPY`6+g@49t,xm0Z,>nFGG%+0#^?g0Z,K$0Yu&+3Q*St]5wXk0Xt3k6c46]<e&;E2j'lPAxTU[;Kw@m#$dC[#$d:X#-<$%6_T<gQj.JL@cN`u6C:EMAwEr808kfxf.-DjDp?5$/r#_35bX-,7D`.51J@f:I#3$%##.>16,Y?Y#)@GjIX(q8BEgd#EWwi,G4[(uHsL)`IfuEtTC)^q&56)7%>u4%0oacx4/kbV_?I>*I<T>=CMY2[/xO3Z#C.ceBj0Gs0uLSH@t;iFb]Zi^<kF6t@=8lp(4R'&(&H0Y3I#2'7obVM4%u^h3e>o9;Me+0$VrAUYYG2;#(.vM6aC'U16,eqN1GO?1:g$[7=7.+^S]837NVfLF0LR+4%rE,1;rkS&9.^/;KwGb/Q_2C#)*%];0)a'##J6L.X5D:(4L%RBDN0lEHm>,.<R[l#&[o8%onNa/lv[q##aq%-dphR(<qKW8w0]2D2/r^#31PVJQW:pFeNPC@:1qk1:,i03.*gQ-<Lr[F_Qs=0nE6=-DtWht_P`Y(q5393/Ba1##lV':0R[+2j)+YBMSX%G?Z1o#wS-J##6ub/?UFC*bDQ<_f_].gT9R.C9B.I2MF)J4+9:p%mkMl.t`ru4lMWN0Z'6]#DcjrJ[9^t%l@Wb:7rYJ#'MGIk].M_JrO]=3-pGb8ZaOq#$P#d7<Dwq7;F0'Bcc;deoMO4@@DEG=2JC4D97dA#h]g?OI$1?#A/DAZVA;O#(R)A6*NSo%uHL$BD<,:6F]YiCVY/9Gef;i(WC*c.vPh%#)=_`1/fQbDNu?w#&>e0,#A?3>[VwE2,)A#.<6eO5wo'W=xp9+3g-XbV,RZB+^&fT&ReG(Kk>o3184cX`O`&.(Lqo5#@K,^H@[^d0sFxk04Fq%Htw(^>ucOn-WENG.t3:T#BiiVU1kWW##-o)#0T,DI9&(4-J8e+.8[q%2QoHXI(9c1*DL`D#35lkH9WeDBxkG?0C2iLR:?gAHtIW:kGb7%Vha0AC'[c-I'-]fc31]4I'0[Z*3ZRP(U#-a-]moBX%o_'#aEM'(fbwHu>$@J/TlQd3aKKw;hBtLC#1XlBtS4O%vhQn/Qao(Cghwi#%pZ9#&?8e#$+Te8w0c4^ifn;&oNdK%r.PX$W&%6%<aV?6*9Zr*3Fq#/Vedm#v]*f)52J++M?H5-_8(&_/LfJ#D4e<(l^)lB>AQ*IXm%W/sbq?#5&Ua06mgK2n=q^*)$mg4]]JhBQv=V4_'tO-,;WH%%D7L14D>i$tZcu#$ls/#$NF1'M18h;2#Fa4_DTx6s[ER#9QWCTQ)gC1lMX4&%a$LU?toFBn9Mb&$CkwcQ.a6,AiY<X8s<h+'_:%1/6Fi#Xc_v.7XG$ZV?Dj$#Ta^3Goi83d4r44)P&3J;Gl:0Q]XF)iKD?)iTJ@22#9DV+ia2QV7ED#>e%'#?VbXDnaNfGBeoXDKq#=2E`Sx15wjT1<(m@163vY16O2_16kDk17h%o172O*<MXw]B6Zu%>'Oot17^uv;UI2&18a$[c+hN$B6[x$1:hoKFuxv&-[hF*3IEC(W1F7F#[DVq+xu/O-D4g3P&*Rw/`C=*#&@d@5v')4B8&BT$8V[`?*?E*BSvl*BYbuDJ?:vbE*kt?B9##VF[]TbC9BVl(g(QDM5+R9C9B+fBKmNNI^[US#]X3Bs9R7OBSfI#3EQkBhsiId6[9/F<it/V16UT#<eK)-18;nj)R&t4$_Lq%&6;&LJ?:<*8POV:-@Ir`*ep`t?]odVJ$LW@lKdxvB6vClgS0BsPFOc.B8^/0)w&*X6,R8dFKe<gBWtI8HWL2NSA?A02<^1;149e=.X<eC9m4IS[7hRt#*Nj<19k)J#w.,->dgQaB8mol9W^fKB2S`E?W$mN14?^PDo0G6FKe4H#@`1vK5G,2U;$lhK=ue-1r[lIF.*58SUEvB0?H)/1o7IU7<EMUL7Bh9BSgWi7s9h#%op:7IX$'H#)w^@16DmH8$?T]H;tt7B<<`T%op:0IWx.h#**WI164=tGf#8g/xaU^<`O4V<`O4V<`O4V<`O4V<`O4V<`O4V<`O4V<`O+S<`NLa#Z<qR;8?Xr2eZQnIBG-:BOCk6#*EALDmuOS;6VIeC3W[k4][':CIoM7/ldJ_$XH*3$[QO$,YV'qCs.Tl,YTDfBbFgT.]X%L)1u;61:(G$##A*c(3%-/BQ.CHG^Yh/#^OFi&ljl#t[jK0T6ub4D5EJ%85(i+.^k(_7Yudk06;rc2o/qZD6>qKqo]P,ugos^6^'82#:;-5$@MpHa/Jfd0s*bsC5FIR1qfd[q0*VW(5Kl(LO+-/GDTecJ>F-11U:u@D0^dI?]aKI2G@k=$egjeDKS%iR:SqBI><+:+'hB`0kfGM#pwdo6a50aF*Mv>6,eE(+A=;3#?Ci>E:<nS6be5=7v(sJE+U#'IpHE@32r=rJrZ&26^I[H5F+IEJTaQ/B>d:EDnCeP97K-Y.qR+@$;mqt-[e][n;e0Y-TMBsqfAAD*Q=%]#6'9m;t,T&#CT$s2i4*7BZPSDBSr)J1L'r7/95_B6H*Dg'2/FK#&d5O&lj@b#*=&[K#8:+#+,.g/q^C/2)9f`#fkahC:f>706JchBQcf[4,OfW#%^p#0is7>#&>$?S0`-eF,2DxL.iV&&lrG3?Zeq?6wBDM(O:C*8BFvI6cX)%>-0H:F'B3J&PN2uD8Iw90t3.XD#c)_4JKQu4,$tpG@:Lg2hwKk0mxx[1rlD]#'rue2+xR@8l_5@)cal`4gKtQ#4<]LCU5I9-wJ(nmVJ5Dl=n)$C1S/dthoJ>#YkD*#ak@;ujv5*3f(iTH,#e4C99&/BSg?H4mk,B/93/@kaqq,85I7R(NhEr#m>F>5Dic72P;3tMJWB,##JBJ7WKj-FtU.:<JbNk;P.KM/9(Z=EmE'T#C$6A=h1&h@UB]BVcnGd?;U%%#Tb&:Jq^Yx+Jp/h##8X5$gd'i6_D23/='c2J76Z*NiQNs#'EPNS4l*.C9IX'K<fw;/:gr*BZU7T1PnpBCnp-X<0C>l=h0@*BtBiIB8:%o?#bAe=mrGt97eI_7ZT_SBf_8t'TY>H1O1Fx8;TX?8Z=fF6^NfH6'XU'1qg?E6^UPN8V_318NwjZ6'kb)X()/x#$m0:+-KX:6^S3[%`aAL9SlHh9Sd^^6'?;$)NdIP$O[Dj9W<C-3La7@,bo1,@uoHKI(jhW@t*.1B8IiTGdtNT-wJ'@5Fu<Q0mC[45JBo*6[_MeBYY<i*.]*/#$#R1)jg,[,c5mX$Rw9n6',NAV:^4.<3@_&;GfB:`k:B3;1(mk<dR,(:/Eh`Do%&s+bu]?7tnLmB:4KX:hcvO7%S%w?]r[56(iXj(oEgo*.9uR(6r$e/xGH(##?OK+c(fA2LI^l4=_EC#**Q57$m(&(nhGAWM2PY6)$K_BSTWa6#8mx)Q7)7B8B*D8BWc]#,XPrB6Q]S0mD/_0rqc7Y$?Ue@ux.:Jpl(x5w[[g&5@I^7ZK%)BAm3_.oi.R?,e4XK8C5G<arA6CTl3Eq.T_b?$^xu0vYWI1rw_XF&N(NHw$wTBp%jE7_$6f?#Q'UCTiwZ$JlliCib0S#$)UF*.Ad/)97Pw32%c*E`h2oBSggF9ea`Q<aB'+Z]VJOBShvH?<@2M#%(h;/5O.ID7k<.Jt'T4'o[Zs=%_,UFK[g@-?sGD&:Z75BYYwF178JQ(;tIX#l&_JIpdVYBNv.w(JG#N.XWfkBoO<MBp,)YR=%)pBS_Q>6((4A#,rUZBVxS;@tCrcL2wtT9]VS@6`@Fa(Vq]f%]k#M7#>>3<m&:56dN0i=f9)i;n+&Q_kJ>IBSx:3BQ>Gx_)fDjBQ98AGA@d<,k5A]#.xZlH*MD88NMuBCNN%Y1;[M.=KYsU(1JiH(0kdU&8vh+r+sBLCIfGh6*4]^'n4d6F(e/;C0D1*B<Vo^#'bRkgjpp;C0`C*B<Vxa%sD;m5aGcU)9Gd^<JaNa?*5/Q-HU^jfQm^e$cUDj/94+E6cjl/NFY<#B6f+##[M&m'96]:6cvQ-(:xn=&-N8Fe2O:^C&+?8BnNwH2g1_.#(8_gH'&8GDk17%5_Y^3B6MSE2MvXi1UUXxO]FJ9#9Nx_2klA1J?goo8[W/_H92Rk?ETEO)5N@W=MA:3?EX94#B'a]=4pHm=,0[DN(lHw#_6<<=/f9c*iNS.$(t&?6bL:x)KnOQ>9uN1Bl7?P.83*r3H^cZ#w(v*.*-gZ5v5-.$d-=Z^JD1P1wK*tGom3CIa;Za#a<Z916rpE4wpdC4&M-W$5soW3.a'#4]Yt)Jn(R(25F^R4AwcrB2L-b=pf]T$XQl;4`%Ei$;>rR=IiRV6(RkX(8L]2B:W=`-ZjHi#wf_gA5a88)5@OB7s:DpB4P@i>w7A]7$]Np#a8Us`c:&H?17mE6).G*%2/iY=0E(W=*ZB`=b;V);/^w3AlXY=BTE79?6Kv<6*A:7-*G<q#AIZ+#xeZl$#*mo#vs-P-&+^i&m4r3.WfcZ$xNYS/5-Xk;C2EP?[3pU6>n-H;.Ke$;Qj6[?A'JVF'8QKLP[1/93D7'1Nu'vC(>H'I2ZI-9BQJ-9<X>1(N&MS,DxHa#aWG_<38<5BiXXn=eW^L/@fJg7xO4WF:CEL>#cRG2mS@ICm*$E)#odn6^lmH/wAgP92wUm8u/P-7@.LS21emdBcs:)'aJgo.qju(_KNx,16#ep&1pD[2/XrGBn1dL-wJY('MK[iCg:=@hlmp55?r*<8$=G0,YS334xwu>#mn.od:h'bBm.?a.B@0+'hN,@6`7fBFh+$3Bn<+]6bqZ_CTpu9C3XF+TTd%eBp+R*3f9)A9t%c03IET:H*9Ak97T+o#wr2&)LN^qH*[O&CTqs3G/[wYCTq%<&o*B+5`2fGDn(UEFKn#o-,:_.#G=T#06ig7#%)(m##p*5q2Y5g06h[512q^W8$FPfC3W(Z17Me.8['cbBn<%[17Vk/=0F0YBn=R2165x$E3VRECNamM#)nK70Vx/?7Zr87?i6LoDQm?WFh1Fi*e2U82S3LP/5/Ko2LHw_'nrai9`rm(9WqU79Wp:H#WVnRDn)<u2H2N=C5I/'%)cD8)-[*W##C&,(U40t3Hx*-*+9xF9?XcMB7DbnG-MqF.$8+BSSaG_28UQ0CUQ$/'2'UsC3gm,H*CIZ*m/Fm#(Ug9HtH`U.`n=KBU]w,Ukj^xHrpNY(VGQH#(JLK572[OHY&l#Hb(mG(VhYf*Pa:l(W$fh*PsFn34EA)kOF9@##vLD)LWH++FP)1)LaN,+FY/2)LjT-+Fc53)LsZ.(Ow?+-F[I84Ddh.G>&U(AP<]l;cReh5uisK0=)7U2cXnA0=(bW@8&M5(6U4l(6]p*.@+Lh#%'$lD.,mn#>F6>&;'wg*ak&J6b@xkCs$-h9B-%Y.)v@7#>Ag7$tuB&3fRK<q.v0b#%UJE##*NN/[/g%##*NN*kH;]#,GHACq6'S<3RtOC3;1hUfCtG##(Lj$31H<rFo-.6ZdlR0tP;B21GI,#s`l<21@-/;Qr[M6reSo#>YV07Xds)CSi*'Cq5RE),(Tp4A7Q(CO:'<8t<iQ9k%I#1h`H+CHMZ8<aB'8=&^2>6).xC<No$413nvU'2/u;SpcUm&lnlWC3VLh1VnUN)NeG&17S]T)l@=>Au*=a6+1?a8sY=,6+^)vfx>RI?]`+b6Zc&G2L.N'=1j*t0VrEP(3%E-R=R&Z6Z?Lx.^wg)QF::j/pY9V4++JL<e&Dr0q4V)%$iRBE3C_F<k.[&(UfBl2Mk,QD9YoD@'2Sv:fVGN9iZ]:BWq)o:/$M`CNjLc6(MM[#'N)3:.xKLG-F,c@SiWZBn)oY6&gEn$B@ss6&m:U(S)@G#W']oCm(HmjSX0/G-EOECPcBm6'Pj7IYh?x#(:daG#SHVJ7JY+;n7*C2O%['<D3CB#&QHE%SSV+6&m4S(sfU?.)KP[#(A.vClix,EM;-,?eM2f3-6'B(3iN::3A+fBOr0OcBk56#$aWc#$a[6###A-(<4t4-[L&u#*1Ns/xgq32On?r:/EWu<N[3C33n(J'2UQ><NZF-(O)ga%qK$b32n<j(4dmu2K`*]1DWjC9X-(C)AF<jC2O#Y>unVlC3;'k$#D]p'j#n,9vSip-rkX[$VrtMQ@N8+J$<.qBsOR+#?Ci.k.[71&lkF,@wwFEDn)R6R(?l:9t7ji<Ndb5#'9l$8[(:MBn2_w[pO$L#Z=NkC5F[#APNooCg1i9Am')_Lg,tZ8['_[(6[6$'x<;3)S@i1-?sX<&P`hx%5f,lAP<)n)cd9,('=VB('4PA+bCG#+bCG#)0j)c#QXwI1A:js17N[/#c1n518u:p18u:p18u:j18u:n18u:p18u:j18u:]^2'WrBs1p??VL`O##NKH(;%.9qgK8(.^u;/BQvoZ6c?pa2he?7J?W8&BsO8;CK:F=AP<)G##>`48r('48S.tB3EQ9&3dY484(]Jn0nuUuC*?]cY#PQW?Hc3u3e>rb1:gJL4EW3JaDpb[Bp-B7H;RS5C2uYp.9/[#6cn2A#)kx^HEU#M(6TSG(5EW.#?UuAH<:/`DddwTDfak@-D4p+5'Kv?-v&eN#$jZv##w_m/&5ZG@9YQm#A]FA##HDf3`TTk>%eo[Di%hp*`ZXJ@8-a-#;H4IFEBwe9l=n^m[8iB#>>5($c6Um6^JHK(R0sS-'V5O$vASL=)/&>++$Pmt_`RKEL+Ix7#=wW7@@YMENiK9#)ln_5a[Zt'<sWaW+x&O:@B9@'pN&t,fvWJ'`3>[78*`u>)NB/Dp<BC)nH6U(qCYn-F[Dl[;ILKi.@55;-4taFv'.P8u/P0@'DfCCN:cNCak2c12qdk/r?'NBt;TC(7wU#$#Rca9<Tud<xov;;p0aK2MclWO^V^S:1IK>q.fjJ#kp0?CFqE>><6`Q/p[V+)K8K5+hE@u#&+'c9<V8M$u93p-^)<$#$MnJ5D`4b[oHef+3xE216Z78Bt<IW=)DK(CTo01$FrX706NJ:)9/mW#E'wH0:AP>,&7b:hg[%nK#j7J<`X00._UXN##-1C)hEE-#AF0p6,sVu%Y.>[P'n@q##.dqBop3n6dNV:$VWpm-?MdI#>mOi%)uG6/9(^Q]PP>:$mM9N7:I->8PBDS#,<W3Ha]mW#%B5X7:]T%#&[ueIO,MY##@qZHa]k*##1.a'gAX.:2M1l;TNKg:-J`0J?`82C3X1&6^lm5DxY<>hFXu72Wao7F8bt1=jwKHDggk.1oe[E7vq=QE^kT(>F8Bc<h[%#7wn,I8#p_a8<ZaGHrXp&27[091K,%<SE(7)3PllcU.e61<e/Pv19G8M2R4tMa,[SZ6cRcL#wRCf6cR((ih@57GXYV:XKEuJB]vC40?Fd/##,rK*H(qm*dD:PC3V@j`Ijsf_JN:((SB'$-GF&j.W@ro$Z&XpBX0erjQ2iL4=5'^Cm)W:7?l$n#gt8v/q6?f/x5=q.'#YK6bqR#,ZZ(C88fKeHwAOv#(:NH=^>Dq$,xWMBX0k^97JwqB6>]`19cA0#*NSQ>-V.U#@7C:?v9ofCPbdxC9jE6]$9P3I^up_CNO.'l(<Zj#)cKw1XZ84#L<BV<N7%YkmSx;CPdnjThAqXCNs.W17Ve->Hg['CPbh6Bn=8$ED^/O.A_U(#CU14CU#.2EljUi(4>2+BY]261SoZv$cg9J/u-:)GA7Q#<3IkvCNUl*7`q`&J8.rtIpdWQIW[akCj07+CqH4&Bvt<+-;lMuGhe7wR:o+QB2p.`Ge0fI24o<O$tkI4##-/b78+2d$tPrx#@1;t#&]/';J$K80mrH3CPZ*-6'X4wGE$$uEkApE5guFCBCh=aH9i@b8$/m?#'sSIZGS#YBAo&`8$,ui*Gr25#9FA$<jp5&#%ix<17VdtHX/(.)eQ:MgPX3VflI9_BmtEE9qf#;UB_q8##.w*)89'w(V+<E7]XF[<xXVkG'F'm5xh?>'O=c^#$l::(N(fEJiD)5B8Je<BtJRZ-Ei&Hc?x]@#(7ug>]vQ.uwnfW#(:-wHI6e1C31oZ:TvwpBnTf`#OjO8SYSWpCm(xF^M*dXC6a7^FKwvE#+o&:6&g=hKPuGG6;8WFCm8=`7x</^#VQi8ABG(8#*<a<6'Zf:'pN&r$:)%8DEx8KCr(D*tA1ACCPbHu1UCVE0UvR-B>A28;-b0cHwA>##&J>%@oZn#4xwFWbK[7_D6PM.C32cV15m3p06h-.#%'^8#*F(^17/f[4._#<:.ucI+C.a)d<X8wgUe3,Gfeol%UMul^PTah:/1kQ##;R02TU9D4K&=@#>Uen]T_WX24oH5D6PLo<)44(N(kF^#E1'a17B`^7w[Y@IDvD,<E^B;DH[$f6('?MGHjWbBWWic%89mV6)J(BS4kN`abSCACU,LeC3Xh417De-:Td7J$rr54c&HmVAY)fS3-H_FC2v4n7BL'UFj8-#(PW<$)0Hn%2hnHE+xsTuJP6)g#<W:@06hO313mR.13mL,0oi<9;6`[-8$,Zr##YG:Ip6:4IWwGsB<Ns&I[(@G?;)Jq35us'*)%'r*)$t^*)$E>#Ax[wjZA/V#?P><#(QhqHb,`dH*1A7@t;x,7d#iO0YQXc(3_Kt(lj^.(l39((lNK+-x*eh#$t-*#&d5R*D@*(*D@--*D?H?R;ZYk$;sV)CPW:##_@:n&POL'Jbjfg2MY5a=1)rmCWWMY#]4%[Ek%XPCNt[S'kNDN#(J,BBlwmuEk(_3'wZin27R/R#?<FtBx*0i2T]V+flg;C??hP(a)U6BC34O011:/h$4q[&2LRdiBAH$]q_)Je/95UC7Cw&^#**<2089h;#/_XN6VopCD%6Q83IEdE&lju5[)<Wm^oxfmCm-fK:3_dp6mvG5?rhuV#>>`5#%@U:Q&Gqs(e%jACk'e50ui1PGHsb=Bn+>GYH0==2LI_.NFN^u[T>0&BoxgR<fu;%7<xRc-@%X/3*YHJ#Z&jY#sMpp-VSWVC5Xk32q%TR3eb)W+]WT&5YP4D:9Zn?*`ZQi#a`pw6_><u#(Zd2=gnh@#'b(YG?/4WC3;(d-]VP9ASlc$B81;9#($K%1;57DN.*qVBWk%_;KMohJXSVG:9xPwBRUDaGe'?DP@_VG@'Mm2CjUm=CmJnnDR)FL2d3A26A^aT'20FZ93E.V93E@]93D@?GaaGcDR*plrFka#6bUHoGe'69CPvj@5tGX<<k<j*#&]M+JW_(pF1dP-0?6c<BWDYW<*;SD2iuD.'Mw$X(S#^T%[e<s6`%`B6;.Gr0E2&jDX7FYH*Y%d3/;RkSP0ET##&NO#P878=xfs8H*SnNGe8ZH<-2T`aaHdPCNY'/CFB0hE`[1L3Z0<7B>BPL>HgR,=gj^Z$X[u@$Z&JLkY[XT0jJ)3*F1d=%Sog'7[woCFxTfjFClMi7<&<8(JHdP8$/vH#A4$?'MK[aGonfq1f]$i##:n4#MgQ1?*NU%-^`VT#%;kj#&ZT/X'n0PCLxE:?*Kj?._D4)%r^m26v-qf###.S7%e2e6a2[e8Q%@Z(702g<g&5`0V)eD#&InuHEo8i)LaE)-[^499MQ@,)LsT,(Ons=(Vqij)M&W,(kwp<42GNpdV+u_PB]nM;6L@719Wjb##6wr2SXIRNEHtrK3djVJZjM,CMY2t8=r)k`FtuDG31?77'Ai45_G=0##5Fu#_dWH>)kfloOu?f4+RB82,#[T=wtmK-_S=X&QOI<$iFOG62i.4=n%>>S6Z29##A8W#4Vj`8YJiTAWg?M9<oV7I(TT>.'7%cQ%;651pI'Ol%4Zp#[_MK#)m$uFK[v631k*>iHBp$#)vEW96I%6&u0;^Ge0xW-]l>a(L:X3gkn=J#)mKrG-.h2's:o7#%'NZ>G#8B##KMI,`i_k'pW-()h)Zr26i%4#>>dIp3)bM-od+>#?jtfCNW?Z#IY%g6E`5;$U9ra6T,*c#$FA`'lRGP$0v&(A=sru/6vn'acpJ&B*SU3_k1.9m5^th;Gx(J#8MDrmBM@#$]jgAC7p-YAS#U`0Ua,h##P]1#HJ#=*mAW6Eef*K:g;c=##vFh2it]&*Nsiu%RAjw19Q]%$?$'K19t'HBQ>VNE5/^)%2CXFD6_pV#1/-P/q0$T$rqo0rm'b$%)+h<K#iSn0'ltkBp+TxCm)<-1H2=Jb]j1`D@QlhD=bQ,n63_x6bJ=P,-<A(*O@5(N/M86D2)VP/I3%qR_<0wJlr5')lmqV7YY?-A_f6II`^R5CUepC0icZ_6[qPLP)BswAvdKXLTruV-oMQS7'UN7%qg6AJNb.(#$k:=drRsv%v>O<i74ieESD%oEJ]ACHCGJcb@xqR0nIJX8R>uE$Yu,:E`I%03VNt^7q4dj)7Rv#&Op$/D;7F#D5T[64%q01=c-Qs&`pZe1/&'e<3#xg3eW3('OX.?<.%d:19j9`J5$&l(8Gm$BQx=gZ;&xi#5Ug+B;Gmp6bp-h##3<I#)#-J03/+'?sI]J(qOTT$7#_XM'ObJ;I*1)(RTaX$D04rEWQ>Z<4$(>3p(,U**kei#[AR76Cis7Bsv2vW`rND$uKHi19rEp$nS5H:L.tsHF[wj998V+$5cO'=%3[F##coL)RBdk#<;mo$uD-00=,8Y.tP_87=.,4tC)COBYuI_BShBRTO@i(Av#I78Q#x%)ONr?(4,@a'`26.Y@7pY##CRi'lIAK$1](Q2hFhr##^)`/w@H4#Act(Y>6qf@v#=m(3wSa-c=Dw]mY]n#XK22[&O5_NbQCd5wm125urur)h*vB$Cb(cB2/fM##?hY&$Q+C-rkdL#Z24<'0c/w@'-mN5Hm^RP`;sS1:g$.pX+ikT58VbYCZc.##V:[/U/u1&:SYSHsk(TB8]1;Bmqxo#7;5_CE6,i1EnjC9*>I;,[=mL$s%M5-bGo7:ff?GLTs>B1U8LE1A2t9CNb6BCk'<?#$t-<###(b/vLOX#%gaE#$t9@#$b0?#%T^F#%gmI#&d5TIoTo*:jxLOJP6j=1/&niC@R:aF,;<d0r1vN?[-C?6`v?T0p9[]-?<qT&lm*A06iG[##51r#*EcT16<M[#$i4fEdjqq#>KGI#/Dh+Bltiu/96#>40h;j=xt(W06iaV0#=Jk#39Q(.877u06hvW3.*QG/94<d#>mMCIB>ZGBdc9BB<BZ+#XHba2L#Le$$7r,br>B*gc+;2;d/&g)kYFd(8<Ek2pB0n?%spJ6]]w,4F/pI4Po)(J^Z:_-Du.Hb@su)LP[nI3et&O2_$+U-n?T7CgCxiA4wT+$rr>6>ml][%SRPK.SLN#ei2[p#%)Xc#&wPQ]Ir/S2h@qIdt:7iVI+Ri#%'lM30@[:B8Kg#(U^K2)9*o))7*bT(jU[b#x<nPGYJKK<D3x0W=xd1FKR1<BQxb616H%#HEJgiBQviU165p,t'%-i#'MPg@9<]R#%h5C##T5L.X4^'&n%Y..CWj.#$9&^#,vgA#Jkp)E3:b@Bn=I,18&*2>P^7b>duVWVn'Zd?av#ZBQxLA#$k&[Kse+d4*WZnYC$u1Decs</rlwf4)e9H(JGNv(fc'J#'DYa(JGhS-rlA^8l^rHKk$0r-w6:<7sBN*8m>Y+BxEK(ICKSvDp3<)CdMZ&msYX`B8'Dm(//#YCVY)86/4?219M=$#,i-#g2<hCKE2t=6_%OJ#''3S4<0Mw3>*$SK#iOk$ZS+@0Dpj1H*MD:CQNSKIC3u/l$xRIk&D6e#)$UtCO0F1HF72$Dmo*03)1T:#Zi#QH,*x4Btidbdr^I%#Q8(xH*MJ:h]r2rfn0_/&8Q:6##>7B0O'^D$v[SL5ui=+##-UO$-WBW+]Vws##-+A$g1lfGChRQ,#&ZtF=8;uAg`)%6cVoZ-@nwc#(8_g=6U*0CJJ)<&POr%Ge3q'BuS8xCTq*F#&v)V.SLG42,tWb+E(&g=e(M<BL?^C/u6;5t]&d//Xq2'tb2`f3b9IY-Zjh<##dFLB;^+E4Fqeuc>&:G-x=0b#(/><A&7501LqLi87+IO&$B^#J^U^x6&co:o4Z>Y7aTr3D]%M-9NE9q8p-;#BaWNZ$'&#Y9Ta5a8<n0*BR3(=<iMw##/bBB9:A5C;IKQO1:A=`=HZRO;jrfv4Es-cAP=f81:SE0=dH=]8#8(H-?sL+#(8r;97)G(+A<?M+A?:H9p`Mp?WI/Q18[dLs`6Cl=e;LU99<MN?`BjB>doaDG+V=)=J.4_/PL/W;O^uT19d73VOhAK<0KxJ=b4(a##(KDQBbiJ8uJ>R17CF2#m@;d15w^7qgfTJec+a0$@F:fILE)nB^px6(fn;w9:p1(##',D#Uh5OBR3FG>aiq:18e=j/w6ht;NX`G(fc->(1UgY(2IAa(/>.)##c;3(3hQ*<l)u=B<N.UAt-&l<1l[O$s&I'%+U-IBR3CB?E;baI@k*<96Df4.[U4%u&-?H-[v,/#&GaC+B(eu6ce&?$;ETo#AF<Z-ik3;Z1Lv>H%0@l(IKChH'8537oc:`13'=(Q@9FF)BTNH<HxXu9MF'S#$^/cEo;:Y6dVai=GBVa19^fE=GC:>G.a_m#Q#R:5cicBEo)CwD-HxA<lEFv<dB(=Do9S*#'>*E7+YD&F*MjP&lkFk1<dxPFiZ&WBSJqf1;%T+O(*1G##Gu:4GJ*8sR*EcG0-@c.tsh33D9fv3l8[dY>YGQ6vIF2Xf61v#&m<+g)Yq(*-5v02^<nRH:N*aNJwx(89?cUa)w9N$`S^+.#:&U;coE;3-AZA%;mQ,UgjNN%%jrndDaXd/w,_i#?OE&olBOV##ADM,)&t/$j?$DB<Yr_H<b-s(4C)8G]5Z8$r25&MWeBoB8:$n[7j;Y3-6V$'2p5hQV>dm.#BYrRU&d%$;dgC*4%r>(Vr&V&p`3+Bopxx#B[[b&53B:9OTJj##9/C%r,HHg2s_#=3:No9UgLDJZugI#w?/;'l./H+J9KR(,(,@(m./((:cET-AQH_85+vx)TB0r#[BYwtdkIN&lkR'104Hp0Ju5,/92G.3M.bd2d_,):4>*hC(WwPB`i(#%86eEKMC0+&F,9`+xt;8104H]K%`KgB^^c-eoC+gMdhZs$#qgOCPd9DV2p8oB6]I0@xmP%6dK,t#$ulgqf1ps>'bfo/94Hh%Xjr7,>9851/x<iHU_]PCIDvE+A;jd##A41#GigI62:UfFxsH5STQKtN0H966ZapG#DN=l/2c5W1q1Z,Bu%QeGfSH:#*3jCEkrsP$Sok.DRF#uDj8/R(JQPd(lx(F/UCtNfSgBN3bl@g6`H&?g3D.1#$c&b##B&_.^u6[JlRJ-%NYeW_GH)h+_AV?%BM`#3IWZ:+SNU22LI'95'xpC3eaJgriwIr5'V0^#Jlp42heTB14:pc#.vbR4EsT@3nqBQ3.*:3Wb8x,']Y__0X3_U6axsF)RIW_*.HE[#5u-N1VG6oTiGiu.tl^0+gp.>CWU%=o9g2AB6Ib<1l$I=#9EAA&lj:h]PSgG(Nh0k(:)S##R)DE#I,in06LjnCkL;[BSh>WDZkk-E34NC#[Lc_BO`$J$`o#6k'2X)RVP#@RSON]B,1bb(NE6`^k1`,aLTB.0?6H#$ZSuSLrNuB##3rv(+p^%#-sT-1qG;:#]Xt>2MYqf##9rj5KGODn@OH**1fL-3IEPN>$k/2?^fsfD2GXG(UA,P-F5.eAnT-B##w_Y#*==L639^)6d[;P3/2$xcY0:HD1NO5,YSp0,YTA=K8B]vCrOk_TileB&o5wml]Vpu92RI*6EfEv$r*Zp;k?dUBnVRs2L$k:4*<WkB8Kb&Zv/_Q06_pZG)['=<a9U0CN)l%?EGe4ji&B5C3=tE6;7*CM7w?4HAO8<0NS8Q0nYR-BmxkMB8N9`.[X`J'22I9#Ori(c=its'm?%.(ICEF6'v/d%8Fx+<k?MaGg;Y7I_t%16ARCS3L0_ACfWHR4+'/rq+7MW/ohW@0#;%M;e2T;/uvf0`c>ux.'[8=KNgw4#$l9>Mg_D&7SFv$B;a(C5ujrj1:%$k%v(($0DPXXDo9Z-Daf#7DE]uCN%c]j##&H[%C?Ur?*+PV3MKs:,'5#f6S=&'Gdk3Y0##s)%1tOsBLsPD.6SH^T[>N^:pvvv7C#.0fl?-^D)VW9BQwBh5LU$N3DE>F/wQu4HCFp10:ZU?Ck9SESu8*3BR)?0.f-xw2jD_i5c`]PEc>Rf#$[Kx%Wb`H%g?l&#@8C8;dNud#Cx:UK;SdT;2[/r8w52N#P.x$_J+r%^2e(s%NUC0q<*Ot#[DZ0(hMAp#$c*B(hi;I4'lQJB5^?,%SS(KBjG(LGZ4Z[FE@LxF'(G>De39Z<,;POITvliFBfgOQWt`SaE5IN%iVTh6,ncX#X/;r5]:]Fd;fA@2hB>/@/%6?:.u`MA5D',(VMu77`;[CG5(6:Gw/3on:m]-#E9qm/wTw5(NnZ<7^TbQ5'ss;JK+E,@Pg.`AZ%AB2mSkRUl8^0#')gA'ifW+APGq'*.Ueg6%V&)=pSW&ZWC??)Ldh4#4>T@0#mm?&_(002i-<]#J:%V3XPlC3N9r+#d.NH32HUa8UaS,5e:>o/?pMp#%i=+##=)[$N<%keDQ5/5>TT(-@.G0#&Gv]%*_Jb6EQ=+.>ML4#&dA^(X>:`6cPYWBj=p*#(&hZF%Jv-/0>I^Bs:xKCO@Xw5BBxT7(F>L#@.>02Mv==5?T:9156'3fnhIm*1]L<4*cVcgsT%D6bp.t$VV,NoX=R?0Y&_R0Xs3/*f5>:$ivK'3O0?&sD[CO1:]nR1:ShQ13>+l0Y&eP0XsQcEHD1s2gp%WBXgV4k&gYn7uNM*5n[eABF+^N6%1^#:f`+4#]v6l##5ciHrYauH;#&ePuXBlCk:oB(lIWL+F&jK06i:w#BDB4'ige2@s([?/d5ls#A>]a#A#H(#Z;7<$[9$`?bMPG7'0em#[wlI1:KE(7(4LJ<ku;O5esgP-^2SP#./'32ilx#D:^S].]/u_F,;Vbc?dW4#fVU@GBQ-n1;X+XGBQ--0t*LW0T`sD15v<r4/ke##A5TW#MW]01;,6Z06ldH#a<DM18=m2DKUCY.qePwnUK``7qne7$;h(t#[p#`FB&_U#g_Ag1:&H_D+C4'(fck2(JFwG#&v)WkpG[g$&sT16^Kk7G+b&pCUx-(BECB5BSli//r#k_&ubR&3Ib1a%Sm@w$Q[3#j)h;6F0.sE0=,K:,vS-nq.^+cI^Y^[B8K*j6'>ZCCWV^O-?MkKl_5(H04+_:Iso0Q#[@%2#@h5U%89N,Aqd]@B6#>q)0.hOW)F:orK)bD#CT:Z1:[^q03xnDc=sUN2OIw@PP-il1Tta+(9Q7d(;qxp4*Y8'*`[94H#OqW/JTL`9Wa#<2MWQj(8`Wu%8nAF%VpPLPw+0u+''TO3QW`8KM3`ZCLUqc?VLYa(/vV0'_Ge'IQ%xTHc'F[RsE5Vbl@;w:-flc#[gg.#?WO(.^urq#$W$N#)u_>/t8.u*k-,,&&83[S4jpu-gP,fJZUPuC/JYP)6m`;#g@djGBX9scxrX:$;:R^O'e-??;:'`3-BSsnCjRI#Z%2R&?Q#&DnCf>C/.(CB6>Yf%T5#c)L+oY#Bk-tI^`JW.X65=##>M./qMVH#Y`wQ(+'&d*Q7r^(O5=d*3m8D(t*QR%8&Es6o87F*)%-9&PO@4HfFso%rZT/*)%Z219i+bCkKdI6@^B#GDTr0Baiu'G_*ohCkLD_F6ccX%#JVD6dEQeJxW=pJ?O@ODJ`P=BSQer$4L0Fi0'OSOBE19S4t.mCMQF`<`W`bEXmvBF0@Zb2LIX.1TuxO$UO3.3..1N(U*nX=NO7L6c3;0=+)djFEoWl%Ib@5F8/3u#c#1hF,,%S6bJm(Bp-iq=gvxxbi;5MDM_vv6#_@eF8w=c21T,;Bn=KI6#%?h6*I85$3jFr/PRuBGe2=]#O2Ltl^I;T#$$VQ(4Q@w$jwoGL.s8wc)J:%6[95H(O]DS$tWeN3+aDfD0:6WWDWl0#$cs6%:)A,U3&5MbINq'ZCLvO1i_ZB#%T]H=(*t(=%jnCQ`])FJ$CE=1:^(JL9E/F6c[&c;/$&XGHgA;.Be75-;<?07_dp]F+.(mAFpue#(&GJX_3#O`IkDT(g_]r*Dk9X#DjIs2t:O,2hR=(q5Ula3e$'c2nP'dCSW,GB;6E8CkLEC8PT:E+`,;IMe1&C#?'^G(k?n%#&tvdGCOO>2l_i9>GMXK%Ut3lCJ9jd89w.]ERl,104um[/we`i##$%A#nF;S0Q_:+0XEFJ##_kn[].&d9<B]`06Jf;-rl5mk's3BN7;Ko6[h]eB8.l9)oi-4)0e6,0R.84GCkiBGX(S'0rApr>UMFf6+P1B3l[]t?tf3#6[_J::5eO<'7J#Q08?E:-c:bZCppFE6$c8Qjkqx61kra&#?4Q[EHZ6_(LM0vFA92.4i4f52p,N.#-DR+6boM0Sk*4T5>CV*=hL971OY+X-`l1@0$>Sm1O3VvEV*16B89k%4+8n0qIwi_'mO(U-AdMd5fhsb6+;6.2L&i^EJTE.5es2-e%V+wfQsT##&QN>A7Yh`_K1075_7+$E`HTYF&$CQ%;q?i7C+S(5e'4,5g[ara(eLA&/G>,=Kb09#>R6c&.foOND:;+bxalmbx`s2jbOHr$=#9r#N7,_CkL9K6`Ir-)vOT?EHXe`24xBC8pOTACu&Pa$x9]I6*sf`EHmAT8qDrG@ux^a@<j>e(VL;_)L2jt4hwS_'MLe(CNOF`L.rrW)7'TP)8-;Z/%6u?C;=fCFGVa,Gsc+p(PWN_PHv%4)U&_w###W<O1fSU7(GCxA`I_'`6ExKQ;/3sL7Kb017;UZF0M6C),)*g),)*q),(eb),(*:PfAd*</E;a8*wHs2adu7<+R.fG<CpNG`qOMG,[$l6gY1=*K<5+1sV#96cY2&21@*T6[_G9</N8u06^C//u+on06^=70Q^Tk#-Bc@3-H_>+xrv?,Fh681O:di#;%Kv@D#n4<-V)k6_h*ZNva>>/:BL?3.N?R.[V[0PvjTA(sX<r8%qV(2@$3h(/,=i(/+s+b&8ns#iI4*4fFF*6]%ih-?tjlj(R$Q(7#,-<gos+6[T#?C54[69SZ*_#NJwx6[`(`3HelsQ@MYpG&%+P$^R<$G'?W82h$FD17CAO@>xQI<r66J7v;7x#)n-*6cX(7(7q7eq.wp=/wSj8@'(mG/uRHW3-[a>@6Fe?=NHn##(0Ng/n]Nr04+_+6(Wp=aeh4=9T*fT/q^7-<4j7C07,+I1s^s-=amBV5_tiY9nKKjIs#*h&lk]%0n*J#r8*/d##-CI#&=3H02*7=02*=C02)v+02)s*&53Fa#)u='6^rnd20:F)###?U#(]4X9L)711sMP&##-LLM01;i16F3<6j?wiQV7Hv#,6F1<-jlb#-BAs17C@vKia5PKia`_Kiax38V$s596Df^&55?g06ihh-XBYB[8.mJ)l7wR.'[3,#:u;#6dM456^X=Q6_BhaRnwJC#uwZk,0:w5(&J&LsD%ee6_U$#6,m(36[:]W8Vr^KJYFvf8TgBc#$kU$#)ng7G,]6E+GUi<-AbKx#(7xZA&)m-;Mcje-?UlK#(A;96A39_'2/IG#&d3)[R:IU#$tL/j`M%-7Yb[)Gc5/.;K=+A&53-VEQh/'GgY9X7)h*J(;Lfl(<.4r(;Lfl(</cE(mEpK#3T0+7)T(s2K_R/)S$E;&PN8?#5h3.1;[89@v4Ef1/[7NJGIv(^ir,CK<A[6-wnAW/T(T:19ple2k&++lkou:3<EdJ9VG4PAW9*L104H`2+x=d3+HNA-v3D%3)0Ko##5A+4as3<8l^c^#$Ww<08Es:(3G#==+)NP??DJd(5<)v(47=:4FB6-Ug8)Frx'Cr@8f7x]v,U7^kM@o##6x0Cm5673I*?3FismdCm)j5CpJvTeVEH8=]L>uCi.U@0tX?qD07La3-Jr'=Em9Z3`UEJ,upJIB]n-#i+]E&(0`mrLL_n'6<XaK'QQhXYZ`WsVKF)865_&FCNU/>2Mb%k&;:Wvt&pF6Y>>=8.XakO(P+;sIlVbSdMx/ToQSrkB8]O0<GbxJBp-(XS_'3P@tD4815,t:#Z:Y;3@:]b@<klQ##5G-AZ76#C5K/U#v,Mv#pp`QCPc$(/w<@r)1W&u#v.R7YkWdp3,AS$]*kWI#$c`r&nNET##Bm,.YiOVWGZL<Dt(&Z7(57tR$IgpJ8IH_FN+>(9iZv<-F>>@H>ck&'ifWKQtFC[$s.=:(3r$+(To&%#5;x^BR)v1#-wE=EeMh)(qR^O(9u?E(:YR@2L[3nPOB3wpBw=-ReW]Y0Q`,G#$`')#vDIC#3m2'GE;g>DK#Su2u3SJ#eYo2KC>:9&O.+w%13:+#?D$*#_[1igLZQS3*Y57#(%fRuC%P>1J'?K-$^BI)g0/CVK2eT/R&@;)dxnx%stC?D4)fV:A=q'#&wi[(]fa.(AIo9)g7:<N]M6[Xgtbv6an5x(9RhE._1@hAm:af#Qlw:6b8f@#I-1TBSHx#@Z+d^CN[5d(VQHZ-*t5_(h9%*-,;WH$wvw,sTtv.GO&wdD?;iDCiEgV%umsYD2'LgAXH8n<e8WJ9jx&m-*d6//p,&W#':t%j`0Bb2h'Q#/q0Un6Do%CWe5;9uud`%2d'KXtxgGX#%0$8#%0$5##7gq$^=wp?r_aB##[Wh(3jDX(od7a#nFb`10+Bx(9%lN8^Q76H5emSHEjg]&]9v7TP4GTuA?Di'20+5-4VlY9Wj'%GdPd(Hc:cxI`,a/AmBZ+#JL(?reL)'#$2Xx6re^)3a10u#3#d)Bv3H?6asYfH'K>`[$1j,`N-7b6a7=s(rp?]#=n0Fv:4t[0m/o0Pad?i##>hO-d_)5AN_$[;0nJ?BWXA36_KFS0Ws<4%7M.?92Q8'UUOTcFGXXa1:IFv6*<>e7BWEhL9k(22h$_(FAj1>5^hIk6X9[r.J<eY#&Sf)SfrN'^nNZ#Fp(-&_4$,A'wL<HIWwH]1sTW%(WIQ>.D''Jb'sw9`G&n;#$i45U7*@>1jL*3k<XiF#v)@i'lIAL#IOP=l?xpG.ohYKd>ako.pB&*#5*LsJ]$aL#Pfq`-[dG-(4::R(rRp*$6`KGBMbhr[X^QfFX2Qd8s9px#QmpQCk&Fa=j(/J#-B`l0pwm]Js_M>@=SsTf:7RK#%'*6#%'6:#$t<=#$at5#%'-7#%'-7#%'9;#&Z/Q.oi:M@uGSFFgm3a-@%3%9i],#-[@<*:J<ri(qQ7A%XPt:B[01Q-*Ak>#$tI<a,eKFI0qU6EDnw;-ju3'CUJx;B`Y/hBR31Gnw*m`##DUt2KC.c-ng&p#Z%7#2S;2d$^uxA4NRW.:OI2LD:'>]HAQ9=4FD==D;KK*IYhIG(W@PP;H3_e2mS@U%onOo'O:^K#$b#RaCqSA(4m3p##uYm4K0n%6dF#'@tKKN0r(`?(<-oiG(3fQ/to0<(/,:_(//]-@tKKM0pZaJq1Qh[H?MT0Hw0ej98RiF<-aM;7tIXnG^o@gH?N&<9SnxI8Twk^96YT5:s36:9=6L97$@&Wq/t;>9Qahl2h]#K8s4te0TRb60Ten.0U=/@1Qk(J#>__k$s$/)/ss0<0UOHA0Z,H66^NYD1V>3d16u)Q0Z5Q50UP%-QG+j>0v,920v?+X&W$Kl(hMWF8U#H596W[I##;bH9RT%E07JMTBPgpTBRc/1&PNu`?s$dh$<82f(;(f/<lELx1;&tt&Vx5BBlRKaG0.O0^T*$,<`ZT5#]+9iG-6w]%CvP-2L&in##5Jrb,,2q0)s_n]I9#9##>;D##0]i#9]xa6c5@2-;LUK#9@B-BR$C^#8eot/w8*0-EV8S%8U[0.Wn2iBj<d1*3W^-#(_U%DKnqp2Kdh./9l]`;/JJ5ig:e$/95<+'m3o['wQd<$*bMZ<k+nT*->3o9YDe'E]lIv8$Y:tp25RO&Pf8M&_Z8=Gs,OGMjD/5Cli$.<joU#5_ek/0WeR/O.h0=Cjrek#OZ,WCk'9DF0^a2O(8nT3c]VMT4VP=lH?u[1rn>@qm>J%%9]d2.>^7ok'NrKk'NrDk.nh5Fj#8Uk'NsThi%[Rk(0Aljr+A=IVb,T-GXrT.j0oR6a7cJ(4K#=G_`?-A#V#q/mD^EIvIghH*-4n#4a:T2K^k?(qFj]#2@$xnt>(K##%06Q[j@s.&'21>^0.Y#tp>cFis/$#>Ho6)36:O;i-b71AMEo-vLQJ1po,F1t%;1cuqaN#6Y$3E+;/I08kXnMcF-77us_cC<x0?C5Xh2C55Gd0p9Gp#CoM[0@h,l3eshE##%C1BR4$a#?HXb)n5>a*3DV47=I%V8l^UvQV@wf##GINkASs[0RluL##*9d2oN];eV0K03&(T]`/M2m9xqJt.lsE+C0L].Do7L7Tc%B5TkTtR#>T86(5q&&;MHd^5%GwD+A>kq@um`$J/9]kCDn1_`Fv&1`Fulv2i]iI+Mudq-,R;v+)WkC=)odd#+IEX5`ZeQ&5=pe)n5Jm%Y=iDBR4&cl$0UA#]8*l#$+V`'OLjK<@fa/,YS<.ZVCk2#@dXxndFS7$%+e^;d<Zx.80mHlAs>B>#7JN3eWZ,##w39%4C:A+]W5UlB%m)%p4O06/`mT'2/Pd#aqZx6*@%G#4Vi%W%Cs+4cYv1OwBYH`ca&9Fh=`P#[we>&PNWt$<Z%K22>Zvn8#C#BeVxK*ftj&'P%2X2G=-lAi'@:K83qm&QMZv$;7C'$6Gle1;#0d1:g$a65Q3<97K%G6bxhD#-9p%6Zdbm)oo%Z0YDbX(3q`?)L2Qm#%@RqG)7rw<5)tuCk0NFD=g6gCk%ub6*h`v(:XNO.`x9.#E1b%6GYRA*/UCp$/;D)G)8Oi2Rl6V7Ro'5(JIri0vGJnC.s$X06p:)18u7WP%lQNKp6SeJ`UZ@#YZrI%NZTo=bSaG07-jW2h?b/6wWU:Qbx;qEt/>/2K`41SlSa_1UAXR6bA8d6d1D$0uJkU1424I#$$I`#*X[tG'IpY##&I^4JbUO'Qu&76t&Kn0Y/hO6[<X(I<^Rq1cU:nHww*YI>N)xEe2K8#0faOHZkOf2k(wJ(V4<b4F).)E(i.kpi:wEEdvDW-@'ahJP?A_,Y^PLHW5Ah#Jj%@6bAfx1sVVp6,>2'6a:ZHHd]oT#Y>)4=NYW'6[R-bWbA$20?7`v[;7x/GT-^6Nb+xo/Q-3^-E]xABkON,q2)4m3`Vj)Cm)TxUL@w&$=.,.Bj:I*bK@#.26]Ne;muJ&Ci*gpB]aDub]DiRF<LWvgjfKi21@*s6bN9a217)3'Mxn01,s_.D2ViVEf[xXEmit]5v42+B6Ibs19a7@B@7vTCk<h+(3TGd#Gt8=D2DKxBM@W'(:/:/DP]lB4b]hBQr[Kn%06MKD0hG[D0hG]D0hM^2cZMj25OT#Y$Pcvt%EZ$(kVVQ2o:Qi,ZwEvF*a+X';.G-1s`]Z/8QHLrcI9H#AxY*5YVW$gMEGj$%N%nBD>xPBCgZmC3DcH6*j2mOL,)d8Rk8LR%$1R1s_YA#v1Tj?]a9MIv,%i(U+vd%=8+[M18NmD0hM_&5WGQ#e7['?EQAJ83S<56e,]626]XD6Z<'1HEU/JB6>m?a7I>-D0hJE#$kZ7#%/uI$?@^9ajB+t;HuFWgSkF1B6bum-%H8+&</`vG^*&)7<Dtm1f]EaKNJ53#@1f8##Rdp(:/^w%4x#_3.MDW$s*b;%0Qpc2Jr*8-F,f?'Mo6G(oqGq$U=d0>WQJTD2D97.88?<)POBa3l7Dpsjf,11l?d`(P1033eb'+?raihB6]]jK3Vjk#[g<A##_@c$m8xTll7H'20:U.#-DarB6v&C?b0X(-rocwN--f*CkUDZ0Kk&rB6>80C4JL[0<IC=%=_I'2b>g-5L:?QS0%g;%Uqv6%SU5F$J>Z6Cso`B#/P/,F,?>q#;f;FTMutt(/R,&.tOae5vR#W(5Bk1'Lj=`15x5#B6]Zg2L'-%10>p*#DOh^DQ_aS#9;5tfl?eD]4ds`##Gc48q)]t77R>e+%w6X0249^4caoi.>'Y<.:,[I#@2Lo#>v.<$aXWM7vJeR4b^1m#1Me?H;?#f0g_PPG.VtML2pT,217;;*IKVrG5iYJ+AQh,5^gYQ6[/TG;02g<2he'23(0vc>uc96I7+*S16ijC>Ln;D97JG>0Al>lp2[AsGnl%N1;vD6Nv]5d#>]g7%VvGTTm1B[#,5PS06gk(#%Mi4#&8I(#*<9A08B_b#UG>E6d(wW6dLml$cC.Zr`((U7D8o:(W&ug#A*tB$<R@N#$kU-flI#d&B>/`[n1PT+%vef&QFEf&1R-lG9HEuI2DEr8f1C&J9Z1&.)'%wB5T/aJ;?T;,up@J7aHx/6k(]<UJwAx6cFun6d(D$),(0fW(i6)(QvReG'nSB6cl7FS6Z`wfG@),6d(Fu17:;T1QOWM3be'M3`[(s)2<h&#.dU*G_0F^6+g@9^N>3lmWdg8&8X4i)dAPS6'<wA$kJGe3ec4u9[kGU(JFib#&v^;(JFs`#$b4j)I-td#&HKI2d+@S2Mu4^85',$:.uc:16+2<#S6wLBmYQ?/xs6-$>gmm6CApw(UTgZLQ4OA16Nv796hVxEdbX&##g5B#=NvSE`di51;vGTE`I1FY>>>b#'2pNE`JIA6_`bp-,oD@#)bq`1Emh*g9&5F16l#O0SrEC16)QBG'Q'21lf,[oP'SDa,,Kh#(8V#JI26i2ZP%*KfX-oP>)'3,poPd0qO;]0vY^o1R281$J^9LIv$I[/we^[#&S%ed$;+<GeW2]##ZV&D0JRk.'$wIJ9b`7##579jaxmeL4(VJ6e5kp1;vE'%?a956dCD&2k#Ss&Pu3>6B8<S?[6qL16oD@Q@198:Ng<aIt1L62jgGZISG%82305_163:%/9ti1$Bea.0v[t<<gSV^1RZ[$&'uD`),(%M##[gm/q'[G#';BE=%kB_)0[6q0p#b8_N:^r0;fit161-q-?`wL0UtoO8;^Sr#@0g.#?,MF%?:L<16.B%-^TXx#Y]6%(Ph:@#)*%^c;97'Q>A+urI<@E0peh1ie]Cg1QE%1<l0gP6G/S/#%ekN9Z805F*Bu0&n^@(##,f8(3Nlf,BTce#-GXt-^(,i#Y__n's:`47tIJ81gkZm0[<hP06KBk)SjFh/Zi*<(1`8d(5Z[iB7'fu;t4FE2Mbx6Km0,,a`o44;t+7E17(.q0NBN3(sALB(4-h#<e-0Y3-Ls+(nfsA%'^m';0==P)c`T[Bki#]B6v@l3eNZI2i<jMdrFKpZ;d3T)O-P)#VsJqS4jv.'j=L*$8a94;CN,mITHMWu=^W#Ea*9>(4@WtFYlV+7sgt?G?Y]r%8vda#*D0/D0o;:.qn3U11MlKR9b_C%@g2706ge(4BvdJ#/jg]/qV)`/o=vsh.Vdj#@/ek#$cg1#')x_aauRG6#a9(/@e:9l>S%333u0O4A6#o#Z21<3/q);fnSRd(Oq%_Ihf3hH*rM8EjkH*#YuUpmV3:pLrI0108iHA42W_gCZamZHpVR<)GVN82YXIhhNt20926%f&N2:c09mO,21Re<WIu96s*W1kLj=s^Ok9cS;0eDC3-KPZ0;+J>c?Y,o&Q%5@&>Z@:1D7Kg2L'D02L'P42L'7O#+T:j2L'LS#$l`^#$m:2,>BlQ*ON@g#6pk%6_.VD6*2dis)at/[p:L^#%wwUCljU+TwteCd:o;51i13m(K9OX*Nk6Y<66]_CuK/#V.1UZu[%@8;b1j;dXO3(FhtS_B=Md*6*9X_As.`GGdcUn#,64^Har*t###;+33-v;/;YTv2eQKtGe2(tHF<X1#[RMwDo9N(HF71J1jEA2D&a]:6[Cd-#*tGIHFm+>#[eYVB<Ph[Ek9[/C/>XK#qBFk2g]o+<(o$j)GCnq)c_6r#*Wj;J$)IK.=*ki##f/v#$V(<SP0#x##,rL(s4q1#AtNiFj#l<8s50`4)=r*)c_n&2w05f#$t)v#$+a-$8)?b%wRaSIoUEfYK-ar;k/Dc4a1t;(VXw_5&N0?)cbrlG)7E&5$f4nq1?k_-xEwi#*ajC6Z*H=>J#%'6Z0iH#XJSuKiMKRCMo79UML#w###Y53lKO[),(h'rM]G%DQwdn'28JR#+prNG-PL$#$*Zr#^gvL$-<3$?VGQF$:VX3@f1DJYYH=+8.WI=6WOf`n[5Dd@q^4>ARd<x[oINb)c`H74r8H^4FAS^(OQq#4F^;Q)GDmF3.s]a/VQ-$#$sw$#%T^2#&Q,W6;.G,qk4Qa4AQ4)H,*l0C9;O&Is@6SdV>%gl@Y?RGuoEt#x]9q#(:1&HUvM4@v%Hf&vclJB[/MO1Fs)ICm*,D19jw8BSU/fCg$tECpxb^t)]>,#Act,ku.0tUP'>tkChw5JplKJ4AUru2K_I5Y,2;K###H%&p@VPBp)x?#*1h]/986C'vBsS#6GEr9mts<#YcG33JUXl1/J71Yun2^(Tqtu(TE4+#x3kR5_WTk5e3Ir#@^as#Fh.o1<+TD%9@7b-ap#C$@Q9i4OO77q8'Up6[T8F*5s:i#vU].'ifb6uY)nW-aorh#)l+D@>*e1#@7CF..lm82Jsx.*mSUn2QL&DqLdtR2LHgg#'Vfb),(Tibxj>9#)76AG*;pY3N3Nn)1W6$#%[qjEk'o0$XtaP#@@NFr->s43`gZZ#50kQCPvVWA]S4KaMcQ?1:[w#2Sb7R(/-L41:%Nr#ET'm(fbwBbBj]%#-;:UHGFI>*D?SA6v6Y*+85tPT7fM<0DID>EG?&w2KjP`ClcHC#:(e&Ha7O8##QDW3D9x#$%uO#6FfnU$tnf1#%D,&#$d#f7vK'fEeo't,IgO5#@eG^EI2;PF,=bk;K4D,26pPh7XJb4CMOBZBR+BKD-Wal1V#)Y[q<RJ#@:dK5>6QR*O0HT#93cJZur216Y-7$d:s817BS5Y1UenEEkI3O3-T/)##+rw#)E8&F,0j83jOQsC3bWNF+v*WN+>uJ0uAade7te1O]?T#-w09)cYQot%:pNSF(G>Vr#_oB##1D&%9snKEj04k>-6BL(6KUm(Nm@*TV,`[EHkqb6bJ:K6+8>Z1J_0M0X?78$,$VvCWUwZFh=/hm]/diCsfAeEuAIr:`Wx:65B]HAn]wiAm.'j)7qGa#wRC`IYl'I#?(V/[_ZC.#%2MJ#&oY3j2eU,),,LpIYgd116wAn%7S9OK7dX-/SuYrGY]nD%kr@Jdr=JOA[#b^Do9MRCVY&,GdP2'BL*]C#'q9#K68fM-(dfo##=Q92Qf3j1f`s@Jw6Sd4EY:?1O*Es.v]lBC3[8($_DpgK6<kY$=k<W9gcJ/BnOL<&q49mZ#Ft$@jJ:(4+SmoMO75,BnO-v?&Nj^9qh=Z/w?;/$We=?nfeZO3(tqN^]v,eG.VR[/5HUV'nBXd7Whfd2+A3`T1g>$oA7;x19D_e9TqgB/xUF[WuZ2n5]i7NYto`X#$mR%N`pFQ$m@m0+%wN::Lbt%<saX]#&S[^=Sb2G1%cOJJ?WUxG5rVH&5329Flob/20:U22KsTZ@8J:S+FGM>:kOwOK=V(fpM,]gp:'?D0?7=%%T#XjB9FngB>86XN/VfmFGk/p#)L-i4K0n6l3Qs8/B'#j05ob5j(Yv?6*CdN$PQjQB6+13u#>bK.XWCj#&eufoP^QpPuq==)TQY7%T6lg6*SL?#-h4#'N>[4gj/QJ$so7]i%LwF78+G45aB8[&gV*cDgnJ?+E8OGBcu8gD05nl8lf?9(TSje)p&u/22>g3j`:B-Rk^#gM+r*f/we+BOh,iDD,(;5#vb6G(9LPj$#TWERW]d4a,^_H)ca)RB8=_$&Bl/Z/o?6>2(&E.H>t1l0MQXo$a*jS6c*]1*J[Sh#H#7>Fmsh'ooWZvl=vF08pA.*k)ID?BSg9;U/?MM(T4$D(qHO>$4Qdh2L&f,iJP3[gm^Qn6`Rtd9Mdh79t?.+16)?o@s<cW+.OOxHECi+X_ls.8PGH<%6tv%&lkI8>c2LRCVCdw(3k)_$V$#D06hR1,u:Uj2hov2#'+Up<D4%;V?oK]6m&UQ19Y/p)6^_5#han,19[LR$X<[B`X/&N'j6$#2JE/*Q50O5hg=]8]mEM++gw1t.t3EW#&HH7&ljR'#(1=$60`TZP<K`od1j6l8ew,cCqO1X-X[$m-eMpxdE/S2C2<mWn?.cI#Z>I[#+Q^>7Sb;4qIu+-/s=,2#v5>-.C)&ZHV?GS#:bhw&>B8<OA1PK3kL>n5iZ9u,>aeH$bTi;IW>i%D,.%X$:CJ6F*+>@$?Q;c0KgGD7oaqF#Z4;x-Du/e0A_'_H*L`jH+w`C$V^;r'kr#F$]A@cq'2:eBiSn4aDCf`,C$.k20aTk%86e<5Z&r4(Tpm/*k,NO#P),'a`6N?H?(Ic&lj:Sk+pS%6)vT9:7jrf/PQiB_D[4veq#EM#vTfh#uY5&2cZWl14;&iJm9F[#FG[B>_Egr'`ce<$V`D%=A/_h%Tomu-*Ioc$=xZ3lC+m10(9<V?$dXx8Rc<BCN=I1n^/e2/w.:9^M.uq#*8l%5Chk_Timln09&o]6ESl2*k$JfV0k`G-weM%-w85^$[+)7VRBT]-v:J`:gA+'8mZV>jkJks2cYLF#?6_hFJT,S_K(oL(NaB8)Qn>[%9EO63DCn>H7Fig6(]-la]%:1=)wf7hkKbHf*8*jEGZ:lc>D3UB67+-'@wp?V()_&%9v,A2i5AZC=ES?IBe8#DopAuCVEa_F$M$_,urqaB<Q*tG&%(`A4wQF+L)NJ@S?m=#&Z3*E`J3?5^eWB%0Tn>a*F##3bMgK(/w7t'mk:[3O*J9;cSZrBo]@-=*RWJluT^;(:&Ea>C]Ji@t-]($,mtM)GL3EP^xnJ)GC?]Q;xj+#9=i#B7x:LG-,Dm??gqj#&RM.2mxeI7A3EZ7^q$^>@DxcM;_`71Pp,/$t[7N#'2N.Y&BE:0X3.@0WmkmKpvKq##;`77vK*[5bRne=G]i<)50$t%L)s</57%8b$Ku9nS&eCG.D1eHED&,22D6w),H07$MVuU<G</VQ>%Y'3*-)q39M>gYw@@;;cdhn(oGlS2S_aAT1l2kCWLo</94Wf%pEwD%2^CcYZ:n*%p)+q(3O/$)4`nR366KJ$<RJ@3H/PqApJHw#Z(VuX]MA_+0w(x#t.dj2-'cJ2,#K7$I(orEQEPQ]4wXW$C1w'+^/7b3KmP>6b;oc%c[bcRoO@v###+*%uSA[Cx7_JD.gJFDcLE1&7pN#2Oxdw6bJ=m##Xt9,e[,x;ja?C11L;tqNw<52.1)M2KWSbuv;7x*2Ww%#$,#T*.]T)$uTKT34s0pdVlw=CpQ#>EjkGvC7oxZD6]287R-sl5a3-YStpbn9jd.8/9PNP#??wm's:rN$q6n`]:QQP6*rrA-^)ON^Q#Wk61lv0o5TU%##qRd27,Md###R'###^_5>Elb3#2O($*u%[D6kXci+]fpg1d]p#Bu=9b%[Z-eS1G@5,hTI1qV&5Hcql?5v.ZT3.k&t`g7Gi6Et(hSZtd:BmxdnBp+dQ-bGps^bHI*HcbbFFN?.h0L,fQ-&FBc&Sjrv$t3UP&Q#d@3.*9HR7/T[B86]F19Fch,-R)g+.`St'p<-##Q]+B+]aN/H`:r?8]5Ch%88K]#NwIK;qnt:*)$vuYlKB-=V#el3)'a$#$^,U&qm1A(gM&c=-t%n.SU#^$W7>[#+>U<=(;5E.p6Uk=*=S017^mbmV<;:*/Qnn(j>Qs#%oK_Bn,g+6$6[GYY`aE(9`Uj&_pdFTjrcv(/O[<$QBP%6*2fH#@7C?@.l;HQVRaAj(kie&=EN*Vc@9Sa`gDJ%Y3YKBYXWq$s/$]-]Pf=^p-?H6[JmD29:1@sCn=/%8@%6$]8Fc=&WRq6asYe6`+He>#>sx>U^^X$Wbe?#jUMB)cC+l##-@H#BbBXG96s7$tdjNj(_f)&RlaDQpP_S%86e)@D+;(CReK$-WL.b>#AF=DwU2_RS3b`##*d[$%jM,DCGan1J@fx&PUia2pqBo&lkR*D723.gSCj43Lh(Ruu>)*;dmev-$W'e%:D9c##;D`$`nm0mo&@N##10i*k:*$#TWp5BSg5_%9Gq06cl,7;G;kMNGVVFJuFB?9aYN80>RWq&m_'*/F69I<laLqB<vGG.<R31'NZcg#U)sI2,5k*DQU@q07H#w##FTn*-g&+/93(L##K-'#Orf/>c`_B<(RwC<c3kpHs_e:&5WST'NxO@(3Ihe(qDft#`mH$Bx4#l19N7Y,YS:n(3D4CSRVZ(*d,GTe;T`Vt@cfZ6b&'F-?CaOql/_A)dYZu0Z#7N(/hp2#RM,^/r3v=/92s(.#C8s$QpA:06/DdLl6`'McO2%06IMt(,m7vFK^,/F2(0x6Vc9v+F_Cs#v49%Znv2`'7XZGJx:xg&53-?#x7L%#fOb#JwRV,eSU6Q;cwUh#%96X#%9?[#&>vd#$:vH$=71P@q@2^#v)#DC:.WpHDE*&#%1U-6tOFw;P.d[F*MY5G>d#g#=C>/EfoAj:/6_`AxU:C@CTVR6;`)x(qs:;+1tC?>-93&EHFKP/>O`r#%Uj:##BW5(8Om4.D@t$$s$&f/%IdK:JCDZ(:5*X.#C*s0Pruk17g0'/m*%Zt*c'7%;0Xt#]?09#[8T[%VqMf#%ep+tA7pj(r_Dc=FE>w0#5G[P&5'fJx34YG;TfD0D,@&DnHgT%=9PS^1a?Q63.'j$@l6IHVHg36bV:V$Vc:u?E7Y;6bB>p*Q;W*$',<w[UBp`fnK3)?vdtSG=MXB85h4+#YoN+n<T]`/$gE51/5`p)R3af(UGw'#)3+pBPfVsv%PI`6cHq<3.3?o17x2SDP&]7Jqc28#09#?rPt]_D+nq52JlUm$j<jQJwxtD'21ZN@t)@X,$I6J-[](n,YX/-(UJwB$'Ye;5[XRu^0$(i5@A))'t;Mi/w?o?-;4FtIZH%r0Tn=6#S@&?MrKf=Efv&F#7cQdFse5oEdWt=uY$Ab08&rDFEkwN*lCm[#aei_G)lL<G`p:W^mf5%2,-*V6cXA8)Sdh02Lww9LlgK*-vL2qCX/w712J.f6*Vs,=F)*CCpfu@->l?+1gFjf*.A?#-ZkKh1oQ855_Xxu#0`8&/xuPL0v8sUlIu/]0v7.J0n#=>HAav6#$k.gt%ZF0$?@%loY-^/^N7CtB>84t:01xK2g_6me?ku0854T(#HU6r]#TNU+'hh1tK+Jr@A75?X2Y4,#YqO7HYwpHEk^G**)$PH#@2#u=]gg:(p'9>$0/q,fl?,x##[BaPFd3tDp$L^BPngkKJj%4B6JdbH&6#OKU-PuGe56+#MDbjB8-Y36l:>U2AQX)+LN&v8Q-Loj+aUO##6wq#Ooq&)]u^a-^)=&+Ax>*QZw&m6[_lP5(MC='b5Um.2N##8I-&9'4`1k^OXKL)d#w74h-KKp7'*=6c6^`C0XUV)I5hX^iGK%-?t)?.orGO/$CS.W+0>=)ciOS%D)UD&<e<*Jm1$=(Q0&N#^(JwBW2`M?,$]t#&>H7#$(a_MeT,1#%9-<#$lcO3)2&/-b>2A17_tg08E0CYZ,-v/?_^KZW+87$&B=$2`#E:Q-9oo+'0);aDx_r6_FC%%=-<>17A2q2L%v#.^l7v#)mTqGf[J.2LwZB&7v$f$W&5[$XEb9'aJ.v#>O9I(l4&>#Lajd0i`Z>$WAQZ?[kut@tGOk+,_V4(5?nP$@)W13fBAI##:x%*/c2.&9@iTXI9A^$=Z52#'2iQ/51iX4gKwPB67Zf$tY@g*K+3U1D1L2'lIAM#c:t)c[M_0IECpN06ifqj)KdJ&Q8n_(4YN]/B:C7#>UCd$n,LZoP'&M#?*7S2OA$@<0@h/<lT0kBOa%%bC?ZRBs;cpClr+aV5o.UFGlHt08;-$#x%;d/PI#07W_)EJ6OO?4b@q7.(42EBG`)K#YmtV$1YR-Cqf)p3A)VA2howY-X5]9)GDom#&KQ4F4:Bc+]X/u7uFsxBFO'N2Q9KxG-Q5&EdcdE9vR5hHwpRYJTi*A3IWJ_(4ZF[-F%x8I=,=f6W=A^Fh<./g;p)efQt[eVd4@620aT@#@.X2#@(c/#AlpSo^X840?JWl5CR]$CkmCwGY]Hi2hCm['#lfnDHBYn@t;%isbv8=-Vv@h#>kfl$;hm0-vWiE'if]q#>lr6#-])CFjlS.oF$AR#Amm,3Z]908Q:hU++02S&hIEqC.F(a.Ebdb08@VQ#WVmwa(U/G4&j_o]5kNxjAi)g#>FL%#7MDT4kb;M(g*GM&'Kg5?XX;hO()Oo,%)k-E*MA_#[Cqfm<29i(9oWY(t0:&$0StBBP1_h3aUd<8oSbMXHjp_KOms_t'pM@&5BvVJZEM0<08S^B2^ca:K&OR6%WRGA[>179Y=5I6XL(g6*`ir>ufk_D/rFl04>j*>>,/4#$c_udv:=k02*bT3duF.F]Dnk##.g_%VR/$_1]@tN_J'@/q2Mw-^(39'$CN*2jx;Q$54ChhfS3Z#ZNZfAW(5R08<A3#F7,xB<EM/+LEDC#-f/N7EZQV,w(0q&(DvQGep/L/U,-<Fb#3]0691<##YX@Ni/UjBn<,b**Xtv#AdK%_JG####GiC#_wIr(/+s,,wGY@/qp,&/9#wgX-<[*#AfA$jdul^)GmQ23jw5DicP,X'MK:,qfN&gBi^hW,cP0I1/1Vc-ctYt8ncS3h//Je#I=D7ZW.(&&r*69BpjBx1<LgS1kFY2AZ%Grj`RKQ*I?qWA]`d,=h%LD#>I<R'pA2]#dLtt:U2OL%ootYClmf8*g23x#U_$cDCd%O&lm@&qJ,1aC568P6[qPt/wAKm@tDM8t%Na%.=PSvFBrup]ok0Wf7&vD:/sHm=mt=9BD9G^<bGd3NG&t*%87D?%87JB=&g;Y#wT6l#$kjI#>E0D'lnYO-`#O$#EX,D>JK92'QF+V_J?P`/:Bn%6v>)=8PK4f#vkGw#YuV<:J:u<30bJP<Iw&[KBObh(2j#6-#TE/##@'e(9_,;(Q1buA;4Hw5Ch.p'qAW&3NXb]J6W`]Bq/Rm#$kBr##(aL$I&ZZBi][+#vD+8&n?Dc02DY6%UjaHlu^N5#w%%<kDFt8#(UC3J5ruAH<`,@H<_J[#&S=M)]sig/o-qg/o$kc#vM+9%[]GS<`WQuQ?44+n$.TY5uidX#?t/l#@i2ER%@b;Jp2d@###V4(jE>X)0NQ=$C:e.7OB<w5k0CsDcM@Q?>Ds9=a#RPC$PuU2MWg$#@%75fJSIS'MTWQ%q_m3BkEE3Bq(/iBq(/RND(VGI8q8P4xmQwF=7tRQ;%Br#%Mqp##jmX0RZ%*$tOvh$Zx1i]5Wb6#ZMOO$b(CO2G=B9,%Ndt%sFDA46HZU##3a6$`Rs6,w16T&5Xap#[.5PB<PhlGdcLQ#$#fU+,?Ot$=<eqF00]b#D6n2FBJTqB>elU4i5:J'MJS<,>^Oi5fCqN'ifW*3a->j>e%u^BtxUV#Kf#o'MK1e6u$T1##tv&=Dj9*Ed0_H-x*Y]0pnK814[T,#@nh`3I^#,#?i+t4Ffv1dV4tvNiR)H#wIr'6mw#(,(9Qh#(8@f3+kwS'20+_+][*=4+^#2Fj=ip#e?'iLfIh8J6X:1'Os>&#+p814+^J?##&U_#+#h73V3<a2h@-;4c=5K-[eed##8,9(N+S5#4)>I5(,I.#$axM;ehia#(JFn4.?4d2Hh*#5$@sF4+T1n#>>55#(SRL4'M^D@t'ld%U0WR$tXw$#$YVF#>R6_'V5JB4%pZY&-2ff1J^R&$,6IDVdO&_,xKKGRsj)*'igI/AoDwTI@VhR9Z]G^t]qDU0Cg9TtmU-@$rr51=^,G&UK]nF#$bTD##p=2+,S?J*JsNX$4wuU10tu*9<Mjn9<C:ghsL%^d)ClhUj_48bA=nOD2H,989fq:9LUXr1:05J)Z=K=96ug:F,<>AD_&akEH3kg7CYLs5_k/G#2i,j0St=tBR;Ie-rpla3-@I+6bJi:'MJM?6x-VPCN'8xEdt:j##PA*bM<JK6b/5%0u8dJ#&m8KeD1FU6b8;&0uAjK###r=*.NWFs`+xn6bJxu0X<@J5_YVN34T#n+xta,7C_67#E@&;6;V?G/@[nV0O+U@/x=&[##?nU._b/N#)#+O0O+Tb2,#F9FF*wpL/9_W/@g+l$=*X8%^^lO##Sg4$[s(_BM8io##Gr9-?VE3;2g1A2ivRM##lS<BDMnA85TD6;2p+x/x@ZJ-EfkT3P8(BI>Me*;q<X06,E],`,(42$WL#/LSd^9H+x(0FClMs0)Q6.B6CFa#k+3]5+Vg,O]Y>p0X*a/1k<Muu@Sqo6W_'fhm`Zf$td7/+AH-/#9=7wC1nTT#HM$T1UGan.=#Jm+K]>PCrrR:)GDN4CL@-h19dG=(3quB)o[c+2lY*3qBso%0tM?q$$HDsBOa&m7Bfri*GGkeA5/NCIYM<eIuiLdVoN083)*R]$9q+N0q`nViG$J'#L8ZO0=)k+s+>xO<(pP826AEK,#gc@Go]A802)w_)6b7<S5NZt#3n1=9iY]+#'M`R#.c9#S8q$8TAgmoR<sM5]lE<6R:v^O/6^Gc'n9Re-%.7H'm%m##?sW]%orGj%8$VU3.:h1#ww[Q2eZQ03H>+;3H>.S0?H.m'Ur-jWE0)<#Y`tR(9L;F$)I&qd$'<5*+(7YnoMl,#LcA2J^S%^@XinBBF6cl2mS@V.sYMm5HSl9C2PTP^M&KD&m,a<&$>oHTiGj5/x(be?Zmet#&@ro##cW8mVIqn(o[L6&FNM@-VdI'%6F[_,%Ea&#'W/C(Zd*SpleX@qm/]'HcbI8FKd9k5L2K2C;s,=/6Nu)LJIpm,?xjl,F_*66,@]x%X_@UC]H+`92,qN#$5Yd#b#-rZ#BelH<[.0#Z%CD'pjm2,C$It#EgC/5+T>sWD*]1'Pp><OJsHA#A64F2,(8g5(#Gt5?+AF3.*E<5_uJF2oTN'11hU1'MpBF$?VM=(/,?o0i`Un%Sl&v#Y1_w)c_Qs##,`6,^w:3&f5L`4]d*f?rb[,$/>up?VLms'O33v'4WLB'Osjx#?9:D#L4d<BwJ/3+(cv4#wTsW##mq_%2ghb_K:eg'N(v9%7N$kB?:apm$sh9=Bh]w$#D,EpJ@MC-<h`B'l`tP#Yao2&+9bK6]5iR#dcNg@;[U/1rI,9CNhv3-v8si4E*$tGeZ:H',qx2B>/$.OCsWUD,#f,+0EHo$d.?ter^MPeYT0&D`v*bB6]>P<`RL](6Jj**PTh'#]o1HF*)GT:/VMT(7e[AFGY$G'kN5X##,J/#,?W`5]'l&XA^4G##hqv(3UJK+1UHD0Sb_7&6r<E#@M.')gJ3%c>fYL,v+Q,#BCQ46F$NV/[wsI6tbG.7#Z#J.(kA.#Clk,FeR*q:tGArBSfI.Efx@[ED-Lm%U3bQ'm.k0##$,^E`Hc>3/2I?Cej*IBT$]oGp-gruu?8*35wA5G`q8j%T5,f#*1-8>%nve-]Nr62fFkN*D@0*<PB6]k],f'6x'0D9PU#T7?^-0#&YmSJnAF-4]qgJ(;Tpv-@o&j/p5W_'7_nN/lnS=0C47H6Ev*0$sMR[%r#BNlKO:<#&]_=@s;h`#$a7n?;(H,Uj$6FN`E6727Gba787-W2Kscu_m&3HFErJ`FF,dtHSZ3D78.'V2Ksfv^8H[SG'R`cG'cvvD:cf:9R;%n/%@)0'4Gpn#&PgSR7oXHR7q2l0nm$'##:@d<ktT7EfXb$;0u'aDMA-sRoOn?5>2(G#+T@]1VPoW#&GsOK[q/s85)6O-*@Y]$Yt3a#>mx:CP2[u&ltI]&lsR7F]EhjF]EF[[7iORF]E@YnRx8*nRxS75YM7&#&7`5##'#?(9w(,(qW:.(qDx*#PUGej(dM'C5:MH#(U3>I`Z$5Ck0<CEHO<Y#(/#70k&_7j(Pv@1sUcEI_:Q>1UJTr(fdW=CNgtW&uKoMOBDVf5Z33E$%jIo9l7GY6aig&orx^WBm/sBCKqw@5>TTr$p]H#79hfE?Vra7BlIwik';xi+]_a,.>^mY-s,P5-&71j$Yt;1(Lf;tMe6q[0b7Z_j+koQ#$6r>6'3fI6ajGBnm:MO(/P-LFaK'm4NKEN+]j)u#>X9''/us2BQ][(j([t&&RGKQ1;*ZrBsrji#,*n)2h%3GmuRs;#CxFv1tCVvBT2wr<IH[S3qnuo%KHK5UYRTEHNtO^&&LS9)fq1U0eQjs7of^=%q^vZiFoW`M.nLk+&<Di#B:#m#?IL$0VCd.#%`9>##Cr4$xfSK<H9ll##YM6,[5Rw.U.7($t&XP&-;s@m@'A2&53.ou&#<>Mhf'R3f_kT'Q.E5@u#6+rhC,`BL+@W1Ta3J#(%fbrhAdW7fS?fBDV[`Hc:S.&+KX92u6n23fTHm##3h0$1@kuh1qr`*aDZi%-@OoAfY[u4B/r_'5@Mh7P+UI3`U?S*D?W1#$9ih-d'exNI-'(&lsh>%V-d<BK-)wAoinJ4(::B6*FR]'7L*u=AC3,4GtAUZupfF7sU8Ck(xn=#v0H,#:m*D3eLrW.<T0UM,l5&F__s#0Xt>w<H:6X3<5r@2Mcq$%X^]E27GuWX$$HbXKXF35eMfg:0&=J:0%CwnYufE3HxA(.t3pR#v0Po7x4nn3&v%b4AedO614oZBtE)v/:p^w*D^[S#mPsXdrHF21:,,,#o)gQ2KjbZ#(A@`CWSYKdrG(hdrLn_6]HoQC5Fdx5eAI8,-Awl(UK6A-[edt#(fXa5ph&6eS'XRqKgR.$#=3&#v2SVa,#Nl=aQsF4Brn./;YtB4jnf2$&_NkJUIN'7u*P36boLK,$,-S,&Lc@+A=2MB68wbB8^*.08:nL8T>+H'PK'4+^bYQ&7,?J;/o7AKBaG?#&/Ev^1a9P3I'rQ'ixe6-%IeT$X>RI78^8B#U8xQ8X'r%ksdhw/98%1'kF4:#Fc_?Do$FS(Q3$N(5?l#/TjX8-s8aM'u5v(/A#fj##DO.$%;lXJ%?/B#$(aV(2c];aEGL<7Bbv?%th:Mt7Hoj#>Qr14Gt5I1kr>R1h>N8#]vDj##QJ+7oaruZ;(Lj3.Wwp#Z3F>4cq`D2oO<iIT7K=k%g`j_JFr]PZIB^-+`?-#CC<Utx]s#(M*]M$(m%c6]7.oIS>Dv$6Kkb5ujsQ783ri#';V-5ujxl3.t]7#Da@tIux)>99T@6F,*2##$V7A#+7K2Jx)+o-%7UT#_]Ff3`ptK4+/p>4]Yw>#?t&j4DQL/#@Jk94FnNPIbqPq3`_393IWch$%;oZhsh;MdH@<NY#PJ#5KIYr2,+V%#Z1Te,[5.l$B6du3.W/Y#G`pZ6*OF*$_)<1FAs@;='gET##*^#3k:dZTNj,'d*x=Y023S*6hPxd1:^QgV%Op;FSR+k>_-C?'UWHv2MQ.)(pdu`#>58e1OU_8##7?r,eTF5.=c`O3,hFi4]Q@n'RO`b[9<T;MUE%;'MU7'6iCkn#`6SmfP8BAIYiWE##'6W(Qm&&(UtaS(WGNA-b@r_#c,DS6cLvT)G^8n's(o;Fbd$)5Br<b$sJ[85TU&9Fbv004b:dd$;jI75Ev=YFcDK53Hxxt##G@;-<nsf%*LDh4G>?%0$+9(21IV($sR(L#)c?oIuo#1#B(cx5uiGd,>8Z20QS=ob]a.K%8x@_^psGOK88?9)j522,J/j^=a#RF6v]O6$cI:+0?52^(9ow.(:#'/#DtR9TYVY_TYUbo4(DeA11+]^5v/J8-*?pL#Z86l&E47J2hG/Z#R`]h;%PBhHj4SBbd-OC#??S+&poc@1:m:U+iWlN#l]1$])x@E0x7lw0D5BU$/[UDT6Uu>(0Mb)TNj7THKGdD.F/*v'PMTR1LP=89O&xkAUSsn2]g])%SROq%SRFo%SSh65fp-Z.D]1(+07K=GeV(Iptc__C.pPmC.qLN6cw;:)8Tjf)8Tjf)8Tjf(s9ae'YONOs0@HL#?&Tm8UW%PHfAC7EH18O495K:-rt2)$e9hbI#0S4I>K]5ITeS:1;tJ#)T6:I2o:?cKX)Da5#*xe/<0=-,^ls$7uEOTA01xkEgeVD7v.x@BQx-##(:0<BY@De7v.wf,YSK0*h:&d16%me$[GTr0#CD3%Z(1#7Me7X(JGC)iFpDV-`16g7Bx7D$-<vfd,N?%0Ss+H/POt?+,x^x#SwJ[8)D*wIpVuP1'.M`4bgYJFLsZt#OER]/U)Go/T)^H>%fOxet)UujGT=Xg5D4lg5Dhf9tBCh:U#V#IYfDA-?s0m#$mNx.9p3U.A(qQFG;Pa##'-S#ooP3Hw$W:#<*n18VrDN5$@rjJnTXR6r.0FI<@X$mv*N-oS]J=N3HmMHw9nl'MJTu.:#<QBt;3+I<S&5'MJZw.8PV##4HKE7?8r>28&7'$c67@+xwI,7E-hx27j+%,0&rt--#7w&86DZ.;O8w.9@O]oS^M?oS]i[8jIv<8jIxu#g^$W0Z#<V6&x0x0Z,BW6+?0.(<5B`(<38iq/>M8/srH66'Eec89-GH7Booe0Z#pH'MPvr3/`C5BQfTcDMdVm-AQii#7WSO7E-hp5g+xa6'kW9Q[Up_8Toe3I<L=K(:vNF-^*(Z#$dFc#$ko>#x$TL#>Aj9.<oYV#>C:cqJ<EX6`5jw6_pX$6dLem17::s24g5T:2N0B0RoK$;datIDKXjj.?mDE0Qh*E/9b_]28Uos0p]obI<Z<?,*J<w&S*DG=El[:6CTEh.SLj/.SOU)08FA30,L?vFDt9a1DZ_$G%(H/=G^iI(KWCs-,raE#[Kg:##FDT#<px1AhR+S6cu=Q6dL[O6^Wew6cl7vZ;W'(FL;@B18?CvQA.lj6]x_o+aL//MI6wts)HnP6)-Tbs-r>(D2E1-3DWoO(S.ex#RN/A?$L#,8m=^.)oOnb%.H&h?mrUM?lSMp#DFU^H]kGA5DkTKHZqvnG6g@3G3:&bG50dvDe4C,U%oc8G:<)hO/6(,@v5/ZH@A]0G,(+fH]lu-8VfOI1/f0g=I&rp&55HF=Jnph#)mEf32u'P8>g=n2hPI=2fsDD2mR-g8Tx(?3EmKP=/RkakjJ+B<`NUh#(/281Ktk+1S.6C2lE1?78*gE#$at)#$amj##%'^7[mQKIDS-_;u9431NY$X#&Gh;d]`_>#&GaC&PN18#(Bk4=h.n10MFq01NY&X##?_P)lJN`(87@)(RsDM#&kQh<Mv,;(8;OI(7v=F##PAI0rT1b7vi#4?O#>'3JH?p1JJIZ(/-H]6(+HO]YWMj0V'`m@tCP2ISDMN8?K:*VSdW9@vF-k;mME]#)lU#18G[iVOhxn@vF9o=/eja#&v]^g1dk(Pgt@n#C.lq1OsaO06iH&rurM'Gl:Q85_c2X@@_s<6ZdC`8?FAbJq^#(G3D,PD0B#u#%]wq#%19$#fDF>Ha'TI6VLe@I&BjN7oauABTQ6%;mL@4##2=`>d1G6##;h:*Lf6V$UPY9.oiU^HLa:g$[gn.?il.>FB8VK[Tvto$2.Gd?$@gO?a-v7`J_=5(2t7x##L#;@&>C'K;IF`#-S#@Y_nhN0?I[P$_CbMHAbAj&8t%x8517`HKE__rFiKd@n_pq6reXj#A%P_$;j^c+L>gi$&fl0K=`f)#]Gftd<jT[I;Qg3.*-eP$u_]-&TsKP?$vc9jH7;ltApVc#%i00+DsmwE`I+6%88::2enV1-;5&i-;4Fc%q6j0#tll2d:f4DcY/-b$s3h_%E8BOAlaZR#$vD7-VYj#328X_0A[;[Q(.kH'r?c/J9Y_;#/#571QO*46m6Gn0X3/N't&nY0u/_=),)e60X;?rCW.dv0taF&370.x0vPMuBQw..7W`_d;-b0LH?iB=3-]M[;3(_e&5m;5#Fli;C9K&206hQ-#$l=.O'Hx<AsJ:U6^Z#.-wTRVPb+Cj168cG#W[KI9Pw[d16kxsAa*XfEEd7N##)US5'pG_7#`JK&TKA;,>82w7p`pg<e7-$1Ug*c(:^@E#4?5q2hJxg+($`4@=sL98Wuat0;]$(/tS$<,ZpVX3.G4gDK^kxt`L5VTt]Bj3fCXl8TXsLJECQLm*qa.%D?5-6bSDn29LJs-^)QYSZtj789eeb6^Poc)8JF>)5BAw3-T7p+%wp7BP%6k1U1[v=cAQ?0q6Q(#;&#P4qLA7BQo`%#(C-;;.t_v-wU'O/93M57m(2&*6`sLFiD;0B8_i7(4C($1V,W9[S.ZEAqvIu@t;htpQ*7/^KfKv5^eJH+Mbh`#$M1H?1%vM15x#w3mO=2:pPUn8,OjJa=<=<&nend)38hiJu+'b$X4v`TMdMpt)K6:Gb*HB6B+(Nrg4@6A0VOq<en$;0uu,I#D+wa2pv)(20`e@Lg4lv?O/NAJ]:>p(Tm^X(;[]*/9l^B36cveJW3nI@s2Iw#$(`a6b/-,.qYAo#(.lbBfU?KK?#aN#($>]-anDA/YIKXB8:IH5Yco2%<=_eEe3xU-FcI4N`jg.)S@2988U)H3A(94B8L8Q07TI;/97V@:;T/OKL0$L$@W)E6W.sB-]XKi)QY?w6`>dS%va?Q-wL/n(4g=f=+aNB06K9o4a2HsZKrmmAPU*H&I9l$0H_R6eslx&_fw2*0?<nv#l7o*McX89;-Yr[tB3B_#?iIEbg,T=?rjG2&$>#/0nk.I0FV8lg4cBS;-&(b#VwKA0/QLVD01cA#7r;M6thl,JlQGH@SCRc$DqChEjhbZG#JC7A53fA#]?SX19kWg%Wi]VN0P6rkC8IA##Csl&:1<_TkJ.f##/g8$2Y3E=e9'#),MV`#JhCD^<W0>RS4nD0H(C7=A/_)LfIqbXAB$Q$Jv8>7tZVU$?H2rEdpdi#BEFUF)r=c+piu(#%)6[3Db>c%$M%e1lRdP1l[F&6aL-TB=`armoBk36_7XW*)%E=o<H;P7DaLVQZuQ==-Ne>UJ)f6?biT%0XN$-$&D-02Mb^I&R7Y`&nReB:0_.):2*%s:/^<1:4,1D79F21/&3FQ0>h@q-;4F7GZ#Yg.`7-$##2`V%/EJ$*D?PN#@V4r##?22.;h>gu$4mE##+b-+,eoM$fPH)Gi;x#*4`#3+23];%($%JQ:rL*##_[i$wru`SlK.a1MV?_$;ZDl2S:Ki4&H&ERouuL#Lndxl[w,,6cKUA#&A2c*)A<$6[jNv3.3sVoXCH><JhhU3gPo^6cXeK+ig1)#pO(S,MNgxmNpi2DM_ZU_:Z#36b8ll0-)Ou-wTEmDMs+Y3`h,]#v;@C&4QcIIInVT-d7BLLhVus^52Z*[d%;S?;8@V8UPd10>ww=.;l6u$YBBWK4P%4JSu'u)99'J)Mj+x$w>^g87PJxDM_*5DJ9*A6*s//NG^;xTU6lM@C)Y22WA,n@C0<q91ocY7#@S/08i$hDp*^`93VF'E`Jmf-wJ,9#)lZm0q$QhLlRbs0ug)c/WEJ40id`H-wJ+6.#P?7#$i4E8nMFF6&m(?W2F=<0?Inp-vOIQ@Z3.Q0qRMx#gHf+:T#qY#%B>w#$k#s#0^/V0tjHY/W-Z)<j^Gg5H,HS<gJaYBt@s($cUAWCPb7$H>dcw-<N3D/fp+n2LHh9ZtasH##;.%-@',>4HOO,CPE-w(5LwV=*]>lBuH:^-Fv8Y);pPQHA<m86GRWF##*(]=1)PMEe>WI(lxI)#B'T[C2X*0G-,<q$xLBs63$x33.H4Z%XxLtG'O*m4cu&;,>9xPG)@AF(5+>l(:5s'3Iass]2+3EYu_6a#4i;1ID/i;-bYD2#B)Q11U@[F(JGF#3VPi16[`'4;ml22/ss0CSB`.[#,3v632oE<WEtfk9rF&J08;lA&o#.B#.$1M4/kbQi,bT0#$t)?#2OFCCVOAlG-NH?24m7_C:/4t#N6lX0tjH_.#KDg#Er^//<l?g#4ir(jGDMl6_0-s-;Xd4>wU#]rFwJs3La1+Rp9Ae#$m;T?t[9o-we;@GG]NB1ns:3(/-0uGw:8jF^odcHiU^I%p+t/17Q1l#[@@r06h:ba`HMD(RpY](kR'<#wr7]G4w_r6D=Re=AojI0Q_+5CiHPeChBl,&dEp$08:nS@A.2?6kkN2*D?JJ:J?)6C98x605a>:##'Ha#%%@><(nL6##)X4<kHYcHCl1O2Ju7.XxSo5#964FF1#j56Z,36Dmnip##'H+$)KxHAZ%E9#rSW'Do9j$Gb)1*;MfuM^$*IP6cG&-4]f<k$-=Z$7TCRu:Cec<g:Yt1IxU5eq7Xe(.'4_)CLLfR:7axp6Eruc?x'8V1=ioQCPQUD=bY%PBRKxvI8n%XEwh-eCor)H5/qTEI:Xb4<hkY`;u0kB##$:H:lU[70vbQHDn7,d=c/B<0vGlP)iM3x)KTi&eW6Ua06]Ul134XoFxvRp/Tn[,)R.VQ(:c1%21.P[##G;e#D=i@0?et1nZI]o#Zjkx+h(.M&We'A/xg#8$:^)?:.xO(/tIgMs/VZ:6C9wS6cK%*#&?;=##/<h-bYuX),)0j6#Brh9Sl$6Tib*Y%RCM<;Ce<1`,tU3/q2Nkt^?/cC0*46/95B7('Os&.Yi]ki0W[w7p0Cs^RU)jBMM97?aljp6cI>P3ek3.6stF`),(?L#VT1i(0C[>6=3h#79_h:#v?>Q#09q6K#gb8D09KX2MVawEdm`q/lq7g+L&4V#31oV(/,%4#&Ph>k%U'G#@J=b:V?g_=]YwT#Q[)0G)BRI10Xb)6YwH>$<[@VC3[['$697Ue80jh,HEAo/94J,#>P:C$<?G*#%U)-,>8*@D1?B6Br#UF:3^Kd17?h&984l0/n87#162EF%X/D0:3F-a#^W(7RA1V2%q)B=08=FV7t/:/fxN&f$s.ALKjSDN;Lt5HD-[-I^l7=]Rsqt<*IIoqO*Wkw*)$Gl#)?Z</7omfii1w8+'?tf#1jv^F8v^*%#o#s/p@V.##5`54xn*@FClYZ;cS.ElMHSi##8[>#d:b-#HpY314ML$K#g4L6BWkW7?%@V(OhPC(+gPq#K6h[fP-Kp14^IR6[Y&%(WjFt$1:v#6C.hP&St#FrJ628YAGxK$>UHQKU*FE&lm5q6[_N8lp'WdMG<(2-?rwU-s2w2)3eNp%S>/]Xeg]g>>@Y(#.%HZ6cEP6(5F,?8Zw3[67P$&*)$KK###u>+2#pO#1*KqG6`p@3.Y@v#Z-]D#Cdcc`RD.PG#9NB2i*R#k*N>xTm:':,>:Xg08FME9k@X6#>@Kj#).;+5vJ#496,-@clrN.R;F_4qYSd3BQPu5),:2,$W)Lb(OddsB>AQ6CMm3PMhKm)KiMW;3JBBE##68bKiNV/Ggq)4Ggq)(3.<ZG;;jY00&pHd4+/ow#0&O012]kq1@icT*Mtt62cwV*16ns)#(6JUa02='2]SYf'ig0uOJ*DI'MLvY4K0o]_fSBC+,#/J4bg)H2cZ5j3.DEA4+_bn@8&D94FOB^($GX+(64oh*.FD^4c5VW7SFAQP=vbP'MMMi@tBil'igI-ED/<N5(/2j4c,5D+xtrS4cQ=/5(5JQ9i[O*5(+rc)M67<(O]T<*f*ph3f02Q5>;4.#>>o<-#U.r$/6Z:ElveD147SU$`&v93N4''%qr$L:0:QO.W%>@0N,#/#Xlu?07+%1/s(R.1IV=YOA5k^KMGIV@>$PJP#W+GYZredB%^v(K#ipU4&$9<71_W%2Zk%o5v@`uED<'A#2K<5@tArs#4q&w4gM`@7TVQQ'sd4X#etcK./O.n-wT6jBoehK#0hZ&H#>1I7Blk]#[R[DI`#g=)cmRa%Q@@NJ8vx@(MoDMC=3P.(JVPN(9sq/(5HtcH,`xH6_0b35MvX^@9Hgl&Mw%8/99WY'j>%?('x2P)6LY-(6Mr2$V#2A,#TQ+Bt^3mLh('O#v27>$t?oCCfl'x0O?=?&7T=bCg8)i-*Y*p'm.Cv&6pb-#YuK1_.eKw#$`1H-X6]OK#gZo3EdGuu?*.$5^gl:-$X^K&SsoN&S;S.'MSWH/59iJ&Q/wM2]H3+b^h8w$sHtG$$ZHOC<1f;79V'I6;JZ:7Sb.g,C:lp@SZv2JmED9/Q=saB6Z=G&:Z-o0,tu1<X8]j3-I].#%qb:#)=X[KAw#@,,VQ1Hd[ifBp+Qw9GJIQ$ZAIb/xC/k)0k=J8<Za%CkH@kJqpM&2imoK#N/vrEYh_N0?<c2#QlKa>_D<;'^K'w02)K3&v^YxJ^VBG8:al7BZ+xn>.[,=HN^U`-[`Z$$ifF_/p_lq28KYb8S9U<##tm/*Ni6F$RFPc/95+D#Z;hL#'h2U)Cd8R##YVP##N>0#g^ut/94`g20<;M>wfVcGARK3>ve-b%#S)2=d-6j)n1gu#Rupc^r6$t1ZJL$#vH1#$GrtR6+D/+$Pp%=IB#/c4cF=s(Q1B%(lv[6#cVO;12_OGDJk3i3N[DM&53)bMe.Jd<NRw53fTAQ^:/gKUgA%22LRH?_/G#i##2/q->lB=WD?6h3It,Kahf0rI]?dE3.apD3f/d/Gg:.s*QARn#(e+dLnxTo#$m>9##<Q#:Nx)/Iq)ilJ6DrgA4$?$Pa#S'%<=PC&6AkYTj8Kk#lkancK1?T<9FRa$wbRn_J4tI#@:s,##/K6$O9b@M0UA_6dB(`6*>[1#&@jC#>>]fjDTaW#&J,)94%]4V,@f,-?V@Y#G*W54bg3.=%pGI?[?>%Ekx?F%:9,;08;3>2iX#N2heSh.XkC@##x@.%:9*M0@p2m3(tAB&7g8E*a=hv%gR;u5_uXq*.h%O&b^R,)c_f@##54v&5YJn&c,k1IrTR^(/4fH6;/5S'ftsD>Nv`^2cjnK#V6'm:0@eL19DCU'mX.V#jm&$@8$aL6[9]U)1dnG8%:1rIfb.oGg=Z`-@0`g.:dpSpldeJZ[b3V-_j3(-^)^./we0HB2#&%3Q,K]icTJlF*M;OC3UpA1Zf`6-rq0`:N]`71kLsm&B>=e###)Z#wRX=$V`[G-A=#n#$vEo#$vEo#&/3$#&m-0/C+cP##NKH#$M.:W`<JK3cj,13EsOh#>Sp<(&.g;#AX<c4ed:g$%s@p;cR?x,uqXc19P4(X&s;(%()FVG.Y9]&xS*Kdf/B:+BjTZ#AwD?19t'%408QhcOGS5;/^n0'2/xMEhw;G#$mD-#%8vs#v[+.+Edm].C220$<5ba#)YBiH]r..$HSko6].[e1;H&.%87AX'20%g'2/x3'20%/'2/u.qD*s]:J<Xc(VraC)T+)E$(.&rID55mFBfg]I5a0>#(/VW7D(.14FB341;#askm/YM06iGd^M-^I$#wDdI<@*h7)f5EB#?'PFGNG>s`-4C2oD2C'&N`w0MOi+(;'a0(:tJ>/<;<)dZF&WB59/TDJ&sQ#dJj,1<(j)V/L7(+REL,22QI1J5H;^DG_C;1ZgL-9BgjT1:/Kf?`61c@-JKW[a*3V0TRb$0XO[N#&TW1WS[dPUe+q7G):<sHwBOr89n_[2iTj[.)eg--q7WwFGl+&FEMxj7'^%n6[_xZMSqZjD#Ba/6h4iVTk;2LUJ+A7$i$`m2/k>H4Ch.O/w^56(9L)8#GVQ>10tsb-nJo3#%B$NU4%HEJKxvFIf5Fe@'MlBJkQaSHEg8u/s)O2IWv#x4FD+s_F;IS/s)O'b&'6(#wRC>*)$Nd##24)#FPRA05Opu(T(G@$?vPW0i`bs##^cN$?#pS@S@;F##,-7#.m:K6$PJV:J:l#3%@`OCm'@W###N`#$[t.)e@fr+`k>uN`DBR$'`'%C0:OBgdqTqnoEpM#G6gX.kP+'ifuZ)WRPRpHcX[EF2V9gUXT;)$>b=wgWe5l32nTr2pKFU),)jF5(F;M8wsdUF<Lq%U.c^SNDEAS#wS6QHrY^rG:X`AGYAbqHk'U)PuwES%%qi8K6;Tt9hB+r/$`>BTT2+Q6b/^B2iv49O%0j-s`bv_D<1ScH+[S3>EBvVBIkh_3f(HINca1qS5'Hj#&>sl##?G,A/#DgCD7.rCIfG/2cZKbB=2jfHVD6s#1Cl%mJ3#<+%vlrQfd2.DS's,J@g_B#&JD't5=3UX'T=R,AiJI7okZ3[Tsn;,YWp8#l/%6Jo>I<H,q$QA]2BqC2UUe&m+<q(-rr+#Fx7wEXcBQ15Gq7,GGJ,#@rC-#@:x1cY;oa(U0LR'nBXb-[hF%j)LSw#&O?JTiH#T-rnwmCVP#4.80ru2pv`;%sMGQOj9&62Q;L9#L[8%:TxZMHF6IN3mESCElV`L#&ZN=iXO1R6cFui#$smE#B)DWS$E[L6&,aT#>kfS$%W(`3F2hM#&Q0*%:2l`IX+G9$/v`g(JXx;-t`(l&55t]%xjp+ECrqPCNXn)$S?wDBiSXQ#D,7.HdVlAFGY.lVLEKNHh@>DI1)BK=nJ>/4*GT4)c`r8.DS+;#^M?=;,8jxIrg$jAqAEbH@%RMUO7*=4JoMSGa*vw0p9x*H?b`DTR;$OGYp'#ItDa3)j,23-&6>B#hR_]7t@,C0Z>gK(<&6M#7setms1-G6FSD`6dCUs0n=[B9RftX6LL6<7tS^wK#g_66bwg1lJ^ZC6B+$a7#aXJCm(Im#Yrq7(4NG(*5X[=>g%v>08D5d:PiB&7sho%OA>xs.qPAF0u^g=/s`I(0LPo]HHvRq;ri?P%S[g5L5f@C0T@b20>H]#7tKcn-^)bb2,x3l#VQ9g9cM'iJplnsHiF(9c=s-BVi/gRHiF(=+%v[_VQFb&/xNXWRoOTfRoNk.Q;$a<(QF]aR(>H-0Y/q,06ef.2MmC,PY;9HJ5B^1%)j:A/953O.r(Zp18^+.$W53WMRHsL9V+u5C8x_GB8n]@aQT%1t^,C;eT@&b#MYxj/utV;EJl$U#E9C%q;R)P%p.4%#+kRb0#@h-9*2GI1q`CC#@CS?*W=TI19a?_BR+0A06hHPT3jfS1D&g90tE-&$V^&[(:$T>.<K%[nTktZ]57'8##YVB>5J;i8%NET;HX%Na.*0d>%Ao(=DIoD7Ce?e+xs2eFc0U%-,1C&#Z*Ih#h.U(GR+H($;<&u15.qtl,)u4FMW4sTMsac#l)iO0FrW.H^r-,AA:snBQ]aXc>B(?t@k6Q4XU=/odbGo08FP]1qr5=HHn=2fiI30l/;;eFHC(ZCRE[Y_c-oaK/if5J'-`R(0(?k_t+ExCPe>L0mGtq7W'd]Bk(MvAZ%PI@uwqr4%pl'),0qH15Ap6#(L+(IbaFFK;p'`e8hxU15f#plDi9D6bBr?/:^1G2hejAIt1CVBSfR#YrH/NHr]cu7>WeSC.x]4-VQ=Z06hku#$:l_08Fn:%%^Vq6,eH;G]x]/V`%oZ2Gt-S.Bn6,E)oR$.#2A'f6cRiTloDT(fc0QJmX,I#1q_rB4:r2JTEvY'2/CK##kH/&9k+_6,8c/>(AWB0u:Y&##-CIZ[NP,[S2e:/x<OJCT`gs%dS%g'6I'2@um1[:4*]fO.$)bnoFJ^#:GbL,sHn-@w;.@'5/T'BZgRV/rtF27;YAM5_c*C#%M4/m%:LxBNcCP078V&BWZ#[.`p`w@p<lAGB@a71rx7M)m3bZ##%&J9=p)CCU>6i'srK=G#)IL+itv,3H[Ek/6+NY9tPq'#X&5oax[^0#(&%lpLp=44+vt^-bR:XDG9?0$bN*6IQw@+LNadAg3N2X:-Adh@tDXQ-x=.4CVXm7GfYmPCVV'U&Suu)nJkE21q1lFB<mZ>4F@WBB5Df,BYof>##5M/qK:xI-EUl'Fb8&AB=^`>HYed?B=VKaEjk/jFKeK'<l)liHFV.%#?i.$&?nu:FcO7bEOC)<425QfBu/*-C9in%FMLhY-d0p,*DSRu-EV6-ZVEG`#MpPvF=?dllm;=DP&Dc-@qg:W::utXf5AQE/r#GDP]jRWcB>l(@t&Px4MjYq^=pJfC*Nc.;n.[x[_po'BS&(f5'0N4fbF<v5ui9@#(1T]J4?8Z6c9J,#1YPx6_&rB*pewZQr^9U@=l@2&RYTb4_]7o>(h160>_Ru3PIYS/f0fa6dI$)-GD)x4FDF_GhnqAtaPBSY*5'`EJYmm7?q$25^gAQ08=[>/6wHA/nNTJF-&N.6,F&[Y)caq@DZ<)J;HX?@S@s.dG2Qm6,4x)09.QL8X-^1H?Jt9#jq2h3g86'5@Hr&#$a_J#?'[,#;7KT4gP/Z)jl8WH%.8r21Kx2uIdeP5bCk,2p$m-D=(JX:TYu%9[Rn>5g5c16*[PI(V5W_:Ph9LH>jlI3JM-q#'Vj3-;61T5f.l</AN^c#&?#k##.+=5a`16.[3)X%SS$vG-Q._Hbnnv,SCZZ1F*Ne%8=n,/:BC.1OUhF/:p[T#,F/AG):<V#/aBbJ;HX[HGFn.2hwaR8c2tu5vx'0J;5Sw0p:#'#H_;;0#g3.-5JY-<k5.w/VH/u#.$=S9W_J'Jst,x3d.$Q9W%vSq/RVe.=Eo@##D)k)28s3Cm_$tK8r*]#@9vrj(PPV#$vhaJ3b2&%GX%m6_&rF1rwU9WeK3FI5rwYDaOl<I,uKH2n/(@J[8h;CWxM99voT79lOH;)CcmH/mlDE-x4-'$W,6r35T+Jtw)ms##)Q_(kHEm#+PkCH+Q9b)7,x[#+5OMJqgK@0M_S)As0$0BsuW@#@(P?iG6V=#(6SX6wC?-8$D&qHAc:FHFo-P*^4%W##7Cm(W+Gu##YGJ1;Xv7#.wWE>6K_csFgZdDSC&:-MEL8-t-]8-w7V_sEON,10fNY$`i.M1;vF@#)kbk21+5)(PoVx-?iV4a)@_]7XH>6IvCCFI$Xs2It>we-rl5;6reT8'2h/]2LI'xe8iw86d*1o%mIRN4FAq#;I<wk#%'3@6@M(bCP%.g4/jTl(lN,w%w-e+FC%:BM,ZbSFi(r)=AG2E)6sFZ#8w]J5ap'g0=O*(X-F6CE_qE$@bw)Y06^.92Ms/O)0j1e(4;NR/?r;@##5a&%jYLa4,toW`9tHc5QdLASlTvduucN`LL,0I1ONjCI3ASp[bvtf6*Z>O=^>O$KkH5'd>GCm92$;F92#p3Nvs>gA&t&BC30cd2L'+m=%jdBOA&PU=MpO;Cjt(H#9X#(0vGML#%rRK.8O>T*mMGj97/khD(cn^I^%@vO&#sq$xLmw/En:c7$R[Z(4LCj$)puRG&fqqJ56p`cujSNG0):s2LPGP)7N+FGCD6T0sH4CG&]+O=71b%2mU)kEHt:L%W+]Ip-FBd++5p.17&;`9c:ZL0JYA2I>eH%Lki@E@t<-L5q1>f0%/pgoPKkMecg`uFhEKd08Fc3iL0XiEqGPe&54U,69cQ],uoGU#,3Q$IE6fP##*'J#i&dWCJ6(806wc+%pFOGB2)<_Ej2gpL2C4`%oo_9A#V+m+hS@aB9doU5)Uk:ne<6<BQR1*19sOW&lkIS0CPY>Ekx96CNV[jCkQ%L)8Kh7(5;,#(kJDO2k.U;9M?%`1f]%@#2N+h/vC8'8$?@Am=be[^OvA&#'a5F*<@,*(JH*>CoqB5=aT%OFL?4a#D-*n/nA<Z_8(fg.on$')8g$Q$)1RMFi4t5$W[7Z/wcCi#bQvbA^Yl;9p2TX6()6kC62<)6_(4wVLL/:B6]4(1:qu@sL>'Z16#bN#$d7=s,-Yib$UvWA+B=e%^;%93fT&F4*WWB14M9<4+/Z@3-[6ho1ljSU/Vcdn8*UbEjiKd6+C?i=04R(B6PlYEH;.X$FkMt15.KL6bqKS/@T&C1O(_9'2/uV94]Zo'1D>%/x58C3Hg5N0oD?=Dmn6aB6#s?0uUlH.upe+t#_I:3.EExB6S.'06&f,4c,PIENLbU#.v[L3g-#=B>0SaH*'<WB;x+Qb5.BR&lmg%2MNWmB<)8dB6F#R(s$PI)Ro5/BnOC8Fi'nJ#&Yk.XfacYB8^-i0p9]X5aK5^#&Gk8j`1M]2cEOJ=xha;ENNS$(7hOk#vqx0$VcEUB8A[2Jm`wN0n>(%4+B?2B5MdY)Qc/m>FAvg8$8lY(9OKK(TUYF(4QlP&)Vg):oK(c=C'l0C3;/HFL?4B?Ecn15ui8_"));
    embedhtml5(p, "krp:0ph2jPw29kN gO#7B]Tkm9m9%MAW;SaI|MJ-pTk2U1|lzhcm8l<VAYB#02)2mo1*jc'&`<6<^O$sdm<yPDw]m;9Bv?&D=/cmCDLW{#uiexg>k| w'Zy|d_Y-YZ$jtTj9/~Q]w8iQ4;J1._^Z!?9LL>L~n''al=GMA4S#LLTxx-l'b^5hu1dn(Eg:x;Uw?IP<qt:ae4tZ4t~&WYj`<J-IU0}lrO<*c^mN8oES+rr'KT$Df~~/*Lg 2 *;6fAJt%y*jHVQ>Ag{.LBS%.mBkrIhfGpbSa.5h+P{HLO_DvXIYI$TcJ_?P 4B*{Yd_$^z-bb;ZeQ?cNs}`<NI4%gAWOC#cVMc!WS5W1{EeB67{J&joj*6'JMn,^Mi5>lWWsNdkiY@.=Il@9lP@q3 c+;xp'W)!Z}-dCW{>La&DmBJIZL'!(wh#3_uK|Lrzk}zIgc%4_n8=$mxkN.f(|0x)Pudf5(Dm6/I&bh9|y2;6_+w.k/%Dxn[z:09GN[GCH>DTa%RvSQL^yt5UYgddf3=PmXS@q*&f=Ku56}z(!:.)tX(pe(w;Gb#L{}Eu?94v(0j96}j,q?`dD(LO$9t> o5o~[[G)sML6AJn'~fb`-m'9nP~%?~Xr<VvCb6.D,2{)yK?%CDB/mSi<Pq-Hq]EdKSH5mb^0[?*BTR*.}%61w;r6kae$RxZ%V%'^MRLWuS7*+NKu_1|OmH5uPDhj5apvjWy{`p}&)JuVwWn`Q0(Wxy(j3wa}V11}P{z=O9jbYCQzoJ`11>`6]n#M?jz8c:DXdLw<x8V:YYG^aWf{Qo&ox1l<8&mRe.?&nxS9vgi^Svh1DkqY#fOVX#h58l=pi^_b$]'aADL macicxy?U6f>VAR(&K@B,LIWYIv$~Dc'yQ $Kr+z.?Ee]i4GX?2e0MZ?&jK5-mouTs$eH9d-o9L5:.-bgh[(w`j0FaKI1GH -Tm`fW8e-$r41u|y3Rw!$~a&Di:`j C+,m m5sv ~~U7vM5SXq[o&]+;{E!8([N>op-CydOEE6()Vw+wco{eg{}O}]26{_1e.'dR02j1R 0|v<X&{-SJ3E!n~v<aV(p%<LW;pAJTDjP_cbeU5FK>S(A{]H1Evq^nAK6GKpJ(wdOk=c;F'+'<MS7fx_-j>DKC!YO9~JUw%',Ut^#5A0j!59G^KU,?!Tr.oVmOtUZ?ApD4#NNcO08%a~ISe}!6KT*$CZWt1]oZRH0L<LNl)'Pm'VDKe@D)Pv?pb0tR%}lH>YLSuKVJA{Q[)ZunjG 5s(;&[<[AN`gniCK9iJ2nFw2a)'Y7u/cO/O-zj9.Z8(v-]|2]?#NnB{/i4k%}Hw*YMvUD/C#Zc7h'rb7O*`HxZB[=lmPlD|EW-Kp]eHk< WTdDk`IHtE*eoKuU6gs!LpAe$<V<]Bg,;XI,'>&_(gjA0=iAv|hLawmGlU;F4_*^4NqE(Zq;t4P8?'A2QV|zxjkllq(^)^i`>wd}UV/=#dByhn{RPC'$Y>eK_d1kb GN;ujZ^K*2opY8,h/jk1KQANsvRw*IA?FqT`x!5y^)|Qhr?!(5`4nUu.~'&y=$_PIi1CAhU('_Ee6sXAoB=3$8l_GWmlWuz7f(odeT]:r=i#WDMH%xFT6,k%J y-~K1IY-J8:U1(KFnyoO+uRK_-aiH0<lpX$p7RMyeF$2/>Jn!W#zz@zY+f*e8.zHA$RW|hWLL|Ji@V=CL74gvYUrxUp]yVfcIX.ffcpRB$ .Tr^Bt][EG#9<&@0q>GTqN*|V`TIfM&Nh;^e;FxWrkUAIdROJYAI3(I,wvP!=8#/.y/15=0P%J}]f#_ZXl6cRu.CUzWAa_nFL;L8.Xl[DJ5Jj=m{|`<C![mRNVeC!J_n;$:-@38$I[84q-~A{[iE+{In5m1JRr+VCSLZRS[!k|^f:&a#gspRcQ:U'y%nNOe Ml+E:gG`d(2=nfiAAkYwqAhuxbg`n.[Wl4*NC*2l>6Ye7 k<VRLO9Dmd)EkbDOR&Myq4>dLL|G PC:#U6.YAK(b^845|TK3-/q_I-e~<dU0f0#l#?6[Hkxz't(* %z/XfNXsq)foflrdoxV&xY& p5?xJSr^N]2aw(qCI<c-;f>ZS;?}c,s]KJP5,Sr<Yl9.4'4Dq#veaD-54?x`d ~tBNSO&YC^nbTJpRDGwO]rCVKNijy0,$wpCD}PnZ0OKz5y%<a;qVPG'&U_&z)~x+V=gmHAAzpxEM~a/dZ_~1RBH=vy!*:jti3_XrCD)a%tpL4*qGn5 D)Lx*s(X(j9k -;?W%f4=#+=D74~~0^[;T?UScL]}{P!,@HGDy1^8w,2NyBGo5I[:yFh#_Tr7^|:B0MX~CT+}vDM-dMmyPK7sXW [oqSYvH-xv<iR#j-p$` 8r@+W}8D`8k$rV3[&b&H6]KFqtwzD88`9& @<V+~nuBq#0X88hk}mhAq>CFz~Ch,_Rx~F6 sqVOcX<fi*gU(BlT5D]lu<cZO8;v7>yRF}@qX3i(a$e[UwtiU/{KaS&<Oh^RtmD!D^8y^#@H$_G63Bv%H3rS35KNKt'XAI5lR'BRX^_qT'?cFS`rhfSqvBv@{|:)]0eN#l.Dk[g<R=~GFp|pvwVE>+08o#cC;}T&CkEH!i'^O'JJ/?FUz,PBz?r0d tRl%f717:lE<ob4hhrs1mDHT3;Q`'d pO6x9_46wOWT*Q^O|({f5=CK2BDe1|rFIuvHuU-?]pS]$l05'|m8dKW{~Q3rkFa5 SljiRmw!tqd(ZPqnw|]E666HrJ16s-[W1}Sm~w6&59z}fk.3s(+4o(`5USwQwBZ2<K?!DO1Yl'W)9YCy3Xuil@Xw&|mQ)glg*g5[}?@Buy_wc5rffiA28%a1,z98pdIqrq<xUe)q#sHV]]1Ob:@jmO2|,yK5{rn5<p/GIK^,Xm;PTi=mC!B 0(ie2N|wH7`AmR9fhZOBNKQX}qqN/5i^[d]@Z:*#2.WmIAyb|iI+0rh6rdrkbA5+0+=ztZ yC8(Z'Cx3b():#3$y7]!N$eS]B+SfYyegJ?UkJ_D)d=s@lK%!KT7Ga%vHa'8vZ{)Ge([fpj$C*qNcO#7 D}LCLwRzcmD.Om+x|,$7.[IF~v_Si;`]s_#M?FiP,'DRyftR2Xj8d3+/;ioZlKb3*!0(dQ 5a''**sk(7n,rf2&EGN$S/]X=JhFG}-.Ka.-SD.@.pq%rIuK{V=>Px (U_OBNQPI08xvNt(gzB7b/eM]@dPq/IYdZzMx8L 5iL])B`dvS;l+*S1[WzFKsZhSCUA/BNNZHx:4h^lL(|k|^t~OtPE,'B$B)w<jbF]NKS}j+S)hP51#CG6tBCj8x!%rAxX=JRMzNEw?+E;fj;#S,cYrib]OQ(xDfiyHP7$P5^an439&!z#5g4=hX4vw_]5Jo7uHz9a<-mpUuKzn;yb8@C;`nDX9/CoKEz=AN8'I@<tlnD-H90DF5 ?p,Oo 0RurLWikbl{,W&~hBV9~flZudKYon'@L-?7[gc$Ue%mHV)7wm9Gh=d(Q>_O=YT@Q;ywC&sLUAqN;vrO-`'?oU4[fJcg3~m?ZR|KnY/zdpx3xd!t[@oPW.i(Jr3jTRoY6&Zy5<WG&!:$Ecf'leR$SlqzWndxk:7~!?1Rsoqa]/aD4q#b[RRl#f-l;,6gh/+bzF=eoFoV[$jD,aB;`wq<N*v~@)V}/wzoB?98B0c9pA0KU$rN?wA#/kmu-wIMb#3x4^)nc:8#G3)9L|'4Bp9bayW?oRh4'-EKg$}LOBZnN_D'E`zt?IJ8CUr{Nvc12|:!NQW9>&%cC3v;vm#7HSoxFm@?yf>*q:r~A:9=Ap=8$8E4G[S!4),UD3,p(c`@m)yc)x&ha|7I{yqt%MieQnTW8DK/rLyU]qT,JS?>HA5$Y%laxF@Lb<UYy7#_tnPEDh8J~9K9DsB:k&tKAc+4YGrld8lX~K3wR'X,:,V#OTL,r3O:5dA`8;0-V=L@cz/3hV)^h.:-d:vxyB{11@@:#ib_;waV{#^pEPd8kS02!>:$jV~hAu.OElt:'~t$kw93f(pYW= 7}5b#;-9scVyx7TF4[Us~2N|QqC>;%c1E4jN3Vp(Y)Q;/[b_^8AxR#`oy_DLEYEA_yFv*Hh],|(_GH||~vw0`[Tl^gO3PzJ{%3V.jhoh!Kk[51>RVn/pPxb^Li2*<ENM&33v`;w qR%S{;o HGBE{b&fA.S&&![x bXKd>|eql>u?`|hQ4a})mq,%VgH58-vjE< R$Y5bWH~xGo]pvxvy}:1@40=d3MDTE#`GMhFD=E{w:e*Dj;Ks 4c~R<#3~MG-jfAKV:[X'.u.RSe'Vt#&BE9iII})T@v2~DNnr3*sdO|D>5*wNsyt_#MeoW/XWTDA-e13}UEQGMEb$=.1E+1/:2Aa>aI!h)oZPtHJy](i5Z3|3!d`KE.U5RrXp+a&_yR,WL?tUD6]+%R}4HzF]JLEz6AXY#7:${1<TL.r>y=S)({U?{!+7B|ndCalv?,n ~Ys;mtW^ XeX>p=f34ABrYVIc~-m{!N?K1SmK]tO .2)e[Iq3x)#w6`)]|-sjlS5H 1<}8GV-zNcZX-K|4qI:zJ$pU>hZ9.nq]v0U1gp<P;,]kB^!wE2KN/Rr0 <~M9;%BH|'-T( MW{tymQQqzR9=NGdDOa/g+G_xHek@MPFd6b6m3kZ+CIlhm~x{Jha8$d14oBTTOqy:DO)B8ch3I]z]M({p%y^eSH(T_LNtUCB{/@g2L)'#|F565nR $'>G@946$5)PeXS-89yN,v{X$HTM|R+9jb`Ts@&lt80WB4F.#eJ~Zj=z|r9Nwsg,0 p`n`yYOGi%:H6|#hL2_H(y<,*xV1e|:=8]!bqCZ-6x2i:5$GC'`H#9bV3Oegfdl[Cyu{B!y1G<5|_kj2Z/FhMVrx_MqD5Gc>~}+>c>MWGh DF `UYARIY3S?}B~d2NR9KH;`d]K!hT$]NvHC9TWD}FBt{|+h?PL+&Ajw(kcg#:v<+).5zaga%s`4Km*LGEIx[j arU]1&Z4<hQD)g@^u'#$u`E.?!!>(DiVsq*v!#|p'7%ycB]E0Jy^}o5gNeW~ePo<v?d|g0HH0/~Mdwz+:X7jEC1U10T0gn>hDDlqd=v93TLE5;hFi~V*erK>f[+AV+ph7ua#1g`K|ma^6va?j>2wx@fzKH^5]+x?35T?^4qGTuC)l}$HFtUDc@H,TM(%%Z MB;X?@ij/N9^d0Upy)5&J;5egL=;Q&`5*=A kd{Q*_#A.t8:JE/Ht_jp'G-mZJ_NvI'c1HV|U$tutqD)uo3xl;7UKxg[j|9:@L+:_N26SW}SY PclzEHN29NAn'V_kWPt'#]aE;_oDoir_:@}#_JrJ+H7rNRbdNQfW:PtF1 i8L<FBfk1|`.%y0w p'J45L$EsLOr4gIFVfS$bG{gA#1gH*j@Q=B,R%j[n0)^n3N+|)u5^VOxSN,$i>dIVkyS7498&HN:U;z u,}2G.*V~[LGYOAr+`7G.qx79FC[7}iUg[v>VWrs8ub!rEO=Xl@epS>VJ#<^@mDLc]%I0i7VHy_RE|{,W-Mtn)`GbC0ksi'Z5k>Mr.[v{d]GvhVU(hbDH.a3a.c{0e?NdsR%Td5(Yw>%y2/7Y7/ad+1|;^1#6-MdUjUr4(Djg_fh}rPX9WhgY;VCrPW0xsaYz|vNzLI5+%|C:mQW> teWqEqIIhb[/&*~!Nczacu`<J-*=W!72)~t-$c!6O$vWGSq,WTKt-a{0HnxnanGD.SF+~)jj,kq?,9NRtMQ|xFtvv%~l1?W#A_~Qr8j1ig I=Y|?=P|6tCm/%n!_t4R2.$|@`R{$!'6)sXVPl?1nC{aVwknU2(yw,sKe1pWpoN#44}pIXb r[`qy{E.+0#{[c* ia^)#9PcGK|Ve[zx240UrwajhZY1p7Q+27btP3T?7qM<Lvq 6+V2!=Iy&&|/UE3JGY _yK_}Hdx$X':EaS*r v3y=[q}nS.i*0!!3hWk$lafGa-MIt~}/|.*a-ng (x[SG>XiLrh*?9_sap`WpV:6`GL'{( k{uqz0hsc_h!=;$({oC{v)d'ps&x5B:MpywXBBZf6g>ekRjh]=KtwkCzm*f|o!gb[Hm7eLkhDP88vs9u@W7Us0EK3FQ, ,sx<SD=?_d!NUy0M'YiP<b8<`kyJeWvfE*It?BwrL+d-8J3KBP'=m+.7,A'i<DA9H%pP/*R^kc`%;Dh#qzk:kW1c9Ni0*f+*F`Y#2(nr25L0j/7lmpd1Kx`CjL@Fref@=v2M[<e,n4a(OWtT*|Q:n}F@^2[p?p)i,op B}5L)DMSSx2u{L!9yMMd+FteKY.)F,4sDWZd+Xbgi7$cHzg0Q1RC&~drbX_i;`-(ZaSU3/y{NW?:>cd*F~CpWO|rzW}0X(xU61`gQ!)jY%Yf[..m(+.z$GS7%'wGbew`#;NMEh}]>n(bFnd8&MJtUhfYU:h?Pv)8Ln*58%OTQt!&hN)N(lD^c9it8B{5SH]R/f@s$v-XMQi93(M9&0DL'PfAmI'.5v 1bG_Utrh.[e$G:h{2^W~FF[BBB|_/%`Fb4x;m2FVD3N&]`!EpYY53{AFGy)B-Wt>.Q8Hg&SvUXh6tNBr.QqU5'd)y7!|0[Nwou3>x3v46}@osLO?g5A(2Ld|DPf/<cX`]%|Ty&PBs7}=|/~'wB_v3<I@53KLP{%mK_oMRN1MHCQe&zUH;~gL=A~Q,>S8Ez-L^qvJNR*Q]mu5*W*NM}Q+0;35^>B?~Mls3Mg_2WqMCpx44CfjS#8Dt|>7WX7}qi_-ZctCY0rP:VgBr]7:KV%SM(;kKM{lghmYsTAeE{Q}O<]hKDBR#vB?i5M@uD}BOWgY~jKxI9I,&b8SoJ)[4ofNT,$:4|XwcKw]5p([Dc4tQcrxC}CW33/4*v,xHW*O~8jGPFk$5{+PR@bx'&ziwfc)[HGgtG%{xK4Xi=C0#]dvNwg]J@$9X.@x5@wgZ}3;~JV1u|:@?:^Xn*HH~AFNGyMz*CFF4&}8hGvLJ^pFxA#9Mt07>.fcSr85Gn!CRi?g;TIrQ-z`*138a:-l.%c/[5dPk:TdjQVAe.Hzo1QeYctjk0y]]!71Sd;DFOt&xj(E42<8KhHi_3Sm0%O<6Q@ribMx<JCz{4[.}Zv8:BNHeg8KPk|#!8P<7I/|HNGOD[Vm<$sSti-DvFNtf6oI5m0.}5!QC^76SfGN(b(*K]qPtM4$5gH%W]y&od0wlm: ~$1t4EF5UX41n1w}MT'|{}LL&Cdy|4`}LRr'$dT|,O~=X_A3CtuA;i-&&(>SGt-;F&6F^6mg+13cSm3A_axoqj9Ww@{ab>>A~FtO0n9iCii(=&yO+|(l!^C`v@Yb/*{McUZwf~,j]u?|%OyXK:KL;20b7J{pwBVzRp=!epeFGnL41yeg];UAWP/<,/gNWo4'lvYBnNDu~pEe1^E0F9i`/BFU1[U8%W:iq=xI5lC4!qPN_=Kq^ER]C2c!Xrh= Fr3cwSK_~<g=69nTa(JIvX'NL.|?%bDBZZOYd)/aBaVi)o$SB1:cr6Y1!yluCe{]T^,d5+op$EX&b{pkDD>z2_FfT!I|8HY$KBOtj&|S62?hIV5C40)oES|C*!aELB9*r;@BmYy5k +Xi($VCeyKbq^OH+A!Q0~JEL[?aU!58t4&PP/HKKW=C&-q8MXk_p5:r<_JSzd+>UCf,oY4+M9Rb?T*`m-nY$F3V8 nDl95lT!L'.VMRDf.G7DC[!RwO[AE1YTS2ii#0c]3QeM8)D-z@.l`Q4NTu{wl!%W0 L7qpS~yy.}jc}g+Qb%U@0AG<NtXcrk=L%C@8fRF|c=DUGcGS]mb-G<Y~aY^V)@?lI~d+VM9IkV[V6K%ng,fkz<fx2SY0a,=m!Hq[H$R1:Xq2~v?w%XH2RYpR'rhm_*u?)<]c[n7yi|<ZlPlX4}5C1l3@cPv;lnuhHIIy3OSK<LQ!:b13!'4fT(qd~ZuWo@Cb{'7=7nL]hFL[A#}K}dth}%62T'zUK&HgZ^mW^s:X4Uwo-`A!gXZczP@|$E%iBI^ztS%Os|?)E}u';7|f?>n>fs(ncctXg)#OjJ3zTo>a*j.l}_xU(,E3K7O3,IPFBA6t6:8a'B<fHqcQMPeZ12C}@BzMW[`paY;Mxe}Y<Xl4c^9H/'G1yi0bkbHqtxLrbM*W~1mV6ufkV#ty=%}L,y>8KZ#;U+uX.'eykB_=JH=(=BU(OzR!A>lrqvz*6@ 7%&gNUIXvAv>RPxiw6pa(0(q$ct+J=C=TBmKf=&y6U'i@<}2ePR#{?AFjJc_E&ur^_%2_M:T<reKbU-&C^eI:D!w,!)?O,<Jt!UB`-NQ)<f;8]6zI`y[)#Il4wmnIu95,Onx[p d<MfK?Q6 vZP+2`lQ+?aU Rlp}:*Dl%ig5tAc|h(n(a@kpW4]w>v=:>3X#!D}Z:Djqc2`h[a`j4_Bhi}iNz-AQDwtn'#(>NsK3Y<`_XCKrnwXuTHF9&d)P6]o?yCk|3>Vk.82_}/BlLz1I,~)dE%|n,yli96y>t2M'cXplm/Je#3VuRH6*^bAq|DQe96w=;l: whbE+Y<m Uj,1DLd$pK.ZzUs[oJ1~OX:CR~Zrl[-X*.$*6}_7ZmtGZ]_W/-BiybWOW&mrNXYsBE/bgDE`x.e(N{d-4l%{5j'@?sGFQe|RtFWD9$wO%iBn<kMLIE fgt)Ilzk+Q3wfpLw.^GR[5qX%NQk_NxmM s$_%(jGJf!vYt*eJ,v7->so(HF#Ge(D-v-bhocwLL[,7!C$jHc }0ZTwHm*j8'hVkpI]a=]{`@t0][]y^z%1pDEWyja|.OVnyxDyrG|ffp.rKF/h;eiYfG8[ZV}Pm<SC>f]SFS(5/Kh_*CB,g9Ct]u+I0[TlsqF%@!HMWjlk2's~jFCjWr7vKl=THi?#m;sI0[QE|XUPK:*YOa|'FpL`.Q/@<bqjvtV*_jI'&g[,!@ULX.1eERNW-yOP@")
};

function LoadJson(_file) {
    return new Promise(function(resolve, reject) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", _file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                resolve(rawFile.responseText);
            } else if (rawFile.readyState === 4 && rawFile.status == "404") {
                reject("404");
            }
        }
        rawFile.send(null);
    })
}

function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}


var tiltValData = [];
var sectionData = [];
var seatData = [];
var availabilityData = [];
var cameraInfoData = [];
var panoLoaded = false;
var mousePosEvent = null;
(function() {
    document.addEventListener("DOMContentLoaded", function(event) {
        mousePosEvent = window.event;
        loadPano();
        var sectionInfo = getParameter("p");
        defaultPano = sectionInfo ? sectionInfo : defaultPano;
        var secInfoArr = defaultPano.split("_");

        var loadTiltValue = new LoadJson(tiltValueBaseUrl + "/" + tiltValueDefaultFileName + ".json");
        loadTiltValue.then(function(data) {
            if (data) {
                tiltValData = JSON.parse(data);
                loadJsonDatas(defaultPano);
            }
        }, function(error) {
            console.log("error on tilt value json");
        });
    });
}());

function loadJsonDatas(_param) {
    availabilityData = [];
    sectionData = [];
    seatData = [];
    cameraInfoData = [];


    var secInfoArr = _param.split("_");
    document.getElementById('sectionNo').innerHTML = secInfoArr[1];
    document.getElementById('rowNo').innerHTML = secInfoArr[2];
    document.getElementById('seatNo').innerHTML = secInfoArr[3];
    var promiseArr = [];

    promiseArr.push(loadXML(baseUrl + "/media/vrview/images_tile/" + "Section_" + secInfoArr[1] + "/VR_" + _param, (tiltValData[0][_param]) ? tiltValData[0][_param] : 0));
    promiseArr.push(new LoadJson(availabilityPath));
    promiseArr.push(new LoadJson(sectionBaseUrl + "/" + _param + ".json"));
    if (secInfoArr[1] == "119") {
        promiseArr.push(new LoadJson(seatBaseUrl + "/" + _param + ".json"));
        promiseArr.push(new LoadJson(cameraInfoBaseUrl + "/Section_119.json"));
    }


    Promise.all(promiseArr).then(function(data) {
        if (data) {
            availabilityData = JSON.parse(data[1]);
            sectionData = JSON.parse(data[2]);
            if (data[3]) {
                seatData = JSON.parse(data[3]);
            }
            if (data[4]) {
                cameraInfoData = JSON.parse(data[4]);
            }
            loadHotspots();
        }
    }, function(error) {
        console.log('error on json');
    });
}

function krpanoReady() {
    var panoload2 = setInterval(function() {
        try {
            // IOM_Spin.hide('iomSpinnerHolder');            
            rollOverHandler();
            window.clearInterval(panoload2);
        } catch (e) {}
    }, 1000);

};

function loadPano() {
    var settings = {};
    settings["downloadlockedlevel"] = true;
    settings["debugmode"] = false;
    settings["showErrors"] = false;
    settings["maxpixelzoom"] = "1.0";
    settings["limitview"] = "auto";
    settings["contextmenu"] = false;
    settings["events.onloadcomplete"] = krpanoReady;
    if (!panoLoaded) {
        embedpano({
            swf: "krpano.swf",
            xml: "",
            target: "IOMPano",
            id: "krPanoObject",
            html5: "prefer+webgl",
            passQueryParameters: true,
            vars: settings
        });
        panoLoaded = true;
    }
};

function loadXML(_url, _titlY) {
    return new Promise(function(resolve, reject) {
        _titlY = _titlY ? _titlY : "0";
        //IOM_Spin.show('iomSpinnerHolder');
        var vrFolderPath = _url + "/";
        xmlPath = "";
        xmlPath = '<krpano version="1.18"> <include url="%SWFPATH%/plugins/showtext.xml" />' +
            '<view limitview="auto" hlookat="0" vlookat="' + _titlY + '" fov="' + panoFOV.fov + '" fovmin="' + panoFOV.min + '" fovmax="' + panoFOV.max + '"/>' +
            '<preview url="' + vrFolderPath + 'preview.jpg"/>' +
            '<image type="CUBE" multires="true" tilesize="512" progressive="false">' +
            '<level tiledimagewidth="2048" tiledimageheight="2048">' +
            '<cube url="' + vrFolderPath + 'mres_%s/l3/%v/l3_%s_%v_%h.jpg" />' +
            '</level>' +
            '<level tiledimagewidth="1024" tiledimageheight="1024">' +
            '<cube url="' + vrFolderPath + 'mres_%s/l2/%v/l2_%s_%v_%h.jpg" />' +
            '</level>' +
            '<level tiledimagewidth="512" tiledimageheight="512">' +
            '<cube url="' + vrFolderPath + 'mres_%s/l1/%v/l1_%s_%v_%h.jpg" />' +
            '</level> </image>' +
            '<style name="availableImg" url="HSP.png"/>' +
            '<style name="selectedImg" url="HSP_C.png" visible="false" />' +
            '</krpano>';
        //document.getElementById('krPanoObject').call("loadxml(" + (xmlPath) + ")");
        document.getElementById('krPanoObject').call("loadxml(" + (xmlPath) + ", null, MERGE, BLEND(6, 'easeInQuad')");


        //panoObj.call("loadxml(" + (xmlPath) + ")");

        var panoload = setInterval(function() {
            try {
                resolve("panoLoaded");
                window.clearInterval(panoload);
            } catch (e) {}
        }, 1500);

    })

}

function getPanoObj() {
    return document.getElementById('krPanoObject');
}

var seatInfoArr = [];

function clearData() {
    for (var i in seatInfoArr) {
        $("#" + seatInfoArr[i]).remove();
    }
    totalPrice = 0;
    seatInfoArr = [];
    $(".buy_seat_div").css({ 'visibility': 'hidden', 'height': '0' });
    $('.bottom_line .buy_seat_div').css({ 'width': '0%', 'display': 'none' });
    $('.text_row,.text_seat').css({ 'width': '33.33%' });
}

function removeSeatInfo(_param) {
    var krpano = getPanoObj();
    var id = _param.id ? _param.id : _param
    var index = seatInfoArr.indexOf(id);
    if (krpano.get("hotspot[" + seatInfoArr[index] + "]")) {
        toggleHS(id, false);
    }
    var secInfoArr = seatInfoArr[index].split("_");
    seatInfoArr.splice(index, 1);
    totalPrice -= rateCalculator(secInfoArr[3], true);
    $("#" + id).remove();
    $('.price_txt').html('$' + totalPrice + ".00");
    $('.qty_text').html(seatInfoArr.length);
    if (seatInfoArr.length < 1) {
        $(".buy_seat_div").css({ 'visibility': 'hidden' });
        $('.bottom_line .buy_seat_div').css({ 'width': '0%', 'display': 'none' });
        $('.text_row,.text_seat').css({ 'width': '33.33%' });

    }

}

function toggleHS(_param, _selected) {
    var krpano = getPanoObj();
    if (_selected) {
        krpano.set("hotspot[" + _param + "].visible", "false");
        krpano.set("hotspot[selected_" + _param + "].visible", "true");
        krpano.set("hotspot[selected_" + _param + "].alpha", "1");
    } else {
        krpano.set("hotspot[" + _param + "].visible", "true");
        krpano.set("hotspot[selected_" + _param + "].visible", "false");
        krpano.set("hotspot[selected_" + _param + "].alpha", "0");
    }

}

var flag = false;
var totalPrice = 0;

function seatClickHandler(_param) {

    if (seatInfoArr.indexOf(_param) < 0) {
        seatInfoArr.push(_param);
        var secInfoArr = _param.split("_");
        document.getElementById('seatInfoHolder').innerHTML += '<div class="full_line" id="' + _param + '"> <span class="col-md-8 col-sm-7 col-xs-12"> <div class="dark_grey_txt">Sec ' + secInfoArr[2] + ', Row ' + secInfoArr[3] + ', Seat ' + secInfoArr[4] + '</div> <div class="sub_grey_txt">Standard Admission</div> </span> <div class="col-md-4 col-sm-4 col-xs-12"> <span class="sub_blue_txt">' + rateCalculator(secInfoArr[3]) + '</span> <img src="img/close.png" class="close_icon" onclick="removeSeatInfo(' + _param + ')"> </div> </div>';
        totalPrice += rateCalculator(secInfoArr[3], true);
        $('.price_txt').html('$' + totalPrice + ".00");
        toggleHS(_param, true);
        //var tooltipInt = setInterval(function() {
        //krpano.set("hotspot[" + _param + "].style", "selectedImg");
        //}, 1000);

        //krpano.get("hotspot[" + _param + "]").url = "HSP_C.png";
        //krpano.delayedcall(10, ("hotspot[" + _param + "]".url, "HSP_C.png"));
        //var hotspot = krpano.get("hotspot[" + _param + "]");
        //krpano.delayedcall("set(hotspot[" + _param + "].url", "HSP_C.png)");
        //hotspot.loadedurl = "HSP_C.png";

        //krpano.set(hotspot.url, "HSP_C.png")
        // krpano.delayedcall(10, set(hotspot[_param].url, HSP_C.png));
        // krpano.get("hotspot[" + _param + "]").rx += 10;
        /* if (flag) {
     krPanoObj.set("view.hlookat", krPanoObj.get("view.hlookat") + 1);
 } else {
     krPanoObj.set("view.hlookat", krPanoObj.get("view.hlookat") - 1);
 }
 flag = !flag;
*/
    } else {
        toggleHS(_param, "false");
        removeSeatInfo(_param);
    }
    if (seatInfoArr.length > 0) {
        $(".buy_seat_div").css({ 'visibility': 'visible', 'display': 'table' });
        $('.bottom_line .buy_seat_div').css({ 'width': '70%', 'display': 'table' });
        $('.text_row,.text_seat').css({ 'width': '10%' });
        $('.qty_text').html(seatInfoArr.length);
    }
}
//$("#buy_seat_holder").css('visibility', 'hidden');

function addHotspot(_obj, _param, _img, _scale, _alpha, _visible, _section, _selected) {
    var selected = _selected ? _selected + "_" : "";
    if (_obj) {
        _obj.call('addhotspot(' + selected + _param.n + ')');
        _obj.call('set(hotspot[' + selected + _param.n + '].ath,' + _param.h + ')');
        _obj.call('set(hotspot[' + selected + _param.n + '].atv,' + _param.v + ')');
        _obj.call('set(hotspot[' + selected + _param.n + '].url,' + _img + '.png)');
        _obj.call('set(hotspot[' + selected + _param.n + '].Scale,' + _scale + ')');
        _obj.call('set(hotspot[' + selected + _param.n + '].distorted, false)');
        _obj.call('set(hotspot[' + selected + _param.n + '].alpha,' + _alpha + ')');
        _obj.call('set(hotspot[' + selected + _param.n + '].visible,' + _visible + ')');
        if (_section) {
            _obj.call('set(hotspot[' + selected + _param.n + '].onclick, js(hotspotClickHandler(' + _param.n + ')))');
        } else {
            _obj.call('set(hotspot[' + selected + _param.n + '].onclick, js(seatClickHandler(' + _param.n + ')))');
            _obj.call('set(hotspot[' + selected + _param.n + '].onout, js(seatOut(' + _param.n + ')))');
            _obj.call('set(hotspot[' + selected + _param.n + '].onhover, js(seatHover(' + _param.n + ', true)))');
        }
    }
}

function loadHotspots() {
    krPanoObj = getPanoObj();
    if (krPanoObj) {
        for (var i = 0; i < sectionData.length; i++) {
            var scaleVal = 0.47;
            var tooltipUrl = 'Section_Images/Section_' + sectionData[i].n.split("_")[1];
            addHotspot(krPanoObj, sectionData[i], tooltipUrl, scaleVal, 0, true, true);
        }

        if (!seatData) {
            return
        }
        for (var i = 0; i < seatData.length; i++) {
            var scaleVal = seatData[i].d * 0.15;
            addHotspot(krPanoObj, seatData[i], 'HSP', scaleVal, 1, true, false);
        }

        for (var i = 0; i < seatData.length; i++) {
            var scaleVal = seatData[i].d * 0.15;
            addHotspot(krPanoObj, seatData[i], 'HSP_C', scaleVal, 0, false, false, 'selected');
        }

        for (var i = 0; i < seatInfoArr.length; i++) {
            toggleHS(seatInfoArr[i], true);
        }

        /*for (var i = 0; i < seatData.length; i++) {
            var scaleVal = seatData[i].d * 0.15;
            var flag = false;
            seatInfoArr.find(function(a, b, c, d) {
                if (a == seatData[i].n) {
                    flag = true;
                }
            })
            if (flag) {
                addHotspot(krPanoObj, seatData[i], 'HSP', scaleVal, 1, false, false);
                addHotspot(krPanoObj, seatData[i], 'HSP_C', scaleVal, 1, true, false, 'selected');
            } else {
                addHotspot(krPanoObj, seatData[i], 'HSP_C', scaleVal, 1, false, false, 'selected');
                addHotspot(krPanoObj, seatData[i], 'HSP', scaleVal, 1, true, false);
            }
        }*/
        /*var lookatInt = setInterval(function() {
            var _titlY = krPanoObj.get("view.vlookat") + 0.2;
            krPanoObj.call("tween(view.vlookat," + _titlY + " , 2.0);");
            clearInterval(lookatInt);
        }, 200);*/
    }
}

var draw = null;

var mouseOnPopOver = false;

function popupDisabler() {
    mouseOnPopOver = false;
    $("#popup_cont").off("mouseenter", popOverHandler);
    $("#popup_cont").off("mouseleave", popOutHandler);
    $("#popup_cont").css('display', 'none');
}

function popupEnabler() {
    $("#popup_cont").css('display', 'block');
    $("#popup_cont").on("mouseenter", popOverHandler);
    $("#popup_cont").on("mouseleave", popOutHandler);
}

function seatOut(_param) {
    if (tooltipInt) {
        clearInterval(tooltipInt);
    }
    var tooltipInt = setInterval(function() {
        if (!mouseOnPopOver) {
            popupDisabler();
            clearInterval(tooltipInt);
        }
    }, 500);
}

function popOverHandler(e) {
    mouseOnPopOver = true;
}

function popOutHandler(e) {
    popupDisabler();
}


var seatOverInfo = null;

function seatHover(_param, evt) {
    if (mouseOnPopOver) {
        return;
    }
    popupEnabler();
    seatOverInfo = _param;
    var secInfoArr = _param.split("_");
    document.getElementById('popupsectionNo').innerHTML = secInfoArr[2];
    document.getElementById('popuprowNo').innerHTML = secInfoArr[3];
    document.getElementById('popupseatNo').innerHTML = secInfoArr[4];
    document.getElementById('popPriceTxt').innerHTML = rateCalculator(secInfoArr[3]);
    document.getElementById('popPriceTxtSmall').innerHTML = ticketPrice(secInfoArr[3]);
    document.getElementById('servideTax').innerHTML = serviceTax(secInfoArr[3]);

    var krpano = getPanoObj();
    if (!krpano) {
        return;
    }
    var mousex = krpano.get("mouse.x");
    var mousey = krpano.get("mouse.y");

    var tooltipSpan = document.getElementById('popup_cont');
    var offset = $("#krPanoObject").offset();

    tooltipSpan.style.left = mousex - ($("#popup_cont").width() / 2) + 'px'; //35
    tooltipSpan.style.top = (mousey - $("#popup_cont").height() - 20) + 'px';
}

$('#switchOnOff').on('change.bootstrapSwitch', function(e, state) {
    console.log(e.target.checked);
});


function hotspotRollerHandler(_hotspotName, _param) {
    /*var krpano = document.getElementById('krPanoObject');
if (!krpano) {
    return;
}
*/

}

function rollOverHandler() {
    var tolerance = 10.0;

    var minAlpha = 0.1;
    var maxAlpha = 0.4;
    var alphaRange = maxAlpha - minAlpha;
    //var distanceRange = tolerance = 0; // just use tolerance
    draw = setInterval(function() {
        var krpano = getPanoObj();
        if (!krpano) {
            return;
        }
        var mousex = krpano.get("mouse.x");
        var mousey = krpano.get("mouse.y");
        if (mousex && mousey) // wait also for the jsmouse plugin
        {
            var hvs = krpano.screentosphere(mousex, mousey);
            var ath = hvs.x;
            var atv = hvs.y
            for (var i = sectionData.length - 1; i >= 0; i--) {
                athHotSpot = sectionData[i].h;
                atvHotSpot = sectionData[i].v;

                var dist = Math.sqrt(((ath - athHotSpot) * (ath - athHotSpot)) + ((atv - atvHotSpot) * (atv - atvHotSpot)));
                if (dist > tolerance) {
                    krpano.get("hotspot[" + sectionData[i].n + "]").alpha = 0;
                } else {
                    krpano.get("hotspot[" + sectionData[i].n + "]").alpha = 1.5 - (minAlpha + ((dist / tolerance) * (alphaRange * 4)));
                }
            }

            /*for (var i = seatData.length - 1; i >= 0; i--) {
    seatAthHotSpot = seatData[i].h;
    seatAtvHotSpot = seatData[i].v;
    var seatDist = Math.sqrt(((ath - seatAthHotSpot) * (ath - seatAthHotSpot)) + ((atv - seatAtvHotSpot) * (atv - seatAtvHotSpot)));
    if (seatDist > 1) {
        krpano.get("hotspot[" + seatData[i].n + "]").url = "Ticket.png";
    } else {
        krpano.get("hotspot[" + seatData[i].n + "]").url = "Ticket_over.png";
    }
}
*/
        }
    }, 100);
}

function clearDrawInterval() {
    clearInterval(draw);
}

function hotspotClickHandler(_hsName) {
    loadNewPano(_hsName);
    //updateSection(_hsName);
}

function resetPano() {
    var panoObj = getPanoObj();
    panoObj.set("view.hlookat", 0);
    panoObj.set("view.fov", panoFOV.fov);
    panoObj.set("view.fovmin", panoFOV.min);
    panoObj.set("view.fovmax", panoFOV.max);
}

function removeHotspots() {
    var panoObj = getPanoObj();
    for (var i = 0; i < sectionData.length; i++) {
        //if(panoObj.get("hotspot["+sectionData[i]+"]")){
        panoObj.set("removehotspot[" + sectionData[i].n + "]")
            //}
    }
    if (!seatData) {
        return
    }
    for (var i = 0; i < seatData.length; i++) {
        //if(panoObj.get("hotspot["+seatData[i]+"]")){
        panoObj.set("removehotspot[" + seatData[i].n + "]")
        panoObj.set("removehotspot[selected_" + seatData[i].n + "]")
            //}
    }
}

function loadNewPano(_hsName) {
    //clearData();
    //document.getElementById('krPanoObject').call("looktohotspot(" + _hsName + ", {}, tween('easeInQuad',0.5))");
    //document.getElementById('krPanoObject').call("zoomto(" + panoFOV.fov + ", linear(10))");
    //document.getElementById('krPanoObject').call("zoomto(130,smooth())");
    removeHotspots();
    clearDrawInterval();
    loadJsonDatas(_hsName);
}

function loadPanoFromPopup() {
    popupDisabler();
    cameraInfoData.find(function(a, b, c) {
        if (a.n == seatOverInfo) {
            loadNewPano((a.VR).split("VR_")[1]);
        }
    })
}

function rateCalculator(rowNumber, _param) {
    var value = 0;
    if (rowNumber < 6) {
        value = 1000;
    } else {
        if (rowNumber < 11) {
            value = 500;
        } else {
            if (rowNumber < 16) {
                value = 250;
            } else {
                value = 100;
            }
        }
    }
    if (_param) {
        return value;
    } else {
        return "$" + value + ".00";
    }
}

function ticketPrice(rowNumber) {
    if (rowNumber < 6) {
        return "$922.34";
    } else {
        if (rowNumber < 11) {
            return "$461.17";
        } else {
            if (rowNumber < 16) {
                return "$230.58";
            } else {
                return "$92.23";
            }
        }
    }
}

function serviceTax(rowNumber) {
    if (rowNumber < 6) {
        return "$77.66";
    } else {
        if (rowNumber < 11) {
            return "$38.83";
        } else {
            if (rowNumber < 16) {
                return "$19.42";
            } else {
                return "$77.77";
            }
        }
    }
}

/*'<style name="letter" capture="false" handcursor="false" fillcolor="0xffffff" bordercolor="0xffff00" borderalpha="0.80"    onover="tween(alpha, 0.1, 0.25);" onout="tween(alpha, 1.0, 0.25);" ondown.touch="onover(); asyncloop(pressed, onhover(););" onup.touch="onout();" roundedge="5px 5px 5px 5px"/>' +
 */
/*
'<textstyle name="STYLE1" font="Arial" fontsize.no-mobile="14" fontsize.mobile="28" bold="true" italic="true" background="true" backgroundcolor="0xFFFFFF" border="true" bordercolor="0x777700" textcolor="0x333300" padding="10" roundedge="0" origin="cursor" edge="bottom" textalign="center" xoffset="0" yoffset.no-touch="-10" yoffset.touch="-40"/>';

         if (seatData && seatData.length > 0) {
             for (var i = 0; i < seatData.length; i++) {
                 if (availabilityData[seatData[i].n] || defaultAvailabilityPosCheck) {
                     var scaleVal = seatData[i].d * 0.1;
                     var tooltipUrl = 'Ticket';
                     var seatArr = seatData[i].n.split("_");
                     var seatName = "Section " + seatArr[2] + " | Row " + seatArr[3] + " | Seat " + seatArr[4];
                     xmlPath += '<hotspot name="' + seatData[i].n + '"  url="' + tooltipUrl + '.png " ath="' + seatData[i].h + '" atv="' + seatData[i].v + '" Scale="' + scaleVal + '" alpha="1" onclick="js( seatClickHandler(' + seatData[i].n + ') );" distorted="false" onout="js(hotspotRollerHandler(' + seatData[i].n + '));" onhover ="js(hotspotRollerHandler(' + seatData[i].n + ', true)); showtext([font color=#01a1df]' + seatName + '[/font][br] [font style=font-size:12px] Ticket Price [br] $ ' + seatArr[3] + '0.00[/font], STYLE1);" visible="true"/>';
                 }
             }
         }
         xmlPath += '</krpano>';*/



/*krPanoObj.call('addhotspot(' + seatData[i].n + ')');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].ath,' + seatData[i].h + ')');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].atv,' + seatData[i].v + ')');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].url, ' + tooltipUrl + '.png)');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].Scale,' + scaleVal + ')');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].distorted, false)');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].alpha, 1)');
//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(seatClickHandler(' + seatData[i].n + ')))');
//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(hotspotClickHandler(' + seatData[i].vr + ')))');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(seatClickHandler(' + seatData[i].n + ')))');
//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(hotspotClickHandler(' + vrNumberSeat(seatData[i].n.split("_")[3]) + ')))');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].onout, js(seatOut(' + seatData[i].n + ')))');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].onhover, js(seatHover(' + seatData[i].n + ', true)))');
krPanoObj.call('set(hotspot[' + seatData[i].n + '].visible, true)');*/
/*krPanoObj.call('showtext, ([font color=#01a1df]' + seatName + '[/font][br] [font style=font-size:12px] Ticket Price [br] $ ' + seatArr[3] + '0.00[/font], STYLE1)');*/


/*tooltipUrl = 'HSP_C';
krPanoObj.call('addhotspot(selected_' + seatData[i].n + ')');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].ath,' + seatData[i].h + ')');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].atv,' + seatData[i].v + ')');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].url,' + tooltipUrl + '.png)');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].Scale,' + scaleVal + ')');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].distorted, false)');

//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(seatClickHandler(' + seatData[i].n + ')))');
//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(hotspotClickHandler(' + seatData[i].vr + ')))');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].onclick, js(seatClickHandler(' + seatData[i].n + ')))');
//krPanoObj.call('set(hotspot[' + seatData[i].n + '].onclick, js(hotspotClickHandler(' + vrNumberSeat(seatData[i].n.split("_")[3]) + ')))');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].onout, js(seatOut(' + seatData[i].n + ')))');
krPanoObj.call('set(hotspot[selected_' + seatData[i].n + '].onhover, js(seatHover(' + seatData[i].n + ', true)))');*/
/*krPanoObj.call('showtext, ([font color=#01a1df]' + seatName + '[/font][br] [font style=font-size:12px] Ticket Price [br] $ ' + seatArr[3] + '0.00[/font], STYLE1)');*/
