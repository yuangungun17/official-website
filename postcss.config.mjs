export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: { config: './tailwind.config.mjs' },
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  }
};
