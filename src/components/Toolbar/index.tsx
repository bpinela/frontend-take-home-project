import { Eraser, FileImage, Pen, Type } from "lucide-react";
import React from "react";
import styles from "./Toolbar.module.css";
import { ToolbarProps } from "./Toolbar.types";
import ImageUploader from "../ImageUploader";

const Toolbar: React.FC<ToolbarProps> = ({ onToolChange, onColorChange, onImageUpload, tool, color }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];    
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => onImageUpload(img);
    }
  };

  return (
    <div className={styles.toolbar}>
      <Pen
        role="button"
        aria-label="Pen"
        color="#000"
        size="44px"
        onClick={() => onToolChange("pen")}
        className={`${styles.icon} ${tool === "pen" ? styles.active : ""}`}
      />
      <Eraser
        role="button"
        aria-label="Eraser"
        color="#000"
        size="44px"
        onClick={() => onToolChange("eraser")}
        className={`${styles.icon} ${tool === "eraser" ? styles.active : ""}`}
      />
      <Type
        role="button"
        aria-label="Textbox"
        color="#000"
        size="44px"
        onClick={() => onToolChange("textbox")}
        className={`${styles.icon} ${tool === "textbox" ? styles.active : ""}`}
      />
      <div>
        <label htmlFor="file-input" data-testid="file-input-label">
          <FileImage
            role="button"
            aria-label="Image"
            color="#000"
            size="44px"
            onClick={() => onToolChange("image")}
            className={`${styles.icon} ${tool === "image" ? styles.active : ""}`}
          />
        </label>
        <ImageUploader onImageUpload={handleImageUpload} />
      </div>

      <input
        type="color"
        role="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
        className={styles.colorInput}
      />
    </div>
  );
};

export default Toolbar;
