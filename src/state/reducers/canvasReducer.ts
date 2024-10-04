import { ToolType } from "@/components/Toolbar/Toolbar.types";

export type State = {
  tool: ToolType;
  color: string;
  textValue: string;
  textPosition: { x: number; y: number };
  isTyping: boolean;
  image: HTMLImageElement | null;
};

export type Action =
  | { type: "SET_TOOL"; payload: ToolType }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_TEXT_VALUE"; payload: string }
  | { type: "SET_TEXT_POSITION"; payload: { x: number; y: number } }
  | { type: "SET_IS_TYPING"; payload: boolean }
  | { type: "SET_IMAGE"; payload: HTMLImageElement | null }
  | { type: "RESET_IMAGE" };

export const initialState: State = {
  tool: "pen",
  color: "black",
  textValue: "",
  textPosition: { x: 0, y: 0 },
  isTyping: false,
  image: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TOOL":
      return { ...state, tool: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_TEXT_VALUE":
      return { ...state, textValue: action.payload };
    case "SET_TEXT_POSITION":
      return { ...state, textPosition: action.payload, isTyping: true };
    case "SET_IS_TYPING":
      return { ...state, isTyping: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "RESET_IMAGE":
      return { ...state, image: null };
    default:
      return state;
  }
};
