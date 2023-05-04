import { component$, useStyles$ } from "@builder.io/qwik";
import type { Project } from "~/types";
import { Image } from "@unpic/qwik";
import styles from "./projectCard.scss?inline";

export default component$<Project>(
  ({ index, name, dates, codeUrl, liveUrl, short, technologies, employer, mainImage }) => {
    useStyles$(styles);
    return (
      <section class="project">
        <article>
          <div class={index % 2 == 0 ? "text" : "text-reverse"}>
            <h3>{name}</h3>
            <p>
              {dates &&
                new Date(dates.startDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              {dates?.endDate ? " - " : null}
              {dates?.endDate
                ? new Date(dates.endDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })
                : null}
            </p>
            <div class="blackbox">
              <p>{short && short}</p>
              {codeUrl?.link && !codeUrl.isPrivate ? <a href={codeUrl.link}>Source Code</a> : null}
              {codeUrl?.link && !codeUrl.isPrivate ? " | " : null}
              {liveUrl?.link && !liveUrl.isPrivate ? <a href={liveUrl.link}>Live Demo</a> : null}
            </div>
            <h4>The technologies includes:</h4>
            <ul>
              {technologies?.map(({ _id, title }) => (
                <li key={_id}>{title}</li>
              ))}
            </ul>
            <div class={index % 2 == 0 ? "container" : "container-reverse"}>
              <div class="employer">
                <Image
                  class="img-small"
                  src={employer?.image.src + "?h=100&w=100&fit=crop&crop=center&auto=format"}
                  alt={employer?.image.alt}
                  width={70}
                  height={70}
                  loading="lazy"
                />
                <div>
                  <p>Made for:</p>
                  <p>{employer?.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div class={index % 2 == 0 ? "image" : "image-reverse"}>
            <Image
              src={mainImage ? mainImage.src : "404img.png"}
              placeholder={mainImage ? mainImage.lqip : "#ccc"}
              alt={mainImage ? mainImage.alt : "coming soon"}
              layout="constrained"
              width={555}
              height={315}
            />
          </div>
        </article>
      </section>
    );
  },
);
