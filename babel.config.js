module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties'
    ],
    [
      '@babel/transform-runtime'
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false
          }
        ],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    },
    production: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    },
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }
}
