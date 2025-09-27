import { Link } from "react-router-dom";

export const Item = ({ recipe }) => {
  console.log(recipe);

  return (
    <div className="item">
      <div className="item__image">
        <picture>
          <img src={recipe.image.large} alt={recipe.title} />
        </picture>
      </div>
      <div className="item__content">
        <h3 className="item__title">{recipe.title}</h3>
        <p className="item__overview">{recipe.overview}</p>
        <div className="item__details">
          <div className="item__details-l">
            <div className="item__details-text">
              <img src="/images/icon-servings.svg" alt="" />
              <span>Servings: {recipe.servings}</span>
            </div>
            <div className="item__details-text">
              <img src="/images/icon-prep-time.svg" alt="" />
              <span>Prep: {recipe.prepMinutes} mins</span>
            </div>
          </div>

          <div className="item__details-l">
            <div className="item__details-text">
              <img src="/images/icon-cook-time.svg" alt="" />
              <span>Cook: {recipe.cookMinutes} min</span>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/recipe/${recipe.id}`} className="btn btn-itm">
        View Recipe
      </Link>
    </div>
  );
};
