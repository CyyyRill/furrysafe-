<template>
  <div class="flex flex-col h-screen bg-gray-100 md:flex-row">
    <!-- Sidebar -->
    <aside class="pt-3 w-full md:w-[16%] bg-white shadow-md">
      <div class="mx-9 my-3 p-4">
        <h1 class="text-xl font-bold">FurrySafe</h1>
      </div>
      <div class = "text-[100%]">  
      <nav class="mx-5 my-11 space-y-3  font-semibold ">
        <p class="pb-2 px-3 text-[70%] text-gray-500  uppercase">Navigation</p>
        <a href="#" class=" flex items-center px-4 py-2  hover:bg-gray-100 hover:rounded-xl">
          <span v-html="homeIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Dashboard
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl">
          <span v-html="messageIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Message
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl">
          <span v-html="exploreIcon" class=" pt-[1%] w-6 h-6 mr-3"></span>
          Explore
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl" @click.prevent="openModal">
          <span v-html="Plusicon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Create
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100 hover:rounded-xl">
          <span v-html="profileIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Profile
        </a>
      </nav>
      <div class=" my-[80%] mx-6 pt-12 font-semibold">
        <a href="#" class="flex items-center px-4 py-2  hover:bg-gray-100">
          <span v-html="settingsIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Setting
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100">
          <span v-html="logoutIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Log out
        </a>
      </div>
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
        <div class="container mx-auto px-4 sm:px-6 py-8">
          <div class="flex flex-col md:flex-row">
            <!-- Main content area -->
            <div class="w-full md:w-3/4 pr-0 md:pr-4">

              <!-- Recent Stories -->
              <div class="grid grid-cols-3 gap-4">
                <!-- Story cards go here -->
              </div>
            </div>

            <!-- Right sidebar -->
            <div class="w-full md:w-1/4 pl-0 md:pl-4">
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


  <!-- Modal -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-left sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-all sm:max-w-lg sm:w-full p-6">
              <div class="flex justify-between items-center">
                <DialogTitle as="h3"
                  class="text-lg font-semibold leading-6 text-gray-900">
                  Create Report
                </DialogTitle>
                <button @click="open = false" ref="cancelButtonRef" class="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-4 overflow-hidden text-gray-700 flex flex-col gap-y-4">
                <div class="flex items-center gap-x-3">
                  <img class="h-16 w-16 border border-gray-500 rounded-full object-cover"
                    :src="profileUrl" alt="profile image" />
                  <div class="flex flex-col gap-y-1">
                    <span class="text-base font-medium">Reporter Name</span>
                    <select
                      class="border text-gray-700 bg-slate-50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex text-left  ">
                      <option value="" selected disabled hidden>Report Type</option>
                      <option value="Missing">Missing Pet</option>
                      <option value="Abandoned">Abandoned Pet</option>
                    </select>
                  </div>
                </div>
                <div class="text-sm">
                  <div class="py-2 flex flex-col gap-y-2">
                    <label for="petcategory" class="font-medium">Pet Category</label>
                    <select id="petcategory"
                      class="text-gray-700 bg-slate-50 block w-full p-2.5 border rounded-lg ">
                      <option  value="" selected disabled hidden>Select Pet Category</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div class="py-2 flex flex-col gap-y-2">
                    <label for="location" class="font-medium">Location</label>
                    <input id="location" placeholder="Enter your Location"
                      class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                  </div>
                  <div class="py-2 flex flex-col gap-y-2">
                    <label for="petcondition" class="font-medium">Pet Condition</label>
                    <textarea name="petcondition" id="petcondition"
                      placeholder="Animal Status" class="border rounded-lg py-2 px-4"></textarea>
                  </div>
                  <label for="reportdetails" class="font-medium">Report Details</label>
                  <div class="flex flex-col gap-y-2 border rounded-lg mt-2">
                    <textarea name="reportdetails" id="reportdetails"
                      placeholder="Write a caption or a description about the pet situation"
                      class="py-2 px-4 rounded-lg"></textarea>
                    <!-- Display images -->
                    <div v-if="imageUrls.length > 0"
                      class="grid grid-cols-1 place-items-center gap-1 border-t">
                      <div v-for="(imageUrl, index) in imageUrls" :key="index"
                        class="relative mx-1">
                        <img :src="imageUrl" alt="Uploaded Image"
                          class="max-w-full max-h-[300px] object-contain border" />
                        <button @click="removeImage(index)"
                          class="absolute top-0 right-0 p-1 text-red-500 hover:text-red-800">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2"
                            class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between my-3 mx-[1.5rem]">
                    <div>
                      <span class="text-gray-400 text-[12px]">Add to your post</span>
                    </div>
                    <div class="flex gap-4 items-center">
                      <div>
                        <label for="file-input"
                          class="cursor-pointer flex gap-3 items-center">
                          <input type="file" multiple @change="handleFileChange"
                            id="file-input" ref="fileInput" class="hidden" />
                          <img :src="images" alt="Images Icon"
                            class="h-[2rem] w-[2rem]" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end w-full mt-4">
                <button type="button"
                  class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  @click="open = false">Report</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
      </Dialog>
      </TransitionRoot>  
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

