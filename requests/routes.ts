export const getRouteDeals = async () => {
  const data = await fetch(
    "https://6549e2d0e182221f8d5211cf.mockapi.io/api/v1/route-list"
  ).then((response) => response.json());
  return data;
};
