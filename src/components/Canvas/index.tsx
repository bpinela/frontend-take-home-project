import React, { MouseEvent } from "react";
import { useCanvas } from "@/hooks/useCanvas";
import { useDrawing } from "@/hooks/useDrawing";
import styles from "./Canvas.module.css";
import { CanvasProps } from "./Canvas.types";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/utils/constants";

const Canvas: React.FC<CanvasProps> = ({
  tool,
  color,
  image,
  onTextPositionSelect,
  onImageReset
}) => {
  const { canvasRef, contextRef } = useCanvas();
  const { startDrawing, draw, finishDrawing } = useDrawing(contextRef);

  const handleMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (tool === "textbox") {
      onTextPositionSelect(offsetX, offsetY);
    } else if (tool === "image") {
      image && contextRef.current?.drawImage(image, offsetX, offsetY, IMAGE_WIDTH, IMAGE_HEIGHT);
      onImageReset();
    } else {
      startDrawing(offsetX, offsetY);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    draw(offsetX, offsetY, color, tool);
  };

  return (
    <canvas
      ref={canvasRef}
      data-testid="canvas"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={finishDrawing}
      className={styles.canvas}
    />
  );
};

export default Canvas;
