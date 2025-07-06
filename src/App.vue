<script setup>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css'
  import Header from '@components/Header.vue';
  import Hero from '@components/Hero.vue';

  onMounted(()=>{
    AOS.init();
  })

  
</script>

<template>
  <div>
    <Header/>
    <Hero/>
  </div>
</template>

<style scoped>

</style>