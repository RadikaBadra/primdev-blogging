<script setup>
import { useRoute } from 'vue-router'

const prop = defineProps({
  title: String,
  content: String
})

const router = useRoute().name
</script>

<template>
  <div class="bg-slate-100 p-4">
    <h1 class="text-2xl font-bold">{{ prop.title }}</h1>
    <p class="text-lg">{{ prop.content }}</p>
    <div v-show="router == 'author-blog'" class="mt-4 flex gap-3">
      <router-link to="blog/update" class="p-2 bg-blue-600 text-white">update</router-link>
      <button class="p-2 bg-red-600 text-white">delete</button>
    </div>
  </div>
</template>
