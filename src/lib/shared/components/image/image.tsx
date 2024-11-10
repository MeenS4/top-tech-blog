import classNames from "classnames";
import styles from "./image.module.scss";
import { ImageProps } from "./image.types";

export const Image = ({ src, className }: ImageProps) => {
  const imageClassNames = classNames(styles["image"], className);

  return (
    <div
      className={imageClassNames}
      style={{ backgroundImage: `url('/images/${src}')` }}
    ></div>
  );
};
