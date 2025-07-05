<script setup>
  import { onMounted } from 'vue';
  import Aos from 'aos';
  import 'aos/dist/aos.css'

  onMounted(()=>{
    AOS.init();
  })

  
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
</template>

<style scoped>

</style>