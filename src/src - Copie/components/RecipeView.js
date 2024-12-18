export default function RecipeView(categories) {
    return `
      <section class="p-4 text-yellow-900 bg-yellow-50">
        <h1 class="text-4xl font-bold text-center my-4">Recipes</h1>
        <p class="text-center mb-8">Here you’ll find a collection of traditional Moroccan recipes!</p>
        
        ${categories
          .map(
            (category) => `
              <div class="my-8">
                <h2 class="text-2xl font-semibold mb-4">${category.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  ${category.recipes
                    .map(
                      (recipe) => `
                        <div class="border p-4">
                          <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover mb-4">
                          <h3 class="font-bold text-xl">${recipe.name}</h3>
                          <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                        </div>
                      `
                    )
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')}
      </section>
    `;
  }
  