<script setup>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- todo show header -->
  <Header />
  <!-- todo show homepage -->
  <RouterView />
  <!-- todo show footer -->
  <Footer />
</template>
