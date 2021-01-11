const warn = (error: any) => {
  console.warn(error.message || error); // eslint-disable-line no-console
  throw error; // To let the caller handle the rejection
};

const promiseMiddleware = () => (next: any) => (action: any) => {
  if (typeof action.then === 'function') {
    Promise.resolve(action).then(next, warn);
  } else {
    next(action);
  }
};

export default promiseMiddleware;
