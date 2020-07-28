export = {
    parser: '@typescript-eslint/parser',
    plugins: ['import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        complexity: 'off',
        curly: 'error',
        'default-case': 'off',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'guard-for-in': 'error',
        'id-match': 'error',
        'no-bitwise': 'error',
        'no-console': 'error',
        'no-eq-null': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-invalid-this': 'off',
        'no-lone-blocks': 'error',
        'no-native-reassign': 'error',
        'no-nested-ternary': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'off',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-undef-init': 'error',
        'no-unused-vars': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'wrap-iife': ['error', 'inside'],

        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1071,
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],

        'react/prop-types': 'off',

        'prettier/prettier': 'error',

        'import/no-deprecated': 'error',
        'import/no-unresolved': 'off',
        'import/export': 'off',
        'import/order': [
            'error',
            {
                groups: ['external', 'builtin', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: '*.scss',
                        group: 'parent',
                        position: 'after',
                    },
                ],
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
}