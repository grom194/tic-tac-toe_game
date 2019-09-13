const PostCssNormalize = require('postcss-normalize');
const PostCssNested = require('postcss-nested');
const PostCssAutoprefixer = require('autoprefixer');
const PostCssAutoreset = require('postcss-autoreset');
const PostCssPresetEnv = require('postcss-preset-env');
const PostCssInlineSvg = require('postcss-inline-svg');
const PostCssInitial = require('postcss-initial');

module.exports = {
  plugins: [
    PostCssNormalize({}),
    PostCssNested(),
    PostCssAutoprefixer(),
   //PostCssAutoreset(),
   PostCssInitial({
    reset: 'inherited' // reset only inherited rules
   }),
    PostCssPresetEnv(),
    PostCssInlineSvg()
  ],
};
