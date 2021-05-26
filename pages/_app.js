import "../styles/globals.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";

const promise = loadStripe(
  "pk_test_51IDqubBKVErMxe43L5053fR44sVFincRAJEVc6XeQbUnC5B51ZXuhxgnBT7USvF4EN8uFSVd5cUcYvPhirdhIQSJ00qh7HJx0P",
  { locale: "cs" }
);

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Elements stripe={promise}>
        <Component {...pageProps} />
      </Elements>
    </div>
  );
}

export default MyApp;
