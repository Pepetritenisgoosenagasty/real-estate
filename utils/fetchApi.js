import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const { data } = await axios.get(url, { 
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '690db16f39msh60b9a216d0280c5p1f5f60jsn0a26bc1899f7'
        }
    })

    return data;
}

