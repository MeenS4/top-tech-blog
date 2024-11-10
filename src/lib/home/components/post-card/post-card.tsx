import styles from "./post-card.module.scss";
import { FontSizes, FontWeights, Text } from "@/lib/shared/components/text";
import { PostTag } from "../post-tag";
import { Image } from "@/lib/shared/components/image";

export const PostCard = ({
  title,
  tags,
  image,
}: {
  title: string;
  tags: Array<string>;
  image: string;
}) => {
  return (
    <div className={styles["post-card"]}>
      <Image src={image} className={styles["post-card__image"]} />

      <div className={styles["post-card__content"]}>
        <Text
          className={styles["post-card__content__title"]}
          size={FontSizes["24px"]}
          weight={FontWeights.semibold}
        >
          {title}
        </Text>

        <div className={styles["post-card__content__tags"]}>
          {tags.map((e) => (
            <PostTag content={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
