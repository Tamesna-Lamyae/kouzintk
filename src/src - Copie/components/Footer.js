export default function Footer() {
  return `
    <footer class="bg-gradient-to-r from-red-900 via-yellow-900 to-red-900 text-yellow-100 text-center bottom-0 fixed p-5 shadow-lg w-full left-0  w-full z-0">
      <div class="container mx-auto">
        
        <!-- Réseaux sociaux -->
        <div class="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-yellow-300">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="hover:text-yellow-300">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-yellow-300">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-sm">© 2024 Moroccan Cuisine Blog - All Rights Reserved</p>
      </div>
    </footer>
  `;
}

