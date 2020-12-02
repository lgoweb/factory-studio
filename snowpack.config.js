/** @type {import("snowpack").SnowpackUserConfig } */
const path = require("path");
module.exports = {
    mount: {
        public: "/",
        src: "/_dist_",
    },
    plugins: [
        "@snowpack/plugin-vue",
        "@snowpack/plugin-sass",
        "@snowpack/plugin-vue/plugin-tsx-jsx.js",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-postcss", [
            "@snowpack/plugin-webpack",
            {
                __VUE_OPTIONS_API__: true,
                //   htmlMinifierOptions: false, // disabled entirely,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
        ],
    ],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
        "@": "./src",
    },
};