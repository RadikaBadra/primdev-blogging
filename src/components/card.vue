<script setup>
import { useRoute } from 'vue-router'

const prop = defineProps({
  title: String,
  content: String
})

const route = useRoute().name
</script>

<template>
  <div class="card-blog bg-white p-4">
    <h5 class="mt-5 text-xl font-semibold">
      {{ prop.title }}
    </h5>
    <p class="blog-content">
      {{ prop.content }}
    </p>
    <div class="mt-5 flex justify-center gap-5">
      <router-link
        to="/blog/update"
        v-show="route == 'author-blog'"
        class="btn btn-primary w-full text-center"
        >Update</router-link
      >
      <button v-show="route == 'author-blog'" class="btn btn-primary w-full">Delete</button>
    </div>
  </div>
</template>
