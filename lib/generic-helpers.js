export const dragAndDrop = (src, dst, offset) => {
  let x;
  let y;

  if (offset && Object.keys(offset).length > 0) {
    x = offset.x;
    y = offset.y;
  }
  src.moveToObject();
  browser.buttonDown();
  browser.moveToObject(dst.selector, x, y);
  browser.buttonUp();
};

export const findElement = (elements, text) => {
  const element =
  Array.isArray(elements) &&
  elements.find((elem) => elem.getText().includes(text));

  return element;
};

export const snapshotAndThrowError = (message) => {
  browser.saveScreenshot();
  throw new Error(message);
};
