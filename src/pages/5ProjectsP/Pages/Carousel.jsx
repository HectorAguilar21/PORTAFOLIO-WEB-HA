import React from "react";

export default function Carousel({ images, carouselNumber }) {
  return (
    <>
      <h1 className="text-center text-3xl text-white font-Alkatra">
        {images.title}
      </h1>
      <div
        id={`carouselExampleCaptions${carouselNumber}`}
        className="carousel slide carousel-fade border-4 border-cyan-500"
      >
        <div className="carousel-inner">
          {images.image.map((imagesUrl, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={imagesUrl} className="d-block w-100" />
            </div>
          ))}
        </div>
        {images.image.length > 1 && (
          <>
            <button
              className="carousel-control-prev bg-black/50 w-[50px]"
              type="button"
              data-bs-target={`#carouselExampleCaptions${carouselNumber}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next bg-black/50 w-[50px]"
              type="button"
              data-bs-target={`#carouselExampleCaptions${carouselNumber}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </>
  );
}
