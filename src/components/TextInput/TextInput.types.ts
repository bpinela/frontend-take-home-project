export type TextInputProps = {
  isTyping: boolean;
  textValue: string;
  textPosition: { x: number; y: number };
  onTextChange: (text: string) => void;
  onAddText: () => void;
}