module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/folio-frontend/src/app/api/github/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = 'force-static';
// Static GitHub repos data - no backend needed
const GITHUB_REPOS = [
    {
        name: 'folio-django',
        description: 'Industrial-grade portfolio backend with Django REST API, JWT auth, and AI integration endpoints.',
        html_url: 'https://github.com/pa-nuzz/folio-django',
        stargazers_count: 12,
        forks_count: 3,
        language: 'Python'
    },
    {
        name: 'neural-chat',
        description: 'Real-time AI chat interface with WebSocket support and context-aware responses.',
        html_url: 'https://github.com/pa-nuzz/neural-chat',
        stargazers_count: 8,
        forks_count: 2,
        language: 'TypeScript'
    },
    {
        name: 'vision-ocr',
        description: 'Computer vision pipeline for text extraction using Tesseract and OpenAI analysis.',
        html_url: 'https://github.com/pa-nuzz/vision-ocr',
        stargazers_count: 15,
        forks_count: 4,
        language: 'JavaScript'
    },
    {
        name: 'resume-scorer',
        description: 'AI-powered resume analysis tool with PDF parsing and skill extraction.',
        html_url: 'https://github.com/pa-nuzz/resume-scorer',
        stargazers_count: 22,
        forks_count: 7,
        language: 'Python'
    }
];
async function GET() {
    try {
        // Try to fetch from Django backend first
        const djangoUrl = ("TURBOPACK compile-time value", "http://localhost:8000");
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                const res = await fetch(`${djangoUrl}/api/github/`, {
                    cache: 'no-store',
                    headers: {
                        'Accept': 'application/json'
                    },
                    signal: AbortSignal.timeout(3000)
                });
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
                            headers: {
                                'Cache-Control': 'public, max-age=3600'
                            }
                        });
                    }
                }
            } catch  {
                console.log('[INFO] Django backend unavailable, using static data');
            }
        }
        // Fallback to static data
        return __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(GITHUB_REPOS, {
            headers: {
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        console.error("GitHub API Error:", error.message);
        // Always return static data on error
        return __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(GITHUB_REPOS);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b082ffb8._.js.map