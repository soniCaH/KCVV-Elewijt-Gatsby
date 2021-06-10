const babelOptions = {
  presets: [`babel-preset-gatsby`],
  plugins: [`add-react-displayname`],
}
module.exports = require(`babel-jest`).default.createTransformer(babelOptions)
