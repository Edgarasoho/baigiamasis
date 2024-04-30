import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./SlideImage/DJI_0089.jpg";
import image2 from "./SlideImage/IMG_2538.JPG";
import image3 from "./SlideImage/IMG_20230413_165316.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider className="slider" {...settings}>
      <div>
        <img src={image} height={400} width={400} />
      </div>
      <div>
        <img src={image2} height={400} width={400} />
      </div>
      <div>
        <img src={image3} height={400} width={400} />
      </div>
      <div>
        <img src={image} height={400} width={400} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
