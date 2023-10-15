import { Button, Header, Accordion, Carousel } from "components";

import "./home.scss";
import axiosInstance from "../../api";

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
