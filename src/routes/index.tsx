import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import Hero from "~/components/ui/hero/hero";
import Infobox from "~/components/ui/contentbox";

import { getAuthor, getPosts, getProjects } from "~/lib/sanity/api";
import type { Author, Project, Post } from "~/types";
import GradientLine from "~/components/ui/gradientLine";
import ProjectCard from "~/components/ui/projectCard";
import BlogCard from "~/components/ui/BlogCard";

export const useAuthorData = routeLoader$(async () => {
  const author = await getAuthor("Edwin Bartunek");
  return author as Author;
});

export const useLatestPostData = routeLoader$(async () => {
  const posts = await getPosts(undefined, "desc", `[${0}...${2}]`);
  return posts as Post[];
});

export const useInProgressProjectData = routeLoader$(async () => {
  const projects = await getProjects("desc", `[${0}...${4}]`, true);
  return projects as Project[];
});

export default component$(() => {
  const projects = useInProgressProjectData();
  const posts = useLatestPostData();
  return (
    <>
      <Hero />
      <GradientLine />
      <div class="section bg-blue">
        <div class="content-container topics">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              My Latest Blog Post
            </div>
            <>
              <div class="grid">
                {posts.value.map(({ _id, title, date, mainImage, authors, short, slug }, index) => (
                  <BlogCard
                    key={_id}
                    index={index}
                    title={title}
                    date={date}
                    mainImage={mainImage}
                    authors={authors}
                    short={short}
                    slug={slug}
                  />
                ))}
              </div>
            </>
          </Infobox>
        </div>
      </div>
      <GradientLine />
      <div class="section bg-plum">
        <div class="content-container topics">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              My Recent Projects
            </div>
            <>
              {projects.value.map((project, index) => (
                <ProjectCard
                  key={project._id}
                  index={index}
                  _createdAt={project._createdAt}
                  _updatedAt={project._updatedAt}
                  name={project.name}
                  mainImage={project.mainImage}
                  codeUrl={project.codeUrl}
                  liveUrl={project.liveUrl}
                  dates={project.dates}
                  employer={project.employer}
                  technologies={project.technologies}
                  short={project.short}
                  description={project.description}
                />
              ))}
            </>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Edwin Bartunek - A Software Engineer",
  meta: [
    {
      name: "description",
      content: "A software engineer building for the web and writing about it.",
    },
  ],
};
