// Actions define
export const ROUTE_PAGE_A = 'ROUTE_PAGE_A';
export const ROUTE_PAGE_B = 'ROUTE_PAGE_B';

// Actions creactor
export function routePageA() {
  return {
    type: ROUTE_PAGE_A,
    message: 'this is page A',
  };
}

export function routePageB() {
  return {
    type: ROUTE_PAGE_B,
    message: 'this is page B',
  };
}

