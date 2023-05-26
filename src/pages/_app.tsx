import type { AppProps } from "next/app";
import { UIInspector } from "../utils";
import { AllProviders } from "../providers";
import "~/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AllProviders>
      <UIInspector enabled />
      <Component {...pageProps} />
    </AllProviders>
  );
}
