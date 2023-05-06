import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./global.scss";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  // I do not like this method. Need to refactor for better performance.

  useVisibleTask$(() => {
    const GtmUrl = document.getElementById("gtm");
    const scriptTag = document.getElementById("gtag");
    if ((import.meta.env.PROD || !import.meta.env.DEV) && GtmUrl) {
      GtmUrl.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-MCCJK1H53R");
    }
    if ((import.meta.env.PROD || !import.meta.env.DEV) && scriptTag) {
      scriptTag.innerText = `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'G-MCCJK1H53R');`;
      console.log("[PROD]: GA4 init");
    } else {
      console.log("[dev]: GA4 skipped");
    }
    return () => {};
  });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script type="text/partytown" id="gtm" />
        <script type="text/partytown" id="gtag" />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
