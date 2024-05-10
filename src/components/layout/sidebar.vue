<script setup>
import { ref } from 'vue'

const sidebarItems = ref([
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Blog', route: '/blog' }
])
</script>

<template>
  <div class="px-10 border-r h-full flex flex-col items-center">
    <img src="/logo.png" alt="" width="130" />
    <div class="mt-6 w-full flex-col flex gap-4">
      <div v-for="item in sidebarItems" :key="item.id">
        <router-link :to="item.route">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>
