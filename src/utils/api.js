import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmNiYmU5YTI0MDQzNWUyYjcyNDhiYWZkNDZkNjY5MyIsInN1YiI6IjY0NzZjNjI3MWY5OGQxMDI4NjE0OTRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJy5Oxp1oLxl1Fwn7dsQThmd2DUwtsdGcc9qCFVFnQ8";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};