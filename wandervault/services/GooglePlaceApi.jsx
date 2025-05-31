export const GetPhotoRef = async (placeName) => {
  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
      'X-Goog-FieldMask': 'places.displayName,places.photos,places.formattedAddress'
    },
    body: JSON.stringify({
      textQuery: placeName
    })
  });

  const result = await response.json();
  console.log(result);
  return result;
};
