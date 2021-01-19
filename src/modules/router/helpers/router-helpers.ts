const FULL_SIZE_ROUTE = [/^\/signin$/, /^\/signup$/];

export const getIsFullSize = (location: Record<string, any>): boolean =>
  FULL_SIZE_ROUTE.map((route) => route.test(location.pathname)).some((v) => v);
