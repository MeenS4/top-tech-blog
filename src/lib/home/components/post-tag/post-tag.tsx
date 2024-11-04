import classNames from "classnames";
import styles from "./post-tag.module.scss";

export const PostTag = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  const tagClassNames = classNames(styles["post-tag"], className);

  return <div className={tagClassNames}>{content}</div>;
};
