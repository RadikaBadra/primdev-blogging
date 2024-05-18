<script setup>
import { ref } from 'vue'

const routeItem = ref([
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Dashboard', route: '/dashboard' }
])
</script>

<template>
  <div class="w-full bg-slate-700">
    <div class="flex mx-auto px-8 py-4 justify-between w-[1080px]">
      <router-link to="/" class="font-bold text-white"
        ><img src="/logo.png" width="100"
      /></router-link>
      <nav class="flex gap-4 items-center">
        <router-link
          v-for="(item, index) in routeItem"
          :key="index"
          :to="item.route"
          class="text-white"
          >{{ item.name }}</router-link
        >
      </nav>
    </div>
  </div>
</template>
