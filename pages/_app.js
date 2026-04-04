import '../styles/globals.css';
import Script from 'next/script';
<<<<<<< HEAD
import AiChatWidget from '../components/AiChatWidget';
import AnalyticsTracker from '../components/AnalyticsTracker';
=======
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
<<<<<<< HEAD
      <AnalyticsTracker />
      <Component {...pageProps} />
      <AiChatWidget />
=======
      <Component {...pageProps} />
>>>>>>> fe52a4ece308cd8176a71aaada9c017f87615907
    </>
  );
}

export default MyApp;