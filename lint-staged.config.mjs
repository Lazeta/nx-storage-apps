export default {
  '*.{ts,tsx,js,jsx,mjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yaml,yml}': ['prettier --write'],
  '*.css': ['prettier --write'],
}
