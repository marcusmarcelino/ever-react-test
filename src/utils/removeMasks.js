export const removeMask = (value) => {
  const newValue = value === undefined ? '' : value;
  return newValue.replace(/[^\d]+/g, '');
};

export default removeMask;
