<script setup>
  import { ref, provide } from 'vue'

  const isLoggedIn = ref(false)

    const updateIsLoggedIn = () =>{
        isLoggedIn.value = true
    }
    
    provide('isLoggedIn', {
        isLoggedIn,
        updateIsLoggedIn
    })
</script>

<template>
  <RouterView />
</template>