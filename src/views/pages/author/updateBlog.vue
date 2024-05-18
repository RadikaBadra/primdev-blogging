<script setup>
import BaseInput from '@/components/baseInput.vue'
import BaseTextarea from '@/components/baseTextarea.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Update Blog</h1>
    <form action="" class="mt-5 grid grid-cols-1 gap-y-6">
      <BaseInput
        inputType="text"
        inputPlaceholder="enter blog title"
        inputTitle="Blog Title"
        inputName="blogTitle"
      />
      <BaseTextarea
        inputType="text"
        inputPlaceholder="enter blog content"
        inputTitle="Blog Content"
        inputName="blogContent"
      />
    </form>
  </div>
</template>
