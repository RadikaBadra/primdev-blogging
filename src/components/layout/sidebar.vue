<script setup>
import { ref } from 'vue'

const routeItem = ref([
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Blogs', route: '/blog' }
])

const logout = () => {
  localStorage.removeItem('token')
  location.reload()
}
</script>

<template>
  <div class="px-10 border-r h-full flex flex-col items-center">
    <img src="/logo.png" width="130" />
    <div class="mt-6 w-full flex-col flex gap-4">
      <div v-for="(item, index) in routeItem" :key="index">
        <router-link :to="item.route">{{ item.name }}</router-link>
      </div>
      <button class="bg-red-800 text-white p-[5px_12px]" @click="logout">Logout</button>
    </div>
  </div>
</template>
