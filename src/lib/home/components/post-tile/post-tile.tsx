import styles from "./post-tile.module.scss";
import { PostTileProps } from "./post-tile.types";
import { FontSizes, FontWeights, Text } from "@/lib/shared/components/text";
import { Image } from "@/lib/shared/components/image";
import { PostTag } from "../post-tag";

export const PostTile = ({ title, image, tags }: PostTileProps) => {
  return (
    <div className={styles["post-tile"]}>
      <Image className={styles["post-tile__image"]} src={image} />

      <div className={styles["post-tile__content"]}>
        <Text size={FontSizes["20px"]} weight={FontWeights.semibold}>
          {title}
        </Text>

        <div className={styles["post-tile__content__tags"]}>
          {tags.map((e) => (
            <PostTag key={e} content={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
