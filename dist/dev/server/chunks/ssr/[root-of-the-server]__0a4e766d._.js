module.exports = [
"[project]/folio-frontend/src/components/Navbar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "center": "Navbar-module__MvLIuG__center",
  "divider": "Navbar-module__MvLIuG__divider",
  "dot": "Navbar-module__MvLIuG__dot",
  "fpsLabel": "Navbar-module__MvLIuG__fpsLabel",
  "fpsValue": "Navbar-module__MvLIuG__fpsValue",
  "left": "Navbar-module__MvLIuG__left",
  "logo": "Navbar-module__MvLIuG__logo",
  "logoGlow": "Navbar-module__MvLIuG__logoGlow",
  "logoLink": "Navbar-module__MvLIuG__logoLink",
  "logoWrapper": "Navbar-module__MvLIuG__logoWrapper",
  "mobileMenu": "Navbar-module__MvLIuG__mobileMenu",
  "mobileMenuBtn": "Navbar-module__MvLIuG__mobileMenuBtn",
  "mobileNavLink": "Navbar-module__MvLIuG__mobileNavLink",
  "nav": "Navbar-module__MvLIuG__nav",
  "navLink": "Navbar-module__MvLIuG__navLink",
  "navLinks": "Navbar-module__MvLIuG__navLinks",
  "offline": "Navbar-module__MvLIuG__offline",
  "online": "Navbar-module__MvLIuG__online",
  "onlineStatus": "Navbar-module__MvLIuG__onlineStatus",
  "pulse": "Navbar-module__MvLIuG__pulse",
  "right": "Navbar-module__MvLIuG__right",
  "slideDown": "Navbar-module__MvLIuG__slideDown",
  "statusIndicator": "Navbar-module__MvLIuG__statusIndicator",
  "statusText": "Navbar-module__MvLIuG__statusText",
});
}),
"[project]/folio-frontend/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/Navbar.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function Navbar() {
    const [fps, setFps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // FPS counter with throttling
        let frameCount = 0;
        let startTime = performance.now();
        let request;
        let lastFpsUpdate = 0;
        const updateFPS = ()=>{
            frameCount++;
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            // Update FPS every 500ms instead of every second for smoother display
            if (elapsed >= 500) {
                const newFps = Math.round(frameCount * 1000 / elapsed);
                // Only update if significantly different to reduce re-renders
                if (Math.abs(newFps - lastFpsUpdate) > 2) {
                    setFps(Math.min(newFps, 144)); // Cap at 144 for display
                    lastFpsUpdate = newFps;
                }
                frameCount = 0;
                startTime = currentTime;
            }
            request = requestAnimationFrame(updateFPS);
        };
        request = requestAnimationFrame(updateFPS);
        // Online status
        const handleOnline = ()=>setIsOnline(true);
        const handleOffline = ()=>setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return ()=>{
            cancelAnimationFrame(request);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    const navLinks = [
        {
            href: '#projects',
            label: 'Projects'
        },
        {
            href: '#services',
            label: 'Services'
        },
        {
            href: '#ai-lab',
            label: 'AI Lab'
        },
        {
            href: '#music',
            label: 'Music',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"]
        },
        {
            href: '#contact',
            label: 'Contact'
        }
    ];
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        if (href === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        setMobileMenuOpen(false);
    };
    const handleLogoClick = (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].left,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusIndicator,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot} ${isOnline ? __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].online : __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offline}`
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusText,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fpsValue,
                                            children: fps
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fpsLabel,
                                            children: "FPS"
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider,
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].onlineStatus,
                                            children: isOnline ? 'ONLINE' : 'OFFLINE'
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoLink,
                            onClick: handleLogoClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "./logo.png",
                                        alt: "Danuzz",
                                        width: 45,
                                        height: 45,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoGlow
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].right,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinks,
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                        onClick: (e)=>handleNavClick(e, link.href),
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileMenuBtn,
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                "aria-label": "Toggle menu",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileMenu,
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileNavLink,
                        onClick: (e)=>handleNavClick(e, link.href),
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/components/Navbar.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/folio-frontend/src/components/Hero3D.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "Hero3D-module__A3-Q2W__badge",
  "canvasContainer": "Hero3D-module__A3-Q2W__canvasContainer",
  "hero": "Hero3D-module__A3-Q2W__hero",
  "meshRotate": "Hero3D-module__A3-Q2W__meshRotate",
  "overlay": "Hero3D-module__A3-Q2W__overlay",
  "subtitle": "Hero3D-module__A3-Q2W__subtitle",
  "title": "Hero3D-module__A3-Q2W__title",
});
}),
"[project]/folio-frontend/src/components/Hero3D.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@react-three/drei/core/Float.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@react-three/drei/core/ContactShadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/Hero3D.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function WireframeObject() {
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        if (!groupRef.current) return;
        // Skip frames for performance (render every 2nd frame)
        frameCount.current++;
        if (frameCount.current % 2 !== 0) return;
        groupRef.current.rotation.y += 0.003;
        // Smoothly follow mouse with simple lerp
        const targetX = state.mouse.y * Math.PI / 12;
        const targetY = state.mouse.x * Math.PI / 12;
        groupRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.x, targetX, 0.03);
        groupRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.y, targetY, 0.03);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
        speed: 1.5,
        rotationIntensity: 0.1,
        floatIntensity: 0.3,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                            args: [
                                2.5,
                                1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#00ff00",
                            wireframe: true,
                            transparent: true,
                            opacity: 0.3
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    scale: [
                        0.95,
                        0.95,
                        0.95
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                            args: [
                                2.5,
                                1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 47,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#040406"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 48,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function Hero3D() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        // Initial entrance animation
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        tl.from(textRef.current.children, {
            y: 80,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: "expo.out",
            delay: 0.2
        });
        tl.fromTo(canvasWrapperRef.current, {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");
        // Scrollytelling - fade and scale out text, zoom 3D object
        const scrollTl = __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: 1,
                pin: true
            }
        });
        scrollTl.to(textRef.current, {
            y: -100,
            opacity: 0,
            scale: 0.9,
            ease: "none",
            duration: 1
        }, 0);
        scrollTl.to(canvasWrapperRef.current, {
            scale: 1.5,
            y: 100,
            opacity: 0.3,
            ease: "none",
            duration: 1
        }, 0);
    }, {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].canvasContainer,
                ref: canvasWrapperRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            7
                        ],
                        fov: 50
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 0.5
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                            position: [
                                10,
                                10,
                                10
                            ],
                            angle: 0.15,
                            penumbra: 1,
                            intensity: 1,
                            castShadow: true
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                            preset: "city"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WireframeObject, {}, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactShadows"], {
                            position: [
                                0,
                                -3,
                                0
                            ],
                            opacity: 0.6,
                            scale: 15,
                            blur: 2.5,
                            far: 4,
                            color: "#00ff00"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                ref: textRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: "SYSTEM_IDENTIFIER // NEURAL_MONK"
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient",
                                children: "Architecting"
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            " the",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                                lineNumber: 126,
                                columnNumber: 66
                            }, this),
                            " Digital Future"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Premium Full-Stack Developer & AI Specialist crafting cinematic wireframe experiences with high-end motion design."
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/folio-frontend/src/components/Hero3D.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/AboutSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "AboutSection-module__koewlq__badge",
  "bio": "AboutSection-module__koewlq__bio",
  "bioText": "AboutSection-module__koewlq__bioText",
  "container": "AboutSection-module__koewlq__container",
  "cta": "AboutSection-module__koewlq__cta",
  "ctaBtn": "AboutSection-module__koewlq__ctaBtn",
  "header": "AboutSection-module__koewlq__header",
  "section": "AboutSection-module__koewlq__section",
  "skillCard": "AboutSection-module__koewlq__skillCard",
  "skillIcon": "AboutSection-module__koewlq__skillIcon",
  "skillItem": "AboutSection-module__koewlq__skillItem",
  "skillList": "AboutSection-module__koewlq__skillList",
  "skillName": "AboutSection-module__koewlq__skillName",
  "skills": "AboutSection-module__koewlq__skills",
  "stat": "AboutSection-module__koewlq__stat",
  "statLabel": "AboutSection-module__koewlq__statLabel",
  "statValue": "AboutSection-module__koewlq__statValue",
  "stats": "AboutSection-module__koewlq__stats",
  "subtitle": "AboutSection-module__koewlq__subtitle",
  "title": "AboutSection-module__koewlq__title",
});
}),
"[project]/folio-frontend/src/components/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/AboutSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const STATS = [
    {
        value: "5+",
        label: "Years Experience"
    },
    {
        value: "50+",
        label: "Projects Completed"
    },
    {
        value: "20+",
        label: "Technologies"
    },
    {
        value: "100%",
        label: "Commitment"
    }
];
const SKILLS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        name: "Frontend",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
        name: "Backend",
        items: [
            "Node.js",
            "Python",
            "Django",
            "FastAPI"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        name: "AI & ML",
        items: [
            "TensorFlow",
            "PyTorch",
            "OpenAI",
            "LLMs"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        name: "DevOps",
        items: [
            "Docker",
            "AWS",
            "CI/CD",
            "PostgreSQL"
        ]
    }
];
function AboutSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-content", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".stat-item", {
            scrollTrigger: {
                trigger: ".stats-grid",
                start: "top 80%"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".skill-card", {
            scrollTrigger: {
                trigger: ".skills-grid",
                start: "top 80%"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".photo-container", {
            scrollTrigger: {
                trigger: ".photo-container",
                start: "top 80%"
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `about-content ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                            children: "ABOUT ME"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Danuzz"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Full-Stack Developer & AI Specialist"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `photo-container ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoSection}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "./photo.jpg",
                                        alt: "Danuzz",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photo
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoGlow
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoRing
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `stats-grid ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats}`,
                                    children: STATS.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `stat-item ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `about-content ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bio}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Building digital experiences that matter. I craft scalable applications with modern tech stacks and AI integration."
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Based in Nepal, working globally."
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `skills-grid ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skills}`,
                                    children: SKILLS.map((skill, idx)=>{
                                        const IconComponent = skill.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `skill-card ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillCard}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        size: 28
                                                    }, void 0, false, {
                                                        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 55
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillName,
                                                    children: skill.name
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillList,
                                                    children: skill.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 66
                                                                }, this),
                                                                item
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `about-content ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cta}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaBtn,
                        children: [
                            "Let's Work Together ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                                lineNumber: 100,
                                columnNumber: 81
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/folio-frontend/src/components/AboutSection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/ProjectsSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ProjectsSection-module__MQyIiq__badge",
  "btnPrimary": "ProjectsSection-module__MQyIiq__btnPrimary",
  "btnSecondary": "ProjectsSection-module__MQyIiq__btnSecondary",
  "ghIcon": "ProjectsSection-module__MQyIiq__ghIcon",
  "githubCard": "ProjectsSection-module__MQyIiq__githubCard",
  "githubContent": "ProjectsSection-module__MQyIiq__githubContent",
  "githubGrid": "ProjectsSection-module__MQyIiq__githubGrid",
  "githubSlide": "ProjectsSection-module__MQyIiq__githubSlide",
  "header": "ProjectsSection-module__MQyIiq__header",
  "imageOverlay": "ProjectsSection-module__MQyIiq__imageOverlay",
  "imageWrapper": "ProjectsSection-module__MQyIiq__imageWrapper",
  "introSlide": "ProjectsSection-module__MQyIiq__introSlide",
  "lang": "ProjectsSection-module__MQyIiq__lang",
  "loaderContainer": "ProjectsSection-module__MQyIiq__loaderContainer",
  "projectDesc": "ProjectsSection-module__MQyIiq__projectDesc",
  "projectImage": "ProjectsSection-module__MQyIiq__projectImage",
  "projectInfo": "ProjectsSection-module__MQyIiq__projectInfo",
  "projectLinks": "ProjectsSection-module__MQyIiq__projectLinks",
  "projectNumber": "ProjectsSection-module__MQyIiq__projectNumber",
  "projectSlide": "ProjectsSection-module__MQyIiq__projectSlide",
  "projectTitle": "ProjectsSection-module__MQyIiq__projectTitle",
  "repoStats": "ProjectsSection-module__MQyIiq__repoStats",
  "section": "ProjectsSection-module__MQyIiq__section",
  "slideSubtitle": "ProjectsSection-module__MQyIiq__slideSubtitle",
  "slideTitle": "ProjectsSection-module__MQyIiq__slideTitle",
  "spin": "ProjectsSection-module__MQyIiq__spin",
  "spinner": "ProjectsSection-module__MQyIiq__spinner",
  "techBadge": "ProjectsSection-module__MQyIiq__techBadge",
  "techStack": "ProjectsSection-module__MQyIiq__techStack",
  "title": "ProjectsSection-module__MQyIiq__title",
  "track": "ProjectsSection-module__MQyIiq__track",
  "trackContainer": "ProjectsSection-module__MQyIiq__trackContainer",
});
}),
"[project]/folio-frontend/src/components/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/ProjectsSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// Static projects data - works without backend
const STATIC_PROJECTS = [
    {
        id: 1,
        title: 'Neural Engine Core',
        description: 'Advanced trading engine utilizing Transformer architectures for predictive market analysis and real-time decision making.',
        tech_list: [
            'Python',
            'PyTorch',
            'Next.js',
            'FastAPI'
        ],
        link: '#',
        github_link: 'https://github.com/pa-nuzz',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Synthetic Vision',
        description: 'Computer vision pipeline for autonomous robotics, rendering environment maps in real-time with depth estimation.',
        tech_list: [
            'C++',
            'CUDA',
            'OpenCV',
            'TensorRT'
        ],
        link: '#',
        github_link: 'https://github.com/pa-nuzz',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Quantum Ledger',
        description: 'Post-quantum cryptographic blockchain implementation focused on zero-knowledge proofs and smart contracts.',
        tech_list: [
            'Rust',
            'WebAssembly',
            'Solidity',
            'Substrate'
        ],
        link: '#',
        github_link: 'https://github.com/pa-nuzz',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'AI Portfolio Suite',
        description: 'Full-stack portfolio platform with AI chatbot, resume analysis, and OCR capabilities built with Next.js.',
        tech_list: [
            'Next.js',
            'TypeScript',
            'OpenAI',
            'Tailwind'
        ],
        link: '#',
        github_link: 'https://github.com/pa-nuzz/folio-django',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
    }
];
function ProjectsSection() {
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(STATIC_PROJECTS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const djangoUrl = ("TURBOPACK compile-time value", "http://localhost:8000");
                // Only try backend if URL is configured
                if ("TURBOPACK compile-time truthy", 1) {
                    const res = await fetch(`${djangoUrl}/api/projects/`, {
                        signal: AbortSignal.timeout(3000)
                    }).catch(()=>null);
                    if (res && res.ok) {
                        const pData = await res.json();
                        if (Array.isArray(pData) && pData.length > 0) {
                            setProjects(pData);
                        }
                    }
                }
            } catch (error) {
                console.log("[INFO] Using static projects data");
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (loading || !trackRef.current || !sectionRef.current) return;
        const track = trackRef.current;
        const container = containerRef.current;
        if (!container) return;
        // Calculate scrollable width
        const scrollWidth = track.scrollWidth - container.offsetWidth;
        if (scrollWidth > 0 && window.innerWidth > 768) {
            // Use container's scroll instead of page scroll
            container.addEventListener('wheel', (e)=>{
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                    // Already horizontal scrolling
                    return;
                }
                e.preventDefault();
                const currentTransform = __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].getProperty(track, 'x');
                const newX = Math.max(-scrollWidth, Math.min(0, currentTransform - e.deltaY));
                __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(track, {
                    x: newX,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }, {
                passive: false
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".section-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }, {
        scope: sectionRef,
        dependencies: [
            loading
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `section-header ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: "FEATURED PROJECTS"
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Dynamic ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient",
                                children: "Architectures"
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                lineNumber: 138,
                                columnNumber: 46
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Engineering high-performance neural solutions for the modern web."
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading projects..."
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trackContainer,
                ref: containerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].track,
                    ref: trackRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introSlide,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideTitle,
                                    children: "Architecting at scale."
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideSubtitle,
                                    children: "Scroll to explore systems, AI models, and full-stack platforms."
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectSlide,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.image,
                                                alt: project.title,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectImage
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageOverlay
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectNumber,
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectTitle,
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectDesc,
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].techStack,
                                                children: project.tech_list.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].techBadge,
                                                        children: tech
                                                    }, tech, false, {
                                                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectLinks,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimary,
                                                        children: [
                                                            "Live Demo ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.github_link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSecondary,
                                                        children: [
                                                            "Source ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/folio-frontend/src/components/ProjectsSection.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/GithubSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "GithubSection-module__15yZcW__badge",
  "finalSlide": "GithubSection-module__15yZcW__finalSlide",
  "header": "GithubSection-module__15yZcW__header",
  "introIcon": "GithubSection-module__15yZcW__introIcon",
  "introSlide": "GithubSection-module__15yZcW__introSlide",
  "introStat": "GithubSection-module__15yZcW__introStat",
  "introStats": "GithubSection-module__15yZcW__introStats",
  "loaderContainer": "GithubSection-module__15yZcW__loaderContainer",
  "repoCard": "GithubSection-module__15yZcW__repoCard",
  "repoCardHover": "GithubSection-module__15yZcW__repoCardHover",
  "repoContent": "GithubSection-module__15yZcW__repoContent",
  "repoDesc": "GithubSection-module__15yZcW__repoDesc",
  "repoHeader": "GithubSection-module__15yZcW__repoHeader",
  "repoIcon": "GithubSection-module__15yZcW__repoIcon",
  "repoImage": "GithubSection-module__15yZcW__repoImage",
  "repoImageContainer": "GithubSection-module__15yZcW__repoImageContainer",
  "repoImageOverlay": "GithubSection-module__15yZcW__repoImageOverlay",
  "repoLink": "GithubSection-module__15yZcW__repoLink",
  "repoName": "GithubSection-module__15yZcW__repoName",
  "repoNumber": "GithubSection-module__15yZcW__repoNumber",
  "repoSlide": "GithubSection-module__15yZcW__repoSlide",
  "repoStats": "GithubSection-module__15yZcW__repoStats",
  "section": "GithubSection-module__15yZcW__section",
  "slideSubtitle": "GithubSection-module__15yZcW__slideSubtitle",
  "slideTitle": "GithubSection-module__15yZcW__slideTitle",
  "spin": "GithubSection-module__15yZcW__spin",
  "spinner": "GithubSection-module__15yZcW__spinner",
  "stat": "GithubSection-module__15yZcW__stat",
  "statLabel": "GithubSection-module__15yZcW__statLabel",
  "statValue": "GithubSection-module__15yZcW__statValue",
  "subtitle": "GithubSection-module__15yZcW__subtitle",
  "title": "GithubSection-module__15yZcW__title",
  "track": "GithubSection-module__15yZcW__track",
  "trackContainer": "GithubSection-module__15yZcW__trackContainer",
  "viewAllLink": "GithubSection-module__15yZcW__viewAllLink",
});
}),
"[project]/folio-frontend/src/components/GithubSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GithubSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-ssr] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/GithubSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// Static repos with images
const STATIC_REPOS = [
    {
        name: 'folio-django',
        description: 'Full-stack portfolio platform with AI chatbot, resume analysis, and OCR capabilities built with Next.js and Django.',
        html_url: 'https://github.com/pa-nuzz/folio-django',
        stargazers_count: 12,
        forks_count: 3,
        language: 'TypeScript',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
    },
    {
        name: 'neural-engine',
        description: 'Advanced AI/ML engine utilizing Transformer architectures for predictive analysis and real-time decision making.',
        html_url: 'https://github.com/pa-nuzz',
        stargazers_count: 24,
        forks_count: 7,
        language: 'Python',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop'
    },
    {
        name: 'vision-ocr',
        description: 'Computer vision pipeline for text extraction and image analysis with Tesseract.js and OpenAI integration.',
        html_url: 'https://github.com/pa-nuzz',
        stargazers_count: 18,
        forks_count: 5,
        language: 'JavaScript',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop'
    },
    {
        name: 'quantum-ledger',
        description: 'Post-quantum cryptographic implementation focused on zero-knowledge proofs and smart contracts.',
        html_url: 'https://github.com/pa-nuzz',
        stargazers_count: 31,
        forks_count: 12,
        language: 'Rust',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
    }
];
function GithubSection() {
    const [repos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(STATIC_REPOS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredRepo, setHoveredRepo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simulate loading for smooth animation
        const timer = setTimeout(()=>setLoading(false), 500);
        return ()=>clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (loading || !trackRef.current || !sectionRef.current) return;
        const track = trackRef.current;
        const scrollWidth = track.scrollWidth - window.innerWidth;
        if (scrollWidth > 0 && window.innerWidth > 768) {
            __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(track, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: ()=>`+=${scrollWidth}`,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
        }
        // Reveal Header
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".github-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        // Reveal cards
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".repo-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%"
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, {
        scope: sectionRef,
        dependencies: [
            loading
        ]
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "github",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
            ref: sectionRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Connecting to GitHub..."
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "github",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `github-header ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            "OPEN SOURCE // v2.0"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Code ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient",
                                children: "Arsenal"
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                lineNumber: 141,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Neural repositories and experimental prototypes."
                    }, void 0, false, {
                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trackContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].track,
                    ref: trackRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introSlide,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        size: 64
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideTitle,
                                    children: "Code that ships."
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideSubtitle,
                                    children: "Scroll to explore repositories, experiments, and open-source contributions."
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introStats,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introStat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        repos.length,
                                                        "+ Repos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introStat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Production Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        repos.map((repo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `repo-card ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoSlide}`,
                                onMouseEnter: ()=>setHoveredRepo(i),
                                onMouseLeave: ()=>setHoveredRepo(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoCard} ${hoveredRepo === i ? __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoCardHover : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoImageContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: repo.image,
                                                    alt: repo.name,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoImage
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoImageOverlay
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoNumber,
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoContent,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoHeader,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoIcon,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoName,
                                                            children: repo.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoDesc,
                                                    children: repo.description
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoStats,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                                    children: "LANGUAGE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                                    children: repo.language || "TypeScript"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " STARS"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                                    children: repo.stargazers_count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " FORKS"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                                    children: repo.forks_count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: repo.html_url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repoLink,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Explore Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finalSlide,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/pa-nuzz",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewAllLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        size: 40
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View All Repositories"
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/folio-frontend/src/components/GithubSection.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/MusicSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "appleIcon": "MusicSection-module__z1KbBG__appleIcon",
  "appleLink": "MusicSection-module__z1KbBG__appleLink",
  "appleTheme": "MusicSection-module__z1KbBG__appleTheme",
  "artistCard": "MusicSection-module__z1KbBG__artistCard",
  "artistGenre": "MusicSection-module__z1KbBG__artistGenre",
  "artistImage": "MusicSection-module__z1KbBG__artistImage",
  "artistImageWrapper": "MusicSection-module__z1KbBG__artistImageWrapper",
  "artistInfo": "MusicSection-module__z1KbBG__artistInfo",
  "artistName": "MusicSection-module__z1KbBG__artistName",
  "artistOverlay": "MusicSection-module__z1KbBG__artistOverlay",
  "artistStats": "MusicSection-module__z1KbBG__artistStats",
  "artistsGrid": "MusicSection-module__z1KbBG__artistsGrid",
  "backgroundGlow": "MusicSection-module__z1KbBG__backgroundGlow",
  "badge": "MusicSection-module__z1KbBG__badge",
  "container": "MusicSection-module__z1KbBG__container",
  "dot": "MusicSection-module__z1KbBG__dot",
  "embedContainer": "MusicSection-module__z1KbBG__embedContainer",
  "equalizer": "MusicSection-module__z1KbBG__equalizer",
  "header": "MusicSection-module__z1KbBG__header",
  "platformCard": "MusicSection-module__z1KbBG__platformCard",
  "platformHeader": "MusicSection-module__z1KbBG__platformHeader",
  "platformIcon": "MusicSection-module__z1KbBG__platformIcon",
  "platformInfo": "MusicSection-module__z1KbBG__platformInfo",
  "platformLink": "MusicSection-module__z1KbBG__platformLink",
  "platformName": "MusicSection-module__z1KbBG__platformName",
  "platformStatus": "MusicSection-module__z1KbBG__platformStatus",
  "platformSubtitle": "MusicSection-module__z1KbBG__platformSubtitle",
  "playButton": "MusicSection-module__z1KbBG__playButton",
  "playlistArtwork": "MusicSection-module__z1KbBG__playlistArtwork",
  "playlistCard": "MusicSection-module__z1KbBG__playlistCard",
  "playlistIcon": "MusicSection-module__z1KbBG__playlistIcon",
  "playlistInfo": "MusicSection-module__z1KbBG__playlistInfo",
  "playlistMeta": "MusicSection-module__z1KbBG__playlistMeta",
  "playlistName": "MusicSection-module__z1KbBG__playlistName",
  "playlistPlay": "MusicSection-module__z1KbBG__playlistPlay",
  "playlistsGrid": "MusicSection-module__z1KbBG__playlistsGrid",
  "pulse": "MusicSection-module__z1KbBG__pulse",
  "section": "MusicSection-module__z1KbBG__section",
  "sparkle": "MusicSection-module__z1KbBG__sparkle",
  "spin": "MusicSection-module__z1KbBG__spin",
  "spinning": "MusicSection-module__z1KbBG__spinning",
  "spotifyLink": "MusicSection-module__z1KbBG__spotifyLink",
  "spotifyTheme": "MusicSection-module__z1KbBG__spotifyTheme",
  "statusBar": "MusicSection-module__z1KbBG__statusBar",
  "statusDivider": "MusicSection-module__z1KbBG__statusDivider",
  "statusItem": "MusicSection-module__z1KbBG__statusItem",
  "subtitle": "MusicSection-module__z1KbBG__subtitle",
  "title": "MusicSection-module__z1KbBG__title",
});
}),
"[project]/folio-frontend/src/components/MusicSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/disc.js [app-ssr] (ecmascript) <export default as Disc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/music-2.js [app-ssr] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/MusicSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SPOTIFY_ARTISTS = [
    {
        id: 1,
        name: 'The Weeknd',
        image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
        genre: 'R&B / Pop',
        popularity: 98
    },
    {
        id: 2,
        name: 'Drake',
        image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop',
        genre: 'Hip Hop / Rap',
        popularity: 97
    },
    {
        id: 3,
        name: 'Kanye West',
        image: 'https://images.unsplash.com/photo-1514525253361-bee8a48790c3?w=400&h=400&fit=crop',
        genre: 'Hip Hop',
        popularity: 95
    },
    {
        id: 4,
        name: 'Travis Scott',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        genre: 'Trap / Rap',
        popularity: 94
    }
];
const APPLE_PLAYLISTS = [
    {
        id: 1,
        name: 'chëmabu',
        tracks: 47,
        duration: '3h 12m',
        color: '#fa2d48'
    },
    {
        id: 2,
        name: 'Late Night Drive',
        tracks: 32,
        duration: '2h 8m',
        color: '#ff9500'
    },
    {
        id: 3,
        name: 'Coding Focus',
        tracks: 56,
        duration: '4h 20m',
        color: '#30d158'
    }
];
function MusicSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".music-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".spotify-card", {
            scrollTrigger: {
                trigger: ".platforms-grid",
                start: "top 70%"
            },
            x: -60,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".apple-card", {
            scrollTrigger: {
                trigger: ".platforms-grid",
                start: "top 70%"
            },
            x: 60,
            opacity: 0,
            duration: 1,
            delay: 0.4,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".artist-item", {
            scrollTrigger: {
                trigger: ".artists-grid",
                start: "top 80%"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".playlist-item", {
            scrollTrigger: {
                trigger: ".playlists-grid",
                start: "top 80%"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "music",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backgroundGlow
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `music-header ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    "SONIC VIBES // ACTIVE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    "My ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Soundtrack"
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "The beats that fuel my code. Top artists from Spotify and curated playlists from Apple Music."
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "platforms-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spotify-card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spotifyTheme}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        width: "32",
                                                        height: "32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformName,
                                                            children: "Spotify"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformSubtitle,
                                                            children: "Top Artists"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformStatus,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            size: 12,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulse
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Live"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `artists-grid ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistsGrid}`,
                                            children: SPOTIFY_ARTISTS.map((artist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `artist-item ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistCard}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistImageWrapper,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: artist.image,
                                                                    alt: artist.name,
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistImage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistOverlay,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playButton,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            size: 16,
                                                                            fill: "currentColor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistInfo,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistName,
                                                                    children: artist.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistGenre,
                                                                    children: artist.genre
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistStats,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                artist.popularity,
                                                                                "% match"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 108,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, artist.id, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://open.spotify.com/user/your-profile",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformLink} ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spotifyLink}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__["Disc"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                "Follow on Spotify",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "apple-card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appleTheme}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformIcon} ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appleIcon}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        width: "32",
                                                        height: "32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.197 10.197 0 00-1.564-.15c-.04-.002-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.22.28-.78.17-1.51.465-2.18.896-.89.578-1.53 1.33-1.89 2.31-.23.6-.35 1.22-.382 1.85-.006.153-.014.306-.014.46V17.99c.01.667.09 1.33.24 1.98.32 1.31 1.07 2.31 2.18 3.04.75.48 1.56.77 2.42.91.89.15 1.79.21 2.7.18.13-.01.26-.01.39-.01h11.7c.14 0 .28.01.42.02.86.06 1.71.01 2.55-.16.96-.18 1.87-.51 2.67-1.02.9-.58 1.54-1.35 1.89-2.34.23-.61.35-1.24.39-1.89.02-.26.03-.52.03-.79V6.874c-.01-.25-.02-.5-.04-.75z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformName,
                                                            children: "Apple Music"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformSubtitle,
                                                            children: "My Playlists"
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformStatus,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Lossless"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `playlists-grid ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistsGrid}`,
                                            children: APPLE_PLAYLISTS.map((playlist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `playlist-item ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistCard}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistArtwork,
                                                            style: {
                                                                background: `linear-gradient(135deg, ${playlist.color}20 0%, ${playlist.color}40 100%)`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistIcon,
                                                                style: {
                                                                    color: playlist.color
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                                                    size: 32
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistInfo,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistName,
                                                                    children: playlist.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistMeta,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                playlist.tracks,
                                                                                " tracks"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 158,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot,
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: playlist.duration
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playlistPlay,
                                                            style: {
                                                                background: playlist.color
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                size: 16,
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, playlist.id, true, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].embedContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                allow: "autoplay *; encrypted-media *; fullscreen *",
                                                frameBorder: "0",
                                                height: "180",
                                                style: {
                                                    width: '100%',
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                    borderRadius: '12px',
                                                    background: 'transparent'
                                                },
                                                sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
                                                src: "https://embed.music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2"
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platformLink} ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appleLink}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                "Listen on Apple Music",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__["Disc"], {
                                        size: 16,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinning
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Now Playing"
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusDivider
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].equalizer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 28
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Lossless Audio Active"
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusDivider
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Syncing Across Devices"
                                    }, void 0, false, {
                                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/folio-frontend/src/components/MusicSection.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/ServicesSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ServicesSection-module__w3fvPa__badge",
  "card": "ServicesSection-module__w3fvPa__card",
  "cardContent": "ServicesSection-module__w3fvPa__cardContent",
  "cardIcon": "ServicesSection-module__w3fvPa__cardIcon",
  "cardsContainer": "ServicesSection-module__w3fvPa__cardsContainer",
  "container": "ServicesSection-module__w3fvPa__container",
  "ctaBtn": "ServicesSection-module__w3fvPa__ctaBtn",
  "ctaCard": "ServicesSection-module__w3fvPa__ctaCard",
  "ctaContent": "ServicesSection-module__w3fvPa__ctaContent",
  "ctaText": "ServicesSection-module__w3fvPa__ctaText",
  "header": "ServicesSection-module__w3fvPa__header",
  "mainSubtitle": "ServicesSection-module__w3fvPa__mainSubtitle",
  "mainTitle": "ServicesSection-module__w3fvPa__mainTitle",
  "serviceDesc": "ServicesSection-module__w3fvPa__serviceDesc",
  "serviceTitle": "ServicesSection-module__w3fvPa__serviceTitle",
  "tag": "ServicesSection-module__w3fvPa__tag",
  "tagCloud": "ServicesSection-module__w3fvPa__tagCloud",
  "wrapper": "ServicesSection-module__w3fvPa__wrapper",
});
}),
"[project]/folio-frontend/src/components/ServicesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/ServicesSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SERVICES = [
    {
        id: 1,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Web Development",
        description: "Full-stack applications with React, Next.js, and modern frameworks.",
        tags: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        color: "#39ff14"
    },
    {
        id: 2,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "Backend Systems",
        description: "Scalable APIs and database architecture for high-performance apps.",
        tags: [
            "Python",
            "Django",
            "PostgreSQL",
            "FastAPI"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        color: "#00ff41"
    },
    {
        id: 3,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: "AI Integration",
        description: "Machine learning solutions and LLM integration for smart applications.",
        tags: [
            "OpenAI",
            "TensorFlow",
            "LLMs",
            "Automation"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        color: "#00d9ff"
    },
    {
        id: 4,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "DevOps & Cloud",
        description: "Deployment, CI/CD pipelines, and cloud infrastructure management.",
        tags: [
            "Docker",
            "AWS",
            "CI/CD",
            "Linux"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        color: "#ff9500"
    }
];
function ServicesSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".services-header", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".service-card", {
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 70%"
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `services-header ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                "WHAT I DO"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "End-to-end development solutions for modern businesses"
                        }, void 0, false, {
                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `services-grid ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].servicesGrid}`,
                    children: SERVICES.map((service)=>{
                        const IconComponent = service.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `service-card ${__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].serviceCard}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImageWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: service.image,
                                            alt: service.title,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImage
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardOverlay,
                                            style: {
                                                background: `linear-gradient(135deg, ${service.color}20 0%, transparent 100%)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                            style: {
                                                color: service.color
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                size: 28
                                            }, void 0, false, {
                                                fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDescription,
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTags,
                                            children: service.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                                    style: {
                                                        borderColor: service.color
                                                    },
                                                    children: tag
                                                }, idx, false, {
                                                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardGlow,
                                    style: {
                                        background: `radial-gradient(circle at 50% 0%, ${service.color}30 0%, transparent 70%)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, service.id, true, {
                            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cta,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaBtn,
                        children: [
                            "Start a Project ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                                lineNumber: 105,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/folio-frontend/src/components/ServicesSection.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/folio-frontend/src/components/ContactSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ContactSection-module__DXGP8q__badge",
  "cancelBtn": "ContactSection-module__DXGP8q__cancelBtn",
  "cautionBanner": "ContactSection-module__DXGP8q__cautionBanner",
  "closeBtn": "ContactSection-module__DXGP8q__closeBtn",
  "contactGrid": "ContactSection-module__DXGP8q__contactGrid",
  "container": "ContactSection-module__DXGP8q__container",
  "copy": "ContactSection-module__DXGP8q__copy",
  "downloadBtn": "ContactSection-module__DXGP8q__downloadBtn",
  "errorMsg": "ContactSection-module__DXGP8q__errorMsg",
  "footer": "ContactSection-module__DXGP8q__footer",
  "form": "ContactSection-module__DXGP8q__form",
  "formActions": "ContactSection-module__DXGP8q__formActions",
  "formContainer": "ContactSection-module__DXGP8q__formContainer",
  "formHeader": "ContactSection-module__DXGP8q__formHeader",
  "infoLabel": "ContactSection-module__DXGP8q__infoLabel",
  "infoSide": "ContactSection-module__DXGP8q__infoSide",
  "infoValue": "ContactSection-module__DXGP8q__infoValue",
  "inputGroup": "ContactSection-module__DXGP8q__inputGroup",
  "madeWith": "ContactSection-module__DXGP8q__madeWith",
  "quickContact": "ContactSection-module__DXGP8q__quickContact",
  "quickLink": "ContactSection-module__DXGP8q__quickLink",
  "revealArrow": "ContactSection-module__DXGP8q__revealArrow",
  "revealBtn": "ContactSection-module__DXGP8q__revealBtn",
  "revealHint": "ContactSection-module__DXGP8q__revealHint",
  "revealIcon": "ContactSection-module__DXGP8q__revealIcon",
  "revealSection": "ContactSection-module__DXGP8q__revealSection",
  "revealText": "ContactSection-module__DXGP8q__revealText",
  "section": "ContactSection-module__DXGP8q__section",
  "socialCard": "ContactSection-module__DXGP8q__socialCard",
  "socialDesc": "ContactSection-module__DXGP8q__socialDesc",
  "socialGrid": "ContactSection-module__DXGP8q__socialGrid",
  "socialHandle": "ContactSection-module__DXGP8q__socialHandle",
  "socialIcon": "ContactSection-module__DXGP8q__socialIcon",
  "socialInfo": "ContactSection-module__DXGP8q__socialInfo",
  "socialName": "ContactSection-module__DXGP8q__socialName",
  "socialSection": "ContactSection-module__DXGP8q__socialSection",
  "socialTitle": "ContactSection-module__DXGP8q__socialTitle",
  "socials": "ContactSection-module__DXGP8q__socials",
  "spin": "ContactSection-module__DXGP8q__spin",
  "spinner": "ContactSection-module__DXGP8q__spinner",
  "stripes": "ContactSection-module__DXGP8q__stripes",
  "submitBtn": "ContactSection-module__DXGP8q__submitBtn",
  "subtitle": "ContactSection-module__DXGP8q__subtitle",
  "successMsg": "ContactSection-module__DXGP8q__successMsg",
  "title": "ContactSection-module__DXGP8q__title",
});
}),
"[project]/folio-frontend/src/components/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/folio-frontend/src/components/ContactSection.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/folio-frontend/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/Hero3D.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/AboutSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/ProjectsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/GithubSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/MusicSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/ServicesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/src/components/ContactSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
// Register GSAP plugins once
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        // Global Scroll-Triggered Atmosphere - simplified
        __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("main", {
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            },
            "--bg-morph": "rgba(204, 255, 0, 0.02)",
            ease: "none"
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-black overflow-hidden selection:bg-[#ccff00] selection:text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
            }, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$Hero3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$GithubSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$MusicSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/folio-frontend/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/folio-frontend/src/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a4e766d._.js.map