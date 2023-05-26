import { component$ } from "@builder.io/qwik";
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

  const ga4Script = `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'G-MCCJK1H53R');`;

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <QwikPartytown forward={["dataLayer.push"]} />
        {import.meta.env.PROD && (
          <>
            <script
              type="text/partytown"
              src="https://www.googletagmanager.com/gtag/js?id=G-MCCJK1H53R"
            />
            <script type="text/partytown" dangerouslySetInnerHTML={ga4Script} />
          </>
        )}
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
