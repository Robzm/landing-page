<script setup>
import { ref } from 'vue';
const services = ref([
    {
        icon: 'fa-solid:clinic-medical',
        title: 'facelift Procedures',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto corporis.',
        link: '#facelift'
    },
    {
        icon: 'fa-solid:user-md',
        title: 'brakets',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto corporis.',
        link: '#brakets'
    },
    {
        icon: 'fa-solid:smile',
        title: 'brakets',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto corporis.',
        link: '#brakets'
    },
    {
        icon: 'fa-solid:syringe',
        title: 'brakets',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto corporis.',
        link: '#brakets'
    },
])
</script>

<template>
    <section id="services" class="py-20 overflow-hidden bg-gradient-to-r from-sky-100 to-blue-100"
        aria-labelledby="services-heading">
        <div class="container mx-auto px-4">
            <!--section header-->
            <header data-aos="fade-up" data-aos-delay="500" class="text-center mb-16">
                <h2 id="services-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our <span class="text-sky-600">Premium Services</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam non aliquid quis mollitia?
                </p>
            </header>
            <!--Services-->
            <ul data-aos="fade-up" data-aos-delay="500" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <li v-for="(service, index) in services" :key="index">
                    <article class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300
                hover:traslate-y-[-5px] h-full flex-col">
                        <figure class="mb-6">
                            <icon :icon="service.icon" class="text-4xl text-sky-600" aria-hidden="true" />
                        </figure>
                        <h3 class="text-xl font-bold text-gray-800 mb-3">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 mb-6 flex-grow">
                            {{ service.description }}
                        </p>
                        <a :href="service.link"
                            class="group inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors mt-auto"
                            :aria-label="`learn more about ${service.title}`">
                            <span class="relative">
                                leer más
                                <span
                                    class="absolute left-0 -bottom-0.5 w-full h-0.5 bg-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </span>
                            <Icon icon="weui:arrow-outlined"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </article>
                </li>

            </ul>
            <!--cta section-->
            <footer data-aos="fade-up" data-aos-delay="600" class="mt-20 text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">
                    Listo para una transformacion
                </h3>
                <a href="#cita" class="bg-sky-600 hover:bg-sky-700 text-white text-center px-8 py-3 rounded-full inline-block transition
            shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2">Reserva una consulta ya
                </a>
            </footer>
        </div>

    </section>
</template>

<style scoped></style>