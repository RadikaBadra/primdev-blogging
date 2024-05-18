<script setup>
import BaseInput from '@/components/baseInput.vue'
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router/routes'

const input = reactive({
  name: '',
  email: '',
  password: '',
  confirm_password: ''
})

const register = async () => {
  if (input.confirm_password == input.password) {
    try {
      const response = await axios.post('https://primdev.alwaysdata.net/api/register', input)
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token)
        router.push('/')
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('Confirm Password dan Password tidak sama')
  }

  // axios({
  //   method: 'post',
  //   url: 'https://primdev.alwaysdata.net/api/register',
  //   data: input,
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // })
  //   .then(function (response) {
  //     localStorage.setItem('token', response.data.token)
  //     router.push('/')
  //     console.log(response)
  //   })
  //   .catch(function (response) {
  //     console.log(response)
  //   })
}
</script>
<template>
  <div class="w-full">
    <form @submit.prevent="register" method="post">
      <div class="flex flex-col gap-3 w-full">
        <BaseInput
          v-model="input.name"
          input-name="Name"
          input-title="Name"
          input-placeholder="enter your name..."
          input-type="text"
        />
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
        <BaseInput
          v-model="input.confirm_password"
          input-name="Confirm Password"
          input-title="Confirm Password"
          input-placeholder="confirm your password..."
          input-type="password"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-6 w-full">Register</button>
    </form>
    <p class="text-sm mt-4 text-center">
      Have an Account? <router-link to="/login" class="text-primary">Login Here</router-link>
    </p>
  </div>
</template>
