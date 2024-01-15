function getRecipe() {
    const ingredient = document.getElementById('ingredient').value;
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const recipeList = document.getElementById('recipeList');

            // Check if data.meals is an array
            if (Array.isArray(data.meals)) {
                recipeList.innerHTML = ""; // Clear previous content

                data.meals.forEach((meal) => {
                    const recipeItem = document.createElement('div');
                    recipeItem.classList.add('recipeItem');

                    // Display recipe name
                    const name = document.createElement('h3');
                    name.textContent = meal.strMeal;
                    recipeItem.appendChild(name);

                    // Display recipe image
                    const image = document.createElement('img');
                    image.style.display = 'block'
                    image.src = meal.strMealThumb;
                    image.alt = meal.strMeal;
                    recipeItem.appendChild(image);

                    recipeList.appendChild(recipeItem);
                });
            } else {
                recipeList.innerHTML = "No meals found";
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}