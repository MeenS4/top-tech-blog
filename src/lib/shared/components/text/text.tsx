import classNames from "classnames";
import styles from "./text.module.scss";
import { TextProps } from "./text.types";

export const Text = ({ size, weight, children, className }: TextProps) => {
  const textClassNames = classNames(
    styles["text"],
    styles[`text--${size}`],
    styles[`text--${size}--${weight}`],
    className
  );

  return <p className={textClassNames}>{children}</p>;
};
