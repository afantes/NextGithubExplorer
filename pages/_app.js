import { createGlobalStyle } from 'styled-components'
import Navigation from '@/components/Navigation/Navigation';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #1b1f23ea;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}