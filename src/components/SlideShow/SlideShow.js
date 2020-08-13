import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ fontSize: 45 }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ fontSize: 45 }} />
    </div>
  );
};

export default function SlideShow(props) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="/public/images/ban 2.jpg" alt="bhmed-1" />
        </div>
        <div>
          <img src="/public/images/ban 2.jpg" alt="bhmed-1" />
        </div>
        <div>
          <img src="/public/images/ban 2.jpg" alt="bhmed-1" />
        </div>
        <div>
          <img src="/public/images/ban 2.jpg" alt="bhmed-1" />
        </div>
        <div>
          <img src="/public/images/ban 2.jpg" alt="bhmed-1" />
        </div>
      </Slider>
    </div>
  );
}
