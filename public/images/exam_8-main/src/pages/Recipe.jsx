import { useParams, Link } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";
import { useEffect } from "react";

function Recipe() {
  const { id } = useParams();
  const { getPost, data, isPending, error } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, []);

  if (isPending) {
    return (
      <div className="recipe-page">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p>Loading recipe...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recipe-page">
        <div style={{ textAlign: "center", padding: "3rem", color: "#dc2626" }}>
          <p>Error loading recipe: {error}</p>
          <Link to="/recipes" className="btn">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  if (!data || !Array.isArray(data)) {
    return (
      <div className="recipe-page">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p>No recipes available.</p>
          <Link to="/recipes" className="btn">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const recipe = data.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe not found</h2>
        <Link to="/recipes" className="btn">
          Back to recipes
        </Link>
      </div>
    );
  }

  const otherRecipes = data.filter((r) => r.id !== id).slice(0, 3);

  return (
    <div className="recipe-page container">
      <nav className="breadcrumb">
        <Link to="/recipes" className="title">
          Recipes
        </Link>
        <span className="title"> / </span>
        <span className="recipe__title">{recipe.title}</span>
      </nav>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src={recipe.image?.large || recipe.image} alt={recipe.title} />
        </div>

        <div className="recipe-details">
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-overview">{recipe.overview}</p>

          <div className="item__detail">
            <div className="item__details-r">
              <div className="item__details-textt">
                <img
                  src="/images/icon-servings.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Servings: {recipe.servings}</span>
              </div>
              <div className="item__details-textt">
                <img
                  src="/images/icon-prep-time.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Prep: {recipe.prepMinutes} mins</span>
              </div>
            </div>

            <div className="item__details-r">
              <div className="item__details-textt">
                <img
                  src="/images/icon-cook-time.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Cook: {recipe.cookMinutes} min</span>
              </div>
            </div>
          </div>

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="recipe-section">
              <h2 className="recipe-section-title">Ingredients:</h2>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <img
                      className="image"
                      src="/images/icon-bullet-point.svg"
                      alt=""
                    />
                    <span className="ingredients-title">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="recipe-section">
              <h2 className="recipe-section-title">Instructions:</h2>
              <ol className="instructions-list">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    <img
                      className="image"
                      src="/images/icon-bullet-point.svg"
                      alt=""
                    />
                    <span className="ingredients-title">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
      <div className="recipe-border"></div>

      {otherRecipes.length > 0 && (
        <>
          <div className="more-recipes">
            <h2 className="more-recipes-title">More recipes</h2>
            <div className="more-recipes-grid">
              {otherRecipes.map((otherRecipe) => (
                <div key={otherRecipe.id} className="item">
                  <div className="item__image">
                    <picture>
                      <source
                        srcSet={otherRecipe.image?.large || otherRecipe.image}
                        media="(min-width: 1024px)"
                      />
                      <img
                        src={otherRecipe.image?.small || otherRecipe.image}
                        alt={otherRecipe.title}
                      />
                    </picture>
                  </div>
                  <div className="item__content">
                    <h3 className="item__title">{otherRecipe.title}</h3>
                    <p className="item__overview">{otherRecipe.overview}</p>
                    <div className="item__details">
                      <div className="item__details-l">
                        <div className="item__details-text">
                          <img
                            src="/images/icon-servings.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span>Servings: {otherRecipe.servings}</span>
                        </div>
                        <div className="item__details-text">
                          <img
                            src="/images/icon-prep-time.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span>Prep: {otherRecipe.prepMinutes} mins</span>
                        </div>
                      </div>

                      <div className="item__details-l">
                        <div className="item__details-text">
                          <img
                            src="/images/icon-cook-time.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span>Cook: {otherRecipe.cookMinutes} min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/recipe/${otherRecipe.id}`}
                    className="btn btn-itm"
                  >
                    View Recipe
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="recipe-border-1"></div>
        </>
      )}
    </div>
  );
}

export default Recipe;
