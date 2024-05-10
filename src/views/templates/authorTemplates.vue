<script setup>
import Header from '@/components/layout/header.vue'
import Sidebar from '@/components/layout/sidebar.vue'
</script>

<template>
  <div class="min-h-screen h-full bg-slate-100">
    <div class="grid grid-cols-12 h-full">
      <div class="col-span-2 sticky top-0">
        <Sidebar class="bg-white h-screen" />
      </div>
      <div class="col-span-10">
        <div class="">
          <Header class="border-b py-6" />
          <RouterView class="section p-10" />
        </div>
      </div>
    </div>
  </div>
</template>
