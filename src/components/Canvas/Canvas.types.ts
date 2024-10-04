import { ToolType } from "../Toolbar/Toolbar.types";

export type CanvasProps = {
  tool: ToolType;
  color: string;
  image: HTMLImageElement | null;
  onTextPositionSelect: (x: number, y: number) => void;
  onImageReset: () => void;
}