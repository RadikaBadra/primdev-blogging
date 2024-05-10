<script setup>
import Card from '@/components/card.vue'
import { ref } from 'vue'

const datas = ref([
  { title: 'Judul 1', content: 'konten 1' },
  { title: 'Judul 2', content: 'konten 2' },
  { title: 'Judul 2', content: 'konten 3' },
  { title: 'Judul 2', content: 'konten 4' }
])
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <div v-for="(data, index) in datas" :key="index">
      <Card :title="data.title" :content="data.content" />
    </div>
  </div>
</template>
