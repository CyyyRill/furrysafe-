<template>

  <div class="flex h-screen bg-gray-50">
    <!-- Side Navbar -->

    <nav class="w-16 md:w-64 bg-white border-r border-gray-300 flex flex-col justify-between fixed h-full">
      <div class="p-4">
        <!-- Logo -->
        <img src="logo.png" alt="Furrsafe" class="hidden md:block h-8 mb-10" />

        <img src="icon.png" alt="Furrsafe" class="md:hidden h-6 mb-10" />

        

        <!-- Nav Items -->
        <div class="space-y-4">

          <router-link to="/home" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">

            <i class="fas fa-home text-xl"></i>

            <span class="hidden md:inline">Home</span>

          </router-link>

          <router-link to="/explore" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <i class="far fa-compass text-xl"></i>
            <span class="hidden md:inline">Explore</span>

          </router-link>

          <router-link to="/messages" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">

            <i class="far fa-paper-plane text-xl"></i>
            <span class="hidden md:inline">Messages</span>

          </router-link>

          <router-link to="/search" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">

            <i class="fas fa-search text-xl"></i>

            <span class="hidden md:inline">Search</span>

          </router-link>

          <router-link to="/reels" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <i class="fas fa-video text-xl"></i>

            <span class="hidden md:inline">Reels</span>

          </router-link>
          <router-link to="/profile" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <i class="far fa-user text-xl"></i>

            <span class="hidden md:inline">Profile</span>
          </router-link>
        </div>

      </div>

      
      <!-- Logout button -->

      <div class="p-4">
        <router-link to="/logout" class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">

          <i class="fas fa-sign-out-alt text-xl"></i>

          <span class="hidden md:inline">Logout</span>

        </router-link>

      </div>

    </nav>


    <!-- Main Content -->

    <div class="flex-grow ml-16 md:ml-64 overflow-y-auto">

      <router-view></router-view>

    </div>

  </div>

</template>


<script>
export default {

  name: "furryDashboard",

  data() {

    return {

      dropdownOpen: false,

    };

  },

  methods: {

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;

    }

  }

};

</script>


<style scoped>
/* Optional custom styles */

</style>
