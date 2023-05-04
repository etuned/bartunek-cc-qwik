import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './gradientLine.scss?inline';


export default component$(() => {
  useStyles$(styles)
  return (<div class="gradient"></div>
  );
});
