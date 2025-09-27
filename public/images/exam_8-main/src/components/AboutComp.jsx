function AboutComp() {
  return (
    <>
      <section className="main-sect">
        <div className="info-block">
          <h2 className="little-title">Our Mission</h2>
          <h1 className="main-title">
            Help more people cook nourishing meals, more often.
          </h1>
          <p className="maqsad-text">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="maqsad-text">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
        <div className="maqsad-rasm">
          <picture>
            <source
              srcSet="/images/image-about-our-mission-large.webp"
              media="(min-width: 1024px)"
              width={618}
              height={600}
            />
            <source
              srcSet="/images/image-about-our-mission-large.webp"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-about-our-mission-small.webp"
              alt="Cooking"
              className="hero-rasm"
            />
          </picture>
        </div>
      </section>
      <div className="border-line"></div>

      <section className="why-sect container">
        <h2 className="why-title">Why We Exist</h2>

        <div className="why-list">
          <div className="why-item">
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Cut through the noise.</h3>
                <p className="why-content-subtext">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </div>
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Empower home kitchens.</h3>
                <p className="why-content-subtext">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </div>
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Make healthy look good.</h3>
                <p className="why-content-subtext">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-line"></div>

      {/* Philosophy */}
      <section className="why-sect container">
        <h2 className="why-title">Our Food Philosophy</h2>

        <div className="why-list">
          <div className="why-item">
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Whole ingredients first.</h3>
                <p className="why-content-subtext">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </div>
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Flavor without compromise.</h3>
                <p className="why-content-subtext">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </div>
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Respect for time.</h3>
                <p className="why-content-subtext">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </div>
            <div className="why-content">
              <div className="why-content-rasm">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="why-content-text">
                <h3 className="why-content-title">Sustainable choices.</h3>
                <p className="why-content-subtext">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-line"></div>

      <section className="beyond-sect container">
        <div className="beyond-text">
          <h2 className="beyond-title">Beyond the Plate</h2>
          <p className="beyond-subtext">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="beyond-list">
            <li className="beyond-item">
              Encourage family dinners and social cooking.
            </li>
            <li className="beyond-item">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li className="beyond-item">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <div className="beyond-rasm">
          <picture>
            <source
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              media="(min-width: 1024px)"
              width={714}
              height={400}
            />
            <source
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-about-beyond-the-plate-small.webp"
              alt="Cooking"
              className="hero-rasm"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default AboutComp;