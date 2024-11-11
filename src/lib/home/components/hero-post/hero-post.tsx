import { FontSizes, FontWeights, Text } from "@/lib/shared/components/text";
import styles from "./hero-post.module.scss";
import { PostTag } from "../post-tag";

export const HeroPost = ({
  title,
  tags,
  image,
}: {
  title: string;
  tags: Array<string>;
  image: string;
}) => {
  return (
    <div
      className={styles["hero-post"]}
      style={{ backgroundImage: `url("/images/${image}")` }}
    >
      <div className={styles["hero-post__content"]}>
        <Text size={FontSizes["32px"]} weight={FontWeights.semibold}>
          {title}
        </Text>

        <div className={styles["hero-post__content__tags"]}>
          {tags.map((e) => (
            <PostTag key={e} content={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
