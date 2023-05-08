import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Contentbox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";
import { getPosts } from "~/lib/sanity/api";
import type { Post } from "~/types";
import { Image } from "@unpic/qwik";
import { title } from "process";

export const usePostByParam = routeLoader$(async ({ params }) => {
  const post = await getPosts(params.slug, undefined, `[${0}]`);
  return post as Post;
});

export default component$(() => {
  const post = usePostByParam();
  if (!post.value) {
    return (
      <>
        <GradientLine />
        <div class="bg-blue">
          <div class="content-container">
            <Contentbox>
              <div q:slot="title" class="icon icon-cli">
                Post Not Found
              </div>
              <>
                <p>Sorry, it looks I haven't written any post at that route.</p>
              </>
            </Contentbox>
          </div>
        </div>
      </>
    );
  } else {
    const { title, date, mainImage } = post.value;
    return (
      <>
        <GradientLine />
        <div class="bg-blue">
          <div class="content-container">
            <Contentbox>
              <div q:slot="title" class="icon icon-cli">
                {title}
              </div>
              <>
                {date && <p>Published: {new Date(date).toLocaleString()}</p>}
                {mainImage && (
                  <Image
                    placeholder={mainImage?.lqip}
                    src={`${mainImage?.src}`}
                    alt={mainImage?.alt}
                    layout="fullWidth"
                  />
                )}
              </>
            </Contentbox>
          </div>
        </div>
      </>
    );
  }
});

export const head: DocumentHead = {
  title: `Blog Post | Edwin Bartunek`,
  meta: [
    {
      name: "description",
      content: "Various topics about the web and life in general according to Edwin.",
    },
  ],
};
