import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import Contentbox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";
import { getPosts } from "~/lib/sanity/api";
import type { Post } from "~/types";
import { Image } from "@unpic/qwik";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import PortableText from "~/lib/sanity/PortableText";

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
    const { title, date, mainImage, authors, categories, mainContent } = post.value;
    return (
      <>
        <GradientLine />
        <div class="bg-blue">
          <div class="content-container">
            <Contentbox>
              <>
                <div>
                  <div>
                    <div class="title">
                      <h1>{title}</h1>
                    </div>
                    {mainImage && (
                      <Image
                        background={
                          mainImage.blurhash
                            ? blurhashToCssGradientString(mainImage.blurhash)
                            : "#4e4e4e"
                        }
                        src={`${mainImage?.src}`}
                        alt={mainImage?.alt}
                        width={1200}
                        height={550}
                      />
                    )}
                    <div class="div2">
                      <p>written by</p>
                      {authors?.map(({ _id, name, image }) => (
                        <div class="author-card" key={_id}>
                          <p>{name}</p>
                          {image && (
                            <Image
                              background={
                                image.blurhash
                                  ? blurhashToCssGradientString(image.blurhash)
                                  : "#4e4e4e"
                              }
                              src={`${image?.src}`}
                              alt={image?.alt}
                              width={85}
                              height={85}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div class="div3">
                      {date && <p>Published: {new Date(date).toLocaleString()}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  {categories?.map(({ _id, name }) => (
                    <div class="categories-pill" key={_id}>
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
                <section>
                  <PortableText render={mainContent} />
                </section>
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
