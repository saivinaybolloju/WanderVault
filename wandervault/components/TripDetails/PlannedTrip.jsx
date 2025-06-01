import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GetPhotoRef } from '../../services/GooglePlaceApi';
import { useState, useEffect } from 'react';

export default function PlannedTrip({ details }) {
  const [photoRefs, setPhotoRefs] = useState({}); // { placeName: photoRef }

  useEffect(() => {
    const fetchAllPhotos = async () => {
      const refs = {};

      for (const [day, dayDetails] of Object.entries(details)) {
        for (const place of dayDetails.plan) {
          try {
            const result = await GetPhotoRef(place.placeName);
            const photoReference = result?.places?.[0]?.photos?.[0]?.name?.split('/photos/')[1];
            if (photoReference) {
              refs[place.placeName] = photoReference;
            }
          } catch (error) {
            console.error(`Error fetching photo for ${place.placeName}:`, error);
          }
        }
      }

      setPhotoRefs(refs);
    };

    if (details && typeof details === 'object') {
      fetchAllPhotos();
    }
  }, [details]);

  if (!details || typeof details !== 'object') {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 17, color: 'red' }}>
          No plan details available.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>🏕️ Plan Details</Text>

      {Object.entries(details).map(([day, dayDetails], dayIndex) => (
        <View key={dayIndex}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>

          {dayDetails.plan.map((place, index) => {
            const photoRef = photoRefs[place.placeName];
            const imageUrl = photoRef
              ? {
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
                }
              : null;

            return (
              <View
                key={index}
                style={{
                  backgroundColor: Colors.LIGHT_BLUE,
                  padding: 10,
                  borderRadius: 15,
                  borderColor: Colors.GRAY,
                  marginTop: 10,
                }}
              >
                {imageUrl ? (
                  <Image
                    source={imageUrl}
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 15,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 15,
                      backgroundColor: Colors.WHITE,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ fontFamily: 'outfit' }}>Loading...</Text>
                  </View>
                )}

                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>
                    {place?.placeName}
                  </Text>

                  <TouchableOpacity>
                    <Text>Visit in Maps</Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                      color: Colors.GRAY,
                      marginTop: 5,
                    }}
                  >
                    {place.placeDetails}
                  </Text>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontFamily: 'outfit',
                          fontSize: 17,
                          marginTop: 5,
                        }}
                      >
                        🎫 Ticket Price:{' '}
                        <Text style={{ fontFamily: 'outfit-bold' }}>{place?.ticketPricing}</Text>
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'outfit',
                          fontSize: 17,
                          marginTop: 5,
                        }}
                      >
                        ⏱️ Time to Travel:{' '}
                        <Text style={{ fontFamily: 'outfit-bold' }}>{place?.timeToTravel}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}
