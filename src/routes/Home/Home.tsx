import { fadeInAnimation, hoverAnimation } from "directives/animations";
import styles from "./Home.module.css";

const hover = hoverAnimation;
const fadeIn = fadeInAnimation;

export default function Home() {
  return (
    <div class={styles.container}>
      <h1>Home</h1>
      <div class={styles.box} use:hover use:fadeIn></div>
    </div>
  );
}
