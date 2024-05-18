<script setup>
import Sidebar from '@/components/layout/sidebar.vue'
import Header from '@/components/layout/header.vue'
</script>

<template>
  <div class="h-screen bg-slate-100">
    <div class="grid grid-cols-12 h-full">
      <Sidebar class="col-span-2 sticky top-0 h-screen" />
      <div class="col-span-10">
        <div>
          <Header class="border-b py-6" />
          <RouterView class="section p-10" />
        </div>
      </div>
    </div>
  </div>
</template>
