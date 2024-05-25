<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import baseUrl from '@/helper/GlobalVariable'
import { useRoute } from 'vue-router'

const slug = useRoute().params.slug

const blogDetail = ref(null)
const isLoading = ref(false)

const getBlogDetail = async () => {
  isLoading.value = true
  try {
    const response = await axios.get(baseUrl + 'blog/' + slug)
    if (response.status === 200) {
      blogDetail.value = response.data
    }
  } catch (error) {
    console.error('Error fetching blog detail:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getBlogDetail()
})
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="blogDetail">
    <img :src="blogDetail.image" alt="" />
    <h1>{{ blogDetail.title }}</h1>
    <p v-html="blogDetail.content"></p>
  </div>
  <div v-else>Blog not found.</div>
</template>
