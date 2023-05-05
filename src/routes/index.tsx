import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import Hero from "~/components/ui/hero/hero";
import Infobox from "~/components/ui/contentbox";

import { getAuthor, getProjects } from "../api";
import type { Author, Project } from "~/types";
import GradientLine from "~/components/ui/gradientLine";
import ProjectCard from "~/components/ui/projectCard";

export const useAuthorData = routeLoader$(async () => {
  const author = await getAuthor("Edwin Bartunek");
  return author as Author;
});

export const useInProgressProjectData = routeLoader$(async () => {
  const projects = await getProjects("desc", `[${0}...${4}]`, true);
  return projects as Project[];
});

export default component$(() => {
  const projects = useInProgressProjectData();
  return (
    <>
      <Hero />
      <GradientLine />
      <div class="section bg-blue">
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
