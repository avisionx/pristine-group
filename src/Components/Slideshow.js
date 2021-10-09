import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({ slideImages, head }) => {
  return (
    <div className="border">
      <div className="slide-container d-block">
        <Fade easing="ease" transitionDuration="100" pauseOnHover={true}>
          {slideImages.map((data, i) => (
            <div className="each-slide" key={i}>
              <div
                style={{
                  minHeight: '382px',
                  backgroundImage: `url(${data.img})`,
                }}
              >
                {data.text && <span>{data.text}</span>}
              </div>
            </div>
          ))}
        </Fade>
      </div>
      {head && (
        <h5 className="text-gradient my-3 text-uppercase widen">{head}</h5>
      )}
    </div>
  );
};

export default Slideshow;
