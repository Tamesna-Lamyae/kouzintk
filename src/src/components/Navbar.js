export default function Navbar() {
  return `
    <nav class="bg-gradient-to-r from-red-900 via-yellow-900 to-red-900 text-yellow-100 p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Nom du Blog avec style marocain -->
        <h1 class="text-2xl font-bold tracking-wide">
          <span class="border-b-4 border-yellow-100">Kozintk</span>
        </h1>
        
        <!-- Liens stylisés -->
        <ul class="flex space-x-8 text-lg">
          <li>
            <a href="#" id="home-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="#" id="recipes-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Recipes</a>
          </li>
          <li>
            <a href="#" id="about-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">About</a>
          </li>
          <li>
            <a href="#" id="contact-link" class="hover:text-yellow-300 transition duration-300 ease-in-out">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
}
