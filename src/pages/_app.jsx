import { LinguiProvider } from "@/lib/lingui/provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LinguiProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </LinguiProvider>
  );
}

export default MyApp;
