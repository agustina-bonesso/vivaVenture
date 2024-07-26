export const fetchCountriesData = async () => {
  try {
    const response = await fetch(
      `http://api.geonames.org/countryInfoJSON?username=agustina.bonesso`
    );
    const data = await response.json();
    return data.geonames.map((country) => ({
      value: country.countryCode,
      label: country.countryName,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const fetchCitiesData = async (countryCode) => {
  try {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?country=${countryCode}&username=agustina.bonesso`
    );
    const data = await response.json();
    console.log(data);
    return data.geonames.map((city) => ({
      value: city.name,
      label: city.name,
      lat: city.lat,
      lng: city.lng,
    }));
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};

export const fetchCoordinatesData = async (lat, lng) => {
  try {
    console.log(lat, lng);
    const response = await fetch(
      `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=agustina.bonesso`
    );
    const data = await response.json();
    console.log(data.geonames);
    console.log(data.geonames[0].adminName1);
    return data;
  } catch (error) {
    console.error("Error fetching coordinates!:", error);
    return [];
  }
};
