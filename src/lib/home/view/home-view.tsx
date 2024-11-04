import { FontSizes, FontWeights, Text } from "@/lib/shared/components/text";

export const HomeView = () => {
  return (
    <main>
      <Text size={FontSizes["20px"]} weight={FontWeights.bold}>
        Hello world
      </Text>
    </main>
  );
};
