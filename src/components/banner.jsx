import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // Import Flickity styles
import slider1 from '../assets/images/slide/slider-01.jpg'
import slider2 from '../assets/images/slide/slider-02.jpg'
import slider3 from '../assets/images/slide/slider-03.jpg'

const flickityOptions = {
  fade: false,
  cellAlign: "center",
  imagesLoaded: true,
  lazyLoad: false,
  freeScroll: false,
  wrapAround: true,
  autoPlay: false,
  pauseAutoPlayOnHover: true,
  rightToLeft: false,
  prevNextButtons: false,
  pageDots: true,
  contain: true,
  adaptiveHeight: true,
  dragThreshold: 5,
  percentPosition: true,
};

const HomeSlideshow = () => {
  const slides = [
    {
      image: slider1,
      subtitle: "SUMMER 2020",
      title: "New Arrival Collection",
      align: "start",
    },
    {
      image: slider2,
      subtitle: "NEW SEASON",
      title: "Lookbook Collection",
      align: "end",
    },
    {
      image: slider3,
      subtitle: "SUMMER SALE",
      title: "Save up to 70%",
      align: "start",
    },
  ];

  return (
    <div className="kalles-home-section type_slideshow type_carousel">
      <Flickity
        className={"slideshow"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slideshow__slide w-100 d-flex align-items-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div
                  className={`col-lg-6 ${
                    slide.align === "end" ? "offset-lg-6 text-end" : ""
                  }`}
                >
                  <div data-aos="fade-right" data-aos-delay="300">
                    <h4 className="fs-18 fw-medium">{slide.subtitle}</h4>
                    <h1 className="display-4 fw-semibold mb-3">{slide.title}</h1>
                    <a
                      className="btn btn-dark rounded-0 min-w-150 text-white"
                      href="shop-filter-sidebar.html"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default HomeSlideshow;
