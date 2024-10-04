import { render, fireEvent } from "@testing-library/react";
import ImageUploader from "./";

const createImageMock = (src: string) => {
  const img = new Image();
  img.src = src;
  return img;
};

describe("ImageUploader", () => {
  it("calls onImageUpload with the uploaded image", async () => {
    const onImageUploadMock = jest.fn();
    const { getByTestId } = render(
      <ImageUploader onImageUpload={onImageUploadMock} />
    );

    const file = new Blob(['dummy content'], { type: 'image/png' });
    const fileName = "test.png";
    const imageFile = new File([file], fileName, { type: 'image/png' });

    const input = getByTestId("file-input") as HTMLInputElement;

    Object.defineProperty(input, 'files', {
      value: [imageFile],
    });
    fireEvent.change(input);

    const img = createImageMock(URL.createObjectURL(imageFile));

    img.onload = () => {
      expect(onImageUploadMock).toHaveBeenCalledWith(img);
    };
  });
});
