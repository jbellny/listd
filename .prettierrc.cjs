module.exports = {
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: "es5",
    tabWidth: 4,
    printWidth: 100,
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
    tailwindConfig: './tailwind.config.ts',
    pluginSearchDirs: ["."],
    endOfLine: "auto",
    overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
