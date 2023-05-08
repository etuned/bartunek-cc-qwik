import { component$, useStyles$ } from "@builder.io/qwik";
import { LogoIcon } from "../icons/logo";
import { LinkedinIcon } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
import styles from "./header.scss?inline";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(styles);
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link href="/">
              <span aria-hidden="true">
                <LogoIcon />
              </span>
              <span class="sr-only">Home</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
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
