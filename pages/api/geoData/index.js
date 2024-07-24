const username = "2lf0305aa";
// process.env.GEONAMES_USERNAME;

export const fetchGeoData = async (countryCode, username) => {
  console.log(username);
  const response = await fetch(
    `http://api.geonames.org/searchJSON?country=${countryCode}&maxRows=10&username="2lf0305aa"`
  );

  const data = await response.json();
  console.log(data);
  // return data.geonames.map((city) => ({
  //   name: city.name,
  //   country: city.countryName,
  //   lat: city.lat,
  //   lon: city.lng,
  // }));
};
