<script setup>
import Card from '@/components/card.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/helper/GlobalVariable.js'

const isLoading = ref(false)
const blogList = ref([])

const hasBlogs = computed(() => blogList.value.length > 0)

const getData = async () => {
  isLoading.value = true
  try {
    const response = await axios.get(baseUrl + 'blog')
    if (response.status === 200) {
      blogList.value = response.data
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div v-if="hasBlogs" class="grid grid-cols-4 gap-4">
    <div v-for="(data, index) in blogList" :key="index">
      <router-link :to="'/blog/' + data.slug">
        <Card :title="data.title" :content="data.content" :blog_id="data.id" :slug="data.slug" />
      </router-link>
    </div>
  </div>
  <div v-else>No blogs found.</div>
  <div v-if="isLoading">Loading...</div>
</template>
