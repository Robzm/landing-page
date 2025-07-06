<script setup>
import { ref } from 'vue';
const stats = ref([
    { value: '2500+', label: 'Clientes Felices' },
    { value: '15+', label: 'Especialistas' },
    { value: '50+', label: 'Procedimientos' },
    { value: '10+', label: 'años' }
])




</script>

<template>
    <header class="relative overflow-hidden bg-gradient-to-r from-sky-100 to-blue-100 min-h-screen" id="home">
        <article class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center
    gap-10 lg:gap-20">
            <!--Hero section-->
            <section class="w-full lg:w-1/2 text-center lg:text-left">
                <hgroup data-aos="fade-up" data-aos-delay="500">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                        Naturaleza y salud en cada
                        <mark class="text-sky-600 bg-transparent">sonrisa</mark>
                    </h1>
                    <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quo itaque totam
                        reprehenderit ratione. Odio sequi ullam repudiandae laborum, hic, aliquid eaque dicta nihil
                        repellat illo quibusdam! Repellendus, deleniti ipsa.

                    </p>
                </hgroup>
                <!--cta buttons-->
                <nav data-aos="fade-up" data-aos-delay="600"
                    class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
                    <a href="#cita" class="bg-sky-600 hover:bg-sky-700 text-white text-center px-8 py-3 rounded-full transition
            shadow-lg ">Reserva una consulta
                    </a>
                    <a href="#servicios" class="border border-sky-600 text-sky-600 hover:bg-sky-50
            text-center px-8 py-3 rounded-full transition">Explore nuestros Servicios</a>
                </nav>
                <!--section-->
                <aside data-aos="fade-up" data-aos-delay="800" class="py-4">
                    <ul class="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-center">
                        <li v-for="(stat, index) in stats" :key="index" class="w-1/2 sm:w-auto">
                            <strong class="text-2xl font-bold text-sky-600">{{ stat.value }}</strong>
                            <strong class="block text-sm  text-gray-600">{{ stat.label }}</strong>
                        </li>
                    </ul>
                </aside>
            </section>

            <!--hero imagen-->

            <figure data-aos="fade-up" data-aos-delay="700" class="w-full lg:w-1/2 flex justify-center relative">
                <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                    <span class="bg-sky-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 absolute -top-10 -left-10
            opacity-20" aria-hidden="true"></span>
                    <span class="bg-blue-400 rounded-full w-48 h-48 sm:w-64 sm:h-64 absolute -bottom-10 -right-10
            opacity-20"></span>
                    <img src="@assets/hero.png" alt=""
                        class="relative z-10 rounded-full shadow-2xl w-full object-cover aspect-square" width="400"
                        height="400" loading="eager">
                </div>
            </figure>

        </article>
    </header>
</template>

<style scoped></style>