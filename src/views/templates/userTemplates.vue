<script setup>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- todo show header -->
  <Header />
  <!-- todo show homepage -->
  <div class="bg-slate-100 h-screen p-10">
    <RouterView />
  </div>
  <!-- todo show footer -->
  <Footer />
</template>
