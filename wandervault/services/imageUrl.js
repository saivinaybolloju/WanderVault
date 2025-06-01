let imageUrl = null;

export const setImageUrl = (ref) => {
  imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
};

export const getImageUrl = () => imageUrl;
