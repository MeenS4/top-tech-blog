import { ReactNode } from "react";

export enum FontSizes {
  "16px" = "16px",
  "20px" = "20px",
  "24px" = "24px",
  "32px" = "32px",
  "48px" = "48px",
}

export enum FontWeights {
  "regular" = 400,
  "medium" = 500,
  "semibold" = 600,
  "bold" = 700,
}

export type TextProps = {
  children: ReactNode | string;
  size?: FontSizes;
  weight?: FontWeights;
  className?: string;
};
