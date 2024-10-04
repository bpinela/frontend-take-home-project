import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import Canvas from ".";

describe("Canvas Component", () => {
  let canvas: HTMLElement;
  const onTextPositionSelect = jest.fn();
  const onImageReset = jest.fn();

  beforeEach(() => {
    const { getByTestId } = render(
      <Canvas 
        tool="pen"
        color="black"
        image={null}
        onTextPositionSelect={onTextPositionSelect}
        onImageReset={onImageReset}
      />
    );
    canvas = getByTestId("canvas");
  });

  it("renders the canvas element", () => {
    expect(canvas).toBeInTheDocument();
  });


});
