import React from "react";
import { ImageUploaderProps } from "./ImageUploader.types";
import styles from "./ImageUploader.module.css";

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }: ImageUploaderProps) => {
  return (
    <input 
      type="file" 
      id="file-input"
      data-testid="file-input"
      accept="image/*"
      onChange={onImageUpload}
      className={styles.imageUploadInput} />
  )
};

export default ImageUploader;
