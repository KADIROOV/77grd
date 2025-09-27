// Retseplar saytining yangi retsept qo'shish komponenti - Akmaljon
import React, { useEffect } from "react";
import useDatabase from "../hooks/useDatabase";

function Create() {
  const { postData, getPost } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const img = formData.get("image");
    const overview = formData.get("overview");
    const servings = formData.get("servings");
    const prepMinutes = formData.get("prepMinutes");
    const cookMinutes = formData.get("cookMinutes");
    const ingredients = formData.get("ingredients").split(",");
    const instructions = formData
      .get("instructions")
      .split(",")
      .map((i) => i.trim());
    if (
      title &&
      img &&
      overview &&
      servings &&
      prepMinutes &&
      cookMinutes &&
      ingredients &&
      instructions
    ) {
      postData({
        title,
        image: {
          small: img,
          large: img,
        },
        overview,
        servings,
        prepMinutes: Number(prepMinutes),
        cookMinutes: Number(cookMinutes),
        ingredients: ingredients.map((i) => i.trim()),
        instructions: instructions.map((i) => i.trim()),
      });
      alert("Retsept muvaffaqiyatli qo'shildi");
    } else {
      alert("Barcha maydonlarni to'ldiring");
    }

    e.target.reset();
  };

  return (
    <>
      <form className="create-form-container" onSubmit={handleSubmit}>
        <div className="create-form-grid">
          <input
            type="text"
            name="title"
            placeholder="Sarlavha"
            className="create-form-input"
          />
          <input
            type="url"
            name="image"
            placeholder="Rasm URL"
            className="create-form-input"
          />
          <input
            type="text"
            name="overview"
            placeholder="Qisqacha tavsif"
            className="create-form-input"
          />
          <input
            type="number"
            name="servings"
            placeholder="Porsiyalar"
            className="create-form-input"
          />
          <input
            type="number"
            name="prepMinutes"
            placeholder="Tayyorlash vaqti (daqiqa)"
            className="create-form-input"
          />
          <input
            type="number"
            name="cookMinutes"
            placeholder="Pishirish vaqti (daqiqa)"
            className="create-form-input"
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredientlar (vergul bilan ajratib)"
            className="create-form-input"
          />
          <input
            type="text"
            name="instructions"
            placeholder="Ko'rsatmalar (vergul bilan ajratib)"
            className="create-form-input"
          />
        </div>
        <button type="submit" className="create-form-button">
          Yuborish
        </button>
      </form>
    </>
  );
}

export default Create;
