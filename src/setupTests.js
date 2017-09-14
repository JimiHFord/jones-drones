window.matchMedia = window.matchMedia || (() => (
  {
    matches : false,
    addListener : () => {},
    removeListener: () => {}
  }
));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;