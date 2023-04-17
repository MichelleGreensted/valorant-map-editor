import React from "react";

export function CustomCanvas({
  draw,
  height,
  width,
}: {
  draw: (context: CanvasRenderingContext2D) => void;
  height: number;
  width: number;
}) {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvas.current !== null) {
      const context = canvas.current.getContext("2d");
      if (context !== null) {
        draw(context);
      }
    }
  });

  return (
    <canvas ref={canvas} height={height} width={width} id="map">
      Map of chosen Valorant site
    </canvas>
  );
}
