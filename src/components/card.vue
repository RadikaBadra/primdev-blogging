<script setup>
const prop = defineProps({
  title: String,
  content: String
})
</script>

<template>
  <div class="bg-red-600 text-white p-10">
    <div>
      <h1>{{ prop.title }}</h1>
    </div>
    <div>
      <p>{{ prop.content }}</p>
    </div>
  </div>
</template>
