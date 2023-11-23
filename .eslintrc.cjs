module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['src/lib/i18n/*.ts'],
    overrides: [
        {
            files: ['**/*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte'],
        project: './tsconfig.json',
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.cjs', '.js', '.ts', '.svelte'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'no-console': ['off'],
        semi: ['off'],
        'import/no-mutable-exports': 0,
        'import/prefer-default-export': 0,
    },
}
