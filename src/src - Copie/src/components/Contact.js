export default function Contact() {
  return `
    <section class="bg-yellow-50 text-yellow-100 py-16 px-8">
      <div class="max-w-3xl mx-auto bg-yellow-100 bg-opacity-80 rounded-lg p-8 shadow-lg">
        <!-- Titre -->
        <h1 class="text-4xl font-bold text-center text-yellow-900 mb-4">Contact Us</h1>
        <p class="text-lg text-center text-yellow-900 mb-8">We’d love to hear from you! Please fill out the form below.</p>
        
        <!-- Formulaire -->
        <form class="space-y-6">
          <!-- Nom -->
          <div>
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" 
                   class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50 " />
          
                   </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" 
                   class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50" />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here"
                      class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-yellow-50 "></textarea>
          </div>

          <!-- Bouton -->
          <div class="text-center">
            <button type="submit" 
                    class="bg-yellow-900 text-yellow-100 px-6 py-3 rounded-lg shadow hover:red-100 focus:ring-4 focus:ring-red-100">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
}
