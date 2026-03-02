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
"[project]/folio-frontend/src/app/api/spotify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/folio-frontend/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = 'force-static';
const revalidate = 3600;
// Top artists data - curated from the user's Spotify playlist
// This avoids complex auth flows and is more reliable
const TOP_ARTISTS = [
    {
        id: '1',
        name: 'The Weeknd',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5eb1c5db5e56295bec3e8f28196'
            }
        ],
        genres: [
            'r&b',
            'canadian pop',
            'pop'
        ],
        popularity: 95,
        followers: 75000000,
        url: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF0PJ'
    },
    {
        id: '2',
        name: 'Drake',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5eb9e3a11ed1c948b74c47b6925'
            }
        ],
        genres: [
            'rap',
            'hip hop',
            'pop rap'
        ],
        popularity: 96,
        followers: 82000000,
        url: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
    },
    {
        id: '3',
        name: 'Travis Scott',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5ebc4979417c6d8d6c5aa9b5bb2'
            }
        ],
        genres: [
            'rap',
            'hip hop',
            'trap'
        ],
        popularity: 93,
        followers: 32000000,
        url: 'https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY'
    },
    {
        id: '4',
        name: 'Kendrick Lamar',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5eb9ef86f448dfe2affd882ae23'
            }
        ],
        genres: [
            'conscious hip hop',
            'west coast rap',
            'rap'
        ],
        popularity: 91,
        followers: 35000000,
        url: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg'
    },
    {
        id: '5',
        name: 'Post Malone',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5ebe3c563f1cb5b2a3d4c3d3a4b'
            }
        ],
        genres: [
            'dfw rap',
            'melodic rap',
            'pop'
        ],
        popularity: 90,
        followers: 41000000,
        url: 'https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60'
    },
    {
        id: '6',
        name: 'Bad Bunny',
        images: [
            {
                url: 'https://i.scdn.co/image/ab6761610000e5eb8b3148a89b9e7d9c4e7f5b3c'
            }
        ],
        genres: [
            'reggaeton',
            'trap latino',
            'latin pop'
        ],
        popularity: 94,
        followers: 68000000,
        url: 'https://open.spotify.com/artist/4q3ewBCX7sLwd61euG9KP'
    }
];
async function GET() {
    try {
        // Return curated artist data directly - no auth needed
        // This is more reliable and faster than API calls
        return __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(TOP_ARTISTS, {
            headers: {
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
            }
        });
    } catch (error) {
        console.error('Spotify API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$folio$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(TOP_ARTISTS, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6df978a4._.js.map