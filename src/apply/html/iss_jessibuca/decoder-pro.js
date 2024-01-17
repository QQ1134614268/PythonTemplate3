!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("path"), require("fs"), require("crypto")) : "function" == typeof define && define.amd ? define(["path", "fs", "crypto"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).path, e.fs, e.crypto$1)
}(this, function (v, e, t) {
    "use strict";

    function b(e) {
        return e && "object" == typeof e && "default" in e ? e : {default: e}
    }

    var xt = b(v), Bt = b(e), At = b(t);

    function r(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function i(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var w = i(function (t) {
        function r(e) {
            return t.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e)
        }

        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    }), Ut = r(w), E = i(function (z) {
        var _;
        (_ = void 0 !== (_ = void 0 !== _ ? _ : {}) ? _ : {}).locateFile = function (e) {
            return "decoder-pro.wasm" == e && "undefined" != typeof JESSIBUCA_PRO_WASM_URL && "" != JESSIBUCA_PRO_WASM_URL ? JESSIBUCA_PRO_WASM_URL : e
        };
        var t, m, R, M, N, O, s, G = Object.assign({}, _), H = "./this.program",
            V = "object" == ("undefined" == typeof window ? "undefined" : Ut(window)),
            u = "function" == typeof importScripts,
            j = "object" == ("undefined" == typeof process ? "undefined" : Ut(process)) && "object" == Ut(process.versions) && "string" == typeof process.versions.node,
            e = "", W = (j ? (e = u ? xt.default.dirname(e) + "/" : __dirname + "/", O = function () {
                N || (M = Bt.default, N = xt.default)
            }, t = function (e, t) {
                return O(), e = N.normalize(e), M.readFileSync(e, t ? void 0 : "utf8")
            }, R = function (e) {
                e = t(e, !0);
                return e = e.buffer ? e : new Uint8Array(e)
            }, m = function (e, r, i) {
                O(), e = N.normalize(e), M.readFile(e, function (e, t) {
                    e ? i(e) : r(t.buffer)
                })
            }, 1 < process.argv.length && (H = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), z.exports = _, process.on("uncaughtException", function (e) {
                if (!(e instanceof function (e) {
                    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                })) throw e
            }), process.on("unhandledRejection", function (e) {
                throw e
            }), _.inspect = function () {
                return "[Emscripten Module object]"
            }) : (V || u) && (u ? e = self.location.href : "undefined" != typeof document && document.currentScript && (e = document.currentScript.src), e = 0 !== e.indexOf("blob:") ? e.substr(0, e.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", t = function (e) {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.send(null), t.responseText
            }, u && (R = function (e) {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
            }), m = function (e, t, r) {
                var i = new XMLHttpRequest;
                i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = function () {
                    200 == i.status || 0 == i.status && i.response ? t(i.response) : r()
                }, i.onerror = r, i.send(null)
            }), _.print || console.log.bind(console)), a = _.printErr || console.warn.bind(console),
            Y = (Object.assign(_, G), _.arguments && _.arguments, _.thisProgram && (H = _.thisProgram), _.quit && _.quit, _.wasmBinary && (s = _.wasmBinary), _.noExitRuntime, "object" != ("undefined" == typeof WebAssembly ? "undefined" : Ut(WebAssembly)) && v("no native wasm support detected"), !1);

        function $(e, t) {
            e || v(t)
        }

        var q, f, h, l, K, d, c, X, Z, J, Q = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function o(e, t, r) {
            for (var i = t + r, n = t; e[n] && !(i <= n);) ++n;
            if (16 < n - t && e.buffer && Q) return Q.decode(e.subarray(t, n));
            for (var s = ""; t < n;) {
                var o, a, l = e[t++];
                128 & l ? (o = 63 & e[t++], 192 != (224 & l) ? (a = 63 & e[t++], (l = 224 == (240 & l) ? (15 & l) << 12 | o << 6 | a : (7 & l) << 18 | o << 12 | a << 6 | 63 & e[t++]) < 65536 ? s += String.fromCharCode(l) : (a = l - 65536, s += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a))) : s += String.fromCharCode((31 & l) << 6 | o)) : s += String.fromCharCode(l)
            }
            return s
        }

        function ee(e, t) {
            return e ? o(h, e, t) : ""
        }

        function te(e, t, r, i) {
            if (!(0 < i)) return 0;
            for (var n = r, s = r + i - 1, o = 0; o < e.length; ++o) {
                var a = e.charCodeAt(o);
                if ((a = 55296 <= a && a <= 57343 ? 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++o) : a) <= 127) {
                    if (s <= r) break;
                    t[r++] = a
                } else if (a <= 2047) {
                    if (s <= r + 1) break;
                    t[r++] = 192 | a >> 6, t[r++] = 128 | 63 & a
                } else if (a <= 65535) {
                    if (s <= r + 2) break;
                    t[r++] = 224 | a >> 12, t[r++] = 128 | a >> 6 & 63, t[r++] = 128 | 63 & a
                } else {
                    if (s <= r + 3) break;
                    t[r++] = 240 | a >> 18, t[r++] = 128 | a >> 12 & 63, t[r++] = 128 | a >> 6 & 63, t[r++] = 128 | 63 & a
                }
            }
            return t[r] = 0, r - n
        }

        function re(e) {
            for (var t = 0, r = 0; r < e.length; ++r) {
                var i = e.charCodeAt(r);
                i <= 127 ? t++ : i <= 2047 ? t += 2 : 55296 <= i && i <= 57343 ? (t += 4, ++r) : t += 3
            }
            return t
        }

        _.INITIAL_MEMORY;
        var p, g, y, ie = [], ne = [], se = [], r = 0, i = null;

        function oe() {
            r++, _.monitorRunDependencies && _.monitorRunDependencies(r)
        }

        function ae() {
            var e;
            r--, _.monitorRunDependencies && _.monitorRunDependencies(r), 0 == r && i && (e = i, i = null, e())
        }

        function v(e) {
            throw _.onAbort && _.onAbort(e), a(e = "Aborted(" + e + ")"), Y = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e)
        }

        function le(e) {
            return e.startsWith("data:application/octet-stream;base64,")
        }

        function de(e) {
            return e.startsWith("file://")
        }

        function ue(e) {
            try {
                if (e == p && s) return new Uint8Array(s);
                if (R) return R(e);
                throw"both async and sync fetching of the wasm failed"
            } catch (e) {
                v(e)
            }
        }

        function fe(e) {
            for (; 0 < e.length;) e.shift()(_)
        }

        function he(e) {
            this.excPtr = e, this.ptr = e - 24, this.set_type = function (e) {
                c[this.ptr + 4 >> 2] = e
            }, this.get_type = function () {
                return c[this.ptr + 4 >> 2]
            }, this.set_destructor = function (e) {
                c[this.ptr + 8 >> 2] = e
            }, this.get_destructor = function () {
                return c[this.ptr + 8 >> 2]
            }, this.set_refcount = function (e) {
                d[this.ptr >> 2] = e
            }, this.set_caught = function (e) {
                f[this.ptr + 12 >> 0] = e = e ? 1 : 0
            }, this.get_caught = function () {
                return 0 != f[this.ptr + 12 >> 0]
            }, this.set_rethrown = function (e) {
                f[this.ptr + 13 >> 0] = e = e ? 1 : 0
            }, this.get_rethrown = function () {
                return 0 != f[this.ptr + 13 >> 0]
            }, this.init = function (e, t) {
                this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
            }, this.add_ref = function () {
                var e = d[this.ptr >> 2];
                d[this.ptr >> 2] = e + 1
            }, this.release_ref = function () {
                var e = d[this.ptr >> 2];
                return d[this.ptr >> 2] = e - 1, 1 === e
            }, this.set_adjusted_ptr = function (e) {
                c[this.ptr + 16 >> 2] = e
            }, this.get_adjusted_ptr = function () {
                return c[this.ptr + 16 >> 2]
            }, this.get_exception_ptr = function () {
                if (Et(this.get_type())) return c[this.excPtr >> 2];
                var e = this.get_adjusted_ptr();
                return 0 !== e ? e : this.excPtr
            }
        }

        le(p = "decoder-pro.wasm") || (G = p, p = _.locateFile ? _.locateFile(G, e) : e + G);
        var b = {
            isAbs: function (e) {
                return "/" === e.charAt(0)
            }, splitPath: function (e) {
                return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
            }, normalizeArray: function (e, t) {
                for (var r = 0, i = e.length - 1; 0 <= i; i--) {
                    var n = e[i];
                    "." === n ? e.splice(i, 1) : ".." === n ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--)
                }
                if (t) for (; r; r--) e.unshift("..");
                return e
            }, normalize: function (e) {
                var t = b.isAbs(e), r = "/" === e.substr(-1);
                return (e = (e = b.normalizeArray(e.split("/").filter(function (e) {
                    return !!e
                }), !t).join("/")) || t ? e : ".") && r && (e += "/"), (t ? "/" : "") + e
            }, dirname: function (e) {
                var e = b.splitPath(e), t = e[0], e = e[1];
                return t || e ? t + (e = e && e.substr(0, e.length - 1)) : "."
            }, basename: function (e) {
                if ("/" === e) return "/";
                var t = (e = (e = b.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === t ? e : e.substr(t + 1)
            }, join: function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return b.normalize(e.join("/"))
            }, join2: function (e, t) {
                return b.normalize(e + "/" + t)
            }
        }, w = {
            resolve: function () {
                for (var e = "", t = !1, r = arguments.length - 1; -1 <= r && !t; r--) {
                    var i = 0 <= r ? arguments[r] : S.cwd();
                    if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                    if (!i) return "";
                    e = i + "/" + e, t = b.isAbs(i)
                }
                return (t ? "/" : "") + b.normalizeArray(e.split("/").filter(function (e) {
                    return !!e
                }), !t).join("/") || "."
            }, relative: function (e, t) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var r = e.length - 1; 0 <= r && "" === e[r]; r--) ;
                    return r < t ? [] : e.slice(t, r - t + 1)
                }

                e = w.resolve(e).substr(1), t = w.resolve(t).substr(1);
                for (var i = r(e.split("/")), n = r(t.split("/")), s = Math.min(i.length, n.length), o = s, a = 0; a < s; a++) if (i[a] !== n[a]) {
                    o = a;
                    break
                }
                for (var l = [], a = o; a < i.length; a++) l.push("..");
                return (l = l.concat(n.slice(o))).join("/")
            }
        };

        function ce(e, t, r) {
            r = 0 < r ? r : re(e) + 1, r = new Array(r), e = te(e, r, 0, r.length);
            return t && (r.length = e), r
        }

        var n = {
            ttys: [], init: function () {
            }, shutdown: function () {
            }, register: function (e, t) {
                n.ttys[e] = {input: [], output: [], ops: t}, S.registerDevice(e, n.stream_ops)
            }, stream_ops: {
                open: function (e) {
                    var t = n.ttys[e.node.rdev];
                    if (!t) throw new S.ErrnoError(43);
                    e.tty = t, e.seekable = !1
                }, close: function (e) {
                    e.tty.ops.flush(e.tty)
                }, flush: function (e) {
                    e.tty.ops.flush(e.tty)
                }, read: function (e, t, r, i, n) {
                    if (!e.tty || !e.tty.ops.get_char) throw new S.ErrnoError(60);
                    for (var s, o = 0, a = 0; a < i; a++) {
                        try {
                            s = e.tty.ops.get_char(e.tty)
                        } catch (e) {
                            throw new S.ErrnoError(29)
                        }
                        if (void 0 === s && 0 === o) throw new S.ErrnoError(6);
                        if (null == s) break;
                        o++, t[r + a] = s
                    }
                    return o && (e.node.timestamp = Date.now()), o
                }, write: function (e, t, r, i, n) {
                    if (!e.tty || !e.tty.ops.put_char) throw new S.ErrnoError(60);
                    try {
                        for (var s = 0; s < i; s++) e.tty.ops.put_char(e.tty, t[r + s])
                    } catch (e) {
                        throw new S.ErrnoError(29)
                    }
                    return i && (e.node.timestamp = Date.now()), s
                }
            }, default_tty_ops: {
                get_char: function (e) {
                    if (!e.input.length) {
                        var t = null;
                        if (j) {
                            var r = Buffer.alloc(256), i = 0;
                            try {
                                i = M.readSync(process.stdin.fd, r, 0, 256, -1)
                            } catch (e) {
                                if (!e.toString().includes("EOF")) throw e;
                                i = 0
                            }
                            t = 0 < i ? r.slice(0, i).toString("utf-8") : null
                        } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n");
                        if (!t) return null;
                        e.input = ce(t, !0)
                    }
                    return e.input.shift()
                }, put_char: function (e, t) {
                    null === t || 10 === t ? (W(o(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                }, flush: function (e) {
                    e.output && 0 < e.output.length && (W(o(e.output, 0)), e.output = [])
                }
            }, default_tty1_ops: {
                put_char: function (e, t) {
                    null === t || 10 === t ? (a(o(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                }, flush: function (e) {
                    e.output && 0 < e.output.length && (a(o(e.output, 0)), e.output = [])
                }
            }
        };

        function pe(e) {
            t = e, e = 65536 * Math.ceil(t / 65536);
            var t = wt(65536, e);
            return t ? (e = e, h.fill(0, t, t + e), t) : 0
        }

        var E = {
            ops_table: null, mount: function (e) {
                return E.createNode(null, "/", 16895, 0)
            }, createNode: function (e, t, r, i) {
                if (S.isBlkdev(r) || S.isFIFO(r)) throw new S.ErrnoError(63);
                E.ops_table || (E.ops_table = {
                    dir: {
                        node: {
                            getattr: E.node_ops.getattr,
                            setattr: E.node_ops.setattr,
                            lookup: E.node_ops.lookup,
                            mknod: E.node_ops.mknod,
                            rename: E.node_ops.rename,
                            unlink: E.node_ops.unlink,
                            rmdir: E.node_ops.rmdir,
                            readdir: E.node_ops.readdir,
                            symlink: E.node_ops.symlink
                        }, stream: {llseek: E.stream_ops.llseek}
                    },
                    file: {
                        node: {getattr: E.node_ops.getattr, setattr: E.node_ops.setattr},
                        stream: {
                            llseek: E.stream_ops.llseek,
                            read: E.stream_ops.read,
                            write: E.stream_ops.write,
                            allocate: E.stream_ops.allocate,
                            mmap: E.stream_ops.mmap,
                            msync: E.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: E.node_ops.getattr,
                            setattr: E.node_ops.setattr,
                            readlink: E.node_ops.readlink
                        }, stream: {}
                    },
                    chrdev: {
                        node: {getattr: E.node_ops.getattr, setattr: E.node_ops.setattr},
                        stream: S.chrdev_stream_ops
                    }
                });
                r = S.createNode(e, t, r, i);
                return S.isDir(r.mode) ? (r.node_ops = E.ops_table.dir.node, r.stream_ops = E.ops_table.dir.stream, r.contents = {}) : S.isFile(r.mode) ? (r.node_ops = E.ops_table.file.node, r.stream_ops = E.ops_table.file.stream, r.usedBytes = 0, r.contents = null) : S.isLink(r.mode) ? (r.node_ops = E.ops_table.link.node, r.stream_ops = E.ops_table.link.stream) : S.isChrdev(r.mode) && (r.node_ops = E.ops_table.chrdev.node, r.stream_ops = E.ops_table.chrdev.stream), r.timestamp = Date.now(), e && (e.contents[t] = r, e.timestamp = r.timestamp), r
            }, getFileDataAsTypedArray: function (e) {
                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
            }, expandFileStorage: function (e, t) {
                var r = e.contents ? e.contents.length : 0;
                t <= r || (t = Math.max(t, r * (r < 1048576 ? 2 : 1.125) >>> 0), 0 != r && (t = Math.max(t, 256)), r = e.contents, e.contents = new Uint8Array(t), 0 < e.usedBytes && e.contents.set(r.subarray(0, e.usedBytes), 0))
            }, resizeFileStorage: function (e, t) {
                var r;
                e.usedBytes != t && (0 == t ? (e.contents = null, e.usedBytes = 0) : (r = e.contents, e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t))
            }, node_ops: {
                getattr: function (e) {
                    var t = {};
                    return t.dev = S.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, S.isDir(e.mode) ? t.size = 4096 : S.isFile(e.mode) ? t.size = e.usedBytes : S.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                }, setattr: function (e, t) {
                    void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && E.resizeFileStorage(e, t.size)
                }, lookup: function (e, t) {
                    throw S.genericErrors[44]
                }, mknod: function (e, t, r, i) {
                    return E.createNode(e, t, r, i)
                }, rename: function (e, t, r) {
                    if (S.isDir(e.mode)) {
                        var i;
                        try {
                            i = S.lookupNode(t, r)
                        } catch (e) {
                        }
                        if (i) for (var n in i.contents) throw new S.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = r, t.contents[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
                }, unlink: function (e, t) {
                    delete e.contents[t], e.timestamp = Date.now()
                }, rmdir: function (e, t) {
                    for (var r in S.lookupNode(e, t).contents) throw new S.ErrnoError(55);
                    delete e.contents[t], e.timestamp = Date.now()
                }, readdir: function (e) {
                    var t, r = [".", ".."];
                    for (t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
                    return r
                }, symlink: function (e, t, r) {
                    e = E.createNode(e, t, 41471, 0);
                    return e.link = r, e
                }, readlink: function (e) {
                    if (S.isLink(e.mode)) return e.link;
                    throw new S.ErrnoError(28)
                }
            }, stream_ops: {
                read: function (e, t, r, i, n) {
                    var s = e.node.contents;
                    if (n >= e.node.usedBytes) return 0;
                    var o = Math.min(e.node.usedBytes - n, i);
                    if (8 < o && s.subarray) t.set(s.subarray(n, n + o), r); else for (var a = 0; a < o; a++) t[r + a] = s[n + a];
                    return o
                }, write: function (e, t, r, i, n, s) {
                    if (!i) return 0;
                    var o = e.node;
                    if (o.timestamp = Date.now(), t.subarray && (!o.contents || o.contents.subarray)) {
                        if (s) return o.contents = t.subarray(r, r + i), o.usedBytes = i;
                        if (0 === o.usedBytes && 0 === n) return o.contents = t.slice(r, r + i), o.usedBytes = i;
                        if (n + i <= o.usedBytes) return o.contents.set(t.subarray(r, r + i), n), i
                    }
                    if (E.expandFileStorage(o, n + i), o.contents.subarray && t.subarray) o.contents.set(t.subarray(r, r + i), n); else for (var a = 0; a < i; a++) o.contents[n + a] = t[r + a];
                    return o.usedBytes = Math.max(o.usedBytes, n + i), i
                }, llseek: function (e, t, r) {
                    if (1 === r ? t += e.position : 2 === r && S.isFile(e.node.mode) && (t += e.node.usedBytes), t < 0) throw new S.ErrnoError(28);
                    return t
                }, allocate: function (e, t, r) {
                    E.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r)
                }, mmap: function (e, t, r, i, n) {
                    if (!S.isFile(e.node.mode)) throw new S.ErrnoError(43);
                    var s, o, e = e.node.contents;
                    if (2 & n || e.buffer !== q) {
                        if ((0 < r || r + t < e.length) && (e = e.subarray ? e.subarray(r, r + t) : Array.prototype.slice.call(e, r, r + t)), o = !0, !(s = pe(t))) throw new S.ErrnoError(48);
                        f.set(e, s)
                    } else o = !1, s = e.byteOffset;
                    return {ptr: s, allocated: o}
                }, msync: function (e, t, r, i, n) {
                    if (S.isFile(e.node.mode)) return 2 & n || E.stream_ops.write(e, t, 0, i, r, !1), 0;
                    throw new S.ErrnoError(43)
                }
            }
        }, S = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!(e = w.resolve(S.cwd(), e))) return {path: "", node: null};
                if (8 < (t = Object.assign({
                    follow_mount: !0,
                    recurse_count: 0
                }, t)).recurse_count) throw new S.ErrnoError(32);
                for (var r = b.normalizeArray(e.split("/").filter(function (e) {
                    return !!e
                }), !1), i = S.root, n = "/", s = 0; s < r.length; s++) {
                    var o = s === r.length - 1;
                    if (o && t.parent) break;
                    if (i = S.lookupNode(i, r[s]), n = b.join2(n, r[s]), !S.isMountpoint(i) || o && !t.follow_mount || (i = i.mounted.root), !o || t.follow) for (var a = 0; S.isLink(i.mode);) {
                        var l = S.readlink(n), n = w.resolve(b.dirname(n), l),
                            i = S.lookupPath(n, {recurse_count: t.recurse_count + 1}).node;
                        if (40 < a++) throw new S.ErrnoError(32)
                    }
                }
                return {path: n, node: i}
            },
            getPath: function (e) {
                for (var t, r; ;) {
                    if (S.isRoot(e)) return r = e.mount.mountpoint, t ? "/" !== r[r.length - 1] ? r + "/" + t : r + t : r;
                    t = t ? e.name + "/" + t : e.name, e = e.parent
                }
            },
            hashName: function (e, t) {
                for (var r = 0, i = 0; i < t.length; i++) r = (r << 5) - r + t.charCodeAt(i) | 0;
                return (e + r >>> 0) % S.nameTable.length
            },
            hashAddNode: function (e) {
                var t = S.hashName(e.parent.id, e.name);
                e.name_next = S.nameTable[t], S.nameTable[t] = e
            },
            hashRemoveNode: function (e) {
                var t = S.hashName(e.parent.id, e.name);
                if (S.nameTable[t] === e) S.nameTable[t] = e.name_next; else for (var r = S.nameTable[t]; r;) {
                    if (r.name_next === e) {
                        r.name_next = e.name_next;
                        break
                    }
                    r = r.name_next
                }
            },
            lookupNode: function (e, t) {
                var r = S.mayLookup(e);
                if (r) throw new S.ErrnoError(r, e);
                for (var r = S.hashName(e.id, t), i = S.nameTable[r]; i; i = i.name_next) {
                    var n = i.name;
                    if (i.parent.id === e.id && n === t) return i
                }
                return S.lookup(e, t)
            },
            createNode: function (e, t, r, i) {
                e = new S.FSNode(e, t, r, i);
                return S.hashAddNode(e), e
            },
            destroyNode: function (e) {
                S.hashRemoveNode(e)
            },
            isRoot: function (e) {
                return e === e.parent
            },
            isMountpoint: function (e) {
                return !!e.mounted
            },
            isFile: function (e) {
                return 32768 == (61440 & e)
            },
            isDir: function (e) {
                return 16384 == (61440 & e)
            },
            isLink: function (e) {
                return 40960 == (61440 & e)
            },
            isChrdev: function (e) {
                return 8192 == (61440 & e)
            },
            isBlkdev: function (e) {
                return 24576 == (61440 & e)
            },
            isFIFO: function (e) {
                return 4096 == (61440 & e)
            },
            isSocket: function (e) {
                return 49152 == (49152 & e)
            },
            flagModes: {r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090},
            modeStringToFlags: function (e) {
                var t = S.flagModes[e];
                if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                return t
            },
            flagsToPermissionString: function (e) {
                var t = ["r", "w", "rw"][3 & e];
                return 512 & e && (t += "w"), t
            },
            nodePermissions: function (e, t) {
                return S.ignorePermissions || (!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode) ? 0 : 2
            },
            mayLookup: function (e) {
                return S.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2)
            },
            mayCreate: function (e, t) {
                try {
                    return S.lookupNode(e, t), 20
                } catch (e) {
                }
                return S.nodePermissions(e, "wx")
            },
            mayDelete: function (e, t, r) {
                var i;
                try {
                    i = S.lookupNode(e, t)
                } catch (e) {
                    return e.errno
                }
                t = S.nodePermissions(e, "wx");
                if (t) return t;
                if (r) {
                    if (!S.isDir(i.mode)) return 54;
                    if (S.isRoot(i) || S.getPath(i) === S.cwd()) return 10
                } else if (S.isDir(i.mode)) return 31;
                return 0
            },
            mayOpen: function (e, t) {
                return e ? S.isLink(e.mode) ? 32 : S.isDir(e.mode) && ("r" !== S.flagsToPermissionString(t) || 512 & t) ? 31 : S.nodePermissions(e, S.flagsToPermissionString(t)) : 44
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function () {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : S.MAX_OPEN_FDS, r = e; r <= t; r++) if (!S.streams[r]) return r;
                throw new S.ErrnoError(33)
            },
            getStream: function (e) {
                return S.streams[e]
            },
            createStream: function (e, t, r) {
                S.FSStream || (S.FSStream = function () {
                    this.shared = {}
                }, S.FSStream.prototype = {}, Object.defineProperties(S.FSStream.prototype, {
                    object: {
                        get: function () {
                            return this.node
                        }, set: function (e) {
                            this.node = e
                        }
                    }, isRead: {
                        get: function () {
                            return 1 != (2097155 & this.flags)
                        }
                    }, isWrite: {
                        get: function () {
                            return 0 != (2097155 & this.flags)
                        }
                    }, isAppend: {
                        get: function () {
                            return 1024 & this.flags
                        }
                    }, flags: {
                        get: function () {
                            return this.shared.flags
                        }, set: function (e) {
                            this.shared.flags = e
                        }
                    }, position: {
                        get: function () {
                            return this.shared.position
                        }, set: function (e) {
                            this.shared.position = e
                        }
                    }
                })), e = Object.assign(new S.FSStream, e);
                t = S.nextfd(t, r);
                return e.fd = t, S.streams[t] = e
            },
            closeStream: function (e) {
                S.streams[e] = null
            },
            chrdev_stream_ops: {
                open: function (e) {
                    var t = S.getDevice(e.node.rdev);
                    e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                }, llseek: function () {
                    throw new S.ErrnoError(70)
                }
            },
            major: function (e) {
                return e >> 8
            },
            minor: function (e) {
                return 255 & e
            },
            makedev: function (e, t) {
                return e << 8 | t
            },
            registerDevice: function (e, t) {
                S.devices[e] = {stream_ops: t}
            },
            getDevice: function (e) {
                return S.devices[e]
            },
            getMounts: function (e) {
                for (var t = [], r = [e]; r.length;) {
                    var i = r.pop();
                    t.push(i), r.push.apply(r, i.mounts)
                }
                return t
            },
            syncfs: function (t, r) {
                "function" == typeof t && (r = t, t = !1), S.syncFSRequests++, 1 < S.syncFSRequests && a("warning: " + S.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                var i = S.getMounts(S.root.mount), n = 0;

                function s(e) {
                    return S.syncFSRequests--, r(e)
                }

                function o(e) {
                    if (e) return o.errored ? void 0 : (o.errored = !0, s(e));
                    ++n >= i.length && s(null)
                }

                i.forEach(function (e) {
                    if (!e.type.syncfs) return o(null);
                    e.type.syncfs(e, t, o)
                })
            },
            mount: function (e, t, r) {
                var i, n = "/" === r, s = !r;
                if (n && S.root) throw new S.ErrnoError(10);
                if (!n && !s) {
                    s = S.lookupPath(r, {follow_mount: !1});
                    if (r = s.path, i = s.node, S.isMountpoint(i)) throw new S.ErrnoError(10);
                    if (!S.isDir(i.mode)) throw new S.ErrnoError(54)
                }
                s = {type: e, opts: t, mountpoint: r, mounts: []}, t = e.mount(s);
                return (t.mount = s).root = t, n ? S.root = t : i && (i.mounted = s, i.mount && i.mount.mounts.push(s)), t
            },
            unmount: function (e) {
                e = S.lookupPath(e, {follow_mount: !1});
                if (!S.isMountpoint(e.node)) throw new S.ErrnoError(28);
                var e = e.node, t = e.mounted, i = S.getMounts(t), t = (Object.keys(S.nameTable).forEach(function (e) {
                    for (var t = S.nameTable[e]; t;) {
                        var r = t.name_next;
                        i.includes(t.mount) && S.destroyNode(t), t = r
                    }
                }), e.mounted = null, e.mount.mounts.indexOf(t));
                e.mount.mounts.splice(t, 1)
            },
            lookup: function (e, t) {
                return e.node_ops.lookup(e, t)
            },
            mknod: function (e, t, r) {
                var i = S.lookupPath(e, {parent: !0}).node, e = b.basename(e);
                if (!e || "." === e || ".." === e) throw new S.ErrnoError(28);
                var n = S.mayCreate(i, e);
                if (n) throw new S.ErrnoError(n);
                if (i.node_ops.mknod) return i.node_ops.mknod(i, e, t, r);
                throw new S.ErrnoError(63)
            },
            create: function (e, t) {
                return S.mknod(e, t = (t = void 0 !== t ? t : 438) & 4095 | 32768, 0)
            },
            mkdir: function (e, t) {
                return S.mknod(e, t = (t = void 0 !== t ? t : 511) & 1023 | 16384, 0)
            },
            mkdirTree: function (e, t) {
                for (var r = e.split("/"), i = "", n = 0; n < r.length; ++n) if (r[n]) {
                    i += "/" + r[n];
                    try {
                        S.mkdir(i, t)
                    } catch (e) {
                        if (20 != e.errno) throw e
                    }
                }
            },
            mkdev: function (e, t, r) {
                return void 0 === r && (r = t, t = 438), S.mknod(e, t |= 8192, r)
            },
            symlink: function (e, t) {
                if (!w.resolve(e)) throw new S.ErrnoError(44);
                var r = S.lookupPath(t, {parent: !0}).node;
                if (!r) throw new S.ErrnoError(44);
                var t = b.basename(t), i = S.mayCreate(r, t);
                if (i) throw new S.ErrnoError(i);
                if (r.node_ops.symlink) return r.node_ops.symlink(r, t, e);
                throw new S.ErrnoError(63)
            },
            rename: function (e, t) {
                var r = b.dirname(e), i = b.dirname(t), n = b.basename(e), s = b.basename(t),
                    o = S.lookupPath(e, {parent: !0}).node, a = S.lookupPath(t, {parent: !0}).node;
                if (!o || !a) throw new S.ErrnoError(44);
                if (o.mount !== a.mount) throw new S.ErrnoError(75);
                var l, d = S.lookupNode(o, n);
                if ("." !== w.relative(e, i).charAt(0)) throw new S.ErrnoError(28);
                if ("." !== w.relative(t, r).charAt(0)) throw new S.ErrnoError(55);
                try {
                    l = S.lookupNode(a, s)
                } catch (e) {
                }
                if (d !== l) {
                    i = S.isDir(d.mode), t = S.mayDelete(o, n, i);
                    if (t) throw new S.ErrnoError(t);
                    if (t = l ? S.mayDelete(a, s, i) : S.mayCreate(a, s)) throw new S.ErrnoError(t);
                    if (!o.node_ops.rename) throw new S.ErrnoError(63);
                    if (S.isMountpoint(d) || l && S.isMountpoint(l)) throw new S.ErrnoError(10);
                    if (a !== o && (t = S.nodePermissions(o, "w"))) throw new S.ErrnoError(t);
                    S.hashRemoveNode(d);
                    try {
                        o.node_ops.rename(d, a, s)
                    } catch (e) {
                        throw e
                    } finally {
                        S.hashAddNode(d)
                    }
                }
            },
            rmdir: function (e) {
                var t = S.lookupPath(e, {parent: !0}).node, e = b.basename(e), r = S.lookupNode(t, e),
                    i = S.mayDelete(t, e, !0);
                if (i) throw new S.ErrnoError(i);
                if (!t.node_ops.rmdir) throw new S.ErrnoError(63);
                if (S.isMountpoint(r)) throw new S.ErrnoError(10);
                t.node_ops.rmdir(t, e), S.destroyNode(r)
            },
            readdir: function (e) {
                e = S.lookupPath(e, {follow: !0}).node;
                if (e.node_ops.readdir) return e.node_ops.readdir(e);
                throw new S.ErrnoError(54)
            },
            unlink: function (e) {
                var t = S.lookupPath(e, {parent: !0}).node;
                if (!t) throw new S.ErrnoError(44);
                var e = b.basename(e), r = S.lookupNode(t, e), i = S.mayDelete(t, e, !1);
                if (i) throw new S.ErrnoError(i);
                if (!t.node_ops.unlink) throw new S.ErrnoError(63);
                if (S.isMountpoint(r)) throw new S.ErrnoError(10);
                t.node_ops.unlink(t, e), S.destroyNode(r)
            },
            readlink: function (e) {
                e = S.lookupPath(e).node;
                if (!e) throw new S.ErrnoError(44);
                if (e.node_ops.readlink) return w.resolve(S.getPath(e.parent), e.node_ops.readlink(e));
                throw new S.ErrnoError(28)
            },
            stat: function (e, t) {
                e = S.lookupPath(e, {follow: !t}).node;
                if (!e) throw new S.ErrnoError(44);
                if (e.node_ops.getattr) return e.node_ops.getattr(e);
                throw new S.ErrnoError(63)
            },
            lstat: function (e) {
                return S.stat(e, !0)
            },
            chmod: function (e, t, r) {
                r = "string" == typeof e ? S.lookupPath(e, {follow: !r}).node : e;
                if (!r.node_ops.setattr) throw new S.ErrnoError(63);
                r.node_ops.setattr(r, {mode: 4095 & t | -4096 & r.mode, timestamp: Date.now()})
            },
            lchmod: function (e, t) {
                S.chmod(e, t, !0)
            },
            fchmod: function (e, t) {
                e = S.getStream(e);
                if (!e) throw new S.ErrnoError(8);
                S.chmod(e.node, t)
            },
            chown: function (e, t, r, i) {
                i = "string" == typeof e ? S.lookupPath(e, {follow: !i}).node : e;
                if (!i.node_ops.setattr) throw new S.ErrnoError(63);
                i.node_ops.setattr(i, {timestamp: Date.now()})
            },
            lchown: function (e, t, r) {
                S.chown(e, t, r, !0)
            },
            fchown: function (e, t, r) {
                e = S.getStream(e);
                if (!e) throw new S.ErrnoError(8);
                S.chown(e.node, t, r)
            },
            truncate: function (e, t) {
                if (t < 0) throw new S.ErrnoError(28);
                e = "string" == typeof e ? S.lookupPath(e, {follow: !0}).node : e;
                if (!e.node_ops.setattr) throw new S.ErrnoError(63);
                if (S.isDir(e.mode)) throw new S.ErrnoError(31);
                if (!S.isFile(e.mode)) throw new S.ErrnoError(28);
                var r = S.nodePermissions(e, "w");
                if (r) throw new S.ErrnoError(r);
                e.node_ops.setattr(e, {size: t, timestamp: Date.now()})
            },
            ftruncate: function (e, t) {
                e = S.getStream(e);
                if (!e) throw new S.ErrnoError(8);
                if (0 == (2097155 & e.flags)) throw new S.ErrnoError(28);
                S.truncate(e.node, t)
            },
            utime: function (e, t, r) {
                e = S.lookupPath(e, {follow: !0}).node;
                e.node_ops.setattr(e, {timestamp: Math.max(t, r)})
            },
            open: function (e, t, r) {
                if ("" === e) throw new S.ErrnoError(44);
                var i;
                if (r = void 0 === r ? 438 : r, r = 64 & (t = "string" == typeof t ? S.modeStringToFlags(t) : t) ? 4095 & r | 32768 : 0, "object" == Ut(e)) i = e; else {
                    e = b.normalize(e);
                    try {
                        i = S.lookupPath(e, {follow: !(131072 & t)}).node
                    } catch (e) {
                    }
                }
                var n = !1;
                if (64 & t) if (i) {
                    if (128 & t) throw new S.ErrnoError(20)
                } else i = S.mknod(e, r, 0), n = !0;
                if (!i) throw new S.ErrnoError(44);
                if (S.isChrdev(i.mode) && (t &= -513), 65536 & t && !S.isDir(i.mode)) throw new S.ErrnoError(54);
                if (!n) {
                    r = S.mayOpen(i, t);
                    if (r) throw new S.ErrnoError(r)
                }
                512 & t && !n && S.truncate(i, 0), t &= -131713;
                r = S.createStream({
                    node: i,
                    path: S.getPath(i),
                    flags: t,
                    seekable: !0,
                    position: 0,
                    stream_ops: i.stream_ops,
                    ungotten: [],
                    error: !1
                });
                return r.stream_ops.open && r.stream_ops.open(r), !_.logReadFiles || 1 & t || (S.readFiles || (S.readFiles = {}), e in S.readFiles || (S.readFiles[e] = 1)), r
            },
            close: function (e) {
                if (S.isClosed(e)) throw new S.ErrnoError(8);
                e.getdents && (e.getdents = null);
                try {
                    e.stream_ops.close && e.stream_ops.close(e)
                } catch (e) {
                    throw e
                } finally {
                    S.closeStream(e.fd)
                }
                e.fd = null
            },
            isClosed: function (e) {
                return null === e.fd
            },
            llseek: function (e, t, r) {
                if (S.isClosed(e)) throw new S.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek) throw new S.ErrnoError(70);
                if (0 != r && 1 != r && 2 != r) throw new S.ErrnoError(28);
                return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position
            },
            read: function (e, t, r, i, n) {
                if (i < 0 || n < 0) throw new S.ErrnoError(28);
                if (S.isClosed(e)) throw new S.ErrnoError(8);
                if (1 == (2097155 & e.flags)) throw new S.ErrnoError(8);
                if (S.isDir(e.node.mode)) throw new S.ErrnoError(31);
                if (!e.stream_ops.read) throw new S.ErrnoError(28);
                var s = void 0 !== n;
                if (s) {
                    if (!e.seekable) throw new S.ErrnoError(70)
                } else n = e.position;
                t = e.stream_ops.read(e, t, r, i, n);
                return s || (e.position += t), t
            },
            write: function (e, t, r, i, n, s) {
                if (i < 0 || n < 0) throw new S.ErrnoError(28);
                if (S.isClosed(e)) throw new S.ErrnoError(8);
                if (0 == (2097155 & e.flags)) throw new S.ErrnoError(8);
                if (S.isDir(e.node.mode)) throw new S.ErrnoError(31);
                if (!e.stream_ops.write) throw new S.ErrnoError(28);
                e.seekable && 1024 & e.flags && S.llseek(e, 0, 2);
                var o = void 0 !== n;
                if (o) {
                    if (!e.seekable) throw new S.ErrnoError(70)
                } else n = e.position;
                t = e.stream_ops.write(e, t, r, i, n, s);
                return o || (e.position += t), t
            },
            allocate: function (e, t, r) {
                if (S.isClosed(e)) throw new S.ErrnoError(8);
                if (t < 0 || r <= 0) throw new S.ErrnoError(28);
                if (0 == (2097155 & e.flags)) throw new S.ErrnoError(8);
                if (!S.isFile(e.node.mode) && !S.isDir(e.node.mode)) throw new S.ErrnoError(43);
                if (!e.stream_ops.allocate) throw new S.ErrnoError(138);
                e.stream_ops.allocate(e, t, r)
            },
            mmap: function (e, t, r, i, n) {
                if (0 != (2 & i) && 0 == (2 & n) && 2 != (2097155 & e.flags)) throw new S.ErrnoError(2);
                if (1 == (2097155 & e.flags)) throw new S.ErrnoError(2);
                if (e.stream_ops.mmap) return e.stream_ops.mmap(e, t, r, i, n);
                throw new S.ErrnoError(43)
            },
            msync: function (e, t, r, i, n) {
                return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, i, n) : 0
            },
            munmap: function (e) {
                return 0
            },
            ioctl: function (e, t, r) {
                if (e.stream_ops.ioctl) return e.stream_ops.ioctl(e, t, r);
                throw new S.ErrnoError(59)
            },
            readFile: function (e) {
                var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
                var i = S.open(e, r.flags), e = S.stat(e).size, n = new Uint8Array(e);
                return S.read(i, n, 0, e, 0), "utf8" === r.encoding ? t = o(n, 0) : "binary" === r.encoding && (t = n), S.close(i), t
            },
            writeFile: function (e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    e = (r.flags = r.flags || 577, S.open(e, r.flags, r.mode));
                if ("string" == typeof t) {
                    var i = new Uint8Array(re(t) + 1), n = te(t, i, 0, i.length);
                    S.write(e, i, 0, n, void 0, r.canOwn)
                } else {
                    if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                    S.write(e, t, 0, t.byteLength, void 0, r.canOwn)
                }
                S.close(e)
            },
            cwd: function () {
                return S.currentPath
            },
            chdir: function (e) {
                e = S.lookupPath(e, {follow: !0});
                if (null === e.node) throw new S.ErrnoError(44);
                if (!S.isDir(e.node.mode)) throw new S.ErrnoError(54);
                var t = S.nodePermissions(e.node, "x");
                if (t) throw new S.ErrnoError(t);
                S.currentPath = e.path
            },
            createDefaultDirectories: function () {
                S.mkdir("/tmp"), S.mkdir("/home"), S.mkdir("/home/web_user")
            },
            createDefaultDevices: function () {
                S.mkdir("/dev"), S.registerDevice(S.makedev(1, 3), {
                    read: function () {
                        return 0
                    }, write: function (e, t, r, i, n) {
                        return i
                    }
                }), S.mkdev("/dev/null", S.makedev(1, 3)), n.register(S.makedev(5, 0), n.default_tty_ops), n.register(S.makedev(6, 0), n.default_tty1_ops), S.mkdev("/dev/tty", S.makedev(5, 0)), S.mkdev("/dev/tty1", S.makedev(6, 0));
                var e = function () {
                    var e;
                    if ("object" == ("undefined" == typeof crypto ? "undefined" : Ut(crypto)) && "function" == typeof crypto.getRandomValues) return e = new Uint8Array(1), function () {
                        return crypto.getRandomValues(e), e[0]
                    };
                    if (j) try {
                        var t = At.default;
                        return function () {
                            return t.randomBytes(1)[0]
                        }
                    } catch (e) {
                    }
                    return function () {
                        return v("randomDevice")
                    }
                }();
                S.createDevice("/dev", "random", e), S.createDevice("/dev", "urandom", e), S.mkdir("/dev/shm"), S.mkdir("/dev/shm/tmp")
            },
            createSpecialDirectories: function () {
                S.mkdir("/proc");
                var t = S.mkdir("/proc/self");
                S.mkdir("/proc/self/fd"), S.mount({
                    mount: function () {
                        var e = S.createNode(t, "fd", 16895, 73);
                        return e.node_ops = {
                            lookup: function (e, t) {
                                var r = S.getStream(+t);
                                if (!r) throw new S.ErrnoError(8);
                                t = {
                                    parent: null, mount: {mountpoint: "fake"}, node_ops: {
                                        readlink: function () {
                                            return r.path
                                        }
                                    }
                                };
                                return t.parent = t
                            }
                        }, e
                    }
                }, {}, "/proc/self/fd")
            },
            createStandardStreams: function () {
                _.stdin ? S.createDevice("/dev", "stdin", _.stdin) : S.symlink("/dev/tty", "/dev/stdin"), _.stdout ? S.createDevice("/dev", "stdout", null, _.stdout) : S.symlink("/dev/tty", "/dev/stdout"), _.stderr ? S.createDevice("/dev", "stderr", null, _.stderr) : S.symlink("/dev/tty1", "/dev/stderr"), S.open("/dev/stdin", 0), S.open("/dev/stdout", 1), S.open("/dev/stderr", 1)
            },
            ensureErrnoError: function () {
                S.ErrnoError || (S.ErrnoError = function (e, t) {
                    this.node = t, this.setErrno = function (e) {
                        this.errno = e
                    }, this.setErrno(e), this.message = "FS error"
                }, S.ErrnoError.prototype = new Error, S.ErrnoError.prototype.constructor = S.ErrnoError, [44].forEach(function (e) {
                    S.genericErrors[e] = new S.ErrnoError(e), S.genericErrors[e].stack = "<generic error, no stack>"
                }))
            },
            staticInit: function () {
                S.ensureErrnoError(), S.nameTable = new Array(4096), S.mount(E, {}, "/"), S.createDefaultDirectories(), S.createDefaultDevices(), S.createSpecialDirectories(), S.filesystems = {MEMFS: E}
            },
            init: function (e, t, r) {
                S.init.initialized = !0, S.ensureErrnoError(), _.stdin = e || _.stdin, _.stdout = t || _.stdout, _.stderr = r || _.stderr, S.createStandardStreams()
            },
            quit: function () {
                S.init.initialized = !1;
                for (var e = 0; e < S.streams.length; e++) {
                    var t = S.streams[e];
                    t && S.close(t)
                }
            },
            getMode: function (e, t) {
                var r = 0;
                return e && (r |= 365), t && (r |= 146), r
            },
            findObject: function (e, t) {
                e = S.analyzePath(e, t);
                return e.exists ? e.object : null
            },
            analyzePath: function (e, t) {
                try {
                    e = (i = S.lookupPath(e, {follow: !t})).path
                } catch (e) {
                }
                var r = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var i = S.lookupPath(e, {parent: !0});
                    r.parentExists = !0, r.parentPath = i.path, r.parentObject = i.node, r.name = b.basename(e), i = S.lookupPath(e, {follow: !t}), r.exists = !0, r.path = i.path, r.object = i.node, r.name = i.node.name, r.isRoot = "/" === i.path
                } catch (e) {
                    r.error = e.errno
                }
                return r
            },
            createPath: function (e, t, r, i) {
                e = "string" == typeof e ? e : S.getPath(e);
                for (var n = t.split("/").reverse(); n.length;) {
                    var s = n.pop();
                    if (s) {
                        var o = b.join2(e, s);
                        try {
                            S.mkdir(o)
                        } catch (e) {
                        }
                        e = o
                    }
                }
                return o
            },
            createFile: function (e, t, r, i, n) {
                e = b.join2("string" == typeof e ? e : S.getPath(e), t), t = S.getMode(i, n);
                return S.create(e, t)
            },
            createDataFile: function (e, t, r, i, n, s) {
                var o = t,
                    t = (e && (e = "string" == typeof e ? e : S.getPath(e), o = t ? b.join2(e, t) : e), S.getMode(i, n)),
                    e = S.create(o, t);
                if (r) {
                    if ("string" == typeof r) {
                        for (var a = new Array(r.length), l = 0, d = r.length; l < d; ++l) a[l] = r.charCodeAt(l);
                        r = a
                    }
                    S.chmod(e, 146 | t);
                    i = S.open(e, 577);
                    S.write(i, r, 0, r.length, 0, s), S.close(i), S.chmod(e, t)
                }
                return e
            },
            createDevice: function (e, t, l, o) {
                var e = b.join2("string" == typeof e ? e : S.getPath(e), t), t = S.getMode(!!l, !!o),
                    r = (S.createDevice.major || (S.createDevice.major = 64), S.makedev(S.createDevice.major++, 0));
                return S.registerDevice(r, {
                    open: function (e) {
                        e.seekable = !1
                    }, close: function (e) {
                        o && o.buffer && o.buffer.length && o(10)
                    }, read: function (e, t, r, i, n) {
                        for (var s, o = 0, a = 0; a < i; a++) {
                            try {
                                s = l()
                            } catch (e) {
                                throw new S.ErrnoError(29)
                            }
                            if (void 0 === s && 0 === o) throw new S.ErrnoError(6);
                            if (null == s) break;
                            o++, t[r + a] = s
                        }
                        return o && (e.node.timestamp = Date.now()), o
                    }, write: function (e, t, r, i, n) {
                        for (var s = 0; s < i; s++) try {
                            o(t[r + s])
                        } catch (e) {
                            throw new S.ErrnoError(29)
                        }
                        return i && (e.node.timestamp = Date.now()), s
                    }
                }), S.mkdev(e, t, r)
            },
            forceLoadFile: function (e) {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                if (!t) throw new Error("Cannot load without read() or XMLHttpRequest.");
                try {
                    e.contents = ce(t(e.url), !0), e.usedBytes = e.contents.length
                } catch (e) {
                    throw new S.ErrnoError(29)
                }
            },
            createLazyFile: function (e, t, o, r, i) {
                function n() {
                    this.lengthKnown = !1, this.chunks = []
                }

                if (n.prototype.get = function (e) {
                    var t;
                    if (!(e > this.length - 1 || e < 0)) return t = e % this.chunkSize, e = e / this.chunkSize | 0, this.getter(e)[t]
                }, n.prototype.setDataGetter = function (e) {
                    this.getter = e
                }, n.prototype.cacheLength = function () {
                    var e = new XMLHttpRequest;
                    if (e.open("HEAD", o, !1), e.send(null), !(200 <= e.status && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + o + ". Status: " + e.status);
                    var t, i = Number(e.getResponseHeader("Content-length")),
                        r = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                        e = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t, n = 1048576,
                        s = (r || (n = i), this);
                    s.setDataGetter(function (e) {
                        var t = e * n, r = (e + 1) * n - 1, r = Math.min(r, i - 1);
                        if (void 0 === s.chunks[e] && (s.chunks[e] = function (e, t) {
                            if (t < e) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                            if (i - 1 < t) throw new Error("only " + i + " bytes available! programmer error!");
                            var r = new XMLHttpRequest;
                            if (r.open("GET", o, !1), i !== n && r.setRequestHeader("Range", "bytes=" + e + "-" + t), r.responseType = "arraybuffer", r.overrideMimeType && r.overrideMimeType("text/plain; charset=x-user-defined"), r.send(null), 200 <= r.status && r.status < 300 || 304 === r.status) return void 0 !== r.response ? new Uint8Array(r.response || []) : ce(r.responseText || "", !0);
                            throw new Error("Couldn't load " + o + ". Status: " + r.status)
                        }(t, r)), void 0 === s.chunks[e]) throw new Error("doXHR failed!");
                        return s.chunks[e]
                    }), !e && i || (n = i = 1, i = this.getter(0).length, n = i, W("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = i, this._chunkSize = n, this.lengthKnown = !0
                }, "undefined" != typeof XMLHttpRequest) {
                    if (!u) throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var s = new n, s = (Object.defineProperties(s, {
                        length: {
                            get: function () {
                                return this.lengthKnown || this.cacheLength(), this._length
                            }
                        }, chunkSize: {
                            get: function () {
                                return this.lengthKnown || this.cacheLength(), this._chunkSize
                            }
                        }
                    }), {isDevice: !1, contents: s})
                } else s = {isDevice: !1, url: o};
                var a = S.createFile(e, t, s, r, i),
                    l = (s.contents ? a.contents = s.contents : s.url && (a.contents = null, a.url = s.url), Object.defineProperties(a, {
                        usedBytes: {
                            get: function () {
                                return this.contents.length
                            }
                        }
                    }), {});

                function d(e, t, r, i, n) {
                    var s = e.node.contents;
                    if (n >= s.length) return 0;
                    var o = Math.min(s.length - n, i);
                    if (s.slice) for (var a = 0; a < o; a++) t[r + a] = s[n + a]; else for (a = 0; a < o; a++) t[r + a] = s.get(n + a);
                    return o
                }

                return Object.keys(a.stream_ops).forEach(function (e) {
                    var t = a.stream_ops[e];
                    l[e] = function () {
                        return S.forceLoadFile(a), t.apply(null, arguments)
                    }
                }), l.read = function (e, t, r, i, n) {
                    return S.forceLoadFile(a), d(e, t, r, i, n)
                }, l.mmap = function (e, t, r, i, n) {
                    S.forceLoadFile(a);
                    var s = pe(t);
                    if (s) return d(e, f, s, t, r), {ptr: s, allocated: !0};
                    throw new S.ErrnoError(48)
                }, a.stream_ops = l, a
            },
            createPreloadedFile: function (r, i, e, n, s, o, a, l, d, u) {
                var t, f, h, c = i ? w.resolve(b.join2(r, i)) : r;

                function p(e) {
                    function t(e) {
                        u && u(), l || S.createDataFile(r, i, e, n, s, d), o && o(), ae()
                    }

                    Browser.handledByPreloadPlugin(e, c, t, function () {
                        a && a(), ae()
                    }) || t(e)
                }

                oe(), "string" == typeof e ? (f = a, h = "al " + (t = e), m(t, function (e) {
                    $(e, 'Loading data file "' + t + '" failed (no arrayBuffer).'), p(new Uint8Array(e)), h && ae()
                }, function (e) {
                    if (!f) throw'Loading data file "' + t + '" failed.';
                    f()
                }), h && oe()) : p(e)
            },
            indexedDB: function () {
                return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            },
            DB_NAME: function () {
                return "EM_FS_" + window.location.pathname
            },
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: function (o, a, l) {
                a = a || function () {
                }, l = l || function () {
                };
                var e = S.indexedDB();
                try {
                    var d = e.open(S.DB_NAME(), S.DB_VERSION)
                } catch (o) {
                    return l(o)
                }
                d.onupgradeneeded = function () {
                    W("creating db"), d.result.createObjectStore(S.DB_STORE_NAME)
                }, d.onsuccess = function () {
                    var e = d.result.transaction([S.DB_STORE_NAME], "readwrite"), t = e.objectStore(S.DB_STORE_NAME),
                        r = 0, i = 0, n = o.length;

                    function s() {
                        (0 == i ? a : l)()
                    }

                    o.forEach(function (e) {
                        e = t.put(S.analyzePath(e).object.contents, e);
                        e.onsuccess = function () {
                            ++r + i == n && s()
                        }, e.onerror = function () {
                            r + ++i == n && s()
                        }
                    }), e.onerror = l
                }, d.onerror = l
            },
            loadFilesFromDB: function (a, l, d) {
                l = l || function () {
                }, d = d || function () {
                };
                var e = S.indexedDB();
                try {
                    var u = e.open(S.DB_NAME(), S.DB_VERSION)
                } catch (a) {
                    return d(a)
                }
                u.onupgradeneeded = d, u.onsuccess = function () {
                    var e = u.result;
                    try {
                        var t = e.transaction([S.DB_STORE_NAME], "readonly")
                    } catch (e) {
                        return void d(e)
                    }
                    var r = t.objectStore(S.DB_STORE_NAME), i = 0, n = 0, s = a.length;

                    function o() {
                        (0 == n ? l : d)()
                    }

                    a.forEach(function (e) {
                        var t = r.get(e);
                        t.onsuccess = function () {
                            S.analyzePath(e).exists && S.unlink(e), S.createDataFile(b.dirname(e), b.basename(e), t.result, !0, !0, !0), ++i + n == s && o()
                        }, t.onerror = function () {
                            i + ++n == s && o()
                        }
                    }), t.onerror = d
                }, u.onerror = d
            }
        }, U = {
            DEFAULT_POLLMASK: 5, calculateAt: function (e, t, r) {
                if (b.isAbs(t)) return t;
                var i;
                if (-100 === e) i = S.cwd(); else {
                    e = S.getStream(e);
                    if (!e) throw new S.ErrnoError(8);
                    i = e.path
                }
                if (0 != t.length) return b.join2(i, t);
                if (r) return i;
                throw new S.ErrnoError(44)
            }, doStat: function (e, t, r) {
                try {
                    var i = e(t)
                } catch (e) {
                    if (e && e.node && b.normalize(t) !== b.normalize(S.getPath(e.node))) return -54;
                    throw e
                }
                return d[r >> 2] = i.dev, d[r + 4 >> 2] = 0, d[r + 8 >> 2] = i.ino, d[r + 12 >> 2] = i.mode, d[r + 16 >> 2] = i.nlink, d[r + 20 >> 2] = i.uid, d[r + 24 >> 2] = i.gid, d[r + 28 >> 2] = i.rdev, d[r + 32 >> 2] = 0, y = [i.size >>> 0, (g = i.size, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[r + 40 >> 2] = y[0], d[r + 44 >> 2] = y[1], d[r + 48 >> 2] = 4096, d[r + 52 >> 2] = i.blocks, y = [Math.floor(i.atime.getTime() / 1e3) >>> 0, (g = Math.floor(i.atime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[r + 56 >> 2] = y[0], d[r + 60 >> 2] = y[1], d[r + 64 >> 2] = 0, y = [Math.floor(i.mtime.getTime() / 1e3) >>> 0, (g = Math.floor(i.mtime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[r + 72 >> 2] = y[0], d[r + 76 >> 2] = y[1], d[r + 80 >> 2] = 0, y = [Math.floor(i.ctime.getTime() / 1e3) >>> 0, (g = Math.floor(i.ctime.getTime() / 1e3), 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[r + 88 >> 2] = y[0], d[r + 92 >> 2] = y[1], d[r + 96 >> 2] = 0, y = [i.ino >>> 0, (g = i.ino, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[r + 104 >> 2] = y[0], d[r + 108 >> 2] = y[1], 0
            }, doMsync: function (e, t, r, i, n) {
                e = h.slice(e, e + r);
                S.msync(t, e, n, r, i)
            }, varargs: void 0, get: function () {
                return U.varargs += 4, d[U.varargs - 4 >> 2]
            }, getStr: function (e) {
                return ee(e)
            }, getStreamFromFD: function (e) {
                e = S.getStream(e);
                if (e) return e;
                throw new S.ErrnoError(8)
            }
        };

        function me(e) {
            switch (e) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + e)
            }
        }

        var _e = void 0;

        function x(e) {
            for (var t = "", r = e; h[r];) t += _e[h[r++]];
            return t
        }

        var B = {}, A = {}, ge = {};

        function ye(e) {
            if (void 0 === e) return "_unknown";
            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return 48 <= t && t <= 57 ? "_" + e : e
        }

        function ve(e, t) {
            return e = ye(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
        }

        function be(e, t) {
            var r = ve(t, function (e) {
                this.name = t, this.message = e;
                e = new Error(e).stack;
                void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""))
            });
            return r.prototype = Object.create(e.prototype), (r.prototype.constructor = r).prototype.toString = function () {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, r
        }

        var T = void 0;

        function k(e) {
            throw new T(e)
        }

        var we = void 0;

        function Ee(e) {
            throw new we(e)
        }

        function Se(i, t, n) {
            function r(e) {
                var t = n(e);
                t.length !== i.length && Ee("Mismatched type converter count");
                for (var r = 0; r < i.length; ++r) C(i[r], t[r])
            }

            i.forEach(function (e) {
                ge[e] = t
            });
            var s = new Array(t.length), o = [], a = 0;
            t.forEach(function (e, t) {
                A.hasOwnProperty(e) ? s[t] = A[e] : (o.push(e), B.hasOwnProperty(e) || (B[e] = []), B[e].push(function () {
                    s[t] = A[e], ++a === o.length && r(s)
                }))
            }), 0 === o.length && r(s)
        }

        function C(e, t, r) {
            r = 2 < arguments.length && void 0 !== r ? r : {};
            if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var i = t.name;
            if (e || k('type "' + i + '" must have a positive integer typeid pointer'), A.hasOwnProperty(e)) {
                if (r.ignoreDuplicateRegistrations) return;
                k("Cannot register type '" + i + "' twice")
            }
            A[e] = t, delete ge[e], B.hasOwnProperty(e) && (r = B[e], delete B[e], r.forEach(function (e) {
                return e()
            }))
        }

        function Ue(e) {
            k(e.$$.ptrType.registeredClass.name + " instance already deleted")
        }

        var xe = !1;

        function Be(e) {
        }

        function Ae(e) {
            --e.count.value, 0 === e.count.value && ((e = e).smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr))
        }

        var Te = {};
        var ke = [];

        function Ce() {
            for (; ke.length;) {
                var e = ke.pop();
                e.$$.deleteScheduled = !1, e.delete()
            }
        }

        var Fe = void 0;
        var Ie = {};

        function De(e, t) {
            return t.ptrType && t.ptr || Ee("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && Ee("Both smartPtrType and smartPtr must be specified"), t.count = {value: 1}, Pe(Object.create(e, {$$: {value: t}}))
        }

        function Pe(e) {
            return "undefined" == typeof FinalizationRegistry ? (Pe = function (e) {
                return e
            }, e) : (xe = new FinalizationRegistry(function (e) {
                Ae(e.$$)
            }), Be = function (e) {
                return xe.unregister(e)
            }, (Pe = function (e) {
                var t = e.$$;
                return t.smartPtr && xe.register(e, {$$: t}, e), e
            })(e))
        }

        function F() {
        }

        function Le(e, t, r) {
            var i;
            void 0 === e[t].overloadTable && (i = e[t], e[t] = function () {
                return e[t].overloadTable.hasOwnProperty(arguments.length) || k("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments)
            }, e[t].overloadTable = [], e[t].overloadTable[i.argCount] = i)
        }

        function ze(e, t, r, i, n, s, o, a) {
            this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = i, this.baseClass = n, this.getActualType = s, this.upcast = o, this.downcast = a, this.pureVirtualFunctions = []
        }

        function Re(e, t, r) {
            for (; t !== r;) t.upcast || k("Expected null or instance of " + r.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
            return e
        }

        function Me(e, t) {
            if (null === t) return this.isReference && k("null is not a valid " + this.name), 0;
            t.$$ || k('Cannot pass "' + et(t) + '" as a ' + this.name), t.$$.ptr || k("Cannot pass deleted object as a pointer of type " + this.name);
            var r = t.$$.ptrType.registeredClass;
            return Re(t.$$.ptr, r, this.registeredClass)
        }

        function Ne(e, t) {
            if (null === t) return this.isReference && k("null is not a valid " + this.name), this.isSmartPointer ? (i = this.rawConstructor(), null !== e && e.push(this.rawDestructor, i), i) : 0;
            t.$$ || k('Cannot pass "' + et(t) + '" as a ' + this.name), t.$$.ptr || k("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && k("Cannot convert argument of type " + (t.$$.smartPtrType || t.$$.ptrType).name + " to parameter type " + this.name);
            var r, i, n = t.$$.ptrType.registeredClass;
            if (i = Re(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === t.$$.smartPtr && k("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                case 0:
                    t.$$.smartPtrType === this ? i = t.$$.smartPtr : k("Cannot convert argument of type " + (t.$$.smartPtrType || t.$$.ptrType).name + " to parameter type " + this.name);
                    break;
                case 1:
                    i = t.$$.smartPtr;
                    break;
                case 2:
                    t.$$.smartPtrType === this ? i = t.$$.smartPtr : (r = t.clone(), i = this.rawShare(i, Qe.toHandle(function () {
                        r.delete()
                    })), null !== e && e.push(this.rawDestructor, i));
                    break;
                default:
                    k("Unsupporting sharing policy")
            }
            return i
        }

        function Oe(e, t) {
            if (null === t) return this.isReference && k("null is not a valid " + this.name), 0;
            t.$$ || k('Cannot pass "' + et(t) + '" as a ' + this.name), t.$$.ptr || k("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && k("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
            var r = t.$$.ptrType.registeredClass;
            return Re(t.$$.ptr, r, this.registeredClass)
        }

        function Ge(e) {
            return this.fromWireType(d[e >> 2])
        }

        function I(e, t, r, i, n, s, o, a, l, d, u) {
            this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = i, this.isSmartPointer = n, this.pointeeType = s, this.sharingPolicy = o, this.rawGetPointee = a, this.rawConstructor = l, this.rawShare = d, this.rawDestructor = u, n || void 0 !== t.baseClass ? this.toWireType = Ne : (this.toWireType = i ? Me : Oe, this.destructorFunction = null)
        }

        var He = [];

        function Ve(e) {
            var t = He[e];
            return t || (e >= He.length && (He.length = e + 1), He[e] = t = J.get(e)), t
        }

        function D(e, t) {
            var n, s, o, r = (e = x(e)).includes("j") ? (n = e, s = t, o = [], function () {
                return o.length = 0, Object.assign(o, arguments), t = s, r = o, (e = n).includes("j") ? (i = t, e = _["dynCall_" + e], r && r.length ? e.apply(null, [i].concat(r)) : e.call(null, i)) : Ve(t).apply(null, r);
                var e, t, r, i
            }) : Ve(t);
            return "function" != typeof r && k("unknown function pointer with signature " + e + ": " + t), r
        }

        var je = void 0;

        function We(e) {
            var e = vt(e), t = x(e);
            return L(e), t
        }

        function Ye(e, t) {
            var r = [], i = {};
            throw t.forEach(function e(t) {
                i[t] || A[t] || (ge[t] ? ge[t].forEach(e) : (r.push(t), i[t] = !0))
            }), new je(e + ": " + r.map(We).join([", "]))
        }

        function $e(e, t) {
            for (var r = [], i = 0; i < e; i++) r.push(c[t + 4 * i >> 2]);
            return r
        }

        function qe(e) {
            for (; e.length;) {
                var t = e.pop();
                e.pop()(t)
            }
        }

        function Ke(e, t) {
            if (!(e instanceof Function)) throw new TypeError("new_ called with constructor type " + Ut(e) + " which is not a function");
            var r = ve(e.name || "unknownFunctionName", function () {
            }), r = (r.prototype = e.prototype, new r), e = e.apply(r, t);
            return e instanceof Object ? e : r
        }

        function Xe(e, t, r, i, n) {
            var s = t.length;
            s < 2 && k("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var r = null !== t[1] && null !== r, o = !1, a = 1; a < t.length; ++a) if (null !== t[a] && void 0 === t[a].destructorFunction) {
                o = !0;
                break
            }
            for (var l = "void" !== t[0].name, d = "", u = "", a = 0; a < s - 2; ++a) d += (0 !== a ? ", " : "") + "arg" + a, u += (0 !== a ? ", " : "") + "arg" + a + "Wired";
            var f = "return function " + ye(e) + "(" + d + ") {\nif (arguments.length !== " + (s - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (s - 2) + " args!');\n}\n",
                h = (o && (f += "var destructors = [];\n"), o ? "destructors" : "null"),
                c = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                p = [k, i, n, qe, t[0], t[1]];
            for (r && (f += "var thisWired = classParam.toWireType(" + h + ", this);\n"), a = 0; a < s - 2; ++a) f += "var arg" + a + "Wired = argType" + a + ".toWireType(" + h + ", arg" + a + "); // " + t[a + 2].name + "\n", c.push("argType" + a), p.push(t[a + 2]);
            if (f += (l ? "var rv = " : "") + "invoker(fn" + (0 < (u = r ? "thisWired" + (0 < u.length ? ", " : "") + u : u).length ? ", " : "") + u + ");\n", o) f += "runDestructors(destructors);\n"; else for (a = r ? 1 : 2; a < t.length; ++a) {
                var m = 1 === a ? "thisWired" : "arg" + (a - 2) + "Wired";
                null !== t[a].destructorFunction && (f += m + "_dtor(" + m + "); // " + t[a].name + "\n", c.push(m + "_dtor"), p.push(t[a].destructorFunction))
            }
            return l && (f += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), c.push(f += "}\n"), Ke(Function, c).apply(null, p)
        }

        var Ze = [], P = [{}, {value: void 0}, {value: null}, {value: !0}, {value: !1}];

        function Je(e) {
            4 < e && 0 == --P[e].refcount && (P[e] = void 0, Ze.push(e))
        }

        var Qe = {
            toValue: function (e) {
                return e || k("Cannot use deleted val. handle = " + e), P[e].value
            }, toHandle: function (e) {
                switch (e) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case!0:
                        return 3;
                    case!1:
                        return 4;
                    default:
                        var t = Ze.length ? Ze.pop() : P.length;
                        return P[t] = {refcount: 1, value: e}, t
                }
            }
        };

        function et(e) {
            if (null === e) return "null";
            var t = Ut(e);
            return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
        }

        var tt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

        function rt(e, t) {
            for (var r, i = e >> 1, n = i + t / 2; !(n <= i) && K[i];) ++i;
            if (32 < (r = i << 1) - e && tt) return tt.decode(h.subarray(e, r));
            for (var s = "", o = 0; !(t / 2 <= o); ++o) {
                var a = l[e + 2 * o >> 1];
                if (0 == a) break;
                s += String.fromCharCode(a)
            }
            return s
        }

        function it(e, t, r) {
            if ((r = void 0 === r ? 2147483647 : r) < 2) return 0;
            for (var i = t, n = (r -= 2) < 2 * e.length ? r / 2 : e.length, s = 0; s < n; ++s) {
                var o = e.charCodeAt(s);
                l[t >> 1] = o, t += 2
            }
            return l[t >> 1] = 0, t - i
        }

        function nt(e) {
            return 2 * e.length
        }

        function st(e, t) {
            for (var r = 0, i = ""; !(t / 4 <= r);) {
                var n, s = d[e + 4 * r >> 2];
                if (0 == s) break;
                ++r, 65536 <= s ? (n = s - 65536, i += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : i += String.fromCharCode(s)
            }
            return i
        }

        function ot(e, t, r) {
            if ((r = void 0 === r ? 2147483647 : r) < 4) return 0;
            for (var i = t, n = i + r - 4, s = 0; s < e.length; ++s) {
                var o = e.charCodeAt(s);
                if (55296 <= o && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++s)), d[t >> 2] = o, (t += 4) + 4 > n) break
            }
            return d[t >> 2] = 0, t - i
        }

        function at(e) {
            for (var t = 0, r = 0; r < e.length; ++r) {
                var i = e.charCodeAt(r);
                55296 <= i && i <= 57343 && ++r, t += 4
            }
            return t
        }

        var lt = {}, dt = [], ut = [], ft = {};

        function ht() {
            if (!ht.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == ("undefined" == typeof navigator ? "undefined" : Ut(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: H || "./this.program"
                };
                for (t in ft) void 0 === ft[t] ? delete e[t] : e[t] = ft[t];
                var t, r = [];
                for (t in e) r.push(t + "=" + e[t]);
                ht.strings = r
            }
            return ht.strings
        }

        function ct(e, t, r, i) {
            this.parent = e = e || this, this.mount = e.mount, this.mounted = null, this.id = S.nextInode++, this.name = t, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = i
        }

        Object.defineProperties(ct.prototype, {
            read: {
                get: function () {
                    return 365 == (365 & this.mode)
                }, set: function (e) {
                    e ? this.mode |= 365 : this.mode &= -366
                }
            }, write: {
                get: function () {
                    return 146 == (146 & this.mode)
                }, set: function (e) {
                    e ? this.mode |= 146 : this.mode &= -147
                }
            }, isFolder: {
                get: function () {
                    return S.isDir(this.mode)
                }
            }, isDevice: {
                get: function () {
                    return S.isChrdev(this.mode)
                }
            }
        }), S.FSNode = ct, S.staticInit();
        for (var pt = new Array(256), mt = 0; mt < 256; ++mt) pt[mt] = String.fromCharCode(mt);
        _e = pt, T = _.BindingError = be(Error, "BindingError"), we = _.InternalError = be(Error, "InternalError"), F.prototype.isAliasOf = function (e) {
            if (!(this instanceof F)) return !1;
            if (!(e instanceof F)) return !1;
            for (var t = this.$$.ptrType.registeredClass, r = this.$$.ptr, i = e.$$.ptrType.registeredClass, n = e.$$.ptr; t.baseClass;) r = t.upcast(r), t = t.baseClass;
            for (; i.baseClass;) n = i.upcast(n), i = i.baseClass;
            return t === i && r === n
        }, F.prototype.clone = function () {
            if (this.$$.ptr || Ue(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
            var e = Pe(Object.create(Object.getPrototypeOf(this), {
                $$: {
                    value: {
                        count: (e = this.$$).count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType
                    }
                }
            }));
            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
        }, F.prototype.delete = function () {
            this.$$.ptr || Ue(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && k("Object already scheduled for deletion"), Be(this), Ae(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
        }, F.prototype.isDeleted = function () {
            return !this.$$.ptr
        }, F.prototype.deleteLater = function () {
            return this.$$.ptr || Ue(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && k("Object already scheduled for deletion"), ke.push(this), 1 === ke.length && Fe && Fe(Ce), this.$$.deleteScheduled = !0, this
        }, _.getInheritedInstanceCount = function () {
            return Object.keys(Ie).length
        }, _.getLiveInheritedInstances = function () {
            var e, t = [];
            for (e in Ie) Ie.hasOwnProperty(e) && t.push(Ie[e]);
            return t
        }, _.flushPendingDeletes = Ce, _.setDelayFunction = function (e) {
            Fe = e, ke.length && Fe && Fe(Ce)
        }, I.prototype.getPointee = function (e) {
            return e = this.rawGetPointee ? this.rawGetPointee(e) : e
        }, I.prototype.destructor = function (e) {
            this.rawDestructor && this.rawDestructor(e)
        }, I.prototype.argPackAdvance = 8, I.prototype.readValueFromPointer = Ge, I.prototype.deleteObject = function (e) {
            null !== e && e.delete()
        }, I.prototype.fromWireType = function (e) {
            var t = this.getPointee(e);
            if (!t) return this.destructor(e), null;
            if (i = function (e, t) {
                for (void 0 === t && k("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
                return t
            }(i = this.registeredClass, i = t), void 0 !== (i = Ie[i])) {
                if (0 === i.$$.count.value) return i.$$.ptr = t, i.$$.smartPtr = e, i.clone();
                i = i.clone();
                return this.destructor(e), i
            }

            function r() {
                return this.isSmartPointer ? De(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: t,
                    smartPtrType: this,
                    smartPtr: e
                }) : De(this.registeredClass.instancePrototype, {ptrType: this, ptr: e})
            }

            if (i = this.registeredClass.getActualType(t), !(i = Te[i])) return r.call(this);
            var i = this.isConst ? i.constPointerType : i.pointerType, n = function e(t, r, i) {
                if (r === i) return t;
                if (void 0 === i.baseClass) return null;
                t = e(t, r, i.baseClass);
                return null === t ? null : i.downcast(t)
            }(t, this.registeredClass, i.registeredClass);
            return null === n ? r.call(this) : this.isSmartPointer ? De(i.registeredClass.instancePrototype, {
                ptrType: i,
                ptr: n,
                smartPtrType: this,
                smartPtr: e
            }) : De(i.registeredClass.instancePrototype, {ptrType: i, ptr: n})
        }, je = _.UnboundTypeError = be(Error, "UnboundTypeError"), _.count_emval_handles = function () {
            for (var e = 0, t = 5; t < P.length; ++t) void 0 !== P[t] && ++e;
            return e
        }, _.get_first_emval = function () {
            for (var e = 5; e < P.length; ++e) if (void 0 !== P[e]) return P[e];
            return null
        };
        var _t = {
            s: function (e) {
                return gt(e + 24) + 24
            }, r: function (e, t, r) {
                throw new he(e).init(t, r), e
            }, C: function (e, t, r) {
                U.varargs = r;
                try {
                    var i = U.getStreamFromFD(e);
                    switch (t) {
                        case 0:
                            return (n = U.get()) < 0 ? -28 : S.createStream(i, n).fd;
                        case 1:
                        case 2:
                        case 6:
                        case 7:
                            return 0;
                        case 3:
                            return i.flags;
                        case 4:
                            var n = U.get();
                            return i.flags |= n, 0;
                        case 5:
                            return n = U.get(), l[n + 0 >> 1] = 2, 0;
                        case 16:
                        case 8:
                        default:
                            return -28;
                        case 9:
                            return d[yt() >> 2] = 28, -1
                    }
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return -e.errno;
                    throw e
                }
            }, w: function (e, t, r, i) {
                U.varargs = i;
                try {
                    t = U.getStr(t), t = U.calculateAt(e, t);
                    var n = i ? U.get() : 0;
                    return S.open(t, r, n).fd
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return -e.errno;
                    throw e
                }
            }, u: function (e, t, r, i, n) {
            }, E: function (e, r, i, n, s) {
                var o = me(i);
                C(e, {
                    name: r = x(r), fromWireType: function (e) {
                        return !!e
                    }, toWireType: function (e, t) {
                        return t ? n : s
                    }, argPackAdvance: 8, readValueFromPointer: function (e) {
                        var t;
                        if (1 === i) t = f; else if (2 === i) t = l; else {
                            if (4 !== i) throw new TypeError("Unknown boolean type size: " + r);
                            t = d
                        }
                        return this.fromWireType(t[e >> o])
                    }, destructorFunction: null
                })
            }, l: function (l, e, t, d, r, u, i, f, n, h, c, s, p) {
                c = x(c), u = D(r, u), f = f && D(i, f), h = h && D(n, h), p = D(s, p);
                var o, m = ye(c);
                r = m, i = function () {
                    Ye("Cannot construct " + c + " due to unbound types", [d])
                }, _.hasOwnProperty(r) ? (k("Cannot register public name '" + r + "' twice"), Le(_, r, r), _.hasOwnProperty(o) && k("Cannot register multiple overloads of a function with the same number of arguments (" + o + ")!"), _[r].overloadTable[o] = i) : _[r] = i, Se([l, e, t], d ? [d] : [], function (e) {
                    e = e[0], e = d ? (o = e.registeredClass).instancePrototype : F.prototype;
                    var t, r, i = ve(m, function () {
                            if (Object.getPrototypeOf(this) !== n) throw new T("Use 'new' to construct " + c);
                            if (void 0 === s.constructor_body) throw new T(c + " has no accessible constructor");
                            var e = s.constructor_body[arguments.length];
                            if (void 0 === e) throw new T("Tried to invoke ctor of " + c + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(s.constructor_body).toString() + ") parameters instead!");
                            return e.apply(this, arguments)
                        }), n = Object.create(e, {constructor: {value: i}}),
                        s = (i.prototype = n, new ze(c, i, n, p, o, u, f, h)), e = new I(c, s, !0, !1, !1),
                        o = new I(c + "*", s, !1, !1, !1), a = new I(c + " const*", s, !1, !0, !1);
                    return Te[l] = {
                        pointerType: o,
                        constPointerType: a
                    }, t = m, i = i, _.hasOwnProperty(t) || Ee("Replacing nonexistant public symbol"), _[t].overloadTable, _[t] = i, _[t].argCount = r, [e, o, a]
                })
            }, k: function (e, i, t, r, n, s) {
                $(0 < i);
                var o = $e(i, t);
                n = D(r, n), Se([], [e], function (t) {
                    var r = "constructor " + (t = t[0]).name;
                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[i - 1]) throw new T("Cannot register multiple constructors with identical number of parameters (" + (i - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                    return t.registeredClass.constructor_body[i - 1] = function () {
                        Ye("Cannot construct " + t.name + " due to unbound types", o)
                    }, Se([], o, function (e) {
                        return e.splice(1, 0, null), t.registeredClass.constructor_body[i - 1] = Xe(r, e, null, n, s), []
                    }), []
                })
            }, f: function (e, s, o, t, r, a, l, d) {
                var u = $e(o, t);
                s = x(s), a = D(r, a), Se([], [e], function (t) {
                    var r = (t = t[0]).name + "." + s;

                    function e() {
                        Ye("Cannot call " + r + " due to unbound types", u)
                    }

                    s.startsWith("@@") && (s = Symbol[s.substring(2)]), d && t.registeredClass.pureVirtualFunctions.push(s);
                    var i = t.registeredClass.instancePrototype, n = i[s];
                    return void 0 === n || void 0 === n.overloadTable && n.className !== t.name && n.argCount === o - 2 ? (e.argCount = o - 2, e.className = t.name, i[s] = e) : (Le(i, s, r), i[s].overloadTable[o - 2] = e), Se([], u, function (e) {
                        e = Xe(r, e, t, a, l);
                        return void 0 === i[s].overloadTable ? (e.argCount = o - 2, i[s] = e) : i[s].overloadTable[o - 2] = e, []
                    }), []
                })
            }, D: function (e, t) {
                C(e, {
                    name: t = x(t), fromWireType: function (e) {
                        var t = Qe.toValue(e);
                        return Je(e), t
                    }, toWireType: function (e, t) {
                        return Qe.toHandle(t)
                    }, argPackAdvance: 8, readValueFromPointer: Ge, destructorFunction: null
                })
            }, p: function (e, t, r) {
                r = me(r);
                C(e, {
                    name: t = x(t), fromWireType: function (e) {
                        return e
                    }, toWireType: function (e, t) {
                        return t
                    }, argPackAdvance: 8, readValueFromPointer: function (e, t) {
                        switch (t) {
                            case 2:
                                return function (e) {
                                    return this.fromWireType(X[e >> 2])
                                };
                            case 3:
                                return function (e) {
                                    return this.fromWireType(Z[e >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + e)
                        }
                    }(t, r), destructorFunction: null
                })
            }, c: function (e, t, r, i, n) {
                t = x(t);
                var s, o = me(r), a = function (e) {
                    return e
                }, r = (0 === i && (s = 32 - 8 * r, a = function (e) {
                    return e << s >>> s
                }), t.includes("unsigned"));
                C(e, {
                    name: t, fromWireType: a, toWireType: r ? function (e, t) {
                        return this.name, t >>> 0
                    } : function (e, t) {
                        return this.name, t
                    }, argPackAdvance: 8, readValueFromPointer: function (e, t, r) {
                        switch (t) {
                            case 0:
                                return r ? function (e) {
                                    return f[e]
                                } : function (e) {
                                    return h[e]
                                };
                            case 1:
                                return r ? function (e) {
                                    return l[e >> 1]
                                } : function (e) {
                                    return K[e >> 1]
                                };
                            case 2:
                                return r ? function (e) {
                                    return d[e >> 2]
                                } : function (e) {
                                    return c[e >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + e)
                        }
                    }(t, o, 0 !== i), destructorFunction: null
                })
            }, b: function (e, t, r) {
                var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

                function n(e) {
                    var t = c, r = t[e >>= 2], t = t[e + 1];
                    return new i(q, t, r)
                }

                C(e, {
                    name: r = x(r),
                    fromWireType: n,
                    argPackAdvance: 8,
                    readValueFromPointer: n
                }, {ignoreDuplicateRegistrations: !0})
            }, o: function (e, t) {
                var d = "std::string" === (t = x(t));
                C(e, {
                    name: t, fromWireType: function (e) {
                        var t, r = c[e >> 2], i = e + 4;
                        if (d) for (var n = i, s = 0; s <= r; ++s) {
                            var o, a = i + s;
                            s != r && 0 != h[a] || (o = ee(n, a - n), void 0 === t ? t = o : t = t + String.fromCharCode(0) + o, n = a + 1)
                        } else {
                            for (var l = new Array(r), s = 0; s < r; ++s) l[s] = String.fromCharCode(h[i + s]);
                            t = l.join("")
                        }
                        return L(e), t
                    }, toWireType: function (e, t) {
                        var r, i = "string" == typeof (t = t instanceof ArrayBuffer ? new Uint8Array(t) : t),
                            n = (i || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || k("Cannot pass non-string to std::string"), r = d && i ? re(t) : t.length, gt(4 + r + 1)),
                            s = n + 4;
                        if (c[n >> 2] = r, d && i) te(t, h, s, r + 1); else if (i) for (var o = 0; o < r; ++o) {
                            var a = t.charCodeAt(o);
                            255 < a && (L(s), k("String has UTF-16 code units that do not fit in 8 bits")), h[s + o] = a
                        } else for (o = 0; o < r; ++o) h[s + o] = t[o];
                        return null !== e && e.push(L, n), n
                    }, argPackAdvance: 8, readValueFromPointer: Ge, destructorFunction: function (e) {
                        L(e)
                    }
                })
            }, j: function (e, l, n) {
                var d, s, u, o, f;
                n = x(n), 2 === l ? (d = rt, s = it, o = nt, u = function () {
                    return K
                }, f = 1) : 4 === l && (d = st, s = ot, o = at, u = function () {
                    return c
                }, f = 2), C(e, {
                    name: n, fromWireType: function (e) {
                        for (var t, r = c[e >> 2], i = u(), n = e + 4, s = 0; s <= r; ++s) {
                            var o, a = e + 4 + s * l;
                            s != r && 0 != i[a >> f] || (o = d(n, a - n), void 0 === t ? t = o : t = t + String.fromCharCode(0) + o, n = a + l)
                        }
                        return L(e), t
                    }, toWireType: function (e, t) {
                        "string" != typeof t && k("Cannot pass non-string to C++ string type " + n);
                        var r = o(t), i = gt(4 + r + l);
                        return c[i >> 2] = r >> f, s(t, i + 4, r + l), null !== e && e.push(L, i), i
                    }, argPackAdvance: 8, readValueFromPointer: Ge, destructorFunction: function (e) {
                        L(e)
                    }
                })
            }, q: function (e, t) {
                C(e, {
                    isVoid: !0, name: t = x(t), argPackAdvance: 0, fromWireType: function () {
                    }, toWireType: function (e, t) {
                    }
                })
            }, i: function () {
                return Date.now()
            }, d: function (e, t, r, i) {
                (e = dt[e])(t = Qe.toValue(t), r = void 0 === (t = lt[e = r]) ? x(e) : t, null, i)
            }, g: Je, e: function (e, t) {
                var r = function (e, t) {
                    for (var r, i, n = new Array(e), s = 0; s < e; ++s) n[s] = (r = c[t + 4 * s >> 2], void 0 === (i = A[r]) && k("parameter " + s + " has unknown type " + We(r)), i);
                    return n
                }(e, t), t = r[0], i = t.name + "_$" + r.slice(1).map(function (e) {
                    return e.name
                }).join("_") + "$", n = ut[i];
                if (void 0 !== n) return n;
                for (var s = ["retType"], o = [t], a = "", l = 0; l < e - 1; ++l) a += (0 !== l ? ", " : "") + "arg" + l, s.push("argType" + l), o.push(r[1 + l]);
                for (var d = "return function " + ye("methodCaller_" + i) + "(handle, name, destructors, args) {\n", u = 0, l = 0; l < e - 1; ++l) d += "    var arg" + l + " = argType" + l + ".readValueFromPointer(args" + (u ? "+" + u : "") + ");\n", u += r[l + 1].argPackAdvance;
                for (d += "    var rv = handle[name](" + a + ");\n", l = 0; l < e - 1; ++l) r[l + 1].deleteObject && (d += "    argType" + l + ".deleteObject(arg" + l + ");\n");
                t.isVoid || (d += "    return retType.toWireType(destructors, rv);\n"), s.push(d += "};\n");
                var t = Ke(Function, s).apply(null, o), f = dt.length;
                return dt.push(t), ut[i] = n = f
            }, a: function () {
                v("")
            }, A: function (e, t, r) {
                h.copyWithin(e, t, t + r)
            }, v: function (e) {
                h.length, v("OOM")
            }, y: function (o, a) {
                var l = 0;
                return ht().forEach(function (e, t) {
                    for (var r = a + l, i = (c[o + 4 * t >> 2] = r, e), n = r, s = 0; s < i.length; ++s) f[n++ >> 0] = i.charCodeAt(s);
                    f[n >> 0] = 0, l += e.length + 1
                }), 0
            }, z: function (e, t) {
                var r = ht(), i = (c[e >> 2] = r.length, 0);
                return r.forEach(function (e) {
                    i += e.length + 1
                }), c[t >> 2] = i, 0
            }, n: function (e) {
                try {
                    var t = U.getStreamFromFD(e);
                    return S.close(t), 0
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return e.errno;
                    throw e
                }
            }, x: function (e, t) {
                try {
                    var r = U.getStreamFromFD(e), i = r.tty ? 2 : S.isDir(r.mode) ? 3 : S.isLink(r.mode) ? 7 : 4;
                    return f[t >> 0] = i, 0
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return e.errno;
                    throw e
                }
            }, B: function (e, t, r, i) {
                try {
                    var n = function (e, t, r) {
                        for (var i = 0, n = 0; n < r; n++) {
                            var s = c[t >> 2], o = c[t + 4 >> 2], s = (t += 8, S.read(e, f, s, o, void 0));
                            if (s < 0) return -1;
                            if (i += s, s < o) break
                        }
                        return i
                    }(U.getStreamFromFD(e), t, r);
                    return d[i >> 2] = n, 0
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return e.errno;
                    throw e
                }
            }, t: function (e, t, r, i, n) {
                try {
                    var s = r + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + 4294967296 * r : NaN;
                    if (isNaN(s)) return 61;
                    var o = U.getStreamFromFD(e);
                    return S.llseek(o, s, i), y = [o.position >>> 0, (g = o.position, 1 <= +Math.abs(g) ? 0 < g ? (0 | Math.min(+Math.floor(g / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((g - (~~g >>> 0)) / 4294967296) >>> 0 : 0)], d[n >> 2] = y[0], d[n + 4 >> 2] = y[1], o.getdents && 0 === s && 0 === i && (o.getdents = null), 0
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return e.errno;
                    throw e
                }
            }, m: function (e, t, r, i) {
                try {
                    var n = function (e, t, r) {
                        for (var i = 0, n = 0; n < r; n++) {
                            var s = c[t >> 2], o = c[t + 4 >> 2], s = (t += 8, S.write(e, f, s, o, void 0));
                            if (s < 0) return -1;
                            i += s
                        }
                        return i
                    }(U.getStreamFromFD(e), t, r);
                    return c[i >> 2] = n, 0
                } catch (e) {
                    if (void 0 !== S && e instanceof S.ErrnoError) return e.errno;
                    throw e
                }
            }, h: function (e) {
            }
        }, L = (!function () {
            var t = {a: _t};

            function r(e, t) {
                var e = e.exports;
                _.asm = e, e = _.asm.F.buffer, q = e, _.HEAP8 = f = new Int8Array(e), _.HEAP16 = l = new Int16Array(e), _.HEAP32 = d = new Int32Array(e), _.HEAPU8 = h = new Uint8Array(e), _.HEAPU16 = K = new Uint16Array(e), _.HEAPU32 = c = new Uint32Array(e), _.HEAPF32 = X = new Float32Array(e), _.HEAPF64 = Z = new Float64Array(e), J = _.asm.J, e = _.asm.G, ne.unshift(e), ae()
            }

            function i(e) {
                r(e.instance)
            }

            function n(e) {
                return function () {
                    if (!s && (V || u)) {
                        if ("function" == typeof fetch && !de(p)) return fetch(p, {credentials: "same-origin"}).then(function (e) {
                            if (e.ok) return e.arrayBuffer();
                            throw"failed to load wasm binary file at '" + p + "'"
                        }).catch(function () {
                            return ue(p)
                        });
                        if (m) return new Promise(function (t, e) {
                            m(p, function (e) {
                                t(new Uint8Array(e))
                            }, e)
                        })
                    }
                    return Promise.resolve().then(function () {
                        return ue(p)
                    })
                }().then(function (e) {
                    return WebAssembly.instantiate(e, t)
                }).then(function (e) {
                    return e
                }).then(e, function (e) {
                    a("failed to asynchronously prepare wasm: " + e), v(e)
                })
            }

            if (oe(), _.instantiateWasm) try {
                return _.instantiateWasm(t, r)
            } catch (t) {
                return a("Module.instantiateWasm callback failed with error: " + t)
            }
            s || "function" != typeof WebAssembly.instantiateStreaming || le(p) || de(p) || j || "function" != typeof fetch ? n(i) : fetch(p, {credentials: "same-origin"}).then(function (e) {
                return WebAssembly.instantiateStreaming(e, t).then(i, function (e) {
                    return a("wasm streaming compile failed: " + e), a("falling back to ArrayBuffer instantiation"), n(i)
                })
            })
        }(), _.___wasm_call_ctors = function () {
            return (_.___wasm_call_ctors = _.asm.G).apply(null, arguments)
        }, _._free = function () {
            return (L = _._free = _.asm.H).apply(null, arguments)
        }), gt = _._malloc = function () {
            return (gt = _._malloc = _.asm.I).apply(null, arguments)
        }, yt = _.___errno_location = function () {
            return (yt = _.___errno_location = _.asm.K).apply(null, arguments)
        }, vt = _.___getTypeName = function () {
            return (vt = _.___getTypeName = _.asm.L).apply(null, arguments)
        };
        _.___embind_register_native_and_builtin_types = function () {
            return (_.___embind_register_native_and_builtin_types = _.asm.M).apply(null, arguments)
        };
        var bt, wt = _._emscripten_builtin_memalign = function () {
            return (wt = _._emscripten_builtin_memalign = _.asm.N).apply(null, arguments)
        }, Et = _.___cxa_is_pointer_type = function () {
            return (Et = _.___cxa_is_pointer_type = _.asm.O).apply(null, arguments)
        };

        function St() {
            function e() {
                if (!bt && (bt = !0, _.calledRun = !0, !Y)) {
                    if (_.noFSInit || S.init.initialized || S.init(), S.ignorePermissions = !1, fe(ne), _.onRuntimeInitialized && _.onRuntimeInitialized(), _.postRun) for ("function" == typeof _.postRun && (_.postRun = [_.postRun]); _.postRun.length;) e = _.postRun.shift(), se.unshift(e);
                    var e;
                    fe(se)
                }
            }

            if (!(0 < r)) {
                if (_.preRun) for ("function" == typeof _.preRun && (_.preRun = [_.preRun]); _.preRun.length;) t = _.preRun.shift(), ie.unshift(t);
                var t;
                fe(ie), 0 < r || (_.setStatus ? (_.setStatus("Running..."), setTimeout(function () {
                    setTimeout(function () {
                        _.setStatus("")
                    }, 1), e()
                }, 1)) : e())
            }
        }

        if (_.dynCall_viiijj = function () {
            return (_.dynCall_viiijj = _.asm.P).apply(null, arguments)
        }, _.dynCall_jij = function () {
            return (_.dynCall_jij = _.asm.Q).apply(null, arguments)
        }, _.dynCall_jii = function () {
            return (_.dynCall_jii = _.asm.R).apply(null, arguments)
        }, _.dynCall_jiji = function () {
            return (_.dynCall_jiji = _.asm.S).apply(null, arguments)
        }, _._ff_h264_cabac_tables = 122748, i = function e() {
            bt || St(), bt || (i = e)
        }, _.preInit) for ("function" == typeof _.preInit && (_.preInit = [_.preInit]); 0 < _.preInit.length;) _.preInit.pop()();
        St(), z.exports = _
    }), n = i(function (e) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }), S = (r(n), i(function (e) {
        e.exports = function (e) {
            if (Array.isArray(e)) return n(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), U = (r(S), i(function (e) {
        e.exports = function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), x = (r(U), i(function (e) {
        e.exports = function (e, t) {
            if (e) {
                if ("string" == typeof e) return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), B = (r(x), i(function (e) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), V = (r(B), r(i(function (e) {
        e.exports = function (e) {
            return S(e) || U(e) || x(e) || B()
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }))), e = i(function (S) {
        var U = w.default;

        function e() {
            S.exports = function () {
                return o
            }, S.exports.__esModule = !0, S.exports.default = S.exports;
            var o = {}, e = Object.prototype, l = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {},
                i = t.iterator || "@@iterator", r = t.asyncIterator || "@@asyncIterator",
                n = t.toStringTag || "@@toStringTag";

            function s(e, t, r) {
                return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                s({}, "")
            } catch (e) {
                s = function (e, t, r) {
                    return e[t] = r
                }
            }

            function a(e, t, r, i) {
                var n, s, o, a, t = t && t.prototype instanceof f ? t : f, t = Object.create(t.prototype),
                    i = new b(i || []);
                return t._invoke = (n = e, s = r, o = i, a = "suspendedStart", function (e, t) {
                    if ("executing" === a) throw new Error("Generator is already running");
                    if ("completed" === a) {
                        if ("throw" === e) throw t;
                        return E()
                    }
                    for (o.method = e, o.arg = t; ;) {
                        var r = o.delegate;
                        if (r) {
                            r = function e(t, r) {
                                var i = t.iterator[r.method];
                                if (void 0 === i) {
                                    if (r.delegate = null, "throw" === r.method) {
                                        if (t.iterator.return && (r.method = "return", r.arg = void 0, e(t, r), "throw" === r.method)) return u;
                                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return u
                                }
                                i = d(i, t.iterator, r.arg);
                                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, u;
                                i = i.arg;
                                return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, u) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, u)
                            }(r, o);
                            if (r) {
                                if (r === u) continue;
                                return r
                            }
                        }
                        if ("next" === o.method) o.sent = o._sent = o.arg; else if ("throw" === o.method) {
                            if ("suspendedStart" === a) throw a = "completed", o.arg;
                            o.dispatchException(o.arg)
                        } else "return" === o.method && o.abrupt("return", o.arg);
                        a = "executing";
                        r = d(n, s, o);
                        if ("normal" === r.type) {
                            if (a = o.done ? "completed" : "suspendedYield", r.arg === u) continue;
                            return {value: r.arg, done: o.done}
                        }
                        "throw" === r.type && (a = "completed", o.method = "throw", o.arg = r.arg)
                    }
                }), t
            }

            function d(e, t, r) {
                try {
                    return {type: "normal", arg: e.call(t, r)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            o.wrap = a;
            var u = {};

            function f() {
            }

            function h() {
            }

            function c() {
            }

            var t = {}, p = (s(t, i, function () {
                    return this
                }), Object.getPrototypeOf), p = p && p(p(w([]))),
                m = (p && p !== e && l.call(p, i) && (t = p), c.prototype = f.prototype = Object.create(t));

            function _(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    s(e, t, function (e) {
                        return this._invoke(t, e)
                    })
                })
            }

            function g(o, a) {
                var t;
                this._invoke = function (r, i) {
                    function e() {
                        return new a(function (e, t) {
                            !function t(e, r, i, n) {
                                var s, e = d(o[e], o, r);
                                if ("throw" !== e.type) return (r = (s = e.arg).value) && "object" == U(r) && l.call(r, "__await") ? a.resolve(r.__await).then(function (e) {
                                    t("next", e, i, n)
                                }, function (e) {
                                    t("throw", e, i, n)
                                }) : a.resolve(r).then(function (e) {
                                    s.value = e, i(s)
                                }, function (e) {
                                    return t("throw", e, i, n)
                                });
                                n(e.arg)
                            }(r, i, e, t)
                        })
                    }

                    return t = t ? t.then(e, e) : e()
                }
            }

            function y(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function v(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function b(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(y, this), this.reset(!0)
            }

            function w(t) {
                if (t) {
                    var r, e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) return r = -1, (e = function e() {
                        for (; ++r < t.length;) if (l.call(t, r)) return e.value = t[r], e.done = !1, e;
                        return e.value = void 0, e.done = !0, e
                    }).next = e
                }
                return {next: E}
            }

            function E() {
                return {value: void 0, done: !0}
            }

            return s(m, "constructor", h.prototype = c), s(c, "constructor", h), h.displayName = s(c, n, "GeneratorFunction"), o.isGeneratorFunction = function (e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }, o.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, c) : (e.__proto__ = c, s(e, n, "GeneratorFunction")), e.prototype = Object.create(m), e
            }, o.awrap = function (e) {
                return {__await: e}
            }, _(g.prototype), s(g.prototype, r, function () {
                return this
            }), o.AsyncIterator = g, o.async = function (e, t, r, i, n) {
                void 0 === n && (n = Promise);
                var s = new g(a(e, t, r, i), n);
                return o.isGeneratorFunction(t) ? s : s.next().then(function (e) {
                    return e.done ? e.value : s.next()
                })
            }, _(m), s(m, n, "Generator"), s(m, i, function () {
                return this
            }), s(m, "toString", function () {
                return "[object Generator]"
            }), o.keys = function (r) {
                var e, i = [];
                for (e in r) i.push(e);
                return i.reverse(), function e() {
                    for (; i.length;) {
                        var t = i.pop();
                        if (t in r) return e.value = t, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, o.values = w, b.prototype = {
                constructor: b, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(v), !e) for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (r) {
                    if (this.done) throw r;
                    var i = this;

                    function e(e, t) {
                        return s.type = "throw", s.arg = r, i.next = e, t && (i.method = "next", i.arg = void 0), !!t
                    }

                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t], s = n.completion;
                        if ("root" === n.tryLoc) return e("end");
                        if (n.tryLoc <= this.prev) {
                            var o = l.call(n, "catchLoc"), a = l.call(n, "finallyLoc");
                            if (o && a) {
                                if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return e(n.finallyLoc)
                            } else if (o) {
                                if (this.prev < n.catchLoc) return e(n.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return e(n.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && l.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var n = i;
                            break
                        }
                    }
                    var s = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return s.type = e, s.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), v(r), u
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r, i, n = this.tryEntries[t];
                        if (n.tryLoc === e) return "throw" === (r = n.completion).type && (i = r.arg, v(n)), i
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, r) {
                    return this.delegate = {
                        iterator: w(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, o
        }

        S.exports = e, S.exports.__esModule = !0, S.exports.default = S.exports
    }), t = (r(e), e()), Q = t;
    try {
        regeneratorRuntime = t
    } catch (v) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
    }
    var A = 1e-6, s = "undefined" != typeof Float32Array ? Float32Array : Array;

    function T() {
        var e = new s(16);
        return s != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
    }

    function k(e) {
        e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1
    }

    Math.hypot || (Math.hypot = function () {
        for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
        return Math.sqrt(e)
    });
    var C = function (e, t, r, i, n, s, o) {
        var a = 1 / (t - r), l = 1 / (i - n), d = 1 / (s - o);
        return e[0] = -2 * a, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * d, e[11] = 0, e[12] = (t + r) * a, e[13] = (n + i) * l, e[14] = (o + s) * d, e[15] = 1, e
    };

    function F(e, t, r) {
        var i = new s(3);
        return i[0] = e, i[1] = t, i[2] = r, i
    }

    e = new s(3), s != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0);

    function ee(g, e) {
        e && g.pixelStorei(g.UNPACK_ALIGNMENT, 1), e = s(g.VERTEX_SHADER, "\n            attribute vec4 aVertexPosition;\n            attribute vec2 aTexturePosition;\n            uniform mat4 uModelMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uProjectionMatrix;\n            varying lowp vec2 vTexturePosition;\n            void main(void) {\n              gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\n              vTexturePosition = aTexturePosition;\n            }\n        "), t = s(g.FRAGMENT_SHADER, "\n            precision highp float;\n            varying highp vec2 vTexturePosition;\n            uniform int isyuv;\n            uniform sampler2D rgbaTexture;\n            uniform sampler2D yTexture;\n            uniform sampler2D uTexture;\n            uniform sampler2D vTexture;\n\n            const mat4 YUV2RGB = mat4( 1.1643828125, 0, 1.59602734375, -.87078515625,\n                                       1.1643828125, -.39176171875, -.81296875, .52959375,\n                                       1.1643828125, 2.017234375, 0, -1.081390625,\n                                       0, 0, 0, 1);\n\n\n            void main(void) {\n\n                if (isyuv>0) {\n\n                    highp float y = texture2D(yTexture,  vTexturePosition).r;\n                    highp float u = texture2D(uTexture,  vTexturePosition).r;\n                    highp float v = texture2D(vTexture,  vTexturePosition).r;\n                    gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;\n\n                } else {\n                    gl_FragColor =  texture2D(rgbaTexture, vTexturePosition);\n                }\n            }\n        "), r = g.createProgram(), g.attachShader(r, e), g.attachShader(r, t), g.linkProgram(r);
        var t, r, y = {
                program: e = g.getProgramParameter(r, g.LINK_STATUS) ? r : (console.log("Unable to initialize the shader program: " + g.getProgramInfoLog(r)), null),
                attribLocations: {
                    vertexPosition: g.getAttribLocation(e, "aVertexPosition"),
                    texturePosition: g.getAttribLocation(e, "aTexturePosition")
                },
                uniformLocations: {
                    projectionMatrix: g.getUniformLocation(e, "uProjectionMatrix"),
                    modelMatrix: g.getUniformLocation(e, "uModelMatrix"),
                    viewMatrix: g.getUniformLocation(e, "uViewMatrix"),
                    rgbatexture: g.getUniformLocation(e, "rgbaTexture"),
                    ytexture: g.getUniformLocation(e, "yTexture"),
                    utexture: g.getUniformLocation(e, "uTexture"),
                    vtexture: g.getUniformLocation(e, "vTexture"),
                    isyuv: g.getUniformLocation(e, "isyuv")
                }
            },
            v = (t = g.createBuffer(), g.bindBuffer(g.ARRAY_BUFFER, t), g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1]), g.STATIC_DRAW), r = (r = []).concat.apply(r, [[0, 1], [1, 1], [1, 0], [0, 0]]), e = g.createBuffer(), g.bindBuffer(g.ARRAY_BUFFER, e), g.bufferData(g.ARRAY_BUFFER, new Float32Array(r), g.STATIC_DRAW), r = g.createBuffer(), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, r), g.bufferData(g.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), g.STATIC_DRAW), {
                position: t,
                texPosition: e,
                indices: r
            }), i = n(), b = n(), w = n(), E = n();

        function n() {
            var e = g.createTexture();
            return g.bindTexture(g.TEXTURE_2D, e), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), e
        }

        function s(e, t) {
            e = g.createShader(e);
            return g.shaderSource(e, t), g.compileShader(e), g.getShaderParameter(e, g.COMPILE_STATUS) ? e : (console.log("An error occurred compiling the shaders: " + g.getShaderInfoLog(e)), g.deleteShader(e), null)
        }

        function o(e, t) {
            g.viewport(0, 0, e, t), g.clearColor(0, 0, 0, 0), g.clearDepth(1), g.enable(g.DEPTH_TEST), g.depthFunc(g.LEQUAL), g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
            var r, i, n, s, o, a, l, d, u, f, h, e = T(), t = (C(e, -1, 1, -1, 1, .1, 100), T()), c = (k(t), T()),
                p = (r = c, i = F(0, 0, 0), n = F(0, 0, -1), _ = F(0, 1, 0), a = i[0], l = i[1], i = i[2], d = _[0], u = _[1], _ = _[2], f = n[0], h = n[1], n = n[2], Math.abs(a - f) < A && Math.abs(l - h) < A && Math.abs(i - n) < A ? k(r) : (n = i - n, m = u * (n *= p = 1 / Math.hypot(f = a - f, h = l - h, n)) - _ * (h *= p), _ = _ * (f *= p) - d * n, d = d * h - u * f, (p = Math.hypot(m, _, d)) ? (m *= p = 1 / p, _ *= p, d *= p) : d = _ = m = 0, u = h * d - n * _, s = n * m - f * d, o = f * _ - h * m, (p = Math.hypot(u, s, o)) ? (u *= p = 1 / p, s *= p, o *= p) : o = s = u = 0, r[0] = m, r[1] = u, r[2] = f, r[3] = 0, r[4] = _, r[5] = s, r[6] = h, r[7] = 0, r[8] = d, r[9] = o, r[10] = n, r[11] = 0, r[12] = -(m * a + _ * l + d * i), r[13] = -(u * a + s * l + o * i), r[14] = -(f * a + h * l + n * i), r[15] = 1), g.FLOAT),
                m = (g.bindBuffer(g.ARRAY_BUFFER, v.position), g.vertexAttribPointer(y.attribLocations.vertexPosition, 3, p, !1, 0, 0), g.enableVertexAttribArray(y.attribLocations.vertexPosition), g.FLOAT),
                _ = (g.bindBuffer(g.ARRAY_BUFFER, v.texPosition), g.vertexAttribPointer(y.attribLocations.texturePosition, 2, m, !1, 0, 0), g.enableVertexAttribArray(y.attribLocations.texturePosition), g.activeTexture(g.TEXTURE0 + 3), g.bindTexture(g.TEXTURE_2D, b), g.activeTexture(g.TEXTURE0 + 4), g.bindTexture(g.TEXTURE_2D, w), g.activeTexture(g.TEXTURE0 + 5), g.bindTexture(g.TEXTURE_2D, E), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, v.indices), g.useProgram(y.program), g.uniformMatrix4fv(y.uniformLocations.projectionMatrix, !1, e), g.uniformMatrix4fv(y.uniformLocations.modelMatrix, !1, t), g.uniformMatrix4fv(y.uniformLocations.viewMatrix, !1, c), g.uniform1i(y.uniformLocations.rgbatexture, 2), g.uniform1i(y.uniformLocations.ytexture, 3), g.uniform1i(y.uniformLocations.utexture, 4), g.uniform1i(y.uniformLocations.vtexture, 5), g.uniform1i(y.uniformLocations.isyuv, 1), g.UNSIGNED_SHORT);
            g.drawElements(g.TRIANGLES, 6, _, 0)
        }

        return {
            render: function (e, t, r, i, n) {
                g.activeTexture(g.TEXTURE0), g.bindTexture(g.TEXTURE_2D, b), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e, t, 0, g.LUMINANCE, g.UNSIGNED_BYTE, r), g.activeTexture(g.TEXTURE1), g.bindTexture(g.TEXTURE_2D, w), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e / 2, t / 2, 0, g.LUMINANCE, g.UNSIGNED_BYTE, i), g.activeTexture(g.TEXTURE2), g.bindTexture(g.TEXTURE_2D, E), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e / 2, t / 2, 0, g.LUMINANCE, g.UNSIGNED_BYTE, n), o(e, t)
            }, renderYUV: function (e, t, r) {
                var i = r.slice(0, e * t), n = r.slice(e * t, e * t * 5 / 4), r = r.slice(e * t * 5 / 4, e * t * 3 / 2);
                g.activeTexture(g.TEXTURE0), g.bindTexture(g.TEXTURE_2D, b), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e, t, 0, g.LUMINANCE, g.UNSIGNED_BYTE, i), g.activeTexture(g.TEXTURE1), g.bindTexture(g.TEXTURE_2D, w), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e / 2, t / 2, 0, g.LUMINANCE, g.UNSIGNED_BYTE, n), g.activeTexture(g.TEXTURE2), g.bindTexture(g.TEXTURE_2D, E), g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, e / 2, t / 2, 0, g.LUMINANCE, g.UNSIGNED_BYTE, r), o(e, t)
            }, destroy: function () {
                g.deleteProgram(y.program), g.deleteBuffer(v.position), g.deleteBuffer(v.texPosition), g.deleteBuffer(v.indices), g.deleteTexture(i), g.deleteTexture(b), g.deleteTexture(w), g.deleteTexture(E), E = w = b = i = v = y = null
            }
        }
    }

    var te = "fetch", re = "player", ie = "mp4", I = "debug", D = "warn", ne = {
            playType: re,
            container: "",
            videoBuffer: 1e3,
            videoBufferDelay: 1e3,
            networkDelay: 1e4,
            isResize: !0,
            isFullResize: !1,
            isFlv: !1,
            isHls: !1,
            isFmp4: !1,
            isWebrtc: !1,
            isWebrtcForZLM: !1,
            isNakedFlow: !1,
            isMpeg4: !1,
            debug: !1,
            debugLevel: D,
            debugUuid: "",
            isMulti: !1,
            hotKey: !1,
            loadingTimeout: 10,
            heartTimeout: 10,
            timeout: 10,
            pageVisibilityHiddenTimeout: 300,
            loadingTimeoutReplay: !0,
            heartTimeoutReplay: !0,
            loadingTimeoutReplayTimes: 3,
            heartTimeoutReplayTimes: 3,
            heartTimeoutReplayUseLastFrameShow: !1,
            replayUseLastFrameShow: !1,
            supportDblclickFullscreen: !1,
            showBandwidth: !1,
            showPerformance: !1,
            mseCorrectTimeDuration: 20,
            keepScreenOn: !0,
            isNotMute: !1,
            hasAudio: !0,
            hasVideo: !0,
            operateBtns: {
                fullscreen: !1,
                screenshot: !1,
                play: !1,
                audio: !1,
                record: !1,
                ptz: !1,
                quality: !1,
                zoom: !1,
                close: !1,
                scale: !1,
                performance: !1,
                aiFace: !1,
                aiObject: !1,
                fullscreenFn: null,
                fullscreenExitFn: null,
                screenshotFn: null,
                playFn: null,
                pauseFn: null,
                recordFn: null,
                recordStopFn: null
            },
            extendOperateBtns: [],
            contextmenuBtns: [],
            watermarkConfig: {},
            controlAutoHide: !1,
            hasControl: !1,
            loadingIcon: !0,
            loadingText: "",
            background: "",
            backgroundLoadingShow: !1,
            loadingBackground: "",
            decoder: "decoder-pro.js",
            decoderAudio: "decoder-pro-audio.js",
            decoderWASM: "",
            isDecoderUseCDN: !1,
            url: "",
            rotate: 0,
            mirrorRotate: "none",
            playbackConfig: {
                playList: [],
                fps: "",
                showControl: !0,
                showRateBtn: !1,
                rateConfig: [],
                isCacheBeforeDecodeForFpsRender: !1,
                uiUsePlaybackPause: !1,
                isPlaybackPauseClearCache: !0,
                isUseFpsRender: !1,
                isUseLocalCalculateTime: !1,
                localOneFrameTimestamp: 40,
                supportWheel: !1,
                useWCS: !1
            },
            qualityConfig: [],
            defaultStreamQuality: "",
            scaleConfig: ["拉伸", "缩放", "正常"],
            forceNoOffscreen: !0,
            hiddenAutoPause: !1,
            protocol: 2,
            demuxType: "flv",
            useWasm: !1,
            useWCS: !1,
            useSIMD: !0,
            wcsUseVideoRender: !0,
            wasmUseVideoRender: !0,
            mseUseCanvasRender: !1,
            hlsUseCanvasRender: !1,
            useMSE: !1,
            useOffscreen: !1,
            useWebGPU: !1,
            mseDecodeErrorReplay: !0,
            wcsDecodeErrorReplay: !0,
            wasmDecodeErrorReplay: !0,
            autoWasm: !0,
            webglAlignmentErrorReplay: !0,
            webglContextLostErrorReplay: !0,
            openWebglAlignment: !1,
            syncAudioAndVideo: !1,
            playbackDelayTime: 1e3,
            playbackFps: 25,
            playbackForwardMaxRateDecodeIFrame: 4,
            playbackCurrentTimeMove: !0,
            useVideoRender: !0,
            useCanvasRender: !1,
            networkDelayTimeoutReplay: !1,
            recordType: ie,
            checkFirstIFrame: !0,
            nakedFlowFps: 25,
            audioEngine: null,
            isShowRecordingUI: !0,
            isShowZoomingUI: !0,
            useFaceDetector: !1,
            useObjectDetector: !1,
            ptzClickType: "click",
            ptzStopEmitDelay: .3,
            ptzZoomShow: !1,
            ptzApertureShow: !1,
            ptzFocusShow: !1,
            ptzMoreArrowShow: !1,
            weiXinInAndroidAudioBufferSize: 4800,
            isCrypto: !1,
            isSm4Crypto: !1,
            sm4CryptoKey: "",
            cryptoKey: "",
            cryptoIV: "",
            cryptoKeyUrl: "",
            autoResize: !1,
            useWebFullScreen: !1,
            ptsMaxDiff: 3600,
            aiFaceDetectWidth: 192,
            aiObjectDetectWidth: 192,
            videoRenderSupportScale: !0,
            mediaSourceTsIsMaxDiffReplay: !0,
            controlHtml: "",
            isH265: !1,
            isWebrtcH265: !1,
            supportLockScreenPlayAudio: !0,
            supportHls265: !0,
            isFmp4Private: !1,
            isEmitSEI: !1
        }, se = "initVideo", N = "render", oe = "playAudio", ae = "videoCode", le = "videoCodec", O = "workerFetch",
        de = "workerEnd", ue = "streamEnd", he = "streamVbps", ce = "streamDts", pe = "streamSuccess", G = "fetchError",
        me = "H264(AVC)", _e = "H265(HEVC)", ge = 10, H = 7, j = 8, L = 5, ye = 6, ve = 32, be = 33, W = 34,
        we = "AbortError", Ee = 0;

    function Se(e) {
        return e[0] >> 4 === ge && e[1] === Ee
    }

    i(function (e) {
        var o, t, a, r, i;
        o = "undefined" != typeof window && void 0 !== window.document ? window.document : {}, t = e.exports, a = function () {
            for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, i = t.length, n = {}; r < i; r++) if ((e = t[r]) && e[1] in o) {
                for (r = 0; r < e.length; r++) n[t[0][r]] = e[r];
                return n
            }
            return !1
        }(), r = {change: a.fullscreenchange, error: a.fullscreenerror}, i = {
            request: function (n, s) {
                return new Promise(function (e, t) {
                    var r = function () {
                        this.off("change", r), e()
                    }.bind(this), i = (this.on("change", r), (n = n || o.documentElement)[a.requestFullscreen](s));
                    i instanceof Promise && i.then(r).catch(t)
                }.bind(this))
            }, exit: function () {
                return new Promise(function (e, t) {
                    var r, i;
                    this.isFullscreen ? (r = function () {
                        this.off("change", r), e()
                    }.bind(this), this.on("change", r), (i = o[a.exitFullscreen]()) instanceof Promise && i.then(r).catch(t)) : e()
                }.bind(this))
            }, toggle: function (e, t) {
                return this.isFullscreen ? this.exit() : this.request(e, t)
            }, onchange: function (e) {
                this.on("change", e)
            }, onerror: function (e) {
                this.on("error", e)
            }, on: function (e, t) {
                e = r[e];
                e && o.addEventListener(e, t, !1)
            }, off: function (e, t) {
                e = r[e];
                e && o.removeEventListener(e, t, !1)
            }, raw: a
        }, a ? (Object.defineProperties(i, {
            isFullscreen: {
                get: function () {
                    return Boolean(o[a.fullscreenElement])
                }
            }, element: {
                enumerable: !0, get: function () {
                    return o[a.fullscreenElement]
                }
            }, isEnabled: {
                enumerable: !0, get: function () {
                    return Boolean(o[a.fullscreenEnabled])
                }
            }
        }), t ? e.exports = i : window.screenfull = i) : t ? e.exports = {isEnabled: !1} : window.screenfull = {isEnabled: !1}
    }).isEnabled;
    var Ue = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];

    function Y() {
        return (new Date).getTime()
    }

    function xe() {
        return (performance && "function" == typeof performance.now ? performance : Date).now()
    }

    try {
        if ("object" === ("undefined" == typeof WebAssembly ? "undefined" : Ut(WebAssembly)) && "function" == typeof WebAssembly.instantiate) {
            var z = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
            if (z instanceof WebAssembly.Module) new WebAssembly.Instance(z), WebAssembly.Instance
        }
    } catch (z) {
    }

    function $(e) {
        return null == e
    }

    function Be(e, t) {
        var r, i = (e = t ? e.filter(function (e) {
            return e.type === t
        }) : e)[0], n = null, s = 1;
        if (0 < e.length && ((r = e[1]) && 1e5 < r.ts - i.ts && (i = r, s = 2)), i) for (var o = s; o < e.length; o++) {
            var a = e[o];
            !(a = t && a.type !== t ? null : a) || 1e3 <= a.ts - i.ts && e[o - 1].ts - i.ts < 1e3 && (n = o + 1)
        }
        return n
    }

    function Ae(e) {
        return !0 === e || "true" === e
    }

    const R = Symbol(32), M = Symbol(16), Te = Symbol(8);

    class q {
        constructor(e) {
            this.g = e, this.consumed = 0, e && (this.need = e.next().value)
        }

        setG(e) {
            this.g = e, this.demand(e.next().value, !0)
        }

        consume() {
            this.buffer && this.consumed && (this.buffer.copyWithin(0, this.consumed), this.buffer = this.buffer.subarray(0, this.buffer.length - this.consumed), this.consumed = 0)
        }

        demand(e, t) {
            return t && this.consume(), this.need = e, this.flush()
        }

        read(r) {
            return e = this, l = function* () {
                return this.lastReadPromise && (yield this.lastReadPromise), this.lastReadPromise = new Promise((t, e) => {
                    this.reject = e, this.resolve = e => {
                        delete this.lastReadPromise, delete this.resolve, delete this.need, t(e)
                    }, this.demand(r, !0) || null == (e = this.pull) || e.call(this, r)
                })
            }, new (a = (a = o = void 0) || Promise)(function (r, t) {
                function i(e) {
                    try {
                        s(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(e) {
                    try {
                        s(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? r(e.value) : ((t = e.value) instanceof a ? t : new a(function (e) {
                        e(t)
                    })).then(i, n)
                }

                s((l = l.apply(e, o || [])).next())
            });
            var e, o, a, l
        }

        readU32() {
            return this.read(R)
        }

        readU16() {
            return this.read(M)
        }

        readU8() {
            return this.read(Te)
        }

        close() {
            var e;
            this.g && this.g.return(), this.buffer && this.buffer.subarray(0, 0), null != (e = this.reject) && e.call(this, new Error("EOF")), delete this.lastReadPromise
        }

        flush() {
            if (this.buffer && this.need) {
                let e = null;
                const i = this.buffer.subarray(this.consumed);
                let t = 0;
                var r = e => i.length < (t = e);
                if ("number" == typeof this.need) {
                    if (r(this.need)) return;
                    e = i.subarray(0, t)
                } else if (this.need === R) {
                    if (r(4)) return;
                    e = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3]
                } else if (this.need === M) {
                    if (r(2)) return;
                    e = i[0] << 8 | i[1]
                } else if (this.need === Te) {
                    if (r(1)) return;
                    e = i[0]
                } else if ("buffer" in this.need) {
                    if ("byteOffset" in this.need) {
                        if (r(this.need.byteLength - this.need.byteOffset)) return;
                        new Uint8Array(this.need.buffer, this.need.byteOffset).set(i.subarray(0, t)), e = this.need
                    } else if (this.g) return void this.g.throw(new Error("Unsupported type"))
                } else {
                    if (r(this.need.byteLength)) return;
                    new Uint8Array(this.need).set(i.subarray(0, t)), e = this.need
                }
                return this.consumed += t, this.g ? this.demand(this.g.next(e).value, !0) : this.resolve && this.resolve(e), e
            }
        }

        write(e) {
            if (e instanceof Uint8Array ? this.malloc(e.length).set(e) : "buffer" in e ? this.malloc(e.byteLength).set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) : this.malloc(e.byteLength).set(new Uint8Array(e)), !this.g && !this.resolve) return new Promise(e => this.pull = e);
            this.flush()
        }

        writeU32(e) {
            this.malloc(4).set([e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]), this.flush()
        }

        writeU16(e) {
            this.malloc(2).set([e >> 8 & 255, 255 & e]), this.flush()
        }

        writeU8(e) {
            this.malloc(1)[0] = e, this.flush()
        }

        malloc(e) {
            if (this.buffer) {
                var t = this.buffer.length, r = t + e;
                if (r <= this.buffer.buffer.byteLength - this.buffer.byteOffset) this.buffer = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, r); else {
                    const e = new Uint8Array(r);
                    e.set(this.buffer), this.buffer = e
                }
                return this.buffer.subarray(t, r)
            }
            return this.buffer = new Uint8Array(e), this.buffer
        }
    }

    q.U32 = R, q.U16 = M, q.U8 = Te;
    var t = r(i(function (e) {
        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        e.exports = function (e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", {writable: !1}), e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), a = r(i(function (e) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), ke = t(function e(o) {
        a(this, e), this.log = function (e) {
            if (o._opt.debug && o._opt.debugLevel == I) {
                for (var t, r = o._opt.debugUuid ? "[".concat(o._opt.debugUuid, "]") : "", i = arguments.length, n = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                (t = console).log.apply(t, ["JbPro".concat(r, ":[✅✅✅][").concat(e, "]")].concat(n))
            }
        }, this.warn = function (e) {
            if (o._opt.debug && (o._opt.debugLevel == I || o._opt.debugLevel == D)) {
                for (var t, r = o._opt.debugUuid ? "[".concat(o._opt.debugUuid, "]") : "", i = arguments.length, n = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                (t = console).log.apply(t, ["JbPro".concat(r, ":[❗❗❗][").concat(e, "]")].concat(n))
            }
        }, this.error = function (e) {
            for (var t, r = o._opt.debugUuid ? "[".concat(o._opt.debugUuid, "]") : "", i = arguments.length, n = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
            (t = console).error.apply(t, ["JbPro".concat(r, ":[❌❌❌][").concat(e, "]")].concat(n))
        }
    }), fe = (t(De, [{
        key: "destroy", value: function () {
            this._buffer = null
        }
    }, {
        key: "_fillCurrentWord", value: function () {
            var e, t = this._total_bytes - this._buffer_index;
            t <= 0 ? console.error("ExpGolomb: _fillCurrentWord() but no bytes available", this._total_bytes, this._buffer_index) : (t = Math.min(4, t), (e = new Uint8Array(4)).set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(e.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t)
        }
    }, {
        key: "readBits", value: function (e) {
            if (32 < e && console.error("ExpGolomb: readBits() bits exceeded max 32bits!"), e <= this._current_word_bits_left) return t = this._current_word >>> 32 - e, this._current_word <<= e, this._current_word_bits_left -= e, t;
            var t = this._current_word_bits_left ? this._current_word : 0,
                e = (t >>>= 32 - this._current_word_bits_left, e - this._current_word_bits_left),
                e = (this._fillCurrentWord(), Math.min(e, this._current_word_bits_left)),
                r = this._current_word >>> 32 - e;
            return this._current_word <<= e, this._current_word_bits_left -= e, t << e | r
        }
    }, {
        key: "readBool", value: function () {
            return 1 === this.readBits(1)
        }
    }, {
        key: "readByte", value: function () {
            return this.readBits(8)
        }
    }, {
        key: "_skipLeadingZero", value: function () {
            for (var e = 0; e < this._current_word_bits_left; e++) if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
            return this._fillCurrentWord(), e + this._skipLeadingZero()
        }
    }, {
        key: "readUEG", value: function () {
            var e = this._skipLeadingZero();
            return this.readBits(e + 1) - 1
        }
    }, {
        key: "readSEG", value: function () {
            var e = this.readUEG();
            return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
        }
    }]), De), Ce = (t(P, null, [{
        key: "_ebsp2rbsp", value: function (e) {
            for (var t = e, r = t.byteLength, i = new Uint8Array(r), n = 0, s = 0; s < r; s++) 2 <= s && 3 === t[s] && 0 === t[s - 1] && 0 === t[s - 2] || (i[n] = t[s], n++);
            return new Uint8Array(i.buffer, 0, n)
        }
    }, {
        key: "parseSPS", value: function (e) {
            var e = P._ebsp2rbsp(e), t = new fe(e), e = (t.readByte(), t.readByte()), r = (t.readByte(), t.readByte()),
                i = (t.readUEG(), P.getProfileString(e)), r = P.getLevelString(r), n = 1, s = 420, o = 8;
            if ((100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e || 138 === e || 144 === e) && (3 === (n = t.readUEG()) && t.readBits(1), n <= 3 && (s = [0, 420, 422, 444][n]), o = t.readUEG() + 8, t.readUEG(), t.readBits(1), t.readBool())) for (var a = 3 !== n ? 8 : 12, l = 0; l < a; l++) t.readBool() && P._skipScalingList(t, l < 6 ? 16 : 64);
            t.readUEG();
            e = t.readUEG();
            if (0 === e) t.readUEG(); else if (1 === e) {
                t.readBits(1), t.readSEG(), t.readSEG();
                for (var d = t.readUEG(), u = 0; u < d; u++) t.readSEG()
            }
            var e = t.readUEG(), f = (t.readBits(1), t.readUEG()), h = t.readUEG(), c = t.readBits(1),
                p = (0 === c && t.readBits(1), t.readBits(1), 0), m = 0, _ = 0, g = 0,
                y = (t.readBool() && (p = t.readUEG(), m = t.readUEG(), _ = t.readUEG(), g = t.readUEG()), 1), v = 1,
                b = 0, w = !0, E = 0, S = 0,
                U = (t.readBool() && (t.readBool() && (0 < (x = t.readByte()) && x < 16 ? (y = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][x - 1], v = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][x - 1]) : 255 === x && (y = t.readByte() << 8 | t.readByte(), v = t.readByte() << 8 | t.readByte())), t.readBool() && t.readBool(), t.readBool() && (t.readBits(4), t.readBool() && t.readBits(24)), t.readBool() && (t.readUEG(), t.readUEG()), t.readBool() && (x = t.readBits(32), U = t.readBits(32), w = t.readBool(), b = (E = U) / (S = 2 * x))), 1),
                x = (1 === y && 1 === v || (U = y / v), 0), B = 0,
                B = 0 === n ? (x = 1, 2 - c) : (x = 3 === n ? 1 : 2, (1 === n ? 2 : 1) * (2 - c)), n = 16 * (f + 1),
                f = 16 * (h + 1) * (2 - c), h = (n -= (p + m) * x, f -= (_ + g) * B, Math.ceil(n * U));
            return t.destroy(), t = null, {
                profile_string: i,
                level_string: r,
                bit_depth: o,
                ref_frames: e,
                chroma_format: s,
                chroma_format_string: P.getChromaFormatString(s),
                frame_rate: {fixed: w, fps: b, fps_den: S, fps_num: E},
                sar_ratio: {width: y, height: v},
                codec_size: {width: n, height: f},
                present_size: {width: h, height: f}
            }
        }
    }, {
        key: "parseSPS$2", value: function (e) {
            for (var t = e.subarray(1, 4), r = "avc1.", i = 0; i < 3; i++) {
                var n = t[i].toString(16);
                r += n = n.length < 2 ? "0" + n : n
            }
            var e = P._ebsp2rbsp(e), s = new fe(e), e = (s.readByte(), s.readByte()), o = (s.readByte(), s.readByte()),
                a = (s.readUEG(), P.getProfileString(e)), l = P.getLevelString(o), d = 1, u = 420, f = 8, h = 8;
            if ((100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e || 138 === e || 144 === e) && (3 === (d = s.readUEG()) && s.readBits(1), d <= 3 && (u = [0, 420, 422, 444][d]), f = s.readUEG() + 8, h = s.readUEG() + 8, s.readBits(1), s.readBool())) for (var c = 3 !== d ? 8 : 12, p = 0; p < c; p++) s.readBool() && P._skipScalingList(s, p < 6 ? 16 : 64);
            s.readUEG();
            var m = s.readUEG();
            if (0 === m) s.readUEG(); else if (1 === m) {
                s.readBits(1), s.readSEG(), s.readSEG();
                for (var _ = s.readUEG(), g = 0; g < _; g++) s.readSEG()
            }
            var m = s.readUEG(), y = (s.readBits(1), s.readUEG()), v = s.readUEG(), b = s.readBits(1),
                w = (0 === b && s.readBits(1), s.readBits(1), 0), E = 0, S = 0, U = 0,
                x = (s.readBool() && (w = s.readUEG(), E = s.readUEG(), S = s.readUEG(), U = s.readUEG()), 1), B = 1,
                A = 0, T = !0, k = 0, C = 0,
                F = (s.readBool() && (s.readBool() && (0 < (I = s.readByte()) && I < 16 ? (x = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][I - 1], B = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][I - 1]) : 255 === I && (x = s.readByte() << 8 | s.readByte(), B = s.readByte() << 8 | s.readByte())), s.readBool() && s.readBool(), s.readBool() && (s.readBits(4), s.readBool() && s.readBits(24)), s.readBool() && (s.readUEG(), s.readUEG()), s.readBool() && (I = s.readBits(32), F = s.readBits(32), T = s.readBool(), A = (k = F) / (C = 2 * I))), 1),
                I = (1 === x && 1 === B || (F = x / B), 0), D = 0,
                D = 0 === d ? (I = 1, 2 - b) : (I = 3 === d ? 1 : 2, (1 === d ? 2 : 1) * (2 - b)), y = 16 * (y + 1),
                v = 16 * (v + 1) * (2 - b), b = (y -= (w + E) * I, v -= (S + U) * D, Math.ceil(y * F));
            return s.destroy(), s = null, {
                codec_mimetype: r,
                profile_idc: e,
                level_idc: o,
                profile_string: a,
                level_string: l,
                chroma_format_idc: d,
                bit_depth: f,
                bit_depth_luma: f,
                bit_depth_chroma: h,
                ref_frames: m,
                chroma_format: u,
                chroma_format_string: P.getChromaFormatString(u),
                frame_rate: {fixed: T, fps: A, fps_den: C, fps_num: k},
                sar_ratio: {width: x, height: B},
                codec_size: {width: y, height: v},
                present_size: {width: b, height: v}
            }
        }
    }, {
        key: "_skipScalingList", value: function (e, t) {
            for (var r = 8, i = 8, n = 0; n < t; n++) r = 0 === (i = 0 !== i ? (r + e.readSEG() + 256) % 256 : i) ? r : i
        }
    }, {
        key: "getProfileString", value: function (e) {
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
    }, {
        key: "getLevelString", value: function (e) {
            return (e / 10).toFixed(1)
        }
    }, {
        key: "getChromaFormatString", value: function (e) {
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
    }]), P), Fe = (t(Ie, [{
        key: "read", value: function (e) {
            for (var t, r = 0; e;) {
                if (e < 0 || this.bufpos >= this.buflen) return this.iserro = !0, 0;
                this.iserro = !1, r = (r <<= t = 8 < this.bufoff + e ? 8 - this.bufoff : e) + (this.buffer[this.bufpos] >> 8 - this.bufoff - t & 255 >> 8 - t), this.bufoff += t, e -= t, 8 == this.bufoff && (this.bufpos++, this.bufoff = 0)
            }
            return r
        }
    }, {
        key: "look", value: function (e) {
            var t = this.bufpos, r = this.bufoff, e = this.read(e);
            return this.bufpos = t, this.bufoff = r, e
        }
    }, {
        key: "read_golomb", value: function () {
            for (var e = 0; 0 === this.read(1) && !this.iserro; e++) ;
            return (1 << e) + this.read(e) - 1
        }
    }]), Ie);

    function Ie(e) {
        a(this, Ie), this.buffer = e, this.buflen = e.length, this.bufpos = 0, this.bufoff = 0, this.iserro = !1
    }

    function P() {
        a(this, P)
    }

    function De(e) {
        a(this, De), this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
    }

    function Pe(e) {
        var t = {}, r = new DataView(e.buffer), i = r.getUint8(0), n = r.getUint8(1);
        if (r.getUint8(2), r.getUint8(3), 1 !== i || 0 === n) return {};
        i = 1 + (3 & r.getUint8(4));
        if (3 != i && 4 != i) return {};
        var s = 31 & r.getUint8(5);
        if (0 == s) return {};
        for (var o = 6, a = 0; a < s; a++) {
            var l = r.getUint16(o, !1);
            if (o += 2, 0 !== l) {
                var d = new Uint8Array(e.buffer, o, l), l = (o += l, Ce.parseSPS(d));
                if (0 === a) {
                    t.sps = d, t.timescale = 1e3, t.codecWidth = l.codec_size.width, t.codecHeight = l.codec_size.height, t.presentWidth = l.present_size.width, t.presentHeight = l.present_size.height, t.profile = l.profile_string, t.level = l.level_string, t.bitDepth = l.bit_depth, t.chromaFormat = l.chroma_format, t.sarRatio = l.sar_ratio, t.frameRate = l.frame_rate, !1 !== l.frame_rate.fixed && 0 !== l.frame_rate.fps_num && 0 !== l.frame_rate.fps_den || (t.frameRate = {
                        fixed: !0,
                        fps: 23.976,
                        fps_num: 23976,
                        fps_den: 1e3
                    });
                    var l = t.frameRate.fps_den, u = t.frameRate.fps_num;
                    t.refSampleDuration = t.timescale * (l / u);
                    for (var f = d.subarray(1, 4), h = "avc1.", c = 0; c < 3; c++) {
                        var p = f[c].toString(16);
                        h += p = p.length < 2 ? "0" + p : p
                    }
                    t.codec = h
                }
            }
        }
        var m = r.getUint8(o);
        if (0 === m) return {};
        o++;
        for (var _ = 0; _ < m; _++) {
            var g, y = r.getUint16(o, !1);
            o += 2, 0 !== y && (g = new Uint8Array(e.buffer, o, y), o += y, t.pps = g)
        }
        return t.videoType = "avc", t.sps && (n = t.sps.byteLength, i = new Uint8Array([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n]), (n = new Uint8Array(n + 4)).set(i, 0), n.set(t.sps, 4), t.sps = n), t.pps && (i = t.pps.byteLength, n = new Uint8Array([i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i]), (i = new Uint8Array(i + 4)).set(n, 0), i.set(t.pps, 4), t.pps = i), t
    }

    function Le(e) {
        var t = e.sps, e = e.pps, r = [23, 0, 0, 0, 0, 1, 66, 0, 30, 255];
        return r[0] = 23, r[6] = t[1], r[7] = t[2], r[8] = t[3], r[10] = 225, r[11] = t.byteLength >> 8 & 255, r[12] = 255 & t.byteLength, r.push.apply(r, V(t).concat([1, e.byteLength >> 8 & 255, 255 & e.byteLength], V(e))), new Uint8Array(r)
    }

    function ze(e, t) {
        var r = [],
            t = (r[0] = t ? 23 : 39, r[1] = 1, r[2] = 0, r[3] = 0, r[4] = 0, new Uint8Array(r.length + e.byteLength));
        return t.set(r, 0), t.set(e, r.length), t
    }

    function Re(e) {
        var t = e.byteLength, r = new Uint8Array(4),
            t = (r[0] = t >>> 24 & 255, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, new Uint8Array(t + 4));
        return t.set(r, 0), t.set(e, 4), t
    }

    function K(e) {
        return 31 & e[0]
    }

    function Me(e) {
        return e === ye
    }

    function Ne(e) {
        return e !== H && e !== j && !Me(e)
    }

    function Oe(e) {
        return e === L
    }

    var Ge = function (e) {
        for (var t = e, r = t.byteLength, i = new Uint8Array(r), n = 0, s = 0; s < r; s++) 2 <= s && 3 === t[s] && 0 === t[s - 1] && 0 === t[s - 2] || (i[n] = t[s], n++);
        return new Uint8Array(i.buffer, 0, n)
    }, He = function (e) {
        switch (e) {
            case 0:
                return "4:0:0";
            case 1:
                return "4:2:0";
            case 2:
                return "4:2:2";
            case 3:
                return "4:4:4";
            default:
                return "Unknown"
        }
    };

    function Ve(e) {
        var t = e.vps, r = e.pps, ue = e.sps, e = {configurationVersion: 1},
            i = (i = Ge(t), (i = new fe(i)).readByte(), i.readByte(), i.readBits(4), i.readBits(2), i.readBits(6), {
                num_temporal_layers: i.readBits(3) + 1,
                temporal_id_nested: i.readBool()
            }), n = function () {
                var e = Ge(ue), t = new fe(e), r = (t.readByte(), t.readByte(), t.readBits(4), t.readBits(3));
                t.readBool();
                for (var e = t.readBits(2), z = t.readBool(), i = t.readBits(5), R = t.readByte(), M = t.readByte(), N = t.readByte(), O = t.readByte(), G = t.readByte(), H = t.readByte(), V = t.readByte(), j = t.readByte(), W = t.readByte(), Y = t.readByte(), n = t.readByte(), s = [], $ = [], o = 0; o < r; o++) s.push(t.readBool()), $.push(t.readBool());
                if (0 < r) for (var a = r; a < 8; a++) t.readBits(2);
                for (var l = 0; l < r; l++) s[l] && (t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte(), t.readByte()), s[l] && t.readByte();
                t.readUEG();
                var d = t.readUEG(), u = (3 == d && t.readBits(1), t.readUEG()), f = t.readUEG();
                t.readBool() && (t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG());
                for (var h = t.readUEG(), q = t.readUEG(), K = t.readUEG(), c = t.readBool() ? 0 : r; c <= r; c++) t.readUEG(), t.readUEG(), t.readUEG();
                if (t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG(), t.readBool() && t.readBool()) for (var p = 0; p < 4; p++) for (var m = 0; m < (3 === p ? 2 : 6); m++) if (t.readBool()) {
                    var X = Math.min(64, 1 << 4 + (p << 1));
                    1 < p && t.readSEG();
                    for (var _ = 0; _ < X; _++) t.readSEG()
                } else t.readUEG();
                t.readBool(), t.readBool(), t.readBool() && (t.readByte(), t.readUEG(), t.readUEG(), t.readBool());
                for (var g = t.readUEG(), y = 0, v = 0; v < g; v++) {
                    var b = !1;
                    if (b = 0 !== v ? t.readBool() : b) {
                        v === g && t.readUEG(), t.readBool(), t.readUEG();
                        for (var w = 0, E = 0; E <= y; E++) {
                            var S = t.readBool(), U = !1;
                            S || (U = t.readBool()), (S || U) && w++
                        }
                        y = w
                    } else {
                        for (var x = t.readUEG(), B = t.readUEG(), y = x + B, A = 0; A < x; A++) t.readUEG(), t.readBool();
                        for (var T = 0; T < B; T++) t.readUEG(), t.readBool()
                    }
                }
                if (t.readBool()) for (var Z = t.readUEG(), k = 0; k < Z; k++) {
                    for (var J = 0; J < K + 4; J++) t.readBits(1);
                    t.readBits(1)
                }
                var Q = 0, C = 1, F = 1, ee = !1, I = 1, D = 1;
                if (t.readBool(), t.readBool(), t.readBool()) {
                    if (t.readBool() && (0 < (L = t.readByte()) && L < 16 ? (C = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][L - 1], F = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][L - 1]) : 255 === L && (C = t.readBits(16), F = t.readBits(16))), t.readBool() && t.readBool(), t.readBool() && (t.readBits(3), t.readBool(), t.readBool() && (t.readByte(), t.readByte(), t.readByte())), t.readBool() && (t.readUEG(), t.readUEG()), t.readBool(), t.readBool(), t.readBool(), t.readBool() && (t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG()), t.readBool() && (I = t.readBits(32), D = t.readBits(32), t.readBool() && (t.readUEG(), t.readBool()))) {
                        var P = !1, te = t.readBool(), re = t.readBool();
                        (te || re) && ((P = t.readBool()) && (t.readByte(), t.readBits(5), t.readBool(), t.readBits(5)), t.readBits(4), t.readBits(4), P && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
                        for (var ie = 0; ie <= r; ie++) {
                            var ne = t.readBool(), ee = ne, se = !1, oe = !1;
                            if ((se = ne ? se : t.readBool()) ? t.readSEG() : oe = t.readBool(), oe || (cpbcnt = t.readUEG() + 1), te) for (var ae = 0; ae < 1; ae++) t.readUEG(), t.readUEG(), P && (t.readUEG(), t.readUEG());
                            if (re) for (var le = 0; le < 1; le++) t.readUEG(), t.readUEG(), P && (t.readUEG(), t.readUEG())
                        }
                    }
                    t.readBool() && (t.readBool(), t.readBool(), t.readBool(), Q = t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG(), t.readUEG())
                }
                t.readBool();
                var L = "hvc1.".concat(i, ".1.L").concat(n, ".B0"), de = 1 !== C && 1 !== F ? C / F : 1;
                return t.destroy(), t = null, {
                    codec_mimetype: L,
                    level_string: (n / 30).toFixed(1),
                    profile_idc: i,
                    bit_depth: h + 8,
                    ref_frames: 1,
                    chroma_format: d,
                    chroma_format_string: He(d),
                    general_level_idc: n,
                    general_profile_space: e,
                    general_tier_flag: z,
                    general_profile_idc: i,
                    general_profile_compatibility_flags_1: R,
                    general_profile_compatibility_flags_2: M,
                    general_profile_compatibility_flags_3: N,
                    general_profile_compatibility_flags_4: O,
                    general_constraint_indicator_flags_1: G,
                    general_constraint_indicator_flags_2: H,
                    general_constraint_indicator_flags_3: V,
                    general_constraint_indicator_flags_4: j,
                    general_constraint_indicator_flags_5: W,
                    general_constraint_indicator_flags_6: Y,
                    min_spatial_segmentation_idc: Q,
                    constant_frame_rate: 0,
                    chroma_format_idc: d,
                    bit_depth_luma_minus8: h,
                    bit_depth_chroma_minus8: q,
                    frame_rate: {fixed: ee, fps: D / I, fps_den: I, fps_num: D},
                    sar_ratio: {width: C, height: F},
                    codec_size: {width: u, height: f},
                    present_size: {width: u * de, height: f}
                }
            }(),
            s = (s = Ge(r), (s = new fe(s)).readByte(), s.readByte(), s.readUEG(), s.readUEG(), s.readBool(), s.readBool(), s.readBits(3), s.readBool(), s.readBool(), s.readUEG(), s.readUEG(), s.readSEG(), s.readBool(), s.readBool(), s.readBool() && s.readUEG(), s.readSEG(), s.readSEG(), s.readBool(), s.readBool(), s.readBool(), s.readBool(), o = s.readBool(), s = s.readBool(), a = 1, s && o ? a = 0 : s ? a = 3 : o && (a = 2), {parallelismType: a}),
            e = Object.assign(e, i, n, s), o = 23 + (5 + t.byteLength) + (5 + ue.byteLength) + (5 + r.byteLength),
            a = new Uint8Array(o),
            i = (a[0] = 1, a[1] = (3 & e.general_profile_space) << 6 | (e.general_tier_flag ? 1 : 0) << 5 | 31 & e.general_profile_idc, a[2] = e.general_profile_compatibility_flags_1 || 0, a[3] = e.general_profile_compatibility_flags_2 || 0, a[4] = e.general_profile_compatibility_flags_3 || 0, a[5] = e.general_profile_compatibility_flags_4 || 0, a[6] = e.general_constraint_indicator_flags_1 || 0, a[7] = e.general_constraint_indicator_flags_2 || 0, a[8] = e.general_constraint_indicator_flags_3 || 0, a[9] = e.general_constraint_indicator_flags_4 || 0, a[10] = e.general_constraint_indicator_flags_5 || 0, a[11] = e.general_constraint_indicator_flags_6 || 0, a[12] = 60, a[13] = 240 | (3840 & e.min_spatial_segmentation_idc) >> 8, a[14] = 255 & e.min_spatial_segmentation_idc, a[15] = 252 | 3 & e.parallelismType, a[16] = 252 | 3 & e.chroma_format_idc, a[17] = 248 | 7 & e.bit_depth_luma_minus8, a[18] = 248 | 7 & e.bit_depth_chroma_minus8, a[19] = 0, a[20] = 0, a[21] = (3 & e.constant_frame_rate) << 6 | (7 & e.num_temporal_layers) << 3 | (e.temporal_id_nested ? 1 : 0) << 2 | 3, a[22] = 3, a[23] = 128 | ve, a[24] = 0, a[25] = 1, a[26] = (65280 & t.byteLength) >> 8, a[27] = (255 & t.byteLength) >> 0, a.set(t, 28), a[23 + (5 + t.byteLength) + 0] = 128 | be, a[23 + (5 + t.byteLength) + 1] = 0, a[23 + (5 + t.byteLength) + 2] = 1, a[23 + (5 + t.byteLength) + 3] = (65280 & ue.byteLength) >> 8, a[23 + (5 + t.byteLength) + 4] = (255 & ue.byteLength) >> 0, a.set(ue, 23 + (5 + t.byteLength) + 5), a[23 + (5 + t.byteLength + 5 + ue.byteLength) + 0] = 128 | W, a[23 + (5 + t.byteLength + 5 + ue.byteLength) + 1] = 0, a[23 + (5 + t.byteLength + 5 + ue.byteLength) + 2] = 1, a[23 + (5 + t.byteLength + 5 + ue.byteLength) + 3] = (65280 & r.byteLength) >> 8, a[23 + (5 + t.byteLength + 5 + ue.byteLength) + 4] = (255 & r.byteLength) >> 0, a.set(r, 23 + (5 + t.byteLength + 5 + ue.byteLength) + 5), [28, 0, 0, 0, 0]),
            n = new Uint8Array(i.length + a.byteLength);
        return n.set(i, 0), n.set(a, i.length), n
    }

    function je(e) {
        return (126 & e[0]) >> 1
    }

    function We(e) {
        return parseInt(e) === e
    }

    function Ye(e) {
        if (We(e.length)) {
            for (var t = 0; t < e.length; t++) if (!We(e[t]) || e[t] < 0 || 255 < e[t]) return;
            return 1
        }
    }

    function o(e, t) {
        if (e.buffer && "Uint8Array" === e.name) return e = t ? e.slice ? e.slice() : Array.prototype.slice.call(e) : e;
        if (Array.isArray(e)) {
            if (Ye(e)) return new Uint8Array(e);
            throw new Error("Array contains invalid value: " + e)
        }
        if (We(e.length) && Ye(e)) return new Uint8Array(e);
        throw new Error("unsupported array-like object")
    }

    function l(e) {
        return new Uint8Array(e)
    }

    function d(e, t, r, i, n) {
        null == i && null == n || (e = e.slice ? e.slice(i, n) : Array.prototype.slice.call(e, i, n)), t.set(e, r)
    }

    var $e = {16: 10, 24: 12, 32: 14},
        qe = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
        f = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        u = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        Ke = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
        Xe = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
        Ze = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
        Je = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
        Qe = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
        et = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
        tt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
        rt = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
        it = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
        nt = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
        st = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
        ot = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

    function at(e) {
        for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
        return t
    }

    function h(e) {
        if (!(this instanceof h)) throw Error("AES must be instanitated with `new`");
        Object.defineProperty(this, "key", {value: o(e, !0)}), this._prepare()
    }

    function c(e) {
        if (!(this instanceof c)) throw Error("AES must be instanitated with `new`");
        this.description = "Electronic Code Block", this.name = "ecb", this._aes = new h(e)
    }

    function p(e, t) {
        if (!(this instanceof p)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
        } else t = l(16);
        this._lastCipherblock = o(t, !0), this._aes = new h(e)
    }

    function m(e, t, r) {
        if (!(this instanceof m)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Cipher Feedback", this.name = "cfb", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)")
        } else t = l(16);
        this.segmentSize = r = r || 1, this._shiftRegister = o(t, !0), this._aes = new h(e)
    }

    function _(e, t) {
        if (!(this instanceof _)) throw Error("AES must be instanitated with `new`");
        if (this.description = "Output Feedback", this.name = "ofb", t) {
            if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
        } else t = l(16);
        this._lastPrecipher = o(t, !0), this._lastPrecipherIndex = 16, this._aes = new h(e)
    }

    function g(e) {
        if (!(this instanceof g)) throw Error("Counter must be instanitated with `new`");
        "number" == typeof (e = 0 === e || e ? e : 1) ? (this._counter = l(16), this.setValue(e)) : this.setBytes(e)
    }

    function lt(e, t) {
        if (!(this instanceof lt)) throw Error("AES must be instanitated with `new`");
        this.description = "Counter", this.name = "ctr", t instanceof g || (t = new g(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new h(e)
    }

    h.prototype._prepare = function () {
        var e = $e[this.key.length];
        if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
        this._Ke = [], this._Kd = [];
        for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
        for (var r, i = 4 * (e + 1), n = this.key.length / 4, s = at(this.key), t = 0; t < n; t++) this._Ke[r = t >> 2][t % 4] = s[t], this._Kd[e - r][t % 4] = s[t];
        for (var o, a = 0, l = n; l < i;) {
            if (o = s[n - 1], s[0] ^= f[o >> 16 & 255] << 24 ^ f[o >> 8 & 255] << 16 ^ f[255 & o] << 8 ^ f[o >> 24 & 255] ^ qe[a] << 24, a += 1, 8 != n) for (t = 1; t < n; t++) s[t] ^= s[t - 1]; else {
                for (t = 1; t < n / 2; t++) s[t] ^= s[t - 1];
                for (o = s[n / 2 - 1], s[n / 2] ^= f[255 & o] ^ f[o >> 8 & 255] << 8 ^ f[o >> 16 & 255] << 16 ^ f[o >> 24 & 255] << 24, t = n / 2 + 1; t < n; t++) s[t] ^= s[t - 1]
            }
            for (t = 0; t < n && l < i;) this._Ke[d = l >> 2][u = l % 4] = s[t], this._Kd[e - d][u] = s[t++], l++
        }
        for (var d = 1; d < e; d++) for (var u = 0; u < 4; u++) o = this._Kd[d][u], this._Kd[d][u] = it[o >> 24 & 255] ^ nt[o >> 16 & 255] ^ st[o >> 8 & 255] ^ ot[255 & o]
    }, h.prototype.encrypt = function (e) {
        if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
        for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], i = at(e), n = 0; n < 4; n++) i[n] ^= this._Ke[0][n];
        for (var s = 1; s < t; s++) {
            for (n = 0; n < 4; n++) r[n] = Ke[i[n] >> 24 & 255] ^ Xe[i[(n + 1) % 4] >> 16 & 255] ^ Ze[i[(n + 2) % 4] >> 8 & 255] ^ Je[255 & i[(n + 3) % 4]] ^ this._Ke[s][n];
            i = r.slice()
        }
        for (var o, a = l(16), n = 0; n < 4; n++) o = this._Ke[t][n], a[4 * n] = 255 & (f[i[n] >> 24 & 255] ^ o >> 24), a[4 * n + 1] = 255 & (f[i[(n + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * n + 2] = 255 & (f[i[(n + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * n + 3] = 255 & (f[255 & i[(n + 3) % 4]] ^ o);
        return a
    }, h.prototype.decrypt = function (e) {
        if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
        for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], i = at(e), n = 0; n < 4; n++) i[n] ^= this._Kd[0][n];
        for (var s = 1; s < t; s++) {
            for (n = 0; n < 4; n++) r[n] = Qe[i[n] >> 24 & 255] ^ et[i[(n + 3) % 4] >> 16 & 255] ^ tt[i[(n + 2) % 4] >> 8 & 255] ^ rt[255 & i[(n + 1) % 4]] ^ this._Kd[s][n];
            i = r.slice()
        }
        for (var o, a = l(16), n = 0; n < 4; n++) o = this._Kd[t][n], a[4 * n] = 255 & (u[i[n] >> 24 & 255] ^ o >> 24), a[4 * n + 1] = 255 & (u[i[(n + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * n + 2] = 255 & (u[i[(n + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * n + 3] = 255 & (u[255 & i[(n + 1) % 4]] ^ o);
        return a
    }, c.prototype.encrypt = function (e) {
        if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
        for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) d(e, r, 0, i, i + 16), d(r = this._aes.encrypt(r), t, i);
        return t
    }, c.prototype.decrypt = function (e) {
        if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
        for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) d(e, r, 0, i, i + 16), d(r = this._aes.decrypt(r), t, i);
        return t
    }, p.prototype.encrypt = function (e) {
        if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
        for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) {
            d(e, r, 0, i, i + 16);
            for (var n = 0; n < 16; n++) r[n] ^= this._lastCipherblock[n];
            this._lastCipherblock = this._aes.encrypt(r), d(this._lastCipherblock, t, i)
        }
        return t
    }, p.prototype.decrypt = function (e) {
        if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
        for (var t = l(e.length), r = l(16), i = 0; i < e.length; i += 16) {
            d(e, r, 0, i, i + 16);
            for (var r = this._aes.decrypt(r), n = 0; n < 16; n++) t[i + n] = r[n] ^ this._lastCipherblock[n];
            d(e, this._lastCipherblock, 0, i, i + 16)
        }
        return t
    }, m.prototype.encrypt = function (e) {
        if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
        for (var t = o(e, !0), r = 0; r < t.length; r += this.segmentSize) {
            for (var i = this._aes.encrypt(this._shiftRegister), n = 0; n < this.segmentSize; n++) t[r + n] ^= i[n];
            d(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), d(t, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize)
        }
        return t
    }, m.prototype.decrypt = function (e) {
        if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
        for (var t = o(e, !0), r = 0; r < t.length; r += this.segmentSize) {
            for (var i = this._aes.encrypt(this._shiftRegister), n = 0; n < this.segmentSize; n++) t[r + n] ^= i[n];
            d(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), d(e, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize)
        }
        return t
    }, _.prototype.decrypt = _.prototype.encrypt = function (e) {
        for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
        return t
    }, g.prototype.setValue = function (e) {
        if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
        if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
        for (var t = 15; 0 <= t; --t) this._counter[t] = e % 256, e = parseInt(e / 256)
    }, g.prototype.setBytes = function (e) {
        if (16 != (e = o(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
        this._counter = e
    }, g.prototype.increment = function () {
        for (var e = 15; 0 <= e; e--) {
            if (255 !== this._counter[e]) {
                this._counter[e]++;
                break
            }
            this._counter[e] = 0
        }
    };
    lt.prototype.decrypt = lt.prototype.encrypt = function (e) {
        for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
        return t
    };
    var dt = g, ut = {ecb: c, cbc: p, cfb: m, ofb: _, ctr: lt};
    var X = i(function (e, t) {
        function f(e) {
            if (!(e instanceof ArrayBuffer)) throw"Needs an array buffer";
            this.buffer = e, this.dataview = new DataView(e), this.position = 0
        }

        function l(e, t, r) {
            this._byteOffset = t || 0, e instanceof ArrayBuffer ? this.buffer = e : "object" == Ut(e) ? (this.dataView = e, t && (this._byteOffset += t)) : this.buffer = new ArrayBuffer(e || 0), this.position = 0, this.endianness = null == r ? l.LITTLE_ENDIAN : r
        }

        function r(e) {
            this.buffers = [], this.bufferIndex = -1, e && (this.insertBuffer(e), this.bufferIndex = 0)
        }

        function i() {
            var n = [],
                i = (n[3] = "ES_Descriptor", n[4] = "DecoderConfigDescriptor", n[5] = "DecoderSpecificInfo", n[6] = "SLConfigDescriptor", this.getDescriptorName = function (e) {
                    return n[e]
                }, this), s = {};
            return this.parseOneDescriptor = function (e) {
                for (var t = 0, r = e.readUint8(), i = e.readUint8(); 128 & i;) t = (127 & i) << 7, i = e.readUint8();
                return h.debug("MPEG4DescriptorParser", "Found " + (n[r] || "Descriptor " + r) + ", size " + (t += 127 & i) + " at position " + e.getPosition()), (r = new (n[r] ? s[n[r]] : s.Descriptor)(t)).parse(e), r
            }, s.Descriptor = function (e, t) {
                this.tag = e, this.size = t, this.descs = []
            }, s.Descriptor.prototype.parse = function (e) {
                this.data = e.readUint8Array(this.size)
            }, s.Descriptor.prototype.findDescriptor = function (e) {
                for (var t = 0; t < this.descs.length; t++) if (this.descs[t].tag == e) return this.descs[t];
                return null
            }, s.Descriptor.prototype.parseRemainingDescriptors = function (e) {
                for (var t = e.position; e.position < t + this.size;) {
                    var r = i.parseOneDescriptor(e);
                    this.descs.push(r)
                }
            }, s.ES_Descriptor = function (e) {
                s.Descriptor.call(this, 3, e)
            }, s.ES_Descriptor.prototype = new s.Descriptor, s.ES_Descriptor.prototype.parse = function (e) {
                var t;
                this.ES_ID = e.readUint16(), this.flags = e.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = e.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags ? (t = e.readUint8(), this.URL = e.readString(t), this.size -= t + 1) : this.URL = "", 32 & this.flags ? (this.OCR_ES_ID = e.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(e)
            }, s.ES_Descriptor.prototype.getOTI = function (e) {
                var t = this.findDescriptor(4);
                return t ? t.oti : 0
            }, s.ES_Descriptor.prototype.getAudioConfig = function (e) {
                var t = this.findDescriptor(4);
                if (!t) return null;
                var r, t = t.findDescriptor(5);
                return t && t.data ? 31 === (r = (248 & t.data[0]) >> 3) && 2 <= t.data.length ? 32 + ((7 & t.data[0]) << 3) + ((224 & t.data[1]) >> 5) : r : null
            }, s.DecoderConfigDescriptor = function (e) {
                s.Descriptor.call(this, 4, e)
            }, s.DecoderConfigDescriptor.prototype = new s.Descriptor, s.DecoderConfigDescriptor.prototype.parse = function (e) {
                this.oti = e.readUint8(), this.streamType = e.readUint8(), this.bufferSize = e.readUint24(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32(), this.size -= 13, this.parseRemainingDescriptors(e)
            }, s.DecoderSpecificInfo = function (e) {
                s.Descriptor.call(this, 5, e)
            }, s.DecoderSpecificInfo.prototype = new s.Descriptor, s.SLConfigDescriptor = function (e) {
                s.Descriptor.call(this, 6, e)
            }, s.SLConfigDescriptor.prototype = new s.Descriptor, this
        }

        function n() {
        }

        function s() {
        }

        function B(e) {
            this.stream = e || new r, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1
        }

        o = new Date, a = 4;
        var o, a, h = {
            setLogLevel: function (e) {
                a = e == this.debug ? 1 : e == this.info ? 2 : e == this.warn ? 3 : (this.error, 4)
            }, debug: function (e, t) {
                void 0 === console.debug && (console.debug = console.log), a <= 1 && console.debug("[" + h.getDurationString(new Date - o, 1e3) + "]", "[" + e + "]", t)
            }, log: function (e, t) {
                this.debug(e.msg)
            }, info: function (e, t) {
                a <= 2 && console.info("[" + h.getDurationString(new Date - o, 1e3) + "]", "[" + e + "]", t)
            }, warn: function (e, t) {
                a <= 3 && console.warn("[" + h.getDurationString(new Date - o, 1e3) + "]", "[" + e + "]", t)
            }, error: function (e, t) {
                a <= 4 && console.error("[" + h.getDurationString(new Date - o, 1e3) + "]", "[" + e + "]", t)
            }
        }, d = (h.getDurationString = function (e, t) {
            var r;

            function i(e, t) {
                for (var r = ("" + e).split("."); r[0].length < t;) r[0] = "0" + r[0];
                return r.join(".")
            }

            e < 0 ? (r = !0, e = -e) : r = !1;
            var e = e / (t || 1), t = Math.floor(e / 3600), n = (e -= 3600 * t, Math.floor(e / 60)),
                s = 1e3 * (e -= 60 * n);
            return s -= 1e3 * (e = Math.floor(e)), s = Math.floor(s), (r ? "-" : "") + t + ":" + i(n, 2) + ":" + i(e, 2) + "." + i(s, 3)
        }, h.printRanges = function (e) {
            var t = e.length;
            if (0 < t) {
                for (var r = "", i = 0; i < t; i++) 0 < i && (r += ","), r += "[" + h.getDurationString(e.start(i)) + "," + h.getDurationString(e.end(i)) + "]";
                return r
            }
            return "(empty)"
        }, t.Log = h, f.prototype.getPosition = function () {
            return this.position
        }, f.prototype.getEndPosition = function () {
            return this.buffer.byteLength
        }, f.prototype.getLength = function () {
            return this.buffer.byteLength
        }, f.prototype.seek = function (e) {
            e = Math.max(0, Math.min(this.buffer.byteLength, e));
            return this.position = isNaN(e) || !isFinite(e) ? 0 : e, !0
        }, f.prototype.isEos = function () {
            return this.getPosition() >= this.getEndPosition()
        }, f.prototype.readAnyInt = function (e, t) {
            var r = 0;
            if (this.position + e <= this.buffer.byteLength) {
                switch (e) {
                    case 1:
                        r = t ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                        break;
                    case 2:
                        r = t ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                        break;
                    case 3:
                        if (t) throw"No method for reading signed 24 bits values";
                        r = this.dataview.getUint8(this.position) << 16, r = (r |= this.dataview.getUint8(this.position + 1) << 8) | this.dataview.getUint8(this.position + 2);
                        break;
                    case 4:
                        r = t ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                        break;
                    case 8:
                        if (t) throw"No method for reading signed 64 bits values";
                        r = this.dataview.getUint32(this.position) << 32, r |= this.dataview.getUint32(this.position + 4);
                        break;
                    default:
                        throw"readInt method not implemented for size: " + e
                }
                return this.position += e, r
            }
            throw"Not enough bytes in buffer"
        }, f.prototype.readUint8 = function () {
            return this.readAnyInt(1, !1)
        }, f.prototype.readUint16 = function () {
            return this.readAnyInt(2, !1)
        }, f.prototype.readUint24 = function () {
            return this.readAnyInt(3, !1)
        }, f.prototype.readUint32 = function () {
            return this.readAnyInt(4, !1)
        }, f.prototype.readUint64 = function () {
            return this.readAnyInt(8, !1)
        }, f.prototype.readString = function (e) {
            if (this.position + e <= this.buffer.byteLength) {
                for (var t = "", r = 0; r < e; r++) t += String.fromCharCode(this.readUint8());
                return t
            }
            throw"Not enough bytes in buffer"
        }, f.prototype.readCString = function () {
            for (var e = []; ;) {
                var t = this.readUint8();
                if (0 === t) break;
                e.push(t)
            }
            return String.fromCharCode.apply(null, e)
        }, f.prototype.readInt8 = function () {
            return this.readAnyInt(1, !0)
        }, f.prototype.readInt16 = function () {
            return this.readAnyInt(2, !0)
        }, f.prototype.readInt32 = function () {
            return this.readAnyInt(4, !0)
        }, f.prototype.readInt64 = function () {
            return this.readAnyInt(8, !1)
        }, f.prototype.readUint8Array = function (e) {
            for (var t = new Uint8Array(e), r = 0; r < e; r++) t[r] = this.readUint8();
            return t
        }, f.prototype.readInt16Array = function (e) {
            for (var t = new Int16Array(e), r = 0; r < e; r++) t[r] = this.readInt16();
            return t
        }, f.prototype.readUint16Array = function (e) {
            for (var t = new Int16Array(e), r = 0; r < e; r++) t[r] = this.readUint16();
            return t
        }, f.prototype.readUint32Array = function (e) {
            for (var t = new Uint32Array(e), r = 0; r < e; r++) t[r] = this.readUint32();
            return t
        }, f.prototype.readInt32Array = function (e) {
            for (var t = new Int32Array(e), r = 0; r < e; r++) t[r] = this.readInt32();
            return t
        }, t.MP4BoxStream = f, (l.prototype = {}).getPosition = function () {
            return this.position
        }, l.prototype._realloc = function (e) {
            if (this._dynamicSize) {
                var t = this._byteOffset + this.position + e, r = this._buffer.byteLength;
                if (t <= r) t > this._byteLength && (this._byteLength = t); else {
                    for (r < 1 && (r = 1); r < t;) r *= 2;
                    var e = new ArrayBuffer(r), i = new Uint8Array(this._buffer);
                    new Uint8Array(e, 0, i.length).set(i), this.buffer = e, this._byteLength = t
                }
            }
        }, l.prototype._trimAlloc = function () {
            var e, t, r;
            this._byteLength != this._buffer.byteLength && (e = new ArrayBuffer(this._byteLength), t = new Uint8Array(e), r = new Uint8Array(this._buffer, 0, t.length), t.set(r), this.buffer = e)
        }, l.BIG_ENDIAN = !1, l.LITTLE_ENDIAN = !0, l.prototype._byteLength = 0, Object.defineProperty(l.prototype, "byteLength", {
            get: function () {
                return this._byteLength - this._byteOffset
            }
        }), Object.defineProperty(l.prototype, "buffer", {
            get: function () {
                return this._trimAlloc(), this._buffer
            }, set: function (e) {
                this._buffer = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
            }
        }), Object.defineProperty(l.prototype, "byteOffset", {
            get: function () {
                return this._byteOffset
            }, set: function (e) {
                this._byteOffset = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
            }
        }), Object.defineProperty(l.prototype, "dataView", {
            get: function () {
                return this._dataView
            }, set: function (e) {
                this._byteOffset = e.byteOffset, this._buffer = e.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e.byteLength
            }
        }), l.prototype.seek = function (e) {
            e = Math.max(0, Math.min(this.byteLength, e));
            this.position = isNaN(e) || !isFinite(e) ? 0 : e
        }, l.prototype.isEof = function () {
            return this.position >= this._byteLength
        }, l.prototype.mapUint8Array = function (e) {
            this._realloc(+e);
            var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
            return this.position += +e, t
        }, l.prototype.readInt32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Int32Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readInt16Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 2 : e;
            var r = new Int16Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readInt8Array = function (e) {
            e = null == e ? this.byteLength - this.position : e;
            var t = new Int8Array(e);
            return l.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
        }, l.prototype.readUint32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Uint32Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readUint16Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 2 : e;
            var r = new Uint16Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readUint8Array = function (e) {
            e = null == e ? this.byteLength - this.position : e;
            var t = new Uint8Array(e);
            return l.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t
        }, l.prototype.readFloat64Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 8 : e;
            var r = new Float64Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readFloat32Array = function (e, t) {
            e = null == e ? this.byteLength - this.position / 4 : e;
            var r = new Float32Array(e);
            return l.memcpy(r.buffer, 0, this.buffer, this.byteOffset + this.position, e * r.BYTES_PER_ELEMENT), l.arrayToNative(r, null == t ? this.endianness : t), this.position += r.byteLength, r
        }, l.prototype.readInt32 = function (e) {
            e = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
            return this.position += 4, e
        }, l.prototype.readInt16 = function (e) {
            e = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
            return this.position += 2, e
        }, l.prototype.readInt8 = function () {
            var e = this._dataView.getInt8(this.position);
            return this.position += 1, e
        }, l.prototype.readUint32 = function (e) {
            e = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
            return this.position += 4, e
        }, l.prototype.readUint16 = function (e) {
            e = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
            return this.position += 2, e
        }, l.prototype.readUint8 = function () {
            var e = this._dataView.getUint8(this.position);
            return this.position += 1, e
        }, l.prototype.readFloat32 = function (e) {
            e = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
            return this.position += 4, e
        }, l.prototype.readFloat64 = function (e) {
            e = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
            return this.position += 8, e
        }, l.endianness = 0 < new Int8Array(new Int16Array([1]).buffer)[0], l.memcpy = function (e, t, r, i, n) {
            e = new Uint8Array(e, t, n), t = new Uint8Array(r, i, n);
            e.set(t)
        }, l.arrayToNative = function (e, t) {
            return t == this.endianness ? e : this.flipArrayEndianness(e)
        }, l.nativeToEndian = function (e, t) {
            return this.endianness == t ? e : this.flipArrayEndianness(e)
        }, l.flipArrayEndianness = function (e) {
            for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = 0; r < e.byteLength; r += e.BYTES_PER_ELEMENT) for (var i = r + e.BYTES_PER_ELEMENT - 1, n = r; n < i; i--, n++) {
                var s = t[n];
                t[n] = t[i], t[i] = s
            }
            return e
        }, l.prototype.failurePosition = 0, String.fromCharCodeUint8 = function (e) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
            return String.fromCharCode.apply(null, t)
        }, l.prototype.readString = function (e, t) {
            return null == t || "ASCII" == t ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(t).decode(this.mapUint8Array(e))
        }, l.prototype.readCString = function (e) {
            var t = this.byteLength - this.position, r = new Uint8Array(this._buffer, this._byteOffset + this.position),
                i = t;
            null != e && (i = Math.min(e, t));
            for (var n = 0; n < i && 0 !== r[n]; n++) ;
            var s = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(n)]);
            return null != e ? this.position += i - n : n != t && (this.position += 1), s
        }, Math.pow(2, 32)), v = (l.prototype.readInt64 = function () {
            return this.readInt32() * d + this.readUint32()
        }, l.prototype.readUint64 = function () {
            return this.readUint32() * d + this.readUint32()
        }, l.prototype.readInt64 = function () {
            return this.readUint32() * d + this.readUint32()
        }, l.prototype.readUint24 = function () {
            return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
        }, (t.DataStream = l).prototype.save = function (e) {
            var t = new Blob([this.buffer]);
            if (!window.URL || !URL.createObjectURL) throw"DataStream.save: Can't create object URL.";
            var t = window.URL.createObjectURL(t), r = document.createElement("a");
            document.body.appendChild(r), r.setAttribute("href", t), r.setAttribute("download", e), r.setAttribute("target", "_self"), r.click(), window.URL.revokeObjectURL(t)
        }, l.prototype._dynamicSize = !0, Object.defineProperty(l.prototype, "dynamicSize", {
            get: function () {
                return this._dynamicSize
            }, set: function (e) {
                e || this._trimAlloc(), this._dynamicSize = e
            }
        }), l.prototype.shift = function (e) {
            var t = new ArrayBuffer(this._byteLength - e), r = new Uint8Array(t),
                i = new Uint8Array(this._buffer, e, r.length);
            r.set(i), this.buffer = t, this.position -= e
        }, l.prototype.writeInt32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeInt32(e[r], t)
        }, l.prototype.writeInt16Array = function (e, t) {
            if (this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeInt16(e[r], t)
        }, l.prototype.writeInt8Array = function (e) {
            if (this._realloc(+e.length), e instanceof Int8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length); else for (var t = 0; t < e.length; t++) this.writeInt8(e[t])
        }, l.prototype.writeUint32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeUint32(e[r], t)
        }, l.prototype.writeUint16Array = function (e, t) {
            if (this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeUint16(e[r], t)
        }, l.prototype.writeUint8Array = function (e) {
            if (this._realloc(+e.length), e instanceof Uint8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length); else for (var t = 0; t < e.length; t++) this.writeUint8(e[t])
        }, l.prototype.writeFloat64Array = function (e, t) {
            if (this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeFloat64(e[r], t)
        }, l.prototype.writeFloat32Array = function (e, t) {
            if (this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0) l.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, t); else for (var r = 0; r < e.length; r++) this.writeFloat32(e[r], t)
        }, l.prototype.writeInt32 = function (e, t) {
            this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, l.prototype.writeInt16 = function (e, t) {
            this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), this.position += 2
        }, l.prototype.writeInt8 = function (e) {
            this._realloc(1), this._dataView.setInt8(this.position, e), this.position += 1
        }, l.prototype.writeUint32 = function (e, t) {
            this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, l.prototype.writeUint16 = function (e, t) {
            this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), this.position += 2
        }, l.prototype.writeUint8 = function (e) {
            this._realloc(1), this._dataView.setUint8(this.position, e), this.position += 1
        }, l.prototype.writeFloat32 = function (e, t) {
            this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), this.position += 4
        }, l.prototype.writeFloat64 = function (e, t) {
            this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), this.position += 8
        }, l.prototype.writeUCS2String = function (e, t, r) {
            null == r && (r = e.length);
            for (var i = 0; i < e.length && i < r; i++) this.writeUint16(e.charCodeAt(i), t);
            for (; i < r; i++) this.writeUint16(0)
        }, l.prototype.writeString = function (e, t, r) {
            var i = 0;
            if (null == t || "ASCII" == t) if (null != r) {
                for (var n = Math.min(e.length, r), i = 0; i < n; i++) this.writeUint8(e.charCodeAt(i));
                for (; i < r; i++) this.writeUint8(0)
            } else for (i = 0; i < e.length; i++) this.writeUint8(e.charCodeAt(i)); else this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, r)))
        }, l.prototype.writeCString = function (e, t) {
            var r = 0;
            if (null != t) {
                for (var i = Math.min(e.length, t), r = 0; r < i; r++) this.writeUint8(e.charCodeAt(r));
                for (; r < t; r++) this.writeUint8(0)
            } else {
                for (r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
                this.writeUint8(0)
            }
        }, l.prototype.writeStruct = function (e, t) {
            for (var r = 0; r < e.length; r += 2) {
                var i = e[r + 1];
                this.writeType(i, t[e[r]], t)
            }
        }, l.prototype.writeType = function (e, t, r) {
            var i;
            if ("function" == typeof e) return e(this, t);
            if ("object" == Ut(e) && !(e instanceof Array)) return e.set(this, t, r);
            var n = null, s = "ASCII", r = this.position;
            switch ("string" == typeof e && /:/.test(e) && (e = (i = e.split(":"))[0], n = parseInt(i[1])), "string" == typeof e && /,/.test(e) && (e = (i = e.split(","))[0], s = parseInt(i[1])), e) {
                case"uint8":
                    this.writeUint8(t);
                    break;
                case"int8":
                    this.writeInt8(t);
                    break;
                case"uint16":
                    this.writeUint16(t, this.endianness);
                    break;
                case"int16":
                    this.writeInt16(t, this.endianness);
                    break;
                case"uint32":
                    this.writeUint32(t, this.endianness);
                    break;
                case"int32":
                    this.writeInt32(t, this.endianness);
                    break;
                case"float32":
                    this.writeFloat32(t, this.endianness);
                    break;
                case"float64":
                    this.writeFloat64(t, this.endianness);
                    break;
                case"uint16be":
                    this.writeUint16(t, l.BIG_ENDIAN);
                    break;
                case"int16be":
                    this.writeInt16(t, l.BIG_ENDIAN);
                    break;
                case"uint32be":
                    this.writeUint32(t, l.BIG_ENDIAN);
                    break;
                case"int32be":
                    this.writeInt32(t, l.BIG_ENDIAN);
                    break;
                case"float32be":
                    this.writeFloat32(t, l.BIG_ENDIAN);
                    break;
                case"float64be":
                    this.writeFloat64(t, l.BIG_ENDIAN);
                    break;
                case"uint16le":
                    this.writeUint16(t, l.LITTLE_ENDIAN);
                    break;
                case"int16le":
                    this.writeInt16(t, l.LITTLE_ENDIAN);
                    break;
                case"uint32le":
                    this.writeUint32(t, l.LITTLE_ENDIAN);
                    break;
                case"int32le":
                    this.writeInt32(t, l.LITTLE_ENDIAN);
                    break;
                case"float32le":
                    this.writeFloat32(t, l.LITTLE_ENDIAN);
                    break;
                case"float64le":
                    this.writeFloat64(t, l.LITTLE_ENDIAN);
                    break;
                case"cstring":
                    this.writeCString(t, n);
                    break;
                case"string":
                    this.writeString(t, s, n);
                    break;
                case"u16string":
                    this.writeUCS2String(t, this.endianness, n);
                    break;
                case"u16stringle":
                    this.writeUCS2String(t, l.LITTLE_ENDIAN, n);
                    break;
                case"u16stringbe":
                    this.writeUCS2String(t, l.BIG_ENDIAN, n);
                    break;
                default:
                    if (3 == e.length) {
                        for (var o = e[1], a = 0; a < t.length; a++) this.writeType(o, t[a]);
                        break
                    }
                    this.writeStruct(e, t)
            }
            null != n && (this.position = r, this._realloc(n), this.position = r + n)
        }, l.prototype.writeUint64 = function (e) {
            var t = Math.floor(e / d);
            this.writeUint32(t), this.writeUint32(4294967295 & e)
        }, l.prototype.writeUint24 = function (e) {
            this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e)
        }, l.prototype.adjustUint32 = function (e, t) {
            var r = this.position;
            this.seek(e), this.writeUint32(t), this.seek(r)
        }, l.prototype.mapInt32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Int32Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        }, l.prototype.mapInt16Array = function (e, t) {
            this._realloc(2 * e);
            var r = new Int16Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 2 * e, r
        }, l.prototype.mapInt8Array = function (e) {
            this._realloc(+e);
            var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
            return this.position += +e, t
        }, l.prototype.mapUint32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        }, l.prototype.mapUint16Array = function (e, t) {
            this._realloc(2 * e);
            var r = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 2 * e, r
        }, l.prototype.mapFloat64Array = function (e, t) {
            this._realloc(8 * e);
            var r = new Float64Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 8 * e, r
        }, l.prototype.mapFloat32Array = function (e, t) {
            this._realloc(4 * e);
            var r = new Float32Array(this._buffer, this.byteOffset + this.position, e);
            return l.arrayToNative(r, null == t ? this.endianness : t), this.position += 4 * e, r
        }, (r.prototype = new l(new ArrayBuffer, 0, l.BIG_ENDIAN)).initialized = function () {
            var e;
            return -1 < this.bufferIndex || (0 < this.buffers.length ? 0 === (e = this.buffers[0]).fileStart ? (this.buffer = e, this.bufferIndex = 0, h.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (h.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (h.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
        }, ArrayBuffer.concat = function (e, t) {
            h.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (e.byteLength + t.byteLength));
            var r = new Uint8Array(e.byteLength + t.byteLength);
            return r.set(new Uint8Array(e), 0), r.set(new Uint8Array(t), e.byteLength), r.buffer
        }, r.prototype.reduceBuffer = function (e, t, r) {
            var i;
            return (i = new Uint8Array(r)).set(new Uint8Array(e, t, r)), i.buffer.fileStart = e.fileStart + t, i.buffer.usedBytes = 0, i.buffer
        }, r.prototype.insertBuffer = function (e) {
            for (var t = !0, r = 0; r < this.buffers.length; r++) {
                var i = this.buffers[r];
                if (e.fileStart <= i.fileStart) {
                    if (e.fileStart === i.fileStart) {
                        if (e.byteLength > i.byteLength) {
                            this.buffers.splice(r, 1), r--;
                            continue
                        }
                        h.warn("MultiBufferStream", "Buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ") already appended, ignoring")
                    } else e.fileStart + e.byteLength <= i.fileStart || (e = this.reduceBuffer(e, 0, i.fileStart - e.fileStart)), h.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.splice(r, 0, e), 0 === r && (this.buffer = e);
                    t = !1;
                    break
                }
                if (e.fileStart < i.fileStart + i.byteLength) {
                    var i = i.fileStart + i.byteLength - e.fileStart, n = e.byteLength - i;
                    if (!(0 < n)) {
                        t = !1;
                        break
                    }
                    e = this.reduceBuffer(e, i, n)
                }
            }
            t && (h.debug("MultiBufferStream", "Appending new buffer (fileStart: " + e.fileStart + " - Length: " + e.byteLength + ")"), this.buffers.push(e), 0 === r && (this.buffer = e))
        }, r.prototype.logBufferLevel = function (e) {
            for (var t, r, i = [], n = "", s = 0, o = 0, a = 0; a < this.buffers.length; a++) t = this.buffers[a], 0 === a ? (i.push(r = {}), r.start = t.fileStart, r.end = t.fileStart + t.byteLength, n += "[" + r.start + "-") : r.end === t.fileStart ? r.end = t.fileStart + t.byteLength : ((r = {}).start = t.fileStart, n += i[i.length - 1].end - 1 + "], [" + r.start + "-", r.end = t.fileStart + t.byteLength, i.push(r)), s += t.usedBytes, o += t.byteLength;
            0 < i.length && (n += r.end - 1 + "]");
            e = e ? h.info : h.debug;
            0 === this.buffers.length ? e("MultiBufferStream", "No more buffer in memory") : e("MultiBufferStream", this.buffers.length + " stored buffer(s) (" + s + "/" + o + " bytes), continuous ranges: " + n)
        }, r.prototype.cleanBuffers = function () {
            for (var e, t = 0; t < this.buffers.length; t++) (e = this.buffers[t]).usedBytes === e.byteLength && (h.debug("MultiBufferStream", "Removing buffer #" + t), this.buffers.splice(t, 1), t--)
        }, r.prototype.mergeNextBuffer = function () {
            var e, t, r, i;
            return this.bufferIndex + 1 < this.buffers.length && ((e = this.buffers[this.bufferIndex + 1]).fileStart === this.buffer.fileStart + this.buffer.byteLength && (t = this.buffer.byteLength, r = this.buffer.usedBytes, i = this.buffer.fileStart, this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = r, this.buffer.fileStart = i, h.debug("ISOFile", "Concatenating buffer for box parsing (length: " + t + "->" + this.buffer.byteLength + ")"), !0))
        }, r.prototype.findPosition = function (e, t, r) {
            for (var i = null, n = -1, s = !0 === e ? 0 : this.bufferIndex; s < this.buffers.length && (i = this.buffers[s]).fileStart <= t;) n = s, r && (i.fileStart + i.byteLength <= t ? i.usedBytes = i.byteLength : i.usedBytes = t - i.fileStart, this.logBufferLevel()), s++;
            return -1 !== n && (i = this.buffers[n]).fileStart + i.byteLength >= t ? (h.debug("MultiBufferStream", "Found position in existing buffer #" + n), n) : -1
        }, r.prototype.findEndContiguousBuf = function (e) {
            var t, r, e = void 0 !== e ? e : this.bufferIndex, i = this.buffers[e];
            if (this.buffers.length > e + 1) for (t = e + 1; t < this.buffers.length && (r = this.buffers[t]).fileStart === i.fileStart + i.byteLength; t++) i = r;
            return i.fileStart + i.byteLength
        }, r.prototype.getEndFilePositionAfter = function (e) {
            var t = this.findPosition(!0, e, !1);
            return -1 !== t ? this.findEndContiguousBuf(t) : e
        }, r.prototype.addUsedBytes = function (e) {
            this.buffer.usedBytes += e, this.logBufferLevel()
        }, r.prototype.setAllUsedBytes = function () {
            this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
        }, r.prototype.seek = function (e, t, r) {
            return -1 !== (t = this.findPosition(t, e, r)) ? (this.buffer = this.buffers[t], this.bufferIndex = t, this.position = e - this.buffer.fileStart, h.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (h.debug("MultiBufferStream", "Position " + e + " not found in buffered data"), !1)
        }, r.prototype.getPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw"Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.position
        }, r.prototype.getLength = function () {
            return this.byteLength
        }, r.prototype.getEndPosition = function () {
            if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw"Error accessing position in the MultiBufferStream";
            return this.buffers[this.bufferIndex].fileStart + this.byteLength
        }, t.MultiBufferStream = r, t.MPEG4DescriptorParser = i, {
            ERR_INVALID_DATA: -1,
            ERR_NOT_ENOUGH_DATA: 0,
            OK: 1,
            BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
            FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
            CONTAINER_BOXES: [["moov", ["trak", "pssh"]], ["trak"], ["edts"], ["mdia"], ["minf"], ["dinf"], ["stbl", ["sgpd", "sbgp"]], ["mvex", ["trex"]], ["moof", ["traf"]], ["traf", ["trun", "sgpd", "sbgp"]], ["vttc"], ["tref"], ["iref"], ["mfra", ["tfra"]], ["meco"], ["hnti"], ["hinf"], ["strk"], ["strd"], ["sinf"], ["rinf"], ["schi"], ["trgr"], ["udta", ["kind"]], ["iprp", ["ipma"]], ["ipco"]],
            boxCodes: [],
            fullBoxCodes: [],
            containerBoxCodes: [],
            sampleEntryCodes: {},
            sampleGroupEntryCodes: [],
            trackGroupTypes: [],
            UUIDBoxes: {},
            UUIDs: [],
            initialize: function () {
                v.FullBox.prototype = new v.Box, v.ContainerBox.prototype = new v.Box, v.SampleEntry.prototype = new v.Box, v.TrackGroupTypeBox.prototype = new v.FullBox, v.BASIC_BOXES.forEach(function (e) {
                    v.createBoxCtor(e)
                }), v.FULL_BOXES.forEach(function (e) {
                    v.createFullBoxCtor(e)
                }), v.CONTAINER_BOXES.forEach(function (e) {
                    v.createContainerBoxCtor(e[0], null, e[1])
                })
            },
            Box: function (e, t, r) {
                this.type = e, this.size = t, this.uuid = r
            },
            FullBox: function (e, t, r) {
                v.Box.call(this, e, t, r), this.flags = 0, this.version = 0
            },
            ContainerBox: function (e, t, r) {
                v.Box.call(this, e, t, r), this.boxes = []
            },
            SampleEntry: function (e, t, r, i) {
                v.ContainerBox.call(this, e, t), this.hdr_size = r, this.start = i
            },
            SampleGroupEntry: function (e) {
                this.grouping_type = e
            },
            TrackGroupTypeBox: function (e, t) {
                v.FullBox.call(this, e, t)
            },
            createBoxCtor: function (t, e) {
                v.boxCodes.push(t), v[t + "Box"] = function (e) {
                    v.Box.call(this, t, e)
                }, v[t + "Box"].prototype = new v.Box, e && (v[t + "Box"].prototype.parse = e)
            },
            createFullBoxCtor: function (t, r) {
                v[t + "Box"] = function (e) {
                    v.FullBox.call(this, t, e)
                }, v[t + "Box"].prototype = new v.FullBox, v[t + "Box"].prototype.parse = function (e) {
                    this.parseFullHeader(e), r && r.call(this, e)
                }
            },
            addSubBoxArrays: function (e) {
                if (e) for (var t = (this.subBoxNames = e).length, r = 0; r < t; r++) this[e[r] + "s"] = []
            },
            createContainerBoxCtor: function (t, e, r) {
                v[t + "Box"] = function (e) {
                    v.ContainerBox.call(this, t, e), v.addSubBoxArrays.call(this, r)
                }, v[t + "Box"].prototype = new v.ContainerBox, e && (v[t + "Box"].prototype.parse = e)
            },
            createMediaSampleEntryCtor: function (e, t, r) {
                v.sampleEntryCodes[e] = [], v[e + "SampleEntry"] = function (e, t) {
                    v.SampleEntry.call(this, e, t), v.addSubBoxArrays.call(this, r)
                }, v[e + "SampleEntry"].prototype = new v.SampleEntry, t && (v[e + "SampleEntry"].prototype.parse = t)
            },
            createSampleEntryCtor: function (t, r, e, i) {
                v.sampleEntryCodes[t].push(r), v[r + "SampleEntry"] = function (e) {
                    v[t + "SampleEntry"].call(this, r, e), v.addSubBoxArrays.call(this, i)
                }, v[r + "SampleEntry"].prototype = new v[t + "SampleEntry"], e && (v[r + "SampleEntry"].prototype.parse = e)
            },
            createEncryptedSampleEntryCtor: function (e, t, r) {
                v.createSampleEntryCtor.call(this, e, t, r, ["sinf"])
            },
            createSampleGroupCtor: function (t, e) {
                v[t + "SampleGroupEntry"] = function (e) {
                    v.SampleGroupEntry.call(this, t, e)
                }, v[t + "SampleGroupEntry"].prototype = new v.SampleGroupEntry, e && (v[t + "SampleGroupEntry"].prototype.parse = e)
            },
            createTrackGroupCtor: function (t, e) {
                v[t + "TrackGroupTypeBox"] = function (e) {
                    v.TrackGroupTypeBox.call(this, t, e)
                }, v[t + "TrackGroupTypeBox"].prototype = new v.TrackGroupTypeBox, e && (v[t + "TrackGroupTypeBox"].prototype.parse = e)
            },
            createUUIDBox: function (t, r, i, n) {
                v.UUIDs.push(t), v.UUIDBoxes[t] = function (e) {
                    (r ? v.FullBox : i ? v.ContainerBox : v.Box).call(this, "uuid", e, t)
                }, v.UUIDBoxes[t].prototype = new (r ? v.FullBox : i ? v.ContainerBox : v.Box), n && (v.UUIDBoxes[t].prototype.parse = r ? function (e) {
                    this.parseFullHeader(e), n && n.call(this, e)
                } : n)
            }
        });
        v.initialize(), v.TKHD_FLAG_ENABLED = 1, v.TKHD_FLAG_IN_MOVIE = 2, v.TKHD_FLAG_IN_PREVIEW = 4, v.TFHD_FLAG_BASE_DATA_OFFSET = 1, v.TFHD_FLAG_SAMPLE_DESC = 2, v.TFHD_FLAG_SAMPLE_DUR = 8, v.TFHD_FLAG_SAMPLE_SIZE = 16, v.TFHD_FLAG_SAMPLE_FLAGS = 32, v.TFHD_FLAG_DUR_EMPTY = 65536, v.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, v.TRUN_FLAGS_DATA_OFFSET = 1, v.TRUN_FLAGS_FIRST_FLAG = 4, v.TRUN_FLAGS_DURATION = 256, v.TRUN_FLAGS_SIZE = 512, v.TRUN_FLAGS_FLAGS = 1024, v.TRUN_FLAGS_CTS_OFFSET = 2048, v.Box.prototype.add = function (e) {
            return this.addBox(new v[e + "Box"])
        }, v.Box.prototype.addBox = function (e) {
            return this.boxes.push(e), this[e.type + "s"] ? this[e.type + "s"].push(e) : this[e.type] = e, e
        }, v.Box.prototype.set = function (e, t) {
            return this[e] = t, this
        }, v.Box.prototype.addEntry = function (e, t) {
            t = t || "entries";
            return this[t] || (this[t] = []), this[t].push(e), this
        }, (t.BoxParser = v).parseUUID = function (e) {
            return v.parseHex16(e)
        }, v.parseHex16 = function (e) {
            for (var t = "", r = 0; r < 16; r++) {
                var i = e.readUint8().toString(16);
                t += 1 === i.length ? "0" + i : i
            }
            return t
        }, v.parseOneBox = function (e, t, r) {
            var i, n, s = e.getPosition(), o = 0;
            if (e.getEndPosition() - s < 8) return h.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {code: v.ERR_NOT_ENOUGH_DATA};
            if (r && r < 8) return h.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {code: v.ERR_NOT_ENOUGH_DATA};
            var a = e.readUint32(), l = e.readString(4), d = l;
            if (h.debug("BoxParser", "Found box of type '" + l + "' and size " + a + " at position " + s), o = 8, "uuid" == l) {
                if (e.getEndPosition() - e.getPosition() < 16 || r - o < 16) return e.seek(s), h.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {code: v.ERR_NOT_ENOUGH_DATA};
                o += 16, d = n = v.parseUUID(e)
            }
            if (1 == a) {
                if (e.getEndPosition() - e.getPosition() < 8 || r && r - o < 8) return e.seek(s), h.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + l + '" box'), {code: v.ERR_NOT_ENOUGH_DATA};
                a = e.readUint64(), o += 8
            } else if (0 === a) if (r) a = r; else if ("mdat" !== l) return h.error("BoxParser", "Unlimited box size not supported for type: '" + l + "'"), i = new v.Box(l, a), {
                code: v.OK,
                box: i,
                size: i.size
            };
            return 0 !== a && a < o ? (h.error("BoxParser", "Box of type " + l + " has an invalid size " + a + " (too small to be a box)"), {
                code: v.ERR_NOT_ENOUGH_DATA,
                type: l,
                size: a,
                hdr_size: o,
                start: s
            }) : 0 !== a && r && r < a ? (h.error("BoxParser", "Box of type '" + l + "' has a size " + a + " greater than its container size " + r), {
                code: v.ERR_NOT_ENOUGH_DATA,
                type: l,
                size: a,
                hdr_size: o,
                start: s
            }) : 0 !== a && s + a > e.getEndPosition() ? (e.seek(s), h.info("BoxParser", "Not enough data in stream to parse the entire '" + l + "' box"), {
                code: v.ERR_NOT_ENOUGH_DATA,
                type: l,
                size: a,
                hdr_size: o,
                start: s
            }) : t ? {
                code: v.OK,
                type: l,
                size: a,
                hdr_size: o,
                start: s
            } : (v[l + "Box"] ? i = new v[l + "Box"](a) : "uuid" !== l ? (h.warn("BoxParser", "Unknown box type: '" + l + "'"), (i = new v.Box(l, a)).has_unparsed_data = !0) : v.UUIDBoxes[n] ? i = new v.UUIDBoxes[n](a) : (h.warn("BoxParser", "Unknown uuid type: '" + n + "'"), (i = new v.Box(l, a)).uuid = n, i.has_unparsed_data = !0), i.hdr_size = o, i.start = s, i.write === v.Box.prototype.write && "mdat" !== i.type && (h.info("BoxParser", "'" + d + "' box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(e)), i.parse(e), (r = e.getPosition() - (i.start + i.size)) < 0 ? (h.warn("BoxParser", "Parsing of box '" + d + "' did not read the entire indicated box data size (missing " + -r + " bytes), seeking forward"), e.seek(i.start + i.size)) : 0 < r && (h.error("BoxParser", "Parsing of box '" + d + "' read " + r + " more bytes than the indicated box data size, seeking backwards"), 0 !== i.size && e.seek(i.start + i.size)), {
                code: v.OK,
                box: i,
                size: i.size
            })
        }, v.Box.prototype.parse = function (e) {
            "mdat" != this.type ? this.data = e.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size)
        }, v.Box.prototype.parseDataAndRewind = function (e) {
            this.data = e.readUint8Array(this.size - this.hdr_size), e.position -= this.size - this.hdr_size
        }, v.FullBox.prototype.parseDataAndRewind = function (e) {
            this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, e.position -= this.size - this.hdr_size
        }, v.FullBox.prototype.parseFullHeader = function (e) {
            this.version = e.readUint8(), this.flags = e.readUint24(), this.hdr_size += 4
        }, v.FullBox.prototype.parse = function (e) {
            this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
        }, v.ContainerBox.prototype.parse = function (e) {
            for (; e.getPosition() < this.start + this.size;) {
                if ((r = v.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                var t, r = r.box;
                this.boxes.push(r), this.subBoxNames && -1 != this.subBoxNames.indexOf(r.type) ? this[this.subBoxNames[this.subBoxNames.indexOf(r.type)] + "s"].push(r) : this[t = "uuid" !== r.type ? r.type : r.uuid] ? h.warn("Box of type " + t + " already stored in field of this type") : this[t] = r
            }
        }, v.Box.prototype.parseLanguage = function (e) {
            this.language = e.readUint16();
            e = [];
            e[0] = this.language >> 10 & 31, e[1] = this.language >> 5 & 31, e[2] = 31 & this.language, this.languageString = String.fromCharCode(e[0] + 96, e[1] + 96, e[2] + 96)
        }, v.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", v.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", v.SAMPLE_ENTRY_TYPE_HINT = "Hint", v.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", v.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", v.SAMPLE_ENTRY_TYPE_SYSTEM = "System", v.SAMPLE_ENTRY_TYPE_TEXT = "Text", v.SampleEntry.prototype.parseHeader = function (e) {
            e.readUint8Array(6), this.data_reference_index = e.readUint16(), this.hdr_size += 8
        }, v.SampleEntry.prototype.parse = function (e) {
            this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size)
        }, v.SampleEntry.prototype.parseDataAndRewind = function (e) {
            this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, e.position -= this.size - this.hdr_size
        }, v.SampleEntry.prototype.parseFooter = function (e) {
            v.ContainerBox.prototype.parse.call(this, e)
        }, v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_HINT), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_METADATA), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SYSTEM), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_TEXT), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, function (e) {
            var t;
            this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), this.width = e.readUint16(), this.height = e.readUint16(), this.horizresolution = e.readUint32(), this.vertresolution = e.readUint32(), e.readUint32(), this.frame_count = e.readUint16(), t = Math.min(31, e.readUint8()), this.compressorname = e.readString(t), t < 31 && e.readString(31 - t), this.depth = e.readUint16(), e.readUint16(), this.parseFooter(e)
        }), v.createMediaSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, function (e) {
            this.parseHeader(e), e.readUint32Array(2), this.channel_count = e.readUint16(), this.samplesize = e.readUint16(), e.readUint16(), e.readUint16(), this.samplerate = e.readUint32() / 65536, this.parseFooter(e)
        }), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vp08"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "vp09"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, "Opus"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_TEXT, "enct"), v.createEncryptedSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_METADATA, "encm"), v.createBoxCtor("a1lx", function (e) {
            var t = 16 * (1 + (1 & e.readUint8()));
            this.layer_size = [];
            for (var r = 0; r < 3; r++) this.layer_size[r] = 16 == t ? e.readUint16() : e.readUint32()
        }), v.createBoxCtor("a1op", function (e) {
            this.op_index = e.readUint8()
        }), v.createFullBoxCtor("auxC", function (e) {
            this.aux_type = e.readCString();
            var t = this.size - this.hdr_size - (this.aux_type.length + 1);
            this.aux_subtype = e.readUint8Array(t)
        }), v.createBoxCtor("av1C", function (e) {
            var t = e.readUint8();
            if (t >> 7 & !1) h.error("av1C marker problem"); else if (this.version = 127 & t, 1 === this.version) if (t = e.readUint8(), this.seq_profile = t >> 5 & 7, this.seq_level_idx_0 = 31 & t, t = e.readUint8(), this.seq_tier_0 = t >> 7 & 1, this.high_bitdepth = t >> 6 & 1, this.twelve_bit = t >> 5 & 1, this.monochrome = t >> 4 & 1, this.chroma_subsampling_x = t >> 3 & 1, this.chroma_subsampling_y = t >> 2 & 1, this.chroma_sample_position = 3 & t, t = e.readUint8(), this.reserved_1 = t >> 5 & 7, 0 === this.reserved_1) {
                if (this.initial_presentation_delay_present = t >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & t; else if (this.reserved_2 = 15 & t, 0 !== this.reserved_2) return void h.error("av1C reserved_2 parsing problem");
                t = this.size - this.hdr_size - 4;
                this.configOBUs = e.readUint8Array(t)
            } else h.error("av1C reserved_1 parsing problem"); else h.error("av1C version " + this.version + " not supported")
        }), v.createBoxCtor("avcC", function (e) {
            var t, r;
            for (this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), r = this.size - this.hdr_size - 6, this.SPS = [], t = 0; t < this.nb_SPS_nalus; t++) this.SPS[t] = {}, this.SPS[t].length = e.readUint16(), this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length), r -= 2 + this.SPS[t].length;
            for (this.nb_PPS_nalus = e.readUint8(), r--, this.PPS = [], t = 0; t < this.nb_PPS_nalus; t++) this.PPS[t] = {}, this.PPS[t].length = e.readUint16(), this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length), r -= 2 + this.PPS[t].length;
            0 < r && (this.ext = e.readUint8Array(r))
        }), v.createBoxCtor("btrt", function (e) {
            this.bufferSizeDB = e.readUint32(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32()
        }), v.createBoxCtor("clap", function (e) {
            this.cleanApertureWidthN = e.readUint32(), this.cleanApertureWidthD = e.readUint32(), this.cleanApertureHeightN = e.readUint32(), this.cleanApertureHeightD = e.readUint32(), this.horizOffN = e.readUint32(), this.horizOffD = e.readUint32(), this.vertOffN = e.readUint32(), this.vertOffD = e.readUint32()
        }), v.createBoxCtor("clli", function (e) {
            this.max_content_light_level = e.readUint16(), this.max_pic_average_light_level = e.readUint16()
        }), v.createFullBoxCtor("co64", function (e) {
            var t, r = e.readUint32();
            if (this.chunk_offsets = [], 0 === this.version) for (t = 0; t < r; t++) this.chunk_offsets.push(e.readUint64())
        }), v.createFullBoxCtor("CoLL", function (e) {
            this.maxCLL = e.readUint16(), this.maxFALL = e.readUint16()
        }), v.createBoxCtor("colr", function (e) {
            var t;
            this.colour_type = e.readString(4), "nclx" === this.colour_type ? (this.colour_primaries = e.readUint16(), this.transfer_characteristics = e.readUint16(), this.matrix_coefficients = e.readUint16(), t = e.readUint8(), this.full_range_flag = t >> 7) : "rICC" !== this.colour_type && "prof" !== this.colour_type || (this.ICC_profile = e.readUint8Array(this.size - 4))
        }), v.createFullBoxCtor("cprt", function (e) {
            this.parseLanguage(e), this.notice = e.readCString()
        }), v.createFullBoxCtor("cslg", function (e) {
            0 === this.version && (this.compositionToDTSShift = e.readInt32(), this.leastDecodeToDisplayDelta = e.readInt32(), this.greatestDecodeToDisplayDelta = e.readInt32(), this.compositionStartTime = e.readInt32(), this.compositionEndTime = e.readInt32())
        }), v.createFullBoxCtor("ctts", function (e) {
            var t, r = e.readUint32();
            if (this.sample_counts = [], this.sample_offsets = [], 0 === this.version) for (t = 0; t < r; t++) {
                this.sample_counts.push(e.readUint32());
                var i = e.readInt32();
                i < 0 && h.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(i)
            } else if (1 == this.version) for (t = 0; t < r; t++) this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32())
        }), v.createBoxCtor("dac3", function (e) {
            var t = e.readUint8(), r = e.readUint8(), e = e.readUint8();
            this.fscod = t >> 6, this.bsid = t >> 1 & 31, this.bsmod = (1 & t) << 2 | r >> 6 & 3, this.acmod = r >> 3 & 7, this.lfeon = r >> 2 & 1, this.bit_rate_code = 3 & r | e >> 5 & 7
        }), v.createBoxCtor("dec3", function (e) {
            var t = e.readUint16();
            this.data_rate = t >> 3, this.num_ind_sub = 7 & t, this.ind_subs = [];
            for (var r = 0; r < this.num_ind_sub + 1; r++) {
                var i = {}, n = (this.ind_subs.push(i), e.readUint8()), s = e.readUint8(), o = e.readUint8();
                i.fscod = n >> 6, i.bsid = n >> 1 & 31, i.bsmod = (1 & n) << 4 | s >> 4 & 15, i.acmod = s >> 1 & 7, i.lfeon = 1 & s, i.num_dep_sub = o >> 1 & 15, 0 < i.num_dep_sub && (i.chan_loc = (1 & o) << 8 | e.readUint8())
            }
        }), v.createFullBoxCtor("dfLa", function (e) {
            var t = [],
                r = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
            for (this.parseFullHeader(e); ;) {
                var i = e.readUint8(), n = Math.min(127 & i, r.length - 1);
                if (n ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), this.samplerate = e.readUint32() >> 12, e.readUint8Array(20)), t.push(r[n]), 128 & i) break
            }
            this.numMetadataBlocks = t.length + " (" + t.join(", ") + ")"
        }), v.createBoxCtor("dimm", function (e) {
            this.bytessent = e.readUint64()
        }), v.createBoxCtor("dmax", function (e) {
            this.time = e.readUint32()
        }), v.createBoxCtor("dmed", function (e) {
            this.bytessent = e.readUint64()
        }), v.createBoxCtor("dOps", function (e) {
            if (this.Version = e.readUint8(), this.OutputChannelCount = e.readUint8(), this.PreSkip = e.readUint16(), this.InputSampleRate = e.readUint32(), this.OutputGain = e.readInt16(), this.ChannelMappingFamily = e.readUint8(), 0 !== this.ChannelMappingFamily) {
                this.StreamCount = e.readUint8(), this.CoupledCount = e.readUint8(), this.ChannelMapping = [];
                for (var t = 0; t < this.OutputChannelCount; t++) this.ChannelMapping[t] = e.readUint8()
            }
        }), v.createFullBoxCtor("dref", function (e) {
            var t;
            this.entries = [];
            for (var r = e.readUint32(), i = 0; i < r; i++) {
                if ((t = v.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                t = t.box, this.entries.push(t)
            }
        }), v.createBoxCtor("drep", function (e) {
            this.bytessent = e.readUint64()
        }), v.createFullBoxCtor("elng", function (e) {
            this.extended_language = e.readString(this.size - this.hdr_size)
        }), v.createFullBoxCtor("elst", function (e) {
            this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.entries.push(i), 1 === this.version ? (i.segment_duration = e.readUint64(), i.media_time = e.readInt64()) : (i.segment_duration = e.readUint32(), i.media_time = e.readInt32()), i.media_rate_integer = e.readInt16(), i.media_rate_fraction = e.readInt16()
            }
        }), v.createFullBoxCtor("emsg", function (e) {
            1 == this.version ? (this.timescale = e.readUint32(), this.presentation_time = e.readUint64(), this.event_duration = e.readUint32(), this.id = e.readUint32(), this.scheme_id_uri = e.readCString(), this.value = e.readCString()) : (this.scheme_id_uri = e.readCString(), this.value = e.readCString(), this.timescale = e.readUint32(), this.presentation_time_delta = e.readUint32(), this.event_duration = e.readUint32(), this.id = e.readUint32());
            var t = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
            1 == this.version && (t -= 4), this.message_data = e.readUint8Array(t)
        }), v.createFullBoxCtor("esds", function (e) {
            var e = e.readUint8Array(this.size - this.hdr_size), t = new i;
            this.esd = t.parseOneDescriptor(new l(e.buffer, 0, l.BIG_ENDIAN))
        }), v.createBoxCtor("fiel", function (e) {
            this.fieldCount = e.readUint8(), this.fieldOrdering = e.readUint8()
        }), v.createBoxCtor("frma", function (e) {
            this.data_format = e.readString(4)
        }),v.createBoxCtor("ftyp", function (e) {
            var t = this.size - this.hdr_size;
            this.major_brand = e.readString(4), this.minor_version = e.readUint32(), t -= 8, this.compatible_brands = [];
            for (var r = 0; 4 <= t;) this.compatible_brands[r] = e.readString(4), t -= 4, r++
        }),v.createFullBoxCtor("hdlr", function (e) {
            0 === this.version && (e.readUint32(), this.handler = e.readString(4), e.readUint32Array(3), this.name = e.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
        }),v.createBoxCtor("hvcC", function (e) {
            this.configurationVersion = e.readUint8(), r = e.readUint8(), this.general_profile_space = r >> 6, this.general_tier_flag = (32 & r) >> 5, this.general_profile_idc = 31 & r, this.general_profile_compatibility = e.readUint32(), this.general_constraint_indicator = e.readUint8Array(6), this.general_level_idc = e.readUint8(), this.min_spatial_segmentation_idc = 4095 & e.readUint16(), this.parallelismType = 3 & e.readUint8(), this.chroma_format_idc = 3 & e.readUint8(), this.bit_depth_luma_minus8 = 7 & e.readUint8(), this.bit_depth_chroma_minus8 = 7 & e.readUint8(), this.avgFrameRate = e.readUint16(), r = e.readUint8(), this.constantFrameRate = r >> 6, this.numTemporalLayers = (13 & r) >> 3, this.temporalIdNested = (4 & r) >> 2, this.lengthSizeMinusOne = 3 & r, this.nalu_arrays = [];
            for (var t, r, i = e.readUint8(), n = 0; n < i; n++) for (var s = [], o = (this.nalu_arrays.push(s), r = e.readUint8(), s.completeness = (128 & r) >> 7, s.nalu_type = 63 & r, e.readUint16()), a = 0; a < o; a++) {
                var l = {};
                s.push(l), t = e.readUint16(), l.data = e.readUint8Array(t)
            }
        }),v.createFullBoxCtor("iinf", function (e) {
            var t;
            0 === this.version ? this.entry_count = e.readUint16() : this.entry_count = e.readUint32(), this.item_infos = [];
            for (var r = 0; r < this.entry_count; r++) {
                if ((t = v.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                "infe" !== t.box.type && h.error("BoxParser", "Expected 'infe' box, got " + t.box.type), this.item_infos[r] = t.box
            }
        }),v.createFullBoxCtor("iloc", function (e) {
            var t = e.readUint8(),
                r = (this.offset_size = t >> 4 & 15, this.length_size = 15 & t, t = e.readUint8(), this.base_offset_size = t >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & t : this.index_size = 0, this.items = [], 0);
            if (this.version < 2) r = e.readUint16(); else {
                if (2 !== this.version) throw"version of iloc box not supported";
                r = e.readUint32()
            }
            for (var i = 0; i < r; i++) {
                var n = {};
                if (this.items.push(n), this.version < 2) n.item_ID = e.readUint16(); else {
                    if (2 !== this.version) throw"version of iloc box not supported";
                    n.item_ID = e.readUint16()
                }
                switch (1 === this.version || 2 === this.version ? n.construction_method = 15 & e.readUint16() : n.construction_method = 0, n.data_reference_index = e.readUint16(), this.base_offset_size) {
                    case 0:
                        n.base_offset = 0;
                        break;
                    case 4:
                        n.base_offset = e.readUint32();
                        break;
                    case 8:
                        n.base_offset = e.readUint64();
                        break;
                    default:
                        throw"Error reading base offset size"
                }
                var s = e.readUint16();
                n.extents = [];
                for (var o = 0; o < s; o++) {
                    var a = {};
                    if (n.extents.push(a), 1 === this.version || 2 === this.version) switch (this.index_size) {
                        case 0:
                            a.extent_index = 0;
                            break;
                        case 4:
                            a.extent_index = e.readUint32();
                            break;
                        case 8:
                            a.extent_index = e.readUint64();
                            break;
                        default:
                            throw"Error reading extent index"
                    }
                    switch (this.offset_size) {
                        case 0:
                            a.extent_offset = 0;
                            break;
                        case 4:
                            a.extent_offset = e.readUint32();
                            break;
                        case 8:
                            a.extent_offset = e.readUint64();
                            break;
                        default:
                            throw"Error reading extent index"
                    }
                    switch (this.length_size) {
                        case 0:
                            a.extent_length = 0;
                            break;
                        case 4:
                            a.extent_length = e.readUint32();
                            break;
                        case 8:
                            a.extent_length = e.readUint64();
                            break;
                        default:
                            throw"Error reading extent index"
                    }
                }
            }
        }),v.createBoxCtor("imir", function (e) {
            e = e.readUint8();
            this.reserved = e >> 7, this.axis = 1 & e
        }),v.createFullBoxCtor("infe", function (e) {
            if (0 !== this.version && 1 !== this.version || (this.item_ID = e.readUint16(), this.item_protection_index = e.readUint16(), this.item_name = e.readCString(), this.content_type = e.readCString(), this.content_encoding = e.readCString()), 1 === this.version) return this.extension_type = e.readString(4), h.warn("BoxParser", "Cannot parse extension type"), void e.seek(this.start + this.size);
            2 <= this.version && (2 === this.version ? this.item_ID = e.readUint16() : 3 === this.version && (this.item_ID = e.readUint32()), this.item_protection_index = e.readUint16(), this.item_type = e.readString(4), this.item_name = e.readCString(), "mime" === this.item_type ? (this.content_type = e.readCString(), this.content_encoding = e.readCString()) : "uri " === this.item_type && (this.item_uri_type = e.readCString()))
        }),v.createFullBoxCtor("ipma", function (e) {
            var t, r;
            for (entry_count = e.readUint32(), this.associations = [], t = 0; t < entry_count; t++) {
                var i = {},
                    n = (this.associations.push(i), this.version < 1 ? i.id = e.readUint16() : i.id = e.readUint32(), e.readUint8());
                for (i.props = [], r = 0; r < n; r++) {
                    var s = e.readUint8(), o = {};
                    i.props.push(o), o.essential = (128 & s) >> 7 == 1, 1 & this.flags ? o.property_index = (127 & s) << 8 | e.readUint8() : o.property_index = 127 & s
                }
            }
        }),v.createFullBoxCtor("iref", function (e) {
            var t;
            for (this.references = []; e.getPosition() < this.start + this.size;) {
                if ((t = v.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                (t = new (0 === this.version ? v.SingleItemTypeReferenceBox : v.SingleItemTypeReferenceBoxLarge)(t.type, t.size, t.hdr_size, t.start)).write === v.Box.prototype.write && "mdat" !== t.type && (h.warn("BoxParser", t.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), t.parseDataAndRewind(e)), t.parse(e), this.references.push(t)
            }
        }),v.createBoxCtor("irot", function (e) {
            this.angle = 3 & e.readUint8()
        }),v.createFullBoxCtor("ispe", function (e) {
            this.image_width = e.readUint32(), this.image_height = e.readUint32()
        }),v.createFullBoxCtor("kind", function (e) {
            this.schemeURI = e.readCString(), this.value = e.readCString()
        }),v.createFullBoxCtor("leva", function (e) {
            var t = e.readUint8();
            this.levels = [];
            for (var r = 0; r < t; r++) {
                var i = {}, n = ((this.levels[r] = i).track_ID = e.readUint32(), e.readUint8());
                switch (i.padding_flag = n >> 7, i.assignment_type = 127 & n, i.assignment_type) {
                    case 0:
                        i.grouping_type = e.readString(4);
                        break;
                    case 1:
                        i.grouping_type = e.readString(4), i.grouping_type_parameter = e.readUint32();
                        break;
                    case 2:
                    case 3:
                        break;
                    case 4:
                        i.sub_track_id = e.readUint32();
                        break;
                    default:
                        h.warn("BoxParser", "Unknown leva assignement type")
                }
            }
        }),v.createBoxCtor("lsel", function (e) {
            this.layer_id = e.readUint16()
        }),v.createBoxCtor("maxr", function (e) {
            this.period = e.readUint32(), this.bytes = e.readUint32()
        }),v.createBoxCtor("mdcv", function (e) {
            this.display_primaries = [], this.display_primaries[0] = {}, this.display_primaries[0].x = e.readUint16(), this.display_primaries[0].y = e.readUint16(), this.display_primaries[1] = {}, this.display_primaries[1].x = e.readUint16(), this.display_primaries[1].y = e.readUint16(), this.display_primaries[2] = {}, this.display_primaries[2].x = e.readUint16(), this.display_primaries[2].y = e.readUint16(), this.white_point = {}, this.white_point.x = e.readUint16(), this.white_point.y = e.readUint16(), this.max_display_mastering_luminance = e.readUint32(), this.min_display_mastering_luminance = e.readUint32()
        }),v.createFullBoxCtor("mdhd", function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.parseLanguage(e), e.readUint16()
        }),v.createFullBoxCtor("mehd", function (e) {
            1 & this.flags && (h.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = e.readUint64() : this.fragment_duration = e.readUint32()
        }),v.createFullBoxCtor("meta", function (e) {
            this.boxes = [], v.ContainerBox.prototype.parse.call(this, e)
        }),v.createFullBoxCtor("mfhd", function (e) {
            this.sequence_number = e.readUint32()
        }),v.createFullBoxCtor("mfro", function (e) {
            this._size = e.readUint32()
        }),v.createFullBoxCtor("mvhd", function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.rate = e.readUint32(), this.volume = e.readUint16() >> 8, e.readUint16(), e.readUint32Array(2), this.matrix = e.readUint32Array(9), e.readUint32Array(6), this.next_track_id = e.readUint32()
        }),v.createBoxCtor("npck", function (e) {
            this.packetssent = e.readUint32()
        }),v.createBoxCtor("nump", function (e) {
            this.packetssent = e.readUint64()
        }),v.createFullBoxCtor("padb", function (e) {
            var t = e.readUint32();
            this.padbits = [];
            for (var r = 0; r < Math.floor((t + 1) / 2); r++) this.padbits = e.readUint8()
        }),v.createBoxCtor("pasp", function (e) {
            this.hSpacing = e.readUint32(), this.vSpacing = e.readUint32()
        }),v.createBoxCtor("payl", function (e) {
            this.text = e.readString(this.size - this.hdr_size)
        }),v.createBoxCtor("payt", function (e) {
            this.payloadID = e.readUint32();
            var t = e.readUint8();
            this.rtpmap_string = e.readString(t)
        }),v.createFullBoxCtor("pdin", function (e) {
            var t = (this.size - this.hdr_size) / 8;
            this.rate = [], this.initial_delay = [];
            for (var r = 0; r < t; r++) this.rate[r] = e.readUint32(), this.initial_delay[r] = e.readUint32()
        }),v.createFullBoxCtor("pitm", function (e) {
            0 === this.version ? this.item_id = e.readUint16() : this.item_id = e.readUint32()
        }),v.createFullBoxCtor("pixi", function (e) {
            var t;
            for (this.num_channels = e.readUint8(), this.bits_per_channels = [], t = 0; t < this.num_channels; t++) this.bits_per_channels[t] = e.readUint8()
        }),v.createBoxCtor("pmax", function (e) {
            this.bytes = e.readUint32()
        }),v.createFullBoxCtor("prft", function (e) {
            this.ref_track_id = e.readUint32(), this.ntp_timestamp = e.readUint64(), 0 === this.version ? this.media_time = e.readUint32() : this.media_time = e.readUint64()
        }),v.createFullBoxCtor("pssh", function (e) {
            if (this.system_id = v.parseHex16(e), 0 < this.version) {
                var t = e.readUint32();
                this.kid = [];
                for (var r = 0; r < t; r++) this.kid[r] = v.parseHex16(e)
            }
            var i = e.readUint32();
            0 < i && (this.data = e.readUint8Array(i))
        }),v.createFullBoxCtor("clef", function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        }),v.createFullBoxCtor("enof", function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        }),v.createFullBoxCtor("prof", function (e) {
            this.width = e.readUint32(), this.height = e.readUint32()
        }),v.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]),v.createBoxCtor("rtp ", function (e) {
            this.descriptionformat = e.readString(4), this.sdptext = e.readString(this.size - this.hdr_size - 4)
        }),v.createFullBoxCtor("saio", function (e) {
            1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32());
            var t = e.readUint32();
            this.offset = [];
            for (var r = 0; r < t; r++) 0 === this.version ? this.offset[r] = e.readUint32() : this.offset[r] = e.readUint64()
        }),v.createFullBoxCtor("saiz", function (e) {
            1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32()), this.default_sample_info_size = e.readUint8();
            var t = e.readUint32();
            if (this.sample_info_size = [], 0 === this.default_sample_info_size) for (var r = 0; r < t; r++) this.sample_info_size[r] = e.readUint8()
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (e) {
            this.parseHeader(e), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.auxiliary_mime_types = e.readCString(), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (e) {
            this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function (e) {
            this.parseHeader(e), this.displayFlags = e.readUint32(), this.horizontal_justification = e.readInt8(), this.vertical_justification = e.readInt8(), this.bg_color_rgba = e.readUint8Array(4), this.box_record = e.readInt16Array(4), this.style_record = e.readUint8Array(12), this.parseFooter(e)
        }),v.createSampleEntryCtor(v.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function (e) {
            this.parseHeader(e), this.parseFooter(e)
        }),v.createSampleGroupCtor("alst", function (e) {
            var t, r = e.readUint16();
            for (this.first_output_sample = e.readUint16(), this.sample_offset = [], t = 0; t < r; t++) this.sample_offset[t] = e.readUint32();
            var i = this.description_length - 4 - 4 * r;
            for (this.num_output_samples = [], this.num_total_samples = [], t = 0; t < i / 4; t++) this.num_output_samples[t] = e.readUint16(), this.num_total_samples[t] = e.readUint16()
        }),v.createSampleGroupCtor("avll", function (e) {
            this.layerNumber = e.readUint8(), this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()
        }),v.createSampleGroupCtor("avss", function (e) {
            this.subSequenceIdentifier = e.readUint16(), this.layerNumber = e.readUint8();
            var t = e.readUint8();
            this.durationFlag = t >> 7, this.avgRateFlag = t >> 6 & 1, this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()), this.dependency = [];
            for (var r = e.readUint8(), i = 0; i < r; i++) {
                var n = {};
                this.dependency.push(n), n.subSeqDirectionFlag = e.readUint8(), n.layerNumber = e.readUint8(), n.subSequenceIdentifier = e.readUint16()
            }
        }),v.createSampleGroupCtor("dtrt", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("mvif", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("prol", function (e) {
            this.roll_distance = e.readInt16()
        }),v.createSampleGroupCtor("rap ", function (e) {
            e = e.readUint8();
            this.num_leading_samples_known = e >> 7, this.num_leading_samples = 127 & e
        }),v.createSampleGroupCtor("rash", function (e) {
            if (this.operation_point_count = e.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) h.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = e.readUint8Array(this.description_length - 2); else {
                if (1 === this.operation_point_count) this.target_rate_share = e.readUint16(); else {
                    this.target_rate_share = [], this.available_bitrate = [];
                    for (var t = 0; t < this.operation_point_count; t++) this.available_bitrate[t] = e.readUint32(), this.target_rate_share[t] = e.readUint16()
                }
                this.maximum_bitrate = e.readUint32(), this.minimum_bitrate = e.readUint32(), this.discard_priority = e.readUint8()
            }
        }),v.createSampleGroupCtor("roll", function (e) {
            this.roll_distance = e.readInt16()
        }),v.SampleGroupEntry.prototype.parse = function (e) {
            h.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = e.readUint8Array(this.description_length)
        },v.createSampleGroupCtor("scif", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("scnm", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("seig", function (e) {
            this.reserved = e.readUint8();
            var t = e.readUint8();
            this.crypt_byte_block = t >> 4, this.skip_byte_block = 15 & t, this.isProtected = e.readUint8(), this.Per_Sample_IV_Size = e.readUint8(), this.KID = v.parseHex16(e), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = e.readUint8(), this.constant_IV = e.readUint8Array(this.constant_IV_size))
        }),v.createSampleGroupCtor("stsa", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("sync", function (e) {
            e = e.readUint8();
            this.NAL_unit_type = 63 & e
        }),v.createSampleGroupCtor("tele", function (e) {
            e = e.readUint8();
            this.level_independently_decodable = e >> 7
        }),v.createSampleGroupCtor("tsas", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("tscl", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createSampleGroupCtor("vipr", function (e) {
            h.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
        }),v.createFullBoxCtor("sbgp", function (e) {
            this.grouping_type = e.readString(4), 1 === this.version ? this.grouping_type_parameter = e.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.entries.push(i), i.sample_count = e.readInt32(), i.group_description_index = e.readInt32()
            }
        }),v.createFullBoxCtor("schm", function (e) {
            this.scheme_type = e.readString(4), this.scheme_version = e.readUint32(), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8))
        }),v.createBoxCtor("sdp ", function (e) {
            this.sdptext = e.readString(this.size - this.hdr_size)
        }),v.createFullBoxCtor("sdtp", function (e) {
            var t, r = this.size - this.hdr_size;
            this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
            for (var i = 0; i < r; i++) t = e.readUint8(), this.is_leading[i] = t >> 6, this.sample_depends_on[i] = t >> 4 & 3, this.sample_is_depended_on[i] = t >> 2 & 3, this.sample_has_redundancy[i] = 3 & t
        }),v.createFullBoxCtor("senc"),v.createFullBoxCtor("sgpd", function (e) {
            this.grouping_type = e.readString(4), h.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = e.readUint32() : this.default_length = 0, 2 <= this.version && (this.default_group_description_index = e.readUint32()), this.entries = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = new (v[this.grouping_type + "SampleGroupEntry"] ? v[this.grouping_type + "SampleGroupEntry"] : v.SampleGroupEntry)(this.grouping_type);
                this.entries.push(i), 1 === this.version && 0 === this.default_length ? i.description_length = e.readUint32() : i.description_length = this.default_length, i.write === v.SampleGroupEntry.prototype.write && (h.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), i.data = e.readUint8Array(i.description_length), e.position -= i.description_length), i.parse(e)
            }
        }),v.createFullBoxCtor("sidx", function (e) {
            this.reference_ID = e.readUint32(), this.timescale = e.readUint32(), 0 === this.version ? (this.earliest_presentation_time = e.readUint32(), this.first_offset = e.readUint32()) : (this.earliest_presentation_time = e.readUint64(), this.first_offset = e.readUint64()), e.readUint16(), this.references = [];
            for (var t = e.readUint16(), r = 0; r < t; r++) {
                var i = {}, n = (this.references.push(i), e.readUint32());
                i.reference_type = n >> 31 & 1, i.referenced_size = 2147483647 & n, i.subsegment_duration = e.readUint32(), n = e.readUint32(), i.starts_with_SAP = n >> 31 & 1, i.SAP_type = n >> 28 & 7, i.SAP_delta_time = 268435455 & n
            }
        }),v.SingleItemTypeReferenceBox = function (e, t, r, i) {
            v.Box.call(this, e, t), this.hdr_size = r, this.start = i
        },v.SingleItemTypeReferenceBox.prototype = new v.Box,v.SingleItemTypeReferenceBox.prototype.parse = function (e) {
            this.from_item_ID = e.readUint16();
            var t = e.readUint16();
            this.references = [];
            for (var r = 0; r < t; r++) this.references[r] = e.readUint16()
        },v.SingleItemTypeReferenceBoxLarge = function (e, t, r, i) {
            v.Box.call(this, e, t), this.hdr_size = r, this.start = i
        },v.SingleItemTypeReferenceBoxLarge.prototype = new v.Box,v.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
            this.from_item_ID = e.readUint32();
            var t = e.readUint16();
            this.references = [];
            for (var r = 0; r < t; r++) this.references[r] = e.readUint32()
        },v.createFullBoxCtor("SmDm", function (e) {
            this.primaryRChromaticity_x = e.readUint16(), this.primaryRChromaticity_y = e.readUint16(), this.primaryGChromaticity_x = e.readUint16(), this.primaryGChromaticity_y = e.readUint16(), this.primaryBChromaticity_x = e.readUint16(), this.primaryBChromaticity_y = e.readUint16(), this.whitePointChromaticity_x = e.readUint16(), this.whitePointChromaticity_y = e.readUint16(), this.luminanceMax = e.readUint32(), this.luminanceMin = e.readUint32()
        }),v.createFullBoxCtor("smhd", function (e) {
            this.balance = e.readUint16(), e.readUint16()
        }),v.createFullBoxCtor("ssix", function (e) {
            this.subsegments = [];
            for (var t = e.readUint32(), r = 0; r < t; r++) {
                var i = {};
                this.subsegments.push(i), i.ranges = [];
                for (var n = e.readUint32(), s = 0; s < n; s++) {
                    var o = {};
                    i.ranges.push(o), o.level = e.readUint8(), o.range_size = e.readUint24()
                }
            }
        }),v.createFullBoxCtor("stco", function (e) {
            var t = e.readUint32();
            if (this.chunk_offsets = [], 0 === this.version) for (var r = 0; r < t; r++) this.chunk_offsets.push(e.readUint32())
        }),v.createFullBoxCtor("stdp", function (e) {
            var t = (this.size - this.hdr_size) / 2;
            this.priority = [];
            for (var r = 0; r < t; r++) this.priority[r] = e.readUint16()
        }),v.createFullBoxCtor("sthd"),v.createFullBoxCtor("stri", function (e) {
            this.switch_group = e.readUint16(), this.alternate_group = e.readUint16(), this.sub_track_id = e.readUint32();
            var t = (this.size - this.hdr_size - 8) / 4;
            this.attribute_list = [];
            for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32()
        }),v.createFullBoxCtor("stsc", function (e) {
            var t, r = e.readUint32();
            if (this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version) for (t = 0; t < r; t++) this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32())
        }),v.createFullBoxCtor("stsd", function (e) {
            var t, r, i, n;
            for (this.entries = [], i = e.readUint32(), t = 1; t <= i; t++) {
                if ((r = v.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                v[r.type + "SampleEntry"] ? ((n = new v[r.type + "SampleEntry"](r.size)).hdr_size = r.hdr_size, n.start = r.start) : (h.warn("BoxParser", "Unknown sample entry type: " + r.type), n = new v.SampleEntry(r.type, r.size, r.hdr_size, r.start)), n.write === v.SampleEntry.prototype.write && (h.info("BoxParser", "SampleEntry " + n.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), n.parseDataAndRewind(e)), n.parse(e), this.entries.push(n)
            }
        }),v.createFullBoxCtor("stsg", function (e) {
            this.grouping_type = e.readUint32();
            var t = e.readUint16();
            this.group_description_index = [];
            for (var r = 0; r < t; r++) this.group_description_index[r] = e.readUint32()
        }),v.createFullBoxCtor("stsh", function (e) {
            var t, r = e.readUint32();
            if (this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version) for (t = 0; t < r; t++) this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32())
        }),v.createFullBoxCtor("stss", function (e) {
            var t, r = e.readUint32();
            if (0 === this.version) for (this.sample_numbers = [], t = 0; t < r; t++) this.sample_numbers.push(e.readUint32())
        }),v.createFullBoxCtor("stsz", function (e) {
            var t;
            if (this.sample_sizes = [], 0 === this.version) for (this.sample_size = e.readUint32(), this.sample_count = e.readUint32(), t = 0; t < this.sample_count; t++) 0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : this.sample_sizes[t] = this.sample_size
        }),v.createFullBoxCtor("stts", function (e) {
            var t, r, i = e.readUint32();
            if (this.sample_counts = [], this.sample_deltas = [], 0 === this.version) for (t = 0; t < i; t++) this.sample_counts.push(e.readUint32()), (r = e.readInt32()) < 0 && (h.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), r = 1), this.sample_deltas.push(r)
        }),v.createFullBoxCtor("stvi", function (e) {
            var t = e.readUint32();
            this.single_view_allowed = 3 & t, this.stereo_scheme = e.readUint32();
            var r, t = e.readUint32();
            for (this.stereo_indication_type = e.readString(t), this.boxes = []; e.getPosition() < this.start + this.size;) {
                if ((r = v.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                r = r.box, this.boxes.push(r), this[r.type] = r
            }
        }),v.createBoxCtor("styp", function (e) {
            v.ftypBox.prototype.parse.call(this, e)
        }),v.createFullBoxCtor("stz2", function (e) {
            var t, r;
            if (this.sample_sizes = [], 0 === this.version) if (this.reserved = e.readUint24(), this.field_size = e.readUint8(), r = e.readUint32(), 4 === this.field_size) for (t = 0; t < r; t += 2) {
                var i = e.readUint8();
                this.sample_sizes[t] = i >> 4 & 15, this.sample_sizes[t + 1] = 15 & i
            } else if (8 === this.field_size) for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint8(); else if (16 === this.field_size) for (t = 0; t < r; t++) this.sample_sizes[t] = e.readUint16(); else h.error("BoxParser", "Error in length field in stz2 box")
        }),v.createFullBoxCtor("subs", function (e) {
            var t, r, i, n = e.readUint32();
            for (this.entries = [], t = 0; t < n; t++) {
                var s = {};
                if ((this.entries[t] = s).sample_delta = e.readUint32(), s.subsamples = [], 0 < (i = e.readUint16())) for (r = 0; r < i; r++) {
                    var o = {};
                    s.subsamples.push(o), 1 == this.version ? o.size = e.readUint32() : o.size = e.readUint16(), o.priority = e.readUint8(), o.discardable = e.readUint8(), o.codec_specific_parameters = e.readUint32()
                }
            }
        }),v.createFullBoxCtor("tenc", function (e) {
            var t;
            e.readUint8(), 0 === this.version ? e.readUint8() : (t = e.readUint8(), this.default_crypt_byte_block = t >> 4 & 15, this.default_skip_byte_block = 15 & t), this.default_isProtected = e.readUint8(), this.default_Per_Sample_IV_Size = e.readUint8(), this.default_KID = v.parseHex16(e), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = e.readUint8(), this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size))
        }),v.createFullBoxCtor("tfdt", function (e) {
            1 == this.version ? this.baseMediaDecodeTime = e.readUint64() : this.baseMediaDecodeTime = e.readUint32()
        }),v.createFullBoxCtor("tfhd", function (e) {
            var t = 0;
            this.track_id = e.readUint32(), this.size - this.hdr_size > t && this.flags & v.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = e.readUint64(), t += 8) : this.base_data_offset = 0, this.size - this.hdr_size > t && this.flags & v.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = e.readUint32(), t += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > t && this.flags & v.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = e.readUint32(), t += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > t && this.flags & v.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = e.readUint32(), t += 4) : this.default_sample_size = 0, this.size - this.hdr_size > t && this.flags & v.TFHD_FLAG_SAMPLE_FLAGS ? this.default_sample_flags = e.readUint32() : this.default_sample_flags = 0
        }),v.createFullBoxCtor("tfra", function (e) {
            this.track_ID = e.readUint32(), e.readUint24();
            var t = e.readUint8();
            this.length_size_of_traf_num = t >> 4 & 3, this.length_size_of_trun_num = t >> 2 & 3, this.length_size_of_sample_num = 3 & t, this.entries = [];
            for (var r = e.readUint32(), i = 0; i < r; i++) 1 === this.version ? (this.time = e.readUint64(), this.moof_offset = e.readUint64()) : (this.time = e.readUint32(), this.moof_offset = e.readUint32()), this.traf_number = e["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = e["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = e["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
        }),v.createFullBoxCtor("tkhd", function (e) {
            1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint32()), e.readUint32Array(2), this.layer = e.readInt16(), this.alternate_group = e.readInt16(), this.volume = e.readInt16() >> 8, e.readUint16(), this.matrix = e.readInt32Array(9), this.width = e.readUint32(), this.height = e.readUint32()
        }),v.createBoxCtor("tmax", function (e) {
            this.time = e.readUint32()
        }),v.createBoxCtor("tmin", function (e) {
            this.time = e.readUint32()
        }),v.createBoxCtor("totl", function (e) {
            this.bytessent = e.readUint32()
        }),v.createBoxCtor("tpay", function (e) {
            this.bytessent = e.readUint32()
        }),v.createBoxCtor("tpyl", function (e) {
            this.bytessent = e.readUint64()
        }),v.TrackGroupTypeBox.prototype.parse = function (e) {
            this.parseFullHeader(e), this.track_group_id = e.readUint32()
        },v.createTrackGroupCtor("msrc"),v.TrackReferenceTypeBox = function (e, t, r, i) {
            v.Box.call(this, e, t), this.hdr_size = r, this.start = i
        },v.TrackReferenceTypeBox.prototype = new v.Box,v.TrackReferenceTypeBox.prototype.parse = function (e) {
            this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4)
        },v.trefBox.prototype.parse = function (e) {
            for (var t; e.getPosition() < this.start + this.size;) {
                if ((t = v.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                (t = new v.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start)).write === v.Box.prototype.write && "mdat" !== t.type && (h.info("BoxParser", "TrackReference " + t.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), t.parseDataAndRewind(e)), t.parse(e), this.boxes.push(t)
            }
        },v.createFullBoxCtor("trep", function (e) {
            for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size;) {
                if ((ret = v.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== v.OK) return;
                box = ret.box, this.boxes.push(box)
            }
        }),v.createFullBoxCtor("trex", function (e) {
            this.track_id = e.readUint32(), this.default_sample_description_index = e.readUint32(), this.default_sample_duration = e.readUint32(), this.default_sample_size = e.readUint32(), this.default_sample_flags = e.readUint32()
        }),v.createBoxCtor("trpy", function (e) {
            this.bytessent = e.readUint64()
        }),v.createFullBoxCtor("trun", function (e) {
            var t = 0;
            if (this.sample_count = e.readUint32(), this.size - this.hdr_size > (t += 4) && this.flags & v.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = e.readInt32(), t += 4) : this.data_offset = 0, this.size - this.hdr_size > t && this.flags & v.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = e.readUint32(), t += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > t) for (var r = 0; r < this.sample_count; r++) this.flags & v.TRUN_FLAGS_DURATION && (this.sample_duration[r] = e.readUint32()), this.flags & v.TRUN_FLAGS_SIZE && (this.sample_size[r] = e.readUint32()), this.flags & v.TRUN_FLAGS_FLAGS && (this.sample_flags[r] = e.readUint32()), this.flags & v.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[r] = e.readUint32() : this.sample_composition_time_offset[r] = e.readInt32())
        }),v.createFullBoxCtor("tsel", function (e) {
            this.switch_group = e.readUint32();
            var t = (this.size - this.hdr_size - 4) / 4;
            this.attribute_list = [];
            for (var r = 0; r < t; r++) this.attribute_list[r] = e.readUint32()
        }),v.createFullBoxCtor("txtC", function (e) {
            this.config = e.readCString()
        }),v.createFullBoxCtor("url ", function (e) {
            1 !== this.flags && (this.location = e.readCString())
        }),v.createFullBoxCtor("urn ", function (e) {
            this.name = e.readCString(), 0 < this.size - this.hdr_size - this.name.length - 1 && (this.location = e.readCString())
        }),v.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function (e) {
            this.LiveServerManifest = e.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }),v.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function (e) {
            this.system_id = v.parseHex16(e);
            var t = e.readUint32();
            0 < t && (this.data = e.readUint8Array(t))
        }),v.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1),v.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function (e) {
            this.default_AlgorithmID = e.readUint24(), this.default_IV_size = e.readUint8(), this.default_KID = v.parseHex16(e)
        }),v.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function (e) {
            this.fragment_count = e.readUint8(), this.entries = [];
            for (var t = 0; t < this.fragment_count; t++) {
                var r = {}, i = 0, n = 0,
                    n = 1 === this.version ? (i = e.readUint64(), e.readUint64()) : (i = e.readUint32(), e.readUint32());
                r.absolute_time = i, r.absolute_duration = n, this.entries.push(r)
            }
        }),v.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function (e) {
            1 === this.version ? (this.absolute_time = e.readUint64(), this.duration = e.readUint64()) : (this.absolute_time = e.readUint32(), this.duration = e.readUint32())
        }),v.createFullBoxCtor("vmhd", function (e) {
            this.graphicsmode = e.readUint16(), this.opcolor = e.readUint16Array(3)
        }),v.createFullBoxCtor("vpcC", function (e) {
            var t;
            1 === this.version ? (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4, this.chromaSubsampling = t >> 1 & 7, this.videoFullRangeFlag = 1 & t, this.colourPrimaries = e.readUint8(), this.transferCharacteristics = e.readUint8(), this.matrixCoefficients = e.readUint8()) : (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4 & 15, this.colorSpace = 15 & t, t = e.readUint8(), this.chromaSubsampling = t >> 4 & 15, this.transferFunction = t >> 1 & 7, this.videoFullRangeFlag = 1 & t), this.codecIntializationDataSize = e.readUint16(), this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize)
        }),v.createBoxCtor("vttC", function (e) {
            this.text = e.readString(this.size - this.hdr_size)
        }),v.createFullBoxCtor("vvcC", function (e) {
            var t, r = {
                held_bits: void 0, num_held_bits: 0, stream_read_1_bytes: function (e) {
                    this.held_bits = e.readUint8(), this.num_held_bits = 8
                }, stream_read_2_bytes: function (e) {
                    this.held_bits = e.readUint16(), this.num_held_bits = 16
                }, extract_bits: function (e) {
                    var t = this.held_bits >> this.num_held_bits - e & (1 << e) - 1;
                    return this.num_held_bits -= e, t
                }
            };
            if (r.stream_read_1_bytes(e), r.extract_bits(5), this.lengthSizeMinusOne = r.extract_bits(2), this.ptl_present_flag = r.extract_bits(1), this.ptl_present_flag) {
                if (r.stream_read_2_bytes(e), this.ols_idx = r.extract_bits(9), this.num_sublayers = r.extract_bits(3), this.constant_frame_rate = r.extract_bits(2), this.chroma_format_idc = r.extract_bits(2), r.stream_read_1_bytes(e), this.bit_depth_minus8 = r.extract_bits(3), r.extract_bits(5), r.stream_read_2_bytes(e), r.extract_bits(2), this.num_bytes_constraint_info = r.extract_bits(6), this.general_profile_idc = r.extract_bits(7), this.general_tier_flag = r.extract_bits(1), this.general_level_idc = e.readUint8(), r.stream_read_1_bytes(e), this.ptl_frame_only_constraint_flag = r.extract_bits(1), this.ptl_multilayer_enabled_flag = r.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
                    for (a = 0; a < this.num_bytes_constraint_info - 1; a++) {
                        var i = r.extract_bits(6), n = (r.stream_read_1_bytes(e), r.extract_bits(2));
                        this.general_constraint_info[a] = i << 2 | n
                    }
                    this.general_constraint_info[this.num_bytes_constraint_info - 1] = r.extract_bits(6)
                } else r.extract_bits(6);
                for (r.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, t = this.num_sublayers - 2; 0 <= t; --t) {
                    var s = r.extract_bits(1);
                    this.ptl_sublayer_present_mask |= s << t
                }
                for (t = this.num_sublayers; t <= 8 && 1 < this.num_sublayers; ++t) r.extract_bits(1);
                for (t = this.num_sublayers - 2; 0 <= t; --t) this.ptl_sublayer_present_mask & 1 << t && (this.sublayer_level_idc[t] = e.readUint8());
                if (this.ptl_num_sub_profiles = e.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles) for (a = 0; a < this.ptl_num_sub_profiles; a++) this.general_sub_profile_idc.push(e.readUint32());
                this.max_picture_width = e.readUint16(), this.max_picture_height = e.readUint16(), this.avg_frame_rate = e.readUint16()
            }
            this.nalu_arrays = [];
            for (var o = e.readUint8(), a = 0; a < o; a++) {
                var l = [],
                    d = (this.nalu_arrays.push(l), r.stream_read_1_bytes(e), l.completeness = r.extract_bits(1), r.extract_bits(2), l.nalu_type = r.extract_bits(5), 1);
                for (13 != l.nalu_type && 12 != l.nalu_type && (d = e.readUint16()), t = 0; t < d; t++) {
                    var u = e.readUint16();
                    l.push({data: e.readUint8Array(u), length: u})
                }
            }
        }),v.createFullBoxCtor("vvnC", function (e) {
            var t = strm.readUint8();
            this.lengthSizeMinusOne = 3 & t
        }),v.SampleEntry.prototype.isVideo = function () {
            return !1
        },v.SampleEntry.prototype.isAudio = function () {
            return !1
        },v.SampleEntry.prototype.isSubtitle = function () {
            return !1
        },v.SampleEntry.prototype.isMetadata = function () {
            return !1
        },v.SampleEntry.prototype.isHint = function () {
            return !1
        },v.SampleEntry.prototype.getCodec = function () {
            return this.type.replace(".", "")
        },v.SampleEntry.prototype.getWidth = function () {
            return ""
        },v.SampleEntry.prototype.getHeight = function () {
            return ""
        },v.SampleEntry.prototype.getChannelCount = function () {
            return ""
        },v.SampleEntry.prototype.getSampleRate = function () {
            return ""
        },v.SampleEntry.prototype.getSampleSize = function () {
            return ""
        },v.VisualSampleEntry.prototype.isVideo = function () {
            return !0
        },v.VisualSampleEntry.prototype.getWidth = function () {
            return this.width
        },v.VisualSampleEntry.prototype.getHeight = function () {
            return this.height
        },v.AudioSampleEntry.prototype.isAudio = function () {
            return !0
        },v.AudioSampleEntry.prototype.getChannelCount = function () {
            return this.channel_count
        },v.AudioSampleEntry.prototype.getSampleRate = function () {
            return this.samplerate
        },v.AudioSampleEntry.prototype.getSampleSize = function () {
            return this.samplesize
        },v.SubtitleSampleEntry.prototype.isSubtitle = function () {
            return !0
        },v.MetadataSampleEntry.prototype.isMetadata = function () {
            return !0
        },v.decimalToHex = function (e, t) {
            var r = Number(e).toString(16);
            for (t = null == t ? 2 : t; r.length < t;) r = "0" + r;
            return r
        },v.avc1SampleEntry.prototype.getCodec = v.avc2SampleEntry.prototype.getCodec = v.avc3SampleEntry.prototype.getCodec = v.avc4SampleEntry.prototype.getCodec = function () {
            var e = v.SampleEntry.prototype.getCodec.call(this);
            return this.avcC ? e + "." + v.decimalToHex(this.avcC.AVCProfileIndication) + v.decimalToHex(this.avcC.profile_compatibility) + v.decimalToHex(this.avcC.AVCLevelIndication) : e
        },v.hev1SampleEntry.prototype.getCodec = v.hvc1SampleEntry.prototype.getCodec = function () {
            var e = v.SampleEntry.prototype.getCodec.call(this);
            if (this.hvcC) {
                switch (e += ".", this.hvcC.general_profile_space) {
                    case 0:
                        e += "";
                        break;
                    case 1:
                        e += "A";
                        break;
                    case 2:
                        e += "B";
                        break;
                    case 3:
                        e += "C"
                }
                for (var e = e + this.hvcC.general_profile_idc + ".", t = this.hvcC.general_profile_compatibility, r = 0, i = 0; i < 32 && (r |= 1 & t, 31 != i); i++) r <<= 1, t >>= 1;
                e = e + v.decimalToHex(r, 0) + ".", 0 === this.hvcC.general_tier_flag ? e += "L" : e += "H", e += this.hvcC.general_level_idc;
                var n = !1, s = "";
                for (i = 5; 0 <= i; i--) (this.hvcC.general_constraint_indicator[i] || n) && (s = "." + v.decimalToHex(this.hvcC.general_constraint_indicator[i], 0) + s, n = !0);
                e += s
            }
            return e
        },v.vvc1SampleEntry.prototype.getCodec = v.vvi1SampleEntry.prototype.getCodec = function () {
            var e = v.SampleEntry.prototype.getCodec.call(this);
            if (this.vvcC) {
                e += "." + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? e += ".H" : e += ".L", e += this.vvcC.general_level_idc;
                var t = "";
                if (this.vvcC.general_constraint_info) {
                    var r, i = [], n = 0,
                        n = (n |= this.vvcC.ptl_frame_only_constraint << 7) | this.vvcC.ptl_multilayer_enabled << 6;
                    for (l = 0; l < this.vvcC.general_constraint_info.length; ++l) n |= this.vvcC.general_constraint_info[l] >> 2 & 63, i.push(n), n && (r = l), n = this.vvcC.general_constraint_info[l] >> 2 & 3;
                    if (void 0 === r) t = ".CA"; else {
                        for (var t = ".C", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", o = 0, a = 0, l = 0; l <= r; ++l) for (o = o << 8 | i[l], a += 8; 5 <= a;) t += s[o >> a - 5 & 31], o &= (1 << (a -= 5)) - 1;
                        a && (t += s[31 & (o <<= 5 - a)])
                    }
                }
                e += t
            }
            return e
        },v.mp4aSampleEntry.prototype.getCodec = function () {
            var e, t, r = v.SampleEntry.prototype.getCodec.call(this);
            return this.esds && this.esds.esd ? (e = this.esds.esd.getOTI(), t = this.esds.esd.getAudioConfig(), r + "." + v.decimalToHex(e) + (t ? "." + t : "")) : r
        },v.stxtSampleEntry.prototype.getCodec = function () {
            var e = v.SampleEntry.prototype.getCodec.call(this);
            return this.mime_format ? e + "." + this.mime_format : e
        },v.vp08SampleEntry.prototype.getCodec = v.vp09SampleEntry.prototype.getCodec = function () {
            var e = v.SampleEntry.prototype.getCodec.call(this), t = this.vpcC.level, r = this.vpcC.bitDepth;
            return e + ".0" + this.vpcC.profile + "." + (t = 0 == t ? "00" : t) + "." + (r = 8 == r ? "08" : r)
        },v.av01SampleEntry.prototype.getCodec = function () {
            var e, t = v.SampleEntry.prototype.getCodec.call(this), r = this.av1C.seq_level_idx_0;
            return 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? e = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? "10" : "08"), t + "." + this.av1C.seq_profile + "." + (r = r < 10 ? "0" + r : r) + (this.av1C.seq_tier_0 ? "H" : "M") + "." + e
        },v.Box.prototype.writeHeader = function (e, t) {
            this.size += 8, this.size > d && (this.size += 8), "uuid" === this.type && (this.size += 16), h.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + e.getPosition() + (t || "")), this.size > d ? e.writeUint32(1) : (this.sizePosition = e.getPosition(), e.writeUint32(this.size)), e.writeString(this.type, null, 4), "uuid" === this.type && e.writeUint8Array(this.uuid), this.size > d && e.writeUint64(this.size)
        },v.FullBox.prototype.writeHeader = function (e) {
            this.size += 4, v.Box.prototype.writeHeader.call(this, e, " v=" + this.version + " f=" + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags)
        },v.Box.prototype.write = function (e) {
            "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(e), e.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(e), this.data && e.writeUint8Array(this.data))
        },v.ContainerBox.prototype.write = function (e) {
            this.size = 0, this.writeHeader(e);
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && (this.boxes[t].write(e), this.size += this.boxes[t].size);
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        },v.TrackReferenceTypeBox.prototype.write = function (e) {
            this.size = 4 * this.track_ids.length, this.writeHeader(e), e.writeUint32Array(this.track_ids)
        },v.avcCBox.prototype.write = function (e) {
            var t;
            for (this.size = 7, t = 0; t < this.SPS.length; t++) this.size += 2 + this.SPS[t].length;
            for (t = 0; t < this.PPS.length; t++) this.size += 2 + this.PPS[t].length;
            for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), t = 0; t < this.SPS.length; t++) e.writeUint16(this.SPS[t].length), e.writeUint8Array(this.SPS[t].nalu);
            for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++) e.writeUint16(this.PPS[t].length), e.writeUint8Array(this.PPS[t].nalu);
            this.ext && e.writeUint8Array(this.ext)
        },v.co64Box.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), t = 0; t < this.chunk_offsets.length; t++) e.writeUint64(this.chunk_offsets[t])
        },v.cslgBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime)
        },v.cttsBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), 1 === this.version ? e.writeInt32(this.sample_offsets[t]) : e.writeUint32(this.sample_offsets[t])
        },v.drefBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        },v.elngBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(e), e.writeString(this.extended_language)
        },v.elstBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(e), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) {
                var r = this.entries[t];
                e.writeUint32(r.segment_duration), e.writeInt32(r.media_time), e.writeInt16(r.media_rate_integer), e.writeInt16(r.media_rate_fraction)
            }
        },v.emsgBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data)
        },v.ftypBox.prototype.write = function (e) {
            this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
            for (var t = 0; t < this.compatible_brands.length; t++) e.writeString(this.compatible_brands[t], null, 4)
        },v.hdlrBox.prototype.write = function (e) {
            this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name)
        },v.kindBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value)
        },v.mdhdBox.prototype.write = function (e) {
            this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0)
        },v.mehdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.fragment_duration)
        },v.mfhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.sequence_number)
        },v.mvhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id)
        },v.SampleEntry.prototype.writeHeader = function (e) {
            this.size = 8, v.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index)
        },v.SampleEntry.prototype.writeFooter = function (e) {
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e), this.size += this.boxes[t].size;
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        },v.SampleEntry.prototype.write = function (e) {
            this.writeHeader(e), e.writeUint8Array(this.data), this.size += this.data.length, h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        },v.VisualSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += 70, e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e)
        },v.AudioSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += 20, e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e)
        },v.stppSampleEntry.prototype.write = function (e) {
            this.writeHeader(e), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e)
        },v.SampleGroupEntry.prototype.write = function (e) {
            e.writeUint8Array(this.data)
        },v.sbgpBox.prototype.write = function (e) {
            this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
            for (var t = 0; t < this.entries.length; t++) {
                var r = this.entries[t];
                e.writeInt32(r.sample_count), e.writeInt32(r.group_description_index)
            }
        },v.sgpdBox.prototype.write = function (e) {
            var t, r;
            for (this.flags = 0, this.size = 12, t = 0; t < this.entries.length; t++) r = this.entries[t], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += r.data.length);
            for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), 2 <= this.version && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), t = 0; t < this.entries.length; t++) r = this.entries[t], 1 === this.version && 0 === this.default_length && e.writeUint32(r.description_length), r.write(e)
        },v.sidxBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
            for (var t = 0; t < this.references.length; t++) {
                var r = this.references[t];
                e.writeUint32(r.reference_type << 31 | r.referenced_size), e.writeUint32(r.subsegment_duration), e.writeUint32(r.starts_with_SAP << 31 | r.SAP_type << 28 | r.SAP_delta_time)
            }
        },v.smhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0)
        },v.stcoBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets)
        },v.stscBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), t = 0; t < this.first_chunk.length; t++) e.writeUint32(this.first_chunk[t]), e.writeUint32(this.samples_per_chunk[t]), e.writeUint32(this.sample_description_index[t])
        },v.stsdBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, t = 0; t < this.entries.length; t++) this.entries[t].write(e), this.size += this.entries[t].size;
            h.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), e.adjustUint32(this.sizePosition, this.size)
        },v.stshBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), t = 0; t < this.shadowed_sample_numbers.length; t++) e.writeUint32(this.shadowed_sample_numbers[t]), e.writeUint32(this.sync_sample_numbers[t])
        },v.stssBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers)
        },v.stszBox.prototype.write = function (e) {
            var t, r = !0;
            if (this.version = 0, (this.flags = 0) < this.sample_sizes.length) for (t = 0; t + 1 < this.sample_sizes.length;) {
                if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
                    r = !1;
                    break
                }
                t++
            } else r = !1;
            this.size = 8, r || (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), r ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), r || e.writeUint32Array(this.sample_sizes)
        },v.sttsBox.prototype.write = function (e) {
            var t;
            for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++) e.writeUint32(this.sample_counts[t]), e.writeUint32(this.sample_deltas[t])
        },v.tfdtBox.prototype.write = function (e) {
            var t = Math.pow(2, 32) - 1;
            this.version = this.baseMediaDecodeTime > t ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime)
        },v.tfhdBox.prototype.write = function (e) {
            this.version = 0, this.size = 4, this.flags & v.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & v.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & v.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & v.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & v.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & v.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & v.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & v.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & v.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & v.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags)
        },v.tkhdBox.prototype.write = function (e) {
            this.version = 0, this.size = 80, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height)
        },v.trexBox.prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags)
        },v.trunBox.prototype.write = function (e) {
            this.version = 0, this.size = 4, this.flags & v.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & v.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & v.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & v.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & v.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & v.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & v.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = e.getPosition(), e.writeInt32(this.data_offset)), this.flags & v.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
            for (var t = 0; t < this.sample_count; t++) this.flags & v.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[t]), this.flags & v.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[t]), this.flags & v.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[t]), this.flags & v.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[t]) : e.writeInt32(this.sample_composition_time_offset[t]))
        },v["url Box"].prototype.write = function (e) {
            this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(e), this.location && e.writeCString(this.location)
        },v["urn Box"].prototype.write = function (e) {
            this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location)
        },v.vmhdBox.prototype.write = function (e) {
            this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor)
        },v.cttsBox.prototype.unpack = function (e) {
            for (var t, r = 0, i = 0; i < this.sample_counts.length; i++) for (t = 0; t < this.sample_counts[i]; t++) e[r].pts = e[r].dts + this.sample_offsets[i], r++
        },v.sttsBox.prototype.unpack = function (e) {
            for (var t, r = 0, i = 0; i < this.sample_counts.length; i++) for (t = 0; t < this.sample_counts[i]; t++) e[r].dts = 0 === r ? 0 : e[r - 1].dts + this.sample_deltas[i], r++
        },v.stcoBox.prototype.unpack = function (e) {
            for (var t = 0; t < this.chunk_offsets.length; t++) e[t].offset = this.chunk_offsets[t]
        },v.stscBox.prototype.unpack = function (e) {
            for (var t, r, i = 0, n = 0, s = 0; s < this.first_chunk.length; s++) for (t = 0; t < (s + 1 < this.first_chunk.length ? this.first_chunk[s + 1] : 1 / 0); t++) for (n++, r = 0; r < this.samples_per_chunk[s]; r++) {
                if (!e[i]) return;
                e[i].description_index = this.sample_description_index[s], e[i].chunk_index = n, i++
            }
        },v.stszBox.prototype.unpack = function (e) {
            for (var t = 0; t < this.sample_sizes.length; t++) e[t].size = this.sample_sizes[t]
        },v.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"],v.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"],v.boxEqualFields = function (e, t) {
            if (e && !t) return !1;
            for (var r in e) if (!(-1 < v.DIFF_BOXES_PROP_NAMES.indexOf(r) || e[r] instanceof v.Box || t[r] instanceof v.Box || void 0 === e[r] || void 0 === t[r] || "function" == typeof e[r] || "function" == typeof t[r] || e.subBoxNames && -1 < e.subBoxNames.indexOf(r.slice(0, 4)) || t.subBoxNames && -1 < t.subBoxNames.indexOf(r.slice(0, 4)) || "data" === r || "start" === r || "size" === r || "creation_time" === r || "modification_time" === r || -1 < v.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(r) || e[r] === t[r])) return !1;
            return !0
        },v.boxEqual = function (e, t) {
            if (!v.boxEqualFields(e, t)) return !1;
            for (var r = 0; r < v.DIFF_BOXES_PROP_NAMES.length; r++) {
                var i = v.DIFF_BOXES_PROP_NAMES[r];
                if (e[i] && t[i] && !v.boxEqual(e[i], t[i])) return !1
            }
            return !0
        },n.prototype.parseSample = function (e) {
            var t, r = {resources: []}, i = new f(e.data.buffer);
            if (e.subsamples && 0 !== e.subsamples.length) {
                if (r.documentString = i.readString(e.subsamples[0].size), 1 < e.subsamples.length) for (t = 1; t < e.subsamples.length; t++) r.resources[t] = i.readUint8Array(e.subsamples[t].size)
            } else r.documentString = i.readString(e.data.length);
            return "undefined" != typeof DOMParser && (r.document = (new DOMParser).parseFromString(r.documentString, "application/xml")), r
        },s.prototype.parseSample = function (e) {
            return new f(e.data.buffer).readString(e.data.length)
        },s.prototype.parseConfig = function (e) {
            e = new f(e.buffer);
            return e.readUint32(), e.readCString()
        },t.XMLSubtitlein4Parser = n,t.Textin4Parser = s;
        B.prototype.setSegmentOptions = function (e, t, r) {
            var i, n = this.getTrackById(e);
            n && (this.fragmentedTracks.push(i = {}), i.id = e, i.user = t, (i.trak = n).nextSample = 0, i.segmentStream = null, i.nb_samples = 1e3, i.rapAlignement = !0, r && (r.nbSamples && (i.nb_samples = r.nbSamples), r.rapAlignement && (i.rapAlignement = r.rapAlignement)))
        }, B.prototype.unsetSegmentOptions = function (e) {
            for (var t = -1, r = 0; r < this.fragmentedTracks.length; r++) this.fragmentedTracks[r].id == e && (t = r);
            -1 < t && this.fragmentedTracks.splice(t, 1)
        }, B.prototype.setExtractionOptions = function (e, t, r) {
            var i, n = this.getTrackById(e);
            n && (this.extractedTracks.push(i = {}), i.id = e, i.user = t, (i.trak = n).nextSample = 0, i.nb_samples = 1e3, i.samples = [], r && r.nbSamples && (i.nb_samples = r.nbSamples))
        }, B.prototype.unsetExtractionOptions = function (e) {
            for (var t = -1, r = 0; r < this.extractedTracks.length; r++) this.extractedTracks[r].id == e && (t = r);
            -1 < t && this.extractedTracks.splice(t, 1)
        }, B.prototype.parse = function () {
            var e, t;
            if (!this.restoreParsePosition || this.restoreParsePosition()) for (; ;) {
                if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                    if (this.processIncompleteMdat()) continue;
                    return
                }
                if (this.saveParsePosition && this.saveParsePosition(), (e = v.parseOneBox(this.stream, !1)).code === v.ERR_NOT_ENOUGH_DATA) {
                    if (this.processIncompleteBox) {
                        if (this.processIncompleteBox(e)) continue;
                        return
                    }
                    return
                }
                var r = "uuid" !== (t = e.box).type ? t.type : t.uuid;
                switch (this.boxes.push(t), r) {
                    case"mdat":
                        this.mdats.push(t);
                        break;
                    case"moof":
                        this.moofs.push(t);
                        break;
                    case"moov":
                        this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
                    default:
                        void 0 !== this[r] && h.warn("ISOFile", "Duplicate Box of type: " + r + ", overriding previous occurrence"), this[r] = t
                }
                this.updateUsedBytes && this.updateUsedBytes(t, e)
            }
        }, B.prototype.checkBuffer = function (e) {
            if (null == e) throw"Buffer must be defined and non empty";
            if (void 0 === e.fileStart) throw"Buffer must have a fileStart property";
            return 0 === e.byteLength ? (h.warn("ISOFile", "Ignoring empty buffer (fileStart: " + e.fileStart + ")"), this.stream.logBufferLevel(), !1) : (h.info("ISOFile", "Processing buffer (fileStart: " + e.fileStart + ")"), e.usedBytes = 0, this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (h.warn("ISOFile", "Not ready to start parsing"), !1))
        }, B.prototype.appendBuffer = function (e, t) {
            var r;
            if (this.checkBuffer(e)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(t), this.nextSeekPosition ? (r = this.nextSeekPosition, this.nextSeekPosition = void 0) : r = this.nextParsePosition, this.stream.getEndFilePositionAfter && (r = this.stream.getEndFilePositionAfter(r))) : r = this.nextParsePosition || 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (h.info("ISOFile", "Done processing buffer (fileStart: " + e.fileStart + ") - next buffer to fetch should have a fileStart position of " + r), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), h.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), r
        }, B.prototype.getInfo = function () {
            var e, t, r, i, n, s, o = {}, a = new Date("1904-01-01T00:00:00Z").getTime();
            if (this.moov) for (o.hasMoov = !0, o.duration = this.moov.mvhd.duration, o.timescale = this.moov.mvhd.timescale, o.isFragmented = null != this.moov.mvex, o.isFragmented && this.moov.mvex.mehd && (o.fragment_duration = this.moov.mvex.mehd.fragment_duration), o.isProgressive = this.isProgressive, o.hasIOD = null != this.moov.iods, o.brands = [], o.brands.push(this.ftyp.major_brand), o.brands = o.brands.concat(this.ftyp.compatible_brands), o.created = new Date(a + 1e3 * this.moov.mvhd.creation_time), o.modified = new Date(a + 1e3 * this.moov.mvhd.modification_time), o.tracks = [], o.audioTracks = [], o.videoTracks = [], o.subtitleTracks = [], o.metadataTracks = [], o.hintTracks = [], o.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
                if (s = (r = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0], o.tracks.push(i = {}), i.id = r.tkhd.track_id, i.name = r.mdia.hdlr.name, i.references = [], r.tref) for (t = 0; t < r.tref.boxes.length; t++) i.references.push(n = {}), n.type = r.tref.boxes[t].type, n.track_ids = r.tref.boxes[t].track_ids;
                r.edts && (i.edits = r.edts.elst.entries), i.created = new Date(a + 1e3 * r.tkhd.creation_time), i.modified = new Date(a + 1e3 * r.tkhd.modification_time), i.movie_duration = r.tkhd.duration, i.movie_timescale = o.timescale, i.layer = r.tkhd.layer, i.alternate_group = r.tkhd.alternate_group, i.volume = r.tkhd.volume, i.matrix = r.tkhd.matrix, i.track_width = r.tkhd.width / 65536, i.track_height = r.tkhd.height / 65536, i.timescale = r.mdia.mdhd.timescale, i.cts_shift = r.mdia.minf.stbl.cslg, i.duration = r.mdia.mdhd.duration, i.samples_duration = r.samples_duration, i.codec = s.getCodec(), i.kind = r.udta && r.udta.kinds.length ? r.udta.kinds[0] : {
                    schemeURI: "",
                    value: ""
                }, i.language = r.mdia.elng ? r.mdia.elng.extended_language : r.mdia.mdhd.languageString, i.nb_samples = r.samples.length, i.size = r.samples_size, i.bitrate = 8 * i.size * i.timescale / i.samples_duration, s.isAudio() ? (i.type = "audio", o.audioTracks.push(i), i.audio = {}, i.audio.sample_rate = s.getSampleRate(), i.audio.channel_count = s.getChannelCount(), i.audio.sample_size = s.getSampleSize()) : s.isVideo() ? (i.type = "video", o.videoTracks.push(i), i.video = {}, i.video.width = s.getWidth(), i.video.height = s.getHeight()) : s.isSubtitle() ? (i.type = "subtitles", o.subtitleTracks.push(i)) : s.isHint() ? (i.type = "metadata", o.hintTracks.push(i)) : s.isMetadata() ? (i.type = "metadata", o.metadataTracks.push(i)) : (i.type = "metadata", o.otherTracks.push(i))
            } else o.hasMoov = !1;
            if (o.mime = "", o.hasMoov && o.tracks) {
                for (o.videoTracks && 0 < o.videoTracks.length ? o.mime += 'video/mp4; codecs="' : o.audioTracks && 0 < o.audioTracks.length ? o.mime += 'audio/mp4; codecs="' : o.mime += 'application/mp4; codecs="', e = 0; e < o.tracks.length; e++) 0 !== e && (o.mime += ","), o.mime += o.tracks[e].codec;
                o.mime += '"; profiles="', o.mime += this.ftyp.compatible_brands.join(), o.mime += '"'
            }
            return o
        }, B.prototype.processSamples = function (e) {
            var t;
            if (this.sampleProcessingStarted) {
                if (this.isFragmentationInitialized && null !== this.onSegment) for (t = 0; t < this.fragmentedTracks.length; t++) for (var r = this.fragmentedTracks[t], i = r.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                    h.debug("ISOFile", "Creating media fragment on track #" + r.id + " for sample " + i.nextSample);
                    var n = this.createFragment(r.id, i.nextSample, r.segmentStream);
                    if (!n) break;
                    if (r.segmentStream = n, i.nextSample++, (i.nextSample % r.nb_samples == 0 || e || i.nextSample >= i.samples.length) && (h.info("ISOFile", "Sending fragmented data on track #" + r.id + " for samples [" + Math.max(0, i.nextSample - r.nb_samples) + "," + (i.nextSample - 1) + "]"), h.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, i.nextSample, e || i.nextSample >= i.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[t])) break
                }
                if (null !== this.onSamples) for (t = 0; t < this.extractedTracks.length; t++) {
                    var s = this.extractedTracks[t];
                    for (i = s.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                        h.debug("ISOFile", "Exporting on track #" + s.id + " sample #" + i.nextSample);
                        var o = this.getSample(i, i.nextSample);
                        if (!o) break;
                        if (i.nextSample++, s.samples.push(o), (i.nextSample % s.nb_samples == 0 || i.nextSample >= i.samples.length) && (h.debug("ISOFile", "Sending samples on track #" + s.id + " for sample " + i.nextSample), this.onSamples && this.onSamples(s.id, s.user, s.samples), s.samples = [], s !== this.extractedTracks[t])) break
                    }
                }
            }
        }, B.prototype.getBox = function (e) {
            e = this.getBoxes(e, !0);
            return e.length ? e[0] : null
        }, B.prototype.getBoxes = function (e, t) {
            var r = [];
            return B._sweep.call(this, e, r, t), r
        }, B._sweep = function (e, t, r) {
            for (var i in this.type && this.type == e && t.push(this), this.boxes) {
                if (t.length && r) return;
                B._sweep.call(this.boxes[i], e, t, r)
            }
        }, B.prototype.getTrackSamplesInfo = function (e) {
            e = this.getTrackById(e);
            return e ? e.samples : void 0
        }, B.prototype.getTrackSample = function (e, t) {
            e = this.getTrackById(e);
            return this.getSample(e, t)
        }, B.prototype.releaseUsedSamples = function (e, t) {
            var r = 0, i = this.getTrackById(e);
            i.lastValidSample || (i.lastValidSample = 0);
            for (var n = i.lastValidSample; n < t; n++) r += this.releaseSample(i, n);
            h.info("ISOFile", "Track #" + e + " released samples up to " + t + " (released size: " + r + ", remaining: " + this.samplesDataSize + ")"), i.lastValidSample = t
        }, B.prototype.start = function () {
            this.sampleProcessingStarted = !0, this.processSamples(!1)
        }, B.prototype.stop = function () {
            this.sampleProcessingStarted = !1
        }, B.prototype.flush = function () {
            h.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
        }, B.prototype.seekTrack = function (e, t, r) {
            var i, n, s, o, a = 0, l = 0;
            if (0 === r.samples.length) return h.info("ISOFile", "No sample in track, cannot seek! Using time " + h.getDurationString(0, 1) + " and offset: 0"), {
                offset: 0,
                time: 0
            };
            for (i = 0; i < r.samples.length; i++) {
                if (n = r.samples[i], 0 === i) l = 0, o = n.timescale; else if (n.cts > e * n.timescale) {
                    l = i - 1;
                    break
                }
                t && n.is_sync && (a = i)
            }
            for (t && (l = a), e = r.samples[l].cts, r.nextSample = l; r.samples[l].alreadyRead === r.samples[l].size && r.samples[l + 1];) l++;
            return s = r.samples[l].offset + r.samples[l].alreadyRead, h.info("ISOFile", "Seeking to " + (t ? "RAP" : "") + " sample #" + r.nextSample + " on track " + r.tkhd.track_id + ", time " + h.getDurationString(e, o) + " and offset: " + s), {
                offset: s,
                time: e / o
            }
        }, B.prototype.seek = function (e, t) {
            var r, i, n = this.moov, s = {offset: 1 / 0, time: 1 / 0};
            if (this.moov) {
                for (i = 0; i < n.traks.length; i++) r = n.traks[i], (r = this.seekTrack(e, t, r)).offset < s.offset && (s.offset = r.offset), r.time < s.time && (s.time = r.time);
                return h.info("ISOFile", "Seeking at time " + h.getDurationString(s.time, 1) + " needs a buffer with a fileStart position of " + s.offset), s.offset === 1 / 0 ? s = {
                    offset: this.nextParsePosition,
                    time: 0
                } : s.offset = this.stream.getEndFilePositionAfter(s.offset), h.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + s.offset), s
            }
            throw"Cannot seek: moov not received!"
        }, B.prototype.equal = function (e) {
            for (var t = 0; t < this.boxes.length && t < e.boxes.length;) {
                var r = this.boxes[t], i = e.boxes[t];
                if (!v.boxEqual(r, i)) return !1;
                t++
            }
            return !0
        }, (t.ISOFile = B).prototype.lastBoxStartPosition = 0, B.prototype.parsingMdat = null, B.prototype.nextParsePosition = 0, B.prototype.discardMdatData = !1, B.prototype.processIncompleteBox = function (e) {
            var t;
            return "mdat" === e.type ? (t = new v[e.type + "Box"](e.size), this.parsingMdat = t, this.boxes.push(t), this.mdats.push(t), t.start = e.start, t.hdr_size = e.hdr_size, this.stream.addUsedBytes(t.hdr_size), this.lastBoxStartPosition = t.start + t.size, this.stream.seek(t.start + t.size, !1, this.discardMdatData) ? !(this.parsingMdat = null) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = t.start + t.size, !1)) : ("moov" === e.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer() ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (!e.type || this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + e.size, !1))
        }, B.prototype.hasIncompleteMdat = function () {
            return null !== this.parsingMdat
        }, B.prototype.processIncompleteMdat = function () {
            var e = this.parsingMdat;
            return this.stream.seek(e.start + e.size, !1, this.discardMdatData) ? (h.debug("ISOFile", "Found 'mdat' end in buffered data"), !(this.parsingMdat = null)) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
        }, B.prototype.restoreParsePosition = function () {
            return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
        }, B.prototype.saveParsePosition = function () {
            this.lastBoxStartPosition = this.stream.getPosition()
        }, B.prototype.updateUsedBytes = function (e, t) {
            this.stream.addUsedBytes && ("mdat" === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size))
        }, B.prototype.add = v.Box.prototype.add, B.prototype.addBox = v.Box.prototype.addBox, B.prototype.init = function (e) {
            var e = e || {},
                t = (this.add("ftyp").set("major_brand", e.brands && e.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", e.brands || ["iso4"]), this.add("moov"));
            return t.add("mvhd").set("timescale", e.timescale || 600).set("rate", e.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", e.duration || 0).set("volume", e.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), t.add("mvex"), this
        }, B.prototype.addTrack = function (e) {
            this.moov || this.init(e);
            var t = e || {},
                e = (t.width = t.width || 320, t.height = t.height || 320, t.id = t.id || this.moov.mvhd.next_track_id, t.type = t.type || "avc1", this.moov.add("trak")),
                r = (this.moov.mvhd.next_track_id = t.id + 1, e.add("tkhd").set("flags", v.TKHD_FLAG_ENABLED | v.TKHD_FLAG_IN_MOVIE | v.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", t.id).set("duration", t.duration || 0).set("layer", t.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", t.width << 16).set("height", t.height << 16), e.add("mdia")),
                i = (r.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", t.timescale || 1).set("duration", t.media_duration || 0).set("language", t.language || "und"), r.add("hdlr").set("handler", t.hdlr || "vide").set("name", t.name || "Track created with MP4Box.js"), r.add("elng").set("extended_language", t.language || "fr-FR"), r.add("minf"));
            if (void 0 !== v[t.type + "SampleEntry"]) {
                var n, s, o, a = new v[t.type + "SampleEntry"], l = (a.data_reference_index = 1, "");
                for (n in v.sampleEntryCodes) for (var d = v.sampleEntryCodes[n], u = 0; u < d.length; u++) if (-1 < d.indexOf(t.type)) {
                    l = n;
                    break
                }
                switch (l) {
                    case"Visual":
                        i.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), a.set("width", t.width).set("height", t.height).set("horizresolution", 72 << 16).set("vertresolution", 72 << 16).set("frame_count", 1).set("compressorname", t.type + " Compressor").set("depth", 24), t.avcDecoderConfigRecord && (s = new v.avcCBox, o = new f(t.avcDecoderConfigRecord), s.parse(o), a.addBox(s));
                        break;
                    case"Audio":
                        i.add("smhd").set("balance", t.balance || 0), a.set("channel_count", t.channel_count || 2).set("samplesize", t.samplesize || 16).set("samplerate", t.samplerate || 65536);
                        break;
                    case"Hint":
                        i.add("hmhd");
                        break;
                    case"Subtitle":
                        i.add("sthd"), "stpp" === t.type && a.set("namespace", t.namespace || "nonamespace").set("schema_location", t.schema_location || "").set("auxiliary_mime_types", t.auxiliary_mime_types || "");
                        break;
                    default:
                        i.add("nmhd")
                }
                t.description && a.addBox(t.description), t.description_boxes && t.description_boxes.forEach(function (e) {
                    a.addBox(e)
                }), i.add("dinf").add("dref").addEntry((new v["url Box"]).set("flags", 1));
                r = i.add("stbl");
                return r.add("stsd").addEntry(a), r.add("stts").set("sample_counts", []).set("sample_deltas", []), r.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), r.add("stco").set("chunk_offsets", []), r.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", t.id).set("default_sample_description_index", t.default_sample_description_index || 1).set("default_sample_duration", t.default_sample_duration || 0).set("default_sample_size", t.default_sample_size || 0).set("default_sample_flags", t.default_sample_flags || 0), this.buildTrakSampleLists(e), t.id
            }
        }, v.Box.prototype.computeSize = function (e) {
            e = e || new l;
            e.endianness = l.BIG_ENDIAN, this.write(e)
        }, B.prototype.addSample = function (e, t, r) {
            var r = r || {}, i = {}, e = this.getTrackById(e);
            if (null !== e) return i.number = e.samples.length, i.track_id = e.tkhd.track_id, i.timescale = e.mdia.mdhd.timescale, i.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, i.description = e.mdia.minf.stbl.stsd.entries[i.description_index], i.data = t, i.size = t.byteLength, i.alreadyRead = i.size, i.duration = r.duration || 1, i.cts = r.cts || 0, i.dts = r.dts || 0, i.is_sync = r.is_sync || !1, i.is_leading = r.is_leading || 0, i.depends_on = r.depends_on || 0, i.is_depended_on = r.is_depended_on || 0, i.has_redundancy = r.has_redundancy || 0, i.degradation_priority = r.degradation_priority || 0, i.offset = 0, i.subsamples = r.subsamples, e.samples.push(i), e.samples_size += i.size, e.samples_duration += i.duration, e.first_dts || (e.first_dts = r.dts), this.processSamples(), e = this.createSingleSampleMoof(i), this.addBox(e), e.computeSize(), e.trafs[0].truns[0].data_offset = e.size + 8, this.add("mdat").data = new Uint8Array(t), i
        }, B.prototype.createSingleSampleMoof = function (e) {
            var t = e.is_sync ? 1 << 25 : 65536, r = new v.moofBox,
                i = (r.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++, r.add("traf")),
                n = this.getTrackById(e.track_id);
            return i.add("tfhd").set("track_id", e.track_id).set("flags", v.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), i.add("tfdt").set("baseMediaDecodeTime", e.dts - (n.first_dts || 0)), i.add("trun").set("flags", v.TRUN_FLAGS_DATA_OFFSET | v.TRUN_FLAGS_DURATION | v.TRUN_FLAGS_SIZE | v.TRUN_FLAGS_FLAGS | v.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [e.duration]).set("sample_size", [e.size]).set("sample_flags", [t]).set("sample_composition_time_offset", [e.cts - e.dts]), r
        }, B.prototype.lastMoofIndex = 0, B.prototype.samplesDataSize = 0, B.prototype.resetTables = function () {
            var e, t;
            for (this.initial_duration = this.moov.mvhd.duration, e = this.moov.mvhd.duration = 0; e < this.moov.traks.length; e++) {
                (t = this.moov.traks[e]).tkhd.duration = 0, t.mdia.mdhd.duration = 0, (t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets = [], (r = t.mdia.minf.stbl.stsc).first_chunk = [], r.samples_per_chunk = [], r.sample_description_index = [], (t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes = [], (r = t.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (r = t.mdia.minf.stbl.ctts) && (r.sample_counts = [], r.sample_offsets = []);
                var r = t.mdia.minf.stbl.stss, r = t.mdia.minf.stbl.boxes.indexOf(r);
                -1 != r && (t.mdia.minf.stbl.boxes[r] = null)
            }
        }, B.initSampleGroups = function (e, t, r, i, n) {
            var s, o, a, l;

            function d(e, t, r) {
                this.grouping_type = e, this.grouping_type_parameter = t, this.sbgp = r, this.last_sample_in_run = -1, this.entry_index = -1
            }

            for (t && (t.sample_groups_info = []), e.sample_groups_info || (e.sample_groups_info = []), o = 0; o < r.length; o++) {
                for (l = r[o].grouping_type + "/" + r[o].grouping_type_parameter, a = new d(r[o].grouping_type, r[o].grouping_type_parameter, r[o]), t && (t.sample_groups_info[l] = a), e.sample_groups_info[l] || (e.sample_groups_info[l] = a), s = 0; s < i.length; s++) i[s].grouping_type === r[o].grouping_type && (a.description = i[s], a.description.used = !0);
                if (n) for (s = 0; s < n.length; s++) n[s].grouping_type === r[o].grouping_type && (a.fragment_description = n[s], a.fragment_description.used = !0, a.is_fragment = !0)
            }
            if (t) {
                if (n) for (o = 0; o < n.length; o++) !n[o].used && 2 <= n[o].version && (l = n[o].grouping_type + "/0", (a = new d(n[o].grouping_type, 0)).is_fragment = !0, t.sample_groups_info[l] || (t.sample_groups_info[l] = a))
            } else for (o = 0; o < i.length; o++) !i[o].used && 2 <= i[o].version && (l = i[o].grouping_type + "/0", a = new d(i[o].grouping_type, 0), e.sample_groups_info[l] || (e.sample_groups_info[l] = a))
        }, B.setSampleGroupProperties = function (e, t, r, i) {
            var n, s, o;
            for (n in t.sample_groups = [], i) t.sample_groups[n] = {}, t.sample_groups[n].grouping_type = i[n].grouping_type, t.sample_groups[n].grouping_type_parameter = i[n].grouping_type_parameter, r >= i[n].last_sample_in_run && (i[n].last_sample_in_run < 0 && (i[n].last_sample_in_run = 0), i[n].entry_index++, i[n].entry_index <= i[n].sbgp.entries.length - 1 && (i[n].last_sample_in_run += i[n].sbgp.entries[i[n].entry_index].sample_count)), i[n].entry_index <= i[n].sbgp.entries.length - 1 ? t.sample_groups[n].group_description_index = i[n].sbgp.entries[i[n].entry_index].group_description_index : t.sample_groups[n].group_description_index = -1, 0 !== t.sample_groups[n].group_description_index && (o = i[n].fragment_description || i[n].description, 0 < t.sample_groups[n].group_description_index ? (s = 65535 < t.sample_groups[n].group_description_index ? (t.sample_groups[n].group_description_index >> 16) - 1 : t.sample_groups[n].group_description_index - 1, o && 0 <= s && (t.sample_groups[n].description = o.entries[s])) : o && 2 <= o.version && 0 < o.default_group_description_index && (t.sample_groups[n].description = o.entries[o.default_group_description_index - 1]))
        }, B.process_sdtp = function (e, t, r) {
            t && (e ? (t.is_leading = e.is_leading[r], t.depends_on = e.sample_depends_on[r], t.is_depended_on = e.sample_is_depended_on[r], t.has_redundancy = e.sample_has_redundancy[r]) : (t.is_leading = 0, t.depends_on = 0, t.is_depended_on = 0, t.has_redundancy = 0))
        }, B.prototype.buildSampleLists = function () {
            for (var e, t = 0; t < this.moov.traks.length; t++) e = this.moov.traks[t], this.buildTrakSampleLists(e)
        }, B.prototype.buildTrakSampleLists = function (e) {
            var t, r, i, n, s, o, a, l, d, u, f, h, c, p, m, _, g, y, v, b, w, E, S, U;
            if (e.samples = [], e.samples_duration = 0, e.samples_size = 0, r = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64, i = e.mdia.minf.stbl.stsc, n = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2, s = e.mdia.minf.stbl.stts, o = e.mdia.minf.stbl.ctts, a = e.mdia.minf.stbl.stss, l = e.mdia.minf.stbl.stsd, d = e.mdia.minf.stbl.subs, h = e.mdia.minf.stbl.stdp, u = e.mdia.minf.stbl.sbgps, f = e.mdia.minf.stbl.sgpds, w = b = v = y = -1, U = S = E = 0, B.initSampleGroups(e, null, u, f), void 0 !== n) {
                for (t = 0; t < n.sample_sizes.length; t++) {
                    var x = {};
                    x.number = t, x.track_id = e.tkhd.track_id, x.timescale = e.mdia.mdhd.timescale, x.alreadyRead = 0, (e.samples[t] = x).size = n.sample_sizes[t], e.samples_size += x.size, 0 === t ? (c = 0, x.chunk_index = p = 1, x.chunk_run_index = c, g = i.samples_per_chunk[c], _ = 0, m = c + 1 < i.first_chunk.length ? i.first_chunk[c + 1] - 1 : 1 / 0) : t < g ? (x.chunk_index = p, x.chunk_run_index = c) : (p++, _ = 0, (x.chunk_index = p) <= m || (m = ++c + 1 < i.first_chunk.length ? i.first_chunk[c + 1] - 1 : 1 / 0), x.chunk_run_index = c, g += i.samples_per_chunk[c]), x.description_index = i.sample_description_index[x.chunk_run_index] - 1, x.description = l.entries[x.description_index], x.offset = r.chunk_offsets[x.chunk_index - 1] + _, _ += x.size, y < t && (v++, y < 0 && (y = 0), y += s.sample_counts[v]), 0 < t ? (e.samples[t - 1].duration = s.sample_deltas[v], e.samples_duration += e.samples[t - 1].duration, x.dts = e.samples[t - 1].dts + e.samples[t - 1].duration) : x.dts = 0, o ? (b <= t && (w++, b < 0 && (b = 0), b += o.sample_counts[w]), x.cts = e.samples[t].dts + o.sample_offsets[w]) : x.cts = x.dts, a ? (t == a.sample_numbers[E] - 1 ? (x.is_sync = !0, E++) : (x.is_sync = !1, x.degradation_priority = 0), d && d.entries[S].sample_delta + U == t + 1 && (x.subsamples = d.entries[S].subsamples, U += d.entries[S].sample_delta, S++)) : x.is_sync = !0, B.process_sdtp(e.mdia.minf.stbl.sdtp, x, x.number), x.degradation_priority = h ? h.priority[t] : 0, d && d.entries[S].sample_delta + U == t && (x.subsamples = d.entries[S].subsamples, U += d.entries[S].sample_delta), (0 < u.length || 0 < f.length) && B.setSampleGroupProperties(e, x, t, e.sample_groups_info)
                }
                0 < t && (e.samples[t - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[t - 1].dts, 0), e.samples_duration += e.samples[t - 1].duration)
            }
        }, B.prototype.updateSampleLists = function () {
            var e, t, r, i, n, s, o, a, l, d, u, f;
            if (void 0 !== this.moov) for (; this.lastMoofIndex < this.moofs.length;) if (o = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == o.type) for (a = o, e = 0; e < a.trafs.length; e++) {
                for (l = a.trafs[e], d = this.getTrackById(l.tfhd.track_id), u = this.getTrexById(l.tfhd.track_id), t = l.tfhd.flags & v.TFHD_FLAG_SAMPLE_DESC ? l.tfhd.default_sample_description_index : u ? u.default_sample_description_index : 1, r = l.tfhd.flags & v.TFHD_FLAG_SAMPLE_DUR ? l.tfhd.default_sample_duration : u ? u.default_sample_duration : 0, i = l.tfhd.flags & v.TFHD_FLAG_SAMPLE_SIZE ? l.tfhd.default_sample_size : u ? u.default_sample_size : 0, n = l.tfhd.flags & v.TFHD_FLAG_SAMPLE_FLAGS ? l.tfhd.default_sample_flags : u ? u.default_sample_flags : 0, (l.sample_number = 0) < l.sbgps.length && B.initSampleGroups(d, l, l.sbgps, d.mdia.minf.stbl.sgpds, l.sgpds), y = 0; y < l.truns.length; y++) for (var h = l.truns[y], c = 0; c < h.sample_count; c++) {
                    (f = {}).moof_number = this.lastMoofIndex, f.number_in_traf = l.sample_number, l.sample_number++, f.number = d.samples.length, l.first_sample_index = d.samples.length, d.samples.push(f), f.track_id = d.tkhd.track_id, f.timescale = d.mdia.mdhd.timescale, f.description_index = t - 1, f.description = d.mdia.minf.stbl.stsd.entries[f.description_index], f.size = i, h.flags & v.TRUN_FLAGS_SIZE && (f.size = h.sample_size[c]), d.samples_size += f.size, f.duration = r, h.flags & v.TRUN_FLAGS_DURATION && (f.duration = h.sample_duration[c]), d.samples_duration += f.duration, d.first_traf_merged || 0 < c ? f.dts = d.samples[d.samples.length - 2].dts + d.samples[d.samples.length - 2].duration : (l.tfdt ? f.dts = l.tfdt.baseMediaDecodeTime : f.dts = 0, d.first_traf_merged = !0), f.cts = f.dts, h.flags & v.TRUN_FLAGS_CTS_OFFSET && (f.cts = f.dts + h.sample_composition_time_offset[c]), p = n, h.flags & v.TRUN_FLAGS_FLAGS ? p = h.sample_flags[c] : 0 === c && h.flags & v.TRUN_FLAGS_FIRST_FLAG && (p = h.first_sample_flags), f.is_sync = !(p >> 16 & 1), f.is_leading = p >> 26 & 3, f.depends_on = p >> 24 & 3, f.is_depended_on = p >> 22 & 3, f.has_redundancy = p >> 20 & 3, f.degradation_priority = 65535 & p;
                    var p = !!(l.tfhd.flags & v.TFHD_FLAG_BASE_DATA_OFFSET),
                        m = !!(l.tfhd.flags & v.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                        _ = !!(h.flags & v.TRUN_FLAGS_DATA_OFFSET),
                        p = p ? l.tfhd.base_data_offset : m || 0 === y ? a.start : s;
                    f.offset = 0 === y && 0 === c ? _ ? p + h.data_offset : p : s, s = f.offset + f.size, (0 < l.sbgps.length || 0 < l.sgpds.length || 0 < d.mdia.minf.stbl.sbgps.length || 0 < d.mdia.minf.stbl.sgpds.length) && B.setSampleGroupProperties(d, f, f.number_in_traf, l.sample_groups_info)
                }
                if (l.subs) {
                    d.has_fragment_subsamples = !0;
                    for (var g = l.first_sample_index, y = 0; y < l.subs.entries.length; y++) g += l.subs.entries[y].sample_delta, (f = d.samples[g - 1]).subsamples = l.subs.entries[y].subsamples
                }
            }
        }, B.prototype.getSample = function (e, t) {
            var r = e.samples[t];
            if (!this.moov) return null;
            if (r.data) {
                if (r.alreadyRead == r.size) return r
            } else r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, h.debug("ISOFile", "Allocating sample #" + t + " on track #" + e.tkhd.track_id + " of size " + r.size + " (total: " + this.samplesDataSize + ")");
            for (; ;) {
                var i = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
                if (!(-1 < i)) return null;
                var n = (i = this.stream.buffers[i]).byteLength - (r.offset + r.alreadyRead - i.fileStart);
                if (r.size - r.alreadyRead <= n) return h.debug("ISOFile", "Getting sample #" + t + " data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + (r.size - r.alreadyRead) + " full size: " + r.size + ")"), l.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, r.size - r.alreadyRead), i.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
                if (0 == n) return null;
                h.debug("ISOFile", "Getting sample #" + t + " partial data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + n + " full size: " + r.size + ")"), l.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, n), r.alreadyRead += n, i.usedBytes += n, this.stream.logBufferLevel()
            }
        }, B.prototype.releaseSample = function (e, t) {
            e = e.samples[t];
            return e.data ? (this.samplesDataSize -= e.size, e.data = null, e.alreadyRead = 0, e.size) : 0
        }, B.prototype.getAllocatedSampleDataSize = function () {
            return this.samplesDataSize
        }, B.prototype.getCodecs = function () {
            for (var e = "", t = 0; t < this.moov.traks.length; t++) 0 < t && (e += ","), e += this.moov.traks[t].mdia.minf.stbl.stsd.entries[0].getCodec();
            return e
        }, B.prototype.getTrexById = function (e) {
            var t;
            if (!this.moov || !this.moov.mvex) return null;
            for (t = 0; t < this.moov.mvex.trexs.length; t++) {
                var r = this.moov.mvex.trexs[t];
                if (r.track_id == e) return r
            }
            return null
        }, B.prototype.getTrackById = function (e) {
            if (void 0 === this.moov) return null;
            for (var t = 0; t < this.moov.traks.length; t++) {
                var r = this.moov.traks[t];
                if (r.tkhd.track_id == e) return r
            }
            return null
        }, B.prototype.items = [], B.prototype.itemsDataSize = 0, B.prototype.flattenItemInfo = function () {
            var e = this.items, t = this.meta;
            if (null != t && void 0 !== t.hdlr && void 0 !== t.iinf) {
                for (l = 0; l < t.iinf.item_infos.length; l++) (i = {}).id = t.iinf.item_infos[l].item_ID, (e[i.id] = i).ref_to = [], i.name = t.iinf.item_infos[l].item_name, 0 < t.iinf.item_infos[l].protection_index && (i.protection = t.ipro.protections[t.iinf.item_infos[l].protection_index - 1]), t.iinf.item_infos[l].item_type ? i.type = t.iinf.item_infos[l].item_type : i.type = "mime", i.content_type = t.iinf.item_infos[l].content_type, i.content_encoding = t.iinf.item_infos[l].content_encoding;
                if (t.iloc) for (l = 0; l < t.iloc.items.length; l++) {
                    var r = t.iloc.items[l], i = e[r.item_ID];
                    switch (0 !== r.data_reference_index && (h.warn("Item storage with reference to other files: not supported"), i.source = t.dinf.boxes[r.data_reference_index - 1]), r.construction_method) {
                        case 0:
                            break;
                        case 1:
                        case 2:
                            h.warn("Item storage with construction_method : not supported")
                    }
                    for (i.extents = [], s = i.size = 0; s < r.extents.length; s++) i.extents[s] = {}, i.extents[s].offset = r.extents[s].extent_offset + r.base_offset, i.extents[s].length = r.extents[s].extent_length, i.extents[s].alreadyRead = 0, i.size += i.extents[s].length
                }
                if (t.pitm && (e[t.pitm.item_id].primary = !0), t.iref) for (l = 0; l < t.iref.references.length; l++) for (var n = t.iref.references[l], s = 0; s < n.references.length; s++) e[n.from_item_ID].ref_to.push({
                    type: n.type,
                    id: n.references[s]
                });
                if (t.iprp) for (var o = 0; o < t.iprp.ipmas.length; o++) for (var a = t.iprp.ipmas[o], l = 0; l < a.associations.length; l++) {
                    var d = a.associations[l];
                    for (void 0 === (i = e[d.id]).properties && (i.properties = {}, i.properties.boxes = []), s = 0; s < d.props.length; s++) {
                        var u = d.props[s];
                        0 < u.property_index && u.property_index - 1 < t.iprp.ipco.boxes.length && (u = t.iprp.ipco.boxes[u.property_index - 1], i.properties[u.type] = u, i.properties.boxes.push(u))
                    }
                }
            }
        }, B.prototype.getItem = function (e) {
            var t;
            if (!this.meta) return null;
            if (!(t = this.items[e]).data && t.size) t.data = new Uint8Array(t.size), t.alreadyRead = 0, this.itemsDataSize += t.size, h.debug("ISOFile", "Allocating item #" + e + " of size " + t.size + " (total: " + this.itemsDataSize + ")"); else if (t.alreadyRead === t.size) return t;
            for (var r = 0; r < t.extents.length; r++) {
                var i = t.extents[r];
                if (i.alreadyRead !== i.length) {
                    var n = this.stream.findPosition(!0, i.offset + i.alreadyRead, !1);
                    if (!(-1 < n)) return null;
                    var s = (n = this.stream.buffers[n]).byteLength - (i.offset + i.alreadyRead - n.fileStart);
                    if (!(i.length - i.alreadyRead <= s)) return h.debug("ISOFile", "Getting item #" + e + " extent #" + r + " partial data (alreadyRead: " + i.alreadyRead + " offset: " + (i.offset + i.alreadyRead - n.fileStart) + " read size: " + s + " full extent size: " + i.length + " full item size: " + t.size + ")"), l.memcpy(t.data.buffer, t.alreadyRead, n, i.offset + i.alreadyRead - n.fileStart, s), i.alreadyRead += s, t.alreadyRead += s, n.usedBytes += s, this.stream.logBufferLevel(), null;
                    h.debug("ISOFile", "Getting item #" + e + " extent #" + r + " data (alreadyRead: " + i.alreadyRead + " offset: " + (i.offset + i.alreadyRead - n.fileStart) + " read size: " + (i.length - i.alreadyRead) + " full extent size: " + i.length + " full item size: " + t.size + ")"), l.memcpy(t.data.buffer, t.alreadyRead, n, i.offset + i.alreadyRead - n.fileStart, i.length - i.alreadyRead), n.usedBytes += i.length - i.alreadyRead, this.stream.logBufferLevel(), t.alreadyRead += i.length - i.alreadyRead, i.alreadyRead = i.length
                }
            }
            return t.alreadyRead === t.size ? t : null
        }, B.prototype.releaseItem = function (e) {
            var t = this.items[e];
            if (t.data) {
                this.itemsDataSize -= t.size, t.data = null;
                for (var r = t.alreadyRead = 0; r < t.extents.length; r++) t.extents[r].alreadyRead = 0;
                return t.size
            }
            return 0
        }, B.prototype.processItems = function (e) {
            for (var t in this.items) {
                t = this.items[t];
                this.getItem(t.id), e && !t.sent && (e(t), t.sent = !0, t.data = null)
            }
        }, B.prototype.hasItem = function (e) {
            for (var t in this.items) {
                t = this.items[t];
                if (t.name === e) return t.id
            }
            return -1
        }, B.prototype.getMetaHandler = function () {
            return this.meta ? this.meta.hdlr.handler : null
        }, B.prototype.getPrimaryItem = function () {
            return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
        }, B.prototype.itemToFragmentedTrackFile = function (e) {
            var e = e || {};
            if (null == (e = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem())) return null;
            var t = new B, r = (t.discardMdatData = !1, {type: e.type, description_boxes: e.properties.boxes}),
                r = (e.properties.ispe && (r.width = e.properties.ispe.image_width, r.height = e.properties.ispe.image_height), t.addTrack(r));
            return r ? (t.addSample(r, e.data), t) : null
        }, B.prototype.write = function (e) {
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write(e)
        }, B.prototype.createFragment = function (e, t, r) {
            var e = this.getTrackById(e), i = this.getSample(e, t);
            if (null == i) return i = e.samples[t], this.nextSeekPosition ? this.nextSeekPosition = Math.min(i.offset + i.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = e.samples[t].offset + i.alreadyRead, null;
            e = r || new l, e.endianness = l.BIG_ENDIAN, t = this.createSingleSampleMoof(i), t.write(e), t.trafs[0].truns[0].data_offset = t.size + 8, h.debug("MP4Box", "Adjusting data_offset with new value " + t.trafs[0].truns[0].data_offset), e.adjustUint32(t.trafs[0].truns[0].data_offset_position, t.trafs[0].truns[0].data_offset), r = new v.mdatBox;
            return r.data = i.data, r.write(e), e
        }, B.writeInitializationSegment = function (e, t, r, i) {
            h.debug("ISOFile", "Generating initialization segment");
            var n, s = new l, o = (s.endianness = l.BIG_ENDIAN, e.write(s), t.add("mvex"));
            for (r && o.add("mehd").set("fragment_duration", r), n = 0; n < t.traks.length; n++) o.add("trex").set("track_id", t.traks[n].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", i).set("default_sample_size", 0).set("default_sample_flags", 65536);
            return t.write(s), s.buffer
        }, B.prototype.save = function (e) {
            var t = new l;
            t.endianness = l.BIG_ENDIAN, this.write(t), t.save(e)
        }, B.prototype.getBuffer = function () {
            var e = new l;
            return e.endianness = l.BIG_ENDIAN, this.write(e), e.buffer
        }, B.prototype.initializeSegmentation = function () {
            var e, t, r, i;
            for (null === this.onSegment && h.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), t = [], e = 0; e < this.fragmentedTracks.length; e++) {
                var n = new v.moovBox;
                n.mvhd = this.moov.mvhd, n.boxes.push(n.mvhd), r = this.getTrackById(this.fragmentedTracks[e].id), n.boxes.push(r), n.traks.push(r), (i = {}).id = r.tkhd.track_id, i.user = this.fragmentedTracks[e].user, i.buffer = B.writeInitializationSegment(this.ftyp, n, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, 0 < this.moov.traks[e].samples.length ? this.moov.traks[e].samples[0].duration : 0), t.push(i)
            }
            return t
        }, v.Box.prototype.printHeader = function (e) {
            this.size += 8, this.size > d && (this.size += 8), "uuid" === this.type && (this.size += 16), e.log(e.indent + "size:" + this.size), e.log(e.indent + "type:" + this.type)
        }, v.FullBox.prototype.printHeader = function (e) {
            this.size += 4, v.Box.prototype.printHeader.call(this, e), e.log(e.indent + "version:" + this.version), e.log(e.indent + "flags:" + this.flags)
        }, v.Box.prototype.print = function (e) {
            this.printHeader(e)
        }, v.ContainerBox.prototype.print = function (e) {
            this.printHeader(e);
            for (var t, r = 0; r < this.boxes.length; r++) this.boxes[r] && (t = e.indent, e.indent += " ", this.boxes[r].print(e), e.indent = t)
        }, B.prototype.print = function (e) {
            e.indent = "";
            for (var t = 0; t < this.boxes.length; t++) this.boxes[t] && this.boxes[t].print(e)
        }, v.mvhdBox.prototype.print = function (e) {
            v.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "timescale: " + this.timescale), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "rate: " + this.rate), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "next_track_id: " + this.next_track_id)
        }, v.tkhdBox.prototype.print = function (e) {
            v.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + "creation_time: " + this.creation_time), e.log(e.indent + "modification_time: " + this.modification_time), e.log(e.indent + "track_id: " + this.track_id), e.log(e.indent + "duration: " + this.duration), e.log(e.indent + "volume: " + (this.volume >> 8)), e.log(e.indent + "matrix: " + this.matrix.join(", ")), e.log(e.indent + "layer: " + this.layer), e.log(e.indent + "alternate_group: " + this.alternate_group), e.log(e.indent + "width: " + this.width), e.log(e.indent + "height: " + this.height)
        };
        var u = function (e, t) {
            e = void 0 === e || e, t = new B(t);
            return t.discardMdatData = !e, t
        };
        t.createFile = u
    });

    function ft(e) {
        return e.reduce(function (e, t) {
            return 256 * e + t
        })
    }

    function ht(e) {
        var t = [101, 103, 119, 99], r = e.length - 28, i = e.slice(r, r + t.length);
        return t.every(function (e, t) {
            return e === i[t]
        })
    }

    X.Log, X.MP4BoxStream, X.DataStream, X.MultiBufferStream, X.MPEG4DescriptorParser, X.BoxParser, X.XMLSubtitlein4Parser, X.Textin4Parser, X.ISOFile, X.createFile;
    t(_t, [{
        key: "destroy", value: function () {
            this.s = null, this.a = null, this.l = 0, this.c = 0, this.u = 1 / 0, this.A = !1, this.d = !1, this.r = 4194304, this.n = null, this.t = null
        }
    }, {
        key: "transport", value: function (e) {
            var r = this;
            if (!this.s && 50 < this.l) return e;
            if (this.l++, this.d) return e;
            var t, i = new Uint8Array(e);
            if (this.A) {
                if (!(this.c < this.u)) return this.a && this.s ? (this.a.set(i, this.r), this.s.parse(null, this.r, i.byteLength), this.a.slice(this.r, this.r + i.byteLength)) : (console.error("video_error_2"), this.d = !0, e);
                ht(i) && this.c++
            } else {
                n = i, s = this.t;
                var n = (s = function (e, t) {
                    for (var r = 0; r < e.byteLength - t.length; r++) for (var i = 0; i < t.length && e[r + i] === t[i]; i++) if (i === t.length - 1) return r;
                    return null
                }(n, s)) ? [t = ft(n.slice(s + 16, s + 16 + 8)), ft(n.slice(s + 24, s + 24 + 8)), n.slice(s + 32, s + 32 + t).map(function (e) {
                    return ~e
                })] : null;
                if (!n) return e;
                var s = function (e) {
                    try {
                        if ("object" != ("undefined" == typeof WebAssembly ? "undefined" : Ut(WebAssembly)) || "function" != typeof WebAssembly.instantiate) throw null;
                        var t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                        if (!(t instanceof WebAssembly.Module && new WebAssembly.Instance(t) instanceof WebAssembly.Instance)) throw null
                    } catch (e) {
                        return new Error("video_error_4")
                    }
                    var r;
                    try {
                        r = {
                            env: {
                                __handle_stack_overflow: function () {
                                    return e(new Error("video_error_1"))
                                }, memory: new WebAssembly.Memory({initial: 256, maximum: 256})
                            }
                        }
                    } catch (e) {
                        return new Error("video_error_5")
                    }
                    return r
                }(e);
                if (s instanceof Error) return console.error(s.message), this.d = !0, e;
                this.A = !0, this.u = n[1], ht(i) && this.c++, WebAssembly.instantiate(n[2], s).then(function (e) {
                    if ("function" != typeof (t = e.instance.exports).parse || "object" != Ut(t.memory)) return r.d = !0, void console.error("video_error_3");
                    var t;
                    r.s = e.instance.exports, r.a = new Uint8Array(r.s.memory.buffer)
                }).catch(function (e) {
                    r.d = !0, console.error("video_error_6")
                })
            }
            return e
        }
    }]);
    var ct = _t, Z = 16,
        pt = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
        mt = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];

    function _t() {
        a(this, _t), this.s = null, this.a = null, this.l = 0, this.c = 0, this.u = 1 / 0, this.A = !1, this.d = !1, this.r = 4194304, this.n = new Uint8Array([30, 158, 90, 33, 244, 57, 83, 165, 2, 70, 35, 87, 215, 231, 226, 108]), this.t = this.n.slice().reverse()
    }

    function gt(e) {
        for (var t = [], r = 0, i = e.length; r < i; r += 2) t.push(parseInt(e.substr(r, 2), 16));
        return t
    }

    function y(e, t) {
        t &= 31;
        return e << t | e >>> 32 - t
    }

    function J(e) {
        return (255 & pt[e >>> 24 & 255]) << 24 | (255 & pt[e >>> 16 & 255]) << 16 | (255 & pt[e >>> 8 & 255]) << 8 | 255 & pt[255 & e]
    }

    function yt(e) {
        return e ^ y(e, 2) ^ y(e, 10) ^ y(e, 18) ^ y(e, 24)
    }

    function vt(e) {
        return e ^ y(e, 13) ^ y(e, 23)
    }

    function bt(e, t, r, i) {
        var i = 3 < arguments.length && void 0 !== i ? i : {}, n = i.padding, n = void 0 === n ? "pkcs#7" : n,
            s = i.mode, o = i.iv, o = void 0 === o ? [] : o, i = i.output, i = void 0 === i ? "string" : i;
        if ("cbc" === s && 16 !== (o = "string" == typeof o ? gt(o) : o).length) throw new Error("iv is invalid");
        if (16 !== (t = "string" == typeof t ? gt(t) : t).length) throw new Error("key is invalid");
        if (e = ("string" == typeof e ? 0 !== r ? function (e) {
            for (var t = [], r = 0, i = e.length; r < i; r++) {
                var n = e.codePointAt(r);
                if (n <= 127) t.push(n); else if (n <= 2047) t.push(192 | n >>> 6), t.push(128 | 63 & n); else if (n <= 55295 || 57344 <= n && n <= 65535) t.push(224 | n >>> 12), t.push(128 | n >>> 6 & 63), t.push(128 | 63 & n); else {
                    if (!(65536 <= n && n <= 1114111)) throw t.push(n), new Error("input is not supported");
                    r++, t.push(240 | n >>> 18 & 28), t.push(128 | n >>> 12 & 63), t.push(128 | n >>> 6 & 63), t.push(128 | 63 & n)
                }
            }
            return t
        } : gt : V)(e), ("pkcs#5" === n || "pkcs#7" === n) && 0 !== r) for (var z = Z - e.length % Z, R = 0; R < z; R++) e.push(z);
        for (var M = new Array(32), a = t, l = M, t = r, d = new Array(4), u = new Array(4), f = 0; f < 4; f++) u[0] = 255 & a[0 + 4 * f], u[1] = 255 & a[1 + 4 * f], u[2] = 255 & a[2 + 4 * f], u[3] = 255 & a[3 + 4 * f], d[f] = u[0] << 24 | u[1] << 16 | u[2] << 8 | u[3];
        d[0] ^= 2746333894, d[1] ^= 1453994832, d[2] ^= 1736282519, d[3] ^= 2993693404;
        for (var h, c = 0; c < 32; c += 4) h = d[1] ^ d[2] ^ d[3] ^ mt[c + 0], l[c + 0] = d[0] ^= vt(J(h)), h = d[2] ^ d[3] ^ d[0] ^ mt[c + 1], l[c + 1] = d[1] ^= vt(J(h)), h = d[3] ^ d[0] ^ d[1] ^ mt[c + 2], l[c + 2] = d[2] ^= vt(J(h)), h = d[0] ^ d[1] ^ d[2] ^ mt[c + 3], l[c + 3] = d[3] ^= vt(J(h));
        if (0 === t) for (var N, p = 0; p < 16; p++) N = l[p], l[p] = l[31 - p], l[31 - p] = N;
        for (var m = [], _ = o, O = e.length, g = 0; Z <= O;) {
            var y = e.slice(g, g + 16), v = new Array(16);
            if ("cbc" === s) for (var b = 0; b < Z; b++) 0 !== r && (y[b] ^= _[b]);
            k = T = A = B = x = U = S = E = w = void 0;
            for (var w = y, E = v, S = M, U = new Array(4), x = new Array(4), B = 0; B < 4; B++) x[0] = 255 & w[4 * B], x[1] = 255 & w[4 * B + 1], x[2] = 255 & w[4 * B + 2], x[3] = 255 & w[4 * B + 3], U[B] = x[0] << 24 | x[1] << 16 | x[2] << 8 | x[3];
            for (var A, T = 0; T < 32; T += 4) A = U[1] ^ U[2] ^ U[3] ^ S[T + 0], U[0] ^= yt(J(A)), A = U[2] ^ U[3] ^ U[0] ^ S[T + 1], U[1] ^= yt(J(A)), A = U[3] ^ U[0] ^ U[1] ^ S[T + 2], U[2] ^= yt(J(A)), A = U[0] ^ U[1] ^ U[2] ^ S[T + 3], U[3] ^= yt(J(A));
            for (var k = 0; k < 16; k += 4) E[k] = U[3 - k / 4] >>> 24 & 255, E[k + 1] = U[3 - k / 4] >>> 16 & 255, E[k + 2] = U[3 - k / 4] >>> 8 & 255, E[k + 3] = 255 & U[3 - k / 4];
            for (var C = 0; C < Z; C++) "cbc" === s && 0 === r && (v[C] ^= _[C]), m[g + C] = v[C];
            "cbc" === s && (_ = 0 !== r ? v : y), O -= Z, g += Z
        }
        if (("pkcs#5" === n || "pkcs#7" === n) && 0 === r) {
            for (var F = m.length, I = m[F - 1], G = 1; G <= I; G++) if (m[F - G] !== I) throw new Error("padding is invalid");
            m.splice(F - I, I)
        }
        {
            if ("array" === i) return m;
            if (0 !== r) return m.map(function (e) {
                return 1 === (e = e.toString(16)).length ? "0" + e : e
            }).join("");
            for (var D = m, P = [], L = 0, H = D.length; L < H; L++) 240 <= D[L] && D[L] <= 247 ? (P.push(String.fromCodePoint(((7 & D[L]) << 18) + ((63 & D[L + 1]) << 12) + ((63 & D[L + 2]) << 6) + (63 & D[L + 3]))), L += 3) : 224 <= D[L] && D[L] <= 239 ? (P.push(String.fromCodePoint(((15 & D[L]) << 12) + ((63 & D[L + 1]) << 6) + (63 & D[L + 2]))), L += 2) : 192 <= D[L] && D[L] <= 223 ? (P.push(String.fromCodePoint(((31 & D[L]) << 6) + (63 & D[L + 1]))), L++) : P.push(String.fromCodePoint(D[L]));
            return P.join("")
        }
    }

    function wt(e, t) {
        var r, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!i) {
            if (Array.isArray(e) || (i = function (e) {
                if (e) {
                    if ("string" == typeof e) return Et(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Et(e, void 0) : void 0
                }
            }(e)) || t && e && "number" == typeof e.length) return i && (e = i), r = 0, {
                s: t = function () {
                }, n: function () {
                    return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                }, e: function (e) {
                    throw e
                }, f: t
            };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, s = !0, o = !1;
        return {
            s: function () {
                i = i.call(e)
            }, n: function () {
                var e = i.next();
                return s = e.done, e
            }, e: function (e) {
                o = !0, n = e
            }, f: function () {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (o) throw n
                }
            }
        }
    }

    function Et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i
    }

    function St(d) {
        function z() {
            var e = function () {
                var t = ne, r = "";
                if ("object" === Ut(t)) try {
                    r = JSON.stringify(t), r = JSON.parse(r)
                } catch (e) {
                    r = t
                } else r = t;
                return r
            }();
            return {
                debug: e.debug,
                debugLevel: e.debugLevel,
                debugUuid: e.debugUuid,
                useOffscreen: e.useOffscreen,
                useWCS: e.useWCS,
                videoBuffer: e.videoBuffer,
                videoBufferDelay: e.videoBufferDelay,
                openWebglAlignment: e.openWebglAlignment,
                playType: e.playType,
                hasAudio: e.hasAudio,
                hasVideo: e.hasVideo,
                playbackRate: 1,
                playbackForwardMaxRateDecodeIFrame: e.playbackForwardMaxRateDecodeIFrame,
                playbackIsCacheBeforeDecodeForFpsRender: e.playbackConfig.isCacheBeforeDecodeForFpsRender,
                sampleRate: 0,
                networkDelay: e.networkDelay,
                visibility: !0,
                useSIMD: e.useSIMD,
                isRecording: !1,
                recordType: e.recordType,
                isNakedFlow: e.isNakedFlow,
                checkFirstIFrame: e.checkFirstIFrame,
                audioBufferSize: 1024,
                isCrypto: e.isCrypto,
                cryptoKey: e.cryptoKey,
                cryptoIV: e.cryptoIV,
                isSm4Crypto: e.isSm4Crypto,
                sm4CryptoKey: e.sm4CryptoKey,
                isHls265: !1,
                isFlv: e.isFlv,
                isFmp4: e.isFmp4,
                isMpeg4: e.isMpeg4,
                isFmp4Private: e.isFmp4Private,
                isEmitSEI: e.isEmitSEI
            }
        }

        function o() {
            t && (t.abort(), t = null)
        }

        var s = [], u = [], n = {}, t = new AbortController, a = null, l = null, e = null, f = null, h = null, c = null,
            p = !1, i = !1, m = !1, _ = !1, g = null, y = null, v = null, b = [], w = null, E = null, S = 0, U = 0,
            r = null, x = null, B = 0, A = 0, T = !1, R = !1, M = !1, k = !1, C = ("VideoEncoder" in self && (n = {
                hasInit: !1,
                isEmitInfo: !1,
                offscreenCanvas: null,
                offscreenCanvasCtx: null,
                decoder: new VideoDecoder({
                    output: function (t) {
                        var e;
                        n.isEmitInfo || (D.debug.log("worker", "Webcodecs Video Decoder initSize"), postMessage({
                            cmd: se,
                            w: t.codedWidth,
                            h: t.codedHeight
                        }), n.isEmitInfo = !0, n.offscreenCanvas = new OffscreenCanvas(t.codedWidth, t.codedHeight), n.offscreenCanvasCtx = n.offscreenCanvas.getContext("2d")), "function" == typeof t.createImageBitmap ? t.createImageBitmap().then(function (e) {
                            n.offscreenCanvasCtx.drawImage(e, 0, 0, t.codedWidth, t.codedHeight);
                            e = n.offscreenCanvas.transferToImageBitmap();
                            postMessage({cmd: N, buffer: e, delay: D.delay, ts: 0}, [e]), setTimeout(function () {
                                t.close ? t.close() : t.destroy()
                            }, 100)
                        }) : (n.offscreenCanvasCtx.drawImage(t, 0, 0, t.codedWidth, t.codedHeight), e = n.offscreenCanvas.transferToImageBitmap(), postMessage({
                            cmd: N,
                            buffer: e,
                            delay: D.delay,
                            ts: 0
                        }, [e]), setTimeout(function () {
                            t.close ? t.close() : t.destroy()
                        }, 100))
                    }, error: function (e) {
                        D.debug.error("worker", "VideoDecoder error", e)
                    }
                }),
                decode: function (e, t, r) {
                    var i = e[0] >> 4 == 1;
                    n.hasInit ? (t = new EncodedVideoChunk({
                        data: e.slice(5),
                        timestamp: t,
                        type: i ? "key" : "delta"
                    }), n.decoder.decode(t)) : i && 0 === e[1] && (t = 15 & e[0], postMessage({
                        cmd: ae,
                        code: t
                    }), i = function (e) {
                        for (var t = e.subarray(1, 4), r = "avc1.", i = 0; i < 3; i++) {
                            var n = t[i].toString(16);
                            r += n = n.length < 2 ? "0" + n : n
                        }
                        return {codec: r, description: e}
                    }(e.slice(5)), postMessage({
                        cmd: le,
                        buffer: e,
                        codecId: t
                    }, [e.buffer]), n.decoder.configure(i), n.hasInit = !0)
                },
                reset: function () {
                    n.hasInit = !1, n.isEmitInfo = !1, n.offscreenCanvas = null, n.offscreenCanvasCtx = null
                }
            }), {
                init: function () {
                    C.lastBuf = null, C.vps = null, C.sps = null, C.pps = null, C.streamType = null, C.localDts = 0, C.isSendSeqHeader = !1
                }, destroy: function () {
                    C.lastBuf = null, C.vps = null, C.sps = null, C.pps = null, C.streamType = null, C.localDts = 0, C.isSendSeqHeader = !1
                }, dispatch: function (e) {
                    e = new Uint8Array(e);
                    C.extractNALu$2(e)
                }, getNaluDts: function () {
                    var e = C.localDts;
                    return C.localDts = C.localDts + 40, e
                }, getNaluAudioDts: function () {
                    var e = D._opt.sampleRate, t = D._opt.audioBufferSize;
                    return C.localDts + parseInt(t / e * 1e3)
                }, extractNALu: function (e) {
                    for (var t, r, i = 0, n = e.byteLength, s = 0, o = []; i < n;) switch (t = e[i++], s) {
                        case 0:
                            0 === t && (s = 1);
                            break;
                        case 1:
                            s = 0 === t ? 2 : 0;
                            break;
                        case 2:
                        case 3:
                            s = 0 === t ? 3 : (1 === t && i < n && (r && o.push(e.subarray(r, i - s - 1)), r = i), 0)
                    }
                    return r && o.push(e.subarray(r, n)), o
                }, extractNALu$2: function (e) {
                    var t = null;
                    if (e && !(e.byteLength < 1)) {
                        C.lastBuf ? ((t = new Uint8Array(e.byteLength + C.lastBuf.length)).set(C.lastBuf), t.set(new Uint8Array(e), C.lastBuf.length)) : t = new Uint8Array(e);
                        for (var r, i = 0, n = -1, s = -2, o = new Array, a = 0; a < t.length; a += 2) {
                            var l = t[a], d = t[a + 1];
                            0 == n && 0 == l && 0 == d ? o.push(a - 1) : 1 == d && 0 == l && 0 == n && 0 == s && o.push(a - 2), s = l, n = d
                        }
                        if (1 < o.length) for (var u = 0; u < o.length - 1; ++u) {
                            var f = t.subarray(o[u], o[u + 1] + 1);
                            C.handleNALu(f), i = o[u + 1]
                        } else i = o[0];
                        0 != i && i < t.length ? C.lastBuf = t.subarray(i) : (C.lastBuf || (C.lastBuf = t), (r = new Uint8Array(C.lastBuf.length + e.byteLength)).set(C.lastBuf), r.set(new Uint8Array(e), C.lastBuf.length), C.lastBuf = r)
                    }
                }, handleNALu: function (e) {
                    e.byteLength <= 4 ? D.debug.warn("worker", "handleNALu nalu byteLength is ".concat(e.byteLength, " <= 4")) : (e = e.slice(4), C.handleVideoNalu(e))
                }, handleVideoNalu: function (e) {
                    var r, t, i;
                    C.streamType || (C.streamType = (i = null, i = (i = (t = 31 & e[0]) !== H && t !== j ? i : me) || (t = (126 & e[0]) >> 1) !== ve && t !== be && t !== W ? i : _e)), C.streamType === me ? (t = C.handleAddNaluStartCode(e), 0 === (i = C.extractNALu(t)).length ? D.debug.warn("worker", "handleVideoNalu", "naluList.length === 0") : (r = [], i.forEach(function (e) {
                        var t = K(e);
                        t === j || t === H ? C.handleVideoH264Nalu(e) : Ne(t) && r.push(e)
                    }), 1 === r.length ? C.handleVideoH264Nalu(r[0]) : function (e) {
                        if (0 === e.length) return !1;
                        for (var t = K(e[0]), r = 1; r < e.length; r++) if (t !== K(e[r])) return !1;
                        return !0
                    }(r) ? (i = Oe(t = K(r[0])), C.handleVideoH264NaluList(r, i, t)) : r.forEach(function (e) {
                        C.handleVideoH264Nalu(e)
                    }))) : C.streamType === _e && (je(e) === W ? C.extractH265PPS(e) : C.handleVideoH265Nalu(e))
                }, extractH264PPS: function (e) {
                    e = C.handleAddNaluStartCode(e);
                    C.extractNALu(e).forEach(function (e) {
                        Me(K(e)) ? C.extractH264SEI(e) : C.handleVideoH264Nalu(e)
                    })
                }, extractH265PPS: function (e) {
                    e = C.handleAddNaluStartCode(e);
                    C.extractNALu(e).forEach(function (e) {
                        39 === je(e) ? C.extractH265SEI(e) : C.handleVideoH265Nalu(e)
                    })
                }, extractH264SEI: function (e) {
                    e = C.handleAddNaluStartCode(e);
                    C.extractNALu(e).forEach(function (e) {
                        C.handleVideoH264Nalu(e)
                    })
                }, extractH265SEI: function (e) {
                    e = C.handleAddNaluStartCode(e);
                    C.extractNALu(e).forEach(function (e) {
                        C.handleVideoH265Nalu(e)
                    })
                }, handleAddNaluStartCode: function (e) {
                    var t = [0, 0, 0, 1], r = new Uint8Array(e.length + t.length);
                    return r.set(t), r.set(e, t.length), r
                }, handleVideoH264Nalu: function (e) {
                    var t, r, i, n, s, o = K(e);
                    switch (o) {
                        case H:
                            C.sps = e;
                            break;
                        case j:
                            C.pps = e
                    }
                    C.isSendSeqHeader ? (C.sps && C.pps && (t = Le({
                        sps: C.sps,
                        pps: C.pps
                    }), r = C.getNaluDts(), D.decode(t, {
                        type: 2,
                        ts: r,
                        isIFrame: !0,
                        cts: 0
                    }), C.sps = null, C.pps = null), Ne(o) ? (t = Oe(o), r = C.getNaluDts(), t && D.calcIframeIntervalTimestamp(r), D.calcNetworkDelay(r), i = e, (n = [])[0] = t ? 23 : 39, n[1] = 1, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = i.byteLength >> 24 & 255, n[6] = i.byteLength >> 16 & 255, n[7] = i.byteLength >> 8 & 255, n[8] = 255 & i.byteLength, (s = new Uint8Array(n.length + i.byteLength)).set(n, 0), s.set(i, n.length), i = s, D._opt.isEmitSEI && D.findSei(i, r), D.decode(i, {
                        type: 2,
                        ts: r,
                        isIFrame: t,
                        cts: 0
                    })) : D.debug.warn("work", "handleVideoH264Nalu Avc Seq Head is ".concat(o))) : C.sps && C.pps && (C.isSendSeqHeader = !0, n = Le({
                        sps: C.sps,
                        pps: C.pps
                    }), D.decode(n, {type: 2, ts: 0, isIFrame: !0, cts: 0}), C.sps = null, C.pps = null)
                }, handleVideoH264NaluList: function (e, t, r) {
                    var i, n;
                    C.isSendSeqHeader ? (i = C.getNaluDts(), D.calcNetworkDelay(i), n = ze(e.reduce(function (e, t) {
                        var e = Re(e), t = Re(t), r = new Uint8Array(e.byteLength + t.byteLength);
                        return r.set(e, 0), r.set(t, e.byteLength), r
                    }), t), D.decode(n, {
                        type: 2,
                        ts: i,
                        isIFrame: t,
                        cts: 0
                    }), D.debug.log("worker", "handleVideoH264NaluList list size is ".concat(e.length, " package length is ").concat(n.byteLength, " isIFrame is ").concat(t, ",nalu type is ").concat(r, ", dts is ").concat(i))) : D.debug.warn("worker", "handleVideoH264NaluList isSendSeqHeader is false")
                }, handleVideoH265Nalu: function (e) {
                    var t, r, i, n, s = je(e);
                    switch (s) {
                        case ve:
                            C.vps = e;
                            break;
                        case be:
                            C.sps = e;
                            break;
                        case W:
                            C.pps = e
                    }
                    C.isSendSeqHeader ? (C.vps && C.sps && C.pps && (t = Ve({
                        vps: C.vps,
                        sps: C.sps,
                        pps: C.pps
                    }), r = C.getNaluDts(), D.decode(t, {
                        type: 2,
                        ts: r,
                        isIFrame: !0,
                        cts: 0
                    }), C.vps = null, C.sps = null, C.pps = null), 32 <= s && s <= 40 ? D.debug.warn("work", "handleVideoH265Nalu HevcSeqHead is ".concat(s)) : (t = 16 <= s && s <= 21, r = C.getNaluDts(), D.calcNetworkDelay(r), s = e, (i = [])[0] = t ? 28 : 44, i[1] = 1, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = s.byteLength >> 24 & 255, i[6] = s.byteLength >> 16 & 255, i[7] = s.byteLength >> 8 & 255, i[8] = 255 & s.byteLength, (n = new Uint8Array(i.length + s.byteLength)).set(i, 0), n.set(s, i.length), s = n, t && D.calcIframeIntervalTimestamp(r), D._opt.isEmitSEI && D.findSei(s, r), D.decode(s, {
                        type: 2,
                        ts: r,
                        isIFrame: t,
                        cts: 0
                    }))) : C.vps && C.sps && C.pps && (C.isSendSeqHeader = !0, i = Ve({
                        vps: C.vps,
                        sps: C.sps,
                        pps: C.pps
                    }), D.decode(i, {type: 2, ts: 0, isIFrame: !0, cts: 0}), C.vps = null, C.sps = null, C.pps = null)
                }
            }), F = {
                LOG_NAME: "worker fmp4Demuxer",
                mp4Box: X.createFile(),
                offset: 0,
                videoTrackId: null,
                audioTrackId: null,
                isHevc: !1,
                listenMp4Box: function () {
                    F.mp4Box.onReady = F.onReady, F.mp4Box.onError = F.onError, F.mp4Box.onSamples = F.onSamples
                },
                initTransportDescarmber: function () {
                    F.transportDescarmber = new ct
                },
                _getSeqHeader: function (e) {
                    var t, r = wt(F.mp4Box.getTrackById(e.id).mdia.minf.stbl.stsd.entries);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var i, n, s, o, a = t.value;
                            if (a.avcC || a.hvcC) return i = new X.DataStream(void 0, 0, X.DataStream.BIG_ENDIAN), n = [], n = a.avcC ? (a.avcC.write(i), [23, 0, 0, 0, 0]) : (F.isHevc = !0, a.hvcC.write(i), [28, 0, 0, 0, 0]), s = new Uint8Array(i.buffer, 8), (o = new Uint8Array(n.length + s.length)).set(n, 0), o.set(s, n.length), o
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return null
                },
                onReady: function (e) {
                    D.debug.log(F.LOG_NAME, "onReady()", e);
                    var t, r, i = e.videoTracks[0], e = e.audioTracks[0];
                    i && (F.videoTrackId = i.id, (t = F._getSeqHeader(i)) && (D.debug.log(F.LOG_NAME, "seqHeader"), D.decodeVideo(t, 0, !0, 0)), F.mp4Box.setExtractionOptions(i.id)), e && (F.audioTrackId = e.id, t = e.audio || {}, i = Ue.indexOf(t.sample_rate), r = e.codec.replace("mp4a.40.", ""), F.mp4Box.setExtractionOptions(e.id), e = {
                        profile: parseInt(r, 10),
                        sampleRate: i,
                        channel: t.channel_count
                    }, r = e.sampleRate, i = new Uint8Array([175, 0, e.profile << 3 | (14 & r) >> 1, (1 & r) << 7 | e.channel << 3]), D.debug.log(F.LOG_NAME, "aacADTSHeader"), D.decodeAudio(i, 0)), F.mp4Box.start()
                },
                onError: function (e) {
                    D.debug.error(F.LOG_NAME, "mp4Box onError", e)
                },
                onSamples: function (e, t, r) {
                    if (e === F.videoTrackId) {
                        var i, n = wt(r);
                        try {
                            for (n.s(); !(i = n.n()).done;) {
                                var s = i.value, o = s.data, a = s.is_sync, l = 1e3 * s.cts / s.timescale,
                                    d = (s.duration, s.timescale, a && D.calcIframeIntervalTimestamp(l), F.isHevc ? (_ = o, void 0, (y = [])[0] = (g = a) ? 28 : 44, y[1] = 1, y[2] = 0, y[3] = 0, y[4] = 0, (g = new Uint8Array(y.length + _.byteLength)).set(y, 0), g.set(_, y.length), g) : ze(o, a));
                                D._opt.isEmitSEI && D.findSei(d, l), D.decode(d, {type: 2, ts: l, isIFrame: a, cts: 0})
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    } else if (e === F.audioTrackId) {
                        var u, f = wt(r);
                        try {
                            for (f.s(); !(u = f.n()).done;) {
                                var h = u.value, c = h.data, p = 1e3 * h.cts / h.timescale,
                                    m = (h.duration, h.timescale, new Uint8Array(c.byteLength + 2));
                                m.set([175, 1], 0), m.set(c, 2), D.decode(m, {type: 1, ts: p, isIFrame: !1, cts: 0})
                            }
                        } catch (e) {
                            f.e(e)
                        } finally {
                            f.f()
                        }
                    } else D.debug.warn(F.LOG_NAME, "onSamples() trackId error", e);
                    var _, g, y
                },
                dispatch: function (e) {
                    var t = e;
                    "string" != typeof e ? "object" === Ut(e) ? ((t = F.transportDescarmber ? F.transportDescarmber.transport(t) : t).buffer.fileStart = F.offset, F.offset += t.byteLength, F.mp4Box.appendBuffer(t.buffer)) : D.debug.warn(F.LOG_NAME, "dispatch()", "data is not object", e) : D.debug.warn(F.LOG_NAME, "dispatch()", "data is string", e)
                },
                destroy: function () {
                    F.mp4Box && (F.mp4Box.flush(), F.mp4Box = null), F.transportDescarmber && (F.transportDescarmber.destroy(), F.transportDescarmber = null), F.offset = 0, F.videoTrackId = null, F.audioTrackId = null, F.isHevc = !1
                }
            }, I = {
                LOG_NAME: "worker mpeg4Demuxer",
                lastBuffer: new Uint8Array(0),
                parsedOffset: 0,
                firstStartCodeOffset: 0,
                secondStartCodeOffset: 0,
                state: "init",
                hasInitVideoCodec: !1,
                localDts: 0,
                dispatch: function (e) {
                    e = new Uint8Array(e);
                    I.extractNALu(e)
                },
                destroy: function () {
                    I.lastBuffer = new Uint8Array(0), I.parsedOffset = 0, I.firstStartCodeOffset = 0, I.secondStartCodeOffset = 0, I.state = "init", I.hasInitVideoCodec = !1, I.localDts = 0
                },
                extractNALu: function (e) {
                    if (!e || e.byteLength < 1) D.debug.warn(I.LOG_NAME, "extractNALu() buffer error", e); else {
                        var t = new Uint8Array(I.lastBuffer.length + e.length);
                        for (t.set(I.lastBuffer, 0), t.set(new Uint8Array(e), I.lastBuffer.length), I.lastBuffer = t; ;) {
                            if ("init" === I.state) {
                                for (var r = !1; 4 <= I.lastBuffer.length - I.parsedOffset;) if (0 === I.lastBuffer[I.parsedOffset]) if (0 === I.lastBuffer[I.parsedOffset + 1]) if (1 === I.lastBuffer[I.parsedOffset + 2]) {
                                    if (182 === I.lastBuffer[I.parsedOffset + 3]) {
                                        I.state = "findFirstStartCode", I.firstStartCodeOffset = I.parsedOffset, I.parsedOffset += 4, r = !0;
                                        break
                                    }
                                    I.parsedOffset++
                                } else I.parsedOffset++; else I.parsedOffset++; else I.parsedOffset++;
                                if (r) continue;
                                break
                            }
                            if ("findFirstStartCode" === I.state) {
                                for (var i = !1; 4 <= I.lastBuffer.length - I.parsedOffset;) if (0 === I.lastBuffer[I.parsedOffset]) if (0 === I.lastBuffer[I.parsedOffset + 1]) if (1 === I.lastBuffer[I.parsedOffset + 2]) {
                                    if (182 === I.lastBuffer[I.parsedOffset + 3]) {
                                        I.state = "findSecondStartCode", I.secondStartCodeOffset = I.parsedOffset, I.parsedOffset += 4, i = !0;
                                        break
                                    }
                                    I.parsedOffset++
                                } else I.parsedOffset++; else I.parsedOffset++; else I.parsedOffset++;
                                if (i) continue;
                                break
                            }
                            if ("findSecondStartCode" === I.state) {
                                if (!(0 < I.lastBuffer.length - I.parsedOffset)) break;
                                var n = 192 & I.lastBuffer[I.parsedOffset],
                                    s = 0 == n ? I.secondStartCodeOffset - 14 : I.secondStartCodeOffset, o = void 0,
                                    a = 0 == (192 & I.lastBuffer[I.firstStartCodeOffset + 4]);
                                if (a) {
                                    if (I.firstStartCodeOffset - 14 < 0) return void D.debug.warn(I.LOG_NAME, "firstStartCodeOffset -14 is", I.firstStartCodeOffset - 14);
                                    I.hasInitVideoCodec || (I.hasInitVideoCodec = !0, L.setCodec(99, "")), o = I.lastBuffer.subarray(I.firstStartCodeOffset - 14, s)
                                } else o = I.lastBuffer.subarray(I.firstStartCodeOffset, s);
                                var l = I.getNaluDts();
                                I.hasInitVideoCodec ? (postMessage({
                                    cmd: O,
                                    type: he,
                                    value: o.byteLength
                                }), postMessage({
                                    cmd: O,
                                    type: ce,
                                    value: l
                                }), L.decode(o, a ? 1 : 0, l)) : D.debug.warn(I.LOG_NAME, "has not init video codec"), I.lastBuffer = I.lastBuffer.subarray(s), I.firstStartCodeOffset = 0 == n ? 14 : 0, I.parsedOffset = I.firstStartCodeOffset + 4, I.state = "findFirstStartCode"
                            }
                        }
                    }
                },
                getNaluDts: function () {
                    var e = I.localDts;
                    return I.localDts = I.localDts + 40, e
                }
            }, D = {
                isPlayer: !0,
                isPlayback: !1,
                isPushDropping: !1,
                isDestroyed: !1,
                _opt: z(),
                startStreamRateAndStatsInterval: function () {
                    D.stopStreamRateAndStatsInterval(), e = setInterval(function () {
                        l && l(0);
                        var e = JSON.stringify({
                            demuxBufferDelay: D.getVideoBufferLength(),
                            audioDemuxBufferDelay: D.getAudioBufferLength(),
                            flvBufferByteLength: D.getFlvBufferLength(),
                            netBuf: D.networkDelay || 0,
                            pushLatestDelay: D.pushLatestDelay || 0,
                            isDropping: Ae(D.dropping) || Ae(D.isPushDropping),
                            isStreamTsMoreThanLocal: _
                        });
                        postMessage({cmd: O, type: "streamStats", value: e})
                    }, 1e3)
                },
                stopStreamRateAndStatsInterval: function () {
                    e && (clearInterval(e), e = null)
                },
                useOffscreen: function () {
                    return D._opt.useOffscreen && "undefined" != typeof OffscreenCanvas
                },
                getDelay: function (e) {
                    return !e || D._opt.hasVideo && !m ? -1 : (D.preDelayTimestamp && D.preDelayTimestamp > e ? 1e3 < D.preDelayTimestamp - e && D.debug.warn("worker", "getDelay() and preDelayTimestamp is ".concat(D.preDelayTimestamp, " > timestamp is ").concat(e, " more than ").concat(D.preDelayTimestamp - e, "ms")) : D.firstTimestamp ? e && (t = Date.now() - D.startTimestamp, (r = e - D.firstTimestamp) <= t ? (_ = !1, D.delay = t - r) : (_ = !0, D.delay = r - t)) : (D.firstTimestamp = e, D.startTimestamp = Date.now(), D.delay = -1), D.preDelayTimestamp = e, D.delay);
                    var t, r
                },
                getDelayNotUpdateDelay: function (e) {
                    return !e || D._opt.hasVideo && !m ? -1 : D.preDelayTimestamp && 1e3 < D.preDelayTimestamp - e ? (D.debug.warn("worker", "getDelayNotUpdateDelay and preDelayTimestamp is ".concat(D.preDelayTimestamp, " > timestamp is ").concat(e, " more than ").concat(D.preDelayTimestamp - e, "ms")), -1) : D.firstTimestamp ? (r = -1, e && (t = Date.now() - D.startTimestamp, r = (e = e - D.firstTimestamp) <= t ? (_ = !1, t - e) : (_ = !0, e - t)), r) : -1;
                    var t, r
                },
                resetDelay: function () {
                    D.firstTimestamp = null, D.startTimestamp = null, D.delay = -1
                },
                resetAllDelay: function () {
                    D.resetDelay(), D.preDelayTimestamp = null
                },
                doDecode: function (e) {
                    D._opt.useWCS && D.useOffscreen() && 2 === e.type && n.decode ? n.decode(e.payload, e.ts, e.cts) : e.decoder.decode(e.payload, e.ts, e.isIFrame, e.cts)
                },
                init: function () {
                    D.debug.log("worker", "init and opt is", JSON.stringify(D._opt));
                    var r = D._opt.playType === re, e = "playbackTF" === D._opt.playType;
                    C.init(), D.isPlayer = r, D.isPlayback = e, D.isPlaybackCacheBeforeDecodeForFpsRender() ? D.debug.log("worker", "playback and playbackIsCacheBeforeDecodeForFpsRender is true") : D.stopId = setInterval(function () {
                        var e = (new Date).getTime(), e = e - (g = g || e);
                        100 < e && D.debug.warn("worker", "loop demux diff time is ".concat(e)), function () {
                            var e = null;
                            if (s.length) {
                                if (D.isPushDropping) return D.debug.warn("worker", "loop() isPushDropping is true and bufferList length is ".concat(s.length));
                                if (D.dropping) {
                                    for (e = s.shift(), D.debug.warn("worker", "loop() dropBuffer is dropping and isIFrame ".concat(e.isIFrame, " and delay is ").concat(D.delay, " and bufferlist is ").concat(s.length)); !e.isIFrame && s.length;) e = s.shift();
                                    var t = D.getDelayNotUpdateDelay(e.ts);
                                    e.isIFrame && t <= D.getNotDroppingDelayTs() && (D.debug.log("worker", "loop() is dropping = false, is iFrame"), D.dropping = !1, D.doDecode(e))
                                } else if (e = s[0], -1 === D.getDelay(e.ts) || D.isPlayback) D.isPlayer && D.debug.log("worker", "loop() common dumex delay is -1 ,data.ts is", e.ts), s.shift(), D.doDecode(e); else if (D.delay > D._opt.videoBuffer + D._opt.videoBufferDelay && r) D.hasIframeInBufferList() ? (D.debug.log("worker", "delay is ".concat(D.delay, ", set dropping is true")), D.resetAllDelay(), D.dropping = !0) : (s.shift(), D.doDecode(e)); else for (; s.length;) {
                                    if (e = s[0], !(D.getDelay(e.ts) > D._opt.videoBuffer)) {
                                        D.delay < 0 && D.debug.warn("worker", "loop() do not decode and delay is ".concat(D.delay, ", bufferList is ").concat(s.length));
                                        break
                                    }
                                    s.shift(), D.doDecode(e)
                                }
                            } else -1 !== D.delay && D.debug.log("worker", "loop() bufferList is empty and reset delay"), D.resetAllDelay()
                        }(), g = (new Date).getTime()
                    }, 10), D._opt.checkFirstIFrame || (m = !0)
                },
                playbackCacheLoop: function () {
                    D.stopId && (clearInterval(D.stopId), D.stopId = null);

                    function e() {
                        var e;
                        s.length && (e = s.shift(), D.doDecode(e))
                    }

                    e();
                    var t = Math.ceil(1e3 / (D.streamFps * D._opt.playbackRate));
                    D.debug.log("worker", "playbackCacheLoop fragDuration is ".concat(t, ", streamFps is ").concat(D.streamFps, ", playbackRate is ").concat(D._opt.playbackRate)), D.stopId = setInterval(e, t)
                },
                close: function () {
                    if (D.debug.log("worker", "close"), D.isDestroyed = !0, D.stopStreamRateAndStatsInterval(), D.stopId && (clearInterval(D.stopId), D.stopId = null), P) try {
                        P.clear && P.clear(), P = null
                    } catch (e) {
                        D.debug.warn("worker", "close() and audioDecoder.clear error", e)
                    }
                    if (L) try {
                        L.clear && L.clear(), L = null
                    } catch (e) {
                        D.debug.warn("worker", "close() and videoDecoder.clear error", e)
                    }
                    g = l = null, _ = !1, n && (n.reset && n.reset(), n = null), D.firstTimestamp = null, D.startTimestamp = null, D.networkDelay = 0, D.streamFps = null, D.streamAudioFps = null, D.streamVideoFps = null, D.delay = -1, D.pushLatestDelay = -1, D.preDelayTimestamp = null, D.dropping = !1, D.isPushDropping = !1, D.isPlayer = !0, D.isPlayback = !1, D._opt = z(), D.webglObj && (D.webglObj.destroy(), D.offscreenCanvas.removeEventListener("webglcontextlost", D.onOffscreenCanvasWebglContextLost), D.offscreenCanvas.removeEventListener("webglcontextrestored", D.onOffscreenCanvasWebglContextRestored), D.offscreenCanvas = null, D.offscreenCanvasGL = null, D.offscreenCanvasCtx = null), s = [], u = [], o(), f = null, a && (a.close(1e3, "Client disconnecting"), a = null), k = M = R = T = m = i = p = !1, b = [], A = B = U = S = 0, E = w = x = r = v = y = c = h = null, C.destroy(), F.destroy(), I.destroy(), postMessage({cmd: "closeEnd"})
                },
                pushBuffer: function (e, t) {
                    return 1 === t.type && Se(e) ? (D.debug.log("worker", "pushBuffer audio ts is ".concat(t.ts, ", isAacCodecPacket is true")), void D.decodeAudio(e, t.ts)) : 2 === t.type && t.isIFrame && e[0] >> 4 == 1 && e[1] === Ee ? (D.debug.log("worker", "pushBuffer video ts is ".concat(t.ts, ", isVideoSequenceHeader is true")), void D.decodeVideo(e, t.ts, t.isIFrame, t.cts)) : (D.isPlayer && 0 < B && 0 < x && 2 === t.type && (i = t.ts - x, 2 * B - 5 < i && D.debug.warn("worker", "pushBuffer video\n                    ts is ".concat(t.ts, ", preTimestamp is ").concat(x, ",\n                    diff is ").concat(i, " and preTimestampDuration is ").concat(B, "\n                    maybe trigger black screen or flower screen\n                    "))), D.isPlayer && 0 < x && 2 === t.type && t.ts < x && 36e5 < x - t.ts && (D.debug.warn("worker", "pushBuffer,\n                preTimestamp is ".concat(x, ", options.ts is ").concat(t.ts, ",\n                diff is ").concat(x - t.ts, " more than ").concat(36e5, ",\n                and resetAllDelay")), D.resetAllDelay()), D.isPlayer && t.ts <= x && 0 < x && 2 === t.type && D.debug.warn("worker", "pushBuffer,\n                options.ts is ".concat(t.ts, " less than (or equal) preTimestamp is ").concat(x, " and\n                payloadBufferSize is ").concat(e.byteLength, " and prevPayloadBufferSize is ").concat(A)), D.isPlayer && m && (i = D._opt.videoBuffer + D._opt.videoBufferDelay, r = D.getDelayNotUpdateDelay(t.ts), i < (D.pushLatestDelay = r) && D.delay < i && 0 < D.delay && D.hasIframeInBufferList() && !1 === D.isPushDropping && (D.debug.log("worker", "pushBuffer, pushLatestDelay is ".concat(r, " more than ").concat(i, " and decoder.delay is ").concat(D.delay, " and has iIframe and next decoder.dropBuffer$2()")), D.dropBuffer$2())), 2 === t.type && (0 < x && (B = t.ts - x), A = e.byteLength, x = t.ts), 1 === t.type ? s.push({
                        ts: t.ts,
                        payload: e,
                        decoder: {decode: D.decodeAudio},
                        type: 1,
                        isIFrame: !1
                    }) : 2 === t.type && s.push({
                        ts: t.ts,
                        cts: t.cts,
                        payload: e,
                        decoder: {decode: D.decodeVideo},
                        type: 2,
                        isIFrame: t.isIFrame
                    }), void (D.isPlaybackCacheBeforeDecodeForFpsRender() && ($(D.streamVideoFps) || $(D.streamAudioFps)) && (r = D.streamVideoFps, i = D.streamAudioFps, $(D.streamVideoFps) && (r = Be(s, 2)) && (D.streamVideoFps = r, postMessage({
                        cmd: "playbackStreamVideoFps",
                        value: D.streamVideoFps
                    }), D.streamFps = i ? r + i : r, D.playbackCacheLoop()), $(D.streamAudioFps) && (i = Be(s, 1)) && (D.streamAudioFps = i, D.streamFps = r ? r + i : i, D.playbackCacheLoop()), $(D.streamVideoFps) && $(D.streamAudioFps) && D.debug.log("worker", "playbackCacheBeforeDecodeForFpsRender, calc streamAudioFps is ".concat(i, ", streamVideoFps is ").concat(r, ", bufferListLength  is ").concat(s.length)))));
                    var r, i
                },
                getVideoBufferLength: function () {
                    var t = 0;
                    return s.forEach(function (e) {
                        2 === e.type && (t += 1)
                    }), t
                },
                hasIframeInBufferList: function () {
                    return s.some(function (e) {
                        return 2 === e.type && e.isIFrame
                    })
                },
                isAllIframeInBufferList: function () {
                    var e = D.getVideoBufferLength(), t = 0;
                    return s.forEach(function (e) {
                        2 === e.type && e.isIFrame && (t += 1)
                    }), e === t
                },
                getNotDroppingDelayTs: function () {
                    return D._opt.videoBuffer + D._opt.videoBufferDelay / 2
                },
                getAudioBufferLength: function () {
                    var t = 0;
                    return s.forEach(function (e) {
                        1 === e.type && (t += 1)
                    }), t
                },
                getFlvBufferLength: function () {
                    var e = 0;
                    return f && f.buffer && (e = f.buffer.byteLength), e = D._opt.isNakedFlow && C.lastBuf ? C.lastBuf.byteLength : e
                },
                fetchStream: function (e, i) {
                    var r, n, s;
                    D.debug.log("worker", "fetchStream, url is " + e, "options:", JSON.stringify(i)), i.isFlv ? D._opt.isFlv = !0 : i.isFmp4 ? D._opt.isFmp4 = !0 : i.isMpeg4 ? D._opt.isMpeg4 = !0 : i.isNakedFlow && (D._opt.isNakedFlow = !0), r = function (e) {
                        postMessage({cmd: O, type: "streamRate", value: e})
                    }, n = 0, s = xe(), l = function (e) {
                        var t;
                        "[object Number]" === Object.prototype.toString.call(e) && (n += e, 1e3 <= (t = (e = xe()) - s) && (r(n / t * 1e3), s = e, n = 0))
                    }, D.startStreamRateAndStatsInterval(), i.isFmp4 && (F.listenMp4Box(), D._opt.isFmp4Private && F.initTransportDescarmber()), 2 === i.protocol ? (f = new q(D.demuxFlv()), fetch(e, {signal: t.signal}).then(function (e) {
                        if (!(e.ok && 200 <= e.status && e.status <= 299)) return D.debug.warn("worker", "fetch response status is ".concat(e.status, " and ok is ").concat(e.ok, " and emit error and next abort()")), o(), void postMessage({
                            cmd: O,
                            type: G,
                            value: "fetch response status is ".concat(e.status, " and ok is ").concat(e.ok)
                        });
                        var t;
                        postMessage({
                            cmd: O,
                            type: pe
                        }), "undefined" != typeof WritableStream ? e.body.pipeTo(new WritableStream({
                            write: function (e) {
                                l(e.byteLength), i.isFlv ? f.write(e) : i.isFmp4 ? D.demuxFmp4(e) : i.isMpeg4 && D.demuxMpeg4(e)
                            }, close: function () {
                                f = null, o(), postMessage({cmd: O, type: ue, value: te})
                            }, abort: function (e) {
                                f = null, e.name !== we && (o(), postMessage({cmd: O, type: G, value: e.toString()}))
                            }
                        })) : (t = e.body.getReader(), function r() {
                            t.read().then(function (e) {
                                var t = e.done, e = e.value;
                                if (t) return f = null, o(), void postMessage({cmd: O, type: ue, value: te});
                                l(e.byteLength), i.isFlv ? f.write(e) : i.isFmp4 ? D.demuxFmp4(e) : i.isMpeg4 && D.demuxMpeg4(e), r()
                            }).catch(function (e) {
                                f = null, e.name !== we && (o(), postMessage({cmd: O, type: G, value: e.toString()}))
                            })
                        }())
                    }).catch(function (e) {
                        e.name !== we && (o(), postMessage({cmd: O, type: G, value: e.toString()}), f = null)
                    })) : 1 === i.protocol && (i.isFlv && (f = new q(D.demuxFlv())), (a = new WebSocket(e)).binaryType = "arraybuffer", a.onopen = function () {
                        D.debug.log("worker", "fetchStream, WebsocketStream  socket open"), postMessage({
                            cmd: O,
                            type: pe
                        }), postMessage({cmd: O, type: "websocketOpen"})
                    }, a.onclose = function (e) {
                        D.debug.log("worker", "fetchStream, WebsocketStream socket close and code is ".concat(e.code)), 1006 === e.code && D.debug.warn("worker", "fetchStream, WebsocketStream socket close abnormally and code is ".concat(e.code)), f = null, postMessage({
                            cmd: O,
                            type: ue,
                            value: "websocket"
                        })
                    }, a.onerror = function (e) {
                        D.debug.error("worker", "fetchStream, WebsocketStream socket error", e), f = null, postMessage({
                            cmd: O,
                            type: "websocketError",
                            value: e.isTrusted ? "websocket user aborted" : "websocket error"
                        })
                    }, a.onmessage = function (e) {
                        l(e.data.byteLength), i.isFlv ? f.write(e.data) : i.isFmp4 ? D.demuxFmp4(e.data) : i.isMpeg4 ? D.demuxMpeg4(e.data) : D._opt.isNakedFlow ? D.demuxNakedFlow(e.data) : D.demuxM7s(e.data)
                    })
                },
                demuxFlv: Q.mark(function e() {
                    var t, r, i, n, s, o, a, l;
                    return Q.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, 9;
                            case 2:
                                r = new ArrayBuffer(4), t = new Uint8Array(r), r = new Uint32Array(r);
                            case 5:
                                return t[3] = 0, e.next = 9, 15;
                            case 9:
                                return n = e.sent, i = n[4], t[0] = n[7], t[1] = n[6], t[2] = n[5], o = r[0], t[0] = n[10], t[1] = n[9], t[2] = n[8], t[3] = n[11], n = r[0], e.next = 22, o;
                            case 22:
                                s = e.sent.slice(), e.t0 = i, e.next = 8 === e.t0 ? 26 : 9 === e.t0 ? 28 : 30;
                                break;
                            case 26:
                                return D.decode(s, {type: 1, ts: n}), e.abrupt("break", 32);
                            case 28:
                                return 0 < s.byteLength && (o = s[0] >> 4 == 1, D.isPlayer && (D.calcNetworkDelay(n), o && D.calcIframeIntervalTimestamp(n)), r[0] = s[4], r[1] = s[3], r[2] = s[2], r[3] = 0, a = r[0], l = s, D._opt.isCrypto ? D._opt.cryptoIV && 0 < D._opt.cryptoIV.byteLength && D._opt.cryptoKey && 0 < D._opt.cryptoKey.byteLength ? l = function (e, t, r) {
                                    t = new Uint8Array(t), r = new Uint8Array(r);
                                    for (var i = e.byteLength, n = 5; n < i;) {
                                        var s = (s = e.slice(n, n + 4))[3] | s[2] << 8 | s[1] << 16 | s[0] << 24;
                                        if (i < s) break;
                                        var o = e[n + 4];
                                        1 != (o &= 31) && 5 != o || (o = e.slice(n + 4 + 2, n + 4 + s), o = new ut.ctr(t, new dt(r)).decrypt(o), e.set(o, n + 4 + 2)), n = n + 4 + s
                                    }
                                    return e
                                }(s, D._opt.cryptoKey, D._opt.cryptoIV) : D.debug.error("worker", "cryptoKey.length is ".concat(D._opt.cryptoKey && D._opt.cryptoKey.byteLength, " or cryptoIV.length is ").concat(D._opt.cryptoIV && D._opt.cryptoIV.byteLength, " null")) : D._opt.isSm4Crypto && D._opt.sm4CryptoKey && o && (l = function (e, t) {
                                    for (var r = e.byteLength, i = 5; i < r;) {
                                        var n = (n = e.slice(i, i + 4))[3] | n[2] << 8 | n[1] << 16 | n[0] << 24;
                                        if (r < n) break;
                                        var s = e[i + 4];
                                        1 != (s &= 31) && 5 != s || (s = bt(e.slice(i + 4 + 2, i + 4 + n), t, 0, {
                                            padding: "none",
                                            output: "array"
                                        }), e.set(s, i + 4 + 2)), i = i + 4 + n
                                    }
                                    return e
                                }(s, D._opt.sm4CryptoKey)), D._opt.isEmitSEI && D.findSei(l, n), D.decode(l, {
                                    type: 2,
                                    ts: n,
                                    isIFrame: o,
                                    cts: a
                                })), e.abrupt("break", 32);
                            case 30:
                                return D.debug.log("worker", "demuxFlv() type is ".concat(i)), e.abrupt("break", 32);
                            case 32:
                                e.next = 5;
                                break;
                            case 34:
                            case"end":
                                return e.stop()
                        }
                    }, e)
                }),
                decode: function (e, t) {
                    1 === t.type ? D._opt.hasAudio && (postMessage({
                        cmd: O,
                        type: "streamAbps",
                        value: e.byteLength
                    }), D.isPlayer ? D.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts
                    }) : D.isPlayback && (D.isPlaybackCacheBeforeDecodeForFpsRender() || 1 === D._opt.playbackRate ? D.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts
                    }) : D.decodeAudio(e, t.ts))) : 2 === t.type && D._opt.hasVideo && (postMessage({
                        cmd: O,
                        type: he,
                        value: e.byteLength
                    }), postMessage({cmd: O, type: ce, value: t.ts}), D.isPlayer ? D.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        isIFrame: t.isIFrame,
                        cts: t.cts
                    }) : D.isPlayback && (D.isPlaybackOnlyDecodeIFrame() ? t.isIFrame && D.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts,
                        isIFrame: t.isIFrame
                    }) : (D.isPlaybackCacheBeforeDecodeForFpsRender(), D.pushBuffer(e, {
                        type: t.type,
                        ts: t.ts,
                        cts: t.cts,
                        isIFrame: t.isIFrame
                    }))))
                },
                setCodecAudio: function (e) {
                    var t = e[0] >> 4;
                    Se(e) || 7 == t || 8 == t || 2 == t ? (D.debug.log("worker", "setCodecAudio: init audio codec, codeId is ".concat(t)), e = t === ge ? e.slice(2) : e.slice(1), P.setCodec(t, D._opt.sampleRate, e), i = !0, e = Number("1") || 1, setTimeout(function () {
                        D.close(), postMessage({cmd: de})
                    }, 60 * e * 60 * 1e3)) : D.debug.warn("worker", "setCodecAudio: hasInitAudioCodec is false, codecId is ", t)
                },
                decodeAudio: function (e, t) {
                    var r = e[0] >> 4;
                    i ? P.decode(r === ge ? e.slice(2) : e.slice(1), t) : D.setCodecAudio(e)
                },
                setCodecVideo: function (e) {
                    var t = 15 & e[0];
                    if (D.isVideoSequenceHeader(e)) if (7 == t || 12 == t) {
                        k = 12 == t, D.debug.log("worker", "setCodecVideo: init video codec , codecId is ".concat(t));
                        var r = e.slice(5);
                        if (7 == t && D._opt.useSIMD) {
                            var i = Pe(r);
                            if (4080 < i.codecWidth || 4080 < i.codecHeight) return postMessage({cmd: "simdH264DecodeVideoWidthIsTooLarge"}), void D.debug.warn("worker", "setCodecVideo: SIMD H264 decode video width is too large, width is ".concat(i.codecWidth, ", height is ").concat(i.codecHeight))
                        }
                        p = !0, L.setCodec(t, r), D._opt.recordType === ie && postMessage({
                            cmd: le,
                            buffer: e,
                            codecId: t
                        }, [e.buffer])
                    } else D.debug.warn("worker", "setCodecVideo: hasInitVideoCodec is false, codecId is ".concat(t, " is not H264 or H265")); else D.debug.warn("worker", "decodeVideo: hasInitVideoCodec is false, codecId is ".concat(t, " and frameType is ").concat(e[0] >> 4, " and packetType is ").concat(e[1]))
                },
                decodeVideo: function (e, t, r, i) {
                    var n, s;
                    p ? (m = !(m || !r) || m) ? (r && D.isVideoSequenceHeader(e) && (n = {}, 7 == (s = 15 & e[0]) ? n = Pe(e.slice(5)) : 12 == s && (n = function (e) {
                        var t = {width: 0, height: 0, profile: 0, level: 0};
                        e = e.slice(5);
                        do {
                            var r = {};
                            if (e.length < 23) break;
                            if (r.configurationVersion = e[0], 1 != r.configurationVersion) break;
                            r.general_profile_space = e[1] >> 6 & 3, r.general_tier_flag = e[1] >> 5 & 1, r.general_profile_idc = 31 & e[1], r.general_profile_compatibility_flags = e[2] << 24 | e[3] << 16 | e[4] << 8 | e[5], r.general_constraint_indicator_flags = e[6] << 24 | e[7] << 16 | e[8] << 8 | e[9], r.general_constraint_indicator_flags = r.general_constraint_indicator_flags << 16 | e[10] << 8 | e[11], r.general_level_idc = e[12], r.min_spatial_segmentation_idc = (15 & e[13]) << 8 | e[14], r.parallelismType = 3 & e[15], r.chromaFormat = 3 & e[16], r.bitDepthLumaMinus8 = 7 & e[17], r.bitDepthChromaMinus8 = 7 & e[18], r.avgFrameRate = e[19] << 8 | e[20], r.constantFrameRate = e[21] >> 6 & 3, r.numTemporalLayers = e[21] >> 3 & 7, r.temporalIdNested = e[21] >> 2 & 1, r.lengthSizeMinusOne = 3 & e[21];
                            for (var i = e[22], n = e.slice(23), s = 0; s < i && !(n.length < 3); s++) {
                                var o = 63 & n[0], a = n[1] << 8 | n[2];
                                n = n.slice(3);
                                for (var l = 0; l < a && !(n.length < 2); l++) {
                                    var d = n[0] << 8 | n[1];
                                    if (n.length < 2 + d) break;
                                    var u, n = n.slice(2);
                                    33 == o && ((u = new Uint8Array(d)).set(n.slice(0, d), 0), r.psps = function (e) {
                                        var t = {}, r = e.length, i = [], n = new Fe(e);
                                        n.read(1), n.read(6), n.read(6), n.read(3);
                                        for (var s = 2; s < r; s++) s + 2 < r && 3 == n.look(24) ? (i.push(n.read(8)), i.push(n.read(8)), s += 2, n.read(8)) : i.push(n.read(8));
                                        var o, a, e = new Uint8Array(i), e = new Fe(e);
                                        return t.sps_video_parameter_set_id = e.read(4), t.sps_max_sub_layers_minus1 = e.read(3), t.sps_temporal_id_nesting_flag = e.read(1), t.profile_tier_level = function (e, t) {
                                            var r = {};
                                            r.profile_space = e.read(2), r.tier_flag = e.read(1), r.profile_idc = e.read(5), r.profile_compatibility_flags = e.read(32), r.general_progressive_source_flag = e.read(1), r.general_interlaced_source_flag = e.read(1), r.general_non_packed_constraint_flag = e.read(1), r.general_frame_only_constraint_flag = e.read(1), e.read(32), e.read(12), r.level_idc = e.read(8), r.sub_layer_profile_present_flag = [], r.sub_layer_level_present_flag = [];
                                            for (var i = 0; i < t; i++) r.sub_layer_profile_present_flag[i] = e.read(1), r.sub_layer_level_present_flag[i] = e.read(1);
                                            if (0 < t) for (var n = t; n < 8; n++) e.read(2);
                                            r.sub_layer_profile_space = [], r.sub_layer_tier_flag = [], r.sub_layer_profile_idc = [], r.sub_layer_profile_compatibility_flag = [], r.sub_layer_progressive_source_flag = [], r.sub_layer_interlaced_source_flag = [], r.sub_layer_non_packed_constraint_flag = [], r.sub_layer_frame_only_constraint_flag = [], r.sub_layer_level_idc = [];
                                            for (var s = 0; s < t; s++) r.sub_layer_profile_present_flag[s] && (r.sub_layer_profile_space[s] = e.read(2), r.sub_layer_tier_flag[s] = e.read(1), r.sub_layer_profile_idc[s] = e.read(5), r.sub_layer_profile_compatibility_flag[s] = e.read(32), r.sub_layer_progressive_source_flag[s] = e.read(1), r.sub_layer_interlaced_source_flag[s] = e.read(1), r.sub_layer_non_packed_constraint_flag[s] = e.read(1), r.sub_layer_frame_only_constraint_flag[s] = e.read(1), e.read(32), e.read(12)), r.sub_layer_level_present_flag[s] ? r.sub_layer_level_idc[s] = e.read(8) : r.sub_layer_level_idc[s] = 1;
                                            return r
                                        }(e, t.sps_max_sub_layers_minus1), t.sps_seq_parameter_set_id = e.read_golomb(), t.chroma_format_idc = e.read_golomb(), 3 == t.chroma_format_idc ? t.separate_colour_plane_flag = e.read(1) : t.separate_colour_plane_flag = 0, t.pic_width_in_luma_samples = e.read_golomb(), t.pic_height_in_luma_samples = e.read_golomb(), t.conformance_window_flag = e.read(1), t.conformance_window_flag ? (o = 1 + (t.chroma_format_idc < 2), a = 1 + (t.chroma_format_idc < 3), t.conf_win_left_offset = e.read_golomb() * a, t.conf_win_right_offset = e.read_golomb() * a, t.conf_win_top_offset = e.read_golomb() * o, t.conf_win_bottom_offset = e.read_golomb() * o) : (t.conf_win_left_offset = 0, t.conf_win_right_offset = 0, t.conf_win_top_offset = 0, t.conf_win_bottom_offset = 0), t
                                    }(u), t.profile = r.general_profile_idc, t.level = r.general_level_idc / 30, t.width = r.psps.pic_width_in_luma_samples - (r.psps.conf_win_left_offset + r.psps.conf_win_right_offset), t.height = r.psps.pic_height_in_luma_samples - (r.psps.conf_win_top_offset + r.psps.conf_win_bottom_offset)), n = n.slice(d)
                                }
                            }
                        } while (0);
                        return t.codecWidth = t.width || 1920, t.codecHeight = t.height || 1080, t.presentHeight = t.codecHeight, t.presentWidth = t.codecWidth, t.timescale = 1e3, t.refSampleDuration = 1e3 / 23976 * 1e3, t.videoType = "hevc", t
                    }(e)), n.codecWidth && n.codecHeight && h && c && (n.codecWidth !== h || n.codecHeight !== c) && (D.debug.warn("worker", "\n                            decodeVideo: video width or height is changed,\n                            old width is ".concat(h, ", old height is ").concat(c, ",\n                            new width is ").concat(n.codecWidth, ", new height is ").concat(n.codecHeight, ",\n                            and emit change event")), R = !0, postMessage({cmd: "wasmWidthOrHeightChange"}))), R ? D.debug.warn("worker", "decodeVideo: video width or height is changed, and return") : M ? D.debug.warn("worker", "decodeVideo: simd decode error, and return") : D.isVideoSequenceHeader(e) ? D.debug.warn("worker", "decodeVideo and payload is video sequence header so drop this frame") : e.byteLength < 12 ? D.debug.warn("worker", "decodeVideo and payload is too small , payload length is ".concat(e.byteLength)) : (s = e.slice(5), L.decode(s, r ? 1 : 0, t), D._opt.isRecording && D._opt.recordType === ie && postMessage({
                        cmd: "videoNalu",
                        buffer: s,
                        isIFrame: r,
                        ts: t,
                        cts: i
                    }, [e.buffer]))) : D.debug.warn("worker", "decodeVideo: first frame is not iframe") : D.setCodecVideo(e)
                },
                clearBuffer: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    D.debug.log("worker", "clearBuffer,bufferList length is ".concat(s.length, ", need clear is ").concat(e)), e && (s = []), D.resetAllDelay(), D.dropping = !0
                },
                dropBuffer$2: function () {
                    if (0 < s.length) {
                        D.isPushDropping = !0;
                        var e, t, r = s.findIndex(function (e) {
                            return Ae(e.isIFrame) && 2 === e.type
                        });
                        if (D.isAllIframeInBufferList()) for (var i = 0; i < s.length; i++) {
                            var n = s[i], n = D.getDelayNotUpdateDelay(n.ts);
                            if (n >= D.getNotDroppingDelayTs()) {
                                D.debug.log("worker", "dropBuffer$2() isAllIframeInBufferList() is true, and index is ".concat(i, " and tempDelay is ").concat(n, " and notDroppingDelayTs is ").concat(D.getNotDroppingDelayTs())), r = i;
                                break
                            }
                        }
                        0 <= r ? (e = (s = s.slice(r)).shift(), t = D.getDelayNotUpdateDelay(e.ts), D.doDecode(e), D.isPushDropping = !1, D.debug.log("worker", "dropBuffer$2() iFrameIndex is ".concat(r, ",and bufferList length is ").concat(s.length, " and tempDelay is ").concat(t, " ,delay is ").concat(D.delay, " "))) : D.isPushDropping = !1
                    }
                    0 === s.length && (D.isPushDropping = !1)
                },
                demuxM7s: function (e) {
                    var t, r, i = new DataView(e), n = i.getUint32(1, !1);
                    switch (i.getUint8(0)) {
                        case 1:
                            D.decode(new Uint8Array(e, 5), {type: 1, ts: n});
                            break;
                        case 2:
                            5 < i.byteLength && (t = new Uint8Array(e, 5), r = i.getUint8(5) >> 4 == 1, D.isPlayer && (D.calcNetworkDelay(n), r && D.calcIframeIntervalTimestamp(n)), D._opt.isEmitSEI && D.findSei(t, n), D.decode(t, {
                                type: 2,
                                ts: n,
                                isIFrame: r
                            }))
                    }
                },
                demuxNakedFlow: function (e) {
                    C.dispatch(e)
                },
                demuxFmp4: function (e) {
                    e = new Uint8Array(e);
                    F.dispatch(e)
                },
                demuxMpeg4: function (e) {
                    I.dispatch(e)
                },
                findSei: function (e, r) {
                    (function (e, t) {
                        var r = 1 < arguments.length && void 0 !== t ? t : 4;
                        if (!(e.length < 4)) {
                            for (var i, n = e.length, s = [], o = 0; o + r < n;) if (i = function (e, t) {
                                return (e[t = 1 < arguments.length && void 0 !== t ? t : 0] << 24 >>> 0) + (e[t + 1] << 16) + (e[t + 2] << 8) + (e[t + 3] || 0)
                            }(e, o), 3 === r && (i >>>= 8), o += r, i) {
                                if (n < o + i) break;
                                s.push(e.subarray(o, o + i)), o += i
                            }
                            return s
                        }
                    })(e.slice(5)).forEach(function (e) {
                        var t = k ? e[0] >>> 1 & 63 : 31 & e[0];
                        (k && (40 == t || 39 == t) || !0 !== k && "true" !== k && t === ye) && postMessage({
                            cmd: "videoSEI",
                            buffer: e,
                            ts: r
                        }, [e.buffer])
                    })
                },
                calcNetworkDelay: function (e) {
                    var t, r, i;
                    m && 0 < e && (null === y ? (y = e, v = Y()) : e < y && (D.debug.warn("worker", "calcNetworkDelay, dts is ".concat(e, " less than bufferStartDts is ").concat(y)), y = e, v = Y()), t = e - y, r = Y() - v, (D.networkDelay = i = t < r ? r - t : 0) > D._opt.networkDelay && D._opt.playType === re && (D.debug.warn("worker", "calcNetworkDelay now dts:".concat(e, ", start dts is ").concat(y, " vs start is ").concat(t, ",local diff is ").concat(r, " ,delay is ").concat(i)), postMessage({
                        cmd: O,
                        type: "networkDelayTimeout",
                        value: i
                    })))
                },
                calcIframeIntervalTimestamp: function (e) {
                    null === r ? r = e : r < e && (E = e - r, postMessage({cmd: "iframeIntervalTs", value: E}), r = e)
                },
                canVisibilityDecodeNotDrop: function () {
                    return D._opt.visibility && h * c <= 2073600
                },
                isPlaybackCacheBeforeDecodeForFpsRender: function () {
                    return D.isPlayback && D._opt.playbackIsCacheBeforeDecodeForFpsRender
                },
                isPlaybackOnlyDecodeIFrame: function () {
                    return D._opt.playbackRate >= D._opt.playbackForwardMaxRateDecodeIFrame
                },
                playbackUpdatePlaybackRate: function () {
                    D.clearBuffer(!0)
                },
                isVideoSequenceHeader: function (e) {
                    return e[0] >> 4 == 1 && e[1] === Ee
                },
                onOffscreenCanvasWebglContextLost: function (e) {
                    D.debug.error("worker", "handleOffscreenCanvasWebglContextLost and next try to create webgl"), e.preventDefault(), T = !0, D.webglObj.destroy(), D.webglObj = null, D.offscreenCanvasGL = null, setTimeout(function () {
                        D.offscreenCanvasGL = D.offscreenCanvas.getContext("webgl"), D.offscreenCanvasGL && D.offscreenCanvasGL.getContextAttributes().stencil ? (D.webglObj = ee(D.offscreenCanvasGL, D._opt.openWebglAlignment), T = !1) : D.debug.error("worker", "handleOffscreenCanvasWebglContextLost, stencil is false")
                    }, 500)
                },
                onOffscreenCanvasWebglContextRestored: function (e) {
                    D.debug.log("worker", "handleOffscreenCanvasWebglContextRestored"), e.preventDefault()
                },
                videoInfo: function (e, t, r) {
                    postMessage({cmd: ae, code: e}), postMessage({
                        cmd: se,
                        w: t,
                        h: r
                    }), h = t, c = r, D.useOffscreen() && (D.offscreenCanvas = new OffscreenCanvas(t, r), D.offscreenCanvasGL = D.offscreenCanvas.getContext("webgl"), D.webglObj = ee(D.offscreenCanvasGL, D._opt.openWebglAlignment), D.offscreenCanvas.addEventListener("webglcontextlost", D.onOffscreenCanvasWebglContextLost, !1), D.offscreenCanvas.addEventListener("webglcontextrestored", D.onOffscreenCanvasWebglContextRestored, !1))
                },
                audioInfo: function (e, t, r) {
                    postMessage({cmd: "audioCode", code: e}), postMessage({
                        cmd: "initAudio",
                        sampleRate: t,
                        channels: r
                    }), U = r
                },
                yuvData: function (e, t) {
                    if (D.isDestroyed) D.debug.log("worker", "yuvData, decoder is destroyed and return"); else {
                        var r, i = h * c * 3 / 2, e = d.HEAPU8.subarray(e, e + i), i = new Uint8Array(e);
                        if (w = null, D.useOffscreen()) try {
                            T || (D.webglObj.renderYUV(h, c, i), r = D.offscreenCanvas.transferToImageBitmap(), postMessage({
                                cmd: N,
                                buffer: r,
                                delay: D.delay,
                                ts: t
                            }, [r]))
                        } catch (e) {
                            D.debug.error("worker", "yuvData, transferToImageBitmap error is", e)
                        } else postMessage({cmd: N, output: i, delay: D.delay, ts: t}, [i.buffer])
                    }
                },
                pcmData: function (e, t, r) {
                    if (D.isDestroyed) D.debug.log("worker", "pcmData, decoder is destroyed and return"); else {
                        for (var i = t, n = [], s = 0, o = D._opt.audioBufferSize, a = 0; a < 2; a++) {
                            var l = d.HEAPU32[(e >> 2) + a] >> 2;
                            n[a] = d.HEAPF32.subarray(l, l + i)
                        }
                        if (S) {
                            if (!(i >= (t = o - S))) return S += i, u[0] = Float32Array.of.apply(Float32Array, V(u[0]).concat(V(n[0]))), void (2 == U && (u[1] = Float32Array.of.apply(Float32Array, V(u[1]).concat(V(n[1])))));
                            b[0] = Float32Array.of.apply(Float32Array, V(u[0]).concat(V(n[0].subarray(0, t)))), 2 == U && (b[1] = Float32Array.of.apply(Float32Array, V(u[1]).concat(V(n[1].subarray(0, t))))), postMessage({
                                cmd: oe,
                                buffer: b,
                                ts: r
                            }, b.map(function (e) {
                                return e.buffer
                            })), i -= s = t
                        }
                        for (S = i; o <= S; S -= o) b[0] = n[0].slice(s, s += o), 2 == U && (b[1] = n[1].slice(s - o, s)), postMessage({
                            cmd: oe,
                            buffer: b,
                            ts: r
                        }, b.map(function (e) {
                            return e.buffer
                        }));
                        S && (u[0] = n[0].slice(s), 2 == U && (u[1] = n[1].slice(s)))
                    }
                },
                errorInfo: function (e) {
                    null === w && (w = Y());
                    var t = Y(),
                        r = (r = 0 < E ? 2 * E : 5e3, Math.max(Math.min(r, Math.max(1e3, 5e3)), Math.min(1e3, 5e3))),
                        t = t - w;
                    D.debug.log("worker", "errorInfo()", "iframeIntervalTimestamp is", E, "diff is ", t, "max diff is ", r, "wasm decode error:", e.desc), r < t && (D.debug.warn("worker", "errorInfo() emit simdDecodeError and replay"), M = !0, postMessage({cmd: "simdDecodeError"}))
                },
                sendWebsocketMessage: function (e) {
                    a ? 1 === a.readyState ? a.send(e) : D.debug.error("worker", "socket is not open") : D.debug.error("worker", "socket is null")
                },
                timeEnd: function () {
                    D.debug.error("worker", "jessibuca pro 体验结束,请刷新页面再次体验，如需要购买商业授权，可以联系微信：bosswancheng"), D.close(), postMessage({cmd: de})
                },
                postStreamToMain: function (e, t) {
                    postMessage({cmd: "tempStream", type: t, buffer: e}, [e.buffer])
                }
            }, P = (D.debug = new ke(D), null), L = (d.AudioDecoder && (P = new d.AudioDecoder(D)), null);
        d.VideoDecoder && (L = new d.VideoDecoder(D)), postMessage({cmd: "init"}), self.onmessage = function (e) {
            var t = e.data;
            switch (t.cmd) {
                case"init":
                    try {
                        D._opt = Object.assign(D._opt, JSON.parse(t.opt))
                    } catch (e) {
                    }
                    D.init();
                    break;
                case"decode":
                    D.pushBuffer(t.buffer, t.options);
                    break;
                case"audioDecode":
                    D.decodeAudio(t.buffer, t.ts);
                    break;
                case"videoDecode":
                    D.decodeVideo(t.buffer, t.ts, t.isIFrame);
                    break;
                case"clearBuffer":
                    D.clearBuffer(t.needClear);
                    break;
                case"fetchStream":
                    D.fetchStream(t.url, JSON.parse(t.opt));
                    break;
                case"close":
                    D.close();
                    break;
                case"updateConfig":
                    D.debug.log("worker", "updateConfig", t.key, t.value), D._opt[t.key] = t.value, "playbackRate" === t.key && (D.playbackUpdatePlaybackRate(), D.isPlaybackCacheBeforeDecodeForFpsRender() && D.playbackCacheLoop());
                    break;
                case"sendWsMessage":
                    D.sendWebsocketMessage(t.message)
            }
        }
    }

    Date.now || (Date.now = function () {
        return (new Date).getTime()
    }), E.postRun = function () {
        St(E)
    }
});