export default {
  name: 'UserDashboard',
  components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
  data() {
    return {
      homeIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m8.99932 22-.25064-3.5089c-.13474-1.8865 1.35932-3.4911 3.25062-3.4911s3.3854 1.6046 3.2507 3.4911l-.2507 3.5089"/><path d="m2.35139 13.2135c-.35302-2.2973-.52953-3.44587-.09522-4.46412.4343-1.01826 1.39786-1.71495 3.32497-3.10832l1.43985-1.04106c2.3973-1.73333 3.59591-2.6 4.97901-2.6s2.5817.86667 4.979 2.6l1.4399 1.04106c1.9271 1.39337 2.8906 2.09006 3.3249 3.10832.4343 1.01825.2578 2.16682-.0952 4.46412l-.301 1.9589c-.5005 3.2565-.7507 4.8848-1.9186 5.8562s-2.8753.9714-6.2902.9714h-2.2776c-3.41487 0-5.12229 0-6.2902-.9714s-1.41813-2.5997-1.91857-5.8562z" stroke-linejoin="round"/></g></svg>`,
      messageIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linejoin="round"><path d="m14.1706 20.8905c4.183-.278 7.515-3.6573 7.7892-7.8996.0536-.8302.0536-1.69 0-2.5202-.2742-4.24232-3.6062-7.62157-7.7892-7.89963-1.4271-.09486-2.917-.09466-4.3412 0-4.18301.27806-7.51499 3.65731-7.78916 7.89963-.05365.8302-.05365 1.69 0 2.5202.09986 1.5451.78319 2.9757 1.58767 4.1837.4671.8457.15883 1.9012-.3277 2.8232-.3508.6648-.5262.9972-.38537 1.2373.14084.2401.45542.2478 1.08459.2631 1.24424.0303 2.08325-.3225 2.74925-.8136.37772-.2785.56659-.4178.69676-.4338.13016-.016.38633.0895.89857.3005.46039.1896.99495.3066 1.48539.3392 1.4242.0947 2.9141.0949 4.3412 0z" stroke-width="1.5"/><path d="m11.9955 12h.009m3.9865 0h.009m-8 0h.00897" stroke-linecap="round" stroke-width="2"/></g></svg>`,
      exploreIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9L13.5 14.5L9 15.5L10.5 10.5L15 9Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      profileIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8443 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      Plusicon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 4v16m8-8h-16" stroke="#141b34" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>`,
      settingsIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m21 17.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/><path d="m17.5 14h-11c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h11c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5z"/><path d="m3 6.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5z"/><path d="m6.5 3h11c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5h-11c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5z"/></g></svg>`,
      logoutIcon:` <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linecap="round" stroke-width="1.5"><path d="m15 17.625c-.0736 1.8519-1.6169 3.4244-3.6844 3.3738-.481-.0118-1.0755-.1794-2.26448-.5148-2.86151-.8072-5.34557-2.1637-5.94156-5.2025-.10956-.5585-.10956-1.1871-.10956-2.4442v-1.6746c0-1.25709 0-1.88565.10956-2.44424.59599-3.03881 3.08005-4.3953 5.94156-5.20243 1.18898-.33539 1.78348-.50308 2.26448-.51484 2.0675-.05058 3.6108 1.52188 3.6844 3.37382"/><path d="m21 12h-11m11 0c0-.7002-1.9943-2.00847-2.5-2.5m2.5 2.5c0 .7002-1.9943 2.0085-2.5 2.5" stroke-linejoin="round"/></g></svg>`,
      open: false,
      fileInput: null,
      imageUrls: [],
      images: 'https://img.icons8.com/fluency/48/stack-of-photos.png',
      profileUrl: 'path-to-profile-image', // Add your profile image URL here
      colors: ['#6B7280', '#4F46E5', '#10B981', '#EC4899', '#FBBF24'], // Add your colors here
      customColor: '#FFFFFF',
      members: [
        { name: 'Frankie Sullivan', email: 'frankie@untitledui.com', role: 'Owner', avatar: 'path-to-avatar' },
        { name: 'Amélie Lauréat', email: 'amelie@untitledui.com', role: 'Editor', avatar: 'path-to-avatar' },
        { name: 'Katie Moss', email: 'katie@untitledui.com', role: 'Editor', avatar: 'path-to-avatar' }
      ],
    };
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imageUrls.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.imageUrls.splice(index, 1);
    },
    openModal() {
      this.open = true; // Set open to true to show the modal
    },
    selectColor(color) {
      this.customColor = color;
    },
    createTeam() {
      // Implement team creation logic
    }
  }
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