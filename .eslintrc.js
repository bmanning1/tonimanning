module.exports = {
    env: {
      browser: true
    },
    extends: [
      'plugin:react/recommended',
      'airbnb'
    ],
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        semi: 'error',
        indent: ['error', 4],
        'object-curly-newline': ['error', { consistent: true }],
        'max-len': ['error', { code: 120 }],
        'import/prefer-default-export': 'off',
        'space-before-function-paren': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        'react/no-array-index-key': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 0
    },
    root: true
}