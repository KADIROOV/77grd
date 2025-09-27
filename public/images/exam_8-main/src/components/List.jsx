import { Item } from "./Item";
import useDatabase from "../hooks/useDatabase";
import { useEffect } from "react";

export const List = ({ selected, selectedClock, searchText }) => {
  const { getPost, data, isPending, error } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, []);

  if (isPending) {
    return (
      <section className="list">
        <div className="list__container">
          <div
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.125rem",
              padding: "3rem",
              width: "100%",
            }}
          >
            <p>Loading recipes...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="list">
        <div className="list__container">
          <div
            style={{
              textAlign: "center",
              color: "#dc2626",
              fontSize: "1.125rem",
              padding: "3rem",
              width: "100%",
            }}
          >
            <p>Error loading recipes: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!data || !Array.isArray(data)) {
    return (
      <section className="list">
        <div className="list__container">
          <div
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.125rem",
              padding: "3rem",
              width: "100%",
            }}
          >
            <p>No recipes available.</p>
          </div>
        </div>
      </section>
    );
  }

  let filteredData = data;

  if (selected.length > 0 || selectedClock.length > 0 || searchText) {
    filteredData = data.filter((recipe) => {
      const matchSearch =
        !searchText ||
        (recipe.title &&
          recipe.title.toLowerCase().includes(searchText.toLowerCase())) ||
        (recipe.overview &&
          recipe.overview.toLowerCase().includes(searchText.toLowerCase()));

      const matchPrep =
        selected.length === 0 ||
        selected.some((prepTime) => {
          const prep = prepTime.split("-")[0];
          return recipe.prepMinutes === Number(prep);
        });

      const matchCook =
        selectedClock.length === 0 ||
        selectedClock.some((cookTime) => {
          const cook = cookTime.split("-")[0];
          return recipe.cookMinutes === Number(cook);
        });

      return matchSearch && matchPrep && matchCook;
    });
  }

  return (
    <section className="list">
      <div className="list__container">
        {filteredData.length > 0 ? (
          filteredData.map((recipe) => <Item recipe={recipe} key={recipe.id} />)
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.125rem",
              padding: "3rem",
              width: "100%",
            }}
          >
            <p>No recipes found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};
