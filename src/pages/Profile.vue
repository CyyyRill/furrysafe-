<template>
  <div class="profile-container max-w-3xl mx-auto">
    <!-- Cover photo -->
    <div class="cover-photo h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${coverPhotoUrl})` }"></div>

    <div class="p-6">
      <div class="profile-header flex justify-between items-center mb-6 relative">
        <!-- Profile picture (overlapping the cover photo) -->
        <div class="flex items-center">
          <img :src="require('@/assets/image/461037919_2123111208085786_2188055552214296559_n.jpg')" class="w-24 h-24 rounded-full border-4 border-white absolute -top-12">
          <div class="ml-28">
            <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
            <p class="text-gray-600">{{ profile.tagline }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <button class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Message</button>
          <button class="border border-gray-300 px-4 py-2 rounded">+ Follow</button>
        </div>
      </div>

      <div class="profile-content grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <section class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Experience</h2>
            <p>{{ profile.experience }}</p>
          </section>

          <section class="mb-6">
            <h2 class="text-xl font-semibold mb-2">About me</h2>
            <p>{{ profile.about }}</p>
          </section>

          <section>
            <div class="flex justify-between items-center mb-2">
              <h2 class="text-xl font-semibold">Case studies</h2>
              <a href="#" class="text-blue-500">View more</a>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(project, index) in profile.projects" :key="index" class="border rounded-lg overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-32 object-cover">
                <div class="p-2">
                  <h3 class="font-semibold">{{ project.title }}</h3>
                  <p class="text-sm text-gray-600">{{ project.description }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="col-span-1">
          <section class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Skills</h2>
            <div class="flex flex-wrap">
              <span v-for="(skill, index) in profile.skills" :key="index" class="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2">{{ skill }}</span>
            </div>
          </section>

          <section class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Location</h2>
            <p>{{ profile.location }}</p>
          </section>

          <section class="mb-6">
            <h2 class="text-xl font-semibold mb-2">Website</h2>
            <a :href="profile.website" class="text-blue-500">{{ profile.website }}</a>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-2">Email</h2>
            <a :href="`mailto:${profile.email}`" class="text-blue-500">{{ profile.email }}</a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coverPhoto from '@/assets/image/48-17-jpg.webp';

export default {
  name: 'UserProfile',
  data() {
    return {
      coverPhotoUrl: coverPhoto,
      profile: {
        name: 'Junecyril Dolendo',
        tagline: 'I\'m a dog castcher',
        avatar: '/path/to/avatar.jpg',
        coverPhoto: '/path/to/cover-photo.jpg',
        experience: 'I am dfjsdfkhfuwehowevhouiehfuioeh blablaegjfahkfaklbaghaihkgklfh',
        about: 'I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night.',
        skills: ['sleep', 'Gamer', 'Sleep', 'sleep at morning'],
        location: 'Secret',
        website: 'ambot.com',
        email: 'hello@yahoo.com',
        projects: [
          { title: 'Dsgfsdg', image: '/path/to/dropbox.jpg', description: 'dsgfsdgfsdgfsdg' },
          { title: 'Fsgd', image: '/path/to/framer.jpg', description: 'sgdfgfgfgfsdgfds' },
          { title: 'sgfsdg', image: '/path/to/square.jpg', description: 'sgdfgdgsfgs' },
        ],
      },
    };
  },
};
</script>

<style scoped>
.cover-photo {
  background-size: cover;
  background-position: center;
}
</style>
