import styles from "./home-view.module.scss";

import { FontSizes, FontWeights, Text } from "@/lib/shared/components/text";
import { PostTag } from "../components/post-tag";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <Text size={FontSizes["20px"]} weight={FontWeights.bold}>
        Hello world
      </Text>

      <PostTag content="Finanse" />
    </main>
  );
};
