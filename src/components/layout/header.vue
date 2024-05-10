<script setup></script>

<template>
  <div class="w-full bg-slate-700">
    <div class="flex mx-auto px-8 py-1 justify-between w-[1080px]">
      <router-link to="/" class="font-bold text-white"
        ><img src="/logo.png" width="100"
      /></router-link>
      <nav class="flex gap-4">
        <router-link to="/" class="text-white">Home</router-link>
        <router-link to="/about" class="text-white">About</router-link>
        <router-link to="/dashboard" class="text-white">Dashboard</router-link>
      </nav>
    </div>
  </div>
</template>
