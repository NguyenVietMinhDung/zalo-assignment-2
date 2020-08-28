/* eslint-disable import/prefer-default-export */
export const getDuration = (startDate, endDate) => {
  if (!endDate) {
    return `${startDate} - Present`;
  }
  return `${startDate} - ${endDate}`;
};
