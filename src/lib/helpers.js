const getFilteredFoods = (foods) => {
  const filteredFoods = foods.map(({
    address,facilitytype,latitude,longitude,locationdescription,objectid}
    ) => ({
    address,facilitytype,latitude,longitude,locationdescription,objectid
  }));
  return filteredFoods;
}

const getFoodType = (value,foods) => {
  const details = foods.filter(food => food.address.toLowerCase().includes(value.toLowerCase()));
  return details;
};

export {getFilteredFoods,getFoodType}

