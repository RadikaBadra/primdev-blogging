<script setup>
import { onMounted, ref } from 'vue'
import Card from '@/components/card.vue'
import getAuthor from '@/helper/getAuthor'
import axios from 'axios'
import { baseUrl, token } from '@/helper/GlobalVariable'

const isLoading = ref(false)
const blogList = ref([])

const getData = async () => {
  isLoading.value = true
  try {
    const author = await getAuthor()
    const response = await axios.get(baseUrl + 'blog/author/' + author.id, {
      headers: { Authorization: `Bearer ${token}` }
    })
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
  <div>
    <div class="mb-10 w-full flex justify-between">
      <h1 class="text-3xl font-semibold text-black">Blogs</h1>
      <router-link class="bg-blue-500 p-3 text-white" to="blog/create">buat blog</router-link>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div v-for="item in blogList" :key="item.id">
        <Card :title="item.title" :content="item.content" :blog_id="item.id" :slug="item.slug" />
      </div>
    </div>
  </div>
</template>
