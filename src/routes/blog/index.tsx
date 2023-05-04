import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Infobox from '~/components/ui/contentbox';

export default component$(() => {
  return (
    <>
      <div class="section">
        <div class="container topics">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              Blog
            </div>
            <>
              <p>Coming soon</p>
            </>
          </Infobox>

        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Blog | Edwin Bartunek',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
