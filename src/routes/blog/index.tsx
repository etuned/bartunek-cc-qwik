import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";

export default component$(() => {
  return (
    <>
      <GradientLine />
      <div class="bg-blue">
        <div class="content-container">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              Blog
            </div>
            <>
              <p>coming soon.</p>
            </>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Blog | Edwin Bartunek",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
