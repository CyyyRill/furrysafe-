<template>
    <div class="min-h-screen flex items-center justify-center">
      <main class="flex w-4/5 bg-white rounded-lg ">
        <!-- Form Section -->
        <section class="w-1/2 p-10">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Upload Files</h3>
          
          <div class="drop_box border-2 border-dashed border-gray-300 rounded-lg p-6">
            <header class="text-center">
              <h4 class="text-lg font-semibold text-gray-600">Select File here</h4>
            </header>
            <p class="text-center text-gray-500 my-4">Files Supported: PDF, TEXT, DOC, DOCX</p>
            <input 
              type="file" 
              hidden 
              accept=".doc,.docx,.pdf"
              ref="fileInput"
              @change="handleFileChange"
            >
            <button 
              class="w-full bg-gray-800 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
              @click="triggerFileInput"
            >
              Choose File
            </button>
            <p v-if="fileName" class="mt-4 text-gray-700">Selected File: {{ fileName }}</p>
          </div>
  
          <button 
            class="w-full bg-blue-500 text-white py-2 mt-6 rounded-lg hover:bg-blue-600 transition duration-300"
            @click="handleLogin"
          >
            Login
          </button>
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
    name: "FileUploadLogin",
    data() {
      return {
        fileName: '',
      };
    },
    methods: {
      // Opens the file input dialog
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      // Handles file change event
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.fileName = file.name;
        } else {
          this.fileName = '';
        }
      },
      // Handle the login button click
      handleLogin() {
        alert("Login button clicked!");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed; otherwise, rely on Tailwind for most styles */
  </style>
  