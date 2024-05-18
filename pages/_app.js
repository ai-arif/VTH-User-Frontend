import AuthProvider from "@/contexts/AuthProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  );
}
