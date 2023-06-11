<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 my-32">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline"
          >Floral y Frutal 2023</a
        >. Todos los derechos reservados.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Inicio</a>
        </li>
        <li>
          <router-view />
          <a href="#" class="mr-4 hover:underline md:mr-6">Nosotros</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Productos</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contacto</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
