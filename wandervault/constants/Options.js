export const SelectTravelesList=[
    {
        title:'Just Me',
        desc:'Solo Traveler',
        icon:'✈️',
        poeple:'1'
    },
    {
        title:'Couple',
        desc:'Two Travelers',
        icon:'💏🏻',
        poeple:'2'
    },
    {
        title:'Family',
        desc:'Group of fun',
        icon:'🏡',
        poeple:'3 to 5 '
    },
    {
        title:'Friends',
        desc:'Group of thrillness',
        icon:'👥',
        poeple:'5 to 10'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay Conscious of costs',
        icon:'💵',
        
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average',
        icon:'💰',
        
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont  worry about cost',
        icon:'🤑',
        
    },
]
export const AI_Console_Prompt='Generate Travel Plan for Location: {location},  for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight Price with Booking url, Hotels options list with HotelName, HotelAddress, Price, HotelImage url, geocoordinates, rating descriptions and Places to visit nearby with placeName , Place details, Place Image url ,geocoordinates , ticket pricing , time to travel each of the location for {totalDays} day and {totalNight} night with wach day plan with best time to visit in valid JSON format';
export const AI_Prompt=`Generate a detailed travel plan in strict and valid JSON format for a trip to {location} for {totalDays} days and {totalNight} nights, for a {traveler} with a {budget} budget.

The JSON should include:
1. location: Destination name.
2. photoRef: string,{photoRef of location which can be acessed with google maps api}
3. startDate: Mentioned date.
4. traveler: Mentioned traveler (e.g., Solo, Couple, Family, Group).
5. budget: Mentioned budget tier (e.g., Cheap, Moderate, Luxury).
6. flightData: { 
   airline: string, 
   price: string, 
   bookingUrl: string 
}
7. hotelList: An array of at least 3 hotel options with:
   - hotelName
   - hotelAddress
   - price
   - hotelImageUrl :string,{photoRef of location which can be acessed with google maps api}
   - geoCoordinates: { latitude, longitude }
   - rating
   - description

8. travelPlan: A breakdown per day as:
{
  day1: {
    bestTimeToVisit: string,
    plan: [
      {
        placeName: string,
        placeDetails: string,
        placeImageUrl: string,{photoRef which can be acessed with google maps api}
        geoCoordinates: { latitude, longitude },
        ticketPricing: string,
        timeToTravel: string
      }
    ]
  },
  day2: { ... },
  ...
}

Ensure all days are structured similarly and consistently. The data must be human-like, static, and deterministic for each run (no variation). Avoid random or varying output for the same inputs. Only return JSON.
`;