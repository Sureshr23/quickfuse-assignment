import { snapshotAndThrowError } from './generic-helpers';

const sectionNotFound = (SectionClass, css) => {
  snapshotAndThrowError(
    `${SectionClass.name} section with the selector ${css} not found.`
  );
};

export const getSection = (SectionClass, css, index = 0) => {
  const sectionInstance = new SectionClass(css, index);

  return sectionInstance.section ? sectionInstance : sectionNotFound(SectionClass, css);
};
