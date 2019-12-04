module.exports = {
  extends: 'airbnb',
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  },
  env: {
    browser: true,
    node: true,
  }
};