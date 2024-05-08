<script setup>
import Card from '@/components/card.vue'
import { ref } from 'vue'

const datas = ref([
  { title: 'Judul 1', content: 'konten 1' },
  { title: 'Judul 2', content: 'konten 2' }
])
</script>

<template>
  <div>
    <div v-for="(data, index) in datas" :key="index">
      <Card :title="data.title" :content="data.content" />
    </div>
  </div>
</template>
