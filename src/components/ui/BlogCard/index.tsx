import { component$, useStyles$ } from "@builder.io/qwik";
import type { Post } from "~/types";
import { Image } from "@unpic/qwik";
import styles from "./blogCard.scss?inline";
import { blurhashToCssGradientString } from "@unpic/placeholder";

export default component$<Post>(({ index, title, date, mainImage, authors, short, slug }) => {
  useStyles$(styles);

  return (
    <div class="blog-card">
      <div class={index % 2 == 0 ? "text" : "text-reverse"}>
        <h3>
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        <p>
          {date && (
            <>
              Published on{" "}
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </>
          )}
        </p>
        <ul>
          {(authors?.length as number) > 1 && (
            <>
              {authors?.map(({ _id, name }) => (
                <li key={_id}>{name}</li>
              ))}
            </>
          )}
        </ul>
      </div>
      <div class={index % 2 == 0 ? "image" : "image-reverse"}>
        <Image
          background={
            mainImage?.blurhash ? blurhashToCssGradientString(mainImage.blurhash) : "##4e4e4e"
          }
          src={mainImage ? mainImage.src : "404img.png"}
          alt={mainImage ? mainImage.alt : "coming soon"}
          layout="constrained"
          width={200}
          height={100}
        />
      </div>
      <a href={`/blog/${slug}`}>
        <p>{short && short}...</p>
        <p class="more">Read more</p>
      </a>
    </div>
  );
});
