import { Global } from '@emotion/react';

import PPNeueMontrealBold from './assets/fonts/PPNeueMontreal-Bold.otf';
import PPNeueMontrealMedium from './assets/fonts/PPNeueMontreal-Medium.otf';

const FontStyles = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'PPNeueMontreal';
        font-style: normal;
        font-weight: 400;
        src: url(${PPNeueMontrealMedium}) format('opentype');
      }

      @font-face {
        font-family: 'PPNeueMontreal';
        font-style: normal;
        font-weight: 700;
        src: url(${PPNeueMontrealBold}) format('opentype');
      }

      body {
        font-family: 'PPNeueMontreal', sans-serif;
      }
    `}
  />
);

export default FontStyles;
