export const fetchCountriesData = async () => {
  try {
    const response = await fetch(
      `https://secure.geonames.org/countryInfoJSON?username=agustina.bonesso`
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
      `https://secure.geonames.org/searchJSON?country=${countryCode}&maxRows=1000&username=agustina.bonesso`
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

export const fetchCoordinatesData = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://secure.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=agustina.bonesso`
    );
    const data = await response.json();
    console.log(data);
    const placeData = await fetchGeoId(data.geonames[0].geonameId);
    return placeData;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return [];
  }
};

const fetchGeoId = async (geoID) => {
  try {
    const response = await fetch(
      `https://secure.geonames.org/hierarchyJSON?geonameId=${geoID}&username=agustina.bonesso`
    );
    const data = await response.json();
    console.log(data);
    const placeName =
      data.geonames.length > 7 ? data.geonames[7].name : data.geonames[5].name;
    const placeCountry = data.geonames[5].countryName;
    return { cityName: placeName, countryName: placeCountry };
  } catch (error) {
    console.error("Error fetching geonameID:", error);
    return [];
  }
};
