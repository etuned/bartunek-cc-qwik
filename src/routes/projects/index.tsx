import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import Contentbox from "~/components/ui/contentbox";
import GradientLine from "~/components/ui/gradientLine";
import ProjectCard from "~/components/ui/projectCard";
import { getProjects } from "~/sanity/api";

import type { Project } from "~/types";

export const useProjectsData = routeLoader$(async () => {
  const projects = await getProjects();
  return projects as Project[];
});

export default component$(() => {
  const projects = useProjectsData();
  return (
    <>
      <GradientLine />
      <div class="bg-blue">
        <div class="content-container topics">
          <Contentbox>
            <>
              <div q:slot="title">My Projects</div>
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
          </Contentbox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Projects | Edwin Bartunek",
  meta: [
    {
      name: "description",
      content: "Edwin's latest projects and information about technologies he uses.",
    },
  ],
};
