export const fetchGeoData = async (countryCode) => {
  const response = await fetch(
    `http://api.geonames.org/countryInfoJSON?username=2lf0305aa`
  );

  const data = await response.json();
  console.log(data);
  return data.geonames.map((city) => ({
    name: city.name,
    country: city.countrycode,
    lat: city.lat,
    lon: city.lng,
  }));
};
