<template>
  <header>
    <navbar class="">
      <div class="">
        <div class="flex justify-between h-28">
          <div class="flex items-center">
            <img
              src="https://img.logoipsum.com/250.svg"
              alt="Logo Ipsum"
              class="ml-4"
            />
          </div>
          <div class="flex items-center gap-3">
            <router-link to="/" class="font-bold"> Inicio </router-link>
            <router-link to="/nosotros" class="font-bold">
              Nosotros
            </router-link>
            <router-link to="/productos" class="font-bold">
              Productos
            </router-link>
            <router-link to="/contacto" class="font-bold">
              Contacto
            </router-link>
          </div>
          <div class="flex items-center mr-4">
            <button
              class="text-black bg-white hover:bg-gray-200 transition duration-200 rounded-md px-5 py-2.5 mr-2 mb-2"
            >
              <router-link to="/crear-cuenta" class="custom-link"
                >Crear Cuenta</router-link
              >
            </button>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 rounded-md px-5 py-2.5 mr-2 mb-2"
              :class="{ 'router-link-exact-active': false }"
            >
              <router-link
                to="/iniciar-sesion"
                class="custom-link"
                :class="{ 'router-link-exact-active': false }"
                >Iniciar Sesion</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </navbar>
  </header>
</template>

<script setup lang="ts"></script>

<style>
a.router-link-exact-active {
  color: rgb(29 78 216);
  border-radius: 0.25rem;
}
.custom-link {
  color: inherit;
}
a.router-link-active.custom-link {
  color: inherit;
}
</style>
