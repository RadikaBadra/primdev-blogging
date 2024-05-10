<script setup>
import BaseInput from '@/components/baseInput.vue'
import BaseTextArea from '@/components/baseTextarea.vue'
</script>

<template>
  <div>
    <div>
      <h1 class="text-3xl font-semibold text-black">Update Blog</h1>
    </div>
    <form class="mt-5 grid grid-cols-1 gap-5">
      <BaseInput
        input-type="text"
        input-placeholder="enter blog title"
        input-title="Blog Title"
        input-name="blogTitle"
      />
      <BaseTextArea
        input-type="text"
        input-placeholder="enter blog content"
        input-title="Blog Content"
        input-name="blogContent"
      />
      <button class="btn btn-primary w-fit" type="submit">Submit</button>
    </form>
  </div>
</template>
