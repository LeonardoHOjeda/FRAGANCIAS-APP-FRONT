<template>
  <footer
    class="bg-white rounded-lg shadow-lg m-4 dark:bg-gray-800 my-32 flex justify-around"
  >
    <div class="p-4">
      <p class="text-sm text-gray-500">
        2023 Fragancia Floral y Frutal | Todos los derechos reservados
      </p>
    </div>
    <div class="flex gap-3 font-bold items-center">
      <router-link to="/">Inicio</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style>
a.router-link-exact-active {
  color: rgb(29 78 216);
  border-radius: 0.25rem;
}
</style>
