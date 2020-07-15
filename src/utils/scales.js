import font from '@components/designSystem/fonts';

/**
 * Convert px to Rem.
 *
 * @param {number} px - px value.
 * @returns {string} - rem value.
 */
const pxToRem = (px) => {
  const baseFontSize = font.baseFontSize.match(/([0-9])\d+/)[0];

  return `${px / baseFontSize}rem`;
};

export default pxToRem;
