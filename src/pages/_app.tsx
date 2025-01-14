import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="flex flex-col min-h-screen h-full w-full md:px-20 px-8 transition-all duration-250 ease-in-out">
      <div className="sm:block hidden grain"></div>
      <Component {...pageProps} />
    </section>
  );
}
