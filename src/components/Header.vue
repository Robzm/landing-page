<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const navLinks = ref([
    { href: '#home', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#about', label: 'Acerca de' },
    { href: '#specialist', label: 'Nuestras Especialistas' },
    { href: '#contacto', label: 'Contacto' }
])

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<template>
    <header class="bg-gradient-to-r from-sky-100 to-blue-100 sticky top-0 z-50">
        <div class="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
            <!--logo-->
            <a href="/" class="flex items-center focus:outline-none focus:ring-2 focus:ring-sky-600 rounded">
                <h1 class="text-2xl font-bold text-sky-600">Dental Clinic</h1>
            </a>
            <!--Desktop navigation-->
            <nav class="hidden md:flex space-x-6">
                <a v-for="(link, index) in navLinks" :key="index" :href="link.href" class="text-gray-700 hover:text-sky-600 transition-colors duration-200 focus:outline-none
             focus:ring-2 focus:ring-sky-600 rounded">{{ link.label }}</a>
            </nav>

            <!--button desktop-->
            <div class="hidden md:block">
                <a href="#cita" class="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full transition-colors duration-200
            shadow-md focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2">Reservar Cita</a>
            </div>

            <!--mobile menu button-->

            <button class="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-sky-600 rounded" @click="toggleMenu"
                aria-label="Toggle menu" :aria-expanded="isMenuOpen.toString()" aria-controls="mobile-menu">
                <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
            </button>
        </div>
        <!--mobile menu-->
        <aside v-if="isMenuOpen" id="mobile-menu" class="md:hidden bg-white shadow-lg py-4 px-4 absolute top full left-0 right-0
    z-40">
            <nav>
                <ul class="flex flex-col space-y-4">
                    <li v-for="(link, index) in navLinks" :key="index">
                        <a :href="link.href" class="block text-gray-700 hover:text-sky-600 transition-colors duration-200 py-2 px-2
                        focus:outline-none focus:ring-2 focus:ring-sky-600 rounded" @click="toggleMenu">
                            {{ link.label }}</a>
                    </li>
                    <li>
                        <a href="#citas" class=" block bg-sky-600 hover:bg-sky-700 text-white text-center px-4 py-2 rounded-full transition-colors duration-200
            shadow-md focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2"
                            @click="toggleMenu">Reservar Cita</a>


                    </li>
                </ul>
            </nav>
        </aside>

    </header>
</template>

