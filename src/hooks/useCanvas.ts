import { CANVAS_SIZE, DEFAULT_TEXT, PEN_COLOR, PEN_LINE_CAP, PEN_WIDTH } from "@/utils/constants";
import { useRef, useEffect } from "react";

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * CANVAS_SIZE;
      canvas.height = window.innerHeight * CANVAS_SIZE;
      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;

      const context = canvas.getContext("2d");
      if (context) {
        context.lineCap = PEN_LINE_CAP;
        context.strokeStyle = PEN_COLOR;
        context.lineWidth = PEN_WIDTH;
        context.font = DEFAULT_TEXT;
        context.fillStyle = PEN_COLOR;
        contextRef.current = context;
      }
    }
  }, []);

  return { canvasRef, contextRef };
};
