import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { UIInspector } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UIInspector enabled />
      <Component {...pageProps} />
    </>
  );
}
