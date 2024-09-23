<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Messages</h1>
    <!-- Messages Content -->
    <div class="space-y-4">
      <div v-for="message in messages" :key="message.id" class="bg-white border border-gray-300 rounded-lg p-4">
        <div class="flex items-center space-x-2">
          <img :src="message.profile" class="w-8 h-8 rounded-full" :alt="message.username" />
          <div>
            <span class="font-semibold text-sm">{{ message.username }}</span>
            <p class="text-sm">{{ message.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messages: [
        {
          id: 1,
          username: "user1",
          profile: "profile1.jpg",
          text: "Hey, how are you?",
        },
        // ... more messages
      ],
    };
  },
};
</script>

<style scoped>
/* Optional custom styles */
</style>
