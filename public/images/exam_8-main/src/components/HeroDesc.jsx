import React from "react";
import { Link } from "react-router-dom";

function HeroDesc() {
  return (
    <>
      <section className="home__desc">
        <div className="home__desc-bg-img"></div>
        <h1 className="home__desc-title">
          <span className="highlight">Healthy</span> meals, zero fuss
        </h1>
        <p className="home__desc-subtitle">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <Link to={"/recipes"} className="home__desc-btn btn">
          Start exploring
        </Link>
        <div className="home__desc-img">
          <picture>
            <source
              srcSet="/images/image-home-hero-desctop.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/images/image-home-hero-tablet.png"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-home-hero-mobile.png"
              alt="Cooking"
              className="hero-img"
            />
          </picture>
        </div>
      </section>
      <section className="home__get">
        <h2 className="home__get-title">What you’ll get</h2>
        <div className="home__get-list container">
          <div className="home__get-item">
            <img
              className="home__get-item-image"
              src="images/icon-whole-food-recipes.svg"
              alt="Whole-food recipes"
            />
            <h3 className="home__get-item-title">Whole-food recipes</h3>
            <p className="home__get-item-subtitle">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
          <div className="home__get-item">
            <img
              className="home__get-item-image"
              src="/images/icon-minimum-fuss.svg"
              alt="Minimum fuss"
            />
            <h3 className="home__get-item-title">Minimum fuss</h3>
            <p className="home__get-item-subtitle">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="home__get-item">
            <img
              className="home__get-item-image"
              src="/images/icon-search-in-seconds.svg"
              alt="Search in seconds"
            />
            <h3 className="home__get-item-title">Search in seconds</h3>
            <p className="home__get-item-subtitle">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </section>
      <section className="home__built container">
        <div className="home__built-info">
          <h2 className="home__built-title">Built f or real life</h2>
          <p className="home__built-subtitle">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span className="home__built-subtitle-bg">
              30 minutes <span className="bg-img"></span>
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="home__built-subtitle">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <div className="home__built-image">
          <picture>
            <source
              srcSet="/images/image-home-real-life-desctop.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/images/image-home-real-life-tablet.png"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-home-real-life-mobile.png"
              alt="Cooking"
              className="hero-img"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default HeroDesc;
