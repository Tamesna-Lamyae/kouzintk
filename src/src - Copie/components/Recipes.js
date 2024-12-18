export default function Recipes() {
  return `
    <section class="p-4 text-yellow-900 bg-yellow-50 " >
      <h1 class="text-4xl font-bold text-center my-4">Recipes</h1>
      <p class="text-center mb-8">Here you’ll find a collection of traditional Moroccan recipes!</p>

      <!-- Cold Starters Section -->
      <div class="my-8  ">
        <h2 class="text-2xl font-semibold mb-4">Cold Starters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/77/08/43/7708435421038086e2a2befb82cb7f4c.jpg" alt="Carrots with Chermoula" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Carrots with Chermoula</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/f8/a6/c1/f8a6c1c1701ca4e5fdd60c1c728f354a.jpg" alt="Taktouka" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Taktouka</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
                <div class="border p-4">
                  <img src="https://i.pinimg.com/736x/45/b8/b7/45b8b7b2b4013484de48e8f2a43da15c.jpg" alt="Pastilla" class="w-full h-48 object-cover mb-4">
                  <h3 class="font-bold text-xl">Olives mcherml</h3>
                  <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
                </div>
        </div>
      </div>

      <!-- Hot Starters Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Hot Starters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/ce/1d/a2/ce1da224bd7a26d3c2a9414a185d10ac.jpg" alt="Bkoulah" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Bkoulah</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/a4/8e/77/a48e77fff7f25b3083cbbc13f40f279c.jpg" alt="Chicken Briouates" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Zaalouk</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/af/41/f5/af41f56da6294fbf7e474ac4abf86f63.jpg" alt="Harira" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Harira</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Savory Main Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Savory Main Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/dd/86/c4/dd86c498ad068ef6db5001210f905c44.jpg" alt="Tagines" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">chicken tagine </h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/99/60/d8/9960d84fe464d20c1fe13b69623e1667.jpg" alt="Couscous" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">couscous légumes marocain</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/25/20/94/2520941baa7c73b6100c671d1b4abda8.jpg" alt="Grilled Dishes" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Tanjia</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Sweet Main Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Sweet Main Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/bb/48/55/bb4855189d61afd224e2cb3b88a05f54.jpg" alt="Prune or Apricot Tagine" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Prune or Apricot Tagine</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/0f/ca/e7/0fcae77e1906582b0132d9d1d63cf08e.jpg" alt="Chicken with Almonds and Honey" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Couscous Tfaya</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/21/44/72/2144728d3fc6629c11a710ed687d54d6.jpg" alt="Couscous Tfaya" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken Tagine with Onions & Raisins</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Sweet and Savory Dishes Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Sweet and Savory Dishes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/20/24/a3/2024a39c982316e2d8ca505bbe63cb66.jpg" alt="Chicken Pastilla" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken Pastilla</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/28/66/fb/2866fb08ea0cfc05c9dae88e82ab6856.jpg" alt="Mrouzia" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Chicken with Dghmira</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/0c/5b/04/0c5b04bb60e023339f5dffa21af0bad9.jpg" alt="Vegetables Tagine or Couscous with Tfaya" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Vegetables Tagine or Couscous with Tfaya</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Desserts Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Desserts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/8c/0d/5f/8c0d5f13a4acb471f47c91002e5c1936.jpg" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Sellou</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/bc/7d/14/bc7d14e3f7f6d8d75c5ec79085f5588f.jpg" alt="Baghrir with Honey and Butter" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Mhencha</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/97/b3/6a/97b36ab6c945bd63a83f8c43ae954811.jpg" alt="Milk and Almond Pastilla" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Milk and Almond Pastilla</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Pastries Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Pastries</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/ff/51/92/ff51923499ead19b8e6da053ca2c73b0.jpg" alt="Kaab el Ghzal" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Kaab el Ghzal</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/dd/ec/a6/ddeca682fea802d34f92a3f9b3738a7a.jpg" alt="Ghriba" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Ghriba</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/34/32/05/34320576f0ba32f54ec69d402799d045.jpg" alt="Fekkas" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Fekkas</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

      <!-- Beverages Section -->
      <div class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Beverages</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/43/61/c9/4361c9369f33fb9bbc10f2ab05ac3c9b.jpg" alt="Mint Tea" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Mint Tea</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/474x/3f/e8/26/3fe8267f3e986201d6fd942225264e10.jpg" alt="Herbal Teas" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Moroccan Coffee</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
          <div class="border p-4">
            <img src="https://i.pinimg.com/736x/8b/65/77/8b65778e442a569fde04cebb9be0c915.jpg" alt="Raïb" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-xl">Raïb</h3>
            <button class="bg-red-900 text-white py-2 px-4 mt-2 rounded">View Recipe</button>
          </div>
        </div>
      </div>

    </section>
  `;
}
