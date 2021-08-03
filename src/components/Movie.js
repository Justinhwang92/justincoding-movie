import React from "react";
// Get movie id
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import Breadcrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  console.log(movie);
  return (
    <>
      <Breadcrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;