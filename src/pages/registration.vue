<template>
  <div class="flex items-center justify-center min-h-screen">
    <main class="flex w-4/5 bg-white rounded-lg ">
      <!-- Form Section -->
      <section class="w-1/2 p-10">
        <h1 class="text-2xl font-semibold text-gray-800">Sign up</h1>

        <form @submit.prevent="handleSubmit">
          <!-- Full Name -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <div class="flex space-x-4 mt-2">
              <input
                type="text"
                v-model="firstName"
                placeholder="First Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="text"
                v-model="lastName"
                placeholder="Last Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <!-- Username -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              v-model="username"
              placeholder="Username"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <!-- Password -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              minlength="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <!-- Birthdate -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Birth-date</label>
            <div class="flex space-x-4 mt-2">
              <select
                v-model="birthMonth"
                class="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                required
              >
                <option value="" disabled>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <!-- Add more months -->
              </select>

              <select
                v-model="birthDay"
                class="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                required
              >
                <option value="" disabled>Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <!-- Add more days -->
              </select>

              <select
                v-model="birthYear"
                class="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                required
              >
                <option value="" disabled>Year</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <!-- Add more years -->
              </select>
            </div>
          </div>

          <!-- Gender -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Gender</label>
            <div class="flex space-x-4 mt-2">
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="gender"
                  value="Female"
                  class="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span class="ml-2 text-gray-700">Female</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="gender"
                  value="Male"
                  class="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span class="ml-2 text-gray-700">Male</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="gender"
                  value="Prefer not to say"
                  class="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span class="ml-2 text-gray-700">Prefer not to say</span>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full mt-6 bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </form>
      </section>

      <!-- Image Section -->
      <section class="w-1/2 flex items-center justify-center bg-gray-50">
        <img
          src="@/assets/image/home_animalshelter_slider_pic4.png"
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
  name: 'UserRegistration',  // Changed the component name to be multi-word
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        birthDate: `${this.birthMonth} ${this.birthDay}, ${this.birthYear}`,
        gender: this.gender
      });
    }
  }
};
</script>

<style scoped>
/* Tailwind will handle most of the styling; custom styles can go here */
</style>
