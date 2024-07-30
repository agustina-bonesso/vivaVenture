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
    if (data.geonames.length === 0) {
      return {
        cityName: "no City in selected position",
        countryName: "no Country in selected position",
      };
    }
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
    if (data.geonames.length < 5) {
      const cityPlace = data.geonames[data.geonames.length - 1].name;
      const countryPlace = data.geonames[data.geonames.length - 1].countryName;
      return { cityName: cityPlace, countryName: countryPlace };
    }
    const cityPlace =
      data.geonames.length > 7 ? data.geonames[7].name : data.geonames[5].name;
    const countryPlace = data.geonames[5].countryName;
    return { cityName: cityPlace, countryName: countryPlace };
  } catch (error) {
    console.error("Error fetching geonameID:", error);
    return [];
  }
};
