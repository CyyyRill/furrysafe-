<template>
  <div class=" flex items-center justify-center">
    <main class="flex w-4/5 bg-white rounded-lg ">
      <!-- Form Section -->
      <section class="w-1/2 p-10">
        <h1 class="text-2xl font-semibold text-gray-800">Welcome Back</h1>
        <p class="mt-4 text-gray-600">
          Today is a new day. It's your day. Shape it. Sign in to start managing your projects.
        </p>

        <form @submit.prevent="handleSubmit">
          <!-- Email Input -->
          <label class="block mt-6 text-gray-700">Email</label>
          <div class="relative mt-2">
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              placeholder="example@email.com"
              required
            />
          </div>

          <!-- Password Input -->
          <label class="block mt-4 text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            placeholder="At least 8 characters"
            minlength="8"
            required
          />

          <!-- Remember Me & Forgot Password -->
          <div class="mt-4 flex justify-between items-center">
            <label class="flex items-center">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-blue-600"
              />
              <span class="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full mt-6 bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign in
          </button>
        </form>

        <p class="mt-6 text-gray-600">
          Don’t have an account? 
          <a href="/register" class="text-blue-600 hover:underline">Sign up</a>
        </p>

        <a href="#" class="block mt-4 text-sm text-gray-600 hover:underline">Trouble signing in?</a>
      </section>

      <!-- Image Section -->
      <section class="w-1/2 flex items-center justify-center bg-gray-50">
        <img
          :src="dogImage"
          alt="Dog"
          class="rounded-lg"
          style="max-width: 70%;"
        />
      </section>
    </main>
  </div>
</template>


<script>
  export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      dogImage: require('@/assets/image/home_animalshelter_slider_pic4.png'),
    };
  },
  methods: {
    handleSubmit() {
      // Handle the form submission
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember me:', this.rememberMe);
    },
  },
  name: 'UserLogin'
};
</script>

<style scoped>
/* Additional styles, if necessary */
</style>
