import { component$, useStyles$ } from "@builder.io/qwik";
import { LogoIcon } from "../icons/logo";
import { LinkedinIcon } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
import styles from "./header.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <span aria-hidden="true">
                <LogoIcon />
              </span>
              <span class="sr-only">Home</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ebartunek/" target="_blank">
            <span aria-hidden="true">
              <LinkedinIcon />
            </span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/etuned">
            <span aria-hidden="true">
              <GithubIcon />
            </span>
            <span class="sr-only">Github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});
