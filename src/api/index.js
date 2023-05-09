import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '605b21bd64msh56b375feba80d58p1b932bjsn36cdb887d377',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesData = async (sw, ne) => {
    try{
        // request made to api here
        const {data: {data}} = await axios.get(URL, options);

        return data;
    } catch(error){
        // if the request fails
        console.log(error);

    }
}