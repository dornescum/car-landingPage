import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import img_2s from "../assets/webp/2-sm.webp";
import img_2 from "../assets/webp/2.webp";

const Slider = ({ imageSrc, title, subtitle, flipped, small, large  }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
      delay: 100
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc}

               // srcSet={`${small} 600w,  ${large} 1200w`}
               // sizes="(max-width:600px) 50vw,
               //          (max-width: 768px) 70vw,
               //          (max-width:1920px) 100vw"
               alt="Travel" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc}
               // srcSet={`${small} 600w,  ${large} 1200w`}
               // sizes="(max-width:600px) 50vw,
               //          (max-width: 768px) 70vw,
               //          (max-width:1920px) 100vw"

               alt="Travel" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
