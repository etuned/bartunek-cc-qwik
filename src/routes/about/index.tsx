import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./about.scss?inline";

import Infobox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <GradientLine />
      <div class="bg-blue">
        <div class="content-container">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              About
            </div>
            <>
              <p>
                Edwin Bartunek is a software engineer and currently working at Zehitomo in Japan.
              </p>
            </>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About | Edwin Bartunek",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
