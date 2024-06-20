import Header from "@/components/Header";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
    
      <GlobalStyle />
      <Header />
      <main>
      <Component {...pageProps} />
      </main>
    </>
  );
}
