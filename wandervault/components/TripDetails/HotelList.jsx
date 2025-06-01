import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetPhotoRef } from '../../services/GooglePlaceApi';
import { Colors } from '../../constants/Colors';

export default function HotelList({ hotelList }) {
  const [photoRefs, setPhotoRefs] = useState({}); // store photoRefs by hotelName

  useEffect(() => {
    const fetchAllPhotos = async () => {
      const refs = {};

      for (const hotel of hotelList) {
        try {
          const result = await GetPhotoRef(hotel.hotelName);
          const photoReference = result?.places?.[0]?.photos?.[0]?.name?.split('/photos/')[1];
          if (photoReference) {
            refs[hotel.hotelName] = photoReference;
          }
        } catch (error) {
          console.error(`Error fetching photo for ${hotel.hotelName}:`, error);
        }
      }

      setPhotoRefs(refs);
    };

    fetchAllPhotos();
  }, [hotelList]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>Hotel Recommendation</Text>

      <FlatList
        data={hotelList}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 8 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => {
          const photoRef = photoRefs[item.hotelName];
          const imageUrl = photoRef
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              }
            : null;

          return (
            <View style={{ marginRight: 20, width: 180 }}>
              {imageUrl ? (
                <Image
                  source={imageUrl}
                  style={{ width: 180, height: 120, borderRadius: 15 }}
                />
              ) : (
                <View
                  style={{
                    width: 180,
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

              <View style={{ padding: 5 }}>
                <Text style={{ fontFamily: 'outfit-medium', fontSize: 17, flex: 1 }}>
                  {item.hotelName}
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontFamily: 'outfit' }}>⭐{item.rating}</Text>
                  <Text style={{ fontFamily: 'outfit' }}>💰{item.price}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
