import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./contentbox.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div>
      <h3 class="title">
        <Slot name="title" />
      </h3>
      <div class="centered">
        <Slot name="centered" />
      </div>
      <Slot />
    </div>
  );
});
