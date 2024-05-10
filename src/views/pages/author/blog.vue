<script setup>
import { ref } from 'vue'
import Card from '@/components/card.vue'

const datas = ref([
  { title: 'Judul 1', content: 'konten 1' },
  { title: 'Judul 2', content: 'konten 2' },
  { title: 'Judul 2', content: 'konten 3' },
  { title: 'Judul 2', content: 'konten 4' }
])
</script>
<template>
  <div>
    <div class="mb-10 w-full flex justify-between">
      <h1 class="text-3xl font-semibold text-black">Blogs</h1>
      <router-link class="bg-blue-500 p-3 text-white" to="blog/create">buat blog</router-link>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <div v-for="item in datas" :key="item.id">
        <Card :title="item.title" :content="item.content" />
      </div>
    </div>
  </div>
</template>
