import { component$, useStyles$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import styles from "./hero.scss?inline";
import { useAuthorData } from "~/routes";
import { blurhashToCssGradientString } from "@unpic/placeholder";

export default component$(() => {
  useStyles$(styles);

  const author = useAuthorData();

  return (
    <section class="content-container" id="intro">
      <div class="flex-responsive-container">
        <div class="inner-container">
          <p>
            Hi, my name is <span class="name">Edwin Bartunek.</span>
          </p>
          <h2>I help build the web.</h2>
          <p>
            I am a senior software engineer, focused on creating accessible, user friendly software
            platforms on the web. I am also obssesed with pizza and coffee!
          </p>
          <p>
            Currently, I am{" "}
            {author.value.employer && author.value.employer?.name
              ? "working at"
              : "taking some time off"}
            {author.value.employer?.website ? (
              <>
                {" "}
                <a href={author.value.employer?.website} target="_blank">
                  {author.value.employer?.name}
                </a>
              </>
            ) : author.value.employer?.name ? (
              ` ${author.value.employer?.name}`
            ) : undefined}
            {"."}
          </p>
        </div>
        <Image
          background={
            author.value.image.blurhash
              ? blurhashToCssGradientString(author.value.image.blurhash)
              : "##4e4e4e"
          }
          style={{ borderRadius: "4px" }}
          priority
          alt={author.value.image.alt}
          src={author.value.image.src}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
});
