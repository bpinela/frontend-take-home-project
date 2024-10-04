import { ToolType } from "@/components/Toolbar/Toolbar.types";
import { ERASER_COLOR, ERASER_WIDTH, PEN_WIDTH } from "@/utils/constants";
import { useState } from "react";

export const useDrawing = (contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (offsetX: number, offsetY: number) => {
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (offsetX: number, offsetY: number, color: string, tool: ToolType) => {
    if (!isDrawing) return;

    if (contextRef.current) {
      if (tool === "pen") {
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = PEN_WIDTH;
      } else if (tool === "eraser") {
        contextRef.current.strokeStyle = ERASER_COLOR;
        contextRef.current.lineWidth = ERASER_WIDTH;
      }
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const finishDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  return { startDrawing, draw, finishDrawing };
};
