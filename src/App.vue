<script setup>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css'
  import Header from '@components/Header.vue';
  import Hero from '@components/Hero.vue';
  import Services from '@components/Services.vue';

  onMounted(()=>{
    AOS.init();
  })

  
</script>

<template>
  <div>
    <Header/>
    <Hero/>
    <Services/>
  </div>
</template>

<style scoped>

</style>