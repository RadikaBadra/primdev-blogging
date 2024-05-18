<script setup>
import Card from '@/components/card.vue'
import { ref } from 'vue'

const datas = ref([
  { title: 'Judul 1', content: 'konten 1' },
  { title: 'Judul 2', content: 'konten 2' },
  { title: 'Judul 3', content: 'konten 3' },
  { title: 'Judul 4', content: 'konten 4' }
])
</script>

<template>
  <div>
    <div class="mb-10 flex justify-between">
      <h1 class="text-3xl font-bold">Blog</h1>
      <router-link to="blog/create" class="p-2 bg-blue-500 text-white">buat blog</router-link>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <Card
        v-for="(item, index) in datas"
        :key="index"
        :title="item.title"
        :content="item.content"
      />
    </div>
  </div>
</template>
