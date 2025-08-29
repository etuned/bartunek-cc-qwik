import { component$, useStyles$ } from '@builder.io/qwik';
import { GithubIcon } from '../icons/github';
import { LinkedinIcon } from '../icons/linkedin';
import { TwitterIcon } from '../icons/twitter';
import styles from './footer.scss?inline';
import GradientLine from '../gradientLine';
import { BlueskyIcon } from '../icons/bluesky';

export default component$(() => {
  useStyles$(styles);

const date = new Date()
const currentYear = date.toLocaleString('default', { year: 'numeric' })

  return (
    <>
    <GradientLine />
   <footer>
    <h3>Contact me through my social accounts!</h3>
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/ebartunek/" target="_blank">
                <span aria-hidden="true">
                    <LinkedinIcon />
                </span>
                <span class="sr-only">LinkedIn</span>
            </a>
        </li>
        <li>
            <a href="https://www.github.com/etuned" target="_blank">
                <span aria-hidden="true">
                    <GithubIcon />
                </span>
                <span class="sr-only">Github</span>
            </a>
        </li>
        <li>
            <a href="https://bsky.app/profile/bartunek.io" target="_blank">
                <span aria-hidden="true">
                    <BlueskyIcon />
                </span>
                <span class="sr-only">Bluesky</span>
            </a>
        </li>
    </ul>
    <p>
        <small>
            &copy; 2022 - {currentYear} Edwin Bartunek. All rights reserved.
        </small>
    </p>
</footer>
</>
  );
});
