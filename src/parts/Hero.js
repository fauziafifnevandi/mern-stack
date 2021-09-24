import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Fade from "react-reveal/Fade";

import Button from "elements/Button";

import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-3">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-4">
              Forget Busy Work, Start Next Vacation
            </h1>
            <p
              className="mb-4-font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family, Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 25 }}>
                <img
                  width="36"
                  height="36"
                  src="../assets/images/icon_traveler.svg"
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 30 }}>
                <img
                  width="36"
                  height="36"
                  src="/assets/images/icon_treasure.svg"
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 25 }}>
                <img
                  width="36"
                  height="36"
                  src="/assets/images/icon_cities.svg"
                  alt={`${props.data.travelers} Cities`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 380 }}>
              <img
                src={ImageHero}
                alt=""
                className="img-fluid position-absolute"
                style={{
                  margin: "-10px 0 0 -30px",
                  zIndex: 1,
                  width: 520,
                  height: 380,
                }}
              />
              <img
                src={ImageHero_}
                alt=""
                className="img-fluid position-absolute"
                style={{
                  margin: "15px 0 10px 0",
                  zIndex: 0,
                  width: 520,
                  height: 380,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
