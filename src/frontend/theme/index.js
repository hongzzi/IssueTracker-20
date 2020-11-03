import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    min-height: 100vh;
  }
  button {
    border: none;
    outline: none;
    &:not(:disabled) {
      cursor: pointer;
    }
  }
  input {
    outline: none;
  }
`;

export const theme = {
  mainColor: '',
  grayButtonColor: '#fafbfc',
  grayButtonHoverColor: '#f3f4f6',
  grayButtonFocusColor: '#1b1f2326',
  inputBorderColor: "#e1e4e8",
  inputBorderActiveColor: "#0366d6",
  inputShadowColor: '#0366d64d',
  inputBgColor: '#fafbfc',
  textColor: '#212121',
  headerColor: '#24292e',
  buttonColor: '#009900',
  unActiveButtonColor: '#99CC99',
  subButtonColor: '#eee',
  whiteColor: '#ffffff',
};
