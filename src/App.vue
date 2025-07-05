<script setup>
  import { onMounted } from 'vue';
  import Aos from 'aos';
  import 'aos/dist/aos.css'
  import Header from '@components/Header.vue';

  onMounted(()=>{
    AOS.init();
  })

  
</script>

<template>
  <div>
    <Header/>
  </div>
</template>

<style scoped>

</style>