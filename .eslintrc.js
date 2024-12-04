module.exports = {
    root: true,
    extends: [
      'next/core-web-vitals', 
      'plugin:react/recommended', 
      'plugin:react-hooks/recommended', 
      'eslint:recommended', 
    ],
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module', 
    },
    rules: {
      'react/react-in-jsx-scope': 'off', 
      'react/prop-types': 'off', 
      'react/jsx-uses-react': 'off', 
      'react/jsx-uses-vars': 'warn', 
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn', 
    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
  };
  