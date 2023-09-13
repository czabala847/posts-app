interface Props {
  background: string;
  blur?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  right?: number;
  size: number;
  top?: number;
}

export const GradientBlurPoint: React.FC<Props> = ({
  background,
  blur = 130,
  bottom,
  left,
  opacity,
  right,
  size,
  top,
}) => {
  return (
    <div
      className="absolute rounded-full z-[1]"
      style={{
        background,
        bottom,
        height: size,
        left,
        opacity,
        right,
        top,
        width: size,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};
