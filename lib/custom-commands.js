import {
  dragAndDrop,
  findElement,
  snapshotAndThrowError
} from '../lib/generic-helpers';

export default function customCommands() {
  browser.addCommand('findAndClick', (elements, text) => {
    const element = findElement(elements, text);

    if (element) {
      element.click();
    } else {
      snapshotAndThrowError(`Element with text '${text}' not found.`);
    }
  });

  browser.addCommand('dragAndDropComponent', (elements, text, offset) => {
    const element = findElement(elements, text);

    if (element) {
      browser.pause(1000);
      dragAndDrop(element, $('#tabs-1'), offset);
    } else {
      snapshotAndThrowError(`Element with text '${text}' not found.`);
    }
  });

  browser.addCommand('connectNodes', (src, dst) => {
    dragAndDrop(src, dst);
  });
}
