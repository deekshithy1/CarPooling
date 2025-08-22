const axios=require("axios");
const Ride = require("../models/Ride");

module.exports.getAddressCoordinate=async(address)=>{
    const apiKey=process.env.MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    try{
           const res=await axios.get(url);
           if(res.data.status==='OK'){
            const location = res.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
           }
           else{
            throw new Error('Unable to fetch coordinates');
           }
    }
    catch(err){
        console.log(err);
    }

}
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;


    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
          console.log(response.data)
          return response.data;
            // return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports.getRidesWithinRange = async (from, to, radius, dateofJourney) => {
  try {

    const startDate= new Date(dateofJourney);
    startDate.setHours(0,0,0,0);
    const endDate=new Date(dateofJourney);
    endDate.setHours(23,59,59,999);
    console.log(from,to)
    if (!from?.ltd || !from?.lng || !to?.ltd || !to?.lng) {
        throw new Error("Invalid coordinates: from/to must have lat & lng");
      }
      
    const rides = await Ride.find({
        fromLocation: {
        $geoWithin: {
          $centerSphere: [[from.lng, from.ltd], radius / 6378.1], // radius in km
        },
      },
      toLocation: {
        $geoWithin: {
          $centerSphere: [[to.lng, to.ltd], radius / 6378.1],
        },
      },
      DateOfJourney: {
        $gte: startDate, // start date inclusive
        $lte: endDate,   // end date inclusive
      },
    });

    return rides;
  } catch (error) {
    console.error("Error in getRidesWithinRange:", error);
    throw error;
  }
};