import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    &::after,
    &::before {
      content: '';
      clear: both;
      display: none;
      visibility: hidden;
    }
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Poppins', sans-serif !important;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    background-color: #f5f6fa;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  .activePage {
    text-decoration: underline !important;
  }

  .unactivePage {
      text-decoration: none;
  }

  @media only screen and (max-width: 760px) {
      .AppBar-root-1 {
          height: 55px !important;
      }
      .AppBar-root-1 img {
          height: 100%;
      }
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;

    font-family: 'Poppins', sans-serif !important;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }


  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #F2F3F6;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    src: url('/fonts/Poppins-SemiBold.ttf');
  }

  @font-face {
      font-family: 'Poppins-Regular';
      src: url('/fonts/Poppins-Regular.ttf');
  }

  @font-face {
      font-family: 'Poppins-Medium';
      src: url('/fonts/Poppins-Medium.ttf');
  }
`;

export default GlobalStyles;
