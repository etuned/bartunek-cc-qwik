import { $, component$, useOnDocument } from "@builder.io/qwik";
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

  useOnDocument(
    "DOMContentLoaded",
    $((event) => {
      // ts has no idea what target will be. Ignoring errors because the ids are guaranteed.
      // Would be nice if we could setup ts to be informed of this though...

      // @ts-ignore-next-line
      const GtmUrl = event?.target?.getElementById("gtm");
      // @ts-ignore-next-line
      const scriptTag = event?.target?.getElementById("gtm");
      if (import.meta.env.PROD) {
        GtmUrl.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-MCCJK1H53R");
        scriptTag.innerText = `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'G-MCCJK1H53R');`;
        console.log("[PROD]: GA4 init");
      } else {
        console.log("[DEV]: GA4 skipped");
      }
    }),
  );

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
