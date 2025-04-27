import { Image } from "..";

export type IconProps = {
  name: "close" | "menu";
  size?: number;
  className?: string;
};

export const Icon = ({ name, size = 24, className }: IconProps) => (
  <Image
    alt={name}
    src={`/images/icons/${name}.svg`}
    width={size}
    height={size}
    className={className}
  />
);
