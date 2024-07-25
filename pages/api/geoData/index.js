export const fetchCountriesData = async () => {
  try {
    const response = await fetch(
      `http://api.geonames.org/countryInfoJSON?username=2lf0305aa`
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
      `http://api.geonames.org/searchJSON?country=${countryCode}&username=2lf0305aa`
    );
    const data = await response.json();
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
