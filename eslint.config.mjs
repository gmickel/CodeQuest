import antfu from '@antfu/eslint-config';

export default antfu({
  markdown: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
});
