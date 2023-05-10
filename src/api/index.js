import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try{
        // request made to api here
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '605b21bd64msh56b375feba80d58p1b932bjsn36cdb887d377',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch(error){
        // if the request fails
        console.log(error);

    }
}