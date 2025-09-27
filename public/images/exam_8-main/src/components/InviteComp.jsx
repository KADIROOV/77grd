import { Link } from "react-router-dom";

function InviteComp() {
  return (
    <section className="container">
      <div className="home__cta">
        <div className="home__cta-content">
          <h2 className="home__cta-title">Ready to cook smarter?</h2>
          <p className="home__cta-subtitle">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link to={"/recipes"} className="btn">
            Browse recipes
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InviteComp;
