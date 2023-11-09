export const getYachtType = async () => {
  return await fetch("http://112.213.91.196:5001/api/v1/yacht-types")
    .then(async (response) => await response.json())
    .then((json) => {
      return json.data;
    })
    .catch((error) => console.log(error));
};
