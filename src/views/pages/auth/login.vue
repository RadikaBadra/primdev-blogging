<script setup>
import BaseInput from '@/components/baseInput.vue'
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router/routes'

const input = reactive({
  email: '',
  password: ''
})

const login = async () => {
  try {
    const response = await axios.post('https://primdev.alwaysdata.net/api/login', input)
    if (response.status == 200) {
      localStorage.setItem('token', response.data.token)
      router.push('/')
      console.log(response)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="w-full">
    <form @submit.prevent="login" method="post">
      <div class="flex flex-col gap-3 w-full">
        <BaseInput
          v-model="input.email"
          input-name="Email"
          input-title="Email"
          input-placeholder="enter your email..."
          input-type="email"
        />
        <BaseInput
          v-model="input.password"
          input-name="Password"
          input-title="Password"
          input-placeholder="enter your password..."
          input-type="password"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-6 w-full">Login</button>

      <p class="text-sm mt-4 text-center">
        Don't have Account?
        <router-link to="/register" class="text-primary">Register Here</router-link>
      </p>
    </form>
  </div>
</template>
