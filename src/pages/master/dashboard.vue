<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="pt-3 w-64 bg-white shadow-md">
      <div class="mx-11 my-4 p-4">
        <h1 class="text-xl font-bold">FurrySafe</h1>
      </div>
      <nav class="mx-7 my-8 space-y-4  font-semibold ">
        <p class="pb-2 px-3 text-xs font-semibold text-gray-500  uppercase">Navigation</p>
        <a href="#" class=" flex items-center px-4 py-2  bg-gray-100">
          <span v-html="homeIcon" class="w-6 h-6 mr-3"></span>
          Dashboard
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100">
          <span v-html="messageIcon" class="w-6 h-6 mr-3"></span>
          Message
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100">
          <span v-html="exploreIcon" class="w-6 h-6 mr-3"></span>
          Explore
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100">
          <span v-html="profileIcon" class="w-6 h-6 mr-3"></span>
          Profile
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100">
          <span v-html="teamIcon" class="w-6 h-6 mr-3"></span>
          Team
        </a>
      </nav>
      <div class="my-52 mx-4 p-4 font-semibold">
        <a href="#" class="flex items-center px-4 py-2  hover:bg-gray-100">
          <span v-html="settingsIcon" class="w-6 h-6 mr-3"></span>
          Setting
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100">
          <span v-html="logoutIcon" class="w-6 h-6 mr-3"></span>
          Log out
        </a>
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Navbar -->
      <header class="h-20 flex justify-between items-center p-4 bg-white shadow-md">
        <div class="flex-1">
          <input type="text" placeholder="Search" class="w-full max-w-xl px-4 py-2 rounded-full bg-gray-100">
        </div>
        <div class="flex items-center space-x-4">
          <button class="text-gray-500 hover:text-gray-600">
            <img :src="notificationIcon" alt="Notifications" class="w-5 h-5">
          </button>
          <button class="text-gray-500 hover:text-gray-600">
            <img :src="messageIcon" alt="Messages" class="w-5 h-5">
          </button>
          <button class="pr-10 flex items-center space-x-2">
            <img src="https://placekitten.com/40/40" alt="Profile" class="w-8 h-8 rounded-full">
            <span class="font-medium">Jaysan</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <div class="flex">
            <!-- Main content area -->
            <div class="w-3/4 pr-4">
              <!-- Share your idea section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <div class="flex items-center mb-4">
                  <img src="https://placekitten.com/32/32" alt="User" class="w-8 h-8 rounded-full mr-2">
                  <input type="text" placeholder="Share your idea with team" class="w-full bg-gray-100 rounded-full px-4 py-2">
                </div>
                <div class="flex space-x-4">
                  <button class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                    Image
                  </button>
                  <button class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                    Video
                  </button>
                  <button class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
                    Music
                  </button>
                  <button class="ml-auto bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">Post</button>
                </div>
              </div>

              <!-- Recent Stories -->
              <h2 class="text-2xl font-semibold mb-4">Recent Stories</h2>
              <div class="grid grid-cols-3 gap-4">
                <!-- Story cards go here -->
              </div>
            </div>

            <!-- Right sidebar -->
            <div class="w-1/4 pl-4">
              <!-- Present section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Present</h3>
                <!-- Present content goes here -->
              </div>

              <!-- Leaves section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Leaves</h3>
                <!-- Leaves content goes here -->
              </div>

              <!-- Birthday section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Birthday</h3>
                <!-- Birthday content goes here -->
              </div>

              <!-- Work Anniversaries section -->
              <div class="bg-white rounded-lg shadow-md p-4">
                <h3 class="font-semibold mb-2">Work Anniversaries</h3>
                <!-- Work Anniversaries content goes here -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data() {
    return {
      homeIcon: `<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m8.99932 22-.25064-3.5089c-.13474-1.8865 1.35932-3.4911 3.25062-3.4911s3.3854 1.6046 3.2507 3.4911l-.2507 3.5089"/><path d="m2.35139 13.2135c-.35302-2.2973-.52953-3.44587-.09522-4.46412.4343-1.01826 1.39786-1.71495 3.32497-3.10832l1.43985-1.04106c2.3973-1.73333 3.59591-2.6 4.97901-2.6s2.5817.86667 4.979 2.6l1.4399 1.04106c1.9271 1.39337 2.8906 2.09006 3.3249 3.10832.4343 1.01825.2578 2.16682-.0952 4.46412l-.301 1.9589c-.5005 3.2565-.7507 4.8848-1.9186 5.8562s-2.8753.9714-6.2902.9714h-2.2776c-3.41487 0-5.12229 0-6.2902-.9714s-1.41813-2.5997-1.91857-5.8562z" stroke-linejoin="round"/></g></svg>`,
      messageIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#141B34" stroke-width="1.5"/><path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      exploreIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9L13.5 14.5L9 15.5L10.5 10.5L15 9Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      profileIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8443 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      teamIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      settingsIcon: `<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m21 17.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/><path d="m17.5 14h-11c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h11c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5z"/><path d="m3 6.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5z"/><path d="m6.5 3h11c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5h-11c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5z"/></g></svg>`,
      logoutIcon:` <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linecap="round" stroke-width="1.5"><path d="m15 17.625c-.0736 1.8519-1.6169 3.4244-3.6844 3.3738-.481-.0118-1.0755-.1794-2.26448-.5148-2.86151-.8072-5.34557-2.1637-5.94156-5.2025-.10956-.5585-.10956-1.1871-.10956-2.4442v-1.6746c0-1.25709 0-1.88565.10956-2.44424.59599-3.03881 3.08005-4.3953 5.94156-5.20243 1.18898-.33539 1.78348-.50308 2.26448-.51484 2.0675-.05058 3.6108 1.52188 3.6844 3.37382"/><path d="m21 12h-11m11 0c0-.7002-1.9943-2.00847-2.5-2.5m2.5 2.5c0 .7002-1.9943 2.0085-2.5 2.5" stroke-linejoin="round"/></g></svg>`,
    }
  },
}
</script>

<style scoped>
/* Component-specific styles */
svg {
  fill: currentColor; /* This allows the icon to inherit the text color */
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>