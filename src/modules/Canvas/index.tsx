'use client';
import React, { useReducer } from "react";
import Canvas from "@/components/Canvas";
import Toolbar from "@/components/Toolbar";
import TextInput from "@/components/TextInput";
import { initialState, reducer } from "@/state/reducers/canvasReducer";

const CanvasApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextPositionSelect = (x: number, y: number) => {
    dispatch({ type: "SET_TEXT_POSITION", payload: { x, y } });
  };

  const handleImageReset = () => {
    dispatch({ type: "RESET_IMAGE" });
  };

  const handleAddText = () => {
    const canvas = document.querySelector("canvas");
    const context = canvas?.getContext("2d");

    if (context) {
      context.fillText(state.textValue, state.textPosition.x, state.textPosition.y);
    }

    dispatch({ type: "SET_IS_TYPING", payload: false });
    dispatch({ type: "SET_TEXT_VALUE", payload: "" });
  };

  return (
    <div>
      <Toolbar
        tool={state.tool}
        color={state.color}
        onToolChange={(tool) => dispatch({ type: "SET_TOOL", payload: tool })}
        onColorChange={(color) => dispatch({ type: "SET_COLOR", payload: color })}
        onImageUpload={(image) => dispatch({ type: "SET_IMAGE", payload: image })}
      />
      <Canvas
        tool={state.tool}
        color={state.color}
        image={state.image}
        onTextPositionSelect={handleTextPositionSelect}
        onImageReset={handleImageReset}
      />
      <TextInput
        isTyping={state.isTyping}
        textValue={state.textValue}
        textPosition={state.textPosition}
        onTextChange={(text) => dispatch({ type: "SET_TEXT_VALUE", payload: text })}
        onAddText={handleAddText}
      />
    </div>
  );
};

export default CanvasApp;
