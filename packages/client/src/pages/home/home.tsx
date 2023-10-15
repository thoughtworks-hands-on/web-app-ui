import { Button, Header, Accordion, Carousel } from "components";

import "./home.scss";
import { useEffect, useState } from "react";
import axiosInstance from "../../api";

const Home = () => {

  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    console.log("dekbj");
    axiosInstance.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc").then((res: any) => {
      setMovies(res.data.results);
      console.log(res.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <main className="home-page">
      <Header className="home-header" headerText="Welcome to my Home Page" />
      {/* <div>
        <Carousel className="carousel" data={ImageData} />
      </div> */}
      <div>
      <h1>Top Movies</h1>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
};

export default Home;
