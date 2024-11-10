import styles from "./home-view.module.scss";

import { PostCard } from "../components/post-card";
import { Navbar } from "@/lib/shared/sections/navbar";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Navbar />

      <div className={styles["home-view__cards"]}>
        <PostCard
          title="Monitor Dla Wymagających"
          tags={["Sprzęt", "Wyświetlacze", "4K HDR"]}
          image="post-cover.png"
        />
        <PostCard
          title="Rewolucja w Świecie Klawiatur Mechanicznych"
          tags={["Komputery", "Akcesoria"]}
          image="post-cover-keyboard.png"
        />
        <PostCard
          title="Czy to przyszłość? Elon Musk z Głośną Innowacją"
          tags={["Roboty", "Sztuczna Inteligencja", "Innowacja"]}
          image="post-cover-ai.png"
        />
      </div>
    </main>
  );
};
