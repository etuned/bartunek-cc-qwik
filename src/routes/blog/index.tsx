import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import Infobox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";
import { getData } from "~/lib/sanity/api";
import type { Post } from "~/types";
export const useBlogTitleData = routeLoader$(async () => {
  const posts = await getData(`
  *[_type == "post"] 
    {
      _id,
      title,
      "slug": slug.current,
    }
    `);
  return posts as Post[];
});

export default component$(() => {
  //const postTitles = useBlogTitleData();
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
              <p>coming soon</p>
              {/* <h3>Here are some Posts. I promise I will make this page a bit better soon.</h3>
              <ul>
                {postTitles.value.map(({ _id, title, slug }) => (
                  <li key={_id}>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </li>
                ))}
              </ul> */}
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
      content: "Various topics about the web and life in general according to Edwin.",
    },
  ],
};
