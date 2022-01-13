import React from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import Button from "../../components/Button";

export default function Slider() {
  const [slideAnim, setSlideAnim] = React.useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: 5, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 5, inProgress: false });
      }, 400);
    }
  };

  const moveDot = (index) => setSlideAnim({ index: index, inProgress: false });

  return (
    <div className="slider">
      <div className="container-slider">
        {dataSlider.map((element, index) => {
          return (
            <div
              key={element.id}
              className={
                slideAnim.index === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                alt=""
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: dataSlider.length }).map((item, index) => {
            return (
              <div
                className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                onClick={() => moveDot(index + 1)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <Button {...{ text: "back", link: "/projects" }} />
      </div>
    </div>
  );
}
