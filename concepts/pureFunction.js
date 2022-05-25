const PureFunction = (val) => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  switch (val) {
    case 'add': {
      return add(3, 5);
    }
    case 'sub': {
      return sub(5, 3);
    }
    default: {
      return 'Enter the value';
    }
  }
  if (val === 'add') {
  }
  if (val === 'add') {
    return add(3, 5);
  }
};
export default PureFunction;
