import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL);

  return <Component {...pageProps} />;
}
