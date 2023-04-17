import { CustomCanvas } from "./CustomCanvas";

const draw = (context: CanvasRenderingContext2D | null) => {
  if (context !== null) {
    context.fillStyle = "#FF0000";
    context.fillRect(20, 20, 150, 100);
  }
};

export function EditableMapUsingCanvas() {
  return <CustomCanvas draw={draw} height={500} width={500} />;
}
