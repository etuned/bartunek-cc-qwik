import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contentbox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <>
      <GradientLine />
      <div class="bg-blue">
        <div class="content-container">
          <Contentbox>
            <div q:slot="title">404 Error - Page Not Found</div>
            <div q:slot="centered">
              <Image src="404-page-img.png" width={200} height={200} background="#ccc" />
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