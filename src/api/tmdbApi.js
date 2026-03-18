import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzg5YWY4YzQ2N2Q5ZTA4ZDMzM2UxZDg1NzIzNmUzZiIsIm5iZiI6MTc3Mzg2NTY3NC4wMTYsInN1YiI6IjY5YmIwYWNhNzRiMjNiZDVlNTIxZjEwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.juDbotnpzUOCENdNAwWKUfMHhMw25mwcP3YILFDO8zY';



const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get("/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axiosInstance.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });

  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};