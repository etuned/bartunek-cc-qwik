import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contentbox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";

export default component$(() => {
  return (
    <>
      <GradientLine />
      <div class="bg-blue">
        <div class="content-container">
          <Contentbox>
            <div q:slot="title">404 Error - Page Not Found</div>
            <div q:slot="centered">
              <img
                src="404-page-img.png"
                width={200}
                height={200}
                alt="A person looking at a map seemingly lost"
              />
              <p>Sorry, it looks I don't have any page at that route.</p>
            </div>
          </Contentbox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: `404 Not Found | Edwin Bartunek`,
};
