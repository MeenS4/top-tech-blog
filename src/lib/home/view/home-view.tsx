import styles from "./home-view.module.scss";

import { PostCard } from "../components/post-card";
import { Navbar } from "@/lib/shared/sections/navbar";
import { PostTile } from "../components/post-tile";

const postCardData = [
  {
    key: 1,
    title: "Monitor Dla Wymagających",
    tags: ["Sprzęt", "Wyświetlacze", "4K HDR"],
    image: "post-cover.png",
  },
  {
    key: 2,
    title: "Rewolucja w Świecie Klawiatur Mechanicznych",
    tags: ["Komputery", "Akcesoria"],
    image: "post-cover-keyboard.png",
  },
  {
    key: 3,
    title: "Czy to przyszłość? Elon Musk z Głośną Innowacją",
    tags: ["Roboty", "Sztuczna Inteligencja", "Innowacja"],
    image: "post-cover-ai.png",
  },
];

const postTileData = [
  {
    key: 1,
    title: "Monitor Dla Wymagających",
    tags: ["Sprzęt", "Wyświetlacze", "4K HDR"],
    image: "post-cover.png",
  },
  {
    key: 2,
    title: "Rewolucja w Świecie Klawiatur Mechanicznych",
    tags: ["Komputery", "Akcesoria"],
    image: "post-cover-keyboard.png",
  },
  {
    key: 3,
    title: "Czy to przyszłość? Elon Musk z Głośną Innowacją",
    tags: ["Roboty", "Sztuczna Inteligencja", "Innowacja"],
    image: "post-cover-ai.png",
  },
  {
    key: 4,
    title: "Monitor Dla Wymagających",
    tags: ["Sprzęt", "Wyświetlacze", "4K HDR"],
    image: "post-cover.png",
  },
  {
    key: 5,
    title: "Rewolucja w Świecie Klawiatur Mechanicznych",
    tags: ["Komputery", "Akcesoria"],
    image: "post-cover-keyboard.png",
  },
  {
    key: 6,
    title: "Czy to przyszłość? Elon Musk z Głośną Innowacją",
    tags: ["Roboty", "Sztuczna Inteligencja", "Innowacja"],
    image: "post-cover-ai.png",
  },
];

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Navbar />

      <div className={styles["home-view__cards"]}>
        {postCardData.map((post) => (
          <PostCard
            key={post.key}
            title={post.title}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </div>

      <div className={styles["home-view__tiles"]}>
        {postTileData.map((post) => (
          <PostTile
            key={post.key}
            title={post.title}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </div>
    </main>
  );
};
