import React, { KeyboardEvent } from "react";
import styles from "./TextInput.module.css";
import { TextInputProps } from "./TextInput.types";

const TextInput: React.FC<TextInputProps> = ({
  isTyping,
  textValue,
  textPosition,
  onTextChange,
  onAddText,
  
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAddText();
    }
  };

  return (
    isTyping ? (
      <div
      className={styles.textInputContainer}
      style={{
        left: `${textPosition.x}px`,
        top: `${textPosition.y}px`,
      }}
      >
        <input
          type="text"
          value={textValue}
          onChange={(e) => onTextChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className={styles.textInput}
        />
        <button onClick={onAddText} className={styles.addTextButton}>Add Text</button>
      </div>
    ) : <></>
  ) 
};

export default TextInput;
