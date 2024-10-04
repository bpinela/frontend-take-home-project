import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './';

describe('TextInput', () => {
    const mockOnTextChange = jest.fn();
    const mockOnAddText = jest.fn();

  it('calls onTextChange and onAddText when Enter is pressed or button is clicked', () => {
    const { getByRole } = render(
      <TextInput 
        isTyping={true} 
        textValue="" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={mockOnTextChange} 
        onAddText={mockOnAddText} 
      />
    );

    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(mockOnTextChange).toHaveBeenCalledWith('Hello');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockOnAddText).toHaveBeenCalledTimes(1); 

    const button = getByRole('button', { name: /add text/i });
    fireEvent.click(button);
    expect(mockOnAddText).toHaveBeenCalledTimes(2);
  });

  it('does not render when isTyping is false', () => {
    const { container } = render(
      <TextInput 
        isTyping={false} 
        textValue="" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={() => {}} 
        onAddText={() => {}} 
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('renders with the correct initial text value', () => {
    const { getByRole } = render(
      <TextInput 
        isTyping={true} 
        textValue="Initial Value" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={mockOnTextChange} 
        onAddText={mockOnAddText} 
      />
    );

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Initial Value');
  });

  it('updates the input value when textValue prop changes', () => {
    const { getByRole, rerender } = render(
      <TextInput 
        isTyping={true} 
        textValue="First Value" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={mockOnTextChange} 
        onAddText={mockOnAddText} 
      />
    );

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('First Value');

    rerender(
      <TextInput 
        isTyping={true} 
        textValue="Updated Value" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={mockOnTextChange} 
        onAddText={mockOnAddText} 
      />
    );

    expect(input.value).toBe('Updated Value');
  });

  it('focuses on the input when isTyping is true', () => {
    const { getByRole } = render(
      <TextInput 
        isTyping={true} 
        textValue="" 
        textPosition={{ x: 100, y: 100 }} 
        onTextChange={mockOnTextChange} 
        onAddText={mockOnAddText} 
      />
    );

    const input = getByRole('textbox');
    expect(input).toHaveFocus();
  });
});

