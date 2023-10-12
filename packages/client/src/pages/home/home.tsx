import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Accordion, Carousel } from "components";

import { IState } from "../../redux/rootReducer";
import imageOne from "../../images/carousel/alessandro-carrarini-YKa1kxa9YQo-unsplash.jpg";
import imageTwo from "../../images/carousel/enrica-tancioni-kvpRkt9E1D4-unsplash.jpg";
import imageThree from "../../images/carousel/kevin-bessat-U3k1zKLcyCc-unsplash.jpg";
import imageFour from "../../images/carousel/massimiliano-morosinotto-lUuUQo4PFV8-unsplash.jpg";

import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const accordionData = [
  {
    title: "section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "section 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "section 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ImageData = [
  {
    image: imageOne,
  },
  {
    image: imageTwo,
  },
  {
    image: imageThree,
  },
  {
    image: imageFour,
  },
];

const Home = () => {

  return (
    <main className="home-page">
      <Header className="home-header" headerText="Welcome to my Home Page" />
      {/* <div>
        <Carousel className="carousel" data={ImageData} />
      </div> */}
    </main>
  );
};

export default Home;
