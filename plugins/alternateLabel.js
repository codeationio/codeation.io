const plugin = require('tailwindcss/plugin');

const alternateLabel = plugin(({ addVariant }) => {
  addVariant('alternate', '.alternate &');
});

module.exports = alternateLabel;
