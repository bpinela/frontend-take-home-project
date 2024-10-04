
global.URL.createObjectURL = jest.fn(() => 'mocked-url');

global.HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
  closePath: jest.fn(),
  fillText: jest.fn(),
  drawImage: jest.fn(),
  clearRect: jest.fn(),
  strokeStyle: 'white',
  lineWidth: 20,
  font: '',
  fillStyle: '',
}));



