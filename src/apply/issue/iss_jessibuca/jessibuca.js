!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jessibuca = t()
}(this, (function () {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var i, o = t((function (e) {
        e.exports = function (e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), r = (i = o) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    const s = 0, a = 1, n = "flv", A = "m7s", d = {
            videoBuffer: 1e3,
            videoBufferDelay: 1e3,
            isResize: !0,
            isFullResize: !1,
            isFlv: !1,
            debug: !1,
            hotKey: !1,
            loadingTimeout: 10,
            heartTimeout: 5,
            timeout: 10,
            loadingTimeoutReplay: !0,
            heartTimeoutReplay: !1,
            loadingTimeoutReplayTimes: 3,
            heartTimeoutReplayTimes: 3,
            supportDblclickFullscreen: !1,
            showBandwidth: !1,
            keepScreenOn: !1,
            isNotMute: !1,
            hasAudio: !0,
            hasVideo: !0,
            operateBtns: {fullscreen: !1, screenshot: !1, play: !1, audio: !1, record: !1},
            controlAutoHide: !1,
            hasControl: !1,
            loadingText: "",
            background: "",
            decoder: "decoder.js",
            url: "",
            rotate: 0,
            forceNoOffscreen: !0,
            hiddenAutoPause: !1,
            protocol: a,
            demuxType: n,
            useWCS: !1,
            wcsUseVideoRender: !0,
            useMSE: !1,
            useOffscreen: !1,
            autoWasm: !0,
            wasmDecodeErrorReplay: !0,
            openWebglAlignment: !1,
            wasmDecodeAudioSyncVideo: !1
        }, c = "init", l = "initVideo", u = "render", h = "playAudio", p = "initAudio", m = "audioCode", g = "videoCode",
        f = "wasmError", b = "Invalid NAL unit size", y = 1, v = 2, w = 8, S = 9, E = "init", B = "decode",
        C = "audioDecode", R = "close", k = "updateConfig", T = {
            fullscreen: "fullscreen$2",
            webFullscreen: "webFullscreen",
            decoderWorkerInit: "decoderWorkerInit",
            play: "play",
            playing: "playing",
            pause: "pause",
            mute: "mute",
            load: "load",
            loading: "loading",
            videoInfo: "videoInfo",
            timeUpdate: "timeUpdate",
            audioInfo: "audioInfo",
            log: "log",
            error: "error",
            kBps: "kBps",
            timeout: "timeout",
            delayTimeout: "delayTimeout",
            loadingTimeout: "loadingTimeout",
            stats: "stats",
            performance: "performance",
            record: "record",
            recording: "recording",
            recordingTimestamp: "recordingTimestamp",
            recordStart: "recordStart",
            recordEnd: "recordEnd",
            recordCreateError: "recordCreateError",
            buffer: "buffer",
            videoFrame: "videoFrame",
            start: "start",
            metadata: "metadata",
            resize: "resize",
            streamEnd: "streamEnd",
            streamSuccess: "streamSuccess",
            streamMessage: "streamMessage",
            streamError: "streamError",
            volumechange: "volumechange",
            destroy: "destroy",
            mseSourceOpen: "mseSourceOpen",
            mseSourceClose: "mseSourceClose",
            mseSourceBufferError: "mseSourceBufferError",
            mseSourceBufferBusy: "mseSourceBufferBusy",
            mseSourceBufferFull: "mseSourceBufferFull",
            videoWaiting: "videoWaiting",
            videoTimeUpdate: "videoTimeUpdate",
            videoSyncAudio: "videoSyncAudio",
            playToRenderTimes: "playToRenderTimes"
        }, I = {
            load: T.load,
            timeUpdate: T.timeUpdate,
            videoInfo: T.videoInfo,
            audioInfo: T.audioInfo,
            error: T.error,
            kBps: T.kBps,
            log: T.log,
            start: T.start,
            timeout: T.timeout,
            loadingTimeout: T.loadingTimeout,
            delayTimeout: T.delayTimeout,
            fullscreen: "fullscreen",
            play: T.play,
            pause: T.pause,
            mute: T.mute,
            stats: T.stats,
            performance: T.performance,
            recordingTimestamp: T.recordingTimestamp,
            recordStart: T.recordStart,
            recordEnd: T.recordEnd,
            playToRenderTimes: T.playToRenderTimes
        }, x = {
            playError: "playIsNotPauseOrUrlIsNull",
            fetchError: "fetchError",
            websocketError: "websocketError",
            webcodecsH265NotSupport: "webcodecsH265NotSupport",
            webcodecsDecodeError: "webcodecsDecodeError",
            webcodecsWidthOrHeightChange: "webcodecsWidthOrHeightChange",
            mediaSourceH265NotSupport: "mediaSourceH265NotSupport",
            mediaSourceFull: T.mseSourceBufferFull,
            mseSourceBufferError: T.mseSourceBufferError,
            mediaSourceAppendBufferError: "mediaSourceAppendBufferError",
            mediaSourceBufferListLarge: "mediaSourceBufferListLarge",
            mediaSourceAppendBufferEndTimeout: "mediaSourceAppendBufferEndTimeout",
            wasmDecodeError: "wasmDecodeError",
            webglAlignmentError: "webglAlignmentError"
        }, D = "notConnect", j = "open", L = "close", F = "error",
        O = {download: "download", base64: "base64", blob: "blob"}, V = {7: "H264(AVC)", 12: "H265(HEVC)"}, M = 12,
        U = {10: "AAC", 7: "ALAW", 8: "MULAW"}, Q = 38, W = 0, J = 1, G = 2, P = "mp4", N = "webm", z = "webcodecs",
        H = "webgl", Y = "offscreen", X = "key", q = "delta", Z = 'video/mp4; codecs="avc1.64002A"', K = "ended",
        _ = "open", $ = "closed", ee = 1e3, te = 27, ie = 38, oe = 40,
        re = "A key frame is required after configure() or flush()", se = "The user aborted a request";

    class ae {
        constructor(e) {
            this.log = function (t) {
                if (e._opt.debug) {
                    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
                    console.log(`Jessibuca: [${t}]`, ...o)
                }
            }, this.warn = function (t) {
                if (e._opt.debug) {
                    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
                    console.warn(`Jessibuca: [${t}]`, ...o)
                }
            }, this.error = function (e) {
                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
                console.error(`Jessibuca: [${e}]`, ...i)
            }
        }
    }

    class ne {
        constructor(e) {
            this.destroys = [], this.proxy = this.proxy.bind(this), this.master = e
        }

        proxy(e, t, i) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!e) return;
            if (Array.isArray(t)) return t.map((t => this.proxy(e, t, i, o)));
            e.addEventListener(t, i, o);
            const r = () => e.removeEventListener(t, i, o);
            return this.destroys.push(r), r
        }

        destroy() {
            this.master.debug && this.master.debug.log("Events", "destroy"), this.destroys.forEach((e => e()))
        }
    }

    var Ae = t((function (e) {
        !function () {
            var t = "undefined" != typeof window && void 0 !== window.document ? window.document : {}, i = e.exports,
                o = function () {
                    for (var e, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], o = 0, r = i.length, s = {}; o < r; o++) if ((e = i[o]) && e[1] in t) {
                        for (o = 0; o < e.length; o++) s[i[0][o]] = e[o];
                        return s
                    }
                    return !1
                }(), r = {change: o.fullscreenchange, error: o.fullscreenerror}, s = {
                    request: function (e, i) {
                        return new Promise(function (r, s) {
                            var a = function () {
                                this.off("change", a), r()
                            }.bind(this);
                            this.on("change", a);
                            var n = (e = e || t.documentElement)[o.requestFullscreen](i);
                            n instanceof Promise && n.then(a).catch(s)
                        }.bind(this))
                    }, exit: function () {
                        return new Promise(function (e, i) {
                            if (this.isFullscreen) {
                                var r = function () {
                                    this.off("change", r), e()
                                }.bind(this);
                                this.on("change", r);
                                var s = t[o.exitFullscreen]();
                                s instanceof Promise && s.then(r).catch(i)
                            } else e()
                        }.bind(this))
                    }, toggle: function (e, t) {
                        return this.isFullscreen ? this.exit() : this.request(e, t)
                    }, onchange: function (e) {
                        this.on("change", e)
                    }, onerror: function (e) {
                        this.on("error", e)
                    }, on: function (e, i) {
                        var o = r[e];
                        o && t.addEventListener(o, i, !1)
                    }, off: function (e, i) {
                        var o = r[e];
                        o && t.removeEventListener(o, i, !1)
                    }, raw: o
                };
            o ? (Object.defineProperties(s, {
                isFullscreen: {
                    get: function () {
                        return Boolean(t[o.fullscreenElement])
                    }
                }, element: {
                    enumerable: !0, get: function () {
                        return t[o.fullscreenElement]
                    }
                }, isEnabled: {
                    enumerable: !0, get: function () {
                        return Boolean(t[o.fullscreenEnabled])
                    }
                }
            }), i ? e.exports = s : window.screenfull = s) : i ? e.exports = {isEnabled: !1} : window.screenfull = {isEnabled: !1}
        }()
    }));

    function de() {
    }

    function ce() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const t = e.split(","), i = atob(t[1]), o = t[0].replace("data:", "").replace(";base64", "");
        let r = i.length, s = new Uint8Array(r);
        for (; r--;) s[r] = i.charCodeAt(r);
        return new File([s], "file", {type: o})
    }

    function le() {
        return (new Date).getTime()
    }

    function ue(e, t, i) {
        return Math.max(Math.min(e, Math.max(t, i)), Math.min(t, i))
    }

    function he(e, t, i) {
        if (e) return "object" == typeof t && Object.keys(t).forEach((i => {
            he(e, i, t[i])
        })), e.style[t] = i, e
    }

    function pe(e, t) {
        let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!e) return 0;
        const o = getComputedStyle(e, null).getPropertyValue(t);
        return i ? parseFloat(o) : o
    }

    function me() {
        return performance && "function" == typeof performance.now ? performance.now() : Date.now()
    }

    function ge(e) {
        let t = 0, i = me();
        return o => {
            t += o;
            const r = me(), s = r - i;
            s >= 1e3 && (e(t / s * 1e3), i = r, t = 0)
        }
    }

    function fe() {
        return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())
    }

    function be(e) {
        if (null == e || "" === e || 0 === parseInt(e) || isNaN(parseInt(e))) return "0kb/s";
        let t = parseFloat(e);
        return t = t.toFixed(2), t + "kb/s"
    }

    function ye(e) {
        return null == e
    }

    function ve(e) {
        return !ye(e)
    }

    Ae.isEnabled, (() => {
        try {
            if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
            }
        } catch (e) {
        }
    })();

    class we {
        on(e, t, i) {
            const o = this.e || (this.e = {});
            return (o[e] || (o[e] = [])).push({fn: t, ctx: i}), this
        }

        once(e, t, i) {
            const o = this;

            function r() {
                o.off(e, r);
                for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
                t.apply(i, a)
            }

            return r._ = t, this.on(e, r, i)
        }

        emit(e) {
            const t = ((this.e || (this.e = {}))[e] || []).slice();
            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
            for (let e = 0; e < t.length; e += 1) t[e].fn.apply(t[e].ctx, o);
            return this
        }

        off(e, t) {
            const i = this.e || (this.e = {});
            if (!e) return Object.keys(i).forEach((e => {
                delete i[e]
            })), void delete this.e;
            const o = i[e], r = [];
            if (o && t) for (let e = 0, i = o.length; e < i; e += 1) o[e].fn !== t && o[e].fn._ !== t && r.push(o[e]);
            return r.length ? i[e] = r : delete i[e], this
        }
    }

    class Se extends we {
        constructor() {
            super(), this.init = !1
        }

        resetInit() {
            this.init = !1, this.videoInfo = {width: "", height: "", encType: "", encTypeCode: ""}
        }

        destroy() {
            this.resetInit(), this.player.$container.removeChild(this.$videoElement), this.off()
        }

        updateVideoInfo(e) {
            e.encTypeCode && (this.videoInfo.encType = V[e.encTypeCode]), e.width && (this.videoInfo.width = e.width), e.height && (this.videoInfo.height = e.height), this.videoInfo.encType && this.videoInfo.height && this.videoInfo.width && !this.init && (this.player.emit(T.videoInfo, this.videoInfo), this.init = !0)
        }

        play() {
        }

        pause() {
        }

        clearView() {
        }
    }

    var Ee = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0;

    function Be(e, t, i) {
        var o = new XMLHttpRequest;
        o.open("GET", e), o.responseType = "blob", o.onload = function () {
            Te(o.response, t, i)
        }, o.onerror = function () {
            console.error("could not download file")
        }, o.send()
    }

    function Ce(e) {
        var t = new XMLHttpRequest;
        t.open("HEAD", e, !1);
        try {
            t.send()
        } catch (e) {
        }
        return t.status >= 200 && t.status <= 299
    }

    function Re(e) {
        try {
            e.dispatchEvent(new MouseEvent("click"))
        } catch (i) {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
        }
    }

    var ke = Ee.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        Te = "object" != typeof window || window !== Ee ? function () {
        } : "download" in HTMLAnchorElement.prototype && !ke ? function (e, t, i) {
            var o = Ee.URL || Ee.webkitURL, r = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            t = t || e.name || "download", r.download = t, r.rel = "noopener", "string" == typeof e ? (r.href = e, r.origin !== location.origin ? Ce(r.href) ? Be(e, t, i) : Re(r, r.target = "_blank") : Re(r)) : (r.href = o.createObjectURL(e), setTimeout((function () {
                o.revokeObjectURL(r.href)
            }), 4e4), setTimeout((function () {
                Re(r)
            }), 0))
        } : "msSaveOrOpenBlob" in navigator ? function (e, t, i) {
            if (t = t || e.name || "download", "string" == typeof e) if (Ce(e)) Be(e, t, i); else {
                var o = document.createElement("a");
                o.href = e, o.target = "_blank", setTimeout((function () {
                    Re(o)
                }))
            } else navigator.msSaveOrOpenBlob(function (e, t) {
                return void 0 === t ? t = {autoBom: !1} : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {autoBom: !t}), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {type: e.type}) : e
            }(e, i), t)
        } : function (e, t, i, o) {
            if ((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."), "string" == typeof e) return Be(e, t, i);
            var r = "application/octet-stream" === e.type, s = /constructor/i.test(Ee.HTMLElement) || Ee.safari,
                a = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((a || r && s || ke) && "undefined" != typeof FileReader) {
                var n = new FileReader;
                n.onloadend = function () {
                    var e = n.result;
                    e = a ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = e : location = e, o = null
                }, n.readAsDataURL(e)
            } else {
                var A = Ee.URL || Ee.webkitURL, d = A.createObjectURL(e);
                o ? o.location = d : location.href = d, o = null, setTimeout((function () {
                    A.revokeObjectURL(d)
                }), 4e4)
            }
        };

    class Ie extends Se {
        constructor(e) {
            super(), this.player = e;
            const t = document.createElement("canvas");
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, this.$videoElement = t, e.$container.appendChild(this.$videoElement), this.context2D = null, this.contextGl = null, this.contextGlRender = null, this.contextGlDestroy = null, this.bitmaprenderer = null, this.renderType = null, this.videoInfo = {
                width: "",
                height: "",
                encType: ""
            }, this._initCanvasRender(), this.player.debug.log("CanvasVideo", "init")
        }

        destroy() {
            super.destroy(), this.contextGl && (this.contextGl = null), this.context2D && (this.context2D = null), this.contextGlRender && (this.contextGlDestroy && this.contextGlDestroy(), this.contextGlDestroy = null, this.contextGlRender = null), this.bitmaprenderer && (this.bitmaprenderer = null), this.renderType = null, this.player.debug.log("CanvasVideoLoader", "destroy")
        }

        _initContextGl() {
            this.contextGl = function (e) {
                let t = null;
                const i = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                let o = 0;
                for (; !t && o < i.length;) {
                    const r = i[o];
                    try {
                        let i = {preserveDrawingBuffer: !0};
                        t = e.getContext(r, i)
                    } catch (e) {
                        t = null
                    }
                    t && "function" == typeof t.getParameter || (t = null), ++o
                }
                return t
            }(this.$videoElement);
            const e = ((e, t) => {
                var i = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n"),
                    o = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "const mat4 YUV2RGB = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;", "}"].join("\n");
                t && e.pixelStorei(e.UNPACK_ALIGNMENT, 1);
                var r = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) || console.log("Vertex shader failed to compile: " + e.getShaderInfoLog(r));
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, o), e.compileShader(s), e.getShaderParameter(s, e.COMPILE_STATUS) || console.log("Fragment shader failed to compile: " + e.getShaderInfoLog(s));
                var a = e.createProgram();
                e.attachShader(a, r), e.attachShader(a, s), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) || console.log("Program failed to compile: " + e.getProgramInfoLog(a)), e.useProgram(a);
                var n = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), e.STATIC_DRAW);
                var A = e.getAttribLocation(a, "vertexPos");
                e.enableVertexAttribArray(A), e.vertexAttribPointer(A, 2, e.FLOAT, !1, 0, 0);
                var d = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, d), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), e.STATIC_DRAW);
                var c = e.getAttribLocation(a, "texturePos");

                function l(t, i) {
                    var o = e.createTexture();
                    return e.bindTexture(e.TEXTURE_2D, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), e.uniform1i(e.getUniformLocation(a, t), i), o
                }

                e.enableVertexAttribArray(c), e.vertexAttribPointer(c, 2, e.FLOAT, !1, 0, 0);
                var u = l("ySampler", 0), h = l("uSampler", 1), p = l("vSampler", 2);
                return {
                    render: function (t, i, o, r, s) {
                        e.viewport(0, 0, t, i), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, u), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t, i, 0, e.LUMINANCE, e.UNSIGNED_BYTE, o), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, h), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, i / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, r), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, p), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, i / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, s), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
                    }, destroy: function () {
                        try {
                            e.deleteProgram(a), e.deleteBuffer(n), e.deleteBuffer(d), e.deleteTexture(u), e.deleteTexture(h), e.deleteBuffer(p)
                        } catch (e) {
                        }
                    }
                }
            })(this.contextGl, this.player._opt.openWebglAlignment);
            this.contextGlRender = e.render, this.contextGlDestroy = e.destroy
        }

        _initContext2D() {
            this.context2D = this.$videoElement.getContext("2d")
        }

        _initCanvasRender() {
            this.player._opt.useWCS && !this._supportOffscreen() ? (this.renderType = z, this._initContext2D()) : this._supportOffscreen() ? (this.renderType = Y, this._bindOffscreen()) : (this.renderType = H, this._initContextGl())
        }

        _supportOffscreen() {
            return "function" == typeof this.$videoElement.transferControlToOffscreen && this.player._opt.useOffscreen
        }

        _bindOffscreen() {
            this.bitmaprenderer = this.$videoElement.getContext("bitmaprenderer")
        }

        initCanvasViewSize() {
            this.$videoElement.width = this.videoInfo.width, this.$videoElement.height = this.videoInfo.height, this.resize()
        }

        render(e) {
            switch (this.player.videoTimestamp = e.ts, this.renderType) {
                case Y:
                    this.bitmaprenderer.transferFromImageBitmap(e.buffer);
                    break;
                case H:
                    this.contextGlRender(this.$videoElement.width, this.$videoElement.height, e.output[0], e.output[1], e.output[2]);
                    break;
                case z:
                    this.context2D.drawImage(e.videoFrame, 0, 0, this.$videoElement.width, this.$videoElement.height)
            }
        }

        screenshot(e, t, i, o) {
            e = e || le(), o = o || O.download;
            const r = {png: "image/png", jpeg: "image/jpeg", webp: "image/webp"};
            let s = .92;
            !r[t] && O[t] && (o = t, t = "png", i = void 0), "string" == typeof i && (o = i, i = void 0), void 0 !== i && (s = Number(i));
            const a = this.$videoElement.toDataURL(r[t] || r.png, s), n = ce(a);
            return o === O.base64 ? a : o === O.blob ? n : void (o === O.download && Te(n, e))
        }

        clearView() {
            switch (this.renderType) {
                case Y:
                    (function (e, t) {
                        const i = document.createElement("canvas");
                        return i.width = e, i.height = t, window.createImageBitmap(i, 0, 0, e, t)
                    })(this.$videoElement.width, this.$videoElement.height).then((e => {
                        this.bitmaprenderer.transferFromImageBitmap(e)
                    }));
                    break;
                case H:
                    this.contextGl.clear(this.contextGl.COLOR_BUFFER_BIT);
                    break;
                case z:
                    this.context2D.clearRect(0, 0, this.$videoElement.width, this.$videoElement.height)
            }
        }

        resize() {
            this.player.debug.log("canvasVideo", "resize");
            const e = this.player._opt;
            let t = this.player.width, i = this.player.height;
            e.hasControl && !e.controlAutoHide && (fe() && this.player.fullscreen ? t -= Q : i -= Q);
            let o = this.$videoElement.width, r = this.$videoElement.height;
            const s = e.rotate;
            let a = (t - o) / 2, n = (i - r) / 2;
            270 !== s && 90 !== s || (o = this.$videoElement.height, r = this.$videoElement.width);
            const A = t / o, d = i / r;
            let c = A > d ? d : A;
            e.isResize || A !== d && (c = A + "," + d), e.isFullResize && (c = A > d ? A : d);
            let l = "scale(" + c + ")";
            s && (l += " rotate(" + s + "deg)"), this.$videoElement.style.transform = l, this.$videoElement.style.left = a + "px", this.$videoElement.style.top = n + "px"
        }
    }

    class xe extends Se {
        constructor(e) {
            super(), this.player = e;
            const t = document.createElement("video");
            t.muted = !0, t.style.position = "absolute", t.style.top = 0, t.style.left = 0, e.$container.appendChild(t), this.videoInfo = {
                width: "",
                height: "",
                encType: ""
            };
            const i = this.player._opt;
            i.useWCS && i.wcsUseVideoRender && (this.trackGenerator = new MediaStreamTrackGenerator({kind: "video"}), t.srcObject = new MediaStream([this.trackGenerator]), this.vwriter = this.trackGenerator.writable.getWriter()), this.$videoElement = t, this.resize();
            const {proxy: o} = this.player.events;
            o(this.$videoElement, "canplay", (() => {
                this.player.debug.log("Video", "canplay")
            })), o(this.$videoElement, "waiting", (() => {
                this.player.emit(T.videoWaiting)
            })), o(this.$videoElement, "timeupdate", (e => {
                const t = parseInt(e.timeStamp, 10);
                this.player.emit(T.timeUpdate, t)
            })), this.player.debug.log("Video", "init")
        }

        destroy() {
            super.destroy(), this.$videoElement && (this.$videoElement.src = "", this.$videoElement.removeAttribute("src"), this.$videoElement = null), this.trackGenerator && (this.trackGenerator = null), this.vwriter && (this.vwriter = null), this.player.debug.log("Video", "destroy")
        }

        play() {
            setTimeout((() => {
                this.$videoElement.play().then((() => {
                    this.player.debug.log("Video", "play")
                })).catch((e => {
                    this.player.debug.warn("Video", "play", e)
                }))
            }), 100)
        }

        pause(e) {
            e ? this.$videoElement && this.$videoElement.pause() : setTimeout((() => {
                this.$videoElement && this.$videoElement.pause()
            }), 100)
        }

        clearView() {
        }

        screenshot(e, t, i, o) {
            e = e || le(), o = o || O.download;
            let r = .92;
            !{
                png: "image/png",
                jpeg: "image/jpeg",
                webp: "image/webp"
            }[t] && O[t] && (o = t, t = "png", i = void 0), "string" == typeof i && (o = i, i = void 0), void 0 !== i && (r = Number(i));
            const s = this.$videoElement;
            let a = document.createElement("canvas");
            a.width = s.videoWidth, a.height = s.videoHeight;
            a.getContext("2d").drawImage(s, 0, 0, a.width, a.height);
            const n = a.toDataURL(O[t] || O.png, r), A = ce(n);
            return o === O.base64 ? n : o === O.blob ? A : void (o === O.download && Te(A, e))
        }

        initCanvasViewSize() {
            this.resize()
        }

        render(e) {
            this.vwriter && this.vwriter.write(e.videoFrame)
        }

        resize() {
            let e = this.player.width, t = this.player.height;
            const i = this.player._opt, o = i.rotate;
            i.hasControl && !i.controlAutoHide && (fe() && this.player.fullscreen ? e -= Q : t -= Q), this.$videoElement.width = e, this.$videoElement.height = t, 270 !== o && 90 !== o || (this.$videoElement.width = t, this.$videoElement.height = e);
            let r = (e - this.$videoElement.width) / 2, s = (t - this.$videoElement.height) / 2, a = "contain";
            i.isResize || (a = "fill"), i.isFullResize && (a = "none"), this.$videoElement.style.objectFit = a, this.$videoElement.style.transform = "rotate(" + o + "deg)", this.$videoElement.style.left = r + "px", this.$videoElement.style.top = s + "px"
        }
    }

    class De {
        constructor(e) {
            return new (De.getLoaderFactory(e._opt))(e)
        }

        static getLoaderFactory(e) {
            return e.useMSE || e.useWCS && !e.useOffscreen && e.wcsUseVideoRender ? xe : Ie
        }
    }

    class je extends we {
        constructor(e) {
            super(), this.bufferList = [], this.player = e, this.scriptNode = null, this.hasInitScriptNode = !1, this.audioContextChannel = null, this.audioContext = new (window.AudioContext || window.webkitAudioContext), this.gainNode = this.audioContext.createGain();
            const t = this.audioContext.createBufferSource();
            t.buffer = this.audioContext.createBuffer(1, 1, 22050), t.connect(this.audioContext.destination), t.noteOn ? t.noteOn(0) : t.start(0), this.audioBufferSourceNode = t, this.mediaStreamAudioDestinationNode = this.audioContext.createMediaStreamDestination(), this.audioEnabled(!0), this.gainNode.gain.value = 0, this.playing = !1, this.audioSyncVideoOption = {diff: null}, this.audioInfo = {
                encType: "",
                channels: "",
                sampleRate: ""
            }, this.init = !1, this.hasAudio = !1, this.on(T.videoSyncAudio, (e => {
                this.audioSyncVideoOption = e
            })), this.player.debug.log("AudioContext", "init")
        }

        resetInit() {
            this.init = !1, this.audioInfo = {encType: "", channels: "", sampleRate: ""}
        }

        destroy() {
            this.closeAudio(), this.resetInit(), this.audioContext.close(), this.audioContext = null, this.gainNode = null, this.hasAudio = !1, this.playing = !1, this.scriptNode && (this.scriptNode.onaudioprocess = de, this.scriptNode = null), this.audioBufferSourceNode = null, this.mediaStreamAudioDestinationNode = null, this.hasInitScriptNode = !1, this.audioSyncVideoOption = {diff: null}, this.off(), this.player.debug.log("AudioContext", "destroy")
        }

        updateAudioInfo(e) {
            e.encTypeCode && (this.audioInfo.encType = U[e.encTypeCode]), e.channels && (this.audioInfo.channels = e.channels), e.sampleRate && (this.audioInfo.sampleRate = e.sampleRate), this.audioInfo.sampleRate && this.audioInfo.channels && this.audioInfo.encType && !this.init && (this.player.emit(T.audioInfo, this.audioInfo), this.init = !0)
        }

        get isPlaying() {
            return this.playing
        }

        get isMute() {
            return 0 === this.gainNode.gain.value || this.isStateSuspended()
        }

        get volume() {
            return this.gainNode.gain.value
        }

        get bufferSize() {
            return this.bufferList.length
        }

        initScriptNode() {
            if (this.playing = !0, this.hasInitScriptNode) return;
            const e = this.audioInfo.channels, t = this.audioContext.createScriptProcessor(1024, 0, e);
            t.onaudioprocess = t => {
                const i = t.outputBuffer;
                if (this.bufferList.length && this.playing) {
                    if (!this.player._opt.useWCS && !this.player._opt.useMSE && this.player._opt.wasmDecodeAudioSyncVideo) {
                        if (this.audioSyncVideoOption.diff > ee) return void this.player.debug.warn("AudioContext", `audioSyncVideoOption more than diff :${this.audioSyncVideoOption.diff}, waiting`);
                        if (this.audioSyncVideoOption.diff < -1e3) {
                            this.player.debug.warn("AudioContext", `audioSyncVideoOption less than diff :${this.audioSyncVideoOption.diff}, dropping`);
                            let e = this.bufferList.shift();
                            for (; e.ts - this.player.videoTimestamp < -1e3 && this.bufferList.length > 0;) e = this.bufferList.shift();
                            if (0 === this.bufferList.length) return
                        }
                    }
                    if (0 === this.bufferList.length) return;
                    const t = this.bufferList.shift();
                    t && t.ts && (this.player.audioTimestamp = t.ts);
                    for (let o = 0; o < e; o++) {
                        const e = t.buffer[o], r = i.getChannelData(o);
                        for (let t = 0; t < 1024; t++) r[t] = e[t] || 0
                    }
                }
            }, t.connect(this.gainNode), this.scriptNode = t, this.gainNode.connect(this.audioContext.destination), this.gainNode.connect(this.mediaStreamAudioDestinationNode), this.hasInitScriptNode = !0
        }

        mute(e) {
            e ? (this.isMute || this.player.emit(T.mute, e), this.setVolume(0), this.audioEnabled(!1), this.clear()) : (this.isMute && this.player.emit(T.mute, e), this.setVolume(.5), this.audioEnabled(!0))
        }

        setVolume(e) {
            e = parseFloat(e).toFixed(2), isNaN(e) || (this.audioEnabled(!0), e = ue(e, 0, 1), this.gainNode.gain.value = e, this.gainNode.gain.setValueAtTime(e, this.audioContext.currentTime), this.player.emit(T.volumechange, this.player.volume))
        }

        closeAudio() {
            this.hasInitScriptNode && (this.scriptNode && this.scriptNode.disconnect(this.gainNode), this.gainNode && this.gainNode.disconnect(this.audioContext.destination), this.gainNode && this.gainNode.disconnect(this.mediaStreamAudioDestinationNode)), this.clear()
        }

        audioEnabled(e) {
            e ? "suspended" === this.audioContext.state && this.audioContext.resume() : "running" === this.audioContext.state && this.audioContext.suspend()
        }

        isStateRunning() {
            return "running" === this.audioContext.state
        }

        isStateSuspended() {
            return "suspended" === this.audioContext.state
        }

        clear() {
            this.bufferList = []
        }

        play(e, t) {
            this.isMute || (this.hasAudio = !0, this.bufferList.push({
                buffer: e,
                ts: t
            }), this.bufferList.length > 20 && (this.player.debug.warn("AudioContext", `bufferList is large: ${this.bufferList.length}`), this.bufferList.length > 50 && this.bufferList.shift()))
        }

        pause() {
            this.audioSyncVideoOption = {diff: null}, this.playing = !1, this.clear()
        }

        resume() {
            this.playing = !0
        }
    }

    class Le {
        constructor(e) {
            return new (Le.getLoaderFactory())(e)
        }

        static getLoaderFactory() {
            return je
        }
    }

    class Fe extends we {
        constructor(e) {
            super(), this.player = e, this.playing = !1, this.abortController = new AbortController, this.streamRate = ge((t => {
                e.emit(T.kBps, (t / 1024).toFixed(2))
            })), e.debug.log("FetchStream", "init")
        }

        destroy() {
            this.abort(), this.off(), this.streamRate = null, this.player.debug.log("FetchStream", "destroy")
        }

        fetchStream(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const {demux: i} = this.player;
            this.player._times.streamStart = le();
            const o = Object.assign({signal: this.abortController.signal}, {headers: t.headers || {}});
            fetch(e, o).then((e => {
                const t = e.body.getReader();
                this.emit(T.streamSuccess);
                const o = () => {
                    t.read().then((e => {
                        let {done: t, value: r} = e;
                        t ? i.close() : (this.streamRate && this.streamRate(r.byteLength), i.dispatch(r), o())
                    })).catch((e => {
                        i.close();
                        const t = e.toString();
                        this.abort(), -1 === t.indexOf(se) && (this.emit(x.fetchError, e), this.player.emit(T.error, x.fetchError))
                    }))
                };
                o()
            })).catch((e => {
                this.abort(), this.emit(x.fetchError, e), this.player.emit(T.error, x.fetchError)
            }))
        }

        abort() {
            this.abortController && (this.abortController.abort(), this.abortController = null)
        }
    }

    class Oe extends we {
        constructor(e) {
            super(), this.player = e, this.socket = null, this.socketStatus = D, this.wsUrl = null, this.streamRate = ge((t => {
                e.emit(T.kBps, (t / 1024).toFixed(2))
            })), e.debug.log("WebsocketLoader", "init")
        }

        destroy() {
            this.socket && (this.socket.close(), this.socket = null), this.socketStatus = D, this.streamRate = null, this.wsUrl = null, this.off(), this.player.debug.log("websocketLoader", "destroy")
        }

        _createWebSocket() {
            const e = this.player, {debug: t, events: {proxy: i}, demux: o} = e;
            this.socket = new WebSocket(this.wsUrl), this.socket.binaryType = "arraybuffer", i(this.socket, "open", (() => {
                this.emit(T.streamSuccess), t.log("websocketLoader", "socket open"), this.socketStatus = j
            })), i(this.socket, "message", (e => {
                this.streamRate && this.streamRate(e.data.byteLength), this._handleMessage(e.data)
            })), i(this.socket, "close", (() => {
                t.log("websocketLoader", "socket close"), this.emit(T.streamEnd), this.socketStatus = L
            })), i(this.socket, "error", (e => {
                t.log("websocketLoader", "socket error"), this.emit(x.websocketError, e), this.player.emit(T.error, x.websocketError), this.socketStatus = F, o.close(), t.log("websocketLoader", "socket error:", e)
            }))
        }

        _handleMessage(e) {
            const {demux: t} = this.player;
            t ? t.dispatch(e) : this.player.debug.warn("websocketLoader", "websocket handle message demux is null")
        }

        fetchStream(e, t) {
            this.player._times.streamStart = le(), this.wsUrl = e, this._createWebSocket()
        }
    }

    class Ve {
        constructor(e) {
            return new (Ve.getLoaderFactory(e._opt.protocol))(e)
        }

        static getLoaderFactory(e) {
            return e === a ? Fe : e === s ? Oe : void 0
        }
    }

    var Me = t((function (t) {
        function i(e, t) {
            if (!e) throw"First parameter is required.";
            t = new o(e, t = t || {type: "video"});
            var s = this;

            function a(i) {
                i && (t.initCallback = function () {
                    i(), i = t.initCallback = null
                });
                var o = new r(e, t);
                (h = new o(e, t)).record(), u("recording"), t.disableLogs || console.log("Initialized recorderType:", h.constructor.name, "for output-type:", t.type)
            }

            function n(e) {
                if (e = e || function () {
                }, h) {
                    if ("paused" === s.state) return s.resumeRecording(), void setTimeout((function () {
                        n(e)
                    }), 1);
                    "recording" === s.state || t.disableLogs || console.warn('Recording state should be: "recording", however current state is: ', s.state), t.disableLogs || console.log("Stopped recording " + t.type + " stream."), "gif" !== t.type ? h.stop(i) : (h.stop(), i()), u("stopped")
                } else m();

                function i(i) {
                    if (h) {
                        Object.keys(h).forEach((function (e) {
                            "function" != typeof h[e] && (s[e] = h[e])
                        }));
                        var o = h.blob;
                        if (!o) {
                            if (!i) throw"Recording failed.";
                            h.blob = o = i
                        }
                        if (o && !t.disableLogs && console.log(o.type, "->", b(o.size)), e) {
                            var r;
                            try {
                                r = l.createObjectURL(o)
                            } catch (e) {
                            }
                            "function" == typeof e.call ? e.call(s, r) : e(r)
                        }
                        t.autoWriteToDisk && d((function (e) {
                            var i = {};
                            i[t.type + "Blob"] = e, x.Store(i)
                        }))
                    } else "function" == typeof e.call ? e.call(s, "") : e("")
                }
            }

            function A(e) {
                postMessage((new FileReaderSync).readAsDataURL(e))
            }

            function d(e, i) {
                if (!e) throw"Pass a callback function over getDataURL.";
                var o = i ? i.blob : (h || {}).blob;
                if (!o) return t.disableLogs || console.warn("Blob encoder did not finish its job yet."), void setTimeout((function () {
                    d(e, i)
                }), 1e3);
                if ("undefined" == typeof Worker || navigator.mozGetUserMedia) {
                    var r = new FileReader;
                    r.readAsDataURL(o), r.onload = function (t) {
                        e(t.target.result)
                    }
                } else {
                    var s = function (e) {
                        try {
                            var t = l.createObjectURL(new Blob([e.toString(), "this.onmessage =  function (eee) {" + e.name + "(eee.data);}"], {type: "application/javascript"})),
                                i = new Worker(t);
                            return l.revokeObjectURL(t), i
                        } catch (e) {
                        }
                    }(A);
                    s.onmessage = function (t) {
                        e(t.data)
                    }, s.postMessage(o)
                }
            }

            function c(e) {
                e = e || 0, "paused" !== s.state ? "stopped" !== s.state && (e >= s.recordingDuration ? n(s.onRecordingStopped) : (e += 1e3, setTimeout((function () {
                    c(e)
                }), 1e3))) : setTimeout((function () {
                    c(e)
                }), 1e3)
            }

            function u(e) {
                s && (s.state = e, "function" == typeof s.onStateChanged.call ? s.onStateChanged.call(s, e) : s.onStateChanged(e))
            }

            var h,
                p = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + t.type + " recorder.";

            function m() {
                !0 !== t.disableLogs && console.warn(p)
            }

            var g = {
                startRecording: function (i) {
                    return t.disableLogs || console.log("RecordRTC version: ", s.version), i && (t = new o(e, i)), t.disableLogs || console.log("started recording " + t.type + " stream."), h ? (h.clearRecordedData(), h.record(), u("recording"), s.recordingDuration && c(), s) : (a((function () {
                        s.recordingDuration && c()
                    })), s)
                }, stopRecording: n, pauseRecording: function () {
                    h ? "recording" === s.state ? (u("paused"), h.pause(), t.disableLogs || console.log("Paused recording.")) : t.disableLogs || console.warn("Unable to pause the recording. Recording state: ", s.state) : m()
                }, resumeRecording: function () {
                    h ? "paused" === s.state ? (u("recording"), h.resume(), t.disableLogs || console.log("Resumed recording.")) : t.disableLogs || console.warn("Unable to resume the recording. Recording state: ", s.state) : m()
                }, initRecorder: a, setRecordingDuration: function (e, t) {
                    if (void 0 === e) throw"recordingDuration is required.";
                    if ("number" != typeof e) throw"recordingDuration must be a number.";
                    return s.recordingDuration = e, s.onRecordingStopped = t || function () {
                    }, {
                        onRecordingStopped: function (e) {
                            s.onRecordingStopped = e
                        }
                    }
                }, clearRecordedData: function () {
                    h ? (h.clearRecordedData(), t.disableLogs || console.log("Cleared old recorded data.")) : m()
                }, getBlob: function () {
                    if (h) return h.blob;
                    m()
                }, getDataURL: d, toURL: function () {
                    if (h) return l.createObjectURL(h.blob);
                    m()
                }, getInternalRecorder: function () {
                    return h
                }, save: function (e) {
                    h ? y(h.blob, e) : m()
                }, getFromDisk: function (e) {
                    h ? i.getFromDisk(t.type, e) : m()
                }, setAdvertisementArray: function (e) {
                    t.advertisement = [];
                    for (var i = e.length, o = 0; o < i; o++) t.advertisement.push({duration: o, image: e[o]})
                }, blob: null, bufferSize: 0, sampleRate: 0, buffer: null, reset: function () {
                    "recording" !== s.state || t.disableLogs || console.warn("Stop an active recorder."), h && "function" == typeof h.clearRecordedData && h.clearRecordedData(), h = null, u("inactive"), s.blob = null
                }, onStateChanged: function (e) {
                    t.disableLogs || console.log("Recorder state changed:", e)
                }, state: "inactive", getState: function () {
                    return s.state
                }, destroy: function () {
                    var e = t.disableLogs;
                    t = {disableLogs: !0}, s.reset(), u("destroyed"), g = s = null, E.AudioContextConstructor && (E.AudioContextConstructor.close(), E.AudioContextConstructor = null), t.disableLogs = e, t.disableLogs || console.log("RecordRTC is destroyed.")
                }, version: "5.6.2"
            };
            if (!this) return s = g, g;
            for (var f in g) this[f] = g[f];
            return s = this, g
        }

        function o(e, t) {
            return t.recorderType || t.type || (t.audio && t.video ? t.type = "video" : t.audio && !t.video && (t.type = "audio")), t.recorderType && !t.type && (t.recorderType === T || t.recorderType === k || t.recorderType === F ? t.type = "video" : t.recorderType === D ? t.type = "gif" : t.recorderType === R ? t.type = "audio" : t.recorderType === C && (w(e, "audio").length && w(e, "video").length || !w(e, "audio").length && w(e, "video").length ? t.type = "video" : w(e, "audio").length && !w(e, "video").length && (t.type = "audio"))), "undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && (t.mimeType || (t.mimeType = "video/webm"), t.type || (t.type = t.mimeType.split("/")[0]), t.bitsPerSecond), t.type || (t.mimeType && (t.type = t.mimeType.split("/")[0]), t.type || (t.type = "audio")), t
        }

        function r(e, t) {
            var i;
            return (m || u || h) && (i = R), "undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && !m && (i = C), "video" === t.type && (m || h) && (i = T, "undefined" != typeof ReadableStream && (i = F)), "gif" === t.type && (i = D), "canvas" === t.type && (i = k), B() && i !== k && i !== D && "undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && (w(e, "video").length || w(e, "audio").length) && ("audio" === t.type ? "function" == typeof MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported("audio/webm") && (i = C) : "function" == typeof MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported("video/webm") && (i = C)), e instanceof Array && e.length && (i = L), t.recorderType && (i = t.recorderType), !t.disableLogs && i && i.name && console.log("Using recorderType:", i.name || i.constructor.name), !i && g && (i = C), i
        }

        function s(e) {
            this.addStream = function (t) {
                t && (e = t)
            }, this.mediaType = {audio: !0, video: !0}, this.startRecording = function () {
                var t, o = this.mediaType, r = this.mimeType || {audio: null, video: null, gif: null};
                if ("function" != typeof o.audio && B() && !w(e, "audio").length && (o.audio = !1), "function" != typeof o.video && B() && !w(e, "video").length && (o.video = !1), "function" != typeof o.gif && B() && !w(e, "video").length && (o.gif = !1), !o.audio && !o.video && !o.gif) throw"MediaStream must have either audio or video tracks.";
                if (o.audio && (t = null, "function" == typeof o.audio && (t = o.audio), this.audioRecorder = new i(e, {
                    type: "audio",
                    bufferSize: this.bufferSize,
                    sampleRate: this.sampleRate,
                    numberOfAudioChannels: this.numberOfAudioChannels || 2,
                    disableLogs: this.disableLogs,
                    recorderType: t,
                    mimeType: r.audio,
                    timeSlice: this.timeSlice,
                    onTimeStamp: this.onTimeStamp
                }), o.video || this.audioRecorder.startRecording()), o.video) {
                    t = null, "function" == typeof o.video && (t = o.video);
                    var s = e;
                    if (B() && o.audio && "function" == typeof o.audio) {
                        var a = w(e, "video")[0];
                        p ? ((s = new f).addTrack(a), t && t === T && (t = C)) : (s = new f).addTrack(a)
                    }
                    this.videoRecorder = new i(s, {
                        type: "video",
                        video: this.video,
                        canvas: this.canvas,
                        frameInterval: this.frameInterval || 10,
                        disableLogs: this.disableLogs,
                        recorderType: t,
                        mimeType: r.video,
                        timeSlice: this.timeSlice,
                        onTimeStamp: this.onTimeStamp,
                        workerPath: this.workerPath,
                        webAssemblyPath: this.webAssemblyPath,
                        frameRate: this.frameRate,
                        bitrate: this.bitrate
                    }), o.audio || this.videoRecorder.startRecording()
                }
                if (o.audio && o.video) {
                    var n = this, A = !0 === B();
                    (o.audio instanceof R && o.video || !0 !== o.audio && !0 !== o.video && o.audio !== o.video) && (A = !1), !0 === A ? (n.audioRecorder = null, n.videoRecorder.startRecording()) : n.videoRecorder.initRecorder((function () {
                        n.audioRecorder.initRecorder((function () {
                            n.videoRecorder.startRecording(), n.audioRecorder.startRecording()
                        }))
                    }))
                }
                o.gif && (t = null, "function" == typeof o.gif && (t = o.gif), this.gifRecorder = new i(e, {
                    type: "gif",
                    frameRate: this.frameRate || 200,
                    quality: this.quality || 10,
                    disableLogs: this.disableLogs,
                    recorderType: t,
                    mimeType: r.gif
                }), this.gifRecorder.startRecording())
            }, this.stopRecording = function (e) {
                e = e || function () {
                }, this.audioRecorder && this.audioRecorder.stopRecording((function (t) {
                    e(t, "audio")
                })), this.videoRecorder && this.videoRecorder.stopRecording((function (t) {
                    e(t, "video")
                })), this.gifRecorder && this.gifRecorder.stopRecording((function (t) {
                    e(t, "gif")
                }))
            }, this.pauseRecording = function () {
                this.audioRecorder && this.audioRecorder.pauseRecording(), this.videoRecorder && this.videoRecorder.pauseRecording(), this.gifRecorder && this.gifRecorder.pauseRecording()
            }, this.resumeRecording = function () {
                this.audioRecorder && this.audioRecorder.resumeRecording(), this.videoRecorder && this.videoRecorder.resumeRecording(), this.gifRecorder && this.gifRecorder.resumeRecording()
            }, this.getBlob = function (e) {
                var t = {};
                return this.audioRecorder && (t.audio = this.audioRecorder.getBlob()), this.videoRecorder && (t.video = this.videoRecorder.getBlob()), this.gifRecorder && (t.gif = this.gifRecorder.getBlob()), e && e(t), t
            }, this.destroy = function () {
                this.audioRecorder && (this.audioRecorder.destroy(), this.audioRecorder = null), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.gifRecorder && (this.gifRecorder.destroy(), this.gifRecorder = null)
            }, this.getDataURL = function (e) {
                function t(e, t) {
                    if ("undefined" != typeof Worker) {
                        var i = function (e) {
                            var t,
                                i = l.createObjectURL(new Blob([e.toString(), "this.onmessage =  function (eee) {" + e.name + "(eee.data);}"], {type: "application/javascript"})),
                                o = new Worker(i);
                            if (void 0 !== l) t = l; else {
                                if ("undefined" == typeof webkitURL) throw"Neither URL nor webkitURL detected.";
                                t = webkitURL
                            }
                            return t.revokeObjectURL(i), o
                        }((function (e) {
                            postMessage((new FileReaderSync).readAsDataURL(e))
                        }));
                        i.onmessage = function (e) {
                            t(e.data)
                        }, i.postMessage(e)
                    } else {
                        var o = new FileReader;
                        o.readAsDataURL(e), o.onload = function (e) {
                            t(e.target.result)
                        }
                    }
                }

                this.getBlob((function (i) {
                    i.audio && i.video ? t(i.audio, (function (o) {
                        t(i.video, (function (t) {
                            e({audio: o, video: t})
                        }))
                    })) : i.audio ? t(i.audio, (function (t) {
                        e({audio: t})
                    })) : i.video && t(i.video, (function (t) {
                        e({video: t})
                    }))
                }))
            }, this.writeToDisk = function () {
                i.writeToDisk({audio: this.audioRecorder, video: this.videoRecorder, gif: this.gifRecorder})
            }, this.save = function (e) {
                (e = e || {
                    audio: !0,
                    video: !0,
                    gif: !0
                }).audio && this.audioRecorder && this.audioRecorder.save("string" == typeof e.audio ? e.audio : ""), e.video && this.videoRecorder && this.videoRecorder.save("string" == typeof e.video ? e.video : ""), e.gif && this.gifRecorder && this.gifRecorder.save("string" == typeof e.gif ? e.gif : "")
            }
        }

        i.version = "5.6.2", t.exports = i, i.getFromDisk = function (e, t) {
            if (!t) throw"callback is mandatory.";
            console.log("Getting recorded " + ("all" === e ? "blobs" : e + " blob ") + " from disk!"), x.Fetch((function (i, o) {
                "all" !== e && o === e + "Blob" && t && t(i), "all" === e && t && t(i, o.replace("Blob", ""))
            }))
        }, i.writeToDisk = function (e) {
            console.log("Writing recorded blob(s) to disk!"), (e = e || {}).audio && e.video && e.gif ? e.audio.getDataURL((function (t) {
                e.video.getDataURL((function (i) {
                    e.gif.getDataURL((function (e) {
                        x.Store({audioBlob: t, videoBlob: i, gifBlob: e})
                    }))
                }))
            })) : e.audio && e.video ? e.audio.getDataURL((function (t) {
                e.video.getDataURL((function (e) {
                    x.Store({audioBlob: t, videoBlob: e})
                }))
            })) : e.audio && e.gif ? e.audio.getDataURL((function (t) {
                e.gif.getDataURL((function (e) {
                    x.Store({audioBlob: t, gifBlob: e})
                }))
            })) : e.video && e.gif ? e.video.getDataURL((function (t) {
                e.gif.getDataURL((function (e) {
                    x.Store({videoBlob: t, gifBlob: e})
                }))
            })) : e.audio ? e.audio.getDataURL((function (e) {
                x.Store({audioBlob: e})
            })) : e.video ? e.video.getDataURL((function (e) {
                x.Store({videoBlob: e})
            })) : e.gif && e.gif.getDataURL((function (e) {
                x.Store({gifBlob: e})
            }))
        }, s.getFromDisk = i.getFromDisk, s.writeToDisk = i.writeToDisk, i.MRecordRTC = s;
        var a;
        (a = void 0 !== e ? e : null) && "undefined" == typeof window && void 0 !== e && (e.navigator = {
            userAgent: "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
            getUserMedia: function () {
            }
        }, e.console || (e.console = {}), void 0 !== e.console.log && void 0 !== e.console.error || (e.console.error = e.console.log = e.console.log || function () {
            console.log(arguments)
        }), "undefined" == typeof document && (a.document = {
            documentElement: {
                appendChild: function () {
                    return ""
                }
            }
        }, document.createElement = document.captureStream = document.mozCaptureStream = function () {
            var e = {
                getContext: function () {
                    return e
                }, play: function () {
                }, pause: function () {
                }, drawImage: function () {
                }, toDataURL: function () {
                    return ""
                }, style: {}
            };
            return e
        }, a.HTMLVideoElement = function () {
        }), "undefined" == typeof location && (a.location = {
            protocol: "file:",
            href: "",
            hash: ""
        }), "undefined" == typeof screen && (a.screen = {
            width: 0,
            height: 0
        }), void 0 === l && (a.URL = {
            createObjectURL: function () {
                return ""
            }, revokeObjectURL: function () {
                return ""
            }
        }), a.window = e);
        var n = window.requestAnimationFrame;
        if (void 0 === n) if ("undefined" != typeof webkitRequestAnimationFrame) n = webkitRequestAnimationFrame; else if ("undefined" != typeof mozRequestAnimationFrame) n = mozRequestAnimationFrame; else if ("undefined" != typeof msRequestAnimationFrame) n = msRequestAnimationFrame; else if (void 0 === n) {
            var A = 0;
            n = function (e, t) {
                var i = (new Date).getTime(), o = Math.max(0, 16 - (i - A)), r = setTimeout((function () {
                    e(i + o)
                }), o);
                return A = i + o, r
            }
        }
        var d = window.cancelAnimationFrame;
        void 0 === d && ("undefined" != typeof webkitCancelAnimationFrame ? d = webkitCancelAnimationFrame : "undefined" != typeof mozCancelAnimationFrame ? d = mozCancelAnimationFrame : "undefined" != typeof msCancelAnimationFrame ? d = msCancelAnimationFrame : void 0 === d && (d = function (e) {
            clearTimeout(e)
        }));
        var c = window.AudioContext;
        void 0 === c && ("undefined" != typeof webkitAudioContext && (c = webkitAudioContext), "undefined" != typeof mozAudioContext && (c = mozAudioContext));
        var l = window.URL;
        void 0 === l && "undefined" != typeof webkitURL && (l = webkitURL), "undefined" != typeof navigator && void 0 === navigator.getUserMedia && (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia));
        var u = !(-1 === navigator.userAgent.indexOf("Edge") || !navigator.msSaveBlob && !navigator.msSaveOrOpenBlob),
            h = !!window.opera || -1 !== navigator.userAgent.indexOf("OPR/"),
            p = navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && "netscape" in window && / rv:/.test(navigator.userAgent),
            m = !h && !u && !!navigator.webkitGetUserMedia || v() || -1 !== navigator.userAgent.toLowerCase().indexOf("chrome/"),
            g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        g && !m && -1 !== navigator.userAgent.indexOf("CriOS") && (g = !1, m = !0);
        var f = window.MediaStream;

        function b(e) {
            if (0 === e) return "0 Bytes";
            var t = parseInt(Math.floor(Math.log(e) / Math.log(1e3)), 10);
            return (e / Math.pow(1e3, t)).toPrecision(3) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
        }

        function y(e, t) {
            if (!e) throw"Blob object is required.";
            if (!e.type) try {
                e.type = "video/webm"
            } catch (e) {
            }
            var i = (e.type || "video/webm").split("/")[1];
            if (-1 !== i.indexOf(";") && (i = i.split(";")[0]), t && -1 !== t.indexOf(".")) {
                var o = t.split(".");
                t = o[0], i = o[1]
            }
            var r = (t || Math.round(9999999999 * Math.random()) + 888888888) + "." + i;
            if (void 0 !== navigator.msSaveOrOpenBlob) return navigator.msSaveOrOpenBlob(e, r);
            if (void 0 !== navigator.msSaveBlob) return navigator.msSaveBlob(e, r);
            var s = document.createElement("a");
            s.href = l.createObjectURL(e), s.download = r, s.style = "display:none;opacity:0;color:transparent;", (document.body || document.documentElement).appendChild(s), "function" == typeof s.click ? s.click() : (s.target = "_blank", s.dispatchEvent(new MouseEvent("click", {
                view: window,
                bubbles: !0,
                cancelable: !0
            }))), l.revokeObjectURL(s.href)
        }

        function v() {
            return "undefined" != typeof window && "object" == typeof window.process && "renderer" === window.process.type || (!("undefined" == typeof process || "object" != typeof process.versions || !process.versions.electron) || "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
        }

        function w(e, t) {
            return e && e.getTracks ? e.getTracks().filter((function (e) {
                return e.kind === (t || "audio")
            })) : []
        }

        function S(e, t) {
            "srcObject" in t ? t.srcObject = e : "mozSrcObject" in t ? t.mozSrcObject = e : t.srcObject = e
        }

        void 0 === f && "undefined" != typeof webkitMediaStream && (f = webkitMediaStream), void 0 !== f && void 0 === f.prototype.stop && (f.prototype.stop = function () {
            this.getTracks().forEach((function (e) {
                e.stop()
            }))
        }), i.invokeSaveAsDialog = y, i.getTracks = w, i.getSeekableBlob = function (e, t) {
            if ("undefined" == typeof EBML) throw new Error("Please link: https://www.webrtc-experiment.com/EBML.js");
            var i = new EBML.Reader, o = new EBML.Decoder, r = EBML.tools, s = new FileReader;
            s.onload = function (e) {
                o.decode(this.result).forEach((function (e) {
                    i.read(e)
                })), i.stop();
                var s = r.makeMetadataSeekable(i.metadatas, i.duration, i.cues), a = this.result.slice(i.metadataSize),
                    n = new Blob([s, a], {type: "video/webm"});
                t(n)
            }, s.readAsArrayBuffer(e)
        }, i.bytesToSize = b, i.isElectron = v;
        var E = {};

        function B() {
            if (p || g || u) return !0;
            var e, t, i = navigator.userAgent, o = "" + parseFloat(navigator.appVersion),
                r = parseInt(navigator.appVersion, 10);
            return (m || h) && (e = i.indexOf("Chrome"), o = i.substring(e + 7)), -1 !== (t = o.indexOf(";")) && (o = o.substring(0, t)), -1 !== (t = o.indexOf(" ")) && (o = o.substring(0, t)), r = parseInt("" + o, 10), isNaN(r) && (o = "" + parseFloat(navigator.appVersion), r = parseInt(navigator.appVersion, 10)), r >= 49
        }

        function C(e, t) {
            var i = this;
            if (void 0 === e) throw'First argument "MediaStream" is required.';
            if ("undefined" == typeof MediaRecorder) throw"Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";
            if ("audio" === (t = t || {mimeType: "video/webm"}).type) {
                var o;
                if (w(e, "video").length && w(e, "audio").length) navigator.mozGetUserMedia ? (o = new f).addTrack(w(e, "audio")[0]) : o = new f(w(e, "audio")), e = o;
                t.mimeType && -1 !== t.mimeType.toString().toLowerCase().indexOf("audio") || (t.mimeType = m ? "audio/webm" : "audio/ogg"), t.mimeType && "audio/ogg" !== t.mimeType.toString().toLowerCase() && navigator.mozGetUserMedia && (t.mimeType = "audio/ogg")
            }
            var r, s = [];

            function a() {
                i.timestamps.push((new Date).getTime()), "function" == typeof t.onTimeStamp && t.onTimeStamp(i.timestamps[i.timestamps.length - 1], i.timestamps)
            }

            function n(e) {
                return r && r.mimeType ? r.mimeType : e.mimeType || "video/webm"
            }

            function A() {
                s = [], r = null, i.timestamps = []
            }

            this.getArrayOfBlobs = function () {
                return s
            }, this.record = function () {
                i.blob = null, i.clearRecordedData(), i.timestamps = [], d = [], s = [];
                var o = t;
                t.disableLogs || console.log("Passing following config over MediaRecorder API.", o), r && (r = null), m && !B() && (o = "video/vp8"), "function" == typeof MediaRecorder.isTypeSupported && o.mimeType && (MediaRecorder.isTypeSupported(o.mimeType) || (t.disableLogs || console.warn("MediaRecorder API seems unable to record mimeType:", o.mimeType), o.mimeType = "audio" === t.type ? "audio/webm" : "video/webm"));
                try {
                    r = new MediaRecorder(e, o), t.mimeType = o.mimeType
                } catch (t) {
                    r = new MediaRecorder(e)
                }
                o.mimeType && !MediaRecorder.isTypeSupported && "canRecordMimeType" in r && !1 === r.canRecordMimeType(o.mimeType) && (t.disableLogs || console.warn("MediaRecorder API seems unable to record mimeType:", o.mimeType)), r.ondataavailable = function (e) {
                    if (e.data && d.push("ondataavailable: " + b(e.data.size)), "number" != typeof t.timeSlice) !e.data || !e.data.size || e.data.size < 100 || i.blob ? i.recordingCallback && (i.recordingCallback(new Blob([], {type: n(o)})), i.recordingCallback = null) : (i.blob = t.getNativeBlob ? e.data : new Blob([e.data], {type: n(o)}), i.recordingCallback && (i.recordingCallback(i.blob), i.recordingCallback = null)); else if (e.data && e.data.size && (s.push(e.data), a(), "function" == typeof t.ondataavailable)) {
                        var r = t.getNativeBlob ? e.data : new Blob([e.data], {type: n(o)});
                        t.ondataavailable(r)
                    }
                }, r.onstart = function () {
                    d.push("started")
                }, r.onpause = function () {
                    d.push("paused")
                }, r.onresume = function () {
                    d.push("resumed")
                }, r.onstop = function () {
                    d.push("stopped")
                }, r.onerror = function (e) {
                    e && (e.name || (e.name = "UnknownError"), d.push("error: " + e), t.disableLogs || (-1 !== e.name.toString().toLowerCase().indexOf("invalidstate") ? console.error("The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.", e) : -1 !== e.name.toString().toLowerCase().indexOf("notsupported") ? console.error("MIME type (", o.mimeType, ") is not supported.", e) : -1 !== e.name.toString().toLowerCase().indexOf("security") ? console.error("MediaRecorder security error", e) : "OutOfMemory" === e.name ? console.error("The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "IllegalStreamModification" === e.name ? console.error("A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "OtherRecordingError" === e.name ? console.error("Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "GenericError" === e.name ? console.error("The UA cannot provide the codec or recording option that has been requested.", e) : console.error("MediaRecorder Error", e)), function (e) {
                        if (!i.manuallyStopped && r && "inactive" === r.state) return delete t.timeslice, void r.start(6e5);
                        setTimeout(void 0, 1e3)
                    }(), "inactive" !== r.state && "stopped" !== r.state && r.stop())
                }, "number" == typeof t.timeSlice ? (a(), r.start(t.timeSlice)) : r.start(36e5), t.initCallback && t.initCallback()
            }, this.timestamps = [], this.stop = function (e) {
                e = e || function () {
                }, i.manuallyStopped = !0, r && (this.recordingCallback = e, "recording" === r.state && r.stop(), "number" == typeof t.timeSlice && setTimeout((function () {
                    i.blob = new Blob(s, {type: n(t)}), i.recordingCallback(i.blob)
                }), 100))
            }, this.pause = function () {
                r && "recording" === r.state && r.pause()
            }, this.resume = function () {
                r && "paused" === r.state && r.resume()
            }, this.clearRecordedData = function () {
                r && "recording" === r.state && i.stop(A), A()
            }, this.getInternalRecorder = function () {
                return r
            }, this.blob = null, this.getState = function () {
                return r && r.state || "inactive"
            };
            var d = [];
            this.getAllStates = function () {
                return d
            }, void 0 === t.checkForInactiveTracks && (t.checkForInactiveTracks = !1);
            i = this;
            !function o() {
                if (r && !1 !== t.checkForInactiveTracks) return !1 === function () {
                    if ("active" in e) {
                        if (!e.active) return !1
                    } else if ("ended" in e && e.ended) return !1;
                    return !0
                }() ? (t.disableLogs || console.log("MediaStream seems stopped."), void i.stop()) : void setTimeout(o, 1e3)
            }(), this.name = "MediaStreamRecorder", this.toString = function () {
                return this.name
            }
        }

        function R(e, t) {
            if (!w(e, "audio").length) throw"Your stream has no audio tracks.";
            var o, r = this, s = [], a = [], n = !1, A = 0, d = 2, c = (t = t || {}).desiredSampRate;

            function u() {
                if (!1 === t.checkForInactiveTracks) return !0;
                if ("active" in e) {
                    if (!e.active) return !1
                } else if ("ended" in e && e.ended) return !1;
                return !0
            }

            function h(e, t) {
                function i(e, t) {
                    var i, o = e.numberOfAudioChannels, r = e.leftBuffers.slice(0), s = e.rightBuffers.slice(0),
                        a = e.sampleRate, n = e.internalInterleavedLength, A = e.desiredSampRate;

                    function d(e, t, i) {
                        var o = Math.round(e.length * (t / i)), r = [], s = Number((e.length - 1) / (o - 1));
                        r[0] = e[0];
                        for (var a = 1; a < o - 1; a++) {
                            var n = a * s, A = Number(Math.floor(n)).toFixed(), d = Number(Math.ceil(n)).toFixed(),
                                l = n - A;
                            r[a] = c(e[A], e[d], l)
                        }
                        return r[o - 1] = e[e.length - 1], r
                    }

                    function c(e, t, i) {
                        return e + (t - e) * i
                    }

                    function l(e, t) {
                        for (var i = new Float64Array(t), o = 0, r = e.length, s = 0; s < r; s++) {
                            var a = e[s];
                            i.set(a, o), o += a.length
                        }
                        return i
                    }

                    function u(e, t, i) {
                        for (var o = i.length, r = 0; r < o; r++) e.setUint8(t + r, i.charCodeAt(r))
                    }

                    2 === o && (r = l(r, n), s = l(s, n), A && (r = d(r, A, a), s = d(s, A, a))), 1 === o && (r = l(r, n), A && (r = d(r, A, a))), A && (a = A), 2 === o && (i = function (e, t) {
                        for (var i = e.length + t.length, o = new Float64Array(i), r = 0, s = 0; s < i;) o[s++] = e[r], o[s++] = t[r], r++;
                        return o
                    }(r, s)), 1 === o && (i = r);
                    var h = i.length, p = new ArrayBuffer(44 + 2 * h), m = new DataView(p);
                    u(m, 0, "RIFF"), m.setUint32(4, 36 + 2 * h, !0), u(m, 8, "WAVE"), u(m, 12, "fmt "), m.setUint32(16, 16, !0), m.setUint16(20, 1, !0), m.setUint16(22, o, !0), m.setUint32(24, a, !0), m.setUint32(28, a * o * 2, !0), m.setUint16(32, 2 * o, !0), m.setUint16(34, 16, !0), u(m, 36, "data"), m.setUint32(40, 2 * h, !0);
                    for (var g = h, f = 44, b = 0; b < g; b++) m.setInt16(f, 32767 * i[b], !0), f += 2;
                    if (t) return t({buffer: p, view: m});
                    postMessage({buffer: p, view: m})
                }

                if (e.noWorker) i(e, (function (e) {
                    t(e.buffer, e.view)
                })); else {
                    var o, r, s,
                        a = (o = i, r = l.createObjectURL(new Blob([o.toString(), ";this.onmessage =  function (eee) {" + o.name + "(eee.data);}"], {type: "application/javascript"})), (s = new Worker(r)).workerURL = r, s);
                    a.onmessage = function (e) {
                        t(e.data.buffer, e.data.view), l.revokeObjectURL(a.workerURL), a.terminate()
                    }, a.postMessage(e)
                }
            }

            !0 === t.leftChannel && (d = 1), 1 === t.numberOfAudioChannels && (d = 1), (!d || d < 1) && (d = 2), t.disableLogs || console.log("StereoAudioRecorder is set to record number of channels: " + d), void 0 === t.checkForInactiveTracks && (t.checkForInactiveTracks = !0), this.record = function () {
                if (!1 === u()) throw"Please make sure MediaStream is active.";
                v(), E = y = !1, n = !0, void 0 !== t.timeSlice && C()
            }, this.stop = function (e) {
                e = e || function () {
                }, n = !1, h({
                    desiredSampRate: c,
                    sampleRate: b,
                    numberOfAudioChannels: d,
                    internalInterleavedLength: A,
                    leftBuffers: s,
                    rightBuffers: 1 === d ? [] : a,
                    noWorker: t.noWorker
                }, (function (t, i) {
                    r.blob = new Blob([i], {type: "audio/wav"}), r.buffer = new ArrayBuffer(i.buffer.byteLength), r.view = i, r.sampleRate = c || b, r.bufferSize = f, r.length = A, E = !1, e && e(r.blob)
                }))
            }, void 0 === i.Storage && (i.Storage = {
                AudioContextConstructor: null,
                AudioContext: window.AudioContext || window.webkitAudioContext
            }), i.Storage.AudioContextConstructor && "closed" !== i.Storage.AudioContextConstructor.state || (i.Storage.AudioContextConstructor = new i.Storage.AudioContext);
            var p = i.Storage.AudioContextConstructor, m = p.createMediaStreamSource(e),
                g = [0, 256, 512, 1024, 2048, 4096, 8192, 16384], f = void 0 === t.bufferSize ? 4096 : t.bufferSize;
            if (-1 === g.indexOf(f) && (t.disableLogs || console.log("Legal values for buffer-size are " + JSON.stringify(g, null, "\t"))), p.createJavaScriptNode) o = p.createJavaScriptNode(f, d, d); else {
                if (!p.createScriptProcessor) throw"WebAudio API has no support on this browser.";
                o = p.createScriptProcessor(f, d, d)
            }
            m.connect(o), t.bufferSize || (f = o.bufferSize);
            var b = void 0 !== t.sampleRate ? t.sampleRate : p.sampleRate || 44100;
            (b < 22050 || b > 96e3) && (t.disableLogs || console.log("sample-rate must be under range 22050 and 96000.")), t.disableLogs || t.desiredSampRate && console.log("Desired sample-rate: " + t.desiredSampRate);
            var y = !1;

            function v() {
                s = [], a = [], A = 0, E = !1, n = !1, y = !1, p = null, r.leftchannel = s, r.rightchannel = a, r.numberOfAudioChannels = d, r.desiredSampRate = c, r.sampleRate = b, r.recordingLength = A, B = {
                    left: [],
                    right: [],
                    recordingLength: 0
                }
            }

            function S() {
                o && (o.onaudioprocess = null, o.disconnect(), o = null), m && (m.disconnect(), m = null), v()
            }

            this.pause = function () {
                y = !0
            }, this.resume = function () {
                if (!1 === u()) throw"Please make sure MediaStream is active.";
                if (!n) return t.disableLogs || console.log("Seems recording has been restarted."), void this.record();
                y = !1
            }, this.clearRecordedData = function () {
                t.checkForInactiveTracks = !1, n && this.stop(S), S()
            }, this.name = "StereoAudioRecorder", this.toString = function () {
                return this.name
            };
            var E = !1;
            o.onaudioprocess = function (e) {
                if (!y) if (!1 === u() && (t.disableLogs || console.log("MediaStream seems stopped."), o.disconnect(), n = !1), n) {
                    E || (E = !0, t.onAudioProcessStarted && t.onAudioProcessStarted(), t.initCallback && t.initCallback());
                    var i = e.inputBuffer.getChannelData(0), c = new Float32Array(i);
                    if (s.push(c), 2 === d) {
                        var l = e.inputBuffer.getChannelData(1), h = new Float32Array(l);
                        a.push(h)
                    }
                    A += f, r.recordingLength = A, void 0 !== t.timeSlice && (B.recordingLength += f, B.left.push(c), 2 === d && B.right.push(h))
                } else m && (m.disconnect(), m = null)
            }, p.createMediaStreamDestination ? o.connect(p.createMediaStreamDestination()) : o.connect(p.destination), this.leftchannel = s, this.rightchannel = a, this.numberOfAudioChannels = d, this.desiredSampRate = c, this.sampleRate = b, r.recordingLength = A;
            var B = {left: [], right: [], recordingLength: 0};

            function C() {
                n && "function" == typeof t.ondataavailable && void 0 !== t.timeSlice && (B.left.length ? (h({
                    desiredSampRate: c,
                    sampleRate: b,
                    numberOfAudioChannels: d,
                    internalInterleavedLength: B.recordingLength,
                    leftBuffers: B.left,
                    rightBuffers: 1 === d ? [] : B.right
                }, (function (e, i) {
                    var o = new Blob([i], {type: "audio/wav"});
                    t.ondataavailable(o), setTimeout(C, t.timeSlice)
                })), B = {left: [], right: [], recordingLength: 0}) : setTimeout(C, t.timeSlice))
            }
        }

        function k(e, t) {
            if ("undefined" == typeof html2canvas) throw"Please link: https://www.webrtc-experiment.com/screenshot.js";
            (t = t || {}).frameInterval || (t.frameInterval = 10);
            var i = !1;
            ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach((function (e) {
                e in document.createElement("canvas") && (i = !0)
            }));
            var o, r, s, a = !(!window.webkitRTCPeerConnection && !window.webkitGetUserMedia || !window.chrome), n = 50,
                A = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            if (a && A && A[2] && (n = parseInt(A[2], 10)), a && n < 52 && (i = !1), t.useWhammyRecorder && (i = !1), i) if (t.disableLogs || console.log("Your browser supports both MediRecorder API and canvas.captureStream!"), e instanceof HTMLCanvasElement) o = e; else {
                if (!(e instanceof CanvasRenderingContext2D)) throw"Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";
                o = e.canvas
            } else navigator.mozGetUserMedia && (t.disableLogs || console.error("Canvas recording is NOT supported in Firefox."));
            this.record = function () {
                if (s = !0, i && !t.useWhammyRecorder) {
                    var e;
                    "captureStream" in o ? e = o.captureStream(25) : "mozCaptureStream" in o ? e = o.mozCaptureStream(25) : "webkitCaptureStream" in o && (e = o.webkitCaptureStream(25));
                    try {
                        var a = new f;
                        a.addTrack(w(e, "video")[0]), e = a
                    } catch (e) {
                    }
                    if (!e) throw"captureStream API are NOT available.";
                    (r = new C(e, {mimeType: t.mimeType || "video/webm"})).record()
                } else h.frames = [], u = (new Date).getTime(), l();
                t.initCallback && t.initCallback()
            }, this.getWebPImages = function (i) {
                if ("canvas" === e.nodeName.toLowerCase()) {
                    var o = h.frames.length;
                    h.frames.forEach((function (e, i) {
                        var r = o - i;
                        t.disableLogs || console.log(r + "/" + o + " frames remaining"), t.onEncodingCallback && t.onEncodingCallback(r, o);
                        var s = e.image.toDataURL("image/webp", 1);
                        h.frames[i].image = s
                    })), t.disableLogs || console.log("Generating WebM"), i()
                } else i()
            }, this.stop = function (e) {
                s = !1;
                var o = this;
                i && r ? r.stop(e) : this.getWebPImages((function () {
                    h.compile((function (i) {
                        t.disableLogs || console.log("Recording finished!"), o.blob = i, o.blob.forEach && (o.blob = new Blob([], {type: "video/webm"})), e && e(o.blob), h.frames = []
                    }))
                }))
            };
            var d = !1;

            function c() {
                h.frames = [], s = !1, d = !1
            }

            function l() {
                if (d) return u = (new Date).getTime(), setTimeout(l, 500);
                if ("canvas" === e.nodeName.toLowerCase()) {
                    var i = (new Date).getTime() - u;
                    return u = (new Date).getTime(), h.frames.push({
                        image: (o = document.createElement("canvas"), r = o.getContext("2d"), o.width = e.width, o.height = e.height, r.drawImage(e, 0, 0), o),
                        duration: i
                    }), void (s && setTimeout(l, t.frameInterval))
                }
                var o, r;
                html2canvas(e, {
                    grabMouse: void 0 === t.showMousePointer || t.showMousePointer,
                    onrendered: function (e) {
                        var i = (new Date).getTime() - u;
                        if (!i) return setTimeout(l, t.frameInterval);
                        u = (new Date).getTime(), h.frames.push({
                            image: e.toDataURL("image/webp", 1),
                            duration: i
                        }), s && setTimeout(l, t.frameInterval)
                    }
                })
            }

            this.pause = function () {
                d = !0, r instanceof C && r.pause()
            }, this.resume = function () {
                d = !1, r instanceof C ? r.resume() : s || this.record()
            }, this.clearRecordedData = function () {
                s && this.stop(c), c()
            }, this.name = "CanvasRecorder", this.toString = function () {
                return this.name
            };
            var u = (new Date).getTime(), h = new I.Video(100)
        }

        function T(e, t) {
            function i(e) {
                e = void 0 !== e ? e : 10;
                var t = (new Date).getTime() - A;
                return t ? s ? (A = (new Date).getTime(), setTimeout(i, 100)) : (A = (new Date).getTime(), n.paused && n.play(), l.drawImage(n, 0, 0, c.width, c.height), d.frames.push({
                    duration: t,
                    image: c.toDataURL("image/webp")
                }), void (r || setTimeout(i, e, e))) : setTimeout(i, e, e)
            }

            function o(e, t, i, o, r) {
                var s = document.createElement("canvas");
                s.width = c.width, s.height = c.height;
                var a, n, A, d = s.getContext("2d"), l = [], u = -1 === t,
                    h = t && t > 0 && t <= e.length ? t : e.length, p = 0, m = 0, g = 0,
                    f = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
                    b = i && i >= 0 && i <= 1 ? i : 0, y = o && o >= 0 && o <= 1 ? o : 0, v = !1;
                n = -1, A = (a = {
                    length: h, functionToLoop: function (t, i) {
                        var o, r, s, a = function () {
                            !v && s - o <= s * y || (u && (v = !0), l.push(e[i])), t()
                        };
                        if (v) a(); else {
                            var n = new Image;
                            n.onload = function () {
                                d.drawImage(n, 0, 0, c.width, c.height);
                                var e = d.getImageData(0, 0, c.width, c.height);
                                o = 0, r = e.data.length, s = e.data.length / 4;
                                for (var t = 0; t < r; t += 4) {
                                    var i = {r: e.data[t], g: e.data[t + 1], b: e.data[t + 2]};
                                    Math.sqrt(Math.pow(i.r - p, 2) + Math.pow(i.g - m, 2) + Math.pow(i.b - g, 2)) <= f * b && o++
                                }
                                a()
                            }, n.src = e[i].image
                        }
                    }, callback: function () {
                        (l = l.concat(e.slice(h))).length <= 0 && l.push(e[e.length - 1]), r(l)
                    }
                }).length, function e() {
                    ++n !== A ? setTimeout((function () {
                        a.functionToLoop(e, n)
                    }), 1) : a.callback()
                }()
            }

            (t = t || {}).frameInterval || (t.frameInterval = 10), t.disableLogs || console.log("Using frames-interval:", t.frameInterval), this.record = function () {
                t.width || (t.width = 320), t.height || (t.height = 240), t.video || (t.video = {
                    width: t.width,
                    height: t.height
                }), t.canvas || (t.canvas = {
                    width: t.width,
                    height: t.height
                }), c.width = t.canvas.width || 320, c.height = t.canvas.height || 240, l = c.getContext("2d"), t.video && t.video instanceof HTMLVideoElement ? (n = t.video.cloneNode(), t.initCallback && t.initCallback()) : (n = document.createElement("video"), S(e, n), n.onloadedmetadata = function () {
                    t.initCallback && t.initCallback()
                }, n.width = t.video.width, n.height = t.video.height), n.muted = !0, n.play(), A = (new Date).getTime(), d = new I.Video, t.disableLogs || (console.log("canvas resolutions", c.width, "*", c.height), console.log("video width/height", n.width || c.width, "*", n.height || c.height)), i(t.frameInterval)
            };
            var r = !1;
            this.stop = function (e) {
                e = e || function () {
                }, r = !0;
                var i = this;
                setTimeout((function () {
                    o(d.frames, -1, null, null, (function (o) {
                        d.frames = o, t.advertisement && t.advertisement.length && (d.frames = t.advertisement.concat(d.frames)), d.compile((function (t) {
                            i.blob = t, i.blob.forEach && (i.blob = new Blob([], {type: "video/webm"})), e && e(i.blob)
                        }))
                    }))
                }), 10)
            };
            var s = !1;

            function a() {
                d.frames = [], r = !0, s = !1
            }

            this.pause = function () {
                s = !0
            }, this.resume = function () {
                s = !1, r && this.record()
            }, this.clearRecordedData = function () {
                r || this.stop(a), a()
            }, this.name = "WhammyRecorder", this.toString = function () {
                return this.name
            };
            var n, A, d, c = document.createElement("canvas"), l = c.getContext("2d")
        }

        void 0 !== c ? E.AudioContext = c : "undefined" != typeof webkitAudioContext && (E.AudioContext = webkitAudioContext), i.Storage = E, i.MediaStreamRecorder = C, i.StereoAudioRecorder = R, i.CanvasRecorder = k, i.WhammyRecorder = T;
        var I = function () {
            function e(e) {
                this.frames = [], this.duration = e || 1, this.quality = .8
            }

            function t(e) {
                function t(e, t, i) {
                    return [{data: e, id: 231}].concat(i.map((function (e) {
                        var i = function (e) {
                            var t = 0;
                            e.keyframe && (t |= 128);
                            e.invisible && (t |= 8);
                            e.lacing && (t |= e.lacing << 1);
                            e.discardable && (t |= 1);
                            if (e.trackNum > 127) throw"TrackNumber > 127 not supported";
                            return [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t].map((function (e) {
                                return String.fromCharCode(e)
                            })).join("") + e.frame
                        }({
                            discardable: 0,
                            frame: e.data.slice(4),
                            invisible: 0,
                            keyframe: 1,
                            lacing: 0,
                            trackNum: 1,
                            timecode: Math.round(t)
                        });
                        return t += e.duration, {data: i, id: 163}
                    })))
                }

                function i(e) {
                    for (var t = []; e > 0;) t.push(255 & e), e >>= 8;
                    return new Uint8Array(t.reverse())
                }

                function o(e) {
                    var t = [];
                    e = (e.length % 8 ? new Array(9 - e.length % 8).join("0") : "") + e;
                    for (var i = 0; i < e.length; i += 8) t.push(parseInt(e.substr(i, 8), 2));
                    return new Uint8Array(t)
                }

                function r(e) {
                    for (var t = [], s = 0; s < e.length; s++) {
                        var a = e[s].data;
                        "object" == typeof a && (a = r(a)), "number" == typeof a && (a = o(a.toString(2))), "string" == typeof a && (a = new Uint8Array(a.split("").map((function (e) {
                            return e.charCodeAt(0)
                        }))));
                        var n = a.size || a.byteLength || a.length,
                            A = Math.ceil(Math.ceil(Math.log(n) / Math.log(2)) / 8), d = n.toString(2),
                            c = new Array(7 * A + 7 + 1 - d.length).join("0") + d, l = new Array(A).join("0") + "1" + c;
                        t.push(i(e[s].id)), t.push(o(l)), t.push(a)
                    }
                    return new Blob(t, {type: "video/webm"})
                }

                function s(e, t) {
                    return parseInt(e.substr(t + 4, 4).split("").map((function (e) {
                        var t = e.charCodeAt(0).toString(2);
                        return new Array(8 - t.length + 1).join("0") + t
                    })).join(""), 2)
                }

                function a(e) {
                    for (var t = 0, i = {}; t < e.length;) {
                        var o = e.substr(t, 4), r = s(e, t), n = e.substr(t + 4 + 4, r);
                        t += 8 + r, i[o] = i[o] || [], "RIFF" === o || "LIST" === o ? i[o].push(a(n)) : i[o].push(n)
                    }
                    return i
                }

                var n = new function (e) {
                    var i = function (e) {
                        if (!e[0]) return void postMessage({error: "Something went wrong. Maybe WebP format is not supported in the current browser."});
                        for (var t = e[0].width, i = e[0].height, o = e[0].duration, r = 1; r < e.length; r++) o += e[r].duration;
                        return {duration: o, width: t, height: i}
                    }(e);
                    if (!i) return [];
                    for (var o, s = [{
                        id: 440786851,
                        data: [{data: 1, id: 17030}, {data: 1, id: 17143}, {data: 4, id: 17138}, {
                            data: 8,
                            id: 17139
                        }, {data: "webm", id: 17026}, {data: 2, id: 17031}, {data: 2, id: 17029}]
                    }, {
                        id: 408125543,
                        data: [{
                            id: 357149030,
                            data: [{data: 1e6, id: 2807729}, {data: "whammy", id: 19840}, {
                                data: "whammy",
                                id: 22337
                            }, {
                                data: (o = i.duration, [].slice.call(new Uint8Array(new Float64Array([o]).buffer), 0).map((function (e) {
                                    return String.fromCharCode(e)
                                })).reverse().join("")), id: 17545
                            }]
                        }, {
                            id: 374648427,
                            data: [{
                                id: 174,
                                data: [{data: 1, id: 215}, {data: 1, id: 29637}, {data: 0, id: 156}, {
                                    data: "und",
                                    id: 2274716
                                }, {data: "V_VP8", id: 134}, {data: "VP8", id: 2459272}, {data: 1, id: 131}, {
                                    id: 224,
                                    data: [{data: i.width, id: 176}, {data: i.height, id: 186}]
                                }]
                            }]
                        }]
                    }], a = 0, n = 0; a < e.length;) {
                        var A = [], d = 0;
                        do {
                            A.push(e[a]), d += e[a].duration, a++
                        } while (a < e.length && d < 3e4);
                        var c = {id: 524531317, data: t(n, 0, A)};
                        s[1].data.push(c), n += d
                    }
                    return r(s)
                }(e.map((function (e) {
                    var t = function (e) {
                        for (var t = e.RIFF[0].WEBP[0], i = t.indexOf("*"), o = 0, r = []; o < 4; o++) r[o] = t.charCodeAt(i + 3 + o);
                        return {width: 16383 & (r[1] << 8 | r[0]), height: 16383 & (r[3] << 8 | r[2]), data: t, riff: e}
                    }(a(atob(e.image.slice(23))));
                    return t.duration = e.duration, t
                })));
                postMessage(n)
            }

            return e.prototype.add = function (e, t) {
                if ("canvas" in e && (e = e.canvas), "toDataURL" in e && (e = e.toDataURL("image/webp", this.quality)), !/^data:image\/webp;base64,/gi.test(e)) throw"Input must be formatted properly as a base64 encoded DataURI of type image/webp";
                this.frames.push({image: e, duration: t || this.duration})
            }, e.prototype.compile = function (e) {
                var i, o, r,
                    s = (i = t, o = l.createObjectURL(new Blob([i.toString(), "this.onmessage =  function (eee) {" + i.name + "(eee.data);}"], {type: "application/javascript"})), r = new Worker(o), l.revokeObjectURL(o), r);
                s.onmessage = function (t) {
                    t.data.error ? console.error(t.data.error) : e(t.data)
                }, s.postMessage(this.frames)
            }, {Video: e}
        }();
        i.Whammy = I;
        var x = {
            init: function () {
                var e = this;
                if ("undefined" != typeof indexedDB && void 0 !== indexedDB.open) {
                    var t, i = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ""), o = indexedDB.open(i, 1);
                    o.onerror = e.onError, o.onsuccess = function () {
                        ((t = o.result).onerror = e.onError, t.setVersion) ? 1 !== t.version ? t.setVersion(1).onsuccess = function () {
                            r(t), s()
                        } : s() : s()
                    }, o.onupgradeneeded = function (e) {
                        r(e.target.result)
                    }
                } else console.error("IndexedDB API are not available in this browser.");

                function r(t) {
                    t.createObjectStore(e.dataStoreName)
                }

                function s() {
                    var i = t.transaction([e.dataStoreName], "readwrite");

                    function o(t) {
                        i.objectStore(e.dataStoreName).get(t).onsuccess = function (i) {
                            e.callback && e.callback(i.target.result, t)
                        }
                    }

                    e.videoBlob && i.objectStore(e.dataStoreName).put(e.videoBlob, "videoBlob"), e.gifBlob && i.objectStore(e.dataStoreName).put(e.gifBlob, "gifBlob"), e.audioBlob && i.objectStore(e.dataStoreName).put(e.audioBlob, "audioBlob"), o("audioBlob"), o("videoBlob"), o("gifBlob")
                }
            }, Fetch: function (e) {
                return this.callback = e, this.init(), this
            }, Store: function (e) {
                return this.audioBlob = e.audioBlob, this.videoBlob = e.videoBlob, this.gifBlob = e.gifBlob, this.init(), this
            }, onError: function (e) {
                console.error(JSON.stringify(e, null, "\t"))
            }, dataStoreName: "recordRTC", dbName: null
        };

        function D(e, t) {
            if ("undefined" == typeof GIFEncoder) {
                var i = document.createElement("script");
                i.src = "https://www.webrtc-experiment.com/gif-recorder.js", (document.body || document.documentElement).appendChild(i)
            }
            t = t || {};
            var o = e instanceof CanvasRenderingContext2D || e instanceof HTMLCanvasElement;
            this.record = function () {
                "undefined" != typeof GIFEncoder && A ? (o || (t.width || (t.width = c.offsetWidth || 320), t.height || (t.height = c.offsetHeight || 240), t.video || (t.video = {
                    width: t.width,
                    height: t.height
                }), t.canvas || (t.canvas = {
                    width: t.width,
                    height: t.height
                }), s.width = t.canvas.width || 320, s.height = t.canvas.height || 240, c.width = t.video.width || 320, c.height = t.video.height || 240), (u = new GIFEncoder).setRepeat(0), u.setDelay(t.frameRate || 200), u.setQuality(t.quality || 10), u.start(), "function" == typeof t.onGifRecordingStarted && t.onGifRecordingStarted(), h = n((function e(i) {
                    if (!0 !== p.clearedRecordedData) {
                        if (r) return setTimeout((function () {
                            e(i)
                        }), 100);
                        h = n(e), void 0 === typeof l && (l = i), i - l < 90 || (!o && c.paused && c.play(), o || a.drawImage(c, 0, 0, s.width, s.height), t.onGifPreview && t.onGifPreview(s.toDataURL("image/png")), u.addFrame(a), l = i)
                    }
                })), t.initCallback && t.initCallback()) : setTimeout(p.record, 1e3)
            }, this.stop = function (e) {
                e = e || function () {
                }, h && d(h), this.blob = new Blob([new Uint8Array(u.stream().bin)], {type: "image/gif"}), e(this.blob), u.stream().bin = []
            };
            var r = !1;
            this.pause = function () {
                r = !0
            }, this.resume = function () {
                r = !1
            }, this.clearRecordedData = function () {
                p.clearedRecordedData = !0, u && (u.stream().bin = [])
            }, this.name = "GifRecorder", this.toString = function () {
                return this.name
            };
            var s = document.createElement("canvas"), a = s.getContext("2d");
            o && (e instanceof CanvasRenderingContext2D ? s = (a = e).canvas : e instanceof HTMLCanvasElement && (a = e.getContext("2d"), s = e));
            var A = !0;
            if (!o) {
                var c = document.createElement("video");
                c.muted = !0, c.autoplay = !0, c.playsInline = !0, A = !1, c.onloadedmetadata = function () {
                    A = !0
                }, S(e, c), c.play()
            }
            var l, u, h = null, p = this
        }

        function j(e, t) {
            t = t || "multi-streams-mixer";
            var i = [], o = !1, r = document.createElement("canvas"), s = r.getContext("2d");
            r.style.opacity = 0, r.style.position = "absolute", r.style.zIndex = -1, r.style.top = "-1000em", r.style.left = "-1000em", r.className = t, (document.body || document.documentElement).appendChild(r), this.disableLogs = !1, this.frameInterval = 10, this.width = 360, this.height = 240, this.useGainNode = !0;
            var a = this, n = window.AudioContext;
            void 0 === n && ("undefined" != typeof webkitAudioContext && (n = webkitAudioContext), "undefined" != typeof mozAudioContext && (n = mozAudioContext));
            var A = window.URL;
            void 0 === A && "undefined" != typeof webkitURL && (A = webkitURL), "undefined" != typeof navigator && void 0 === navigator.getUserMedia && (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia));
            var d = window.MediaStream;
            void 0 === d && "undefined" != typeof webkitMediaStream && (d = webkitMediaStream), void 0 !== d && void 0 === d.prototype.stop && (d.prototype.stop = function () {
                this.getTracks().forEach((function (e) {
                    e.stop()
                }))
            });
            var c = {};

            function l() {
                if (!o) {
                    var e = i.length, t = !1, s = [];
                    if (i.forEach((function (e) {
                        e.stream || (e.stream = {}), e.stream.fullcanvas ? t = e : s.push(e)
                    })), t) r.width = t.stream.width, r.height = t.stream.height; else if (s.length) {
                        r.width = e > 1 ? 2 * s[0].width : s[0].width;
                        var n = 1;
                        3 !== e && 4 !== e || (n = 2), 5 !== e && 6 !== e || (n = 3), 7 !== e && 8 !== e || (n = 4), 9 !== e && 10 !== e || (n = 5), r.height = s[0].height * n
                    } else r.width = a.width || 360, r.height = a.height || 240;
                    t && t instanceof HTMLVideoElement && u(t), s.forEach((function (e, t) {
                        u(e, t)
                    })), setTimeout(l, a.frameInterval)
                }
            }

            function u(e, t) {
                if (!o) {
                    var i = 0, r = 0, a = e.width, n = e.height;
                    1 === t && (i = e.width), 2 === t && (r = e.height), 3 === t && (i = e.width, r = e.height), 4 === t && (r = 2 * e.height), 5 === t && (i = e.width, r = 2 * e.height), 6 === t && (r = 3 * e.height), 7 === t && (i = e.width, r = 3 * e.height), void 0 !== e.stream.left && (i = e.stream.left), void 0 !== e.stream.top && (r = e.stream.top), void 0 !== e.stream.width && (a = e.stream.width), void 0 !== e.stream.height && (n = e.stream.height), s.drawImage(e, i, r, a, n), "function" == typeof e.stream.onRender && e.stream.onRender(s, i, r, a, n, t)
                }
            }

            function h(e) {
                var i = document.createElement("video");
                return function (e, t) {
                    "srcObject" in t ? t.srcObject = e : "mozSrcObject" in t ? t.mozSrcObject = e : t.srcObject = e
                }(e, i), i.className = t, i.muted = !0, i.volume = 0, i.width = e.width || a.width || 360, i.height = e.height || a.height || 240, i.play(), i
            }

            function p(t) {
                i = [], (t = t || e).forEach((function (e) {
                    if (e.getTracks().filter((function (e) {
                        return "video" === e.kind
                    })).length) {
                        var t = h(e);
                        t.stream = e, i.push(t)
                    }
                }))
            }

            void 0 !== n ? c.AudioContext = n : "undefined" != typeof webkitAudioContext && (c.AudioContext = webkitAudioContext), this.startDrawingFrames = function () {
                l()
            }, this.appendStreams = function (t) {
                if (!t) throw"First parameter is required.";
                t instanceof Array || (t = [t]), t.forEach((function (t) {
                    var o = new d;
                    if (t.getTracks().filter((function (e) {
                        return "video" === e.kind
                    })).length) {
                        var r = h(t);
                        r.stream = t, i.push(r), o.addTrack(t.getTracks().filter((function (e) {
                            return "video" === e.kind
                        }))[0])
                    }
                    if (t.getTracks().filter((function (e) {
                        return "audio" === e.kind
                    })).length) {
                        var s = a.audioContext.createMediaStreamSource(t);
                        a.audioDestination = a.audioContext.createMediaStreamDestination(), s.connect(a.audioDestination), o.addTrack(a.audioDestination.stream.getTracks().filter((function (e) {
                            return "audio" === e.kind
                        }))[0])
                    }
                    e.push(o)
                }))
            }, this.releaseStreams = function () {
                i = [], o = !0, a.gainNode && (a.gainNode.disconnect(), a.gainNode = null), a.audioSources.length && (a.audioSources.forEach((function (e) {
                    e.disconnect()
                })), a.audioSources = []), a.audioDestination && (a.audioDestination.disconnect(), a.audioDestination = null), a.audioContext && a.audioContext.close(), a.audioContext = null, s.clearRect(0, 0, r.width, r.height), r.stream && (r.stream.stop(), r.stream = null)
            }, this.resetVideoStreams = function (e) {
                !e || e instanceof Array || (e = [e]), p(e)
            }, this.name = "MultiStreamsMixer", this.toString = function () {
                return this.name
            }, this.getMixedStream = function () {
                o = !1;
                var t = function () {
                    var e;
                    p(), "captureStream" in r ? e = r.captureStream() : "mozCaptureStream" in r ? e = r.mozCaptureStream() : a.disableLogs || console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features");
                    var t = new d;
                    return e.getTracks().filter((function (e) {
                        return "video" === e.kind
                    })).forEach((function (e) {
                        t.addTrack(e)
                    })), r.stream = t, t
                }(), i = function () {
                    c.AudioContextConstructor || (c.AudioContextConstructor = new c.AudioContext);
                    a.audioContext = c.AudioContextConstructor, a.audioSources = [], !0 === a.useGainNode && (a.gainNode = a.audioContext.createGain(), a.gainNode.connect(a.audioContext.destination), a.gainNode.gain.value = 0);
                    var t = 0;
                    if (e.forEach((function (e) {
                        if (e.getTracks().filter((function (e) {
                            return "audio" === e.kind
                        })).length) {
                            t++;
                            var i = a.audioContext.createMediaStreamSource(e);
                            !0 === a.useGainNode && i.connect(a.gainNode), a.audioSources.push(i)
                        }
                    })), !t) return;
                    return a.audioDestination = a.audioContext.createMediaStreamDestination(), a.audioSources.forEach((function (e) {
                        e.connect(a.audioDestination)
                    })), a.audioDestination.stream
                }();
                return i && i.getTracks().filter((function (e) {
                    return "audio" === e.kind
                })).forEach((function (e) {
                    t.addTrack(e)
                })), e.forEach((function (e) {
                    e.fullcanvas
                })), t
            }
        }

        function L(e, t) {
            e = e || [];
            var i, o, r = this;
            (t = t || {
                elementClass: "multi-streams-mixer",
                mimeType: "video/webm",
                video: {width: 360, height: 240}
            }).frameInterval || (t.frameInterval = 10), t.video || (t.video = {}), t.video.width || (t.video.width = 360), t.video.height || (t.video.height = 240), this.record = function () {
                var r;
                i = new j(e, t.elementClass || "multi-streams-mixer"), (r = [], e.forEach((function (e) {
                    w(e, "video").forEach((function (e) {
                        r.push(e)
                    }))
                })), r).length && (i.frameInterval = t.frameInterval || 10, i.width = t.video.width || 360, i.height = t.video.height || 240, i.startDrawingFrames()), t.previewStream && "function" == typeof t.previewStream && t.previewStream(i.getMixedStream()), (o = new C(i.getMixedStream(), t)).record()
            }, this.stop = function (e) {
                o && o.stop((function (t) {
                    r.blob = t, e(t), r.clearRecordedData()
                }))
            }, this.pause = function () {
                o && o.pause()
            }, this.resume = function () {
                o && o.resume()
            }, this.clearRecordedData = function () {
                o && (o.clearRecordedData(), o = null), i && (i.releaseStreams(), i = null)
            }, this.addStreams = function (r) {
                if (!r) throw"First parameter is required.";
                r instanceof Array || (r = [r]), e.concat(r), o && i && (i.appendStreams(r), t.previewStream && "function" == typeof t.previewStream && t.previewStream(i.getMixedStream()))
            }, this.resetVideoStreams = function (e) {
                i && (!e || e instanceof Array || (e = [e]), i.resetVideoStreams(e))
            }, this.getMixer = function () {
                return i
            }, this.name = "MultiStreamRecorder", this.toString = function () {
                return this.name
            }
        }

        function F(e, t) {
            var i, o, r;

            function s() {
                return new ReadableStream({
                    start: function (o) {
                        var r = document.createElement("canvas"), s = document.createElement("video"), a = !0;
                        s.srcObject = e, s.muted = !0, s.height = t.height, s.width = t.width, s.volume = 0, s.onplaying = function () {
                            r.width = t.width, r.height = t.height;
                            var e = r.getContext("2d"), n = 1e3 / t.frameRate, A = setInterval((function () {
                                if (i && (clearInterval(A), o.close()), a && (a = !1, t.onVideoProcessStarted && t.onVideoProcessStarted()), e.drawImage(s, 0, 0), "closed" !== o._controlledReadableStream.state) try {
                                    o.enqueue(e.getImageData(0, 0, t.width, t.height))
                                } catch (e) {
                                }
                            }), n)
                        }, s.play()
                    }
                })
            }

            function a(e, A) {
                if (!t.workerPath && !A) return i = !1, void fetch("https://unpkg.com/webm-wasm@latest/dist/webm-worker.js").then((function (t) {
                    t.arrayBuffer().then((function (t) {
                        a(e, t)
                    }))
                }));
                if (!t.workerPath && A instanceof ArrayBuffer) {
                    var d = new Blob([A], {type: "text/javascript"});
                    t.workerPath = l.createObjectURL(d)
                }
                t.workerPath || console.error("workerPath parameter is missing."), (o = new Worker(t.workerPath)).postMessage(t.webAssemblyPath || "https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm"), o.addEventListener("message", (function (e) {
                    "READY" === e.data ? (o.postMessage({
                        width: t.width,
                        height: t.height,
                        bitrate: t.bitrate || 1200,
                        timebaseDen: t.frameRate || 30,
                        realtime: t.realtime
                    }), s().pipeTo(new WritableStream({
                        write: function (e) {
                            i ? console.error("Got image, but recorder is finished!") : o.postMessage(e.data.buffer, [e.data.buffer])
                        }
                    }))) : e.data && (r || n.push(e.data))
                }))
            }

            "undefined" != typeof ReadableStream && "undefined" != typeof WritableStream || console.error("Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js"), (t = t || {}).width = t.width || 640, t.height = t.height || 480, t.frameRate = t.frameRate || 30, t.bitrate = t.bitrate || 1200, t.realtime = t.realtime || !0, this.record = function () {
                n = [], r = !1, this.blob = null, a(e), "function" == typeof t.initCallback && t.initCallback()
            }, this.pause = function () {
                r = !0
            }, this.resume = function () {
                r = !1
            };
            var n = [];
            this.stop = function (e) {
                i = !0;
                var t = this;
                !function (e) {
                    o ? (o.addEventListener("message", (function (t) {
                        null === t.data && (o.terminate(), o = null, e && e())
                    })), o.postMessage(null)) : e && e()
                }((function () {
                    t.blob = new Blob(n, {type: "video/webm"}), e(t.blob)
                }))
            }, this.name = "WebAssemblyRecorder", this.toString = function () {
                return this.name
            }, this.clearRecordedData = function () {
                n = [], r = !1, this.blob = null
            }, this.blob = null
        }

        i.DiskStorage = x, i.GifRecorder = D, i.MultiStreamRecorder = L, i.RecordRTCPromisesHandler = function (e, t) {
            if (!this) throw'Use "new RecordRTCPromisesHandler()"';
            if (void 0 === e) throw'First argument "MediaStream" is required.';
            var o = this;
            o.recordRTC = new i(e, t), this.startRecording = function () {
                return new Promise((function (e, t) {
                    try {
                        o.recordRTC.startRecording(), e()
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.stopRecording = function () {
                return new Promise((function (e, t) {
                    try {
                        o.recordRTC.stopRecording((function (i) {
                            o.blob = o.recordRTC.getBlob(), o.blob && o.blob.size ? e(i) : t("Empty blob.", o.blob)
                        }))
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.pauseRecording = function () {
                return new Promise((function (e, t) {
                    try {
                        o.recordRTC.pauseRecording(), e()
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.resumeRecording = function () {
                return new Promise((function (e, t) {
                    try {
                        o.recordRTC.resumeRecording(), e()
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.getDataURL = function (e) {
                return new Promise((function (e, t) {
                    try {
                        o.recordRTC.getDataURL((function (t) {
                            e(t)
                        }))
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.getBlob = function () {
                return new Promise((function (e, t) {
                    try {
                        e(o.recordRTC.getBlob())
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.getInternalRecorder = function () {
                return new Promise((function (e, t) {
                    try {
                        e(o.recordRTC.getInternalRecorder())
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.reset = function () {
                return new Promise((function (e, t) {
                    try {
                        e(o.recordRTC.reset())
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.destroy = function () {
                return new Promise((function (e, t) {
                    try {
                        e(o.recordRTC.destroy())
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.getState = function () {
                return new Promise((function (e, t) {
                    try {
                        e(o.recordRTC.getState())
                    } catch (e) {
                        t(e)
                    }
                }))
            }, this.blob = null, this.version = "5.6.2"
        }, i.WebAssemblyRecorder = F
    }));

    class Ue extends we {
        constructor(e) {
            super(), this.player = e, this.fileName = "", this.fileType = N, this.isRecording = !1, this.recordingTimestamp = 0, this.recordingInterval = null, e.debug.log("Recorder", "init")
        }

        destroy() {
            this._reset(), this.player.debug.log("Recorder", "destroy")
        }

        setFileName(e, t) {
            this.fileName = e, P !== t && N !== t || (this.fileType = t)
        }

        get recording() {
            return this.isRecording
        }

        get recordTime() {
            return this.recordingTimestamp
        }

        startRecord() {
            const e = this.player.debug, t = {
                type: "video", mimeType: "video/webm;codecs=h264", onTimeStamp: t => {
                    e.log("Recorder", "record timestamp :" + t)
                }, disableLogs: !this.player._opt.debug
            };
            try {
                const e = this.player.video.$videoElement.captureStream(25);
                if (this.player.audio && this.player.audio.mediaStreamAudioDestinationNode && this.player.audio.mediaStreamAudioDestinationNode.stream && !this.player.audio.isStateSuspended() && this.player.audio.hasAudio && this.player._opt.hasAudio) {
                    const t = this.player.audio.mediaStreamAudioDestinationNode.stream;
                    if (t.getAudioTracks().length > 0) {
                        const i = t.getAudioTracks()[0];
                        i && i.enabled && e.addTrack(i)
                    }
                }
                this.recorder = Me(e, t)
            } catch (t) {
                e.error("Recorder", "startRecord error", t), this.emit(T.recordCreateError)
            }
            this.recorder && (this.isRecording = !0, this.player.emit(T.recording, !0), this.recorder.startRecording(), e.log("Recorder", "start recording"), this.player.emit(T.recordStart), this.recordingInterval = window.setInterval((() => {
                this.recordingTimestamp += 1, this.player.emit(T.recordingTimestamp, this.recordingTimestamp)
            }), 1e3))
        }

        stopRecordAndSave() {
            this.recorder && this.isRecording && this.recorder.stopRecording((() => {
                this.player.debug.log("Recorder", "stop recording"), this.player.emit(T.recordEnd);
                const e = (this.fileName || le()) + "." + (this.fileType || N);
                Te(this.recorder.getBlob(), e), this._reset(), this.player.emit(T.recording, !1)
            }))
        }

        _reset() {
            this.isRecording = !1, this.recordingTimestamp = 0, this.recorder && (this.recorder.destroy(), this.recorder = null), this.fileName = null, this.recordingInterval && clearInterval(this.recordingInterval), this.recordingInterval = null
        }
    }

    class Qe {
        constructor(e) {
            return new (Qe.getLoaderFactory())(e)
        }

        static getLoaderFactory() {
            return Ue
        }
    }

    class We {
        constructor(e) {
            this.player = e, this.decoderWorker = new Worker(e._opt.decoder), this._initDecoderWorker(), e.debug.log("decoderWorker", "init")
        }

        destroy() {
            this.decoderWorker.postMessage({cmd: R}), this.decoderWorker.terminate(), this.decoderWorker = null, this.player.debug.log("decoderWorker", "destroy")
        }

        _initDecoderWorker() {
            const {debug: e, events: {proxy: t}} = this.player;
            this.decoderWorker.onmessage = t => {
                const i = t.data;
                switch (i.cmd) {
                    case c:
                        e.log("decoderWorker", "onmessage:", c), this.player.loaded || this.player.emit(T.load), this.player.emit(T.decoderWorkerInit), this._initWork();
                        break;
                    case g:
                        e.log("decoderWorker", "onmessage:", g, i.code), this.player._times.decodeStart || (this.player._times.decodeStart = le()), this.player.video.updateVideoInfo({encTypeCode: i.code});
                        break;
                    case m:
                        e.log("decoderWorker", "onmessage:", m, i.code), this.player.audio && this.player.audio.updateAudioInfo({encTypeCode: i.code});
                        break;
                    case l:
                        if (e.log("decoderWorker", "onmessage:", l, `width:${i.w},height:${i.h}`), this.player.video.updateVideoInfo({
                            width: i.w,
                            height: i.h
                        }), !this.player._opt.openWebglAlignment && i.w / 2 % 4 != 0) return void this.player.emit(x.webglAlignmentError);
                        this.player.video.initCanvasViewSize();
                        break;
                    case p:
                        e.log("decoderWorker", "onmessage:", p, `channels:${i.channels},sampleRate:${i.sampleRate}`), this.player.audio && (this.player.audio.updateAudioInfo(i), this.player.audio.initScriptNode(i));
                        break;
                    case u:
                        this.player.handleRender(), this.player.video.render(i), this.player.emit(T.timeUpdate, i.ts), this.player.updateStats({
                            fps: !0,
                            ts: i.ts,
                            buf: i.delay
                        }), this.player._times.videoStart || (this.player._times.videoStart = le(), this.player.handlePlayToRenderTimes());
                        break;
                    case h:
                        this.player.playing && this.player.audio && this.player.audio.play(i.buffer, i.ts);
                        break;
                    case f:
                        i.message && -1 !== i.message.indexOf(b) && (this.player.emit(T.error, x.wasmDecodeError), this.player.emit(x.wasmDecodeError));
                        break;
                    default:
                        this.player[i.cmd] && this.player[i.cmd](i)
                }
            }
        }

        _initWork() {
            const e = {
                debug: this.player._opt.debug,
                useOffscreen: this.player._opt.useOffscreen,
                useWCS: this.player._opt.useWCS,
                videoBuffer: this.player._opt.videoBuffer,
                videoBufferDelay: this.player._opt.videoBufferDelay,
                openWebglAlignment: this.player._opt.openWebglAlignment
            };
            this.decoderWorker.postMessage({
                cmd: E,
                opt: JSON.stringify(e),
                sampleRate: this.player.audio && this.player.audio.audioContext.sampleRate || 0
            })
        }

        decodeVideo(e, t, i) {
            const o = {type: v, ts: Math.max(t, 0), isIFrame: i};
            this.decoderWorker.postMessage({cmd: B, buffer: e, options: o}, [e.buffer])
        }

        decodeAudio(e, t) {
            this.player._opt.useWCS && !this.player._opt.useOffscreen || this.player._opt.useMSE ? this._decodeAudioNoDelay(e, t) : this._decodeAudio(e, t)
        }

        _decodeAudio(e, t) {
            const i = {type: y, ts: Math.max(t, 0)};
            this.decoderWorker.postMessage({cmd: B, buffer: e, options: i}, [e.buffer])
        }

        _decodeAudioNoDelay(e, t) {
            this.decoderWorker.postMessage({cmd: C, buffer: e, ts: Math.max(t, 0)}, [e.buffer])
        }

        updateWorkConfig(e) {
            this.decoderWorker.postMessage({cmd: k, key: e.key, value: e.value})
        }
    }

    class Je extends we {
        constructor(e) {
            super(), this.player = e, this.stopId = null, this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.bufferList = [], this.dropping = !1, this.initInterval()
        }

        destroy() {
            this.stopId && (clearInterval(this.stopId), this.stopId = null), this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.bufferList = [], this.dropping = !1, this.off(), this.player.debug.log("CommonDemux", "destroy")
        }

        getDelay(e) {
            if (!e) return -1;
            if (this.firstTimestamp) {
                if (e) {
                    const t = Date.now() - this.startTimestamp, i = e - this.firstTimestamp;
                    this.delay = t >= i ? t - i : i - t
                }
            } else this.firstTimestamp = e, this.startTimestamp = Date.now(), this.delay = -1;
            return this.delay
        }

        resetDelay() {
            this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.dropping = !1
        }

        initInterval() {
            this.player.debug.log("common dumex", "init Interval");
            let e = () => {
                let e;
                const t = this.player._opt.videoBuffer, i = this.player._opt.videoBufferDelay;
                if (this.bufferList.length) if (this.dropping) {
                    for (e = this.bufferList.shift(), e.type === y && 0 === e.payload[1] && this._doDecoderDecode(e); !e.isIFrame && this.bufferList.length;) e = this.bufferList.shift(), e.type === y && 0 === e.payload[1] && this._doDecoderDecode(e);
                    e.isIFrame && this.getDelay(e.ts) <= Math.min(t, 200) && (this.dropping = !1, this._doDecoderDecode(e))
                } else e = this.bufferList[0], -1 === this.getDelay(e.ts) ? (this.bufferList.shift(), this._doDecoderDecode(e)) : this.delay > t + i ? (this.resetDelay(), this.dropping = !0) : (e = this.bufferList[0], this.getDelay(e.ts) > t && (this.bufferList.shift(), this._doDecoderDecode(e)))
            };
            e(), this.stopId = setInterval(e, 10)
        }

        _doDecode(e, t, i, o, r) {
            const s = this.player;
            let a = {ts: i, cts: r, type: t, isIFrame: !1};
            s._opt.useWCS && !s._opt.useOffscreen || s._opt.useMSE ? (t === v && (a.isIFrame = o), this.pushBuffer(e, a)) : t === v ? s.decoderWorker && s.decoderWorker.decodeVideo(e, i, o) : t === y && s._opt.hasAudio && s.decoderWorker && s.decoderWorker.decodeAudio(e, i)
        }

        _doDecoderDecode(e) {
            const t = this.player, {webcodecsDecoder: i, mseDecoder: o} = t;
            e.type === y ? t._opt.hasAudio && t.decoderWorker && t.decoderWorker.decodeAudio(e.payload, e.ts) : e.type === v && (t._opt.useWCS && !t._opt.useOffscreen ? i.decodeVideo(e.payload, e.ts, e.isIFrame) : t._opt.useMSE && o.decodeVideo(e.payload, e.ts, e.isIFrame, e.cts))
        }

        pushBuffer(e, t) {
            t.type === y ? this.bufferList.push({
                ts: t.ts,
                payload: e,
                type: y
            }) : t.type === v && this.bufferList.push({ts: t.ts, cts: t.cts, payload: e, type: v, isIFrame: t.isIFrame})
        }

        close() {
        }
    }

    class Ge extends Je {
        constructor(e) {
            super(e), this.input = this._inputFlv(), this.flvDemux = this.dispatchFlvData(this.input), e.debug.log("FlvDemux", "init")
        }

        destroy() {
            super.destroy(), this.input = null, this.flvDemux = null, this.player.debug.log("FlvDemux", "destroy")
        }

        dispatch(e) {
            this.flvDemux(e)
        }

        * _inputFlv() {
            yield 9;
            const e = new ArrayBuffer(4), t = new Uint8Array(e), i = new Uint32Array(e), o = this.player;
            for (; ;) {
                t[3] = 0;
                const e = yield 15, r = e[4];
                t[0] = e[7], t[1] = e[6], t[2] = e[5];
                const s = i[0];
                t[0] = e[10], t[1] = e[9], t[2] = e[8];
                let a = i[0];
                16777215 === a && (t[3] = e[11], a = i[0]);
                const n = yield s;
                switch (r) {
                    case w:
                        o._opt.hasAudio && (o.updateStats({abps: n.byteLength}), n.byteLength > 0 && this._doDecode(n, y, a));
                        break;
                    case S:
                        if (o._times.demuxStart || (o._times.demuxStart = le()), o._opt.hasVideo) {
                            o.updateStats({vbps: n.byteLength});
                            const e = n[0] >> 4 == 1;
                            if (n.byteLength > 0) {
                                i[0] = n[4], i[1] = n[3], i[2] = n[2], i[3] = 0;
                                let t = i[0];
                                this._doDecode(n, v, a, e, t)
                            }
                        }
                }
            }
        }

        dispatchFlvData(e) {
            let t = e.next(), i = null;
            return o => {
                let r = new Uint8Array(o);
                if (i) {
                    let e = new Uint8Array(i.length + r.length);
                    e.set(i), e.set(r, i.length), r = e, i = null
                }
                for (; r.length >= t.value;) {
                    let i = r.slice(t.value);
                    t = e.next(r.slice(0, t.value)), r = i
                }
                r.length > 0 && (i = r)
            }
        }

        close() {
            this.input && this.input.return(null)
        }
    }

    class Pe extends Je {
        constructor(e) {
            super(e), e.debug.log("M7sDemux", "init")
        }

        destroy() {
            super.destroy(), this.player.debug.log("M7sDemux", "destroy"), this.player = null
        }

        dispatch(e) {
            const t = this.player, i = new DataView(e), o = i.getUint8(0), r = i.getUint32(1, !1);
            switch (o) {
                case y:
                    if (t._opt.hasAudio) {
                        const i = new Uint8Array(e, 5);
                        t.updateStats({abps: i.byteLength}), i.byteLength > 0 && this._doDecode(i, o, r)
                    }
                    break;
                case v:
                    if (t._opt.hasVideo) if (t._times.demuxStart || (t._times.demuxStart = le()), i.byteLength > 5) {
                        const s = new Uint8Array(e, 5), a = i.getUint8(5) >> 4 == 1;
                        t.updateStats({vbps: s.byteLength}), s.byteLength > 0 && this._doDecode(s, o, r, a)
                    } else this.player.debug.warn("M7sDemux", "dispatch", "dv byteLength is", i.byteLength)
            }
        }
    }

    class Ne {
        constructor(e) {
            return new (Ne.getLoaderFactory(e._opt.demuxType))(e)
        }

        static getLoaderFactory(e) {
            return e === A ? Pe : e === n ? Ge : void 0
        }
    }

    class ze {
        constructor(e) {
            this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
        }

        destroy() {
            this._buffer = null
        }

        _fillCurrentWord() {
            let e = this._total_bytes - this._buffer_index, t = Math.min(4, e), i = new Uint8Array(4);
            i.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(i.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t
        }

        readBits(e) {
            if (e <= this._current_word_bits_left) {
                let t = this._current_word >>> 32 - e;
                return this._current_word <<= e, this._current_word_bits_left -= e, t
            }
            let t = this._current_word_bits_left ? this._current_word : 0;
            t >>>= 32 - this._current_word_bits_left;
            let i = e - this._current_word_bits_left;
            this._fillCurrentWord();
            let o = Math.min(i, this._current_word_bits_left), r = this._current_word >>> 32 - o;
            return this._current_word <<= o, this._current_word_bits_left -= o, t = t << o | r, t
        }

        readBool() {
            return 1 === this.readBits(1)
        }

        readByte() {
            return this.readBits(8)
        }

        _skipLeadingZero() {
            let e;
            for (e = 0; e < this._current_word_bits_left; e++) if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
            return this._fillCurrentWord(), e + this._skipLeadingZero()
        }

        readUEG() {
            let e = this._skipLeadingZero();
            return this.readBits(e + 1) - 1
        }

        readSEG() {
            let e = this.readUEG();
            return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
        }
    }

    class He {
        static _ebsp2rbsp(e) {
            let t = e, i = t.byteLength, o = new Uint8Array(i), r = 0;
            for (let e = 0; e < i; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (o[r] = t[e], r++);
            return new Uint8Array(o.buffer, 0, r)
        }

        static parseSPS(e) {
            let t = He._ebsp2rbsp(e), i = new ze(t);
            i.readByte();
            let o = i.readByte();
            i.readByte();
            let r = i.readByte();
            i.readUEG();
            let s = He.getProfileString(o), a = He.getLevelString(r), n = 1, A = 420, d = [0, 420, 422, 444], c = 8;
            if ((100 === o || 110 === o || 122 === o || 244 === o || 44 === o || 83 === o || 86 === o || 118 === o || 128 === o || 138 === o || 144 === o) && (n = i.readUEG(), 3 === n && i.readBits(1), n <= 3 && (A = d[n]), c = i.readUEG() + 8, i.readUEG(), i.readBits(1), i.readBool())) {
                let e = 3 !== n ? 8 : 12;
                for (let t = 0; t < e; t++) i.readBool() && (t < 6 ? He._skipScalingList(i, 16) : He._skipScalingList(i, 64))
            }
            i.readUEG();
            let l = i.readUEG();
            if (0 === l) i.readUEG(); else if (1 === l) {
                i.readBits(1), i.readSEG(), i.readSEG();
                let e = i.readUEG();
                for (let t = 0; t < e; t++) i.readSEG()
            }
            let u = i.readUEG();
            i.readBits(1);
            let h = i.readUEG(), p = i.readUEG(), m = i.readBits(1);
            0 === m && i.readBits(1), i.readBits(1);
            let g = 0, f = 0, b = 0, y = 0;
            i.readBool() && (g = i.readUEG(), f = i.readUEG(), b = i.readUEG(), y = i.readUEG());
            let v = 1, w = 1, S = 0, E = !0, B = 0, C = 0;
            if (i.readBool()) {
                if (i.readBool()) {
                    let e = i.readByte(), t = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                        o = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                    e > 0 && e < 16 ? (v = t[e - 1], w = o[e - 1]) : 255 === e && (v = i.readByte() << 8 | i.readByte(), w = i.readByte() << 8 | i.readByte())
                }
                if (i.readBool() && i.readBool(), i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool()) {
                    let e = i.readBits(32), t = i.readBits(32);
                    E = i.readBool(), B = t, C = 2 * e, S = B / C
                }
            }
            let R = 1;
            1 === v && 1 === w || (R = v / w);
            let k = 0, T = 0;
            if (0 === n) k = 1, T = 2 - m; else {
                k = 3 === n ? 1 : 2, T = (1 === n ? 2 : 1) * (2 - m)
            }
            let I = 16 * (h + 1), x = 16 * (p + 1) * (2 - m);
            I -= (g + f) * k, x -= (b + y) * T;
            let D = Math.ceil(I * R);
            return i.destroy(), i = null, {
                profile_string: s,
                level_string: a,
                bit_depth: c,
                ref_frames: u,
                chroma_format: A,
                chroma_format_string: He.getChromaFormatString(A),
                frame_rate: {fixed: E, fps: S, fps_den: C, fps_num: B},
                sar_ratio: {width: v, height: w},
                codec_size: {width: I, height: x},
                present_size: {width: D, height: x}
            }
        }

        static _skipScalingList(e, t) {
            let i = 8, o = 8, r = 0;
            for (let s = 0; s < t; s++) 0 !== o && (r = e.readSEG(), o = (i + r + 256) % 256), i = 0 === o ? i : o
        }

        static getProfileString(e) {
            switch (e) {
                case 66:
                    return "Baseline";
                case 77:
                    return "Main";
                case 88:
                    return "Extended";
                case 100:
                    return "High";
                case 110:
                    return "High10";
                case 122:
                    return "High422";
                case 244:
                    return "High444";
                default:
                    return "Unknown"
            }
        }

        static getLevelString(e) {
            return (e / 10).toFixed(1)
        }

        static getChromaFormatString(e) {
            switch (e) {
                case 420:
                    return "4:2:0";
                case 422:
                    return "4:2:2";
                case 444:
                    return "4:4:4";
                default:
                    return "Unknown"
            }
        }
    }

    function Ye(e) {
        const t = {}, i = new DataView(e.buffer);
        let o = i.getUint8(0), r = i.getUint8(1);
        if (i.getUint8(2), i.getUint8(3), 1 !== o || 0 === r) return;
        const s = 1 + (3 & i.getUint8(4));
        if (3 !== s && 4 !== s) return;
        let a = 31 & i.getUint8(5);
        if (0 === a) return;
        let n = 6;
        for (let o = 0; o < a; o++) {
            let r = i.getUint16(n, !1);
            if (n += 2, 0 === r) continue;
            let s = new Uint8Array(e.buffer, n, r);
            n += r;
            let a = He.parseSPS(s);
            if (0 !== o) continue;
            t.codecWidth = a.codec_size.width, t.codecHeight = a.codec_size.height, t.presentWidth = a.present_size.width, t.presentHeight = a.present_size.height, t.profile = a.profile_string, t.level = a.level_string, t.bitDepth = a.bit_depth, t.chromaFormat = a.chroma_format, t.sarRatio = a.sar_ratio, t.frameRate = a.frame_rate, !1 !== a.frame_rate.fixed && 0 !== a.frame_rate.fps_num && 0 !== a.frame_rate.fps_den || (t.frameRate = {});
            let A = t.frameRate.fps_den, d = t.frameRate.fps_num;
            t.refSampleDuration = t.timescale * (A / d);
            let c = s.subarray(1, 4), l = "avc1.";
            for (let e = 0; e < 3; e++) {
                let t = c[e].toString(16);
                t.length < 2 && (t = "0" + t), l += t
            }
            t.codec = l
        }
        let A = i.getUint8(n);
        if (0 !== A) {
            n++;
            for (let t = 0; t < A; t++) {
                let t = i.getUint16(n, !1);
                n += 2, 0 !== t && (new Uint8Array(e.buffer, n, t), n += t)
            }
            return t.videoType = "avc", t
        }
    }

    class Xe extends we {
        constructor(e) {
            super(), this.player = e, this.hasInit = !1, this.isDecodeFirstIIframe = !1, this.isInitInfo = !1, this.decoder = null, this.initDecoder(), e.debug.log("Webcodecs", "init")
        }

        destroy() {
            this.decoder && (this.decoder.close(), this.decoder = null), this.hasInit = !1, this.isInitInfo = !1, this.isDecodeFirstIIframe = !1, this.off(), this.player.debug.log("Webcodecs", "destroy")
        }

        initDecoder() {
            const e = this;
            this.decoder = new VideoDecoder({
                output(t) {
                    e.handleDecode(t)
                }, error(t) {
                    e.handleError(t)
                }
            })
        }

        handleDecode(e) {
            this.isInitInfo || (this.player.video.updateVideoInfo({
                width: e.codedWidth,
                height: e.codedHeight
            }), this.player.video.initCanvasViewSize(), this.isInitInfo = !0), this.player._times.videoStart || (this.player._times.videoStart = le(), this.player.handlePlayToRenderTimes()), this.player.handleRender(), this.player.video.render({videoFrame: e}), this.player.updateStats({
                fps: !0,
                ts: 0,
                buf: this.player.demux.delay
            }), setTimeout((function () {
                e.close ? e.close() : e.destroy()
            }), 100)
        }

        handleError(e) {
            this.player.debug.error("Webcodecs", "VideoDecoder handleError", e)
        }

        decodeVideo(e, t, i) {
            if (this.hasInit) {
                if (i && 0 === e[1]) {
                    const t = Ye(e.slice(5)), i = this.player.video.videoInfo;
                    if (t.codecWidth !== i.width || t.codecHeight !== i.height) return this.player.debug.log("Webcodecs", `width or height is update, width ${i.width}-> ${t.codecWidth}, height ${i.height}-> ${t.codecHeight}`), void this.player.emit(x.webcodecsWidthOrHeightChange)
                }
                if (!this.isDecodeFirstIIframe && i && (this.isDecodeFirstIIframe = !0), this.isDecodeFirstIIframe) {
                    const o = new EncodedVideoChunk({data: e.slice(5), timestamp: t, type: i ? X : q});
                    this.player.emit(T.timeUpdate, t);
                    try {
                        this.decoder.decode(o)
                    } catch (e) {
                        this.player.debug.error("Webcodecs", "VideoDecoder", e), -1 !== e.toString().indexOf(re) && this.player.emit(x.webcodecsDecodeError)
                    }
                } else this.player.debug.warn("Webcodecs", "VideoDecoder isDecodeFirstIIframe false")
            } else if (i && 0 === e[1]) {
                const t = 15 & e[0];
                if (this.player.video.updateVideoInfo({encTypeCode: t}), t === M) return void this.emit(x.webcodecsH265NotSupport);
                this.player._times.decodeStart || (this.player._times.decodeStart = le());
                const i = function (e) {
                    let t = e.subarray(1, 4), i = "avc1.";
                    for (let e = 0; e < 3; e++) {
                        let o = t[e].toString(16);
                        o.length < 2 && (o = "0" + o), i += o
                    }
                    return {codec: i, description: e}
                }(e.slice(5));
                this.decoder.configure(i), this.hasInit = !0
            }
        }
    }

    const qe = {
        play: "播放",
        pause: "暂停",
        audio: "",
        mute: "",
        screenshot: "截图",
        loading: "加载",
        fullscreen: "全屏",
        fullscreenExit: "退出全屏",
        record: "录制",
        recordStop: "停止录制"
    };
    var Ze = Object.keys(qe).reduce(((e, t) => (e[t] = `\n    <i class="jessibuca-icon jessibuca-icon-${t}"></i>\n    ${qe[t] ? `<span class="icon-title-tips"><span class="icon-title">${qe[t]}</span></span>` : ""}\n`, e)), {}),
        Ke = (e, t) => {
            const {events: {proxy: i}} = e, o = document.createElement("object");
            o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", -1), o.type = "text/html", o.data = "about:blank", he(o, {
                display: "block",
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: "-1"
            });
            let r = e.width, s = e.height;
            i(o, "load", (() => {
                i(o.contentDocument.defaultView, "resize", (() => {
                    e.width === r && e.height === s || (r = e.width, s = e.height, e.emit(T.resize), n())
                }))
            })), e.$container.appendChild(o), e.on(T.destroy, (() => {
                e.$container.removeChild(o)
            })), e.on(T.volumechange, (() => {
                !function (e) {
                    if (0 === e) he(t.$volumeOn, "display", "none"), he(t.$volumeOff, "display", "flex"), he(t.$volumeHandle, "top", "48px"); else if (t.$volumeHandle && t.$volumePanel) {
                        const i = pe(t.$volumePanel, "height") || 60, o = pe(t.$volumeHandle, "height"),
                            r = i - (i - o) * e - o;
                        he(t.$volumeHandle, "top", `${r}px`), he(t.$volumeOn, "display", "flex"), he(t.$volumeOff, "display", "none")
                    }
                    t.$volumePanelText && (t.$volumePanelText.innerHTML = parseInt(100 * e))
                }(e.volume)
            })), e.on(T.loading, (e => {
                he(t.$loading, "display", e ? "flex" : "none"), he(t.$poster, "display", "none"), e && he(t.$playBig, "display", "none")
            }));
            const a = i => {
                let o = !0 === (r = i) || !1 === r ? i : e.fullscreen;
                var r;
                he(t.$fullscreenExit, "display", o ? "flex" : "none"), he(t.$fullscreen, "display", o ? "none" : "flex")
            }, n = () => {
                fe() && t.$controls && setTimeout((() => {
                    if (e.fullscreen) {
                        let i = e.height / 2 - e.width + 19, o = e.height / 2 - 19;
                        t.$controls.style.transform = `translateX(${-i}px) translateY(-${o}px) rotate(-90deg)`
                    } else t.$controls.style.transform = "translateX(0) translateY(0) rotate(0)"
                }), 10)
            };
            try {
                Ae.on("change", a), e.events.destroys.push((() => {
                    Ae.off("change", a)
                }))
            } catch (e) {
            }
            e.on(T.webFullscreen, (e => {
                a(e), n()
            })), e.on(T.recording, (() => {
                he(t.$record, "display", e.recording ? "none" : "flex"), he(t.$recordStop, "display", e.recording ? "flex" : "none"), he(t.$recording, "display", e.recording ? "flex" : "none")
            })), e.on(T.recordingTimestamp, (e => {
                t.$recordingTime && (t.$recordingTime.innerHTML = function (e) {
                    var t;
                    if (e > -1) {
                        var i = Math.floor(e / 3600), o = Math.floor(e / 60) % 60, r = e % 60;
                        t = i < 10 ? "0" + i + ":" : i + ":", o < 10 && (t += "0"), t += o + ":", (r = Math.round(r)) < 10 && (t += "0"), t += r.toFixed(0)
                    }
                    return t
                }(e))
            })), e.on(T.playing, (e => {
                he(t.$play, "display", e ? "none" : "flex"), he(t.$playBig, "display", e ? "none" : "block"), he(t.$pause, "display", e ? "flex" : "none"), he(t.$screenshot, "display", e ? "flex" : "none"), he(t.$record, "display", e ? "flex" : "none"), he(t.$fullscreen, "display", e ? "flex" : "none"), e || t.$speed && (t.$speed.innerHTML = be(""))
            })), e.on(T.kBps, (e => {
                const i = be(e);
                t.$speed && (t.$speed.innerHTML = i)
            }))
        };

    function _e(e, t) {
        void 0 === t && (t = {});
        var i = t.insertAt;
        if (e && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
            r.type = "text/css", "top" === i && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
        }
    }

    _e('@keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes magentaPulse{0%{background-color:#630030;-webkit-box-shadow:0 0 9px #333}50%{background-color:#a9014b;-webkit-box-shadow:0 0 18px #a9014b}to{background-color:#630030;-webkit-box-shadow:0 0 9px #333}}.jessibuca-container .jessibuca-icon{cursor:pointer;width:16px;height:16px}.jessibuca-container .jessibuca-poster{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;height:100%;width:100%;background-position:50%;background-repeat:no-repeat;background-size:contain;pointer-events:none}.jessibuca-container .jessibuca-play-big{position:absolute;display:none;height:100%;width:100%;background:rgba(0,0,0,.4)}.jessibuca-container .jessibuca-play-big:after{cursor:pointer;content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:block;width:48px;height:48px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgklEQVRoQ+3ZPYsTQRjA8eeZZCFlWttAwCIkZOaZJt8hlvkeHrlccuAFT6wEG0FQOeQQLCIWih6chQgKgkkKIyqKCVYip54IWmiQkTmyYhFvd3Zn3yDb7szu/7cv7GaDkPEFM94PK0DSZ9DzDAyHw7uI2HRDlVJX5/N5r9FoHCYdr/fvCRiNRmpJ6AEidoUQ15NG+AH8BgD2n9AHANAmohdJQfwAfgGA4xF4bjabnW21Whob62ILoKNfAsAGEd2PU2ATcNSNiDf0/cE5/xAHxDpgEf0NADaJ6HLUiKgAbvcjpdSGlPJZVJCoAUfdSqkLxWLxTLlc/mkbEgtgET1TSnWklLdtIuIEuN23crlcp16vv7cBSQKgu38AwBYRXQyLSArg3hsjRDxNRE+CQhIF/BN9qVAobFYqle+mkLQAdLd+8K0T0U0TRJoAbvc9fVkJId75gaQRoLv1C2STiPTb7rFLWgE6+g0RncwyYEJEtawCvjDGmpzzp5kD6NfxfD7frtVqB17xen2a7oG3ALBm+oMoFQBEPD+dTvtBfpImDXjIGFvjnD/3c7ksG5MU4HDxWeZa0HB3XhKAXcdxOn5vUi9gnIDXSqm2lHLPK8pkfVyAbSLqm4T5HRs1YB8RO0KIid8g03FRAT4rpbpSyh3TINPxUQB2GGM9zvkn05gg420CJovLZT9ISNA5tgB9ItoOGhFmnh/AcZ/X9xhj65zzV2Eiwsz1A1j2B8dHAOgS0W6YnduY6wkYj8d3lFKn/j66Ea84jtOrVqtfbQSE3YYnYDAY5Eql0hYAnNDv6kKIx2F3anO+J8DmzqLY1goQxVE12ebqDJgcrSjGrs5AFEfVZJt/AF0m+jHzUTtnAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-position:50%}.jessibuca-container .jessibuca-play-big:hover:after{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACEElEQVRoQ+2ZXStEQRjH/3/yIXwDdz7J+i7kvdisXCk3SiFJW27kglBcSFFKbqwQSa4krykuKB09Naf2Yndn5jgzc06d53Znd36/mWfeniVyHsw5PwqB0DOonYEoijYBlOpAFwCMkHwLDS/9mwhEDUCfAAyTXA4tYSLwC6CtCegegH6S56FETAR+AHRoACcBTJAUWa+RloBAXwAYIrnt0yBNgZi7qtbHgw8RFwLC/QFglOScawlXAjH3gUqrE1cirgVi7mkAYyS/0xbxJSDcdwAGSa6nKeFTIOZeUyL3aYiEEBDuLwDjJGf+KxFKIOY+BdBL8iipSGiBmHtWbbuftiJZERBuOfgGSK7aSGRJIObeUml1ayKSRQHhlgtkiaTcdltGVgUE+ppkV54FaiS78yrwqlLoOI8Cch2XV548W7WRpTVwA6DP9kGUFYEpAOUkT9LQAvtq1M+0udKkQSgBqSlJWWYxKXj8vRACK+o6bbRIdYI+Ba7U7rKjg7L53JdAhWTZBsy0rWuBXZUuNVMg23auBF7UIl2yBbJt70JAoKV6/WwLk6R9mgKSJlJ1kLTxFmkJyCla8UZd15GJQKvyumyJ8gy8DAEvfZoINPqD41EtUjmUgoaJwAaAnjrKebVI34OSq85NBNqlCAWgE0CV5GEWwI3vQlmCbcSinYFCwPEIFDPgeIC1P1/MgHaIHDf4Aydx2TF7wnKeAAAAAElFTkSuQmCC")}.jessibuca-container .jessibuca-recording{display:none;position:absolute;left:50%;top:0;padding:0 3px;transform:translateX(-50%);justify-content:space-around;align-items:center;width:95px;height:20px;background:#000;opacity:1;border-radius:0 0 8px 8px;z-index:1}.jessibuca-container .jessibuca-recording .jessibuca-recording-red-point{width:8px;height:8px;background:#ff1f1f;border-radius:50%;animation:magentaPulse 1s linear infinite}.jessibuca-container .jessibuca-recording .jessibuca-recording-time{font-size:14px;font-weight:500;color:#ddd}.jessibuca-container .jessibuca-recording .jessibuca-icon-recordStop{width:16px;height:16px;cursor:pointer}.jessibuca-container .jessibuca-loading{display:none;flex-direction:column;justify-content:center;align-items:center;position:absolute;z-index:20;left:0;top:0;right:0;bottom:0;width:100%;height:100%;pointer-events:none}.jessibuca-container .jessibuca-loading-text{line-height:20px;font-size:13px;color:#fff;margin-top:10px}.jessibuca-container .jessibuca-controls{background-color:#161616;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;position:absolute;z-index:40;left:0;right:0;bottom:0;height:38px;width:100%;padding-left:13px;padding-right:13px;font-size:14px;color:#fff;opacity:0;visibility:hidden;transition:all .2s ease-in-out;-webkit-user-select:none;user-select:none;transition:width .5s ease-in}.jessibuca-container .jessibuca-controls .jessibuca-controls-item{position:relative;display:flex;justify-content:center;padding:0 8px}.jessibuca-container .jessibuca-controls .jessibuca-controls-item:hover .icon-title-tips{visibility:visible;opacity:1}.jessibuca-container .jessibuca-controls .jessibuca-fullscreen,.jessibuca-container .jessibuca-controls .jessibuca-fullscreen-exit,.jessibuca-container .jessibuca-controls .jessibuca-icon-audio,.jessibuca-container .jessibuca-controls .jessibuca-microphone-close,.jessibuca-container .jessibuca-controls .jessibuca-pause,.jessibuca-container .jessibuca-controls .jessibuca-play,.jessibuca-container .jessibuca-controls .jessibuca-record,.jessibuca-container .jessibuca-controls .jessibuca-record-stop,.jessibuca-container .jessibuca-controls .jessibuca-screenshot{display:none}.jessibuca-container .jessibuca-controls .jessibuca-icon-audio,.jessibuca-container .jessibuca-controls .jessibuca-icon-mute{z-index:1}.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom{display:flex;justify-content:space-between;height:100%}.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-left,.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-right{display:flex;align-items:center}.jessibuca-container.jessibuca-controls-show .jessibuca-controls{opacity:1;visibility:visible}.jessibuca-container.jessibuca-controls-show-auto-hide .jessibuca-controls{opacity:.8;visibility:visible;display:none}.jessibuca-container.jessibuca-hide-cursor *{cursor:none!important}.jessibuca-container .jessibuca-icon-loading{width:50px;height:50px;background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%;animation:rotation 1s linear infinite}.jessibuca-container .jessibuca-icon-screenshot{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE5UlEQVRoQ+1YW2sdVRT+1s7JxbsoVkEUrIIX0ouz15zYNA+N1RdtQfCltlUfvLbqL/BCwZ8grbHtizQqPojgBSr0JkiMmT2nxgapqBURtPVCq7HxJCeZJVPmxDlzZubMmXOSEsnAvOy917fXt9e39tp7E5b4R0vcfywTuNgRbBgBx3HuJqLVzPzmYjprjHkcwAlmLqXNm4XAISLaSESPaq2HF4OE67rbRGRYRA7btn1fbgLGmKsA/Azg0gBkGzO/vZAkHMd5hIiqc5wHcCMz/5k0Z2oExsfHV1QqldPAf8lORNu11m8tBAljzFYAYWxRSl1vWdZvuQj4RsYYF4AVBlgIOVVlE55HRIxt23ZuCfmGjuOsJ6LPoiAistW27XfaEYmIbOYhPc9bXywWR1oiEJDYQkR1zrYjEjGyqfqbKd8a7kJVtLgQ+30i8pht2wfyRKIdmJkJBPkQTbILfudJ7CTZNBvVpggEcgpvc/ML38zESbLJsxBNE/A9biX0rdjGyTQXgbxyapdsarb0PMlXtWnGoXbKpm0Essqp3bJpK4E0OXmed3+hUBDP8w5FI91M0rdcyLLILElOCbaZilSWeXMncRx4klTCY1spfG3dhZJWx3GcDUR0EEB3ZMw0ET2gtT6SZWWzjmlrBIJCl0hAKfWgZVmHszqXZVxbCSxpCS2JJA6umIhe8ZKKVLPbaBJ+S9toqVRa53nedgAbAKwIwH4FcAzAa0R0l4i8F7PPz189k6RFRA+LyNcAXojDV0oNW5b1eW4Cxpg9AHZkSaaa6hhzb065uDSCH2LmRB8Sk9gY4293g43Qo/1pV80m8yQMfZSZ781cB1zXHRKRZ2IMpgD8A+DamL4ZItqitX4/jbQx5iEA7wLoihn3V/ACckWMJN/QWj9b1x5tGBsbW6uUOh5pPy0iL3Z2dn6ilJqanp5ep5TaJSLhF4NppdRNaU8gPmapVLrO87yfIoXuWyJ6uVKp+HmFjo6OQSJ6FcBtYT+UUmstyxqvkWuUgDFmP4AnQu2/e563qlgs+u9DNZ8xZhRAX7VRRPbath0XuXk7Y8xeAE+FgL6fnJzsHRwcLIfBR0ZGLunq6poAsDLUvp+Zw7b1r9PGmJMAbg8Z7WDmoThZuK67WkS+DD18fcPMdzSQUBR/EzN/nIC/SUQ+DPXV4dclsTHmHAD/SfHCNzc3t7Kvr++HJKeMMacA3BL0nyuXyzcPDAxMxo0fHR29slAo/Ajg6qD/fE9Pzw29vb1/x42fmJi4vFwu+5G/LOg/y8zXNJLQ2dAES5JANMQ7mfn1jBI6ycx3NiMhItqstf4oAX+ziHwQ6qvDj5NQNIn/ALCKmX+JSeIvABRD7fuY+ekGBPYBeDI05tTMzExvf3+/vz2Hk91/ET8RSeI6/DoCpVJpjed5fmKGvzMAXpqdnT3oed5Ud3d3v4jsAqBr9Ei0Rmv9VRqBBPzvROQVETnq2xJRdRu9tRF+bCVOKWT+Kvl/TSIFk6SW/LAjKfjV5K8rZABi8dOOEv7FI7Z8x6zwEWbemLbyMfJr5qiSiJ96oclymBOR3bZtP9+M89WxxpjdAHY2sN3DzM8ljWl4I3Nd9x7/OE1ENcdpETnmH3e11n41zv0l4J8RkU+J6AAz+xtF4teQQG7PFslwmcAiLfSyhC72Qv9/I/Avns2OT7QJskoAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-screenshot:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAED0lEQVRoQ+2ZycsdRRTFf2ejqHFAMQqiYBTUoElUHLNx3GgCgpuYRF2o0UT9CxwQ/BMkMSbZSKLiQgQHUDCJgjiAxiEiESdEcJbEedgcKaj3UV+/6q7u/jovPPkK3qbr1ql76p5bt6qemPKmKfefeQKHOoLFCNg+H1gi6fFJOmv7VmCvpD1N87Yh8ApwNXCzpB2TIGF7DRDm2inpmt4EbB8LfAMcGUHWSHryYJKwfRMwmuMP4BRJv9TN2RgB2wuB72BWsq+V9MTBIGF7NZBiGzhJ0o+9CIRBtt8FLqgADC6nRDbpVO9Iuqi3hCKB5cDrGZDVkp4aIhIV2aSQyyW9MScCkcQqIOfsnCORkc3I31b5VtyFRmg1IQ7dt0ja3icSQ2C2JhAjUU2ykd+dE7tBNp2i2olAJJFuc+nCt564QTadF6IzgUhiVGiqyinKaQjZpJP2ItBXTkPJZhACXeU0pGwGI9BWTkPLZlACBTldG4o5EA6E1dY66edcyNrs8Q36zg1vVaTazNs7iXPgDVJJzYs7VRvHRzaDEohyugJ4CTi84sg/wHWSdnVxsGQ7aQLXS9pZcqpL/6AEplpCU5HE8YpJ9YrXUKQ6baN1+HPaRm1fBqwFQnKGK2ZoPwCvAo8Ai4FnMpPMHMwapHUj8DFwbw3+Dklv9iZgexOwvktSRduxU2VDlErwmyXV+lCbxLbDdndlCT3TX3vV7JgnKfRuSVflfMkSsL0ZuDMz4E/gL+CETN+/wCpJzzaRtn0D8DRwWMbu1/gCcnSm7zFJd1W/jxGwvQx4r2IYnlbuA14GAomQFw8B6YtBKFSnNj2BxEJ3IvB1pdB9CjwQ8yqYhcg/DJxZ8WOZpA/SbzkC24DbEqOfgPMkBRKzmu23gEuSj1sk5SI3Y2J7C3BHMuZz4FxJf6fgto8APgIWJd+3SUrHjr9O294HnJUMWi8pSGqs2V4CvJ88fH0i6eyChKr4KyS9WIO/Ang+6RvDz0XgABCeFEdtkaQv65yy/QVweuwPY0+T9FuNQ8cAXwHHxf7wdHiypN9r7BfEl8GjYv9+SceXJLQ/mSDYTh2Baog3SHq0pYT2STqno4RWSnqhBn8l8FzSN4bfJol/jkn8bXUS228DFyfft0paVyCwFbg9sQkSDEkctueZZju8iO+tJPEYfo7A0piYKd73wP3xnB+20cvjNnphxdmlkj4sEMjhfwY8COyOY0fb6Bkl/K6FLKxS+M1KpDhJY8mvrG5doRwlf66QZfGbjhLh4pEt35kV3iUp/IvTunU8qtTil/7gaHOY2yjpntaez9b5RmBDYewmSXfX2RRvZLYvbThOh+NuqMa9Ww1+yLnXgO2SwkZR24oEens2oYHzBCa00PMSOtQL/f+NwH+Hg8hAnbrYgQAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-play{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgklEQVRoQ+3ZPYsTQRjA8eeZZCFlWttAwCIkZOaZJt8hlvkeHrlccuAFT6wEG0FQOeQQLCIWih6chQgKgkkKIyqKCVYip54IWmiQkTmyYhFvd3Zn3yDb7szu/7cv7GaDkPEFM94PK0DSZ9DzDAyHw7uI2HRDlVJX5/N5r9FoHCYdr/fvCRiNRmpJ6AEidoUQ15NG+AH8BgD2n9AHANAmohdJQfwAfgGA4xF4bjabnW21Whob62ILoKNfAsAGEd2PU2ATcNSNiDf0/cE5/xAHxDpgEf0NADaJ6HLUiKgAbvcjpdSGlPJZVJCoAUfdSqkLxWLxTLlc/mkbEgtgET1TSnWklLdtIuIEuN23crlcp16vv7cBSQKgu38AwBYRXQyLSArg3hsjRDxNRE+CQhIF/BN9qVAobFYqle+mkLQAdLd+8K0T0U0TRJoAbvc9fVkJId75gaQRoLv1C2STiPTb7rFLWgE6+g0RncwyYEJEtawCvjDGmpzzp5kD6NfxfD7frtVqB17xen2a7oG3ALBm+oMoFQBEPD+dTvtBfpImDXjIGFvjnD/3c7ksG5MU4HDxWeZa0HB3XhKAXcdxOn5vUi9gnIDXSqm2lHLPK8pkfVyAbSLqm4T5HRs1YB8RO0KIid8g03FRAT4rpbpSyh3TINPxUQB2GGM9zvkn05gg420CJovLZT9ISNA5tgB9ItoOGhFmnh/AcZ/X9xhj65zzV2Eiwsz1A1j2B8dHAOgS0W6YnduY6wkYj8d3lFKn/j66Ea84jtOrVqtfbQSE3YYnYDAY5Eql0hYAnNDv6kKIx2F3anO+J8DmzqLY1goQxVE12ebqDJgcrSjGrs5AFEfVZJt/AF0m+jHzUTtnAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-play:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACEElEQVRoQ+2ZXStEQRjH/3/yIXwDdz7J+i7kvdisXCk3SiFJW27kglBcSFFKbqwQSa4krykuKB09Naf2Yndn5jgzc06d53Znd36/mWfeniVyHsw5PwqB0DOonYEoijYBlOpAFwCMkHwLDS/9mwhEDUCfAAyTXA4tYSLwC6CtCegegH6S56FETAR+AHRoACcBTJAUWa+RloBAXwAYIrnt0yBNgZi7qtbHgw8RFwLC/QFglOScawlXAjH3gUqrE1cirgVi7mkAYyS/0xbxJSDcdwAGSa6nKeFTIOZeUyL3aYiEEBDuLwDjJGf+KxFKIOY+BdBL8iipSGiBmHtWbbuftiJZERBuOfgGSK7aSGRJIObeUml1ayKSRQHhlgtkiaTcdltGVgUE+ppkV54FaiS78yrwqlLoOI8Cch2XV548W7WRpTVwA6DP9kGUFYEpAOUkT9LQAvtq1M+0udKkQSgBqSlJWWYxKXj8vRACK+o6bbRIdYI+Ba7U7rKjg7L53JdAhWTZBsy0rWuBXZUuNVMg23auBF7UIl2yBbJt70JAoKV6/WwLk6R9mgKSJlJ1kLTxFmkJyCla8UZd15GJQKvyumyJ8gy8DAEvfZoINPqD41EtUjmUgoaJwAaAnjrKebVI34OSq85NBNqlCAWgE0CV5GEWwI3vQlmCbcSinYFCwPEIFDPgeIC1P1/MgHaIHDf4Aydx2TF7wnKeAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-pause{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABA0lEQVRoQ+1YwQqCUBAcfWXXsLr2AXWTPXno8yVB8AP6Aa3oHI+kCDqYaawJljSe133uzO44bx0M/HEG/v1gAd9mkAyQgY4I/F8LJUlyrQFtD2AtIkcNoFEU+Z7n7QD4DfFHEVlocrVmgAUAIAOl3mILPcDgEFcUhyrUKMGUUcroc3NQRimj9XJBGaWMvvPydKN0o6/9QTdKN6rZANxj6EbpRulGuZnjYqs8BbyR8Ub2Izeys+u6yyAIDpo/ehzHM2NMDsA0xFsRmWhyfTIDWSXxCEBmrd2EYXjSHJqm6bQoii2AOYBL5Z0xgFxEVppcrQvQJO0zhgX0iXbdWWSADHRE4AZQ731AhEUeNwAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-pause:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA7klEQVRoQ+2YSwrCQBBEX6HiVvxsPYDewfN7By/gD9ciQkvERQwJdBSiYs0mEDo96aruombEjy/9+P/jAj7NoBkwA28i8H8tFBFRA9oeWEo6ZgCNiDGwAYpn3TpKmmVytWbABQBmoNRbbqEHGB7iiuJYhRol2DJqGX1uDsuoZdRmLuNZSzGWUcuoZdRHSp/IylNgK2ErYSthK3FHwLcSvpXIjoLt9Jfa6TMwl3TIMBkRE2AH9BriL5KGmVyvWIltJXEfKN6tJJ0ym0bECFgDU+Ba+WZQFCdpkcnVuoBM0i5jXECXaNftZQbMwJsI3AAPN3dAQflHegAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-record{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC+UlEQVRoQ+1ZS2sTURT+zlDJYE3XSq219QHVuEjnJDT+Bff9Abqw2voAEfGxqygUqWhVFHGl/yMLu9BwByxk5SNI66ML6U7axjhHbmhgWiftncxoOiV3FcI53z3f/e65594zhIQPSnj86BBot4IdBToKRFyBnbeFlFIScVEiuYvIWC6Xe2YK8pcC7SYA4CMzH4mDQBXAqilQBDsLQLfPf9FxnF4i8kwwmypARI+Wl5dvmIBEsUmlUkNE9NaHsVCpVAZGR0d/m+A2JSAid3K53E0TkCg2pVKpz7KseR/GfKVSGYxMAMA0M1+JEpyJb6lUOm5ZVnkrAsVisaunp+esiByr1Wp3R0ZGvmifzZK4XQQWHMc52MgBpdQuAOcAXABwuB400ZTjONdaIjA7O5u2bVsnWU1EujzP+5nP5xdMVjvIJkCBD8x8VCm1G8AYgAkAAxt8Z5j5YmgCSqlTAJ4D2OcD/AXgATNfbYVEAIFPIvKKiE4D6GuCea8xX6gtpJT6DmBvECgRFRzHeROWRAABE4iWCbwHEFhkPM/L5vP5dyaz+23+KwHXdR3P854S0YG1ILSCuthNMfNM2OC1/RYENLY+ygcBnPfht6ZAA6BYLNr6dyqVokKhsGpaNQ2TWJstreXaE2aed133sojcj41AKyvdzCdAgSXLsk4MDw9/a/i4rntbRPxFNZoC/5jAV2be759DKTUJ4FZSFFi0bbs/k8noy2R9dAjEuWU2YgXkQOK3kD6BMsysi2Z9JC2Jdcw/ALzwPO+xvmcl7Rj177JVEbkO4BARjSflFDJJuW1dBxJPoCIiL4noDIB1BS0pW6j+oJmbm+uuVqvjRKQfLr0bZHnIzJf0f6HeAybahrUJqAPruhLlcnnPysqKfpXp11n/Gv62zoHAroS+AafT6QkiGrIsazKbzX7eVIHEt1US39gCkOzWYthkjNE+tuZujDGZQ8XRXn8N4KT5lLFZ6uaYPt+nwyDuvC80YdhvB9uOAu1WoaNAR4GIK/AHvdr+QAexB7EAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-record:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACfUlEQVRoQ+2ZSYsUQRCFvycK4nJXXEbHBdwO4kn/gv9CD467ICIutxEFkREdFUU86T/xojcPntyQcT2INw+uISFVkD1Wd2dWlU7nUHlqisiX+fJFZGREi8yHMt8/HYG5VrBToFOg4QnMPxcyM2t4KE2nT0i6EwvylwIjQOCFpE1tEPgGfI0FamC3AFgazP8IrJL0KwZzkAI3gLMxIA1ttgCPA4w3wHpJP2NwBxG4KOlcDEgTGzNbA8wEGP57vA0CU5JONtlczFwz2wY8HUbAzBYCB4CtwCVJb33OIAXmioC70LoyBsxsEXAQOApsLIhelnS6FgEzW+5BBvwA/FS+SPJFa40KBZ5L2mxmS4AJ4IjHxCzwaUnHkgmY2V7gLrAyAPwOXJN0qg6DCgIvgQfAPsDjo2pcKddLciEz+wCs6AO6W9KjVBIVBGIgahN4BvRLMjslPYlZPbT53wR2AbeBtcUmXEFPdh5U06mbd/shBBzbr/Jx4FCAX0+BEsDMFocEYrNmFcE+BD4XsXZL0oyZnQCutkagzkn3m1NBwDe/Q9L74MAuFEqUn5op8I8JvJO0elacTALnc1HAH3Njkvwx+WeYWUegTa/pwaqIgexdyIN4uyRPmqULZRXEvulPwD3gpr+zcrtGQxfzRHYG2AAczuUWiom3kc4D2RN4BdwH9gM9CS0XFyoLGu9UuN974eIFVDiuSzruH5LqgRhtU20q8kBPV8LMlhVVmVdnYwX+SMdAZVeieAF7eeltmElJr4cpkH1bJfvGVvatxdR4bMu+teZuWxtKxWncXn8I7EldtQV7vz79fp9KwZp//9CksB8F206BuVahU6BToOEJ/Ab7+KdABdTt8AAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-recordStop{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-recordStop:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreen{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreen:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreenExit{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADd0lEQVRoQ+2Zz2sdVRTHv+fJBDW6anDVXen6wZszYxYBiYgtFGst3VSDunKjpS0GpUlqfjVpsVVs6aaL0or4YxMVFCJZ2ZLdPUP+gq5bQnTxtNAkfTnlhnnlkmQy9yV9780rudt77tzv5/y4v4bQ4Y06XD/2ANodwec/AiJygJnvtdvTWfPnRkBEJAiCN8rl8kMfiPn5+Ve7u7v3rays0Orq6lJfX99/PuN2auMDoAD+BvA2M6/mTWSMOUtE48D6AjHGzN/kjdlNvy+AnWOOmQ/lTSYiEwDOWzsimgrDcCRvzG76GwGw8/zJzO9sN6GInAMwbW1UdSSKoqndCMwb6wNwGsB39Q+p6h/M/C4R2dTa1AoHYBWKyCkA1+pqiWi2Wq0e7e/vf7yRoJAAKcQggMtuJKIoOtoxACnE0/xOi/SXMAxPuhCFjUBdpIjYVWXSEf0TM3/g9BeriDMKdSPEz8z8vrU1xgwT0YXCrEJZy1iSJKOqOub0/8jMA0mSfKKqNwoPkHp7ioiGHIhRIvpHVa93BEBa2JcAfOlALAHo6RgAKzRJkk9V1S6xL7kpV4idOM31taxaIKJHqmpPnMMA9hcOQES2PDJkAT1XAAC+ZebPfWB3auNzmLObVsNRUNUXVHUujuM7OxXnMy4XwOcj29mIyOuq+lapVGrYCelKpkEQ3CyXy4tbzdN0AGPMxr2iYZ+sra3FcRybtgCIiK2BKw2rdgaUSqWoUqlIkQAepFDdAF7cBq5ERI9rtdr1OI7tmE2t6SmUEYFHAEaexYW/1QC2EF+ru5GIvg7D0D2GNJxprQY4o6qv1I/b6SpzOYqiLxpWng5oOQAzXxWRWwA+dkRfYOb1p5hGW6sBJpn5KytSRG4D+KguWFXHoyhy7xdeLC0F2ChSRL4H8OFuINoKYIUbY34gogHH3eeZef1K6tPaDpCm068A3nMEDzHzxY4BUNWSiPxORO6z5aDPPlGICNQ9bYyZIaLjjudzIQoFkKbTbwCO+UI0HcB9J/LdeY0xs0R02IGYYObRrWqiFQCfEZEtSHsfmGZm+4qxbbM/hQD8BeBNa0hEM2EYnmgLgP3lFARBT1dXly4vL//b29tbzQNIU+llAHeJaLFSqRzJes5vegR8xGbZLCwsHKzVav8z8/0sm0ID+MDvAfh4qZk2exFopnd9vv0ELrXBQO7fD10AAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreenExit:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+2Zy49NQRCHvx+ReK6IlZ34E7CUiCAR4xEbTLCyQRATYswwb2IQZDYWgojHZpCQECts+ResiQwLj0RClNSkb9Lu3HtPz7mZc8+V6eXt6tP1VVV3VdcVbT7U5vozC9BqD/7/HjCzlZLet9rS9fbP9ICZvQPWSfqRAmFmS4ClMHm+JiR9S1mXVyYFwIBXwEZJv7I2MrPjQH8A6JN0OWtNM/OpAL7HS0mbsjYzswGgN8gNS+rJWtPM/HQAfJ9nkrY22tDMTgMjQaZH0nAzCmatTQE4ClyNPvQU2CbJQ2vKKB2Aa2hmR4DrkbbPgQ5Jv6sJSgkQILqA0dgTkjraBiBAxPHtPz2UtDuGKK0HKkqamd8qg5HS9yXtjebLdYjrHNRqiAeS9gQvnQGGSnML1bvGzOwc0BfN35PUaWYHgRulBwjW9ju+O4JwqM/AWFsABIgLwKkIYgJY1jYAAeJQuGIXVIVcKTKxh8WfBin9J+AVpx/eFWUEqFkyNACKp0rhgWYArkg6kQibSyylmPOklQdibijBX+fSLHFRJkDid+qKmdlaYENOI0zeEcBNSZ9qbVIEQHWuyGOTNZLetgrAz8ClPFpHa1ZL8rf5lFGEB2oBfAxQi4D5DeDmAP7mGJPka0oD4LnDr9imH/xFe8AP4vLIjBclxWXItCOtaIBjwOKo3HaFRyWdnLbmYUHhAJKumdkt4ECk9JCkSitmWixFAwxKOjt5uZvdBvZH2vZLit8XSSBFA/yjpJndAfY1A9FSgOCJu0BnBNErqfIkzfRCywECxCNgR6Rtt6TzmdqHBmyKXG4ZM4sTWc04NzNPWE+AuG3ZlZInSuGBinXMbBzYGVkrE6JUACGcHgPbUyGKAIj7REmZ18y897o5ghiQ5E/bltRChwE/kF7Xj0jyLkbDYWbzgBfA+iA4LmlXqwD8LydvszjAF0lfswBCKC0E3gBeP22p186f8RBKUbaejJmtAr5L+lBPptQAKfCzAClWmkmZWQ/MpHVTvv0X9iFAQGQyevIAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-audio{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrUlEQVRoQ+2ZPYgTURCAZzbBXJnCeL2Cnb87b9MEtPBUrrMQFAtrtT5/ClGs9LBWWz0RtbBUFCF4oJDsbO68wsLA2YqQSmLlvpEHu7IuMdlLcus+yUKKhJfZ+ebnvZl5CJY/aLn+MAP41x7M1QPMfFtr/crzvHfTAs8FoNPp1LTWzwHgqIg0lFLvrQHwfX8BER8DwC6jNCIecF13wwoA3/dvIuKNpLJa60Oe560XGoCZd4rICiKeTCtaeABmPg4AJmRqg6xcaABmvg4At4aFRyEBhoVM4UMoCplHADCfJTEL5YEsIVNID5iQAYCHALCYxeq5b6PMfF5EBAAEESthGK7W6/XPRpFWq7W3VCqtZg2ZcT3g+/6i4zjzIlLSWn/yPO/DIGMNLCWY2Sj/+xGRK0qpZfNDEASnROTFVi0fr8+aA8z8Ld6KEfGt67oLYwMAwEUium8EREn7OgeAjwCwPyo/nrque3YSgAtE9GDaAM1mc65arc4Zuf1+P2w0Gt9jJZl5DQAORt+fENG5wgEw8zUAMB/zbBBRwyqAIAjuiMjlSOlNItpjFUCqWl0josMzgChR/9hGAWBbknjmAdPhDdqa0gfZzAMJKyVP4v8hhJYRcSni+0JEu63ahZj5anyQici6UuqIVQDdbrfS6/UqRulyufyTiH5sF8AlIro37VpoWEHIzGZ2tM+sEZFnSqkzk9RCS0R01wjIsZz+mug53hDRia0AnI4bGgDYISItz/M2jYC8Gpp2u30MEWuO4zha665Sqp0ZYFStX/iWchRAItFGzoHSsrJ2ZFl1mHg6bfVYJeGJv85CC++BpIJZ5kSFC6G0ha0e7mYJqcJ7IOkRay84UhD2XjHFIFZf8iW9YcYoYRi+tO6aNeupOs66iU/icV46zf/MAKZpzXFk/QL+JG1PUPhRiQAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-audio:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACSElEQVRoQ+2Zu4sUQRCHf5+C+gf4yBXMfMYHGvjCzEBQDIzV+HwEohipGKupD0QNDE8UEwUFTe68wEDhTMVUMFJ+0tArzbjs9u3Ojt0wBR0M9MzUV1XdXVWNKhcq1189wP/2YKcesH1d0nPgdVvgnQDY3iTpqaT9kuaAt9UA2D4o6aGkzVHpXcByFQC2r0q60lB2D7BUNIDtjZIeSDoyRNGyAWwfiiET4n6YlAtg+7Kka2PCozyAMSHT5CkLIIbMfUlbMhdmOQCZIVOeB2LI3JN0NNPq6bTZe8D2aUmOY72kN8DnoIXt7eF5FSEzkQdsB+OEsFwr6RPwbpixhqYStoPyqVwAbkaAY5KeTWD5wStZHrD9XdJgK34FhBP9H8kFOAvciQBhn3/RAcBHSTvjfx4DJ6cBOAPcbRvA9gZJYQT5DfwYKGl7UdLu+PwIOFUiwCVJYQRZBuZqA7gh6XxUegXYVhtAmq0uAnt7gLhQm9vorBZx74Hcc6D3QLKH/z2JGyVnlYs4pCfzEe4rsLW2XehicpAtAftqAwiZbhhBfgE/ZwVwDrjddi40KiG0HXpHO+KcJ8CJaXKheeBWBOgqnf6W1BwvgcOrATieFDTrJL0HViJAVwXNgVgPrJH0BfiQDTDKtREiNK7KLSnHASQLLacP1PxcVkWWq8PU3emq2yqJJ0b1Qsv2QKpdZp+orBBqmrfq5m5mSJXtgUZI1XnB0YCo94opCal6L/ka3ghtlIXqrllzT9VJ5k19Ek/y0zbf6QHatOYk3/oDujC8QMWgjf4AAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-mute{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-mute:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-text{font-size:14px;width:30px}.jessibuca-container .jessibuca-speed{font-size:14px;color:#fff}.jessibuca-container .jessibuca-quality-menu-list{position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%);transition:visibility .3s,opacity .3s;background-color:rgba(0,0,0,.5);border-radius:4px}.jessibuca-container .jessibuca-quality-menu-list.jessibuca-quality-menu-shown{visibility:visible;opacity:1}.jessibuca-container .icon-title-tips{pointer-events:none;position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%);transition:visibility .3s ease 0s,opacity .3s ease 0s;background-color:rgba(0,0,0,.5);border-radius:4px}.jessibuca-container .icon-title{display:inline-block;padding:5px 10px;font-size:12px;white-space:nowrap;color:#fff}.jessibuca-container .jessibuca-quality-menu{padding:8px 0}.jessibuca-container .jessibuca-quality-menu-item{display:block;height:25px;margin:0;padding:0 10px;cursor:pointer;font-size:14px;text-align:center;width:50px;color:hsla(0,0%,100%,.5);transition:color .3s,background-color .3s}.jessibuca-container .jessibuca-quality-menu-item:hover{background-color:hsla(0,0%,100%,.2)}.jessibuca-container .jessibuca-quality-menu-item:focus{outline:none}.jessibuca-container .jessibuca-quality-menu-item.jessibuca-quality-menu-item-active{color:#2298fc}.jessibuca-container .jessibuca-volume-panel-wrap{position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%) translateY(22%);transition:visibility .3s,opacity .3s;background-color:rgba(0,0,0,.5);border-radius:4px;height:120px;width:50px;overflow:hidden}.jessibuca-container .jessibuca-volume-panel-wrap.jessibuca-volume-panel-wrap-show{visibility:visible;opacity:1}.jessibuca-container .jessibuca-volume-panel{cursor:pointer;position:absolute;top:21px;height:60px;width:50px;overflow:hidden}.jessibuca-container .jessibuca-volume-panel-text{position:absolute;left:0;top:0;width:50px;height:20px;line-height:20px;text-align:center;color:#fff;font-size:12px}.jessibuca-container .jessibuca-volume-panel-handle{position:absolute;top:48px;left:50%;width:12px;height:12px;border-radius:12px;margin-left:-6px;background:#fff}.jessibuca-container .jessibuca-volume-panel-handle:before{bottom:-54px;background:#fff}.jessibuca-container .jessibuca-volume-panel-handle:after{bottom:6px;background:hsla(0,0%,100%,.2)}.jessibuca-container .jessibuca-volume-panel-handle:after,.jessibuca-container .jessibuca-volume-panel-handle:before{content:"";position:absolute;display:block;left:50%;width:3px;margin-left:-1px;height:60px}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-controls{width:100vh}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-play-big:after{transform:translate(-50%,-50%) rotate(270deg)}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-loading{flex-direction:row}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-loading-text{transform:rotate(270deg)}');

    class $e {
        constructor(e) {
            var t;
            this.player = e, ((e, t) => {
                e._opt.hasControl && e._opt.controlAutoHide ? e.$container.classList.add("jessibuca-controls-show-auto-hide") : e.$container.classList.add("jessibuca-controls-show");
                const i = e._opt, o = i.operateBtns;
                e.$container.insertAdjacentHTML("beforeend", `\n            ${i.background ? `<div class="jessibuca-poster" style="background-image: url(${i.background})"></div>` : ""}\n            <div class="jessibuca-loading">\n                ${Ze.loading}\n                ${i.loadingText ? `<div class="jessibuca-loading-text">${i.loadingText}</div>` : ""}\n            </div>\n            ${i.hasControl && o.play ? '<div class="jessibuca-play-big"></div>' : ""}\n            ${i.hasControl ? `\n                <div class="jessibuca-recording">\n                    <div class="jessibuca-recording-red-point"></div>\n                    <div class="jessibuca-recording-time">00:00:01</div>\n                    <div class="jessibuca-icon-recordStop jessibuca-recording-stop">${Ze.recordStop}</div>\n                </div>\n            ` : ""}\n            ${i.hasControl ? `\n                <div class="jessibuca-controls">\n                    <div class="jessibuca-controls-bottom">\n                        <div class="jessibuca-controls-left">\n                            ${i.showBandwidth ? '<div class="jessibuca-controls-item jessibuca-speed"></div>' : ""}\n                        </div>\n                        <div class="jessibuca-controls-right">\n                             ${o.audio ? `\n                                 <div class="jessibuca-controls-item jessibuca-volume">\n                                     ${Ze.audio}\n                                     ${Ze.mute}\n                                     <div class="jessibuca-volume-panel-wrap">\n                                          <div class="jessibuca-volume-panel">\n                                                 <div class="jessibuca-volume-panel-handle"></div>\n                                          </div>\n                                          <div class="jessibuca-volume-panel-text"></div>\n                                     </div>\n                                 </div>\n                             ` : ""}\n                             ${o.play ? `<div class="jessibuca-controls-item jessibuca-play">${Ze.play}</div><div class="jessibuca-controls-item jessibuca-pause">${Ze.pause}</div>` : ""}\n                             ${o.screenshot ? `<div class="jessibuca-controls-item jessibuca-screenshot">${Ze.screenshot}</div>` : ""}\n                             ${o.record ? ` <div class="jessibuca-controls-item jessibuca-record">${Ze.record}</div><div class="jessibuca-controls-item jessibuca-record-stop">${Ze.recordStop}</div>` : ""}\n                             ${o.fullscreen ? `<div class="jessibuca-controls-item jessibuca-fullscreen">${Ze.fullscreen}</div><div class="jessibuca-controls-item jessibuca-fullscreen-exit">${Ze.fullscreenExit}</div>` : ""}\n                        </div>\n                    </div>\n                </div>\n            ` : ""}\n\n        `), Object.defineProperty(t, "$poster", {value: e.$container.querySelector(".jessibuca-poster")}), Object.defineProperty(t, "$loading", {value: e.$container.querySelector(".jessibuca-loading")}), Object.defineProperty(t, "$play", {value: e.$container.querySelector(".jessibuca-play")}), Object.defineProperty(t, "$playBig", {value: e.$container.querySelector(".jessibuca-play-big")}), Object.defineProperty(t, "$recording", {value: e.$container.querySelector(".jessibuca-recording")}), Object.defineProperty(t, "$recordingTime", {value: e.$container.querySelector(".jessibuca-recording-time")}), Object.defineProperty(t, "$recordingStop", {value: e.$container.querySelector(".jessibuca-recording-stop")}), Object.defineProperty(t, "$pause", {value: e.$container.querySelector(".jessibuca-pause")}), Object.defineProperty(t, "$controls", {value: e.$container.querySelector(".jessibuca-controls")}), Object.defineProperty(t, "$fullscreen", {value: e.$container.querySelector(".jessibuca-fullscreen")}), Object.defineProperty(t, "$fullscreen", {value: e.$container.querySelector(".jessibuca-fullscreen")}), Object.defineProperty(t, "$volume", {value: e.$container.querySelector(".jessibuca-volume")}), Object.defineProperty(t, "$volumePanelWrap", {value: e.$container.querySelector(".jessibuca-volume-panel-wrap")}), Object.defineProperty(t, "$volumePanelText", {value: e.$container.querySelector(".jessibuca-volume-panel-text")}), Object.defineProperty(t, "$volumePanel", {value: e.$container.querySelector(".jessibuca-volume-panel")}), Object.defineProperty(t, "$volumeHandle", {value: e.$container.querySelector(".jessibuca-volume-panel-handle")}), Object.defineProperty(t, "$volumeOn", {value: e.$container.querySelector(".jessibuca-icon-audio")}), Object.defineProperty(t, "$volumeOff", {value: e.$container.querySelector(".jessibuca-icon-mute")}), Object.defineProperty(t, "$fullscreen", {value: e.$container.querySelector(".jessibuca-fullscreen")}), Object.defineProperty(t, "$fullscreenExit", {value: e.$container.querySelector(".jessibuca-fullscreen-exit")}), Object.defineProperty(t, "$record", {value: e.$container.querySelector(".jessibuca-record")}), Object.defineProperty(t, "$recordStop", {value: e.$container.querySelector(".jessibuca-record-stop")}), Object.defineProperty(t, "$screenshot", {value: e.$container.querySelector(".jessibuca-screenshot")}), Object.defineProperty(t, "$speed", {value: e.$container.querySelector(".jessibuca-speed")})
            })(e, this), t = this, Object.defineProperty(t, "controlsRect", {get: () => t.$controls.getBoundingClientRect()}), Ke(e, this), ((e, t) => {
                const {events: {proxy: i}, debug: o} = e;

                function r(e) {
                    const {
                        bottom: i,
                        height: o
                    } = t.$volumePanel.getBoundingClientRect(), {height: r} = t.$volumeHandle.getBoundingClientRect();
                    return ue(i - e.y - r / 2, 0, o - r / 2) / (o - r)
                }

                i(window, ["click", "contextmenu"], (i => {
                    i.composedPath().indexOf(e.$container) > -1 ? t.isFocus = !0 : t.isFocus = !1
                })), i(window, "orientationchange", (() => {
                    setTimeout((() => {
                        e.resize()
                    }), 300)
                })), i(t.$controls, "click", (e => {
                    e.stopPropagation()
                })), i(t.$pause, "click", (t => {
                    e.pause()
                })), i(t.$play, "click", (t => {
                    e.play(), e.resumeAudioAfterPause()
                })), i(t.$playBig, "click", (t => {
                    e.play(), e.resumeAudioAfterPause()
                })), i(t.$volume, "mouseover", (() => {
                    t.$volumePanelWrap.classList.add("jessibuca-volume-panel-wrap-show")
                })), i(t.$volume, "mouseout", (() => {
                    t.$volumePanelWrap.classList.remove("jessibuca-volume-panel-wrap-show")
                })), i(t.$volumeOn, "click", (i => {
                    i.stopPropagation(), he(t.$volumeOn, "display", "none"), he(t.$volumeOff, "display", "block");
                    const o = e.volume;
                    e.volume = 0, e._lastVolume = o
                })), i(t.$volumeOff, "click", (i => {
                    i.stopPropagation(), he(t.$volumeOn, "display", "block"), he(t.$volumeOff, "display", "none"), e.volume = e.lastVolume || .5
                })), i(t.$screenshot, "click", (t => {
                    t.stopPropagation(), e.video.screenshot()
                })), i(t.$volumePanel, "click", (t => {
                    t.stopPropagation(), e.volume = r(t)
                })), i(t.$volumeHandle, "mousedown", (() => {
                    t.isVolumeDroging = !0
                })), i(t.$volumeHandle, "mousemove", (i => {
                    t.isVolumeDroging && (e.volume = r(i))
                })), i(document, "mouseup", (() => {
                    t.isVolumeDroging && (t.isVolumeDroging = !1)
                })), i(t.$record, "click", (t => {
                    t.stopPropagation(), e.recording = !0
                })), i(t.$recordStop, "click", (t => {
                    t.stopPropagation(), e.recording = !1
                })), i(t.$recordingStop, "click", (t => {
                    t.stopPropagation(), e.recording = !1
                })), i(t.$fullscreen, "click", (t => {
                    t.stopPropagation(), e.fullscreen = !0
                })), i(t.$fullscreenExit, "click", (t => {
                    t.stopPropagation(), e.fullscreen = !1
                })), e._opt.hasControl && e._opt.controlAutoHide && (i(e.$container, "mouseover", (() => {
                    e.fullscreen || he(t.$controls, "display", "block")
                })), i(e.$container, "mouseout", (() => {
                    he(t.$controls, "display", "none")
                })))
            })(e, this), e._opt.hotKey && ((e, t) => {
                const {events: {proxy: i}} = e, o = {};

                function r(e, t) {
                    o[e] ? o[e].push(t) : o[e] = [t]
                }

                r(te, (() => {
                    e.fullscreen && (e.fullscreen = !1)
                })), r(ie, (() => {
                    e.volume += .05
                })), r(oe, (() => {
                    e.volume -= .05
                })), i(window, "keydown", (e => {
                    if (t.isFocus) {
                        const t = document.activeElement.tagName.toUpperCase(),
                            i = document.activeElement.getAttribute("contenteditable");
                        if ("INPUT" !== t && "TEXTAREA" !== t && "" !== i && "true" !== i) {
                            const t = o[e.keyCode];
                            t && (e.preventDefault(), t.forEach((e => e())))
                        }
                    }
                }))
            })(e, this), this.player.debug.log("Control", "init")
        }

        destroy() {
            this.$poster && this.player.$container.removeChild(this.$poster), this.$loading && this.player.$container.removeChild(this.$loading), this.$controls && this.player.$container.removeChild(this.$controls), this.$playBig && this.player.$container.removeChild(this.$playBig), this.player.debug.log("control", "destroy")
        }

        autoSize() {
            const e = this.player;
            e.$container.style.padding = "0 0";
            const t = e.width, i = e.height, o = t / i, r = e.video.$videoElement.width / e.video.$videoElement.height;
            if (o > r) {
                const o = (t - i * r) / 2;
                e.$container.style.padding = `0 ${o}px`
            } else {
                const o = (i - t / r) / 2;
                e.$container.style.padding = `${o}px 0`
            }
        }
    }

    _e(".jessibuca-container{position:relative;display:block;width:100%;height:100%;overflow:hidden}.jessibuca-container.jessibuca-fullscreen-web{position:fixed;z-index:9999;left:0;top:0;right:0;bottom:0;width:100vw!important;height:100vh!important;background:#000}");
    var et = e => {
        const {_opt: t, debug: i, events: {proxy: o}} = e;
        t.supportDblclickFullscreen && o(e.$container, "dblclick", (t => {
            const i = function (e) {
                const t = e || window.event;
                return t.target || t.srcElement
            }(t), o = i.nodeName.toLowerCase();
            "canvas" !== o && "video" !== o || (e.fullscreen = !e.fullscreen)
        })), o(document, "visibilitychange", (() => {
            t.hiddenAutoPause && (i.log("visibilitychange", document.visibilityState, e._isPlayingBeforePageHidden), "visible" === document.visibilityState ? e._isPlayingBeforePageHidden && e.play() : (e._isPlayingBeforePageHidden = e.playing, e.playing && e.pause()))
        })), o(window, "fullscreenchange", (() => {
            null !== e.keepScreenOn && "visible" === document.visibilityState && e.enableWakeLock()
        }))
    };

    class tt {
        static init() {
            tt.types = {
                avc1: [],
                avcC: [],
                hvc1: [],
                hvcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: [],
                smhd: []
            };
            for (let e in tt.types) tt.types.hasOwnProperty(e) && (tt.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
            let e = tt.constants = {};
            e.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), e.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), e.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSC = e.STCO = e.STTS, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), e.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), e.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }

        static box(e) {
            let t = 8, i = null, o = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (let e = 0; e < r; e++) t += o[e].byteLength;
            i = new Uint8Array(t), i[0] = t >>> 24 & 255, i[1] = t >>> 16 & 255, i[2] = t >>> 8 & 255, i[3] = 255 & t, i.set(e, 4);
            let s = 8;
            for (let e = 0; e < r; e++) i.set(o[e], s), s += o[e].byteLength;
            return i
        }

        static generateInitSegment(e) {
            let t = tt.box(tt.types.ftyp, tt.constants.FTYP), i = tt.moov(e),
                o = new Uint8Array(t.byteLength + i.byteLength);
            return o.set(t, 0), o.set(i, t.byteLength), o
        }

        static moov(e) {
            let t = tt.mvhd(e.timescale, e.duration), i = tt.trak(e), o = tt.mvex(e);
            return tt.box(tt.types.moov, t, i, o)
        }

        static mvhd(e, t) {
            return tt.box(tt.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
        }

        static trak(e) {
            return tt.box(tt.types.trak, tt.tkhd(e), tt.mdia(e))
        }

        static tkhd(e) {
            let t = e.id, i = e.duration, o = e.presentWidth, r = e.presentHeight;
            return tt.box(tt.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, o >>> 8 & 255, 255 & o, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]))
        }

        static mdia(e) {
            return tt.box(tt.types.mdia, tt.mdhd(e), tt.hdlr(e), tt.minf(e))
        }

        static mdhd(e) {
            let t = e.timescale, i = e.duration;
            return tt.box(tt.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]))
        }

        static hdlr(e) {
            let t = null;
            return t = "audio" === e.type ? tt.constants.HDLR_AUDIO : tt.constants.HDLR_VIDEO, tt.box(tt.types.hdlr, t)
        }

        static minf(e) {
            let t = null;
            return t = "audio" === e.type ? tt.box(tt.types.smhd, tt.constants.SMHD) : tt.box(tt.types.vmhd, tt.constants.VMHD), tt.box(tt.types.minf, t, tt.dinf(), tt.stbl(e))
        }

        static dinf() {
            return tt.box(tt.types.dinf, tt.box(tt.types.dref, tt.constants.DREF))
        }

        static stbl(e) {
            return tt.box(tt.types.stbl, tt.stsd(e), tt.box(tt.types.stts, tt.constants.STTS), tt.box(tt.types.stsc, tt.constants.STSC), tt.box(tt.types.stsz, tt.constants.STSZ), tt.box(tt.types.stco, tt.constants.STCO))
        }

        static stsd(e) {
            return "audio" === e.type ? tt.box(tt.types.stsd, tt.constants.STSD_PREFIX, tt.mp4a(e)) : "avc" === e.videoType ? tt.box(tt.types.stsd, tt.constants.STSD_PREFIX, tt.avc1(e)) : tt.box(tt.types.stsd, tt.constants.STSD_PREFIX, tt.hvc1(e))
        }

        static mp4a(e) {
            let t = e.channelCount, i = e.audioSampleRate,
                o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
            return tt.box(tt.types.mp4a, o, tt.esds(e))
        }

        static esds(e) {
            let t = e.config || [], i = t.length,
                o = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(t).concat([6, 1, 2]));
            return tt.box(tt.types.esds, o)
        }

        static avc1(e) {
            let t = e.avcc;
            const i = e.codecWidth, o = e.codecHeight;
            let r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, o >>> 8 & 255, 255 & o, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return tt.box(tt.types.avc1, r, tt.box(tt.types.avcC, t))
        }

        static hvc1(e) {
            let t = e.avcc;
            const i = e.codecWidth, o = e.codecHeight;
            let r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, o >>> 8 & 255, 255 & o, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return tt.box(tt.types.hvc1, r, tt.box(tt.types.hvcC, t))
        }

        static mvex(e) {
            return tt.box(tt.types.mvex, tt.trex(e))
        }

        static trex(e) {
            let t = e.id,
                i = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return tt.box(tt.types.trex, i)
        }

        static moof(e, t) {
            return tt.box(tt.types.moof, tt.mfhd(e.sequenceNumber), tt.traf(e, t))
        }

        static mfhd(e) {
            let t = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
            return tt.box(tt.types.mfhd, t)
        }

        static traf(e, t) {
            let i = e.id,
                o = tt.box(tt.types.tfhd, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])),
                r = tt.box(tt.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
                s = tt.sdtp(e), a = tt.trun(e, s.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
            return tt.box(tt.types.traf, o, r, a, s)
        }

        static sdtp(e) {
            let t = new Uint8Array(5), i = e.flags;
            return t[4] = i.isLeading << 6 | i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy, tt.box(tt.types.sdtp, t)
        }

        static trun(e, t) {
            let i = new Uint8Array(28);
            t += 36, i.set([0, 0, 15, 1, 0, 0, 0, 1, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
            let o = e.duration, r = e.size, s = e.flags, a = e.cts;
            return i.set([o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.isNonSync, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a], 12), tt.box(tt.types.trun, i)
        }

        static mdat(e) {
            return tt.box(tt.types.mdat, e)
        }
    }

    tt.init();

    class it extends we {
        constructor(e) {
            super(), this.player = e, this.isAvc = !0, this.mediaSource = new window.MediaSource, this.sourceBuffer = null, this.hasInit = !1, this.isInitInfo = !1, this.cacheTrack = {}, this.timeInit = !1, this.sequenceNumber = 0, this.mediaSourceOpen = !1, this.dropping = !1, this.firstRenderTime = null, this.mediaSourceAppendBufferError = !1, this.mediaSourceAppendBufferFull = !1, this.isDecodeFirstIIframe = !1, this.player.video.$videoElement.src = window.URL.createObjectURL(this.mediaSource);
            const {debug: t, events: {proxy: i}} = e;
            i(this.mediaSource, "sourceopen", (() => {
                this.mediaSourceOpen = !0, this.player.emit(T.mseSourceOpen)
            })), i(this.mediaSource, "sourceclose", (() => {
                this.player.emit(T.mseSourceClose)
            })), e.debug.log("MediaSource", "init")
        }

        destroy() {
            this.stop(), this.mediaSource = null, this.mediaSourceOpen = !1, this.sourceBuffer = null, this.hasInit = !1, this.isInitInfo = !1, this.sequenceNumber = 0, this.cacheTrack = null, this.timeInit = !1, this.mediaSourceAppendBufferError = !1, this.mediaSourceAppendBufferFull = !1, this.isDecodeFirstIIframe = !1, this.off(), this.player.debug.log("MediaSource", "destroy")
        }

        get state() {
            return this.mediaSource && this.mediaSource.readyState
        }

        get isStateOpen() {
            return this.state === _
        }

        get isStateClosed() {
            return this.state === $
        }

        get isStateEnded() {
            return this.state === K
        }

        get duration() {
            return this.mediaSource && this.mediaSource.duration
        }

        set duration(e) {
            this.mediaSource.duration = e
        }

        decodeVideo(e, t, i, o) {
            const r = this.player;
            if (r) if (this.hasInit) {
                if (i && 0 === e[1]) {
                    e[0];
                    let t = {};
                    t = Ye(e);
                    const i = this.player.video.videoInfo;
                    t.codecWidth === i.width && t.codecHeight === i.height || (this.player.debug.warn("MediaSource", `width or height is update, width ${i.width}-> ${t.codecWidth}, height ${i.height}-> ${t.codecHeight}`), this.isInitInfo = !1, this.player.video.init = !1)
                }
                if (!this.isDecodeFirstIIframe && i && (this.isDecodeFirstIIframe = !0), this.isDecodeFirstIIframe) {
                    null === this.firstRenderTime && (this.firstRenderTime = t);
                    const r = t - this.firstRenderTime;
                    this._decodeVideo(e, r, i, o)
                } else this.player.debug.warn("MediaSource", "decodeVideo isDecodeFirstIIframe false")
            } else if (i && 0 === e[1]) {
                const o = 15 & e[0];
                if (r.video.updateVideoInfo({encTypeCode: o}), o === M) return void this.emit(x.mediaSourceH265NotSupport);
                r._times.decodeStart || (r._times.decodeStart = le()), this._decodeConfigurationRecord(e, t, i, o), this.hasInit = !0
            }
        }

        _decodeConfigurationRecord(e, t, i, o) {
            let r = e.slice(5), s = {};
            s = Ye(r);
            const a = {
                id: 1,
                type: "video",
                timescale: 1e3,
                duration: 0,
                avcc: r,
                codecWidth: s.codecWidth,
                codecHeight: s.codecHeight,
                videoType: s.videoType
            }, n = tt.generateInitSegment(a);
            this.isAvc = !0, this.appendBuffer(n.buffer), this.sequenceNumber = 0, this.cacheTrack = null, this.timeInit = !1
        }

        _decodeVideo(e, t, i, o) {
            const r = this.player;
            let s = e.slice(5), a = s.byteLength;
            const n = r.video.$videoElement, A = r._opt.videoBufferDelay;
            if (n.buffered.length > 1 && (this.removeBuffer(n.buffered.start(0), n.buffered.end(0)), this.timeInit = !1), this.dropping && t - this.cacheTrack.dts > A) this.dropping = !1, this.cacheTrack = {}; else if (this.cacheTrack && t >= this.cacheTrack.dts) {
                let e = 8 + this.cacheTrack.size, i = new Uint8Array(e);
                i[0] = e >>> 24 & 255, i[1] = e >>> 16 & 255, i[2] = e >>> 8 & 255, i[3] = 255 & e, i.set(tt.types.mdat, 4), i.set(this.cacheTrack.data, 8), this.cacheTrack.duration = t - this.cacheTrack.dts;
                let o = tt.moof(this.cacheTrack, this.cacheTrack.dts), s = new Uint8Array(o.byteLength + i.byteLength);
                s.set(o, 0), s.set(i, o.byteLength), this.appendBuffer(s.buffer), r.handleRender(), r.updateStats({
                    fps: !0,
                    ts: t,
                    buf: r.demux && r.demux.delay || 0
                }), r._times.videoStart || (r._times.videoStart = le(), r.handlePlayToRenderTimes())
            } else r.debug.log("MediaSource", "timeInit set false , cacheTrack = {}"), this.timeInit = !1, this.cacheTrack = {};
            this.cacheTrack || (this.cacheTrack = {}), this.cacheTrack.id = 1, this.cacheTrack.sequenceNumber = ++this.sequenceNumber, this.cacheTrack.size = a, this.cacheTrack.dts = t, this.cacheTrack.cts = o, this.cacheTrack.isKeyframe = i, this.cacheTrack.data = s, this.cacheTrack.flags = {
                isLeading: 0,
                dependsOn: i ? 2 : 1,
                isDependedOn: i ? 1 : 0,
                hasRedundancy: 0,
                isNonSync: i ? 0 : 1
            }, this.timeInit || 1 !== n.buffered.length || (r.debug.log("MediaSource", "timeInit set true"), this.timeInit = !0, n.currentTime = n.buffered.end(0)), !this.isInitInfo && n.videoWidth > 0 && n.videoHeight > 0 && (r.debug.log("MediaSource", `updateVideoInfo: ${n.videoWidth},${n.videoHeight}`), r.video.updateVideoInfo({
                width: n.videoWidth,
                height: n.videoHeight
            }), r.video.initCanvasViewSize(), this.isInitInfo = !0)
        }

        appendBuffer(e) {
            const {debug: t, events: {proxy: i}} = this.player;
            if (null === this.sourceBuffer && (this.sourceBuffer = this.mediaSource.addSourceBuffer(Z), i(this.sourceBuffer, "error", (e => {
                this.player.emit(T.mseSourceBufferError, e)
            }))), this.mediaSourceAppendBufferError) t.error("MediaSource", "this.mediaSourceAppendBufferError is true"); else if (this.mediaSourceAppendBufferFull) t.error("MediaSource", "this.mediaSourceAppendBufferFull is true"); else if (!1 === this.sourceBuffer.updating && this.isStateOpen) try {
                this.sourceBuffer.appendBuffer(e)
            } catch (e) {
                t.warn("MediaSource", "this.sourceBuffer.appendBuffer()", e.code, e), 22 === e.code ? (this.stop(), this.mediaSourceAppendBufferFull = !0, this.emit(x.mediaSourceFull)) : 11 === e.code ? (this.stop(), this.mediaSourceAppendBufferError = !0, this.emit(x.mediaSourceAppendBufferError)) : (t.error("MediaSource", "appendBuffer error", e), this.player.emit(T.mseSourceBufferError, e))
            } else this.isStateClosed ? this.player.emit(x.mseSourceBufferError, "mediaSource is not attached to video or mediaSource is closed") : this.isStateEnded ? this.player.emit(x.mseSourceBufferError, "mediaSource is closed") : !0 === this.sourceBuffer.updating && this.player.emit(T.mseSourceBufferBusy)
        }

        stop() {
            this.abortSourceBuffer(), this.removeSourceBuffer(), this.endOfStream()
        }

        dropSourceBuffer(e) {
            const t = this.player.video.$videoElement;
            this.dropping = e, t.buffered.length > 0 && t.buffered.end(0) - t.currentTime > 1 && (this.player.debug.warn("MediaSource", "dropSourceBuffer", `$video.buffered.end(0) is ${t.buffered.end(0)} - $video.currentTime ${t.currentTime}`), t.currentTime = t.buffered.end(0))
        }

        removeBuffer(e, t) {
            if (this.isStateOpen && !1 === this.sourceBuffer.updating) try {
                this.sourceBuffer.remove(e, t)
            } catch (e) {
                this.player.debug.warn("MediaSource", "removeBuffer() error", e)
            } else this.player.debug.warn("MediaSource", "removeBuffer() this.isStateOpen is", this.isStateOpen, "this.sourceBuffer.updating", this.sourceBuffer.updating)
        }

        endOfStream() {
            if (this.isStateOpen) try {
                this.mediaSource.endOfStream()
            } catch (e) {
                this.player.debug.warn("MediaSource", "endOfStream() error", e)
            }
        }

        abortSourceBuffer() {
            this.isStateOpen && this.sourceBuffer && (this.sourceBuffer.abort(), this.sourceBuffer = null)
        }

        removeSourceBuffer() {
            if (!this.isStateClosed && this.mediaSource && this.sourceBuffer) try {
                this.mediaSource.removeSourceBuffer(this.sourceBuffer)
            } catch (e) {
                this.player.debug.warn("MediaSource", "removeSourceBuffer() error", e)
            }
        }
    }

    const ot = () => "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream,
        rt = () => "wakeLock" in navigator;

    class st {
        constructor(e) {
            if (this.player = e, this.enabled = !1, rt()) {
                this._wakeLock = null;
                const e = () => {
                    null !== this._wakeLock && "visible" === document.visibilityState && this.enable()
                };
                document.addEventListener("visibilitychange", e), document.addEventListener("fullscreenchange", e)
            } else ot() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", "data:video/webm;base64,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"), this._addSourceToVideo(this.noSleepVideo, "mp4", "data:video/mp4;base64,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"), this.noSleepVideo.addEventListener("loadedmetadata", (() => {
                this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", (() => {
                    this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
                }))
            })))
        }

        _addSourceToVideo(e, t, i) {
            var o = document.createElement("source");
            o.src = i, o.type = `video/${t}`, e.appendChild(o)
        }

        get isEnabled() {
            return this.enabled
        }

        enable() {
            const e = this.player.debug;
            if (rt()) return navigator.wakeLock.request("screen").then((t => {
                this._wakeLock = t, this.enabled = !0, e.log("wakeLock", "Wake Lock active."), this._wakeLock.addEventListener("release", (() => {
                    e.log("wakeLock", "Wake Lock released.")
                }))
            })).catch((t => {
                throw this.enabled = !1, e.error("wakeLock", `${t.name}, ${t.message}`), t
            }));
            if (ot()) return this.disable(), this.noSleepTimer = window.setInterval((() => {
                document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
            }), 15e3), this.enabled = !0, Promise.resolve();
            return this.noSleepVideo.play().then((e => (this.enabled = !0, e))).catch((e => {
                throw this.enabled = !1, e
            }))
        }

        disable() {
            const e = this.player.debug;
            rt() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : ot() ? this.noSleepTimer && (e.warn("wakeLock", "NoSleep now disabled for older iOS devices."), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1
        }
    }

    class at extends we {
        constructor(e, t) {
            var i;
            super(), this.$container = e, this._opt = Object.assign({}, d, t), this.debug = new ae(this), this._opt.useWCS && (this._opt.useWCS = "VideoEncoder" in window), this._opt.useMSE && (this._opt.useMSE = window.MediaSource && window.MediaSource.isTypeSupported(Z)), this._opt.wcsUseVideoRender && (this._opt.wcsUseVideoRender = window.MediaStreamTrackGenerator && "function" == typeof window.MediaStreamTrackGenerator), this._opt.useMSE && (this._opt.useWCS && this.debug.log("Player", "useWCS set true->false"), this._opt.forceNoOffscreen || this.debug.log("Player", "forceNoOffscreen set false->true"), this._opt.useWCS = !1, this._opt.forceNoOffscreen = !0), this._opt.forceNoOffscreen || ("undefined" == typeof OffscreenCanvas ? (this._opt.forceNoOffscreen = !0, this._opt.useOffscreen = !1) : this._opt.useOffscreen = !0), this._opt.hasAudio || (this._opt.operateBtns.audio = !1), this._opt.hasControl = this._hasControl(), this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._checkHeartTimeout = null, this._checkLoadingTimeout = null, this._checkStatsInterval = null, this._startBpsTime = null, this._isPlayingBeforePageHidden = !1, this._stats = {
                buf: 0,
                fps: 0,
                abps: 0,
                vbps: 0,
                ts: 0
            }, this._times = {
                playInitStart: "",
                playStart: "",
                streamStart: "",
                streamResponse: "",
                demuxStart: "",
                decodeStart: "",
                videoStart: "",
                playTimestamp: "",
                streamTimestamp: "",
                streamResponseTimestamp: "",
                demuxTimestamp: "",
                decodeTimestamp: "",
                videoTimestamp: "",
                allTimestamp: ""
            }, this._videoTimestamp = 0, this._audioTimestamp = 0, i = this, Object.defineProperty(i, "rect", {
                get: () => {
                    const e = i.$container.getBoundingClientRect();
                    return e.width = Math.max(e.width, i.$container.clientWidth), e.height = Math.max(e.height, i.$container.clientHeight), e
                }
            }), ["bottom", "height", "left", "right", "top", "width"].forEach((e => {
                Object.defineProperty(i, e, {get: () => i.rect[e]})
            })), this.events = new ne(this), this.video = new De(this), this._opt.hasAudio && (this.audio = new Le(this)), this.recorder = new Qe(this), this._onlyMseOrWcsVideo() ? this.loaded = !0 : this.decoderWorker = new We(this), this.stream = null, this.demux = null, this._lastVolume = null, this._opt.useWCS && (this.webcodecsDecoder = new Xe(this), this.loaded = !0), this._opt.useMSE && (this.mseDecoder = new it(this), this.loaded = !0), this.control = new $e(this), fe() && (this.keepScreenOn = new st(this)), (e => {
                try {
                    const t = t => {
                        t.target === e.$container && (e.emit(I.fullscreen, e.fullscreen), e.fullscreen ? e._opt.useMSE && e.resize() : e.resize())
                    };
                    Ae.on("change", t), e.events.destroys.push((() => {
                        Ae.off("change", t)
                    }))
                } catch (e) {
                }
                if (e.on(T.decoderWorkerInit, (() => {
                    e.debug.log("player", "has loaded"), e.loaded = !0
                })), e.on(T.play, (() => {
                    e.loading = !1
                })), e.on(T.fullscreen, (t => {
                    if (t) try {
                        Ae.request(e.$container).then((() => {
                        })).catch((t => {
                            e.webFullscreen = !0
                        }))
                    } catch (t) {
                        e.webFullscreen = !0
                    } else try {
                        Ae.exit().then((() => {
                        })).catch((() => {
                            e.webFullscreen = !1
                        }))
                    } catch (t) {
                        e.webFullscreen = !1
                    }
                })), e.on(T.webFullscreen, (t => {
                    t ? e.$container.classList.add("jessibuca-fullscreen-web") : e.$container.classList.remove("jessibuca-fullscreen-web"), e.emit(I.fullscreen, e.fullscreen)
                })), e.on(T.resize, (() => {
                    e.video.resize()
                })), e._opt.debug) {
                    const t = [T.timeUpdate];
                    Object.keys(T).forEach((i => {
                        e.on(T[i], (o => {
                            t.includes(i) || e.debug.log("player events", T[i], o)
                        }))
                    })), Object.keys(x).forEach((t => {
                        e.on(x[t], (i => {
                            e.debug.log("player event error", x[t], i)
                        }))
                    }))
                }
            })(this), et(this), this._opt.useWCS && this.debug.log("Player", "use WCS"), this._opt.useMSE && this.debug.log("Player", "use MSE"), this._opt.useOffscreen && this.debug.log("Player", "use offscreen"), this.debug.log("Player options", this._opt)
        }

        destroy() {
            this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._lastVolume = null, this._times = {
                playInitStart: "",
                playStart: "",
                streamStart: "",
                streamResponse: "",
                demuxStart: "",
                decodeStart: "",
                videoStart: "",
                playTimestamp: "",
                streamTimestamp: "",
                streamResponseTimestamp: "",
                demuxTimestamp: "",
                decodeTimestamp: "",
                videoTimestamp: "",
                allTimestamp: ""
            }, this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null), this.video && (this.video.destroy(), this.video = null), this.audio && (this.audio.destroy(), this.audio = null), this.stream && (this.stream.destroy(), this.stream = null), this.recorder && (this.recorder.destroy(), this.recorder = null), this.control && (this.control.destroy(), this.control = null), this.webcodecsDecoder && (this.webcodecsDecoder.destroy(), this.webcodecsDecoder = null), this.mseDecoder && (this.mseDecoder.destroy(), this.mseDecoder = null), this.demux && (this.demux.destroy(), this.demux = null), this.events && (this.events.destroy(), this.events = null), this.clearCheckHeartTimeout(), this.clearCheckLoadingTimeout(), this.clearStatsInterval(), this.releaseWakeLock(), this.keepScreenOn = null, this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, this.emit("destroy"), this.off(), this.debug.log("play", "destroy end")
        }

        set fullscreen(e) {
            fe() ? (this.emit(T.webFullscreen, e), setTimeout((() => {
                this.updateOption({rotate: e ? 270 : 0}), this.resize()
            }), 10)) : this.emit(T.fullscreen, e)
        }

        get fullscreen() {
            return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen || this.webFullscreen
        }

        set webFullscreen(e) {
            this.emit(T.webFullscreen, e)
        }

        get webFullscreen() {
            return this.$container.classList.contains("jessibuca-fullscreen-web")
        }

        set loaded(e) {
            this._hasLoaded = e
        }

        get loaded() {
            return this._hasLoaded
        }

        set playing(e) {
            e && (this.loading = !1), this.playing !== e && (this._playing = e, this.emit(T.playing, e), this.emit(T.volumechange, this.volume), e ? this.emit(T.play) : this.emit(T.pause))
        }

        get playing() {
            return this._playing
        }

        get volume() {
            return this.audio && this.audio.volume || 0
        }

        set volume(e) {
            e !== this.volume && (this.audio && this.audio.setVolume(e), this._lastVolume = e)
        }

        get lastVolume() {
            return this._lastVolume
        }

        set loading(e) {
            this.loading !== e && (this._loading = e, this.emit(T.loading, this._loading))
        }

        get loading() {
            return this._loading
        }

        set recording(e) {
            e ? this.playing && this.recorder && this.recorder.startRecord() : this.recorder && this.recorder.stopRecordAndSave()
        }

        get recording() {
            return !!this.recorder && this.recorder.recording
        }

        set audioTimestamp(e) {
            null !== e && (this._audioTimestamp = e)
        }

        get audioTimestamp() {
            return this._audioTimestamp
        }

        set videoTimestamp(e) {
            null !== e && (this._videoTimestamp = e, this._opt.useWCS || this._opt.useMSE || this.audioTimestamp && this.videoTimestamp && this.audio && this.audio.emit(T.videoSyncAudio, {
                audioTimestamp: this.audioTimestamp,
                videoTimestamp: this.videoTimestamp,
                diff: this.audioTimestamp - this.videoTimestamp
            }))
        }

        get videoTimestamp() {
            return this._videoTimestamp
        }

        get isDebug() {
            return !0 === this._opt.debug
        }

        updateOption(e) {
            this._opt = Object.assign({}, this._opt, e)
        }

        init() {
            return new Promise(((e, t) => {
                this.stream || (this.stream = new Ve(this)), this.audio || this._opt.hasAudio && (this.audio = new Le(this)), this.demux || (this.demux = new Ne(this)), this._opt.useWCS && (this.webcodecsDecoder || (this.webcodecsDecoder = new Xe(this))), this._opt.useMSE && (this.mseDecoder || (this.mseDecoder = new it(this))), this.decoderWorker || this._onlyMseOrWcsVideo() ? e() : (this.decoderWorker = new We(this), this.once(T.decoderWorkerInit, (() => {
                    e()
                })))
            }))
        }

        play(e, t) {
            return new Promise(((i, o) => {
                if (!e && !this._opt.url) return o();
                this.loading = !0, this.playing = !1, this._times.playInitStart = le(), e || (e = this._opt.url), this._opt.url = e, this.clearCheckHeartTimeout(), this.init().then((() => {
                    this._times.playStart = le(), this._opt.isNotMute && this.mute(!1), this.webcodecsDecoder && this.webcodecsDecoder.once(x.webcodecsH265NotSupport, (() => {
                        this.emit(x.webcodecsH265NotSupport), this._opt.autoWasm || this.emit(T.error, x.webcodecsH265NotSupport)
                    })), this.mseDecoder && (this.mseDecoder.once(x.mediaSourceH265NotSupport, (() => {
                        this.emit(x.mediaSourceH265NotSupport), this._opt.autoWasm || this.emit(T.error, x.mediaSourceH265NotSupport)
                    })), this.mseDecoder.once(x.mediaSourceFull, (() => {
                        this.emit(x.mediaSourceFull)
                    })), this.mseDecoder.once(x.mediaSourceAppendBufferError, (() => {
                        this.emit(x.mediaSourceAppendBufferError)
                    })), this.mseDecoder.once(x.mediaSourceBufferListLarge, (() => {
                        this.emit(x.mediaSourceBufferListLarge)
                    })), this.mseDecoder.once(x.mediaSourceAppendBufferEndTimeout, (() => {
                        this.emit(x.mediaSourceAppendBufferEndTimeout)
                    }))), this.enableWakeLock(), this.stream.fetchStream(e, t), this.checkLoadingTimeout(), this.stream.once(x.fetchError, (e => {
                        o(e)
                    })), this.stream.once(x.websocketError, (e => {
                        o(e)
                    })), this.stream.once(T.streamEnd, (() => {
                        o()
                    })), this.stream.once(x.hlsError, (e => {
                        o(e)
                    })), this.stream.once(T.streamSuccess, (() => {
                        i(), this._times.streamResponse = le(), this.video.play(), this.checkStatsInterval()
                    }))
                })).catch((e => {
                    o(e)
                }))
            }))
        }

        close() {
            return new Promise(((e, t) => {
                this._close().then((() => {
                    this.video && this.video.clearView(), e()
                }))
            }))
        }

        resumeAudioAfterPause() {
            this.lastVolume && (this.volume = this.lastVolume)
        }

        _close() {
            return new Promise(((e, t) => {
                this.stream && (this.stream.destroy(), this.stream = null), this.demux && (this.demux.destroy(), this.demux = null), this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null), this.webcodecsDecoder && (this.webcodecsDecoder.destroy(), this.webcodecsDecoder = null), this.mseDecoder && (this.mseDecoder.destroy(), this.mseDecoder = null), this.audio && (this.audio.destroy(), this.audio = null), this.clearCheckHeartTimeout(), this.clearCheckLoadingTimeout(), this.clearStatsInterval(), this.playing = !1, this.loading = !1, this.recording = !1, this.video && (this.video.resetInit(), this.video.pause(!0)), this.releaseWakeLock(), this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, this._times = {
                    playInitStart: "",
                    playStart: "",
                    streamStart: "",
                    streamResponse: "",
                    demuxStart: "",
                    decodeStart: "",
                    videoStart: "",
                    playTimestamp: "",
                    streamTimestamp: "",
                    streamResponseTimestamp: "",
                    demuxTimestamp: "",
                    decodeTimestamp: "",
                    videoTimestamp: "",
                    allTimestamp: ""
                }, setTimeout((() => {
                    e()
                }), 0)
            }))
        }

        pause() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this.close() : this._close()
        }

        mute(e) {
            this.audio && this.audio.mute(e)
        }

        resize() {
            this.video.resize()
        }

        startRecord(e, t) {
            this.recording || (this.recorder.setFileName(e, t), this.recording = !0)
        }

        stopRecordAndSave() {
            this.recording && (this.recording = !1)
        }

        _hasControl() {
            let e = !1, t = !1;
            return Object.keys(this._opt.operateBtns).forEach((e => {
                this._opt.operateBtns[e] && (t = !0)
            })), (this._opt.showBandwidth || this._opt.text || t) && (e = !0), e
        }

        _onlyMseOrWcsVideo() {
            return !1 === this._opt.hasAudio && (this._opt.useMSE || this._opt.useWCS && !this._opt.useOffscreen)
        }

        checkHeart() {
            this.clearCheckHeartTimeout(), this.checkHeartTimeout()
        }

        checkHeartTimeout() {
            this._checkHeartTimeout = setTimeout((() => {
                this.pause().then((() => {
                    this.emit(T.timeout, T.delayTimeout), this.emit(T.delayTimeout)
                }))
            }), 1e3 * this._opt.heartTimeout)
        }

        checkStatsInterval() {
            this._checkStatsInterval = setInterval((() => {
                this.updateStats()
            }), 1e3)
        }

        clearCheckHeartTimeout() {
            this._checkHeartTimeout && (clearTimeout(this._checkHeartTimeout), this._checkHeartTimeout = null)
        }

        checkLoadingTimeout() {
            this._checkLoadingTimeout = setTimeout((() => {
                this.pause().then((() => {
                    this.emit(T.timeout, T.loadingTimeout), this.emit(T.loadingTimeout)
                }))
            }), 1e3 * this._opt.loadingTimeout)
        }

        clearCheckLoadingTimeout() {
            this._checkLoadingTimeout && (clearTimeout(this._checkLoadingTimeout), this._checkLoadingTimeout = null)
        }

        clearStatsInterval() {
            this._checkStatsInterval && (clearInterval(this._checkStatsInterval), this._checkStatsInterval = null)
        }

        handleRender() {
            this.loading && (this.emit(T.start), this.loading = !1, this.clearCheckLoadingTimeout()), this.playing || (this.playing = !0), this.checkHeart()
        }

        updateStats(e) {
            e = e || {}, this._startBpsTime || (this._startBpsTime = le()), ve(e.ts) && (this._stats.ts = e.ts), ve(e.buf) && (this._stats.buf = e.buf), e.fps && (this._stats.fps += 1), e.abps && (this._stats.abps += e.abps), e.vbps && (this._stats.vbps += e.vbps);
            const t = le();
            t - this._startBpsTime < 1e3 || (this.emit(T.stats, this._stats), this.emit(T.performance, function (e) {
                let t = 0;
                return e >= 24 ? t = 2 : e >= 15 && (t = 1), t
            }(this._stats.fps)), this._stats.fps = 0, this._stats.abps = 0, this._stats.vbps = 0, this._startBpsTime = t)
        }

        resetStats() {
            this._startBpsTime = null, this._stats = {buf: 0, fps: 0, abps: 0, vbps: 0, ts: 0}
        }

        enableWakeLock() {
            this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.enable()
        }

        releaseWakeLock() {
            this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.disable()
        }

        handlePlayToRenderTimes() {
            const e = this._times;
            e.playTimestamp = e.playStart - e.playInitStart, e.streamTimestamp = e.streamStart - e.playStart, e.streamResponseTimestamp = e.streamResponse - e.streamStart, e.demuxTimestamp = e.demuxStart - e.streamResponse, e.decodeTimestamp = e.decodeStart - e.demuxStart, e.videoTimestamp = e.videoStart - e.decodeStart, e.allTimestamp = e.videoStart - e.playInitStart, this.emit(T.playToRenderTimes, e)
        }

        getOption() {
            return this._opt
        }
    }

    class nt extends we {
        constructor(e) {
            super();
            let t = e, i = e.container;
            if ("string" == typeof e.container && (i = document.querySelector(e.container)), !i) throw new Error("Jessibuca need container option");
            if ("CANVAS" === i.nodeName || "VIDEO" === i.nodeName) throw new Error(`Jessibuca container type can not be ${i.nodeName} type`);
            i.classList.add("jessibuca-container"), delete t.container, ve(t.videoBuffer) && (t.videoBuffer = 1e3 * Number(t.videoBuffer)), ve(t.timeout) && (ye(t.loadingTimeout) && (t.loadingTimeout = t.timeout), ye(t.heartTimeout) && (t.heartTimeout = t.timeout)), this._opt = t, this.$container = i, this._loadingTimeoutReplayTimes = 0, this._heartTimeoutReplayTimes = 0, this.events = new ne(this), this._initPlayer(i, t)
        }

        destroy() {
            this.events && (this.events.destroy(), this.events = null), this.player && (this.player.destroy(), this.player = null), this.$container = null, this._opt = null, this._loadingTimeoutReplayTimes = 0, this._heartTimeoutReplayTimes = 0, this.off()
        }

        _initPlayer(e, t) {
            this.player = new at(e, t), this.player.debug.log("jessibuca", "_initPlayer", this.player.getOption()), this._bindEvents()
        }

        _resetPlayer() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.player.destroy(), this.player = null, this._opt = Object.assign(this._opt, e), this._opt.url = "", this._initPlayer(this.$container, this._opt)
        }

        _bindEvents() {
            Object.keys(I).forEach((e => {
                this.player.on(I[e], (t => {
                    this.emit(e, t)
                }))
            }))
        }

        setDebug(e) {
            this.player.updateOption({debug: !!e})
        }

        mute() {
            this.player.mute(!0)
        }

        cancelMute() {
            this.player.mute(!1)
        }

        setVolume(e) {
            this.player.volume = e
        }

        audioResume() {
            this.player.audio && this.player.audio.audioEnabled(!0)
        }

        setTimeout(e) {
            e = Number(e), this.player.updateOption({timeout: e, loadingTimeout: e, heartTimeout: e})
        }

        setScaleMode(e) {
            let t = {isFullResize: !1, isResize: !1};
            switch (e = Number(e)) {
                case W:
                    t.isFullResize = !1, t.isResize = !1;
                    break;
                case J:
                    t.isFullResize = !1, t.isResize = !0;
                    break;
                case G:
                    t.isFullResize = !0, t.isResize = !0
            }
            this.player.updateOption(t), this.resize()
        }

        pause() {
            return this.player.pause()
        }

        close() {
            return this._opt.url = "", this._opt.playOptions = {}, this.player.close()
        }

        clearView() {
            this.player.video.clearView()
        }

        play(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(((i, o) => {
                if (!e && !this._opt.url) return this.emit(T.error, x.playError), void o();
                if (e) {
                    if (!this._opt.url) return this._play(e, t);
                    e === this._opt.url ? this.player.playing ? i() : (this.clearView(), this.player.play(this._opt.url, this._opt.playOptions).then((() => {
                        i(), this.player.resumeAudioAfterPause()
                    })).catch((() => {
                        this.player.pause().then((() => {
                            o()
                        }))
                    }))) : this.player.pause().then((() => (this.clearView(), this._play(e, t)))).catch((() => {
                        o()
                    }))
                } else this.player.play(this._opt.url, this._opt.playOptions).then((() => {
                    i(), this.player.resumeAudioAfterPause()
                })).catch((() => {
                    this.player.pause().then((() => {
                        o()
                    }))
                }))
            }))
        }

        _play(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(((i, o) => {
                this._opt.url = e, this._opt.playOptions = t;
                const r = 0 === e.indexOf("http"), d = r ? a : s,
                    c = r || -1 !== e.indexOf(".flv") || this._opt.isFlv ? n : A;
                this.player.updateOption({protocol: d, demuxType: c}), this.player.once(x.webglAlignmentError, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "webglAlignmentError"), this._resetPlayer({openWebglAlignment: !0}), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "webglAlignmentError and play success")
                        })).catch((() => {
                            this.player.debug.log("Jessibuca", "webglAlignmentError and play error")
                        }))
                    }))
                })), this.player.once(x.mediaSourceH265NotSupport, (() => {
                    this.pause().then((() => {
                        this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play"), this._resetPlayer({useMSE: !1}), this.play(e, t).then((() => {
                            this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play success")
                        })).catch((() => {
                            this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play error")
                        })))
                    }))
                })), this.player.once(x.webcodecsH265NotSupport, (() => {
                    this.pause().then((() => {
                        this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play"), this._resetPlayer({useWCS: !1}), this.play(e, t).then((() => {
                            this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play success")
                        })).catch((() => {
                            this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play error")
                        })))
                    }))
                })), this.player.once(x.mediaSourceFull, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "media source full"), this._resetPlayer(), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "media source full and reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "media source full and reset player and play error")
                        }))
                    }))
                })), this.player.once(x.mediaSourceAppendBufferError, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "media source append buffer error"), this._resetPlayer(), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "media source append buffer error and reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "media source append buffer error and reset player and play error")
                        }))
                    }))
                })), this.player.once(x.mediaSourceBufferListLarge, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "media source buffer list large"), this._resetPlayer(), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "media source buffer list large and reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "media source buffer list large and reset player and play error")
                        }))
                    }))
                })), this.player.once(x.mediaSourceAppendBufferEndTimeout, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "media source append buffer end timeout"), this._resetPlayer(), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "media source append buffer end timeout and reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "media source append buffer end timeout and reset player and play error")
                        }))
                    }))
                })), this.player.once(x.mseSourceBufferError, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "mseSourceBufferError close success")
                    }))
                })), this.player.once(x.webcodecsH265NotSupport, (() => {
                    this.pause().then((() => {
                        this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play"), this._resetPlayer({useWCS: !1}), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "auto wasm [wcs-> wasm] reset player and play error")
                        })))
                    }))
                })), this.player.once(x.webcodecsWidthOrHeightChange, (() => {
                    this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "webcodecs Width Or Height Change reset player and play"), this._resetPlayer({useWCS: !0}), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "webcodecs Width Or Height Change reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "webcodecs Width Or Height Change reset player and play error")
                        }))
                    }))
                })), this.player.once(x.webcodecsDecodeError, (() => {
                    this.pause().then((() => {
                        this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "webcodecs decode error reset player and play"), this._resetPlayer({useWCS: !1}), this.play(e).then((() => {
                            this.player.debug.log("Jessibuca", "webcodecs decode error  reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "webcodecs decode error reset player and play error")
                        })))
                    }))
                })), this.player.once(x.wasmDecodeError, (() => {
                    this.player._opt.wasmDecodeErrorReplay && this.pause().then((() => {
                        this.player.debug.log("Jessibuca", "wasm decode error and reset player and play"), this._resetPlayer({useWCS: !1}), this.play(e, t).then((() => {
                            this.player.debug.log("Jessibuca", "wasm decode error and reset player and play success")
                        })).catch((() => {
                            this.player.debug.warn("Jessibuca", "wasm decode error and reset player and play error")
                        }))
                    }))
                })), this.player.on(T.delayTimeout, (() => {
                    this.player._opt.heartTimeoutReplay && (this._heartTimeoutReplayTimes < this.player._opt.heartTimeoutReplayTimes || -1 === this.player._opt.heartTimeoutReplayTimes) && (this.player.debug.log("Jessibuca", `delay timeout replay time is ${this._heartTimeoutReplayTimes}`), this._heartTimeoutReplayTimes += 1, this.play(e, t).then((() => {
                        this._heartTimeoutReplayTimes = 0
                    })).catch((() => {
                    })))
                })), this.player.on(T.loadingTimeout, (() => {
                    this.player._opt.loadingTimeoutReplay && (this._loadingTimeoutReplayTimes < this.player._opt.loadingTimeoutReplayTimes || -1 === this.player._opt.loadingTimeoutReplayTimes) && (this.player.debug.log("Jessibuca", `loading timeout replay time is ${this._loadingTimeoutReplayTimes}`), this._loadingTimeoutReplayTimes += 1, this.play(e, t).then((() => {
                        this._loadingTimeoutReplayTimes = 0
                    })).catch((() => {
                    })))
                })), this.hasLoaded() ? this.player.play(e, t).then((() => {
                    i()
                })).catch((() => {
                    this.player.pause().then((() => {
                        o()
                    }))
                })) : this.player.once(T.decoderWorkerInit, (() => {
                    this.player.play(e, t).then((() => {
                        i()
                    })).catch((() => {
                        this.player.pause().then((() => {
                            o()
                        }))
                    }))
                }))
            }))
        }

        resize() {
            this.player.resize()
        }

        setBufferTime(e) {
            e = Number(e), this.player.updateOption({videoBuffer: 1e3 * e}), this.player.decoderWorker && this.player.decoderWorker.updateWorkConfig({
                key: "videoBuffer",
                value: 1e3 * e
            })
        }

        setRotate(e) {
            e = parseInt(e, 10);
            this._opt.rotate !== e && -1 !== [0, 90, 180, 270].indexOf(e) && (this.player.updateOption({rotate: e}), this.resize())
        }

        hasLoaded() {
            return this.player.loaded
        }

        setKeepScreenOn() {
            this.player.updateOption({keepScreenOn: !0})
        }

        setFullscreen(e) {
            const t = !!e;
            this.player.fullscreen !== t && (this.player.fullscreen = t)
        }

        screenshot(e, t, i, o) {
            return this.player.video.screenshot(e, t, i, o)
        }

        startRecord(e, t) {
            return new Promise(((i, o) => {
                this.player.playing ? (this.player.startRecord(e, t), i()) : o()
            }))
        }

        stopRecordAndSave() {
            this.player.recording && this.player.stopRecordAndSave()
        }

        isPlaying() {
            return !!this.player && this.player.playing
        }

        isMute() {
            return !this.player.audio || this.player.audio.isMute
        }

        isRecording() {
            return this.player.recorder.recording
        }
    }

    return r(nt, "ERROR", x), r(nt, "TIMEOUT", {
        loadingTimeout: T.loadingTimeout,
        delayTimeout: T.delayTimeout
    }), window.Jessibuca = nt, nt
}));
