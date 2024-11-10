import { FontSizes, FontWeights, Text } from "../../components/text";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <section className={styles["navbar"]}>
      <Text size={FontSizes["32px"]} weight={FontWeights.bold}>
        TopTech Blog
      </Text>
    </section>
  );
};
