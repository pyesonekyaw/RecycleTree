import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import NavBar from "../components/navigation/NavBar";
import Script from "next/script";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[url('/static/background.jpg')] h-screen overflow-auto">
      <Head>
        <title>RecycleTree</title>
      </Head>
      <Script
        type="module"
        src="https://gradio.s3-us-west-2.amazonaws.com/3.19.1/gradio.js"
      />
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
