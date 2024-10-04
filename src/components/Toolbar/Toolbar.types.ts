export type ToolType = "pen" | "eraser" | "textbox" | "image";

export type ToolbarProps = {
  tool: ToolType;
  color: string;
  onToolChange: (tool: ToolType) => void;
  onColorChange: (color: string) => void;
  onImageUpload: (file: HTMLImageElement | null) => void;
}