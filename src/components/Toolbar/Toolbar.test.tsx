import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "./";
import { ToolbarProps } from "./Toolbar.types";

describe("Toolbar", () => {
  const mockOnToolChange = jest.fn();
  const mockOnColorChange = jest.fn();
  const mockOnImageUpload = jest.fn();

  const renderToolbar = (props: Partial<ToolbarProps> = {}) => {
    const defaultProps: ToolbarProps = {
      onToolChange: mockOnToolChange,
      onColorChange: mockOnColorChange,
      onImageUpload: mockOnImageUpload,
      tool: "pen", // default tool
      color: "#000", // default color
      ...props,
    };

    render(<Toolbar {...defaultProps} />);
  };

  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "blob:http://localhost/image");
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls after each test
  });

  test("changes tool when an icon is clicked", () => {
    renderToolbar();

    fireEvent.click(screen.getByLabelText(/pen/i));
    expect(mockOnToolChange).toHaveBeenCalledWith("pen");

    fireEvent.click(screen.getByLabelText(/eraser/i));
    expect(mockOnToolChange).toHaveBeenCalledWith("eraser");

    fireEvent.click(screen.getByLabelText(/textbox/i));
    expect(mockOnToolChange).toHaveBeenCalledWith("textbox");

    fireEvent.click(screen.getByLabelText(/image/i));
    expect(mockOnToolChange).toHaveBeenCalledWith("image");
  });

  test("changes color when the color input is changed", () => {
    renderToolbar();

    const colorInput = screen.getByRole("color");
    fireEvent.change(colorInput, { target: { value: "#ff0000" } });
    expect(mockOnColorChange).toHaveBeenCalledWith("#ff0000");
  });
});
